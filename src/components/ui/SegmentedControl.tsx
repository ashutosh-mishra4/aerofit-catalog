import { cn } from '../../lib/cn'
import type { QuizOption } from '../../types/catalog'

interface SegmentedControlProps<T extends string> {
  label: string
  options: QuizOption<T>[]
  value: T
  onChange: (value: T) => void
  className?: string
}

export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn('flex h-12 rounded-full border border-line bg-white p-1 text-[14px] font-medium', className)}
    >
      {options.map((option) => {
        const isActive = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'h-10 rounded-full px-5 whitespace-nowrap transition',
              isActive ? 'bg-ink text-white' : 'hover:bg-chip',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
