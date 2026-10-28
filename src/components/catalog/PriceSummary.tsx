import { PLANS } from '../../data/catalog'
import { cn } from '../../lib/cn'
import { formatPrice, isIncludedInPlan } from '../../lib/catalog'
import type { PlanTier, Product, PurchaseMode } from '../../types/catalog'

interface PriceSummaryProps {
  product: Product
  mode: PurchaseMode
  plan: PlanTier
  isFeatured?: boolean
}

const captionClass = 'mt-1.5 text-[13px] text-muted'

export function PriceSummary({ product, mode, plan, isFeatured = false }: PriceSummaryProps) {
  const amountClass = cn(isFeatured ? 'text-[28px]' : 'text-[22px]', 'leading-none font-semibold')

  if (mode === 'outright') {
    return (
      <div>
        <p className={amountClass}>{formatPrice(product.price)}</p>
        <p className={captionClass}>One-time · free returns</p>
      </div>
    )
  }

  if (isIncludedInPlan(product, plan)) {
    const { name, monthly, yearly } = PLANS[plan]
    return (
      <div>
        <p className={amountClass}>
          $0 <span className="text-[14px] font-medium text-muted">band</span>
        </p>
        <p className={captionClass}>
          With {name} · {formatPrice(yearly)}/yr ({formatPrice(monthly)}/mo)
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-[16px] leading-tight font-semibold">Included with {PLANS[product.minPlan].name}</p>
      <p className={captionClass}>Not part of {PLANS[plan].name}</p>
    </div>
  )
}
