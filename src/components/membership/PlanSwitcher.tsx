import { PLAN_TIERS, PLANS } from '../../data/catalog'
import type { PlanTier, QuizOption } from '../../types/catalog'
import { SegmentedControl } from '../ui/SegmentedControl'

type PlanKey = `${PlanTier}`

const PLAN_OPTIONS: QuizOption<PlanKey>[] = PLAN_TIERS.map((tier) => ({
  value: String(tier) as PlanKey,
  label: PLANS[tier].name,
}))

interface PlanSwitcherProps {
  value: PlanTier
  onChange: (tier: PlanTier) => void
  className?: string
}

/** Segmented One / Peak / Life selector. */
export function PlanSwitcher({ value, onChange, className }: PlanSwitcherProps) {
  return (
    <SegmentedControl
      label="Membership plan"
      options={PLAN_OPTIONS}
      value={String(value) as PlanKey}
      onChange={(key) => onChange(Number(key) as PlanTier)}
      className={className}
    />
  )
}
