'use client'
import { useState } from 'react'
import { MOCK_TRADES, BOT_STATS } from '@/lib/mock-trades'

function timeAgo(ts: number) {
  const s = Math.floor((Date.now() - ts) / 1000)
  if (s < 60) return `${s}s ago`
  if (s < 3600) return `${Math.floor(s/60)}m ago`
  if (s < 86400) return `${Math.floor(s/3600)}h ago`
  return `${Math.floor(s/86400)}d ago`
}

function formatSol(n: number) {
  return n >= 0 ? `+${n.toFixed(4)}` : n.toFixed(4)
}

type Tab = 'trades' | 'brain' | 'copytrade'

export default function Home() {
  const [tab, setTab] = useState<Tab>('trades')
  const [showAllTrades, setShowAllTrades] = useState(false)

  const displayTrades = showAllTrades ? MOCK_TRADES : MOCK_TRADES.slice(0, 6)

  return (
    <div style={{ minHeight: '100vh', background: '#12141c' }}>
      {/* Navbar - pump.fun style */}
      <nav style={{ 
        borderBottom: '1px solid #2a2d3e', 
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: '#12141c',
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/icon.jpg" alt="retardbot" style={{ width: 36, height: 36, borderRadius: 8 }} />
          <span style={{ fontSize: 20, fontWeight: 800, color: '#00e676' }}>retardbot</span>
          <span style={{ fontSize: 14, color: '#5a5e72' }}>.fun</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: 6,
            background: '#1e2030', borderRadius: 20, padding: '6px 14px',
            border: '1px solid #2a2d3e'
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00e676' }} className="pulse-green" />
            <span style={{ fontSize: 13, color: '#00e676', fontWeight: 600 }}>LIVE</span>
          </div>
          <button className="btn-green" style={{ fontSize: 14, padding: '8px 20px' }}>
            Copy Trade
          </button>
        </div>
      </nav>

      {/* Hero - Bot Stats */}
      <div style={{ 
        padding: '40px 24px 32px',
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/icon.jpg" alt="retardbot" style={{ width: 80, height: 80, borderRadius: 16, margin: '0 auto 16px' }} />
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>
            <span style={{ color: '#00e676' }}>retardbot</span>
          </h1>
          <p style={{ color: '#8b8fa3', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            A retarded AI bot that trades memecoins on pump.fun. 
            Watch it learn. Copy its trades. It&apos;s not smart, but it&apos;s trying.
          </p>
        </div>

        {/* Stats Grid - pump.fun style */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 12,
          marginBottom: 32
        }}>
          {[
            { label: 'Balance', value: `${BOT_STATS.balance} SOL`, color: '#fff' },
            { label: 'Total Trades', value: BOT_STATS.totalTrades.toString(), color: '#fff' },
            { label: 'Win Rate', value: `${BOT_STATS.winRate}%`, color: BOT_STATS.winRate >= 50 ? '#00e676' : '#ff1744' },
            { label: 'Total PnL', value: `${formatSol(BOT_STATS.totalPnl)} SOL`, color: BOT_STATS.totalPnl >= 0 ? '#00e676' : '#ff1744' },
            { label: 'Best Trade', value: `+${BOT_STATS.biggestWin}%`, color: '#00e676' },
            { label: 'Worst Trade', value: `${BOT_STATS.biggestLoss}%`, color: '#ff1744' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#5a5e72', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ 
          display: 'flex', gap: 0, marginBottom: 24,
          borderBottom: '1px solid #2a2d3e'
        }}>
          {(['trades', 'brain', 'copytrade'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '12px 24px',
              background: 'none',
              border: 'none',
              borderBottom: tab === t ? '2px solid #00e676' : '2px solid transparent',
              color: tab === t ? '#00e676' : '#5a5e72',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}>
              {t === 'trades' ? '📊 Live Trades' : t === 'brain' ? '🧠 Bot Brain' : '⚡ Copy Trade'}
            </button>
          ))}
        </div>

        {/* Trades Tab - pump.fun card grid */}
        {tab === 'trades' && (
          <div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 12 
            }}>
              {displayTrades.map(trade => (
                <div key={trade.id} className="card" style={{ padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ 
                        width: 40, height: 40, borderRadius: 8, 
                        background: trade.action === 'buy' ? 'rgba(0,230,118,0.15)' : 'rgba(255,23,68,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, fontWeight: 900,
                        color: trade.action === 'buy' ? '#00e676' : '#ff1744'
                      }}>
                        {trade.action === 'buy' ? '↗' : '↘'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>
                          <span style={{ color: trade.action === 'buy' ? '#00e676' : '#ff1744' }}>
                            {trade.action.toUpperCase()}
                          </span>
                          {' '}${trade.symbol}
                        </div>
                        <div style={{ fontSize: 12, color: '#5a5e72' }}>{timeAgo(trade.timestamp)}</div>
                      </div>
                    </div>
                    {trade.pnlPercent !== null && (
                      <div style={{ 
                        padding: '4px 10px', borderRadius: 6,
                        background: trade.pnlPercent >= 0 ? 'rgba(0,230,118,0.15)' : 'rgba(255,23,68,0.15)',
                        color: trade.pnlPercent >= 0 ? '#00e676' : '#ff1744',
                        fontSize: 14, fontWeight: 800
                      }}>
                        {trade.pnlPercent >= 0 ? '+' : ''}{trade.pnlPercent.toFixed(1)}%
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: 16, marginBottom: 10, fontSize: 13 }}>
                    <div>
                      <span style={{ color: '#5a5e72' }}>Amount: </span>
                      <span style={{ fontWeight: 600 }}>{trade.amount} SOL</span>
                    </div>
                    <div>
                      <span style={{ color: '#5a5e72' }}>MC: </span>
                      <span style={{ fontWeight: 600 }}>${(trade.marketCap/1000).toFixed(0)}k</span>
                    </div>
                    <div>
                      <span style={{ color: '#5a5e72' }}>Replies: </span>
                      <span style={{ fontWeight: 600 }}>{trade.replies}</span>
                    </div>
                  </div>

                  {/* Bonding Progress Bar */}
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                      <span style={{ color: '#5a5e72' }}>Bonding Curve</span>
                      <span style={{ color: trade.bondingProgress >= 80 ? '#00e676' : '#8b8fa3', fontWeight: 600 }}>
                        {trade.bondingProgress.toFixed(1)}%
                      </span>
                    </div>
                    <div style={{ height: 4, borderRadius: 2, background: '#2a2d3e', overflow: 'hidden' }}>
                      <div style={{ 
                        height: '100%', borderRadius: 2,
                        width: `${Math.min(trade.bondingProgress, 100)}%`,
                        background: trade.bondingProgress >= 80 ? '#00e676' : trade.bondingProgress >= 50 ? '#ffab00' : '#ff1744'
                      }} />
                    </div>
                  </div>

                  {/* Reasoning */}
                  <div style={{ 
                    fontSize: 12, color: '#8b8fa3', lineHeight: 1.5,
                    background: '#12141c', borderRadius: 8, padding: 10,
                    borderLeft: '3px solid #2a2d3e'
                  }}>
                    🤖 {trade.reasoning}
                  </div>
                </div>
              ))}
            </div>
            {!showAllTrades && MOCK_TRADES.length > 6 && (
              <button onClick={() => setShowAllTrades(true)} style={{
                display: 'block', margin: '20px auto', padding: '10px 32px',
                background: '#1e2030', border: '1px solid #2a2d3e', borderRadius: 8,
                color: '#8b8fa3', fontWeight: 600, cursor: 'pointer', fontSize: 14
              }}>
                Show all trades →
              </button>
            )}
          </div>
        )}

        {/* Brain Tab */}
        {tab === 'brain' && (
          <div>
            <div className="card" style={{ padding: 24, marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, color: '#00e676' }}>
                🧠 What the bot has learned
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {BOT_STATS.lessonsLearned.map((lesson, i) => (
                  <div key={i} style={{ 
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    padding: 12, background: '#12141c', borderRadius: 8
                  }}>
                    <div style={{ 
                      minWidth: 24, height: 24, borderRadius: '50%',
                      background: '#252840', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 700, color: '#00e676'
                    }}>{i + 1}</div>
                    <div style={{ fontSize: 14, color: '#c8cad8', lineHeight: 1.5 }}>{lesson}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>
                📈 Trading Strategy
              </h3>
              <div style={{ fontSize: 14, color: '#8b8fa3', lineHeight: 1.8 }}>
                <p style={{ marginBottom: 12 }}>
                  <strong style={{ color: '#fff' }}>Pre-Graduation Sniper:</strong> Dual-snapshot scanner takes two readings 20-30s apart. 
                  Looks for tokens accelerating toward graduation (80%+ bonding) with strong community (8+ replies).
                </p>
                <p style={{ marginBottom: 12 }}>
                  <strong style={{ color: '#fff' }}>Graduated Dip Buyer:</strong> Scans ~100 recently graduated tokens on PumpSwap AMM. 
                  Buys dips of -15%+ when holder count is strong. Also catches momentum (+5-15%).
                </p>
                <p>
                  <strong style={{ color: '#fff' }}>Risk Management:</strong> Auto take-profit at +20%, stop-loss at -25%. 
                  Never holds longer than 5 minutes. Max position size 10% of bankroll.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Copy Trade Tab */}
        {tab === 'copytrade' && (
          <div>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Copy Trade retardbot</h3>
              <p style={{ color: '#8b8fa3', fontSize: 15, marginBottom: 24, maxWidth: 400, margin: '0 auto 24px', lineHeight: 1.6 }}>
                When the bot buys, you buy. When the bot sells, you sell.
                Automatic. Real-time. Retarded.
              </p>

              <div style={{ 
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
                maxWidth: 400, margin: '0 auto 24px'
              }}>
                <div className="card" style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, color: '#5a5e72', textTransform: 'uppercase', marginBottom: 4 }}>Trade Size</div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>0.05-0.5 SOL</div>
                </div>
                <div className="card" style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, color: '#5a5e72', textTransform: 'uppercase', marginBottom: 4 }}>Fee</div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>1%</div>
                </div>
              </div>

              <div style={{ 
                background: '#12141c', borderRadius: 12, padding: 20, 
                maxWidth: 400, margin: '0 auto 24px',
                border: '1px solid #2a2d3e'
              }}>
                <div style={{ fontSize: 13, color: '#5a5e72', marginBottom: 12, textTransform: 'uppercase' }}>
                  Your trade size per position
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[0.05, 0.1, 0.25, 0.5].map(amt => (
                    <button key={amt} style={{
                      flex: 1, padding: '10px 0', borderRadius: 8,
                      background: amt === 0.1 ? '#00e676' : '#1e2030',
                      color: amt === 0.1 ? '#000' : '#8b8fa3',
                      border: amt === 0.1 ? 'none' : '1px solid #2a2d3e',
                      fontWeight: 700, fontSize: 14, cursor: 'pointer'
                    }}>
                      {amt}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-green" style={{ 
                fontSize: 16, padding: '14px 48px', 
                borderRadius: 12, width: '100%', maxWidth: 400 
              }}>
                Connect Wallet & Start Copying
              </button>

              <div style={{ marginTop: 16, fontSize: 12, color: '#5a5e72' }}>
                🔒 Non-custodial. You approve each trade via your wallet.
              </div>
            </div>

            <div className="card" style={{ padding: 24, marginTop: 16 }}>
              <h4 style={{ fontWeight: 700, marginBottom: 12 }}>How it works</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { step: '1', text: 'Connect your Solana wallet (Phantom, Solflare, etc)' },
                  { step: '2', text: 'Set your trade size per position (how much SOL per trade)' },
                  { step: '3', text: 'The bot scans pump.fun for opportunities 24/7' },
                  { step: '4', text: 'When it buys, your wallet automatically buys the same token' },
                  { step: '5', text: 'When it sells, your wallet automatically sells too' },
                  { step: '6', text: 'Watch your PnL grow (or shrink). It\'s retarded, remember.' },
                ].map(s => (
                  <div key={s.step} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ 
                      minWidth: 28, height: 28, borderRadius: '50%',
                      background: '#00e676', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: 13
                    }}>{s.step}</div>
                    <div style={{ fontSize: 14, color: '#c8cad8' }}>{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{ 
          textAlign: 'center', padding: '40px 0 24px',
          borderTop: '1px solid #2a2d3e', marginTop: 40
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 12 }}>
            <a href="https://x.com/retardbotfun" target="_blank" style={{ color: '#5a5e72', textDecoration: 'none', fontSize: 14 }}>𝕏 Twitter</a>
            <a href="https://pump.fun" target="_blank" style={{ color: '#5a5e72', textDecoration: 'none', fontSize: 14 }}>pump.fun</a>
            <a href="#" style={{ color: '#5a5e72', textDecoration: 'none', fontSize: 14 }}>Docs</a>
          </div>
          <p style={{ color: '#3a3d52', fontSize: 12 }}>
            retardbot.fun — Not financial advice. The bot is literally retarded.
          </p>
        </footer>
      </div>
    </div>
  )
}
