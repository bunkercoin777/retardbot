export interface Trade {
  id: string
  token: string
  symbol: string
  image: string
  action: 'buy' | 'sell'
  amount: number
  price: number
  pnl: number | null
  pnlPercent: number | null
  timestamp: number
  reasoning: string
  bondingProgress: number
  marketCap: number
  replies: number
}

// Fresh wallet — no trades yet
export const MOCK_TRADES: Trade[] = []

export const BOT_STATS = {
  totalTrades: 0,
  winRate: 0,
  totalPnl: 0,
  biggestWin: 0,
  biggestLoss: 0,
  avgHoldTime: '--',
  activePosition: null as Trade | null,
  balance: 0,
  lessonsLearned: [] as string[]
}
