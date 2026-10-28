import { IconBrandInstagram, IconBrandYoutube, IconMail, IconMicrophone } from '@tabler/icons-react'
import type { LinkGroup, NavLink, SocialLink } from '../types/catalog'

export const ROUTES = {
  shop: '/',
  overview: '/overview',
  howItWorks: '/how-it-works',
} as const

export const PLANS_ANCHOR = 'plans'

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Overview', href: ROUTES.overview },
  { label: 'How it works', href: ROUTES.howItWorks },
  { label: 'Shop bands', href: ROUTES.shop },
]

export const NAV_CTA: NavLink = { label: 'Join Aero Fit free', href: `${ROUTES.howItWorks}#${PLANS_ANCHOR}` }

const plansHref = `${ROUTES.howItWorks}#${PLANS_ANCHOR}`
const lineupHref = `${ROUTES.shop}#lineup`

export const FOOTER_COLUMNS: LinkGroup[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Aero Fit Lite', href: lineupHref },
      { label: 'Aero Fit Smart', href: lineupHref },
      { label: 'Aero Fit Pro', href: lineupHref },
      { label: 'Aero Fit Music', href: lineupHref },
      { label: 'Aero Fit Ultra', href: `${ROUTES.shop}#ultra` },
    ],
  },
  {
    title: 'Memberships',
    links: [
      { label: 'How it works', href: ROUTES.howItWorks },
      { label: 'Aero Fit One', href: plansHref },
      { label: 'Aero Fit Peak', href: plansHref },
      { label: 'Aero Fit Life', href: plansHref },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Sizing guide', href: '#' },
      { label: 'Accessories', href: '#' },
      { label: 'Download App', href: '#' },
    ],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#', icon: IconBrandInstagram },
  { label: 'YouTube', href: '#', icon: IconBrandYoutube },
  { label: 'Podcast', href: '#', icon: IconMicrophone },
  { label: 'Contact', href: '#', icon: IconMail },
]

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Accessibility', href: '#' },
]

export const FOOTER_COPYRIGHT = '© 2026 Aero Fit. All rights reserved.'

export const FOOTER_DISCLAIMER =
  'Aero Fit features are intended for general wellness and fitness purposes. They are not intended to diagnose, treat, cure, or prevent any disease. Membership plans are billed annually with a 12-month minimum term.'
