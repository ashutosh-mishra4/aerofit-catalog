import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms. */
  delay?: number
  className?: string
}

/** Fades and lifts its content in when it scrolls into view. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <div ref={ref} data-visible={isInView} style={style} className={cn('reveal', className)}>
      {children}
    </div>
  )
}
