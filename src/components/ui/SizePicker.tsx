import { cn } from '../../lib/cn'
import type { BandSize } from '../../types/catalog'

interface SizePickerProps {
  sizes: BandSize[]
  value: BandSize
  onChange: (size: BandSize) => void
  /** Optional wrist range shown as the native tooltip. */
  hints?: Record<BandSize, string>
}

export function SizePicker({ sizes, value, onChange, hints }: SizePickerProps) {
  return (
    <div role="radiogroup" aria-label="Size" className="flex h-11 rounded-full border border-line bg-white p-1">
      {sizes.map((size) => {
        const isActive = size === value
        return (
          <button
            key={size}
            type="button"
            role="radio"
            aria-checked={isActive}
            title={hints?.[size]}
            onClick={() => onChange(size)}
            className={cn(
              'w-9 rounded-full text-[13px] font-medium transition',
              isActive ? 'bg-ink text-white' : 'hover:bg-chip',
            )}
          >
            {size}
          </button>
        )
      })}
    </div>
  )
}
