import { Link } from 'react-router'
import { CtaBanner } from '../components/layout/CtaBanner'
import { buttonClasses } from '../components/ui/buttonStyles'
import { SECTION_IDS } from '../data/catalog'
import { ROUTES } from '../data/navigation'
import { HowItWorksHero } from '../sections/how-it-works/HowItWorksHero'
import { MembershipFaqSection } from '../sections/how-it-works/MembershipFaqSection'
import { PayComparisonSection } from '../sections/how-it-works/PayComparisonSection'
import { PaymentStepsSection } from '../sections/how-it-works/PaymentStepsSection'
import { PlansSection } from '../sections/how-it-works/PlansSection'

export function HowItWorksPage() {
  return (
    <>
      <title>How it works — Aero Fit</title>
      <HowItWorksHero />
      <PaymentStepsSection />
      <PlansSection />
      <PayComparisonSection />
      <MembershipFaqSection />
      <CtaBanner
        title="Pick a plan, then pick your band."
        description="Switch the shop to membership pricing and every band your plan includes shows at $0."
        actions={
          <>
            <Link
              to={`${ROUTES.shop}#${SECTION_IDS.lineup}`}
              className={buttonClasses({ variant: 'accent', size: 'lg' })}
            >
              Go to the shop
            </Link>
            <Link to={ROUTES.overview} className={buttonClasses({ variant: 'outlineLight', size: 'lg' })}>
              What Aero Fit tracks
            </Link>
          </>
        }
      />
    </>
  )
}
