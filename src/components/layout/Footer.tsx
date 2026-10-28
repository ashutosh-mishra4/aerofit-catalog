import { Link } from 'react-router'
import type { LinkGroup, NavLink, SocialLink } from '../../types/catalog'
import { Logo } from '../ui/Logo'

interface FooterProps {
  columns: LinkGroup[]
  legalLinks: NavLink[]
  socialLinks?: SocialLink[]
  copyright: string
  disclaimer?: string
}

const columnTitleClass = 'mb-4 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase'

export function Footer({ columns, legalLinks, socialLinks = [], copyright, disclaimer }: FooterProps) {
  return (
    <footer className="relative mx-4 mt-28 overflow-hidden rounded-section bg-ink bg-footer-glow pt-20 pb-10 text-canvas">
      <span aria-hidden className="pointer-events-none absolute top-10 left-14 size-[60px] bg-accent opacity-25 shape-star" />
      <span aria-hidden className="pointer-events-none absolute top-28 right-28 size-[90px] rounded-full bg-ember opacity-20" />
      <span aria-hidden className="pointer-events-none absolute bottom-36 left-[34%] size-11 bg-sage opacity-30 shape-sparkle" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-8">
        <div className="grid gap-10 text-[15px] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:gap-7">
          <div>
            <Logo size="footer" className="mb-4 w-fit" />
            {disclaimer && <p className="max-w-[30ch] text-[13px] leading-[1.6] italic opacity-60">{disclaimer}</p>}
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className={columnTitleClass}>{column.title}</p>
              <ul className="space-y-2 opacity-85">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {socialLinks.length > 0 && (
            <nav aria-label="Connect">
              <p className={columnTitleClass}>Connect</p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon: SocialIcon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    className="flex size-9 items-center justify-center rounded-full bg-white/12 transition hover:bg-accent hover:text-ink"
                  >
                    <SocialIcon size={18} stroke={1.75} aria-hidden />
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[13px] italic opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <span>{copyright}</span>
          <nav aria-label="Legal" className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
