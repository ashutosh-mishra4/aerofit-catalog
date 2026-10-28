import { FeaturedProductCard } from '../components/catalog/FeaturedProductCard'
import { ProductCard } from '../components/catalog/ProductCard'
import { ChoiceChip } from '../components/ui/ChoiceChip'
import { Section, SectionHeader } from '../components/ui/Section'
import { SegmentedControl } from '../components/ui/SegmentedControl'
import { FEATURED_PRODUCT_ID, LINEUP_ORDER, PLAN_TIERS, PLANS, PRODUCTS, SECTION_IDS } from '../data/catalog'
import { formatPrice } from '../lib/catalog'
import { useCatalog } from '../state/useCatalog'
import type { PurchaseMode, QuizOption } from '../types/catalog'

const MODE_OPTIONS: QuizOption<PurchaseMode>[] = [
  { value: 'outright', label: 'Buy outright' },
  { value: 'membership', label: 'With membership' },
]

export function LineupSection() {
  const { state, actions } = useCatalog()
  const isMembership = state.mode === 'membership'

  const note = isMembership ? (
    <>
      On a membership the band is included. Example:{' '}
      <span className="font-medium text-ink">Pro on Peak is $0 for the band, $299 billed today</span>, 12-month
      minimum.
    </>
  ) : (
    'Every band runs the same Aero Fit app, coaching and Recovery scores. Buy one outright and add a membership any time.'
  )

  return (
    <Section id={SECTION_IDS.lineup} className="scroll-mt-6 pt-28">
      <SectionHeader
        title="Five bands, one app"
        description={note}
        descriptionClassName="max-w-[540px]"
        aside={
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <SegmentedControl
              label="Purchase mode"
              options={MODE_OPTIONS}
              value={state.mode}
              onChange={actions.setMode}
            />
            {isMembership && (
              <div className="flex flex-wrap items-center gap-2 text-[13px]">
                <span className="mr-1 text-muted">Plan</span>
                {PLAN_TIERS.map((tier) => (
                  <ChoiceChip
                    key={tier}
                    variant="outline"
                    isSelected={tier === state.plan}
                    onClick={() => actions.selectPlan(tier)}
                  >
                    {PLANS[tier].name} · {formatPrice(PLANS[tier].yearly)}/yr
                  </ChoiceChip>
                ))}
              </div>
            )}
          </div>
        }
      />

      <div className="mt-10 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FeaturedProductCard product={PRODUCTS[FEATURED_PRODUCT_ID]} id={SECTION_IDS.featured} />
        {LINEUP_ORDER.map((id, index) => (
          <ProductCard key={id} product={PRODUCTS[id]} isStretched={index === 0} />
        ))}
      </div>
    </Section>
  )
}
