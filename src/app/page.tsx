'use client'

import { useAuth } from '@/contexts/AuthContext'
import LoginPage from '@/components/LoginPage'
import StudyPage from '@/components/StudyPage'

export default function Home() {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <StudyPage /> : <LoginPage />
}
