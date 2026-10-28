import { IconCheck } from '@tabler/icons-react'
import { PLANS } from '../../data/catalog'
import { PLAN_DETAILS } from '../../data/membership'
import { cn } from '../../lib/cn'
import { formatPrice, fullProductName } from '../../lib/catalog'
import { formatNameList, getIncludedProducts } from '../../lib/membership'
import type { PlanTier } from '../../types/catalog'
import { Tag } from '../ui/Tag'

interface PlanCardProps {
  tier: PlanTier
  isSelected: boolean
  onSelect: () => void
}

export function PlanCard({ tier, isSelected, onSelect }: PlanCardProps) {
  const { name, yearly, monthly } = PLANS[tier]
  const { summary, perks, badge } = PLAN_DETAILS[tier]
  const bands = getIncludedProducts(tier)

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={cn(
        'flex h-full flex-col rounded-card bg-white p-6 text-left transition',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink',
        isSelected ? 'shadow-float ring-2 ring-ink' : 'hover:-translate-y-1 hover:shadow-soft',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-serif text-[30px] leading-tight font-medium">{name}</p>
        {badge && <Tag tone={isSelected ? 'ink' : 'accent'}>{badge}</Tag>}
      </div>
      <p className="mt-2 min-h-[48px] text-[14px] leading-[1.6] text-ink-soft">{summary}</p>

      <p className="mt-6">
        <span className="text-[44px] leading-none font-semibold">{formatPrice(yearly)}</span>
        <span className="ml-1 text-[15px] text-muted">/yr</span>
      </p>
      <p className="mt-1.5 text-[13px] text-muted">About {formatPrice(monthly)}/mo · billed once a year</p>

      <div className="mt-6 rounded-panel bg-canvas p-4">
        <p className="text-[13px] font-medium">
          Band included at $0: <span className="text-ink-soft">{formatNameList(bands.map((b) => b.name))}</span>
        </p>
        <ul className="mt-3 flex gap-2">
          {bands.map((band) => (
            <li key={band.id} className="flex size-14 items-center justify-center rounded-thumb bg-glow-thumb">
              <img
                src={band.image}
                alt={fullProductName(band)}
                className="size-12 object-contain mix-blend-multiply brightness-110"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-6 space-y-2.5 text-[14px]">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5">
            <IconCheck size={18} stroke={2} className="mt-px shrink-0 text-ink" aria-hidden />
            {perk}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <span
          aria-hidden
          className={cn(
            'flex h-11 items-center justify-center rounded-full text-[14px] font-medium transition',
            isSelected ? 'bg-ink text-white' : 'border border-ink',
          )}
        >
          {isSelected ? 'Selected' : `Select ${name}`}
        </span>
      </div>
    </button>
  )
}
