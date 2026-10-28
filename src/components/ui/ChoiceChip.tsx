import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ChipVariant = 'solid' | 'outline'

const VARIANTS: Record<ChipVariant, { base: string; on: string; off: string }> = {
  solid: {
    base: 'h-10 px-4 text-[14px]',
    on: 'border-ink bg-ink text-white',
    off: 'border-line-strong hover:bg-canvas',
  },
  outline: {
    base: 'h-9 px-3.5',
    on: 'border-ink bg-white font-medium',
    off: 'border-line-strong hover:bg-white',
  },
}

interface ChoiceChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  isSelected: boolean
  variant?: ChipVariant
}

/** Pill-shaped single-choice option (quiz answers, plan picker). */
export function ChoiceChip({ isSelected, variant = 'solid', className, ...rest }: ChoiceChipProps) {
  const v = VARIANTS[variant]
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={cn(
        'rounded-full border whitespace-nowrap transition',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
        v.base,
        isSelected ? v.on : v.off,
        className,
      )}
      {...rest}
    />
  )
}
