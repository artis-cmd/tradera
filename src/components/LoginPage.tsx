'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { PushButton } from '@/components/ui/push-button'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/hooks/use-toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(email, password)

      if (success) {
        toast({
          title: "로그인 성공!",
          description: "Turn Trader에 오신 것을 환영합니다.",
        })
      } else {
        toast({
          title: "로그인 실패",
          description: "이메일 또는 비밀번호가 올바르지 않습니다.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "로그인 중 오류가 발생했습니다.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c4b8b] to-[#2a5aa0] flex flex-col items-center justify-center relative">
      {/* Language Selector */}
      <div className="absolute top-4 right-4">
        <button className="bg-white hover:bg-gray-50 text-[#1c4b8b] border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium transition-colors shadow-sm">
          <span className="mr-2">🌐</span>
          日本語
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-6 max-w-sm w-full px-6">
        {/* Logo */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
          <Image
            src="/logo.png"
            alt="Turn Trader Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl font-bold tracking-wide mb-4">Turn Trader</h1>

        {/* Login Form */}
        <div className="w-full space-y-4">
          <h2 className="text-white text-lg font-semibold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email/account number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border-gray-300 rounded-md px-4 py-3 text-gray-700 placeholder-gray-500 text-center"
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border-gray-300 rounded-md px-4 py-3 text-gray-700 placeholder-gray-500 text-center"
                required
              />
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <PushButton
                type="submit"
                variant="primary"
                disabled={isLoading}
              >
                {isLoading ? 'LOGGING IN...' : 'LOGIN'}
              </PushButton>
            </div>
          </form>

          {/* Test Credentials Info */}
          <div className="text-center py-2">
            <div className="text-white text-xs opacity-75 mb-2">
              테스트 계정:
            </div>
            <div className="text-white text-xs opacity-75">
              test@test.com / password
            </div>
          </div>

          {/* Reset Password Link */}
          <div className="text-center py-2">
            <a href="#" className="text-white text-sm underline hover:text-gray-200 transition-colors">
              Reset password
            </a>
          </div>

          {/* Signup Button */}
          <div className="pt-2">
            <PushButton variant="secondary">
              GO TO FREE SIGNUP
            </PushButton>
          </div>
        </div>
      </div>

      {/* Mobile Warning */}
      <div className="absolute bottom-4 left-4 right-4 lg:hidden">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center shadow-lg">
          <p className="text-sm text-gray-700 mb-2">
            Turn Trading is not available on mobile devices. Please use a desktop browser
          </p>
        </div>
      </div>
    </div>
  )
}
