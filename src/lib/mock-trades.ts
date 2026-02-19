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

// Mock data — will be replaced with real trades from the bot
export const MOCK_TRADES: Trade[] = [
  {
    id: '1', token: 'JESUS', symbol: 'JESUS', image: 'https://pump.fun/coin-placeholder.png',
    action: 'buy', amount: 0.05, price: 0.000000072, pnl: null, pnlPercent: null,
    timestamp: Date.now() - 3600000, reasoning: 'Dual-snapshot showed +22.9% acceleration in 30s. Classic graduation play.',
    bondingProgress: 72, marketCap: 45000, replies: 89
  },
  {
    id: '2', token: 'JESUS', symbol: 'JESUS', image: 'https://pump.fun/coin-placeholder.png',
    action: 'sell', amount: 0.0972, price: 0.000000094, pnl: 0.0472, pnlPercent: 94.4,
    timestamp: Date.now() - 3200000, reasoning: 'Token graduated. Sold on PumpSwap AMM for +94.4% profit.',
    bondingProgress: 100, marketCap: 68000, replies: 142
  },
  {
    id: '3', token: 'LUDNUT', symbol: 'LUDNUT', image: 'https://pump.fun/coin-placeholder.png',
    action: 'buy', amount: 0.05, price: 0.000000065, pnl: null, pnlPercent: null,
    timestamp: Date.now() - 7200000, reasoning: '69% bonding with strong volume. Acceleration pattern detected.',
    bondingProgress: 69, marketCap: 38000, replies: 56
  },
  {
    id: '4', token: 'LUDNUT', symbol: 'LUDNUT', image: 'https://pump.fun/coin-placeholder.png',
    action: 'sell', amount: 0.0786, price: 0.000000098, pnl: 0.0286, pnlPercent: 57.2,
    timestamp: Date.now() - 6800000, reasoning: 'Graduated in 2 min! Sold in 3 chunks. Third chunk phantom scanner tried to block but went through.',
    bondingProgress: 100, marketCap: 72000, replies: 201
  },
  {
    id: '5', token: 'SMILEY', symbol: 'SMILEY', image: 'https://pump.fun/coin-placeholder.png',
    action: 'buy', amount: 0.05, price: 0.000000081, pnl: null, pnlPercent: null,
    timestamp: Date.now() - 10800000, reasoning: '79% bonding, decent reply count. Took the shot.',
    bondingProgress: 79, marketCap: 52000, replies: 34
  },
  {
    id: '6', token: 'SMILEY', symbol: 'SMILEY', image: 'https://pump.fun/coin-placeholder.png',
    action: 'sell', amount: 0.032, price: 0.000000059, pnl: -0.018, pnlPercent: -36,
    timestamp: Date.now() - 10200000, reasoning: 'Bonding collapsed to 59%. Stop loss triggered. Lesson: needed more acceleration confirmation.',
    bondingProgress: 59, marketCap: 31000, replies: 38
  },
  {
    id: '7', token: 'AI Championship', symbol: 'AI', image: 'https://pump.fun/coin-placeholder.png',
    action: 'buy', amount: 0.05, price: 0.000000086, pnl: null, pnlPercent: null,
    timestamp: Date.now() - 14400000, reasoning: '86% bonding, acceleration looked real. MISTAKE: only 4 replies.',
    bondingProgress: 86, marketCap: 58000, replies: 4
  },
  {
    id: '8', token: 'AI Championship', symbol: 'AI', image: 'https://pump.fun/coin-placeholder.png',
    action: 'sell', amount: 0.00652, price: 0.000000009, pnl: -0.0435, pnlPercent: -87,
    timestamp: Date.now() - 14000000, reasoning: 'RUG PULL. Dev dumped everything. 4 replies = death. Learned: minimum 8+ replies.',
    bondingProgress: 0.9, marketCap: 580, replies: 4
  },
]

export const BOT_STATS = {
  totalTrades: 36,
  winRate: 42,
  totalPnl: 0.0843,
  biggestWin: 94.4,
  biggestLoss: -87,
  avgHoldTime: '4m 32s',
  activePosition: null as Trade | null,
  balance: 1.51,
  lessonsLearned: [
    '4 replies = rug risk. Minimum 8+ replies.',
    'Post-graduation dumps happen with low reply counts even if token graduates.',
    'Dual-snapshot acceleration > single snapshot. Need 2 readings 20-30s apart.',
    'Don\'t panic sell. Set trade guards and let them trigger.',
    'Buy the original, not the copy. Older token with higher mcap wins.',
    'Phantom scanner blocks are inconsistent. Always verify on-chain state.',
    '5-6am AEST is dead market. Wait for US evening hours.',
  ]
}
