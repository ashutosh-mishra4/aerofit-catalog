import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

/** Small pill label that sits above page headlines. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium shadow-soft',
        className,
      )}
    >
      <span aria-hidden className="size-2 rounded-full bg-ink" />
      {children}
    </span>
  )
}
