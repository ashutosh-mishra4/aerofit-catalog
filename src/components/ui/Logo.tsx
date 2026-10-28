import { Link } from 'react-router'
import { cn } from '../../lib/cn'

type LogoSize = 'md' | 'lg'

const SIZES: Record<LogoSize, { wrapper: string; mark: string; text: string }> = {
  md: { wrapper: 'gap-2', mark: 'size-8', text: 'text-[22px]' },
  lg: { wrapper: 'gap-2.5', mark: 'size-10', text: 'text-[32px]' },
}

interface LogoProps {
  size?: LogoSize
  href?: string
  className?: string
}

export function Logo({ size = 'md', href = '/overview', className }: LogoProps) {
  const s = SIZES[size]
  return (
    <Link
      to={href}
      aria-label="Aero Fit home"
      className={cn('flex items-center whitespace-nowrap', s.wrapper, className)}
    >
      <img src="/aerofit-mark.svg" alt="" className={s.mark} />
      <span className={cn('font-serif font-medium tracking-tight', s.text)}>Aero Fit</span>
    </Link>
  )
}
