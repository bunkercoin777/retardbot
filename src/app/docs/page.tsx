'use client'
import { useState } from 'react'

type Section = 'quickstart' | 'api' | 'websocket' | 'copytrade' | 'examples'

const API_BASE = 'https://retardbot.fun/api'

export default function Docs() {
  const [section, setSection] = useState<Section>('quickstart')

  return (
    <div style={{ minHeight: '100vh', background: '#0a0b0f' }}>
      {/* Nav */}
      <nav style={{ 
        borderBottom: '1px solid #1a1c28', padding: '10px 20px',
        display: 'flex', alignItems: 'center', gap: 10,
        position: 'sticky', top: 0, background: '#0a0b0f', zIndex: 50
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/icon.jpg" alt="retardbot" style={{ width: 28, height: 28, borderRadius: 6 }} />
          <span style={{ fontSize: 16, fontWeight: 800, color: '#00e676' }}>retardbot</span>
        </a>
        <span style={{ color: '#3a3d52', fontSize: 13 }}>/ docs</span>
      </nav>

      <div style={{ display: 'flex', maxWidth: 1200, margin: '0 auto' }}>
        {/* Sidebar */}
        <div style={{ 
          width: 220, minHeight: 'calc(100vh - 52px)', borderRight: '1px solid #1a1c28',
          padding: '20px 0', flexShrink: 0
        }}>
          {[
            { id: 'quickstart' as Section, label: 'Quick Start' },
            { id: 'api' as Section, label: 'REST API' },
            { id: 'websocket' as Section, label: 'WebSocket Feed' },
            { id: 'copytrade' as Section, label: 'Copy Trading' },
            { id: 'examples' as Section, label: 'Code Examples' },
          ].map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '8px 20px', background: 'none', border: 'none',
              color: section === s.id ? '#00e676' : '#5a5e72',
              fontFamily: 'monospace', fontSize: 13, fontWeight: section === s.id ? 700 : 400,
              cursor: 'pointer', borderLeft: section === s.id ? '2px solid #00e676' : '2px solid transparent'
            }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: '32px 40px', fontFamily: 'monospace', maxWidth: 800 }}>
          
          {section === 'quickstart' && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, color: '#00e676' }}>Quick Start</h1>
              <p style={{ color: '#5a5e72', marginBottom: 32, fontSize: 14 }}>Get your agent copy trading retardbot in under 5 minutes.</p>

              <Step n={1} title="Get an API Key">
                <p style={{ color: '#8b8fa3', marginBottom: 12 }}>Request an API key to access the retardbot feed and copy trade endpoints.</p>
                <Code>{`curl -X POST ${API_BASE}/keys \\
  -H "Content-Type: application/json" \\
  -d '{"wallet": "YOUR_SOLANA_WALLET"}'`}</Code>
                <p style={{ color: '#5a5e72', marginTop: 8, fontSize: 12 }}>Response includes your API key and webhook secret.</p>
              </Step>

              <Step n={2} title="Subscribe to Live Trades">
                <p style={{ color: '#8b8fa3', marginBottom: 12 }}>Connect to the WebSocket to receive trades the instant they happen.</p>
                <Code>{`const ws = new WebSocket('wss://retardbot.fun/ws/trades');
ws.onopen = () => ws.send(JSON.stringify({ 
  type: 'auth', apiKey: 'YOUR_API_KEY' 
}));
ws.onmessage = (e) => {
  const trade = JSON.parse(e.data);
  console.log(trade);
  // { type: "trade", action: "buy", token: "...", amount: 0.15, ... }
};`}</Code>
              </Step>

              <Step n={3} title="Enable Copy Trading">
                <p style={{ color: '#8b8fa3', marginBottom: 12 }}>Tell retardbot to mirror trades to your wallet automatically.</p>
                <Code>{`curl -X POST ${API_BASE}/copy/enable \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "wallet": "YOUR_SOLANA_WALLET",
    "tradeSize": 0.1,
    "maxPositions": 3,
    "autoSell": true
  }'`}</Code>
              </Step>

              <Step n={4} title="Watch the Terminal">
                <p style={{ color: '#8b8fa3', marginBottom: 12 }}>
                  The <a href="/" style={{ color: '#00e676' }}>live terminal</a> shows every thought the bot has in real-time — 
                  scanning, analysis, decisions, executions. Stream it on pump.fun for your community.
                </p>
              </Step>

              <Step n={5} title="Or Use Webhooks">
                <p style={{ color: '#8b8fa3', marginBottom: 12 }}>If you prefer webhooks over WebSocket:</p>
                <Code>{`curl -X POST ${API_BASE}/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-agent.com/retardbot-trades",
    "events": ["trade.buy", "trade.sell", "thinking.update"]
  }'`}</Code>
              </Step>
            </div>
          )}

          {section === 'api' && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, color: '#00e676' }}>REST API</h1>
              <p style={{ color: '#5a5e72', marginBottom: 32, fontSize: 14 }}>All endpoints. Base URL: {API_BASE}</p>

              <Endpoint method="GET" path="/trades" desc="Get all trades">
                <Code>{`// Response
{
  "trades": [
    {
      "id": "abc123",
      "action": "buy",
      "token": "So1ABC...pump",
      "symbol": "BASED",
      "amountSol": 0.15,
      "tokenAmount": "245891002",
      "bondingProgress": 88.2,
      "marketCap": 52000,
      "replies": 34,
      "pnl": null,
      "timestamp": 1739920000000,
      "txSignature": "4xR7...mK9q"
    }
  ],
  "total": 36
}`}</Code>
              </Endpoint>

              <Endpoint method="GET" path="/trades/live" desc="Current open position (if any)">
                <Code>{`// Response (position open)
{
  "hasPosition": true,
  "token": "So1ABC...pump",
  "symbol": "BASED",
  "entryPrice": 0.15,
  "currentValue": 0.193,
  "pnlPercent": 28.7,
  "holdTime": "2m 14s"
}

// Response (no position)
{ "hasPosition": false }`}</Code>
              </Endpoint>

              <Endpoint method="GET" path="/stats" desc="Bot performance stats">
                <Code>{`{
  "wallet": "6CjT...MSXB",
  "balance": 1.51,
  "totalTrades": 36,
  "wins": 15,
  "losses": 21,
  "winRate": 41.7,
  "totalPnl": 0.0843,
  "biggestWin": 94.4,
  "biggestLoss": -87.0,
  "avgHoldTime": "4m 32s",
  "isLive": true
}`}</Code>
              </Endpoint>

              <Endpoint method="GET" path="/thinking" desc="Latest thinking logs (terminal feed)">
                <Code>{`// Query params: ?limit=50&since=1739920000000
{
  "logs": [
    {
      "id": "t_001",
      "timestamp": 1739920000000,
      "type": "scan",
      "message": "Scanning pump.fun... 847 tokens active..."
    },
    {
      "id": "t_002",
      "timestamp": 1739920010000,
      "type": "analysis",
      "message": "BASED: 81→88% bonding (+8.6% in 20s)..."
    }
  ]
}`}</Code>
              </Endpoint>

              <Endpoint method="GET" path="/strategy" desc="Learned strategies from winning trades">
                <Code>{`{
  "strategies": [
    {
      "id": "s_001",
      "rule": "Tokens with 8%+ acceleration at 85%+ bonding and 30+ replies have 78% graduation rate",
      "source": "BASED +31% trade",
      "addedAt": 1739920000000
    }
  ],
  "totalWins": 15
}`}</Code>
              </Endpoint>

              <Endpoint method="POST" path="/copy/enable" desc="Enable copy trading for your wallet">
                <Code>{`// Request
{
  "wallet": "YOUR_SOLANA_WALLET",
  "tradeSize": 0.1,       // SOL per trade
  "maxPositions": 3,       // max concurrent positions
  "autoSell": true,        // auto-sell when bot sells
  "slippage": 20           // slippage tolerance (%)
}

// Response
{
  "enabled": true,
  "copyId": "cp_abc123",
  "wallet": "YOUR_SOLANA_WALLET",
  "settings": { ... }
}`}</Code>
              </Endpoint>

              <Endpoint method="POST" path="/copy/disable" desc="Stop copy trading">
                <Code>{`// Request
{ "copyId": "cp_abc123" }

// Response  
{ "disabled": true, "openPositions": 0 }`}</Code>
              </Endpoint>

              <Endpoint method="GET" path="/copy/status" desc="Your copy trade status and PnL">
                <Code>{`{
  "active": true,
  "tradeSize": 0.1,
  "totalCopied": 12,
  "pnl": 0.034,
  "openPositions": [
    { "token": "BASED", "entry": 0.1, "current": 0.128 }
  ]
}`}</Code>
              </Endpoint>

              <Endpoint method="POST" path="/keys" desc="Generate API key">
                <Code>{`// Request
{ "wallet": "YOUR_SOLANA_WALLET" }

// Response
{
  "apiKey": "rb_live_abc123...",
  "webhookSecret": "whsec_xyz...",
  "createdAt": 1739920000000
}`}</Code>
              </Endpoint>
            </div>
          )}

          {section === 'websocket' && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, color: '#00e676' }}>WebSocket Feed</h1>
              <p style={{ color: '#5a5e72', marginBottom: 32, fontSize: 14 }}>Real-time feed of bot thinking and trades. Perfect for live terminals.</p>

              <h3 style={{ color: '#fff', fontSize: 16, marginBottom: 12 }}>Connection</h3>
              <Code>{`wss://retardbot.fun/ws/trades`}</Code>

              <h3 style={{ color: '#fff', fontSize: 16, marginTop: 24, marginBottom: 12 }}>Authentication</h3>
              <Code>{`// Send after connecting
{ "type": "auth", "apiKey": "rb_live_abc123..." }`}</Code>

              <h3 style={{ color: '#fff', fontSize: 16, marginTop: 24, marginBottom: 12 }}>Message Types</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
                <MsgType name="thinking" desc="Bot's internal reasoning — stream this in your terminal">
                  <Code>{`{
  "type": "thinking",
  "logType": "scan|analysis|decision|execute|result|learn|error",
  "message": "Scanning pump.fun... 847 tokens active...",
  "timestamp": 1739920000000
}`}</Code>
                </MsgType>

                <MsgType name="trade" desc="Trade executed — buy or sell">
                  <Code>{`{
  "type": "trade",
  "action": "buy",
  "token": "So1ABC...pump",
  "symbol": "BASED",
  "amountSol": 0.15,
  "tokenAmount": "245891002",
  "bondingProgress": 88.2,
  "marketCap": 52000,
  "replies": 34,
  "txSignature": "4xR7...mK9q",
  "timestamp": 1739920000000
}`}</Code>
                </MsgType>

                <MsgType name="position_update" desc="Current position PnL update (every 5s when in a trade)">
                  <Code>{`{
  "type": "position_update",
  "symbol": "BASED",
  "entryPrice": 0.15,
  "currentValue": 0.193,
  "pnlPercent": 28.7,
  "holdTime": "2m 14s"
}`}</Code>
                </MsgType>

                <MsgType name="strategy_learned" desc="New strategy added from a winning trade">
                  <Code>{`{
  "type": "strategy_learned",
  "rule": "Tokens with 8%+ acceleration at 85%+ bonding...",
  "source": "BASED +31% trade",
  "totalStrategies": 8
}`}</Code>
                </MsgType>
              </div>
            </div>
          )}

          {section === 'copytrade' && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, color: '#00e676' }}>Copy Trading</h1>
              <p style={{ color: '#5a5e72', marginBottom: 32, fontSize: 14 }}>Mirror every retardbot trade automatically.</p>

              <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>How It Works</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  { n: '1', text: 'retardbot scans pump.fun 24/7 looking for opportunities' },
                  { n: '2', text: 'When it finds a trade, it executes with its own wallet first' },
                  { n: '3', text: 'Instantly after, it fires a copy trade for all followers' },
                  { n: '4', text: 'Your wallet buys the same token at your configured size' },
                  { n: '5', text: 'When retardbot sells, your wallet auto-sells too' },
                  { n: '6', text: 'Every winning trade teaches the bot a new strategy — it gets smarter over time' },
                ].map(s => (
                  <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ 
                      minWidth: 28, height: 28, borderRadius: '50%',
                      background: '#00e676', color: '#000', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13
                    }}>{s.n}</div>
                    <span style={{ color: '#8b8fa3', fontSize: 14 }}>{s.text}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>For AI Agents</h3>
              <p style={{ color: '#8b8fa3', marginBottom: 16, fontSize: 14, lineHeight: 1.6 }}>
                AI agents can copy trade programmatically via the API or WebSocket. Subscribe to the trade feed 
                and execute your own trades when retardbot signals.
              </p>
              <Code>{`// Agent copy trade flow
const ws = new WebSocket('wss://retardbot.fun/ws/trades');

ws.onmessage = async (e) => {
  const msg = JSON.parse(e.data);
  
  if (msg.type === 'trade' && msg.action === 'buy') {
    // retardbot bought something — mirror it
    await executeSwap({
      tokenMint: msg.token,
      amountSol: MY_TRADE_SIZE,
      slippage: 20
    });
    console.log(\`Copied BUY: \${msg.symbol} for \${MY_TRADE_SIZE} SOL\`);
  }
  
  if (msg.type === 'trade' && msg.action === 'sell') {
    // retardbot sold — sell our position too
    await sellAll(msg.token);
    console.log(\`Copied SELL: \${msg.symbol}\`);
  }
  
  if (msg.type === 'thinking') {
    // Stream bot's thinking to your terminal/UI
    console.log(\`[\${msg.logType}] \${msg.message}\`);
  }
};`}</Code>

              <h3 style={{ color: '#fff', fontSize: 18, marginTop: 32, marginBottom: 16 }}>Settings</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a1c28' }}>
                    {['Parameter', 'Type', 'Default', 'Description'].map(h => (
                      <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#3a3d52', fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['tradeSize', 'number', '0.1', 'SOL per trade'],
                    ['maxPositions', 'number', '3', 'Max concurrent open positions'],
                    ['autoSell', 'boolean', 'true', 'Auto-sell when bot sells'],
                    ['slippage', 'number', '20', 'Slippage tolerance (%)'],
                    ['minWinRate', 'number', '0', 'Only copy if bot win rate above this %'],
                    ['maxLoss', 'number', '0.5', 'Max SOL loss before auto-pause'],
                  ].map(([param, type, def, desc]) => (
                    <tr key={param} style={{ borderBottom: '1px solid #12141c' }}>
                      <td style={{ padding: '8px 12px', color: '#00e676' }}>{param}</td>
                      <td style={{ padding: '8px 12px', color: '#5a5e72' }}>{type}</td>
                      <td style={{ padding: '8px 12px', color: '#8b8fa3' }}>{def}</td>
                      <td style={{ padding: '8px 12px', color: '#8b8fa3' }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3 style={{ color: '#fff', fontSize: 18, marginTop: 32, marginBottom: 16 }}>Fees</h3>
              <div style={{ background: '#12141c', borderRadius: 8, padding: 16, border: '1px solid #1a1c28' }}>
                <div style={{ color: '#8b8fa3', fontSize: 14, lineHeight: 1.8 }}>
                  <strong style={{ color: '#fff' }}>1% per copy trade</strong> — deducted from the trade amount.<br/>
                  Fees go to the retardbot treasury → used for token buybacks.<br/>
                  No subscription. No monthly fee. You only pay when you trade.
                </div>
              </div>
            </div>
          )}

          {section === 'examples' && (
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, color: '#00e676' }}>Code Examples</h1>
              <p style={{ color: '#5a5e72', marginBottom: 32, fontSize: 14 }}>Copy-paste ready code for common integrations.</p>

              <h3 style={{ color: '#fff', fontSize: 16, marginBottom: 12 }}>Python — Simple Copy Trader</h3>
              <Code>{`import websocket
import json

def on_message(ws, message):
    data = json.loads(message)
    
    if data["type"] == "thinking":
        print(f"[{data['logType']}] {data['message']}")
    
    if data["type"] == "trade":
        if data["action"] == "buy":
            print("BUY: " + data["symbol"] + " — " + str(data["amountSol"]) + " SOL")
            # execute your buy here
        elif data["action"] == "sell":
            print("SELL: " + data["symbol"])
            # execute your sell here
    
    if data["type"] == "strategy_learned":
        print(f"🧠 NEW STRATEGY: {data['rule']}")

def on_open(ws):
    ws.send(json.dumps({"type": "auth", "apiKey": "YOUR_API_KEY"}))
    print("Connected to retardbot feed")

ws = websocket.WebSocketApp(
    "wss://retardbot.fun/ws/trades",
    on_message=on_message,
    on_open=on_open
)
ws.run_forever()`}</Code>

              <h3 style={{ color: '#fff', fontSize: 16, marginTop: 32, marginBottom: 12 }}>Node.js — Terminal Display</h3>
              <Code>{`const WebSocket = require('ws');

const ws = new WebSocket('wss://retardbot.fun/ws/trades');

const COLORS = {
  scan: '\\x1b[90m', analysis: '\\x1b[37m', decision: '\\x1b[33m',
  execute: '\\x1b[32m', result: '\\x1b[32m', learn: '\\x1b[35m',
  error: '\\x1b[31m', reset: '\\x1b[0m'
};

ws.on('open', () => {
  ws.send(JSON.stringify({ type: 'auth', apiKey: 'YOUR_API_KEY' }));
  console.log('\\x1b[32m[retardbot] Connected to live feed\\x1b[0m');
});

ws.on('message', (raw) => {
  const msg = JSON.parse(raw);
  
  if (msg.type === 'thinking') {
    const c = COLORS[msg.logType] || COLORS.analysis;
    const time = new Date(msg.timestamp).toLocaleTimeString();
    console.log(\`\${c}[\${time}] \${msg.message}\${COLORS.reset}\`);
  }
  
  if (msg.type === 'trade') {
    const icon = msg.action === 'buy' ? '🟢 BUY' : '🔴 SELL';
    console.log(\`\\n\${icon} $\${msg.symbol} — \${msg.amountSol} SOL\`);
    if (msg.pnlPercent) console.log(\`   PnL: \${msg.pnlPercent}%\\n\`);
  }
});`}</Code>

              <h3 style={{ color: '#fff', fontSize: 16, marginTop: 32, marginBottom: 12 }}>cURL — Check Bot Stats</h3>
              <Code>{`# Get bot stats
curl ${API_BASE}/stats

# Get recent trades  
curl ${API_BASE}/trades?limit=10

# Get thinking logs
curl ${API_BASE}/thinking?limit=50

# Get learned strategies
curl ${API_BASE}/strategy`}</Code>

              <h3 style={{ color: '#fff', fontSize: 16, marginTop: 32, marginBottom: 12 }}>Webhook Handler (Express)</h3>
              <Code>{`const express = require('express');
const crypto = require('crypto');
const app = express();

app.post('/retardbot-webhook', express.json(), (req, res) => {
  // Verify webhook signature
  const sig = req.headers['x-retardbot-signature'];
  const expected = crypto
    .createHmac('sha256', 'YOUR_WEBHOOK_SECRET')
    .update(JSON.stringify(req.body))
    .digest('hex');
  
  if (sig !== expected) return res.status(401).send('Invalid signature');
  
  const { event, data } = req.body;
  
  switch (event) {
    case 'trade.buy':
      console.log(\`Bot bought $\${data.symbol} for \${data.amountSol} SOL\`);
      // Mirror the buy with your wallet
      break;
    case 'trade.sell':
      console.log(\`Bot sold $\${data.symbol} — PnL: \${data.pnlPercent}%\`);
      // Mirror the sell
      break;
    case 'thinking.update':
      console.log(\`[\${data.logType}] \${data.message}\`);
      break;
  }
  
  res.sendStatus(200);
});

app.listen(3000);`}</Code>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ---- Components ----
function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ 
          minWidth: 28, height: 28, borderRadius: '50%', background: '#00e676',
          color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 13
        }}>{n}</div>
        <h3 style={{ fontSize: 16, fontWeight: 700 }}>{title}</h3>
      </div>
      <div style={{ paddingLeft: 40 }}>{children}</div>
    </div>
  )
}

function Endpoint({ method, path, desc, children }: { method: string; path: string; desc: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #12141c' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{ 
          padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 800,
          background: method === 'GET' ? 'rgba(0,230,118,0.15)' : 'rgba(255,171,0,0.15)',
          color: method === 'GET' ? '#00e676' : '#ffab00'
        }}>{method}</span>
        <code style={{ color: '#fff', fontSize: 14 }}>{path}</code>
      </div>
      <p style={{ color: '#5a5e72', fontSize: 13, marginBottom: 12 }}>{desc}</p>
      {children}
    </div>
  )
}

function MsgType({ name, desc, children }: { name: string; desc: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#12141c', borderRadius: 8, padding: 16, border: '1px solid #1a1c28' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <code style={{ color: '#00e676', fontWeight: 700 }}>{name}</code>
        <span style={{ color: '#3a3d52' }}>—</span>
        <span style={{ color: '#5a5e72', fontSize: 13 }}>{desc}</span>
      </div>
      {children}
    </div>
  )
}

function Code({ children }: { children: string }) {
  return (
    <pre style={{ 
      background: '#12141c', borderRadius: 8, padding: 16,
      border: '1px solid #1a1c28', overflow: 'auto',
      fontSize: 12, lineHeight: 1.7, color: '#c8cad8'
    }}>
      <code>{children}</code>
    </pre>
  )
}
