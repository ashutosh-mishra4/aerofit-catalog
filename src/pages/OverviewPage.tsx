import { Link } from 'react-router'
import { CtaBanner } from '../components/layout/CtaBanner'
import { buttonClasses } from '../components/ui/buttonStyles'
import { PLANS } from '../data/catalog'
import { HOW_IT_WORKS_IMAGE } from '../data/membership'
import { PLANS_ANCHOR, ROUTES } from '../data/navigation'
import { formatPrice } from '../lib/catalog'
import { BandsStripSection } from '../sections/overview/BandsStripSection'
import { DayTimelineSection } from '../sections/overview/DayTimelineSection'
import { MetricsSection } from '../sections/overview/MetricsSection'
import { OverviewHero } from '../sections/overview/OverviewHero'

export function OverviewPage() {
  return (
    <>
      <title>Overview — Aero Fit</title>
      <OverviewHero />
      <MetricsSection />
      <DayTimelineSection />
      <BandsStripSection />
      <CtaBanner
        title="You pay for the membership. The band comes with it."
        description={`Plans start at ${formatPrice(PLANS[1].yearly)} a year with Lite or Smart included at $0. One yearly charge, no separate bill for the hardware.`}
        image={{ src: HOW_IT_WORKS_IMAGE, alt: 'Aero Fit band in its open box with a welcome card' }}
        actions={
          <>
            <Link to={ROUTES.howItWorks} className={buttonClasses({ variant: 'accent', size: 'lg' })}>
              How membership works
            </Link>
            <Link
              to={`${ROUTES.howItWorks}#${PLANS_ANCHOR}`}
              className={buttonClasses({ variant: 'outlineLight', size: 'lg' })}
            >
              Compare plans
            </Link>
          </>
        }
      />
    </>
  )
}
