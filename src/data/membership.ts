import type { PlanTier } from '../types/catalog'
import type { FaqEntry, PaymentComparisonRow, PaymentStep, PlanDetail } from '../types/content'
import { ASSET_CDN, PLANS } from './catalog'

export const HOW_IT_WORKS_IMAGE = `${ASSET_CDN}/5c5f0134e1a34895b7cb2cd92d3ecde7.jpg`

export const MINIMUM_TERM_MONTHS = 12

export const PLAN_DETAILS: Record<PlanTier, PlanDetail> = {
  1: {
    summary: 'Daily tracking and coaching for sleep, recovery and everyday effort.',
    perks: ['Sleep, Recovery & Strain scores', 'Daily coaching in the app', 'Free replacement for hardware faults'],
  },
  2: {
    summary: 'Structured training with built-in GPS, ECG or onboard music.',
    perks: ['Everything in One', 'Training plans & workout builder', 'ECG with Heart Screener on Pro'],
    badge: 'Most popular',
  },
  3: {
    summary: 'Every band in the lineup, including Ultra, plus advanced health insights.',
    perks: ['Everything in Peak', 'Blood Pressure Insights', 'Priority support & early access'],
  },
}

const lowestYearly = PLANS[1].yearly
const highestYearly = PLANS[3].yearly

export const PAYMENT_STEPS: PaymentStep[] = [
  {
    title: 'Choose a membership',
    description: 'Pick One, Peak or Life based on the coaching you want. Each plan unlocks a set of bands.',
    payNote: 'Nothing yet',
    isFree: true,
  },
  {
    title: 'Pick a band your plan includes',
    description: 'Choose the band, color and size. As soon as it is part of your plan, its price drops to $0.',
    payNote: '$0 for the band',
    isFree: true,
  },
  {
    title: 'Pay once for the year',
    description: `At checkout you are billed for ${MINIMUM_TERM_MONTHS} months of membership. That single charge covers the app, the coaching and the band on your wrist.`,
    payNote: `$${lowestYearly}–$${highestYearly} / yr`,
  },
  {
    title: 'Wear it, then renew or switch',
    description:
      'Your band ships free. The membership renews once a year, and if you move to a plan with a different band, we ship that band at $0 too.',
    payNote: 'Renews yearly',
  },
]

export const PAYMENT_COMPARISON: PaymentComparisonRow[] = [
  { label: 'What you pay for', membership: 'The yearly membership', outright: 'The band, up front' },
  { label: 'Band price', membership: '$0, included', outright: '$149–$399 one-time' },
  { label: 'Commitment', membership: `${MINIMUM_TERM_MONTHS}-month minimum`, outright: 'None' },
  { label: 'Aero Fit app & Recovery scores', membership: true, outright: true },
  { label: 'Training plans & advanced insights', membership: true, outright: false },
  { label: 'Free replacement for hardware faults', membership: true, outright: '1-year warranty' },
  { label: 'Move to a different band', membership: 'Switch plans, $0 band', outright: 'Buy another band' },
  { label: 'Free returns', membership: true, outright: true },
]

export const MEMBERSHIP_FAQS: FaqEntry[] = [
  {
    id: 'band-cost',
    question: 'Am I paying for the band?',
    answer:
      'No. On a membership the band is $0. Your only charge is the yearly price of the plan you choose, and there is no separate invoice for the hardware.',
  },
  {
    id: 'when-charged',
    question: 'When am I charged?',
    answer:
      'Once at checkout for your first 12 months, then once a year on your renewal date. We email you 30 days before every renewal so nothing is a surprise.',
  },
  {
    id: 'minimum-term',
    question: 'Is there a minimum term?',
    answer: `Yes, memberships have a ${MINIMUM_TERM_MONTHS}-month minimum. After that you can cancel any time before your renewal date.`,
  },
  {
    id: 'cancel',
    question: 'What happens to my band if I cancel?',
    answer:
      'After the minimum term the band is yours to keep. It keeps working with the Aero Fit app; plan features like training plans and advanced insights end with the membership.',
  },
  {
    id: 'switch',
    question: 'Can I switch plans or bands later?',
    answer:
      'Upgrade any time and pay the prorated difference for the rest of your year. If the new plan includes a different band, we ship it at $0. Downgrades take effect at renewal.',
  },
  {
    id: 'faults',
    question: 'What if my band stops working?',
    answer: 'Members get a free replacement for hardware faults for as long as the membership is active.',
  },
]
