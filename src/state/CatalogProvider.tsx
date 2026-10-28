import { useMemo, useReducer, type ReactNode } from 'react'
import { CatalogContext, type CatalogActions } from './catalogContext'
import { catalogReducer, initialCatalogState } from './catalogReducer'

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(catalogReducer, initialCatalogState)

  const actions = useMemo<CatalogActions>(
    () => ({
      setMode: (mode) => dispatch({ type: 'setMode', mode }),
      selectPlan: (plan) => dispatch({ type: 'selectPlan', plan }),
      setUseCase: (useCase) => dispatch({ type: 'setUseCase', useCase }),
      setColor: (productId, colorIndex) => dispatch({ type: 'setColor', productId, colorIndex }),
      setSize: (productId, size) => dispatch({ type: 'setSize', productId, size }),
      addToCart: () => dispatch({ type: 'addToCart' }),
      toggleSpecs: () => dispatch({ type: 'toggleSpecs' }),
      answerQuiz: (answer) => dispatch({ type: 'answerQuiz', answer }),
    }),
    [],
  )

  const value = useMemo(() => ({ state, actions }), [state, actions])

  return <CatalogContext value={value}>{children}</CatalogContext>
}
