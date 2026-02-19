'use client'
import { useState, useEffect, useRef } from 'react'

interface Trade {
  id: string; action: string; tokenSymbol: string; tokenName: string
  amountSol: number; tokenAmount: string; pnl: number|null; pnlPercent: number|null
  bondingProgress: number|null; marketCap: number|null; replies: number|null
  txSignature: string|null; reasoning: string|null; createdAt: string
}
interface CopyableTrade {
  id: string; tokenSymbol: string; tokenName: string; tokenMint: string
  amountSol: number; bondingProgress: number|null; txSignature: string|null
  reasoning: string|null; createdAt: string; sold: boolean; sellPnl: number|null
}
interface ThinkingLog { id: string; type: string; message: string; createdAt: string }
interface Strategy { id: string; rule: string; source: string; createdAt: string }
interface BrainTrade { id: string; action: string; tokenSymbol: string; amountSol: number; pnl: number|null; pnlPercent: number|null; reasoning: string; bondingProgress: number|null; replies: number|null; createdAt: string }
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
  const [brainTrades, setBrainTrades] = useState<BrainTrade[]>([])
  const [copyTrades, setCopyTrades] = useState<CopyableTrade[]>([])
  const [walletCopied, setWalletCopied] = useState(false)
  const termRef = useRef<HTMLDivElement>(null)
  const lastThinkingRef = useRef<string>('')

  // Poll stats
  useEffect(() => {
    const load = () => fetch(`/api/stats?t=${Date.now()}`, { cache: 'no-store' }).then(r => r.json()).then(setStats).catch(() => {})
    load()
    const i = setInterval(load, 10000)
    return () => clearInterval(i)
  }, [])

  // Poll thinking logs
  useEffect(() => {
    const load = () => {
      const since = lastThinkingRef.current
      const url = since ? `/api/thinking?since=${new Date(since).getTime()}&t=${Date.now()}` : `/api/thinking?limit=50&t=${Date.now()}`
      fetch(url, { cache: 'no-store' }).then(r => r.json()).then(data => {
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

  // Poll trades & strategies & copy trades when on those tabs
  useEffect(() => {
    if (tab === 'trades') fetch('/api/trades').then(r => r.json()).then(d => setTrades(d.trades || [])).catch(() => {})
    if (tab === 'strategy') fetch(`/api/strategy?t=${Date.now()}`, { cache: 'no-store' }).then(r => r.json()).then(d => { setStrategies(d.strategies || []); setBrainTrades(d.trades || []) }).catch(() => {})
    if (tab === 'copytrade') {
      const load = () => fetch('/api/copy/trades').then(r => r.json()).then(d => setCopyTrades(d.trades || [])).catch(() => {})
      load()
      const i = setInterval(load, 5000)
      return () => clearInterval(i)
    }
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
          <button onClick={() => setTab('copytrade')} style={{ background: '#00e676', color: '#000', fontWeight: 800, border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', fontSize: 13 }}>Copy Trade</button>
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
            {/* Learned Rules */}
            <div style={{ color: '#00e676', fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
              {'// LEARNED STRATEGIES'}<br/>
              <span style={{ color: '#3a3d52', fontSize: 12 }}>{'// every winning trade teaches the bot something new'}</span>
            </div>
            {strategies.length === 0 ? (
              <div style={{ padding: '20px 0 30px', textAlign: 'center' }}>
                <div style={{ color: '#3a3d52', fontSize: 13 }}>no strategies learned yet. waiting for profitable trades...</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
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

            {/* Trade Reasoning */}
            <div style={{ color: '#ffab00', fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
              {'// TRADE REASONING'}<br/>
              <span style={{ color: '#3a3d52', fontSize: 12 }}>{'// why the bot entered and exited each position'}</span>
            </div>
            {brainTrades.length === 0 ? (
              <div style={{ padding: '20px 0', textAlign: 'center' }}>
                <div style={{ color: '#3a3d52', fontSize: 13 }}>no trades yet.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {brainTrades.map(t => (
                  <div key={t.id} style={{ padding: 12, background: '#12141c', borderRadius: 8, borderLeft: `3px solid ${t.action === 'buy' ? '#ffab00' : t.pnl !== null && t.pnl >= 0 ? '#00e676' : '#ff1744'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: t.action === 'buy' ? '#ffab00' : '#bb86fc', fontSize: 11, fontWeight: 700 }}>{t.action.toUpperCase()}</span>
                        <span style={{ color: '#00e676', fontWeight: 700, fontSize: 13 }}>${t.tokenSymbol}</span>
                        <span style={{ color: '#5a5e72', fontSize: 11 }}>{t.amountSol} SOL</span>
                        {t.bondingProgress && <span style={{ color: '#3a3d52', fontSize: 11 }}>{t.bondingProgress}% bonding</span>}
                        {t.replies && <span style={{ color: '#3a3d52', fontSize: 11 }}>{t.replies} replies</span>}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {t.pnlPercent !== null && (
                          <span style={{ color: t.pnlPercent >= 0 ? '#00e676' : '#ff1744', fontSize: 12, fontWeight: 700 }}>
                            {t.pnlPercent >= 0 ? '+' : ''}{t.pnlPercent.toFixed(1)}%
                          </span>
                        )}
                        <span style={{ color: '#3a3d52', fontSize: 10 }}>{timeAgo(t.createdAt)}</span>
                      </div>
                    </div>
                    <div style={{ color: '#8b8fa3', fontSize: 12, lineHeight: 1.5 }}>{t.reasoning}</div>
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
            <div style={{ maxWidth: 640, margin: '24px auto' }}>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: 24, fontFamily: 'monospace' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#00e676', marginBottom: 6 }}>// COPY TRADE</div>
                <div style={{ color: '#5a5e72', fontSize: 12 }}>copy the bot wallet. mirror its trades from your own terminal.</div>
              </div>

              {/* Bot Wallet Card */}
              <div style={{ background: '#12141c', borderRadius: 10, padding: 20, border: '1px solid #1a1c28', marginBottom: 16 }}>
                <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10, fontFamily: 'monospace' }}>bot wallet address</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <code style={{ flex: 1, fontSize: 13, color: '#00e676', background: '#0d0e14', padding: '10px 14px', borderRadius: 6, border: '1px solid #1a1c28', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                    {wallet}
                  </code>
                  <button onClick={() => { navigator.clipboard.writeText(wallet); setWalletCopied(true); setTimeout(() => setWalletCopied(false), 2000) }} style={{
                    padding: '10px 16px', borderRadius: 6, background: walletCopied ? '#00e676' : '#1a1c28',
                    color: walletCopied ? '#000' : '#8b8fa3', border: '1px solid #2a2d3e',
                    fontSize: 12, cursor: 'pointer', fontFamily: 'monospace', fontWeight: 700, whiteSpace: 'nowrap'
                  }}>
                    {walletCopied ? 'COPIED' : 'COPY'}
                  </button>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  <a href={`https://solscan.io/account/${wallet}`} target="_blank" style={{
                    flex: 1, textAlign: 'center', padding: '8px', borderRadius: 6,
                    background: '#1a1c28', border: '1px solid #2a2d3e',
                    color: '#8b8fa3', textDecoration: 'none', fontFamily: 'monospace', fontSize: 11
                  }}>solscan</a>
                  <a href={`https://pump.fun/profile/${wallet}`} target="_blank" style={{
                    flex: 1, textAlign: 'center', padding: '8px', borderRadius: 6,
                    background: '#1a1c28', border: '1px solid #2a2d3e',
                    color: '#8b8fa3', textDecoration: 'none', fontFamily: 'monospace', fontSize: 11
                  }}>pump.fun profile</a>
                  <a href={`https://photon-sol.tinyastro.io/en/lp/${wallet}`} target="_blank" style={{
                    flex: 1, textAlign: 'center', padding: '8px', borderRadius: 6,
                    background: '#1a1c28', border: '1px solid #2a2d3e',
                    color: '#8b8fa3', textDecoration: 'none', fontFamily: 'monospace', fontSize: 11
                  }}>photon</a>
                </div>
              </div>

              {/* How to Copy */}
              <div style={{ background: '#12141c', borderRadius: 10, padding: 20, border: '1px solid #1a1c28', marginBottom: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: '#00e676', marginBottom: 12 }}>// HOW TO COPY TRADE</div>
                <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#5a5e72', lineHeight: 2.2 }}>
                  <span style={{ color: '#00e676' }}>1.</span> copy the bot wallet above<br/>
                  <span style={{ color: '#00e676' }}>2.</span> paste it into your copy trade tool (GMGN, Photon, BullX, etc)<br/>
                  <span style={{ color: '#00e676' }}>3.</span> set your trade size and slippage<br/>
                  <span style={{ color: '#00e676' }}>4.</span> when the bot buys, your tool auto-mirrors the trade<br/>
                  <span style={{ color: '#00e676' }}>5.</span> watch the terminal tab for live thinking and reasoning
                </div>
              </div>

              {/* Recent Bot Trades */}
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#3a3d52', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                recent bot trades (last 24h)
              </div>

              {copyTrades.length === 0 ? (
                <div style={{ background: '#12141c', borderRadius: 10, padding: 40, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ color: '#3a3d52', fontFamily: 'monospace', fontSize: 13 }}>no trades yet. waiting for bot to buy...</div>
                  <div style={{ color: '#2a2d3e', fontFamily: 'monospace', fontSize: 11, marginTop: 8 }}>trades appear here within seconds of execution</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {copyTrades.map(ct => (
                    <div key={ct.id} style={{
                      background: '#12141c', borderRadius: 8, padding: 14,
                      border: '1px solid #1a1c28',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, fontFamily: 'monospace' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: '#00e676', fontWeight: 700, fontSize: 14 }}>${ct.tokenSymbol}</span>
                          <span style={{ color: '#3a3d52', fontSize: 11 }}>{ct.tokenName}</span>
                          {ct.sold && (
                            <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: ct.sellPnl !== null && ct.sellPnl >= 0 ? 'rgba(0,230,118,0.1)' : 'rgba(255,23,68,0.1)', color: ct.sellPnl !== null && ct.sellPnl >= 0 ? '#00e676' : '#ff1744' }}>
                              {ct.sellPnl !== null ? `${ct.sellPnl >= 0 ? '+' : ''}${ct.sellPnl.toFixed(1)}%` : 'SOLD'}
                            </span>
                          )}
                        </div>
                        <span style={{ color: '#3a3d52', fontSize: 11, fontFamily: 'monospace' }}>{timeAgo(ct.createdAt)}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 12, fontSize: 11, color: '#5a5e72', fontFamily: 'monospace', marginBottom: 8 }}>
                        <span>size: {ct.amountSol} SOL</span>
                        {ct.bondingProgress && <span>bonding: {ct.bondingProgress}%</span>}
                      </div>
                      {ct.reasoning && (
                        <div style={{ fontSize: 11, color: '#5a5e72', fontFamily: 'monospace', background: '#0d0e14', padding: '8px 10px', borderRadius: 4, marginBottom: 8, lineHeight: 1.5 }}>
                          {ct.reasoning}
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: 6 }}>
                        <a href={`https://pump.fun/coin/${ct.tokenMint}`} target="_blank" style={{
                          padding: '6px 12px', borderRadius: 4, background: '#1a1c28', border: '1px solid #2a2d3e',
                          color: '#8b8fa3', textDecoration: 'none', fontFamily: 'monospace', fontSize: 10
                        }}>pump.fun</a>
                        {ct.txSignature && (
                          <a href={`https://solscan.io/tx/${ct.txSignature}`} target="_blank" style={{
                            padding: '6px 12px', borderRadius: 4, background: '#1a1c28', border: '1px solid #2a2d3e',
                            color: '#8b8fa3', textDecoration: 'none', fontFamily: 'monospace', fontSize: 10
                          }}>tx</a>
                        )}
                        <button onClick={() => { navigator.clipboard.writeText(ct.tokenMint) }} style={{
                          padding: '6px 12px', borderRadius: 4, background: '#1a1c28', border: '1px solid #2a2d3e',
                          color: '#8b8fa3', fontFamily: 'monospace', fontSize: 10, cursor: 'pointer'
                        }}>copy CA</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Recommended Tools */}
              <div style={{ background: '#12141c', borderRadius: 10, padding: 16, border: '1px solid #1a1c28', marginTop: 16, fontFamily: 'monospace' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#00e676', marginBottom: 10 }}>// RECOMMENDED COPY TRADE TOOLS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { name: 'GMGN', url: 'https://gmgn.ai', desc: 'paste wallet, set auto-copy' },
                    { name: 'Photon', url: 'https://photon-sol.tinyastro.io', desc: 'copy trade tab, add wallet' },
                    { name: 'BullX', url: 'https://bullx.io', desc: 'wallet tracker + auto-buy' },
                    { name: 'Trojan Bot', url: 'https://t.me/solaborgg_bot', desc: 'telegram bot, /copy command' },
                  ].map(tool => (
                    <a key={tool.name} href={tool.url} target="_blank" style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '8px 12px', borderRadius: 6, background: '#0d0e14',
                      border: '1px solid #1a1c28', textDecoration: 'none',
                    }}>
                      <span style={{ color: '#c8cad8', fontSize: 12 }}>{tool.name}</span>
                      <span style={{ color: '#3a3d52', fontSize: 11 }}>{tool.desc}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Info Cards */}
              <div style={{ display: 'flex', gap: 12, fontFamily: 'monospace', marginTop: 16 }}>
                <div style={{ flex: 1, background: '#12141c', borderRadius: 8, padding: 14, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>model</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>non-custodial</div>
                </div>
                <div style={{ flex: 1, background: '#12141c', borderRadius: 8, padding: 14, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>bot profits</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#00e676' }}>100% recycled</div>
                </div>
                <div style={{ flex: 1, background: '#12141c', borderRadius: 8, padding: 14, border: '1px solid #1a1c28', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#3a3d52', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>on-chain</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>fully transparent</div>
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
