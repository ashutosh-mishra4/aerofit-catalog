import { PRODUCTS } from '../data/catalog'
import type {
  BandSize,
  PlanTier,
  ProductId,
  ProductSelection,
  PurchaseMode,
  QuizAnswers,
  UseCaseId,
} from '../types/catalog'

export interface CatalogState {
  mode: PurchaseMode
  plan: PlanTier
  useCase: UseCaseId
  cartCount: number
  showAllSpecs: boolean
  selections: Record<ProductId, ProductSelection>
  quiz: QuizAnswers
}

export type CatalogAction =
  | { type: 'setMode'; mode: PurchaseMode }
  | { type: 'selectPlan'; plan: PlanTier }
  | { type: 'setUseCase'; useCase: UseCaseId }
  | { type: 'setColor'; productId: ProductId; colorIndex: number }
  | { type: 'setSize'; productId: ProductId; size: BandSize }
  | { type: 'addToCart' }
  | { type: 'toggleSpecs' }
  | { type: 'answerQuiz'; answer: Partial<QuizAnswers> }

const initialSelections = Object.fromEntries(
  Object.keys(PRODUCTS).map((id) => [id, { colorIndex: 0, size: 'M' }]),
) as Record<ProductId, ProductSelection>

export const initialCatalogState: CatalogState = {
  mode: 'outright',
  plan: 2,
  useCase: 'endurance',
  cartCount: 0,
  showAllSpecs: false,
  selections: initialSelections,
  quiz: { use: 'training', night: 'light', pay: 'membership' },
}

function updateSelection(
  state: CatalogState,
  productId: ProductId,
  patch: Partial<ProductSelection>,
): CatalogState {
  return {
    ...state,
    selections: {
      ...state.selections,
      [productId]: { ...state.selections[productId], ...patch },
    },
  }
}

export function catalogReducer(state: CatalogState, action: CatalogAction): CatalogState {
  switch (action.type) {
    case 'setMode':
      return { ...state, mode: action.mode }
    case 'selectPlan':
      // Picking a plan always implies membership pricing.
      return { ...state, plan: action.plan, mode: 'membership' }
    case 'setUseCase':
      return { ...state, useCase: action.useCase }
    case 'setColor':
      return updateSelection(state, action.productId, { colorIndex: action.colorIndex })
    case 'setSize':
      return updateSelection(state, action.productId, { size: action.size })
    case 'addToCart':
      return { ...state, cartCount: state.cartCount + 1 }
    case 'toggleSpecs':
      return { ...state, showAllSpecs: !state.showAllSpecs }
    case 'answerQuiz':
      return { ...state, quiz: { ...state.quiz, ...action.answer } }
    default:
      return state
  }
}
