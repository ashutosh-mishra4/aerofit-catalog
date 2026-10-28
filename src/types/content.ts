import type { Icon } from '@tabler/icons-react'

export interface Metric {
  id: string
  icon: Icon
  label: string
  value: string
  unit?: string
  description: string
  sources: string[]
}

export interface DayMoment {
  time: string
  icon: Icon
  title: string
  description: string
}

export interface ReadoutRow {
  label: string
  value: string
  /** 0–100 fill for the mini bar. */
  level: number
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
