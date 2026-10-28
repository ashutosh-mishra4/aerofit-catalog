import { cn } from '../../lib/cn'
import { fullProductName } from '../../lib/catalog'
import { useCatalog } from '../../state/useCatalog'
import type { Product } from '../../types/catalog'
import { FitTag } from './FitTag'
import { PurchasePanel } from './PurchasePanel'

interface ProductCardProps {
  product: Product
  /** Stretches to the row height (used beside the featured card). */
  isStretched?: boolean
}

export function ProductCard({ product, isStretched = false }: ProductCardProps) {
  const { state } = useCatalog()
  const color = product.colors[state.selections[product.id].colorIndex]

  return (
    <article
      className={cn(
        'rounded-card border border-line bg-white p-4',
        isStretched && 'flex flex-col self-stretch',
      )}
    >
      <div
        className={cn(
          'relative flex items-center justify-center rounded-panel bg-tile',
          isStretched ? 'h-[268px]' : 'h-[230px]',
        )}
      >
        <img
          src={product.image}
          alt={`${fullProductName(product)} in ${color.name}`}
          className="size-[200px] object-contain mix-blend-multiply brightness-110 contrast-[1.05]"
          decoding="async"
          loading="lazy"
        />
        <FitTag productId={product.id} useCase={state.useCase} className="absolute bottom-3 left-3" />
      </div>

      <div className={cn('mt-4 px-1', isStretched && 'flex flex-1 flex-col')}>
        <h3 className="font-serif text-[26px] leading-none font-medium">{fullProductName(product)}</h3>
        <p className="mt-2 text-[14px] leading-[1.5] text-ink-soft">{product.tagline}</p>
        <div className={cn(isStretched && 'mt-auto')}>
          <PurchasePanel product={product} />
        </div>
      </div>
    </article>
  )
}
