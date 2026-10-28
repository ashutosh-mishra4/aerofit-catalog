import { useContext } from 'react'
import { CatalogContext, type CatalogContextValue } from './catalogContext'

export function useCatalog(): CatalogContextValue {
  const context = useContext(CatalogContext)
  if (!context) throw new Error('useCatalog must be used inside <CatalogProvider>')
  return context
}
