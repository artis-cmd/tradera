'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    // 테스트용 계정 - 실제 환경에서는 API 호출로 대체
    if (email === 'test@test.com' && password === 'password') {
      setUser({
        email: 'test@test.com',
        name: 'Test User'
      })
      return true
    }

    if (email === 'demo@turntrader.com' && password === 'demo123') {
      setUser({
        email: 'demo@turntrader.com',
        name: 'Demo Trader'
      })
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
