import { Connection, Keypair, VersionedTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Buffer } from 'buffer';

const SECRET = 'P8FgpAbIgS/0a/txDvX+GHe5YAlhaR4dGE7yY0wH4Ohq/B8NIX064TyuCUriLh4OZz0v9l60prNcdLmpmsWchA==';
const WALLET = Keypair.fromSecretKey(Buffer.from(SECRET, 'base64'));
const RPC = 'https://mainnet.helius-rpc.com/?api-key=ea9c95f0-ce10-4675-b868-b95eb0b0f15a';
const SOL_MINT = 'So11111111111111111111111111111111111111112';
const connection = new Connection(RPC, 'confirmed');

// Find all token holdings
const res = await fetch(RPC, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'searchAssets',
    params: { ownerAddress: WALLET.publicKey.toBase58(), tokenType: 'fungible' } })
}).then(r => r.json());

const holdings = res.result?.items?.filter(a => a.token_info?.balance > 0) || [];
console.log(`Found ${holdings.length} token holdings`);

for (const h of holdings) {
  const mint = h.id;
  const bal = String(h.token_info.balance);
  const symbol = h.token_info?.symbol || h.content?.metadata?.symbol || mint.slice(0,8);
  console.log(`Selling $${symbol}: ${bal} tokens (mint: ${mint.slice(0,12)}...)`);

  try {
    const quote = await fetch(`https://lite-api.jup.ag/swap/v1/quote?inputMint=${mint}&outputMint=${SOL_MINT}&amount=${bal}&slippageBps=2500`).then(r => r.json());
    if (quote.error) { console.log(`  Quote error: ${quote.error}`); continue; }

    const solOut = (Number(quote.outAmount) / LAMPORTS_PER_SOL).toFixed(4);
    console.log(`  Quote: ~${solOut} SOL`);

    const swapRes = await fetch('https://lite-api.jup.ag/swap/v1/swap', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quoteResponse: quote, userPublicKey: WALLET.publicKey.toBase58(), wrapAndUnwrapSol: true, dynamicComputeUnitLimit: true, prioritizationFeeLamports: 100000 })
    }).then(r => r.json());

    if (!swapRes.swapTransaction) { console.log(`  Swap build failed`); continue; }
    const tx = VersionedTransaction.deserialize(Buffer.from(swapRes.swapTransaction, 'base64'));
    tx.sign([WALLET]);
    const sig = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: true, maxRetries: 3 });
    console.log(`  SOLD! TX: ${sig}`);
    console.log(`  Got ~${solOut} SOL`);
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
  await new Promise(r => setTimeout(r, 2000));
}

const finalBal = await connection.getBalance(WALLET.publicKey);
console.log(`\nFinal balance: ${(finalBal / LAMPORTS_PER_SOL).toFixed(4)} SOL`);
