export const dynamic = 'force-dynamic'
export const revalidate = 0

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const [strategies, trades] = await Promise.all([
    prisma.rbStrategy.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.rbTrade.findMany({
      where: { reasoning: { not: null } },
      orderBy: { createdAt: 'desc' },
      take: 30,
      select: { id: true, action: true, tokenSymbol: true, amountSol: true, pnl: true, pnlPercent: true, reasoning: true, bondingProgress: true, replies: true, createdAt: true }
    })
  ])
  return NextResponse.json({ strategies, trades, total: strategies.length }, {
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate', 'Pragma': 'no-cache' }
  })
}
