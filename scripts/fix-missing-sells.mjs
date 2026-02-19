import pg from 'pg';
const DB_URL = 'postgresql://neondb_owner:npg_qPyd46hcsrFt@ep-green-sea-aipph0um-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require';
const db = new pg.Client(DB_URL);
await db.connect();

// These were sold via sell-stuck.mjs but never recorded
const missingSells = [
  { symbol: 'TOKACHI', mint: 'GkQttpsFDCgT', sol: 0.0296 },
  { symbol: 'QUANT', mint: 'EoYXdHyoEWHv', sol: 0.0057 },
  { symbol: 'HUMAN3.0', mint: 'BmCpgLyNz817', sol: 0.0223 },
  { symbol: 'Voxel', mint: '4Lm5YhMdaA5a', sol: 0.0062 },
];

// Get matching buys to calc PnL
for (const s of missingSells) {
  const buy = await db.query(`SELECT "amountSol", "tokenMint" FROM rb_trades WHERE action='buy' AND "tokenSymbol"=$1 ORDER BY "createdAt" DESC LIMIT 1`, [s.symbol]);
  if (!buy.rows.length) { console.log(`No buy found for ${s.symbol}`); continue; }
  
  // Check if sell already exists
  const existing = await db.query(`SELECT id FROM rb_trades WHERE action='sell' AND "tokenSymbol"=$1`, [s.symbol]);
  if (existing.rows.length) { console.log(`${s.symbol} already has a sell record`); continue; }

  const buySol = buy.rows[0].amountSol;
  const pnl = Math.round((s.sol - buySol) * 10000) / 10000;
  const pnlPct = Math.round(((s.sol - buySol) / buySol) * 1000) / 10;
  
  await db.query(`INSERT INTO rb_trades (id, action, "tokenMint", "tokenSymbol", "tokenName", "amountSol", "tokenAmount", "bondingProgress", pnl, "pnlPercent", reasoning, "createdAt")
    VALUES ($1, 'sell', $2, $3, $3, $4, '0', null, $5, $6, $7, NOW())`,
    [`tr_fix_${Date.now()}_${s.symbol}`, buy.rows[0].tokenMint, s.symbol, s.sol, pnl, pnlPct, `Emergency sell (stuck position). Got ${s.sol} SOL back.`]);

  // Also add thinking log
  await db.query(`INSERT INTO rb_thinking (id, type, message, "createdAt") VALUES ($1, $2, $3, NOW())`,
    [`t_fix_${Date.now()}_${Math.random().toString(36).slice(2,4)}`, 'result', `SELL: $${s.symbol} for ${s.sol} SOL | PnL: ${pnl >= 0 ? '+' : ''}${pnl} SOL (${pnlPct >= 0 ? '+' : ''}${pnlPct}%)`]);

  console.log(`Recorded sell for $${s.symbol}: ${s.sol} SOL, PnL: ${pnl} (${pnlPct}%)`);
}

await db.end();
console.log('Done');
