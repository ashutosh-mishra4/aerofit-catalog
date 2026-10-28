import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'light' | 'outline' | 'outlineSoft' | 'outlineLight' | 'accent'
export type ButtonSize = 'sm' | 'md' | 'lg'

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-white hover:bg-ink-hover',
  light: 'bg-white text-ink hover:bg-chip',
  outline: 'border border-ink hover:bg-ink hover:text-white',
  outlineSoft: 'border border-ink hover:bg-white',
  outlineLight: 'border border-white/40 text-white hover:bg-white hover:text-ink',
  accent: 'bg-accent text-ink hover:bg-accent-hover',
}

/** Underlined inline link used next to primary CTAs. */
export const textLinkClass = 'text-[14px] font-medium underline underline-offset-4 transition hover:opacity-70'

const SIZES: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-[13px]',
  md: 'h-11 px-5 text-[14px]',
  lg: 'h-[52px] px-6 text-[15px]',
}

interface ButtonStyleOptions {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

/** Shared button classes so links and buttons look identical. */
export function buttonClasses({ variant = 'primary', size = 'md', className }: ButtonStyleOptions = {}): string {
  return cn(
    'inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap transition',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
    VARIANTS[variant],
    SIZES[size],
    className,
  )
}
