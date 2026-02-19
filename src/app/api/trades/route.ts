export const dynamic = 'force-dynamic'
export const revalidate = 0

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const trades = await prisma.rbTrade.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })
  return NextResponse.json({ trades, total: trades.length }, {
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate', 'Pragma': 'no-cache' }
  })
}

