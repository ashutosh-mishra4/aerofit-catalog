import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { PageLayout } from './components/layout/PageLayout'
import { ROUTES } from './data/navigation'
import { CatalogPage } from './pages/CatalogPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { OverviewPage } from './pages/OverviewPage'
import { CatalogProvider } from './state/CatalogProvider'

function App() {
  return (
    <BrowserRouter>
      <CatalogProvider>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path={ROUTES.shop} element={<CatalogPage />} />
            <Route path={ROUTES.howItWorks} element={<HowItWorksPage />} />
            <Route path="*" element={<Navigate to={ROUTES.overview} replace />} />
          </Route>
        </Routes>
      </CatalogProvider>
    </BrowserRouter>
  )
}

export default App
