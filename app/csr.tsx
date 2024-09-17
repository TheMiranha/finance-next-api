'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import axios from 'axios'
import { ScrollArea } from "@/components/ui/scroll-area";

export function CSR() {

  const [search, setSearch] = useState<string>('')

  const [quote, setQuote] = useState<string>('')

  const [recommendations, setRecommendations] = useState<string>('')

  const [chartSymbol, setChartSymbol] = useState<string>('')
  const [chartInterval, setChartInterval] = useState<string>('')
  const [chartStartDate, setChartStartDate] = useState<string>('')


  const handleSearch = async () => {
    const url = '/api/search?symbol=' + search
    window.open(url)
  }

  const handleQuote = async () => {
    const url = '/api/quote?symbol=' + quote
    window.open(url)
  }

  const handleRecommendations = async () => {
    const url = '/api/recommendationsBySymbol?symbol=' + recommendations
    window.open(url)
  }

  const handleChart = async () => {
    const url = '/api/chart?symbol=' + chartSymbol + '&startDate=' + chartStartDate + '&interval=' + chartInterval
    window.open(url)
  }

  return (
    <div className='px-4 py-2 space-y-4'>
      <Label className='text-2xl bg-gradient-to-r from-fuchsia-500 to-rose-800 bg-clip-text text-transparent'>Documentação dessa caralha</Label>
      <Card>
        <CardHeader>
          <CardDescription>Search</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>
            Endpoint: <Badge>/api/search?symbol=SYMBOL</Badge>
          </Label>
          <Separator className='my-4' />
          <Label className='text-lg'>
            Testar
          </Label>
          <div className='space-y-2 mt-4'>
            <div className='space-y-2'>
              <Label>Symbol</Label>
              <Input
                placeholder='SYMBOL'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <Button onClick={handleSearch}>BATER NESSA PORRA</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Quote</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>
            Endpoint: <Badge>/api/quote?symbol=SYMBOL</Badge>
          </Label>
          <Separator className='my-4' />
          <Label className='text-lg'>
            Testar
          </Label>
          <div className='space-y-2 mt-4'>
            <div className='space-y-2'>
              <Label>Symbol</Label>
              <Input
                placeholder='SYMBOL'
                value={quote}
                onChange={e => setQuote(e.target.value)}
              />
            </div>
            <Button onClick={handleQuote}>BATER NESSA PORRA</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Recommendations by symbol</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>
            Endpoint: <Badge>/api/recommendationsBySymbol?symbol=SYMBOL</Badge>
          </Label>
          <Separator className='my-4' />
          <Label className='text-lg'>
            Testar
          </Label>
          <div className='space-y-2 mt-4'>
            <div className='space-y-2'>
              <Label>Symbol</Label>
              <Input
                placeholder='SYMBOL'
                value={recommendations}
                onChange={e => setRecommendations(e.target.value)}
              />
            </div>
            <Button onClick={handleRecommendations}>BATER NESSA PORRA</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Chart</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>
            Endpoint: <Badge>/api/chart?symbol=SYMBOL&startDate=START_DATE&interval=INTERVAL</Badge>
          </Label>
          <Separator className='my-4' />
          <Label className='text-lg'>
            Testar
          </Label>
          <div className='space-y-2 mt-4'>
            <div className='space-y-2'>
              <Label>Symbol</Label>
              <Input
                placeholder='SYMBOL'
                value={chartSymbol}
                onChange={e => setChartSymbol(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <Label>Interval</Label>
              <Input
                placeholder='INTERVAL'
                value={chartInterval}
                onChange={e => setChartInterval(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <Label>StartDate</Label>
              <Input
                placeholder='START DATE'
                value={chartStartDate}
                onChange={e => setChartStartDate(e.target.value)}
              />
            </div>
            <div className='space-y-2 flex flex-col'>
              <Label>EndDate</Label>
              <Label className='bg-gradient-to-r from-fuchsia-500 to-rose-800 bg-clip-text text-transparent'>Não vou colocar demo de tudo na documentação né caralho?</Label>
            </div>
            <Button onClick={handleChart}>BATER NESSA PORRA</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}