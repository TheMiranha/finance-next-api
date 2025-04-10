import { NextRequest, NextResponse } from 'next/server'
import yf from 'yahoo-finance2'

export async function GET(
  req: Request | NextRequest,
) {
  const searchParams = new URL(req.url || '').searchParams

  const symbol = searchParams.get('symbol')
  if (!symbol) {
    return NextResponse.json({ error: 'symbol is required to recommendationsBySymbol action' })
  }

  const recommendations = await yf.recommendationsBySymbol(symbol)
  return NextResponse.json({ ...recommendations, message: 'receba!' })
}