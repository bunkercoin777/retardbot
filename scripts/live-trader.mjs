import { Connection, Keypair, VersionedTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import pg from 'pg';
import { Buffer } from 'buffer';

const SECRET = 'P8FgpAbIgS/0a/txDvX+GHe5YAlhaR4dGE7yY0wH4Ohq/B8NIX064TyuCUriLh4OZz0v9l60prNcdLmpmsWchA==';
const WALLET = Keypair.fromSecretKey(Buffer.from(SECRET, 'base64'));
const RPC = 'https://mainnet.helius-rpc.com/?api-key=ea9c95f0-ce10-4675-b868-b95eb0b0f15a';
const DB_URL = 'postgresql://neondb_owner:npg_qPyd46hcsrFt@ep-green-sea-aipph0um-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require';
const SOL_MINT = 'So11111111111111111111111111111111111111112';
const connection = new Connection(RPC, 'confirmed');

const TRADE_SIZE = 0.03;          // SOL per trade
const MIN_BONDING = 35;           // minimum bonding %
const MIN_REPLIES = 3;            // minimum reply count (market is thin)
const MIN_ACCEL = 2;              // minimum acceleration %
const SNAPSHOT_GAP = 20000;       // 20s between snapshots
const HOLD_TIME = 45000;          // hold 45s then evaluate
const MAX_HOLD = 120000;          // max hold 2 min
const TP_PCT = 30;                // take profit %
const SL_PCT = -25;               // stop loss %
const CYCLE_DELAY = 25000;        // 25s between scan cycles
const MAX_CYCLES = 999;           // basically infinite

const db = new pg.Client(DB_URL);
await db.connect();

let tradesThisSession = 0;
let pnlThisSession = 0;

async function log(type, message) {
  console.log(`[${type.toUpperCase()}] ${message}`);
  await db.query('INSERT INTO rb_thinking (id, type, message, "createdAt") VALUES ($1, $2, $3, NOW())',
    [`t_${Date.now()}_${Math.random().toString(36).slice(2,6)}`, type, message]).catch(() => {});
}

async function setLive(live, balance) {
  await db.query(`INSERT INTO rb_bot_state (id, wallet, balance, "isLive", "updatedAt") 
    VALUES ('singleton', $1, $2, $3, NOW()) 
    ON CONFLICT (id) DO UPDATE SET "isLive" = $3, balance = $2, "updatedAt" = NOW()`,
    [WALLET.publicKey.toBase58(), balance || 0, live]).catch(() => {});
}

async function recordTrade(action, tokenMint, tokenSymbol, tokenName, amountSol, tokenAmount, bondingProgress, marketCap, replies, pnl, pnlPercent, txSig, reasoning) {
  await db.query(`INSERT INTO rb_trades (id, action, "tokenMint", "tokenSymbol", "tokenName", "amountSol", "tokenAmount", "bondingProgress", "marketCap", replies, pnl, "pnlPercent", "txSignature", reasoning, "createdAt")
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,NOW())`,
    [`tr_${Date.now()}_${Math.random().toString(36).slice(2,4)}`, action, tokenMint, tokenSymbol, tokenName, amountSol, String(tokenAmount), bondingProgress, marketCap, replies, pnl, pnlPercent, txSig, reasoning]).catch(() => {});
}

async function getBalance() {
  const bal = await connection.getBalance(WALLET.publicKey);
  return bal / LAMPORTS_PER_SOL;
}

async function buy(tokenMint, amountSol) {
  const lamports = Math.floor(amountSol * LAMPORTS_PER_SOL);
  const quote = await fetch(`https://lite-api.jup.ag/swap/v1/quote?inputMint=${SOL_MINT}&outputMint=${tokenMint}&amount=${lamports}&slippageBps=2000`).then(r => r.json());
  if (quote.error) { await log('error', `Quote failed: ${quote.error}`); return null; }

  const swapRes = await fetch('https://lite-api.jup.ag/swap/v1/swap', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quoteResponse: quote, userPublicKey: WALLET.publicKey.toBase58(), wrapAndUnwrapSol: true, dynamicComputeUnitLimit: true, prioritizationFeeLamports: 100000 })
  }).then(r => r.json());

  if (!swapRes.swapTransaction) { await log('error', `Swap build failed`); return null; }
  const tx = VersionedTransaction.deserialize(Buffer.from(swapRes.swapTransaction, 'base64'));
  tx.sign([WALLET]);
  const sig = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: true, maxRetries: 3 });
  return { sig, outAmount: quote.outAmount };
}

async function sell(tokenMint, tokenAmount) {
  const quote = await fetch(`https://lite-api.jup.ag/swap/v1/quote?inputMint=${tokenMint}&outputMint=${SOL_MINT}&amount=${tokenAmount}&slippageBps=2500`).then(r => r.json());
  if (quote.error) { await log('error', `Sell quote: ${quote.error}`); return null; }

  const solOut = Number(quote.outAmount) / LAMPORTS_PER_SOL;
  const swapRes = await fetch('https://lite-api.jup.ag/swap/v1/swap', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quoteResponse: quote, userPublicKey: WALLET.publicKey.toBase58(), wrapAndUnwrapSol: true, dynamicComputeUnitLimit: true, prioritizationFeeLamports: 100000 })
  }).then(r => r.json());

  if (!swapRes.swapTransaction) { await log('error', `Sell tx build failed`); return null; }
  const tx = VersionedTransaction.deserialize(Buffer.from(swapRes.swapTransaction, 'base64'));
  tx.sign([WALLET]);
  const sig = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: true, maxRetries: 3 });
  return { sig, solOut };
}

async function getTokenBalance(tokenMint) {
  const res = await fetch(RPC, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'searchAssets', params: { ownerAddress: WALLET.publicKey.toBase58(), tokenType: 'fungible' } })
  }).then(r => r.json());
  const item = res.result?.items?.find(a => a.id === tokenMint);
  return item?.token_info?.balance || '0';
}

async function scanPumpFun() {
  // Scan multiple sorts and pages to find active tokens
  const urls = [
    'https://frontend-api-v3.pump.fun/coins?offset=0&limit=50&sort=bump_order&includeNsfw=false',
    'https://frontend-api-v3.pump.fun/coins?offset=50&limit=50&sort=bump_order&includeNsfw=false',
    'https://frontend-api-v3.pump.fun/coins?offset=100&limit=50&sort=bump_order&includeNsfw=false',
    'https://frontend-api-v3.pump.fun/coins?offset=0&limit=50&sort=last_trade&includeNsfw=false',
    'https://frontend-api-v3.pump.fun/coins?offset=0&limit=50&sort=currently_live&includeNsfw=false',
  ];
  const results = await Promise.all(urls.map(u => fetch(u).then(r => r.json()).catch(() => [])));
  const seen = new Set();
  const all = [];
  for (const batch of results) {
    for (const t of batch) {
      if (seen.has(t.mint)) continue;
      seen.add(t.mint);
      all.push(t);
    }
  }

  return all.map(t => ({
    mint: t.mint, name: t.name, symbol: t.symbol,
    bonding: Math.round((t.real_sol_reserves || 0) / 1e9 / 85 * 1000) / 10,
    replies: t.reply_count || 0,
    mcap: Math.round(t.usd_market_cap || 0),
    created: t.created_timestamp
  })).filter(t => t.bonding >= MIN_BONDING && t.replies >= MIN_REPLIES);
}

async function dualSnapshot() {
  await log('scan', 'Snapshot 1: scanning pump.fun...');
  const snap1 = await scanPumpFun();
  if (!snap1.length) { await log('scan', 'No candidates above threshold.'); return null; }

  await log('scan', `${snap1.length} candidates. Waiting ${SNAPSHOT_GAP/1000}s for snapshot 2...`);
  await new Promise(r => setTimeout(r, SNAPSHOT_GAP));

  await log('scan', 'Snapshot 2: re-scanning...');
  const snap2 = await scanPumpFun();

  // Find accelerating tokens
  const accelerators = [];
  for (const t2 of snap2) {
    const t1 = snap1.find(s => s.mint === t2.mint);
    if (!t1) continue;
    const accel = t2.bonding - t1.bonding;
    if (accel >= MIN_ACCEL) {
      accelerators.push({ ...t2, accel: Math.round(accel * 10) / 10, prevBonding: t1.bonding });
    }
  }

  if (!accelerators.length) {
    // Fall back to highest bonding with most replies
    const best = snap2.sort((a, b) => (b.bonding * 0.6 + b.replies * 0.4) - (a.bonding * 0.6 + a.replies * 0.4))[0];
    if (best && best.bonding >= 50 && best.replies >= 5) {
      await log('analysis', `No acceleration detected. High-conviction fallback: $${best.symbol} at ${best.bonding}% with ${best.replies} replies`);
      return { ...best, accel: 0, prevBonding: best.bonding, strategy: 'high-conviction' };
    }
    return null;
  }

  accelerators.sort((a, b) => b.accel - a.accel);
  const top = accelerators[0];
  await log('analysis', `Acceleration detected: $${top.symbol} moved ${top.prevBonding}% -> ${top.bonding}% (+${top.accel}%) in ${SNAPSHOT_GAP/1000}s`);

  for (const a of accelerators.slice(0, 3)) {
    await log('analysis', `  $${a.symbol}: ${a.prevBonding}% -> ${a.bonding}% (+${a.accel}%) | ${a.replies} replies | $${(a.mcap/1000).toFixed(0)}k`);
  }

  return { ...top, strategy: 'acceleration' };
}

// ---- MAIN LOOP ----
async function main() {
  const bal = await getBalance();
  await setLive(true, bal);
  await log('scan', `Bot online. Wallet: ${WALLET.publicKey.toBase58().slice(0,8)}... Balance: ${bal.toFixed(4)} SOL`);
  await log('scan', `Config: ${TRADE_SIZE} SOL/trade | min ${MIN_BONDING}% bonding | min ${MIN_REPLIES} replies | ${MIN_ACCEL}% accel | TP +${TP_PCT}% | SL ${SL_PCT}%`);

  const tradedMints = new Set(); // don't re-buy same token

  for (let cycle = 1; cycle <= MAX_CYCLES; cycle++) {
    try {
      const bal = await getBalance();
      await setLive(true, bal);

      if (bal < TRADE_SIZE + 0.005) {
        await log('scan', `Balance too low (${bal.toFixed(4)} SOL). Waiting for funds...`);
        await new Promise(r => setTimeout(r, 60000));
        continue;
      }

      await log('scan', `--- Cycle ${cycle} | Balance: ${bal.toFixed(4)} SOL | Trades: ${tradesThisSession} | Session PnL: ${pnlThisSession >= 0 ? '+' : ''}${pnlThisSession.toFixed(4)} SOL ---`);

      const target = await dualSnapshot();
      if (!target) {
        await log('scan', `No trade opportunity. Waiting ${CYCLE_DELAY/1000}s...`);
        await new Promise(r => setTimeout(r, CYCLE_DELAY));
        continue;
      }

      if (tradedMints.has(target.mint)) {
        await log('decision', `Already traded $${target.symbol} this session. Skipping.`);
        await new Promise(r => setTimeout(r, CYCLE_DELAY));
        continue;
      }

      // Risk assessment
      const riskScore = (target.bonding >= 60 ? 2 : target.bonding >= 40 ? 1 : 0) + (target.replies >= 8 ? 2 : target.replies >= 4 ? 1 : 0) + (target.accel >= 3 ? 2 : target.strategy === 'high-conviction' ? 1 : 0);
      const riskLabel = riskScore >= 4 ? 'LOW' : riskScore >= 2 ? 'MEDIUM' : 'HIGH';
      await log('decision', `Risk: ${riskLabel} (score ${riskScore}/6) | bonding=${target.bonding}% replies=${target.replies} accel=+${target.accel}%`);

      if (riskScore < 1) {
        await log('decision', `Risk too high. Skipping $${target.symbol}.`);
        await new Promise(r => setTimeout(r, CYCLE_DELAY));
        continue;
      }

      // Execute buy
      await log('execute', `BUYING $${target.symbol} -- ${TRADE_SIZE} SOL at ${target.bonding}% bonding`);
      const buyResult = await buy(target.mint, TRADE_SIZE);
      if (!buyResult) {
        await log('error', `Buy failed for $${target.symbol}. Moving on.`);
        await new Promise(r => setTimeout(r, CYCLE_DELAY));
        continue;
      }

      tradedMints.add(target.mint);
      tradesThisSession++;
      await log('result', `BUY CONFIRMED: $${target.symbol} | TX: ${buyResult.sig.slice(0,12)}...`);
      await recordTrade('buy', target.mint, target.symbol, target.name, TRADE_SIZE, buyResult.outAmount,
        target.bonding, target.mcap, target.replies, null, null, buyResult.sig,
        `${target.strategy}: ${target.bonding}% bonding (+${target.accel}% accel), ${target.replies} replies. Risk: ${riskLabel}`);

      // Monitor position
      await log('analysis', `Monitoring $${target.symbol}... TP: +${TP_PCT}% | SL: ${SL_PCT}%`);
      const holdStart = Date.now();
      let sold = false;

      while (Date.now() - holdStart < MAX_HOLD && !sold) {
        await new Promise(r => setTimeout(r, 10000)); // check every 10s

        // Get current price via Jupiter quote
        const checkLamports = Math.floor(TRADE_SIZE * LAMPORTS_PER_SOL);
        const priceQuote = await fetch(`https://lite-api.jup.ag/swap/v1/quote?inputMint=${SOL_MINT}&outputMint=${target.mint}&amount=${checkLamports}&slippageBps=500`).then(r => r.json()).catch(() => null);

        if (!priceQuote || priceQuote.error) continue;

        // Compare: how much SOL would we get if we sold now?
        const tokenBal = await getTokenBalance(target.mint);
        if (!tokenBal || tokenBal === '0') {
          await log('analysis', `No tokens found. May have been auto-sold or transferred.`);
          sold = true;
          break;
        }

        const sellQuote = await fetch(`https://lite-api.jup.ag/swap/v1/quote?inputMint=${target.mint}&outputMint=${SOL_MINT}&amount=${tokenBal}&slippageBps=500`).then(r => r.json()).catch(() => null);
        if (!sellQuote || sellQuote.error) continue;

        const currentValue = Number(sellQuote.outAmount) / LAMPORTS_PER_SOL;
        const unrealizedPnl = ((currentValue - TRADE_SIZE) / TRADE_SIZE) * 100;
        const elapsed = Math.round((Date.now() - holdStart) / 1000);

        await log('analysis', `$${target.symbol} ${elapsed}s: worth ~${currentValue.toFixed(4)} SOL (${unrealizedPnl >= 0 ? '+' : ''}${unrealizedPnl.toFixed(1)}%)`);

        if (unrealizedPnl >= TP_PCT) {
          await log('decision', `TAKE PROFIT triggered at +${unrealizedPnl.toFixed(1)}%`);
          const sellResult = await sell(target.mint, tokenBal);
          if (sellResult) {
            const pnl = sellResult.solOut - TRADE_SIZE;
            const pnlPct = (pnl / TRADE_SIZE) * 100;
            pnlThisSession += pnl;
            await log('result', `SELL: $${target.symbol} for ${sellResult.solOut.toFixed(4)} SOL | PnL: ${pnl >= 0 ? '+' : ''}${pnl.toFixed(4)} SOL (${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(1)}%)`);
            await recordTrade('sell', target.mint, target.symbol, target.name, sellResult.solOut, tokenBal,
              target.bonding, target.mcap, target.replies, Math.round(pnl * 10000) / 10000, Math.round(pnlPct * 10) / 10, sellResult.sig,
              `TP hit: +${pnlPct.toFixed(1)}%. Held ${elapsed}s.`);

            if (pnl > 0) {
              const rule = `$${target.symbol} at ${target.bonding}% bonding with ${target.replies} replies, accel +${target.accel}% = +${pnlPct.toFixed(1)}% profit in ${elapsed}s. ${target.strategy} strategy works here.`;
              await db.query('INSERT INTO rb_strategies (id, rule, source, "createdAt") VALUES ($1, $2, $3, NOW())',
                [`s_${Date.now()}`, rule, `$${target.symbol} +${pnlPct.toFixed(1)}%`]);
              await log('learn', `NEW RULE: ${rule}`);
            }
          }
          sold = true;
        } else if (unrealizedPnl <= SL_PCT) {
          await log('decision', `STOP LOSS triggered at ${unrealizedPnl.toFixed(1)}%`);
          const sellResult = await sell(target.mint, tokenBal);
          if (sellResult) {
            const pnl = sellResult.solOut - TRADE_SIZE;
            const pnlPct = (pnl / TRADE_SIZE) * 100;
            pnlThisSession += pnl;
            await log('result', `SELL: $${target.symbol} for ${sellResult.solOut.toFixed(4)} SOL | PnL: ${pnl >= 0 ? '+' : ''}${pnl.toFixed(4)} SOL (${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(1)}%)`);
            await recordTrade('sell', target.mint, target.symbol, target.name, sellResult.solOut, tokenBal,
              target.bonding, target.mcap, target.replies, Math.round(pnl * 10000) / 10000, Math.round(pnlPct * 10) / 10, sellResult.sig,
              `SL hit: ${pnlPct.toFixed(1)}%. Held ${elapsed}s. Lesson: ${target.replies < 10 ? 'low reply count was a warning' : 'momentum faded'}.`);
          }
          sold = true;
        }
      }

      // Force sell if still holding after MAX_HOLD
      if (!sold) {
        await log('decision', `Max hold time (${MAX_HOLD/1000}s) reached. Force selling $${target.symbol}.`);
        const tokenBal = await getTokenBalance(target.mint);
        if (tokenBal && tokenBal !== '0') {
          const sellResult = await sell(target.mint, tokenBal);
          if (sellResult) {
            const pnl = sellResult.solOut - TRADE_SIZE;
            const pnlPct = (pnl / TRADE_SIZE) * 100;
            pnlThisSession += pnl;
            await log('result', `FORCE SELL: $${target.symbol} for ${sellResult.solOut.toFixed(4)} SOL | PnL: ${pnl >= 0 ? '+' : ''}${pnl.toFixed(4)} SOL (${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(1)}%)`);
            await recordTrade('sell', target.mint, target.symbol, target.name, sellResult.solOut, tokenBal,
              target.bonding, target.mcap, target.replies, Math.round(pnl * 10000) / 10000, Math.round(pnlPct * 10) / 10, sellResult.sig,
              `Time exit after ${MAX_HOLD/1000}s. PnL: ${pnlPct.toFixed(1)}%.`);
          }
        }
      }

      // Short pause before next cycle
      await new Promise(r => setTimeout(r, 10000));

    } catch (err) {
      await log('error', `Cycle ${cycle} error: ${err.message}`);
      await new Promise(r => setTimeout(r, 15000));
    }
  }

  await log('scan', `Session complete. ${tradesThisSession} trades, PnL: ${pnlThisSession >= 0 ? '+' : ''}${pnlThisSession.toFixed(4)} SOL`);
  await setLive(false, await getBalance());
  await db.end();
}

main().catch(async e => {
  console.error('Fatal:', e.message);
  try { await log('error', `Fatal: ${e.message}`); } catch {}
  try { await setLive(false, 0); } catch {}
  try { await db.end(); } catch {}
});
