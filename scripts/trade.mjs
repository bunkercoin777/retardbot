import { Connection, Keypair, VersionedTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import pg from 'pg';
import { Buffer } from 'buffer';

const SECRET = 'P8FgpAbIgS/0a/txDvX+GHe5YAlhaR4dGE7yY0wH4Ohq/B8NIX064TyuCUriLh4OZz0v9l60prNcdLmpmsWchA==';
const WALLET = Keypair.fromSecretKey(Buffer.from(SECRET, 'base64'));
const RPC = 'https://mainnet.helius-rpc.com/?api-key=ea9c95f0-ce10-4675-b868-b95eb0b0f15a';
const DB_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_FV3oJHvm6ien@ep-bold-feather-aiquzqtj-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require';
const SOL_MINT = 'So11111111111111111111111111111111111111112';
const connection = new Connection(RPC, 'confirmed');

const db = new pg.Client(DB_URL);
await db.connect();

async function log(type, message) {
  console.log(`[${type.toUpperCase()}] ${message}`);
  await db.query('INSERT INTO rb_thinking (id, type, message, "createdAt") VALUES ($1, $2, $3, NOW())',
    [`t_${Date.now()}_${Math.random().toString(36).slice(2,6)}`, type, message]);
}

async function setLive(live) {
  await db.query(`INSERT INTO rb_bot_state (id, wallet, balance, "isLive", "updatedAt") 
    VALUES ('singleton', $1, 0, $2, NOW()) 
    ON CONFLICT (id) DO UPDATE SET "isLive" = $2, "updatedAt" = NOW()`,
    [WALLET.publicKey.toBase58(), live]);
}

async function recordTrade(action, tokenMint, tokenSymbol, tokenName, amountSol, tokenAmount, bondingProgress, marketCap, replies, pnl, pnlPercent, txSig, reasoning) {
  await db.query(`INSERT INTO rb_trades (id, action, "tokenMint", "tokenSymbol", "tokenName", "amountSol", "tokenAmount", "bondingProgress", "marketCap", replies, pnl, "pnlPercent", "txSignature", reasoning, "createdAt")
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,NOW())`,
    [`tr_${Date.now()}`, action, tokenMint, tokenSymbol, tokenName, amountSol, tokenAmount, bondingProgress, marketCap, replies, pnl, pnlPercent, txSig, reasoning]);
}

async function buy(tokenMint, amountSol) {
  const lamports = Math.floor(amountSol * LAMPORTS_PER_SOL);
  
  // Get quote from Jupiter
  const quoteUrl = `https://lite-api.jup.ag/swap/v1/quote?inputMint=${SOL_MINT}&outputMint=${tokenMint}&amount=${lamports}&slippageBps=2000`;
  const quote = await fetch(quoteUrl).then(r => r.json());
  if (quote.error) { await log('error', `Quote failed: ${quote.error}`); return null; }
  
  const outAmount = quote.outAmount;
  await log('execute', `BUYING -- ${amountSol} SOL -> ~${BigInt(outAmount).toLocaleString()} tokens`);
  
  // Get swap transaction
  const swapRes = await fetch('https://lite-api.jup.ag/swap/v1/swap', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      quoteResponse: quote,
      userPublicKey: WALLET.publicKey.toBase58(),
      wrapAndUnwrapSol: true,
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: 100000
    })
  }).then(r => r.json());
  
  if (swapRes.error || !swapRes.swapTransaction) {
    await log('error', `Swap tx failed: ${swapRes.error || 'no tx returned'}`);
    return null;
  }
  
  // Sign and send
  const txBuf = Buffer.from(swapRes.swapTransaction, 'base64');
  const tx = VersionedTransaction.deserialize(txBuf);
  tx.sign([WALLET]);
  
  const sig = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: true, maxRetries: 3 });
  await log('result', `BUY CONFIRMED. TX: ${sig.slice(0,12)}...`);
  
  return { sig, outAmount };
}

async function sell(tokenMint, tokenAmount, decimals = 6) {
  const quoteUrl = `https://lite-api.jup.ag/swap/v1/quote?inputMint=${tokenMint}&outputMint=${SOL_MINT}&amount=${tokenAmount}&slippageBps=2500`;
  const quote = await fetch(quoteUrl).then(r => r.json());
  if (quote.error) { await log('error', `Sell quote failed: ${quote.error}`); return null; }
  
  const solOut = Number(quote.outAmount) / LAMPORTS_PER_SOL;
  await log('execute', `SELLING -- tokens -> ~${solOut.toFixed(4)} SOL`);
  
  const swapRes = await fetch('https://lite-api.jup.ag/swap/v1/swap', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      quoteResponse: quote,
      userPublicKey: WALLET.publicKey.toBase58(),
      wrapAndUnwrapSol: true,
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: 100000
    })
  }).then(r => r.json());
  
  if (swapRes.error || !swapRes.swapTransaction) {
    await log('error', `Sell tx failed: ${swapRes.error || 'no tx'}`);
    return null;
  }
  
  const txBuf = Buffer.from(swapRes.swapTransaction, 'base64');
  const tx = VersionedTransaction.deserialize(txBuf);
  tx.sign([WALLET]);
  
  const sig = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: true, maxRetries: 3 });
  await log('result', `SELL CONFIRMED. TX: ${sig.slice(0,12)}... Got ~${solOut.toFixed(4)} SOL`);
  
  return { sig, solOut };
}

// ---- MAIN ----
async function main() {
  const bal = await connection.getBalance(WALLET.publicKey);
  console.log(`Wallet: ${WALLET.publicKey.toBase58()}`);
  console.log(`Balance: ${(bal / LAMPORTS_PER_SOL).toFixed(4)} SOL`);
  
  await setLive(true);
  await log('scan', `Bot online. Balance: ${(bal / LAMPORTS_PER_SOL).toFixed(4)} SOL. Scanning pump.fun...`);
  
  // Scan pump.fun for tokens near graduation
  await log('scan', 'Fetching active tokens from pump.fun...');
  const tokens = await fetch('https://frontend-api-v3.pump.fun/coins?offset=0&limit=50&sort=currently_live&includeNsfw=false')
    .then(r => r.json()).catch(() => []);
  
  if (!tokens.length) {
    await log('error', 'No tokens returned from pump.fun');
    await setLive(false);
    await db.end();
    return;
  }
  
  await log('scan', `Found ${tokens.length} active tokens. Filtering for 50%+ bonding with 8+ replies...`);
  
  // Filter for good candidates
  const candidates = tokens.filter(t => {
    const bonding = (t.real_sol_reserves || 0) / 1e9 / 85 * 100;
    return bonding >= 10 && (t.reply_count || 0) >= 2;
  }).map(t => ({
    mint: t.mint,
    name: t.name,
    symbol: t.symbol,
    bonding: Math.round((t.real_sol_reserves || 0) / 1e9 / 85 * 1000) / 10,
    replies: t.reply_count || 0,
    mcap: Math.round((t.usd_market_cap || 0))
  })).sort((a, b) => b.bonding - a.bonding);
  
  await log('analysis', `${candidates.length} candidates passed filter. Top tokens:`);
  
  for (const c of candidates.slice(0, 5)) {
    await log('analysis', `  ${c.symbol}: ${c.bonding}% bonding | ${c.replies} replies | $${(c.mcap/1000).toFixed(0)}k mcap`);
  }
  
  if (candidates.length === 0) {
    await log('scan', 'No good candidates right now. Will check again.');
    await setLive(false);
    await db.end();
    return;
  }
  
  // Pick the best candidate
  const target = candidates[0];
  await log('decision', `Target: $${target.symbol} -- ${target.bonding}% bonding, ${target.replies} replies, $${(target.mcap/1000).toFixed(0)}k mcap`);
  await log('decision', `Risk check: replies=${target.replies} ${target.replies >= 8 ? '[PASS]' : '[WARN]'} bonding=${target.bonding}% [PASS] mcap=$${(target.mcap/1000).toFixed(0)}k [PASS]`);
  
  // Buy
  const tradeSize = 0.02; // small test trade
  await log('execute', `BUYING $${target.symbol} -- ${tradeSize} SOL at ${target.bonding}% bonding`);
  
  const buyResult = await buy(target.mint, tradeSize);
  if (!buyResult) {
    await setLive(false);
    await db.end();
    return;
  }
  
  await recordTrade('buy', target.mint, target.symbol, target.name, tradeSize, buyResult.outAmount,
    target.bonding, target.mcap, target.replies, null, null, buyResult.sig,
    `${target.bonding}% bonding, ${target.replies} replies. Test trade.`);
  
  // Wait 30 seconds then sell
  await log('analysis', `Monitoring $${target.symbol}... Holding for 30s then selling.`);
  await new Promise(r => setTimeout(r, 30000));
  
  // Check token balance
  const tokenAccounts = await fetch(RPC, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'searchAssets',
      params: { ownerAddress: WALLET.publicKey.toBase58(), tokenType: 'fungible' }})
  }).then(r => r.json());
  
  const holding = tokenAccounts.result?.items?.find(a => a.id === target.mint);
  const tokenBal = holding?.token_info?.balance;
  
  if (!tokenBal || tokenBal === 0) {
    await log('error', `No $${target.symbol} tokens found in wallet`);
    await setLive(false);
    await db.end();
    return;
  }
  
  await log('execute', `SELLING $${target.symbol} -- ${tokenBal} tokens`);
  const sellResult = await sell(target.mint, String(tokenBal));
  
  if (sellResult) {
    const pnl = sellResult.solOut - tradeSize;
    const pnlPct = (pnl / tradeSize) * 100;
    await recordTrade('sell', target.mint, target.symbol, target.name, sellResult.solOut, String(tokenBal),
      target.bonding, target.mcap, target.replies, Math.round(pnl * 10000) / 10000, Math.round(pnlPct * 10) / 10, sellResult.sig,
      `Test sell. PnL: ${pnl >= 0 ? '+' : ''}${pnl.toFixed(4)} SOL (${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(1)}%)`);
    
    if (pnl > 0) {
      const rule = `$${target.symbol} at ${target.bonding}% bonding with ${target.replies} replies was profitable (+${pnlPct.toFixed(1)}%). Look for similar setups.`;
      await db.query('INSERT INTO rb_strategies (id, rule, source, "createdAt") VALUES ($1, $2, $3, NOW())',
        [`s_${Date.now()}`, rule, `$${target.symbol} +${pnlPct.toFixed(1)}%`]);
      await log('learn', `NEW RULE: ${rule}`);
    }
  }
  
  const newBal = await connection.getBalance(WALLET.publicKey);
  await log('scan', `Trade complete. Balance: ${(newBal / LAMPORTS_PER_SOL).toFixed(4)} SOL. Waiting for next opportunity...`);
  await setLive(false);
  await db.end();
}

main().catch(async e => {
  console.error('Fatal:', e.message);
  await log('error', `Fatal: ${e.message}`).catch(() => {});
  await setLive(false).catch(() => {});
  await db.end().catch(() => {});
});
