import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const limit = Number(req.nextUrl.searchParams.get('limit') || '50')
  const since = req.nextUrl.searchParams.get('since')
  
  const logs = await prisma.rbThinking.findMany({
    where: since ? { createdAt: { gt: new Date(Number(since)) } } : undefined,
    orderBy: { createdAt: 'desc' },
    take: limit
  })
  return NextResponse.json({ logs: logs.reverse() })
}
