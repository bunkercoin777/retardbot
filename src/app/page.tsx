'use client'
import { useState, useEffect, useRef } from 'react'

// ---- Types ----
interface Trade {
  id: string; token: string; symbol: string; action: 'buy'|'sell'
  amountSol: number; tokenAmount: string; pnl: number|null; pnlPercent: number|null
  timestamp: number; txSignature: string; bondingProgress: number; marketCap: number
}
interface ThinkingLog {
  id: string; timestamp: number
  type: 'scan'|'analysis'|'decision'|'execute'|'result'|'learn'|'error'
  message: string
}
interface Strategy { id: string; rule: string; source: string; addedAt: number }

const WALLET = '8CdCDJkDCjL1XJqEXbLzTdYDTaoeHgaof5VxawRS1f3h'
const DEMO_THINKING: ThinkingLog[] = [
  { id: '1', timestamp: Date.now()-120000, type: 'scan', message: 'Scanning pump.fun... 847 tokens active. Filtering for 50%+ bonding with 8+ replies...' },
  { id: '2', timestamp: Date.now()-110000, type: 'scan', message: 'Found 23 candidates above threshold. Running dual-snapshot analysis (20s apart)...' },
  { id: '3', timestamp: Date.now()-90000, type: 'analysis', message: 'Snapshot 1 complete. Top movers: PEPE2 (67%->?), DOGWIF (72%->?), BASED (81%->?)...' },
  { id: '4', timestamp: Date.now()-70000, type: 'analysis', message: 'Snapshot 2: PEPE2 67->68% (+1.5%), DOGWIF 72->71% (-1.4%), BASED 81->88% (+8.6%)' },
  { id: '5', timestamp: Date.now()-65000, type: 'decision', message: 'BASED is accelerating hard. 88% bonding, 34 replies, +8.6% in 20s. Graduation play.' },
  { id: '6', timestamp: Date.now()-60000, type: 'decision', message: 'Risk check: replies=34 [PASS] acceleration=+8.6% [PASS] bonding=88% [PASS] mcap=$52k [PASS]' },
  { id: '7', timestamp: Date.now()-55000, type: 'execute', message: 'BUYING $BASED -- 0.15 SOL at 88% bonding. Setting TP: +20%, SL: -25%' },
  { id: '8', timestamp: Date.now()-50000, type: 'result', message: 'BUY CONFIRMED: 0.15 SOL -> 245,891,002 $BASED tokens. TX: 4xR7...mK9q' },
  { id: '9', timestamp: Date.now()-30000, type: 'analysis', message: 'Monitoring $BASED... 91% bonding (+3.4%). Volume increasing. 4 new replies in 30s.' },
  { id: '10', timestamp: Date.now()-15000, type: 'analysis', message: '$BASED at 96% bonding. Graduation imminent. Holding position...' },
  { id: '11', timestamp: Date.now()-8000, type: 'result', message: '$BASED GRADUATED. Now trading on PumpSwap AMM. Price up +31% from entry.' },
  { id: '12', timestamp: Date.now()-5000, type: 'execute', message: 'SELLING $BASED -- taking profit at +31%. Sending sell transaction...' },
  { id: '13', timestamp: Date.now()-3000, type: 'result', message: 'SELL CONFIRMED: 245,891,002 $BASED -> 0.1965 SOL. PnL: +0.0465 SOL (+31%)' },
  { id: '14', timestamp: Date.now()-1000, type: 'learn', message: 'NEW RULE: Tokens with 8%+ acceleration at 85%+ bonding and 30+ replies have 78% graduation rate. Adding to playbook.' },
]

const DEMO_TRADES: Trade[] = []
const DEMO_STRATEGIES: Strategy[] = []

// ---- Helpers ----
function timeAgo(ts: number) {
  const s = Math.floor((Date.now()-ts)/1000)
  if (s < 5) return 'just now'
  if (s < 60) return `${s}s ago`
  if (s < 3600) return `${Math.floor(s/60)}m ago`
  return `${Math.floor(s/3600)}h ago`
}

const TYPE_COLORS: Record<string, string> = {
  scan: '#5a5e72', analysis: '#8b8fa3', decision: '#ffab00',
  execute: '#00e676', result: '#00e676', learn: '#bb86fc', error: '#ff1744'
}
const TYPE_PREFIX: Record<string, string> = {
  scan: '[SCAN]', analysis: '[DATA]', decision: '[THINK]', execute: '[EXEC]',
  result: '[OK]', learn: '[LEARN]', error: '[ERR]'
}

export default function Home() {
  const [tab, setTab] = useState<'terminal'|'trades'|'strategy'|'copytrade'>('terminal')
  const [thinking, setThinking] = useState<ThinkingLog[]>([])
  const [visibleIdx, setVisibleIdx] = useState(0)
  const termRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleIdx >= DEMO_THINKING.length) return
    const delay = visibleIdx === 0 ? 500 : 800 + Math.random() * 2000
    const timer = setTimeout(() => {
      setThinking(prev => [...prev, DEMO_THINKING[visibleIdx]])
      setVisibleIdx(prev => prev + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [visibleIdx])

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight
  }, [thinking])

  return (
    <div style={{ minHeight: '100vh', background: '#0a0b0f' }}>
      {/* Navbar */}
      <nav style={{ 
        borderBottom: '1px solid #1a1c28', padding: '10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, background: '#0a0b0f', zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/icon.jpg" alt="retardbot" style={{ width: 32, height: 32, borderRadius: 8 }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#00e676' }}>retardbot</span>
          <span style={{ fontSize: 13, color: '#3a3d52' }}>.fun</span>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: 5, marginLeft: 12,
            background: 'rgba(0,230,118,0.1)', borderRadius: 20, padding: '4px 12px'
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00e676' }} className="pulse-green" />
            <span style={{ fontSize: 11, color: '#00e676', fontWeight: 700 }}>LIVE</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 11, color: '#3a3d52', textAlign: 'right', fontFamily: 'monospace' }}>
            {WALLET.slice(0, 4)}...{WALLET.slice(-4)}
          </div>
          <a href="/docs" style={{
            color: '#5a5e72', textDecoration: 'none', fontSize: 12,
            fontFamily: 'monospace', padding: '8px 12px'
          }}>docs</a>
          <button style={{
            background: '#00e676', color: '#000', fontWeight: 800,
            border: 'none', borderRadius: 8, padding: '8px 18px',
            cursor: 'pointer', fontSize: 13
          }}>Copy Trade</button>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* Stats Bar */}
        <div style={{ 
          display: 'flex', gap: 1, margin: '16px 0',
          background: '#12141c', borderRadius: 10, overflow: 'hidden', border: '1px solid #1a1c28'
        }}>
          {[
            { label: 'BAL', value: '0 SOL', color: '#fff' },
            { label: 'TRADES', value: '0', color: '#fff' },
            { label: 'W/L', value: '0/0', color: '#fff' },
            { label: 'WIN%', value: '--', color: '#5a5e72' },
            { label: 'PNL', value: '0 SOL', color: '#5a5e72' },
            { label: 'BEST', value: '--', color: '#5a5e72' },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: '12px 16px', textAlign: 'center', borderRight: i < 5 ? '1px solid #1a1c28' : 'none' }}>
              <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: s.color, fontFamily: 'monospace' }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #1a1c28', marginBottom: 0 }}>
          {(['terminal', 'trades', 'strategy', 'copytrade'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '10px 20px', background: 'none', border: 'none',
              borderBottom: tab === t ? '2px solid #00e676' : '2px solid transparent',
              color: tab === t ? '#00e676' : '#3a3d52',
              fontWeight: 700, fontSize: 12, cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'monospace'
            }}>
              {t === 'terminal' ? '> TERMINAL' : t === 'trades' ? '$ TRADES' : t === 'strategy' ? '# BRAIN' : '* COPY'}
            </button>
          ))}
        </div>

        {/* Terminal */}
        {tab === 'terminal' && (
          <div style={{ 
            background: '#0d0e14', border: '1px solid #1a1c28', borderTop: 'none',
            borderRadius: '0 0 8px 8px', minHeight: 500, maxHeight: '70vh',
            overflow: 'auto', fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
            fontSize: 13, lineHeight: 1.7
          }} ref={termRef}>
            {/* Terminal Header */}
            <div style={{ 
              padding: '8px 16px', borderBottom: '1px solid #1a1c28',
              display: 'flex', alignItems: 'center', gap: 8, position: 'sticky', top: 0,
              background: '#0d0e14', zIndex: 2
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ marginLeft: 8, color: '#3a3d52', fontSize: 11 }}>retardbot v0.1 -- live thinking feed</span>
            </div>

            <div style={{ padding: '12px 16px' }}>
              <div style={{ color: '#3a3d52', marginBottom: 8 }}>
                {'// retardbot.fun -- AI memecoin trader'}<br/>
                {'// watching pump.fun 24/7. learning from every trade.'}<br/>
                {`// wallet: ${WALLET}`}<br/>
                {'// -----------------------------------------------'}
              </div>

              {thinking.map(log => (
                <div key={log.id} style={{ 
                  marginBottom: 4, display: 'flex', gap: 8,
                  opacity: 1, animation: 'fadeIn 0.3s ease'
                }}>
                  <span style={{ color: '#3a3d52', minWidth: 60, fontSize: 11 }}>
                    {new Date(log.timestamp).toLocaleTimeString('en-AU', { hour12: false })}
                  </span>
                  <span style={{ color: TYPE_COLORS[log.type] || '#8b8fa3', minWidth: 55, fontSize: 12 }}>
                    {TYPE_PREFIX[log.type]}
                  </span>
                  <span style={{ color: TYPE_COLORS[log.type] || '#8b8fa3' }}>
                    {log.message}
                  </span>
                </div>
              ))}

              {visibleIdx < DEMO_THINKING.length && (
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  <span style={{ color: '#3a3d52', minWidth: 60, fontSize: 11 }}>
                    {new Date().toLocaleTimeString('en-AU', { hour12: false })}
                  </span>
                  <span style={{ color: '#00e676' }}>_</span>
                </div>
              )}

              {visibleIdx >= DEMO_THINKING.length && (
                <div style={{ marginTop: 16, color: '#3a3d52' }}>
                  {'// waiting for next opportunity...'}<br/>
                  <span style={{ color: '#00e676' }}>_</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Trades Tab */}
        {tab === 'trades' && (
          <div style={{ 
            background: '#0d0e14', border: '1px solid #1a1c28', borderTop: 'none',
            borderRadius: '0 0 8px 8px', minHeight: 500, padding: 20
          }}>
            {DEMO_TRADES.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 16, color: '#1a1c28', fontFamily: 'monospace' }}>---</div>
                <div style={{ color: '#3a3d52', fontFamily: 'monospace', fontSize: 14 }}>
                  No trades yet. Wallet needs funding.
                </div>
                <div style={{ color: '#2a2d3e', fontFamily: 'monospace', fontSize: 12, marginTop: 8 }}>
                  Once live, every trade appears here in real-time with full PnL tracking.
                </div>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a1c28' }}>
                    {['TIME', 'ACTION', 'TOKEN', 'AMOUNT', 'BONDING', 'PNL'].map(h => (
                      <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#3a3d52', fontSize: 10, letterSpacing: 1.5 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DEMO_TRADES.map(t => (
                    <tr key={t.id} style={{ borderBottom: '1px solid #12141c' }}>
                      <td style={{ padding: '10px 12px', color: '#5a5e72' }}>{timeAgo(t.timestamp)}</td>
                      <td style={{ padding: '10px 12px', color: t.action === 'buy' ? '#00e676' : '#ff1744', fontWeight: 700 }}>{t.action.toUpperCase()}</td>
                      <td style={{ padding: '10px 12px', fontWeight: 700 }}>${t.symbol}</td>
                      <td style={{ padding: '10px 12px' }}>{t.amountSol} SOL</td>
                      <td style={{ padding: '10px 12px', color: t.bondingProgress >= 80 ? '#00e676' : '#ffab00' }}>{t.bondingProgress}%</td>
                      <td style={{ padding: '10px 12px', color: t.pnlPercent === null ? '#3a3d52' : t.pnlPercent >= 0 ? '#00e676' : '#ff1744', fontWeight: 700 }}>
                        {t.pnlPercent === null ? '--' : `${t.pnlPercent >= 0 ? '+' : ''}${t.pnlPercent.toFixed(1)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Strategy / Brain Tab */}
        {tab === 'strategy' && (
          <div style={{ 
            background: '#0d0e14', border: '1px solid #1a1c28', borderTop: 'none',
            borderRadius: '0 0 8px 8px', minHeight: 500, padding: 20,
            fontFamily: 'monospace'
          }}>
            <div style={{ color: '#00e676', fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
              {'// LEARNED STRATEGIES'}
              <br/>
              <span style={{ color: '#3a3d52', fontSize: 12 }}>{'// every winning trade teaches the bot something new'}</span>
            </div>

            {DEMO_STRATEGIES.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 16, color: '#1a1c28' }}>---</div>
                <div style={{ color: '#3a3d52', fontSize: 14 }}>
                  No strategies learned yet.
                </div>
                <div style={{ color: '#2a2d3e', fontSize: 12, marginTop: 8 }}>
                  When the bot profits on a trade, it extracts what worked and adds it here.
                  <br/>The brain grows with every win.
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {DEMO_STRATEGIES.map((s, i) => (
                  <div key={s.id} style={{ 
                    padding: 14, background: '#12141c', borderRadius: 8,
                    borderLeft: '3px solid #00e676'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#00e676', fontSize: 12 }}>RULE #{i + 1}</span>
                      <span style={{ color: '#3a3d52', fontSize: 11 }}>learned from ${s.source}</span>
                    </div>
                    <div style={{ color: '#c8cad8', fontSize: 13, lineHeight: 1.5 }}>{s.rule}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Copy Trade Tab */}
        {tab === 'copytrade' && (
          <div style={{ 
            background: '#0d0e14', border: '1px solid #1a1c28', borderTop: 'none',
            borderRadius: '0 0 8px 8px', minHeight: 500, padding: 20
          }}>
            <div style={{ maxWidth: 480, margin: '40px auto', textAlign: 'center' }}>
              <img src="/icon.jpg" alt="retardbot" style={{ width: 64, height: 64, borderRadius: 12, margin: '0 auto 20px' }} />
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Copy Trade retardbot</h2>
              <p style={{ color: '#5a5e72', fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
                Bot buys, you buy. Bot sells, you sell.<br/>
                Automatic. Real-time. Retarded.
              </p>

              <div style={{ 
                background: '#12141c', borderRadius: 10, padding: 20,
                border: '1px solid #1a1c28', marginBottom: 20, textAlign: 'left'
              }}>
                <div style={{ fontSize: 11, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12, fontFamily: 'monospace' }}>
                  Trade size per position
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[0.05, 0.1, 0.25, 0.5, 1.0].map(amt => (
                    <button key={amt} style={{
                      flex: 1, padding: '10px 0', borderRadius: 6,
                      background: amt === 0.1 ? '#00e676' : '#1a1c28',
                      color: amt === 0.1 ? '#000' : '#5a5e72',
                      border: amt === 0.1 ? 'none' : '1px solid #2a2d3e',
                      fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'monospace'
                    }}>
                      {amt}
                    </button>
                  ))}
                </div>
              </div>

              <button style={{
                width: '100%', padding: '14px', borderRadius: 10,
                background: '#00e676', color: '#000', fontWeight: 800,
                fontSize: 15, border: 'none', cursor: 'pointer', marginBottom: 12
              }}>
                Connect Wallet & Start Copying
              </button>

              <div style={{ fontSize: 11, color: '#3a3d52', fontFamily: 'monospace' }}>
                1% platform fee -- non-custodial -- you approve each trade
              </div>

              <div style={{ 
                marginTop: 28, textAlign: 'left', padding: 16,
                background: '#12141c', borderRadius: 8, border: '1px solid #1a1c28'
              }}>
                <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#5a5e72', lineHeight: 2 }}>
                  <span style={{ color: '#00e676' }}>1.</span> Connect your Solana wallet<br/>
                  <span style={{ color: '#00e676' }}>2.</span> Pick your trade size<br/>
                  <span style={{ color: '#00e676' }}>3.</span> Bot scans pump.fun 24/7<br/>
                  <span style={{ color: '#00e676' }}>4.</span> Bot buys -- your wallet auto-buys same token<br/>
                  <span style={{ color: '#00e676' }}>5.</span> Bot sells -- your wallet auto-sells<br/>
                  <span style={{ color: '#00e676' }}>6.</span> Watch PnL. It is retarded but it tries.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{ 
          textAlign: 'center', padding: '32px 0 20px',
          borderTop: '1px solid #1a1c28', marginTop: 32
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 10 }}>
            <a href="https://x.com/retardbotfun" target="_blank" style={{ color: '#3a3d52', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace' }}>twitter</a>
            <a href="https://pump.fun" target="_blank" style={{ color: '#3a3d52', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace' }}>pump.fun</a>
            <a href="/docs" style={{ color: '#3a3d52', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace' }}>docs</a>
          </div>
          <p style={{ color: '#1a1c28', fontSize: 11, fontFamily: 'monospace' }}>
            retardbot.fun -- not financial advice. the bot is literally retarded.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,230,118,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(0,230,118,0); }
        }
        .pulse-green { animation: pulseGreen 2s infinite; }
      `}</style>
    </div>
  )
}
