import { Link } from 'react-router'
import { ReceiptCard } from '../../components/membership/ReceiptCard'
import { buttonClasses, textLinkClass } from '../../components/ui/buttonStyles'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { Reveal } from '../../components/ui/Reveal'
import { Section } from '../../components/ui/Section'
import { PLANS } from '../../data/catalog'
import { HOW_IT_WORKS_IMAGE, MINIMUM_TERM_MONTHS } from '../../data/membership'
import { PLANS_ANCHOR, ROUTES } from '../../data/navigation'
import { formatPrice } from '../../lib/catalog'
import { useCatalog } from '../../state/useCatalog'

const FACTS = [
  { value: '$0', label: 'for the band' },
  { value: `${formatPrice(PLANS[1].yearly)}/yr`, label: 'memberships from' },
  { value: `${MINIMUM_TERM_MONTHS} mo`, label: 'minimum term' },
]

export function HowItWorksHero() {
  const { state, actions } = useCatalog()

  return (
    <Section className="grid items-center gap-12 pt-16 lg:grid-cols-[1fr_540px] lg:gap-16 lg:pt-20">
      <div>
        <Reveal>
          <Eyebrow>How Aero Fit membership works</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-serif text-[44px] leading-[1.02] font-medium tracking-[-0.02em] lg:text-display">
            Pay for the coaching.
            <br />
            The band comes with it.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-[500px] text-[17px] leading-[1.55] text-ink-soft">
            Aero Fit is a fitness subscription. Your yearly membership covers the app, the coaching and the band on
            your wrist, so you never get a separate bill for the hardware.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse">
                <dt className="text-[13px] text-muted">{fact.label}</dt>
                <dd className="text-[26px] leading-tight font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={400} className="mt-9 flex flex-wrap items-center gap-5">
          <Link to={`#${PLANS_ANCHOR}`} className={buttonClasses({ size: 'lg' })}>
            Choose a plan
          </Link>
          <Link to={ROUTES.shop} className={textLinkClass}>
            Rather buy a band outright?
          </Link>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="h-[300px] overflow-hidden rounded-section">
          <img
            src={HOW_IT_WORKS_IMAGE}
            alt="Aero Fit band in its open box with a welcome card, as it arrives at your door"
            className="size-full animate-hero-zoom object-cover"
            fetchPriority="high"
          />
        </div>
        <ReceiptCard plan={state.plan} onPlanChange={actions.selectPlan} className="relative mx-4 -mt-16" />
      </Reveal>
    </Section>
  )
}
