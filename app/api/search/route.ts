import type { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import yf from 'yahoo-finance2'

export async function GET(
  req: NextApiRequest,
) {
  const searchParams = new URL(req.url || '').searchParams

  const symbol = searchParams.get('symbol')
  if (!symbol) {
    return NextResponse.json({ error: 'symbol is required to search' })
  }
  const data = await yf.search(symbol, { lang: 'br' })
  return NextResponse.json({ quotes: data.quotes, news: data.news, message: 'receba!' })
}