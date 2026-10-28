import { IconCheck, IconMinus } from '@tabler/icons-react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { PAYMENT_COMPARISON } from '../../data/membership'
import { cn } from '../../lib/cn'
import type { ComparisonValue } from '../../types/content'

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true) return <IconCheck size={18} stroke={2.25} aria-label="Included" />
  if (value === false) return <IconMinus size={18} stroke={2} className="text-disabled" aria-label="Not included" />
  return <>{value}</>
}

export function PayComparisonSection() {
  return (
    <Section className="pt-28">
      <SectionHeader
        title="Membership or buy outright?"
        description="Both get a band on your wrist. Only one of them bills you for it."
        aside={
          <p className="max-w-[400px] text-[14px] leading-[1.6] text-muted">
            Example: Pro bought outright is $299 once. Pro on Peak is also $299 for the year, but the band is $0 and
            training plans, ECG coaching and free replacement come with it.
          </p>
        }
      />

      <Reveal className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left text-[14px]">
          <caption className="sr-only">Membership compared with buying a band outright</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[38%] pb-4 font-medium text-muted">
                <span className="sr-only">Feature</span>
              </th>
              <th scope="col" className="rounded-t-tile bg-accent-pale px-5 pt-5 pb-4 font-serif text-[22px] font-medium">
                Membership
              </th>
              <th scope="col" className="px-5 pt-5 pb-4 font-serif text-[22px] font-medium">
                Buy outright
              </th>
            </tr>
          </thead>
          <tbody>
            {PAYMENT_COMPARISON.map((row, index) => {
              const isLast = index === PAYMENT_COMPARISON.length - 1
              return (
                <tr key={row.label}>
                  <th scope="row" className="border-t border-line-strong py-4 pr-6 font-medium">
                    {row.label}
                  </th>
                  <td
                    className={cn(
                      'border-t border-line-strong bg-accent-pale px-5 py-4 font-medium',
                      isLast && 'rounded-b-tile',
                    )}
                  >
                    <Cell value={row.membership} />
                  </td>
                  <td className="border-t border-line-strong px-5 py-4 text-ink-soft">
                    <Cell value={row.outright} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Reveal>
    </Section>
  )
}
