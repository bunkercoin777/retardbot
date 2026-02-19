import pg from 'pg';
const db = new pg.Client('postgresql://neondb_owner:npg_qPyd46hcsrFt@ep-green-sea-aipph0um-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require');
await db.connect();

// Ticker, Nazgul, GODL, BabyKimchi — sold via sell-stuck but got 0 SOL back (tokens weren't found or already gone)
// These buys never got tokens (tx confirmed but swap may have failed). Record as losses.
const missing = [
  { symbol: 'Ticker', solBack: 0 },
  { symbol: 'Nazgul', solBack: 0 },
  { symbol: 'GODL', solBack: 0 },
  { symbol: 'BabyKimchi', solBack: 0 },
];

for (const s of missing) {
  const buy = await db.query(`SELECT "amountSol", "tokenMint" FROM rb_trades WHERE action='buy' AND "tokenSymbol"=$1 ORDER BY "createdAt" DESC LIMIT 1`, [s.symbol]);
  if (!buy.rows.length) { console.log(`No buy for ${s.symbol}`); continue; }
  const existing = await db.query(`SELECT id FROM rb_trades WHERE action='sell' AND "tokenSymbol"=$1`, [s.symbol]);
  if (existing.rows.length) { console.log(`${s.symbol} already has sell`); continue; }

  const buySol = buy.rows[0].amountSol;
  const pnl = -buySol;
  const pnlPct = -100;

  await db.query(`INSERT INTO rb_trades (id, action, "tokenMint", "tokenSymbol", "tokenName", "amountSol", "tokenAmount", pnl, "pnlPercent", reasoning, "createdAt")
    VALUES ($1, 'sell', $2, $3, $3, 0, '0', $4, $5, $6, NOW())`,
    [`tr_fix2_${Date.now()}_${s.symbol}`, buy.rows[0].tokenMint, s.symbol, pnl, pnlPct, `Failed position — tokens not received or already sold. Full loss.`]);

  await db.query(`INSERT INTO rb_thinking (id, type, message, "createdAt") VALUES ($1, 'error', $2, NOW())`,
    [`t_fix2_${Date.now()}_${Math.random().toString(36).slice(2,4)}`, `$${s.symbol} position closed as loss. Tokens were not received after buy.`]);

  console.log(`Recorded loss for $${s.symbol}: -${buySol} SOL`);
}

await db.end();
