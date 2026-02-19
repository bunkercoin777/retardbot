import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'retardbot.fun — AI Degen Trading Bot',
  description: 'Watch our retarded AI bot trade memecoins in real-time. Copy its trades. Somehow it makes money.',
  icons: { icon: '/icon.jpg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
