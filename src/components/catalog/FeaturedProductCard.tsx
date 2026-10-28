import { fullProductName } from '../../lib/catalog'
import { useCatalog } from '../../state/useCatalog'
import type { Product } from '../../types/catalog'
import { Tag } from '../ui/Tag'
import { FitTag } from './FitTag'
import { PurchasePanel } from './PurchasePanel'

interface FeaturedProductCardProps {
  product: Product
  id?: string
}

export function FeaturedProductCard({ product, id }: FeaturedProductCardProps) {
  const { state } = useCatalog()
  const color = product.colors[state.selections[product.id].colorIndex]

  return (
    <article
      id={id}
      className="grid scroll-mt-6 gap-7 self-stretch rounded-section bg-sand p-5 md:col-span-2 lg:grid-cols-[1fr_340px]"
    >
      <div className="relative flex min-h-[460px] items-center justify-center rounded-tile bg-glow-feature">
        <img
          src={product.image}
          alt={`${fullProductName(product)} in ${color.name}`}
          className="size-[360px] object-contain mix-blend-multiply brightness-110 contrast-[1.05]"
          decoding="async"
          loading="lazy"
        />
        {product.shipNote && (
          <Tag tone="light" className="absolute top-3 left-3">
            {product.shipNote}
          </Tag>
        )}
        <FitTag productId={product.id} useCase={state.useCase} className="absolute bottom-3 left-3" />
      </div>

      <div className="flex flex-col py-3 pr-2">
        <h3 className="font-serif text-[38px] leading-[1.05] font-medium">{fullProductName(product)}</h3>
        <p className="mt-3 text-[15px] leading-[1.55] text-ink-soft">{product.tagline}</p>
        {product.keySpecs && (
          <dl className="mt-6 grid grid-cols-3 gap-3">
            {product.keySpecs.map((spec) => (
              <div key={spec.label} className="flex flex-col-reverse">
                <dt className="text-[13px] text-muted">{spec.label}</dt>
                <dd className="text-[18px] font-semibold">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-auto">
          <PurchasePanel product={product} isFeatured />
        </div>
      </div>
    </article>
  )
}
