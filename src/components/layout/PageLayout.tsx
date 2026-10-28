import { Outlet, useLocation, useNavigate } from 'react-router'
import { SECTION_IDS } from '../../data/catalog'
import {
  FOOTER_COLUMNS,
  FOOTER_COPYRIGHT,
  FOOTER_DISCLAIMER,
  LEGAL_LINKS,
  NAV_CTA,
  PRIMARY_NAV,
  ROUTES,
  SOCIAL_LINKS,
} from '../../data/navigation'
import { scrollToSection } from '../../lib/catalog'
import { useCatalog } from '../../state/useCatalog'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollManager } from './ScrollManager'

/** Shared chrome (navbar + footer) for every route. */
export function PageLayout() {
  const { state } = useCatalog()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleCartClick = () => {
    if (pathname === ROUTES.shop) scrollToSection(SECTION_IDS.lineup)
    else navigate(`${ROUTES.shop}#${SECTION_IDS.lineup}`)
  }

  return (
    <div className="overflow-x-clip py-5">
      <ScrollManager />
      <Navbar links={PRIMARY_NAV} cta={NAV_CTA} cartCount={state.cartCount} onCartClick={handleCartClick} />
      <main>
        <Outlet />
      </main>
      <Footer
        columns={FOOTER_COLUMNS}
        legalLinks={LEGAL_LINKS}
        socialLinks={SOCIAL_LINKS}
        copyright={FOOTER_COPYRIGHT}
        disclaimer={FOOTER_DISCLAIMER}
      />
    </div>
  )
}
