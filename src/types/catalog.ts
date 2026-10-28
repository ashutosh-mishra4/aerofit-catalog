import type { Icon } from '@tabler/icons-react'

export type ProductId = 'lite' | 'smart' | 'pro' | 'music' | 'ultra'
export type PlanTier = 1 | 2 | 3
export type PurchaseMode = 'outright' | 'membership'
export type UseCaseId = 'sleep' | 'training' | 'music' | 'endurance'
export type BandSize = 'S' | 'M' | 'L'
export type NightPreference = 'light' | 'any'

export type SpecKey =
  | 'battery'
  | 'gps'
  | 'ecg'
  | 'storage'
  | 'case'
  | 'weight'
  | 'outright'
  | 'included'
  | 'display'
  | 'water'
  | 'sleep'
  | 'recovery'
  | 'temp'
  | 'bp'
  | 'modes'
  | 'bluetooth'

export interface ColorOption {
  name: string
  hex: string
}

export interface KeySpec {
  value: string
  label: string
}

export interface Product {
  id: ProductId
  name: string
  tagline: string
  price: number
  minPlan: PlanTier
  image: string
  colors: ColorOption[]
  /** Short reason shown in quiz recommendations. */
  highlight: string
  keySpecs?: KeySpec[]
  shipNote?: string
}

export interface Plan {
  name: string
  monthly: number
  yearly: number
}

export interface UseCase {
  id: UseCaseId
  label: string
  image: string
  alt: string
  fit: [ProductId, ProductId]
  highlightRows: SpecKey[]
}

/** `true` renders a check, `false` renders a dash, strings render as-is. */
export type SpecValue = string | boolean

export interface SpecRow {
  key: SpecKey
  label: string
  values: Record<ProductId, SpecValue>
  /** Primary rows are always visible; the rest show after "Show all". */
  isPrimary: boolean
}

export interface QuizAnswers {
  use: UseCaseId
  night: NightPreference
  pay: PurchaseMode
}

export interface QuizOption<T extends string> {
  value: T
  label: string
}

export interface QuizQuestion<T extends string> {
  title: string
  options: QuizOption<T>[]
}

export interface ProductSelection {
  colorIndex: number
  size: BandSize
}

export interface NavLink {
  label: string
  href: string
  isActive?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: Icon
}

export interface LinkGroup {
  title: string
  links: NavLink[]
}
