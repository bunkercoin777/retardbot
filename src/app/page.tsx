'use client'
import { useState, useEffect, useRef } from 'react'

interface Trade {
  id: string; action: string; tokenSymbol: string; tokenName: string
  amountSol: number; tokenAmount: string; pnl: number|null; pnlPercent: number|null
  bondingProgress: number|null; marketCap: number|null; replies: number|null
  txSignature: string|null; reasoning: string|null; createdAt: string
}
interface ThinkingLog { id: string; type: string; message: string; createdAt: string }
interface Strategy { id: string; rule: string; source: string; createdAt: string }
interface Stats {
  wallet: string; balance: number; totalTrades: number; wins: number; losses: number
  winRate: number; totalPnl: number; biggestWin: number; biggestLoss: number; isLive: boolean
}

function timeAgo(ts: string) {
  const s = Math.floor((Date.now() - new Date(ts).getTime()) / 1000)
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
  const [stats, setStats] = useState<Stats|null>(null)
  const [trades, setTrades] = useState<Trade[]>([])
  const [thinking, setThinking] = useState<ThinkingLog[]>([])
  const [strategies, setStrategies] = useState<Strategy[]>([])
  const termRef = useRef<HTMLDivElement>(null)
  const lastThinkingRef = useRef<string>('')

  // Poll stats
  useEffect(() => {
    const load = () => fetch('/api/stats').then(r => r.json()).then(setStats).catch(() => {})
    load()
    const i = setInterval(load, 10000)
    return () => clearInterval(i)
  }, [])

  // Poll thinking logs
  useEffect(() => {
    const load = () => {
      const since = lastThinkingRef.current
      const url = since ? `/api/thinking?since=${new Date(since).getTime()}` : '/api/thinking?limit=50'
      fetch(url).then(r => r.json()).then(data => {
        if (data.logs?.length) {
          setThinking(prev => {
            const ids = new Set(prev.map(t => t.id))
            const newLogs = data.logs.filter((l: ThinkingLog) => !ids.has(l.id))
            if (newLogs.length) lastThinkingRef.current = newLogs[newLogs.length - 1].createdAt
            return [...prev, ...newLogs].slice(-200)
          })
        }
      }).catch(() => {})
    }
    load()
    const i = setInterval(load, 3000)
    return () => clearInterval(i)
  }, [])

  // Poll trades & strategies when on those tabs
  useEffect(() => {
    if (tab === 'trades') fetch('/api/trades').then(r => r.json()).then(d => setTrades(d.trades || [])).catch(() => {})
    if (tab === 'strategy') fetch('/api/strategy').then(r => r.json()).then(d => setStrategies(d.strategies || [])).catch(() => {})
  }, [tab])

  // Auto-scroll terminal
  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight
  }, [thinking])

  const wallet = stats?.wallet || '8CdCDJkDCjL1XJqEXbLzTdYDTaoeHgaof5VxawRS1f3h'

  return (
    <div style={{ minHeight: '100vh', background: '#0a0b0f' }}>
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
            background: stats?.isLive ? 'rgba(0,230,118,0.1)' : 'rgba(90,94,114,0.1)',
            borderRadius: 20, padding: '4px 12px'
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: stats?.isLive ? '#00e676' : '#5a5e72' }} className={stats?.isLive ? 'pulse-green' : ''} />
            <span style={{ fontSize: 11, color: stats?.isLive ? '#00e676' : '#5a5e72', fontWeight: 700 }}>
              {stats?.isLive ? 'LIVE' : 'OFFLINE'}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={`https://solscan.io/account/${wallet}`} target="_blank" style={{ fontSize: 11, color: '#3a3d52', fontFamily: 'monospace', textDecoration: 'none' }}>
            {wallet.slice(0, 4)}...{wallet.slice(-4)}
          </a>
          <a href="/docs" style={{ color: '#5a5e72', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace', padding: '8px 12px' }}>docs</a>
          <button style={{ background: '#00e676', color: '#000', fontWeight: 800, border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', fontSize: 13 }}>Copy Trade</button>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* Stats Bar */}
        <div style={{ display: 'flex', gap: 1, margin: '16px 0', background: '#12141c', borderRadius: 10, overflow: 'hidden', border: '1px solid #1a1c28' }}>
          {[
            { label: 'BAL', value: stats ? `${stats.balance} SOL` : '--', color: '#fff' },
            { label: 'TRADES', value: stats ? `${stats.totalTrades}` : '--', color: '#fff' },
            { label: 'W/L', value: stats ? `${stats.wins}/${stats.losses}` : '--', color: '#fff' },
            { label: 'WIN%', value: stats?.winRate ? `${stats.winRate}%` : '--', color: stats && stats.winRate >= 50 ? '#00e676' : stats?.winRate ? '#ff1744' : '#5a5e72' },
            { label: 'PNL', value: stats ? `${stats.totalPnl >= 0 ? '+' : ''}${stats.totalPnl} SOL` : '--', color: stats && stats.totalPnl >= 0 ? '#00e676' : '#ff1744' },
            { label: 'BEST', value: stats?.biggestWin ? `+${stats.biggestWin}%` : '--', color: '#00e676' },
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
                {'// wallet: '}<a href={`https://solscan.io/account/${wallet}`} target="_blank" style={{ color: '#5a5e72', textDecoration: 'underline' }}>{wallet}</a><br/>
                {'// -----------------------------------------------'}
              </div>

              {thinking.length === 0 && (
                <div style={{ color: '#3a3d52', marginTop: 16 }}>
                  {'// no activity yet. waiting for bot to come online...'}<br/>
                  <span style={{ color: '#5a5e72' }}>_</span>
                </div>
              )}

              {thinking.map(log => (
                <div key={log.id} style={{ marginBottom: 4, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#3a3d52', minWidth: 60, fontSize: 11 }}>
                    {new Date(log.createdAt).toLocaleTimeString('en-AU', { hour12: false })}
                  </span>
                  <span style={{ color: TYPE_COLORS[log.type] || '#8b8fa3', minWidth: 55, fontSize: 12 }}>
                    {TYPE_PREFIX[log.type] || `[${log.type.toUpperCase()}]`}
                  </span>
                  <span style={{ color: TYPE_COLORS[log.type] || '#8b8fa3' }}>
                    {log.message}
                  </span>
                </div>
              ))}

              {thinking.length > 0 && (
                <div style={{ marginTop: 8, color: '#3a3d52' }}>
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
            {trades.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 16, color: '#1a1c28', fontFamily: 'monospace' }}>---</div>
                <div style={{ color: '#3a3d52', fontFamily: 'monospace', fontSize: 14 }}>No trades yet.</div>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a1c28' }}>
                    {['TIME', 'ACTION', 'TOKEN', 'AMOUNT', 'BONDING', 'PNL', 'TX'].map(h => (
                      <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#3a3d52', fontSize: 10, letterSpacing: 1.5 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {trades.map(t => (
                    <tr key={t.id} style={{ borderBottom: '1px solid #12141c' }}>
                      <td style={{ padding: '10px 12px', color: '#5a5e72' }}>{timeAgo(t.createdAt)}</td>
                      <td style={{ padding: '10px 12px', color: t.action === 'buy' ? '#00e676' : '#ff1744', fontWeight: 700 }}>{t.action.toUpperCase()}</td>
                      <td style={{ padding: '10px 12px', fontWeight: 700 }}>${t.tokenSymbol}</td>
                      <td style={{ padding: '10px 12px' }}>{t.amountSol} SOL</td>
                      <td style={{ padding: '10px 12px', color: (t.bondingProgress||0) >= 80 ? '#00e676' : '#ffab00' }}>{t.bondingProgress ? `${t.bondingProgress}%` : '--'}</td>
                      <td style={{ padding: '10px 12px', color: t.pnlPercent === null ? '#3a3d52' : t.pnlPercent >= 0 ? '#00e676' : '#ff1744', fontWeight: 700 }}>
                        {t.pnlPercent === null ? '--' : `${t.pnlPercent >= 0 ? '+' : ''}${t.pnlPercent.toFixed(1)}%`}
                      </td>
                      <td style={{ padding: '10px 12px' }}>
                        {t.txSignature ? (
                          <a href={`https://solscan.io/tx/${t.txSignature}`} target="_blank" style={{ color: '#5a5e72', textDecoration: 'none', fontSize: 11 }}>
                            {t.txSignature.slice(0, 8)}...
                          </a>
                        ) : '--'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Strategy Tab */}
        {tab === 'strategy' && (
          <div style={{ 
            background: '#0d0e14', border: '1px solid #1a1c28', borderTop: 'none',
            borderRadius: '0 0 8px 8px', minHeight: 500, padding: 20, fontFamily: 'monospace'
          }}>
            <div style={{ color: '#00e676', fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
              {'// LEARNED STRATEGIES'}<br/>
              <span style={{ color: '#3a3d52', fontSize: 12 }}>{'// every winning trade teaches the bot something new'}</span>
            </div>
            {strategies.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 16, color: '#1a1c28' }}>---</div>
                <div style={{ color: '#3a3d52', fontSize: 14 }}>No strategies learned yet.</div>
                <div style={{ color: '#2a2d3e', fontSize: 12, marginTop: 8 }}>
                  When the bot profits on a trade, it extracts what worked and adds it here.
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {strategies.map((s, i) => (
                  <div key={s.id} style={{ padding: 14, background: '#12141c', borderRadius: 8, borderLeft: '3px solid #00e676' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#00e676', fontSize: 12 }}>RULE #{i + 1}</span>
                      <span style={{ color: '#3a3d52', fontSize: 11 }}>from ${s.source} -- {timeAgo(s.createdAt)}</span>
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
            <div style={{ maxWidth: 520, margin: '32px auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <img src="/icon.jpg" alt="retardbot" style={{ width: 56, height: 56, borderRadius: 12, margin: '0 auto 16px' }} />
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Copy Trade retardbot</h2>
                <p style={{ color: '#5a5e72', fontSize: 14, lineHeight: 1.6 }}>
                  Bot buys, you buy. Bot sells, you sell. Automatic. Real-time. Retarded.
                </p>
              </div>

              {/* How it works */}
              <div style={{ background: '#12141c', borderRadius: 10, padding: 20, border: '1px solid #1a1c28', marginBottom: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#5a5e72', lineHeight: 2.2 }}>
                  <span style={{ color: '#00e676' }}>1.</span> Connect your Solana wallet<br/>
                  <span style={{ color: '#00e676' }}>2.</span> Set your trade size (how much SOL per trade)<br/>
                  <span style={{ color: '#00e676' }}>3.</span> Bot scans pump.fun 24/7 for opportunities<br/>
                  <span style={{ color: '#00e676' }}>4.</span> Bot buys -- your wallet auto-mirrors the same token<br/>
                  <span style={{ color: '#00e676' }}>5.</span> Bot sells -- your wallet auto-sells<br/>
                  <span style={{ color: '#00e676' }}>6.</span> All bot profits are recycled back into trading
                </div>
              </div>

              {/* Trade size selector */}
              <div style={{ background: '#12141c', borderRadius: 10, padding: 20, border: '1px solid #1a1c28', marginBottom: 16, textAlign: 'left' }}>
                <div style={{ fontSize: 11, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12, fontFamily: 'monospace' }}>Trade size per position</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[0.05, 0.1, 0.25, 0.5, 1.0].map(amt => (
                    <button key={amt} style={{
                      flex: 1, padding: '10px 0', borderRadius: 6,
                      background: amt === 0.1 ? '#00e676' : '#1a1c28',
                      color: amt === 0.1 ? '#000' : '#5a5e72',
                      border: amt === 0.1 ? 'none' : '1px solid #2a2d3e',
                      fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'monospace'
                    }}>{amt}</button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button style={{ width: '100%', padding: '14px', borderRadius: 10, background: '#00e676', color: '#000', fontWeight: 800, fontSize: 15, border: 'none', cursor: 'pointer', marginBottom: 16 }}>
                Connect Wallet & Start Copying
              </button>

              {/* Profit recycling */}
              <div style={{ background: '#12141c', borderRadius: 10, padding: 20, border: '1px solid #1a1c28', marginBottom: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: '#00e676', marginBottom: 10 }}>// PROFIT RECYCLING</div>
                <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#8b8fa3', lineHeight: 1.8 }}>
                  100% of bot profits are recycled back into the trading bankroll.
                  The bot never withdraws. Every win makes the next trade bigger.
                  Compounding returns, fully transparent on-chain.
                </div>
                <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                  <a href={`https://solscan.io/account/${wallet}`} target="_blank" style={{
                    flex: 1, textAlign: 'center', padding: '8px', borderRadius: 6,
                    background: '#1a1c28', border: '1px solid #2a2d3e',
                    color: '#8b8fa3', textDecoration: 'none', fontFamily: 'monospace', fontSize: 11
                  }}>verify on solscan</a>
                </div>
              </div>

              {/* Fees */}
              <div style={{ display: 'flex', gap: 12, fontFamily: 'monospace' }}>
                <div style={{ flex: 1, background: '#12141c', borderRadius: 8, padding: 14, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>platform fee</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>1%</div>
                </div>
                <div style={{ flex: 1, background: '#12141c', borderRadius: 8, padding: 14, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>custody</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>non-custodial</div>
                </div>
                <div style={{ flex: 1, background: '#12141c', borderRadius: 8, padding: 14, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>profits</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#00e676' }}>100% recycled</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer style={{ textAlign: 'center', padding: '32px 0 20px', borderTop: '1px solid #1a1c28', marginTop: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 10 }}>
            <a href="https://x.com/retardbotfun" target="_blank" style={{ color: '#3a3d52', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace' }}>twitter</a>
            <a href="https://pump.fun" target="_blank" style={{ color: '#3a3d52', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace' }}>pump.fun</a>
            <a href="/docs" style={{ color: '#3a3d52', textDecoration: 'none', fontSize: 12, fontFamily: 'monospace' }}>docs</a>
          </div>
          <p style={{ color: '#1a1c28', fontSize: 11, fontFamily: 'monospace' }}>retardbot.fun -- not financial advice. the bot is literally retarded.</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes pulseGreen { 0%, 100% { box-shadow: 0 0 0 0 rgba(0,230,118,0.4); } 50% { box-shadow: 0 0 0 6px rgba(0,230,118,0); } }
        .pulse-green { animation: pulseGreen 2s infinite; }
      `}</style>
    </div>
  )
}
