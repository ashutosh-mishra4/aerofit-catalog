import { IconCheck, IconMinus } from '@tabler/icons-react'
import { PLANS, PRODUCTS, USE_CASES } from '../../data/catalog'
import { cn } from '../../lib/cn'
import { fullProductName, getComparisonPriceLabel } from '../../lib/catalog'
import type { PlanTier, ProductId, PurchaseMode, SpecRow, SpecValue, UseCaseId } from '../../types/catalog'
import { FitTag } from './FitTag'

interface ComparisonTableProps {
  productIds: ProductId[]
  rows: SpecRow[]
  mode: PurchaseMode
  plan: PlanTier
  useCase: UseCaseId
}

function SpecCell({ value }: { value: SpecValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <IconCheck size={18} stroke={2} aria-label="Yes" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center text-disabled">
        <IconMinus size={16} stroke={2} aria-label="No" />
      </span>
    )
  }
  return <>{value}</>
}

export function ComparisonTable({ productIds, rows, mode, plan, useCase }: ComparisonTableProps) {
  const highlighted = USE_CASES[useCase].highlightRows

  return (
    <div role="table" aria-label="Band comparison" className="min-w-[900px]">
      <div role="rowgroup" className="sticky top-0 z-10 border-b border-line bg-white">
        <div role="row" className="grid grid-cols-compare">
          <div role="columnheader" className="flex items-end p-5 text-[13px] text-muted">
            {mode === 'outright' ? 'Buy outright' : `With ${PLANS[plan].name} membership`}
          </div>
          {productIds.map((id) => {
            const product = PRODUCTS[id]
            return (
              <div role="columnheader" key={id} className="flex flex-col items-center p-4 text-center">
                <img
                  src={product.image}
                  alt={fullProductName(product)}
                  className="size-14 object-contain mix-blend-multiply brightness-110"
                  decoding="async"
                  loading="lazy"
                />
                <p className="mt-2 font-serif text-[18px] font-medium">{product.name}</p>
                <p className="text-[13px] text-muted">{getComparisonPriceLabel(product, mode, plan)}</p>
                <FitTag productId={id} useCase={useCase} size="sm" className="mt-1.5" />
              </div>
            )
          })}
        </div>
      </div>

      <div role="rowgroup">
        {rows.map((row, index) => {
          const isHighlighted = highlighted.includes(row.key)
          return (
            <div
              role="row"
              key={row.key}
              className={cn(
                'grid grid-cols-compare text-[14px] transition-colors',
                index > 0 && 'border-t border-line-soft',
                isHighlighted && 'bg-highlight',
              )}
            >
              <p role="rowheader" className={cn('px-5 py-4', isHighlighted ? 'font-medium' : 'text-ink-soft')}>
                {row.label}
              </p>
              {productIds.map((id) => (
                <div role="cell" key={id} className="px-2 py-4 text-center">
                  <SpecCell value={row.values[id]} />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
