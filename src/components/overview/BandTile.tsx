import { IconArrowUpRight } from '@tabler/icons-react'
import { Link } from 'react-router'
import { PLANS } from '../../data/catalog'
import { formatPrice, fullProductName } from '../../lib/catalog'
import type { Product } from '../../types/catalog'

interface BandTileProps {
  product: Product
  to: string
}

export function BandTile({ product, to }: BandTileProps) {
  return (
    <Link to={to} className="group block rounded-tile focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-tile bg-glow-thumb">
        <img
          src={product.image}
          alt={`${fullProductName(product)} in ${product.colors[0].name}`}
          className="size-[170px] object-contain mix-blend-multiply brightness-110 transition duration-500 group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />
        <span
          aria-hidden
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white opacity-0 transition group-hover:opacity-100"
        >
          <IconArrowUpRight size={16} stroke={2} />
        </span>
      </div>
      <p className="mt-4 font-serif text-[22px] leading-tight font-medium">{product.name}</p>
      <p className="mt-1 text-[13px] text-ink-soft">{product.highlight}</p>
      <p className="mt-2 text-[13px] text-muted">
        {formatPrice(product.price)} or <span className="font-medium text-ink">$0 on {PLANS[product.minPlan].name}</span>
      </p>
    </Link>
  )
}
