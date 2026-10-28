import { IconShoppingBag } from '@tabler/icons-react'
import { Link, NavLink as RouterNavLink } from 'react-router'
import { cn } from '../../lib/cn'
import type { NavLink } from '../../types/catalog'
import { buttonClasses } from '../ui/buttonStyles'
import { Logo } from '../ui/Logo'

interface NavbarProps {
  links: NavLink[]
  cta: NavLink
  cartCount: number
  onCartClick?: () => void
}

export function Navbar({ links, cta, cartCount, onCartClick }: NavbarProps) {
  const hasItems = cartCount > 0

  return (
    <header className="mx-4 flex h-[68px] items-center justify-between rounded-full border border-line bg-white pr-2 pl-7 shadow-nav">
      <div className="flex items-center gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden gap-2 text-[14px] font-medium md:flex">
          {links.map((link) => (
            <RouterNavLink
              key={link.label}
              to={link.href}
              end
              className={({ isActive }) =>
                cn(
                  'flex h-10 items-center rounded-full px-4 transition',
                  isActive ? 'bg-accent' : 'bg-chip hover:bg-chip-hover',
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onCartClick}
          aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          className="flex h-[52px] items-center gap-2 rounded-full border border-line bg-white pr-2 pl-5 text-[14px] font-medium transition hover:bg-chip"
        >
          <IconShoppingBag size={18} stroke={2} aria-hidden />
          Cart
          <span
            aria-live="polite"
            className={cn(
              'flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-[13px] transition',
              hasItems ? 'bg-accent font-medium' : 'bg-chip',
            )}
          >
            {cartCount}
          </span>
        </button>
        <Link to={cta.href} className={buttonClasses({ size: 'lg', className: 'hidden sm:inline-flex' })}>
          {cta.label}
        </Link>
      </div>
    </header>
  )
}
