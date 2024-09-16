import type { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import yf from 'yahoo-finance2'


const intervals = ["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1wk", "1mo", "3mo"]

type Interval = "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "90m" | "1h" | "1d" | "5d" | "1wk" | "1mo" | "3mo" | undefined

export async function GET(
  req: NextApiRequest,
) {
  const searchParams = new URL(req.url || '').searchParams

  const symbol = searchParams.get('symbol') as string | undefined
  const interval = searchParams.get('interval') as Interval | undefined
  const startDate = searchParams.get('startDate') as string | undefined
  const endDate = searchParams.get('endDate') as string | undefined


  if (!symbol) {
    return NextResponse.json({ error: 'symbol is required to chart action' })
  }

  if (!interval) {
    return NextResponse.json({ error: 'interval is required to chart action', intervals })
  }

  if (!startDate) {
    return NextResponse.json({ error: 'startDate is required to chart action' })
  }

  const chart = await yf.chart(symbol, { period1: startDate, period2: endDate, interval })
  return NextResponse.json({ ...chart, message: 'receba!' })
}