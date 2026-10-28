import { Link } from 'react-router'
import type { LinkGroup, NavLink, SocialLink } from '../../types/catalog'
import { Logo } from '../ui/Logo'
import { NewsletterCard } from './NewsletterCard'

interface FooterProps {
  columns: LinkGroup[]
  legalLinks: NavLink[]
  socialLinks?: SocialLink[]
  copyright: string
  disclaimer?: string
}

export function Footer({ columns, legalLinks, socialLinks = [], copyright, disclaimer }: FooterProps) {
  return (
    <footer className="mx-4 mt-28 rounded-section bg-sand px-6 pt-14 pb-8 lg:px-[80px]">
      <Logo size="lg" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
        <NewsletterCard />
        <div className="grid grid-cols-2 gap-8 pt-2 text-[14px] sm:grid-cols-3">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="mb-4 font-medium text-subtle">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition hover:opacity-70">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 rounded-[28px] bg-white px-6 py-4 text-[12px] text-muted sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:py-0">
        <nav aria-label="Legal" className="flex flex-wrap gap-5">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {socialLinks.length > 0 && (
            <nav aria-label="Connect" className="-ml-2 flex items-center gap-1 sm:ml-0">
              {socialLinks.map(({ label, href, icon: SocialIcon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="flex size-8 items-center justify-center rounded-full text-ink-soft transition hover:bg-chip hover:text-ink"
                >
                  <SocialIcon size={17} stroke={1.75} aria-hidden />
                </a>
              ))}
            </nav>
          )}
          <span>{copyright}</span>
        </div>
      </div>

      {disclaimer && <p className="mt-6 max-w-[900px] px-2 text-[11px] leading-[1.7] text-subtle">{disclaimer}</p>}
    </footer>
  )
}
