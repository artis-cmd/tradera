'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, TrendingUp, Briefcase, Brain, Home, BookOpen, Play, BarChart3, LogOut, Monitor } from 'lucide-react'

interface StudyCategory {
  id: string
  title: string
  icon: React.ReactNode
  progress: number
  borderColor: string
  iconColor: string
  progressColor: string
}

export default function StudyPage() {
  const { logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories: StudyCategory[] = [
    {
      id: 'basics',
      title: 'Basics',
      icon: (
        <div className="w-8 h-8 flex flex-col justify-center items-center">
          <div className="w-6 h-1 bg-blue-600 mb-1"></div>
          <div className="w-4 h-1 bg-blue-600 mb-1"></div>
          <div className="w-2 h-1 bg-blue-600"></div>
        </div>
      ),
      progress: 13,
      borderColor: 'border-cyan-400',
      iconColor: 'bg-blue-600',
      progressColor: 'bg-cyan-400'
    },
    {
      id: 'market',
      title: 'Market',
      icon: <Search className="w-8 h-8 text-white" />,
      progress: 0,
      borderColor: 'border-blue-500',
      iconColor: 'bg-blue-500',
      progressColor: 'bg-blue-500'
    },
    {
      id: 'strategy',
      title: 'Strategy',
      icon: <Monitor className="w-8 h-8 text-white" />,
      progress: 0,
      borderColor: 'border-blue-800',
      iconColor: 'bg-blue-800',
      progressColor: 'bg-blue-800'
    },
    {
      id: 'risk',
      title: 'Risk',
      icon: <Briefcase className="w-8 h-8 text-white" />,
      progress: 0,
      borderColor: 'border-green-500',
      iconColor: 'bg-green-500',
      progressColor: 'bg-green-500'
    },
    {
      id: 'psychology',
      title: 'Psychology',
      icon: <Brain className="w-8 h-8 text-white" />,
      progress: 0,
      borderColor: 'border-yellow-500',
      iconColor: 'bg-yellow-500',
      progressColor: 'bg-yellow-500'
    }
  ]

  const menuItems = [
    { id: 'home', label: 'HOME', icon: Home, active: false },
    { id: 'study', label: 'STUDY', icon: BookOpen, active: true },
    { id: 'training', label: 'TRAINING', icon: Play, active: false },
    { id: 'simulator', label: 'SIMULATOR', icon: BarChart3, active: false },
    { id: 'live', label: 'LIVE', icon: BarChart3, active: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-blue-200 relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-6xl font-bold">€</span>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-4xl font-bold">$</span>
        </div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
          <BarChart3 className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
          <TrendingUp className="w-12 h-12" />
        </div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-2xl font-bold">¥</span>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4">
        <div className="flex items-center justify-between">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-blue-800">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-cyan-400 border-none p-0">
              <div className="p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <nav className="mt-8">
                {menuItems.map((item) => (
                  <div key={item.id} className="px-4 py-2">
                    <div className={`flex items-center space-x-3 p-3 rounded-lg ${
                      item.active ? 'bg-yellow-400 text-blue-800' : 'bg-white text-blue-800'
                    }`}>
                      <item.icon className="w-5 h-5" />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                  </div>
                ))}

                <div className="px-4 py-2 mt-4">
                  <button
                    onClick={logout}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white text-blue-800 w-full"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-semibold">LOGOUT</span>
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="absolute left-16 w-12 h-12 bg-[#1c4b8b] rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#1c4b8b] rounded-full flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          {/* Tooltip */}
          <div className="mb-8 relative">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block font-semibold">
              INCREASE YOUR TRADING KNOWLEDGE
            </div>
            <div className="absolute top-full left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-600"></div>
          </div>

          {/* Study Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className={`border-4 ${category.borderColor} hover:shadow-lg transition-shadow cursor-pointer bg-white`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 ${category.iconColor} rounded-lg flex items-center justify-center`}>
                      {category.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-blue-800 mb-6">{category.title}</h3>

                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-300 ${category.progressColor}`}
                        style={{ width: `${category.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-lg font-bold text-gray-700">{category.progress}%</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
