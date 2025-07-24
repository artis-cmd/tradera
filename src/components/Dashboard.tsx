'use client'

import { useAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { PushButton } from '@/components/ui/push-button'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#1c4b8b] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Turn Trader</h1>
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-[#1c4b8b] text-white text-sm">
                    {user?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-gray-700">
                  프로필 설정
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-700">
                  계정 설정
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-600 cursor-pointer"
                  onClick={logout}
                >
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">포트폴리오 개요</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#2eb667]">$12,450</div>
                    <div className="text-sm text-gray-500">총 자산</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#2eb667]">+$340</div>
                    <div className="text-sm text-gray-500">일일 수익</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-500">보유 종목</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1c4b8b]">2.8%</div>
                    <div className="text-sm text-gray-500">수익률</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trading Chart Area */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">차트</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-lg font-medium">트레이딩 차트</div>
                    <div className="text-sm">실제 환경에서는 TradingView 등의 차트가 여기에 표시됩니다</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Trades */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">최근 거래</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { symbol: 'AAPL', action: '매수', amount: '$1,200', profit: '+$45', time: '2시간 전' },
                    { symbol: 'GOOGL', action: '매도', amount: '$800', profit: '+$23', time: '4시간 전' },
                    { symbol: 'TSLA', action: '매수', amount: '$1,500', profit: '-$12', time: '1일 전' },
                  ].map((trade, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center space-x-4">
                        <div className="font-medium text-gray-900">{trade.symbol}</div>
                        <div className="text-sm text-gray-500">{trade.action}</div>
                        <div className="text-sm text-gray-700">{trade.amount}</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className={`text-sm font-medium ${trade.profit.startsWith('+') ? 'text-[#2eb667]' : 'text-red-500'}`}>
                          {trade.profit}
                        </div>
                        <div className="text-xs text-gray-500">{trade.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Trading */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">빠른 거래</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">종목</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>AAPL</option>
                    <option>GOOGL</option>
                    <option>TSLA</option>
                    <option>AMZN</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">수량</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="수량 입력"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <PushButton variant="primary">매수</PushButton>
                  <PushButton variant="secondary">매도</PushButton>
                </div>
              </CardContent>
            </Card>

            {/* Market Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">시장 현황</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'S&P 500', value: '4,567.89', change: '+1.2%', positive: true },
                    { name: 'NASDAQ', value: '14,234.56', change: '+0.8%', positive: true },
                    { name: 'DOW', value: '34,567.12', change: '-0.3%', positive: false },
                  ].map((index, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{index.name}</div>
                        <div className="text-sm text-gray-500">{index.value}</div>
                      </div>
                      <div className={`text-sm font-medium ${index.positive ? 'text-[#2eb667]' : 'text-red-500'}`}>
                        {index.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* News */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">주요 뉴스</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    '애플, 새로운 iPhone 발표 예정',
                    '테슬라 주가 급등, 새로운 모델 공개',
                    '연준 금리 인상 가능성 논의',
                  ].map((news, index) => (
                    <div key={index} className="text-sm text-gray-700 hover:text-[#1c4b8b] cursor-pointer transition-colors">
                      {news}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
