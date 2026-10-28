import type { Icon } from '@tabler/icons-react'
import type { ProductId } from './catalog'

/** Tone of one bar or segment in a metric readout. */
export type ReadoutTone = 'chip' | 'ink' | 'accent'

/** The mini chart drawn on each score card's floating readout. */
export type MetricReadout =
  | { kind: 'bars'; bars: Array<{ level: number; tone: ReadoutTone }> }
  | { kind: 'progress'; level: number; verdict: string }
  | { kind: 'segments'; segments: ReadoutTone[]; caption: string }
  | { kind: 'trend'; points: string }

export interface Metric {
  id: string
  icon: Icon
  label: string
  /** Label on the floating readout when it differs from `label`. */
  readoutLabel?: string
  value: string
  unit?: string
  sources: string[]
  image: string
  imageAlt: string
  /** Tailwind object-position class that keeps the subject clear of the readout. */
  imagePosition: string
  readout: MetricReadout
}

export interface DayMoment {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface ReadoutRow {
  label: string
  value: string
  /** 0–100 fill for the mini bar. */
  level: number
  icon?: Icon
}

interface CollagePlacement {
  /** Final offset from the stage centre, in % of stage width (x) and height (y). */
  x: number
  y: number
  /** Drift multiplier: higher values travel further and sit higher in the stack. */
  speed: number
  width: number
  height: number
}

export type CollageItem = CollagePlacement &
  (
    | { kind: 'photo'; image: string; alt: string }
    | { kind: 'product'; image: string }
    | { kind: 'stat'; label: string; value: string }
  )

export type ShowcaseTheme = 'slate' | 'olive' | 'accent'

export interface BandShowcase {
  productId: ProductId
  theme: ShowcaseTheme
  photo: string
  photoAlt: string
  statement: string
  highlights: Array<{ icon: Icon; title: string; description: string }>
  ctaLabel: string
}

export interface PaymentStep {
  title: string
  description: string
  payNote: string
  /** Highlights steps where the customer pays nothing. */
  isFree?: boolean
}

export interface PlanDetail {
  summary: string
  perks: string[]
  badge?: string
}

/** `true` renders a check, `false` a dash, strings render as-is. */
export type ComparisonValue = string | boolean

export interface PaymentComparisonRow {
  label: string
  membership: ComparisonValue
  outright: ComparisonValue
}

export interface FaqEntry {
  id: string
  question: string
  answer: string
}
