import { useMemo } from 'react'
import { cn } from '../../lib/cn'
import type { PlanTier, ProductId, PurchaseMode, SpecRow, UseCaseId } from '../../types/catalog'
import { Button } from '../ui/Button'
import { ComparisonTable } from './ComparisonTable'

interface ComparisonCardProps {
  productIds: ProductId[]
  /** Full list of spec rows; only `isPrimary` rows show while collapsed. */
  rows: SpecRow[]
  mode: PurchaseMode
  plan: PlanTier
  useCase: UseCaseId
  isExpanded: boolean
  onToggleExpanded: () => void
  className?: string
}

export function ComparisonCard({
  productIds,
  rows,
  mode,
  plan,
  useCase,
  isExpanded,
  onToggleExpanded,
  className,
}: ComparisonCardProps) {
  const visibleRows = useMemo(() => (isExpanded ? rows : rows.filter((row) => row.isPrimary)), [isExpanded, rows])
  const hasSecondaryRows = useMemo(() => rows.some((row) => !row.isPrimary), [rows])

  return (
    <div className={cn('overflow-x-auto rounded-card border border-line bg-white lg:overflow-clip', className)}>
      <ComparisonTable productIds={productIds} rows={visibleRows} mode={mode} plan={plan} useCase={useCase} />
      {hasSecondaryRows && (
        <div className="flex min-w-[900px] justify-center border-t border-line-soft p-4">
          <Button variant="outline" aria-expanded={isExpanded} onClick={onToggleExpanded}>
            {isExpanded ? 'Show fewer specs' : `Show all ${rows.length} specs`}
          </Button>
        </div>
      )}
    </div>
  )
}
