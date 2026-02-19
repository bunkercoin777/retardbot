export const dynamic = 'force-dynamic'
export const revalidate = 0

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const strategies = await prisma.rbStrategy.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json({ strategies, total: strategies.length })
}

