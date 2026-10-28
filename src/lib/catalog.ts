import { PLANS, PRODUCTS, USE_CASES } from '../data/catalog'
import { QUIZ_PAIRS } from '../data/quiz'
import type {
  PlanTier,
  Product,
  ProductId,
  PurchaseMode,
  QuizAnswers,
  UseCaseId,
} from '../types/catalog'

export const formatPrice = (amount: number): string => `$${amount}`

export const fullProductName = (product: Product): string => `Aero Fit ${product.name}`

export const isIncludedInPlan = (product: Product, plan: PlanTier): boolean =>
  plan >= product.minPlan

export const isGoodFor = (productId: ProductId, useCase: UseCaseId): boolean =>
  USE_CASES[useCase].fit.includes(productId)

export function getComparisonPriceLabel(product: Product, mode: PurchaseMode, plan: PlanTier): string {
  if (mode === 'outright') return formatPrice(product.price)
  return isIncludedInPlan(product, plan) ? '$0 band' : `Needs ${PLANS[product.minPlan].name}`
}

export interface QuizRecommendation {
  pair: [Product, Product]
  summary: string
}

export function getQuizRecommendation(answers: QuizAnswers): QuizRecommendation {
  const [firstId, secondId] = QUIZ_PAIRS[answers.use][answers.night]
  const pair: [Product, Product] = [PRODUCTS[firstId], PRODUCTS[secondId]]
  const [a, b] = pair

  const payNote =
    answers.pay === 'outright'
      ? `${formatPrice(a.price)} and ${formatPrice(b.price)} outright`
      : pair.map((p) => `${p.name} from $0 on ${PLANS[p.minPlan].name}`).join(', ')

  return {
    pair,
    summary: `${a.name}: ${a.highlight}. ${b.name}: ${b.highlight}. ${payNote}.`,
  }
}

export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
