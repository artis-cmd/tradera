'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PushButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function PushButton({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled = false
}: PushButtonProps) {
  const baseClasses = "relative w-full font-semibold transition-all duration-150 transform active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = {
    primary: "text-white",
    secondary: "text-[#1c4b8b]"
  }

  const edgeClasses = {
    primary: "bg-[#1f946e] rounded-md",
    secondary: "bg-gray-300 rounded-md"
  }

  const frontClasses = {
    primary: "bg-[#2eb667] hover:bg-[#27a05a] rounded-md",
    secondary: "bg-white hover:bg-gray-50 rounded-md"
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {/* Edge (shadow layer) */}
      <span
        className={cn(
          "absolute inset-0 translate-y-1",
          edgeClasses[variant]
        )}
      />

      {/* Front (main button) */}
      <div
        className={cn(
          "relative py-3 px-4 border transition-colors duration-150",
          frontClasses[variant],
          variant === 'primary' ? 'border-[#2eb667]' : 'border-gray-300'
        )}
      >
        {children}
      </div>
    </button>
  )
}
