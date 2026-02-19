import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// Get recent bot trades to copy (buys with token info, last 24h)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = Math.min(Number(searchParams.get('limit')) || 20, 50)

    const trades = await prisma.rbTrade.findMany({
      where: { action: 'buy', createdAt: { gte: new Date(Date.now() - 86400000) } },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })

    // Get matching sells for PnL
    const mints = [...new Set(trades.map(t => t.tokenMint))]
    const sells = await prisma.rbTrade.findMany({
      where: { action: 'sell', tokenMint: { in: mints } },
      orderBy: { createdAt: 'desc' },
    })
    const sellMap = new Map(sells.map(s => [s.tokenMint, s]))

    return NextResponse.json({
      trades: trades.map(t => {
        const sell = sellMap.get(t.tokenMint)
        return {
          id: t.id,
          tokenSymbol: t.tokenSymbol,
          tokenName: t.tokenName,
          tokenMint: t.tokenMint,
          amountSol: t.amountSol,
          bondingProgress: t.bondingProgress,
          txSignature: t.txSignature,
          reasoning: t.reasoning,
          createdAt: t.createdAt,
          sold: !!sell,
          sellPnl: sell?.pnlPercent ?? null,
        }
      }),
    })
  } catch (e: unknown) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }
}
