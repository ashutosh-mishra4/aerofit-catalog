import { PLANS } from '../../data/catalog'
import { cn } from '../../lib/cn'
import { formatPrice, fullProductName } from '../../lib/catalog'
import type { Product } from '../../types/catalog'

interface HeroProductCardProps {
  product: Product
  note?: string
  className?: string
}

export function HeroProductCard({ product, note, className }: HeroProductCardProps) {
  return (
    <div
      className={cn(
        'flex w-[380px] items-center gap-4 rounded-float bg-white/92 p-3 pr-5 shadow-float backdrop-blur-md',
        className,
      )}
    >
      <div className="flex size-[104px] shrink-0 items-center justify-center rounded-thumb bg-glow-thumb">
        <img
          src={product.image}
          alt={`${fullProductName(product)} adventure watch`}
          className="size-[92px] object-contain mix-blend-multiply brightness-110"
          decoding="async"
        />
      </div>
      <div>
        <p className="font-serif text-[22px] leading-tight font-medium">{fullProductName(product)}</p>
        <p className="mt-1 text-[14px] text-ink-soft">
          {formatPrice(product.price)}, or included with {PLANS[product.minPlan].name}
        </p>
        {note && <p className="mt-0.5 text-[13px] text-muted">{note}</p>}
      </div>
    </div>
  )
}
