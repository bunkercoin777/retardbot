export interface Trade {
  id: string
  token: string
  symbol: string
  action: 'buy' | 'sell'
  amountSol: number
  tokenAmount: string
  pnl: number | null
  pnlPercent: number | null
  timestamp: number
  txSignature: string
  bondingProgress: number
  marketCap: number
}

export interface ThinkingLog {
  id: string
  timestamp: number
  type: 'scan' | 'analysis' | 'decision' | 'execute' | 'result' | 'learn' | 'error'
  message: string
}

export interface Strategy {
  id: string
  rule: string
  source: string // which trade taught this
  addedAt: number
  winRate: number
}

export interface BotState {
  wallet: string
  balance: number
  totalTrades: number
  wins: number
  losses: number
  totalPnl: number
  isLive: boolean
  currentPosition: {
    token: string
    symbol: string
    entryPrice: number
    amountSol: number
    currentPnl: number
  } | null
}
