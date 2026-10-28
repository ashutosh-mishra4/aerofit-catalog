import { useNavigate } from 'react-router'
import { PlanCard } from '../../components/membership/PlanCard'
import { Button } from '../../components/ui/Button'
import { Reveal } from '../../components/ui/Reveal'
import { SectionHeading } from '../../components/ui/Section'
import { PLAN_TIERS, PLANS, SECTION_IDS } from '../../data/catalog'
import { PLANS_ANCHOR, ROUTES } from '../../data/navigation'
import { formatPrice } from '../../lib/catalog'
import { formatNameList, getIncludedProducts } from '../../lib/membership'
import { useCatalog } from '../../state/useCatalog'

export function PlansSection() {
  const { state, actions } = useCatalog()
  const navigate = useNavigate()
  const plan = PLANS[state.plan]
  const bandNames = formatNameList(getIncludedProducts(state.plan).map((band) => band.name))

  const handleShop = () => {
    actions.selectPlan(state.plan)
    navigate(`${ROUTES.shop}#${SECTION_IDS.lineup}`)
  }

  return (
    <section
      id={PLANS_ANCHOR}
      className="mx-4 mt-28 scroll-mt-6 rounded-section bg-sand px-6 py-16 lg:px-[80px] lg:py-20"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading size="md" className="max-w-[560px]">
          Three plans. Every band is included in one of them.
        </SectionHeading>
        <p className="max-w-[400px] text-[15px] leading-[1.6] text-ink-soft">
          The price you see is the whole bill for the year. Pick a plan and the bands it lists cost $0.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {PLAN_TIERS.map((tier, index) => (
          <Reveal key={tier} delay={index * 100} className="h-full">
            <PlanCard tier={tier} isSelected={state.plan === tier} onSelect={() => actions.selectPlan(tier)} />
          </Reveal>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-4 flex flex-col gap-5 rounded-float bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-[13px] text-white/70">On {plan.name} you pay</p>
          <p className="font-serif text-[28px] leading-tight font-medium">
            {formatPrice(plan.yearly)} today, $0 for {bandNames}
          </p>
        </div>
        <Button variant="accent" size="lg" onClick={handleShop}>
          Shop bands with {plan.name}
        </Button>
      </div>
    </section>
  )
}
