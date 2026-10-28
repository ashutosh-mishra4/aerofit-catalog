import { IconArrowDown } from '@tabler/icons-react'
import { PRODUCTS } from '../../data/catalog'
import { cn } from '../../lib/cn'
import type { UseCase } from '../../types/catalog'

interface UseCaseCardProps {
  useCase: UseCase
  isSelected: boolean
  onSelect: () => void
}

export function UseCaseCard({ useCase, isSelected, onSelect }: UseCaseCardProps) {
  const fitNames = useCase.fit.map((id) => PRODUCTS[id].name).join(' and ')

  return (
    <button type="button" aria-pressed={isSelected} onClick={onSelect} className="group text-left">
      <div
        className={cn(
          'h-[330px] overflow-hidden rounded-tile transition',
          isSelected && 'ring-2 ring-ink ring-offset-4 ring-offset-canvas',
        )}
      >
        <img
          src={useCase.image}
          alt={useCase.alt}
          className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-serif text-[24px] font-medium">Shop for {useCase.label}</p>
        <span
          aria-hidden
          className={cn(
            'flex size-9 items-center justify-center rounded-full transition',
            isSelected ? 'bg-ink text-white' : 'bg-chip group-hover:bg-chip-hover',
          )}
        >
          <IconArrowDown size={16} stroke={2} />
        </span>
      </div>
      <p className="mt-1 text-[14px] text-ink-soft">{fitNames} suit this best</p>
    </button>
  )
}
