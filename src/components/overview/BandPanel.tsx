import type { ReactNode, Ref } from 'react'
import { Link } from 'react-router'
import { BAND_SIZES, PLAN_TIERS, PLANS, PRODUCTS, SECTION_IDS, SIZE_RANGES, SPEC_ROWS } from '../../data/catalog'
import { ROUTES } from '../../data/navigation'
import { cn } from '../../lib/cn'
import { formatPrice, fullProductName, isIncludedInPlan } from '../../lib/catalog'
import { useCatalog } from '../../state/useCatalog'
import type { SpecKey } from '../../types/catalog'
import type { BandShowcase, ShowcaseTheme } from '../../types/content'
import { buttonClasses, type ButtonVariant } from '../ui/buttonStyles'

interface ThemeStyle {
  panel: string
  price: string
  priceStrong: string
  primary: ButtonVariant
  secondary: ButtonVariant
  iconChip: string
}

const THEMES: Record<ShowcaseTheme, ThemeStyle> = {
  slate: {
    panel: 'bg-band-slate text-white',
    price: 'text-white/70',
    priceStrong: 'text-white',
    primary: 'light',
    secondary: 'outlineLight',
    iconChip: 'bg-chip',
  },
  olive: {
    panel: 'bg-band-olive text-white',
    price: 'text-white/70',
    priceStrong: 'text-white',
    primary: 'light',
    secondary: 'outlineLight',
    iconChip: 'bg-chip',
  },
  accent: {
    panel: 'bg-accent text-ink',
    price: 'text-ink-soft',
    priceStrong: 'text-ink',
    primary: 'primary',
    secondary: 'outlineSoft',
    iconChip: 'bg-accent',
  },
}

/** Spec rows shown on each panel, with the short labels used there. */
const PANEL_SPECS: Array<{ key: SpecKey; label: string; yes?: string }> = [
  { key: 'display', label: 'Display' },
  { key: 'battery', label: 'Battery' },
  { key: 'gps', label: 'GPS' },
  { key: 'water', label: 'Water' },
  { key: 'case', label: 'Case' },
  { key: 'weight', label: 'Weight' },
  { key: 'modes', label: 'Workout types' },
  { key: 'temp', label: 'Skin temperature' },
  { key: 'ecg', label: 'ECG', yes: 'Heart Screener' },
]

const eyebrowClass = 'text-[13px] font-semibold tracking-[0.12em] text-muted uppercase'

function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('rounded-card bg-white p-8 lg:p-12', className)}>{children}</div>
}

interface BandPanelProps {
  ref?: Ref<HTMLElement>
  showcase: BandShowcase
  className?: string
  /** Rendered behind the content; the stack darkens it as the next panel slides over. */
  shade?: ReactNode
}

/** One band in the stacked overview lineup: pinned photo on the left, detail cards on the right. */
export function BandPanel({ ref, showcase, className, shade }: BandPanelProps) {
  const { actions } = useCatalog()
  const product = PRODUCTS[showcase.productId]
  const theme = THEMES[showcase.theme]
  const { stat } = showcase
  const detailsHref =
    product.id === 'ultra' ? `${ROUTES.shop}#${SECTION_IDS.featured}` : `${ROUTES.shop}#${SECTION_IDS.lineup}`

  const specValue = (key: SpecKey, yes = 'Yes') => {
    const value = SPEC_ROWS.find((row) => row.key === key)?.values[product.id]
    if (value === true) return yes
    if (value === false || value === undefined) return '—'
    return value
  }

  return (
    <article ref={ref} className={cn('relative mx-4 rounded-section', theme.panel, className)}>
      {shade}
      <div className="grid gap-4 p-4 lg:grid-cols-2 lg:p-6">
        <div className="lg:sticky lg:top-[100px] lg:self-start">
          <div className="relative h-[340px] overflow-hidden rounded-card bg-tile lg:h-[520px]">
            <img src={showcase.photo} alt={showcase.photoAlt} className="size-full object-cover" loading="lazy" decoding="async" />
            {product.shipNote && (
              <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-ink">
                {product.shipNote}
              </span>
            )}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-2">
            <div>
              <h3 className="font-serif text-[32px] leading-tight font-medium">{fullProductName(product)}</h3>
              <p className={cn('mt-1 text-[13px]', theme.price)}>
                {formatPrice(product.price)} or{' '}
                <span className={cn('font-medium', theme.priceStrong)}>$0 on {PLANS[product.minPlan].name}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={actions.addToCart} className={buttonClasses({ variant: theme.primary })}>
                {showcase.ctaLabel}
              </button>
              <Link to={detailsHref} className={buttonClasses({ variant: theme.secondary })}>
                Details
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-ink">
          <Card>
            <p className="font-serif text-[26px] leading-[1.3] font-medium lg:text-[32px]">{showcase.statement}</p>
          </Card>

          <Card className={cn('relative overflow-hidden text-center', stat.withArcs && 'pb-28 lg:pb-36')}>
            {stat.withArcs && (
              <svg viewBox="0 0 400 100" className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2 opacity-40" aria-hidden>
                <path d="M 10 100 A 190 92 0 0 1 390 100" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeDasharray="1.5 8" strokeLinecap="round" />
                <path d="M 70 100 A 130 58 0 0 1 330 100" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeDasharray="1.5 8" strokeLinecap="round" opacity=".5" />
              </svg>
            )}
            <p className={cn('relative', eyebrowClass)}>{stat.label}</p>
            <p className="relative mt-2 font-serif text-[110px] leading-none font-medium tracking-[-0.03em] lg:text-[150px]">
              {stat.value}
              {stat.unit && <span className="text-[0.35em] text-muted"> {stat.unit}</span>}
            </p>
            <p className="relative mt-3 text-[15px] text-ink-soft">{stat.note}</p>
          </Card>

          <Card>
            <p className={eyebrowClass}>A closer look at {product.name}</p>
            <ul className="mt-6 divide-y divide-line-strong">
              {showcase.highlights.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-full text-ink', theme.iconChip)}>
                    <Icon size={18} stroke={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[17px] font-semibold">{title}</p>
                    <p className="mt-1 text-[14px] leading-[1.6] text-ink-soft">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <p className={eyebrowClass}>{product.name} specs</p>
            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
              {PANEL_SPECS.map(({ key, label, yes }) => (
                <div key={key} className="border-t border-line-strong pt-4">
                  <dt className="text-[13px] text-muted">{label}</dt>
                  <dd className="mt-1 text-[17px] font-semibold">{specValue(key, yes)}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card>
            <p className={eyebrowClass}>Colours</p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {product.colors.map((color) => (
                <li key={color.name} className="flex items-center gap-2.5">
                  <span aria-hidden className="size-7 rounded-full ring-1 ring-black/10" style={{ background: color.hex }} />
                  <span className="text-[15px] font-medium">{color.name}</span>
                </li>
              ))}
            </ul>
            <p className={cn('mt-8', eyebrowClass)}>Band sizes</p>
            <ul className="mt-5 grid grid-cols-3 gap-2">
              {BAND_SIZES.map((size) => (
                <li key={size} className="rounded-thumb bg-chip px-4 py-3">
                  <p className="text-[15px] font-semibold">{size}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{SIZE_RANGES[size]}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <p className={eyebrowClass}>Included with membership</p>
            <ul className="mt-6 divide-y divide-line-strong">
              {PLAN_TIERS.map((tier) => {
                const included = isIncludedInPlan(product, tier)
                return (
                  <li key={tier} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-[17px] font-semibold">Aero Fit {PLANS[tier].name}</p>
                      <p className="mt-0.5 text-[13px] text-muted">{formatPrice(PLANS[tier].yearly)}/yr</p>
                    </div>
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-0.5 text-[12px] font-medium',
                        included ? 'bg-accent text-ink' : 'bg-chip text-muted',
                      )}
                    >
                      {included ? 'Band $0' : 'Not included'}
                    </span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 flex items-center justify-between rounded-thumb bg-chip px-4 py-3 text-[14px]">
              <span className="text-muted">Buy outright</span>
              <span className="font-semibold">{formatPrice(product.price)} one-time · free returns</span>
            </p>
          </Card>
        </div>
      </div>
    </article>
  )
}
