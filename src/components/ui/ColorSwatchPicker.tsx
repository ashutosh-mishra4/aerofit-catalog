import { cn } from '../../lib/cn'
import type { ColorOption } from '../../types/catalog'

interface ColorSwatchPickerProps {
  label: string
  colors: ColorOption[]
  selectedIndex: number
  onChange: (index: number) => void
}

export function ColorSwatchPicker({ label, colors, selectedIndex, onChange }: ColorSwatchPickerProps) {
  return (
    <div role="radiogroup" aria-label={label} className="flex justify-end gap-1">
      {colors.map((color, index) => {
        const isActive = index === selectedIndex
        return (
          <button
            key={color.name}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={color.name}
            onClick={() => onChange(index)}
            className={cn(
              'size-7 rounded-full border-2 p-[3px] transition',
              isActive ? 'border-ink' : 'border-transparent hover:border-line-strong',
            )}
          >
            {/* Swatch color is data-driven, so it must be inline. */}
            <span className="block size-full rounded-full" style={{ backgroundColor: color.hex }} />
          </button>
        )
      })}
    </div>
  )
}
