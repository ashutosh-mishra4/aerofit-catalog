import type { ReactNode } from 'react'
import { PLANS } from '../../data/catalog'
import { MINIMUM_TERM_MONTHS } from '../../data/membership'
import { cn } from '../../lib/cn'
import { formatPrice, fullProductName } from '../../lib/catalog'
import { getHeadlineProduct } from '../../lib/membership'
import type { PlanTier } from '../../types/catalog'
import { Tag } from '../ui/Tag'
import { PlanSwitcher } from './PlanSwitcher'

interface ReceiptCardProps {
  plan: PlanTier
  onPlanChange: (tier: PlanTier) => void
  className?: string
}

function ReceiptLine({ label, detail, amount }: { label: ReactNode; detail?: string; amount: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5">
      <div>
        <p className="text-[14px] font-medium">{label}</p>
        {detail && <p className="mt-0.5 text-[12px] text-muted">{detail}</p>}
      </div>
      <div className="text-right text-[15px] font-semibold whitespace-nowrap">{amount}</div>
    </div>
  )
}

/** Itemised first-year bill showing the band at $0 and the membership as the only charge. */
export function ReceiptCard({ plan, onPlanChange, className }: ReceiptCardProps) {
  const { name, yearly, monthly } = PLANS[plan]
  const band = getHeadlineProduct(plan)

  return (
    <div className={cn('rounded-card bg-white p-5 shadow-float sm:p-6', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-serif text-[22px] leading-tight font-medium">Your first year</p>
        <PlanSwitcher value={plan} onChange={onPlanChange} />
      </div>

      <div aria-live="polite" className="mt-4 divide-y divide-line">
        <ReceiptLine
          label={`Aero Fit ${name} membership`}
          detail={`${MINIMUM_TERM_MONTHS} months, billed yearly`}
          amount={formatPrice(yearly)}
        />
        <ReceiptLine
          label={
            <span className="flex items-center gap-2">
              {fullProductName(band)} band
              <Tag size="sm" tone="accent">
                Included
              </Tag>
            </span>
          }
          detail="Any color, any size"
          amount={
            <>
              <s className="mr-2 text-[13px] font-normal text-placeholder">{formatPrice(band.price)}</s>$0
            </>
          }
        />
        <ReceiptLine label="Shipping & free returns" amount="$0" />
      </div>

      <div className="mt-2 flex items-end justify-between rounded-panel bg-canvas px-4 py-4">
        <div>
          <p className="text-[13px] text-muted">Billed today</p>
          <p className="text-[12px] text-muted">about {formatPrice(monthly)}/mo</p>
        </div>
        <p className="text-[34px] leading-none font-semibold">{formatPrice(yearly)}</p>
      </div>
    </div>
  )
}
