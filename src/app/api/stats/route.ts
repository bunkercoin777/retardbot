import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const WALLET = process.env.BOT_WALLET || '8CdCDJkDCjL1XJqEXbLzTdYDTaoeHgaof5VxawRS1f3h'
const HELIUS = `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`

export async function GET() {
  // Get balance from chain
  let balance = 0
  try {
    const r = await fetch(HELIUS, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'getBalance', params: [WALLET] })
    }).then(r => r.json())
    balance = (r.result?.value || 0) / 1e9
  } catch {}

  // Get trade stats
  const sells = await prisma.rbTrade.findMany({ where: { action: 'sell', pnl: { not: null } } })
  const wins = sells.filter(t => (t.pnl || 0) > 0).length
  const losses = sells.filter(t => (t.pnl || 0) <= 0).length
  const totalPnl = sells.reduce((sum, t) => sum + (t.pnl || 0), 0)
  const totalTrades = await prisma.rbTrade.count()
  const bestTrade = sells.length ? Math.max(...sells.map(t => t.pnlPercent || 0)) : 0
  const worstTrade = sells.length ? Math.min(...sells.map(t => t.pnlPercent || 0)) : 0

  // Get bot state via raw query to avoid caching
  const stateRows = await prisma.$queryRawUnsafe<{isLive: boolean, balance: number}[]>(
    'SELECT "isLive", balance FROM rb_bot_state WHERE id = $1', 'singleton'
  )
  const state = stateRows[0]

  // Also consider "live" if there's a thinking log in the last 2 minutes
  const recentThinking = await prisma.rbThinking.count({
    where: { createdAt: { gte: new Date(Date.now() - 120000) } }
  })

  return NextResponse.json({
    wallet: WALLET,
    balance: Math.round(balance * 10000) / 10000,
    totalTrades,
    wins, losses,
    winRate: sells.length ? Math.round(wins / sells.length * 100 * 10) / 10 : 0,
    totalPnl: Math.round(totalPnl * 10000) / 10000,
    biggestWin: Math.round(bestTrade * 10) / 10,
    biggestLoss: Math.round(worstTrade * 10) / 10,
    isLive: (state?.isLive || false) || recentThinking > 0
  })
}
