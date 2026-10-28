import { Link } from 'react-router'
import { CtaBanner } from '../components/layout/CtaBanner'
import { buttonClasses } from '../components/ui/buttonStyles'
import { PLANS } from '../data/catalog'
import { HOW_IT_WORKS_IMAGE } from '../data/membership'
import { PLANS_ANCHOR, ROUTES } from '../data/navigation'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { formatPrice } from '../lib/catalog'
import { BandsStackSection } from '../sections/overview/BandsStackSection'
import { DayTimelineSection } from '../sections/overview/DayTimelineSection'
import { MorningScoreSection } from '../sections/overview/MorningScoreSection'
import { OverviewHero } from '../sections/overview/OverviewHero'
import { ScoresTrackSection } from '../sections/overview/ScoresTrackSection'
import { SignalCollageSection } from '../sections/overview/SignalCollageSection'

export function OverviewPage() {
  useSmoothScroll()

  return (
    <>
      <title>Aero Fit — Know what your body is ready for today</title>
      <OverviewHero />
      <SignalCollageSection />
      <MorningScoreSection />
      <ScoresTrackSection />
      <DayTimelineSection />
      <BandsStackSection />
      <CtaBanner
        tone="soft"
        title="You pay for the membership. The band comes with it."
        description={`Plans start at ${formatPrice(PLANS[1].yearly)} a year with Lite or Smart included at $0. One yearly charge, no separate bill for the hardware.`}
        image={{ src: HOW_IT_WORKS_IMAGE, alt: 'Aero Fit band in its open box with a welcome card' }}
        actions={
          <>
            <Link to={ROUTES.howItWorks} className={buttonClasses({ variant: 'primary', size: 'lg' })}>
              How membership works
            </Link>
            <Link
              to={`${ROUTES.howItWorks}#${PLANS_ANCHOR}`}
              className={buttonClasses({ variant: 'outlineSoft', size: 'lg' })}
            >
              Compare plans
            </Link>
          </>
        }
      />
    </>
  )
}
