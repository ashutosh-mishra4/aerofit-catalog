import { createContext } from 'react'
import type {
  BandSize,
  PlanTier,
  ProductId,
  PurchaseMode,
  QuizAnswers,
  UseCaseId,
} from '../types/catalog'
import type { CatalogState } from './catalogReducer'

export interface CatalogActions {
  setMode: (mode: PurchaseMode) => void
  selectPlan: (plan: PlanTier) => void
  setUseCase: (useCase: UseCaseId) => void
  setColor: (productId: ProductId, colorIndex: number) => void
  setSize: (productId: ProductId, size: BandSize) => void
  addToCart: () => void
  toggleSpecs: () => void
  answerQuiz: (answer: Partial<QuizAnswers>) => void
}

export interface CatalogContextValue {
  state: CatalogState
  actions: CatalogActions
}

export const CatalogContext = createContext<CatalogContextValue | null>(null)
