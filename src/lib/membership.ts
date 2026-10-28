import { COMPARISON_ORDER, PRODUCTS } from '../data/catalog'
import type { PlanTier, Product } from '../types/catalog'
import { isIncludedInPlan } from './catalog'

/** Bands available at $0 on a plan, cheapest first. */
export const getIncludedProducts = (tier: PlanTier): Product[] =>
  COMPARISON_ORDER.map((id) => PRODUCTS[id]).filter((product) => isIncludedInPlan(product, tier))

/** The highest-value band a plan includes, used for receipt examples. */
export const getHeadlineProduct = (tier: PlanTier): Product =>
  getIncludedProducts(tier).reduce((best, product) => (product.price > best.price ? product : best))

export const formatNameList = (names: string[]): string =>
  names.length <= 1 ? (names[0] ?? '') : `${names.slice(0, -1).join(', ')} or ${names[names.length - 1]}`
