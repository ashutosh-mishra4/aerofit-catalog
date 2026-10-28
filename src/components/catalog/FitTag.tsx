import { USE_CASES } from '../../data/catalog'
import { isGoodFor } from '../../lib/catalog'
import type { ProductId, UseCaseId } from '../../types/catalog'
import { Tag } from '../ui/Tag'

interface FitTagProps {
  productId: ProductId
  useCase: UseCaseId
  size?: 'sm' | 'md'
  className?: string
}

/** "Good for X" badge, rendered only when the band suits the selected use case. */
export function FitTag({ productId, useCase, size, className }: FitTagProps) {
  if (!isGoodFor(productId, useCase)) return null
  return (
    <Tag size={size} className={className}>
      Good for {USE_CASES[useCase].label}
    </Tag>
  )
}
