import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const trades = await prisma.rbTrade.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })
  return NextResponse.json({ trades, total: trades.length })
}
