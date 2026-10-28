import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TagTone = 'ink' | 'light' | 'accent'
type TagSize = 'sm' | 'md'

const TONES: Record<TagTone, string> = {
  ink: 'bg-ink text-white',
  light: 'bg-white text-ink',
  accent: 'bg-accent text-ink',
}

const SIZES: Record<TagSize, string> = {
  sm: 'px-2 py-0.5',
  md: 'px-2.5 py-1',
}

interface TagProps {
  children: ReactNode
  tone?: TagTone
  size?: TagSize
  className?: string
}

export function Tag({ children, tone = 'ink', size = 'md', className }: TagProps) {
  return (
    <span className={cn('rounded-full text-[12px] font-medium', TONES[tone], SIZES[size], className)}>
      {children}
    </span>
  )
}
