import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { PAYMENT_STEPS } from '../../data/membership'
import { cn } from '../../lib/cn'

export function PaymentStepsSection() {
  return (
    <Section className="grid gap-12 pt-28 lg:grid-cols-[400px_1fr] lg:gap-20">
      <div className="lg:sticky lg:top-10 lg:self-start">
        <SectionHeading>Where your money goes</SectionHeading>
        <p className="mt-4 max-w-[380px] text-[15px] leading-[1.6] text-ink-soft">
          Four steps and one charge a year. Here is exactly what you pay, and what you don’t, from sign-up to
          renewal.
        </p>
      </div>

      <ol className="border-t border-line-strong">
        {PAYMENT_STEPS.map((step, index) => (
          <li key={step.title} className="border-b border-line-strong">
            <Reveal delay={index * 80} className="grid gap-4 py-8 sm:grid-cols-[64px_1fr_auto] sm:gap-8">
              <span aria-hidden className="font-serif text-[40px] leading-none font-medium text-subtle tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-[20px] font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-[460px] text-[15px] leading-[1.6] text-ink-soft">{step.description}</p>
              </div>
              <p
                className={cn(
                  'self-start rounded-full px-3.5 py-1.5 text-[13px] font-semibold whitespace-nowrap',
                  step.isFree ? 'bg-accent' : 'bg-chip',
                )}
              >
                <span className="sr-only">You pay: </span>
                {step.payNote}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
