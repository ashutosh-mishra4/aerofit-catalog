import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { METRICS } from '../../data/overview'

export function MetricsSection() {
  return (
    <Section className="grid gap-12 pt-28 lg:grid-cols-[400px_1fr] lg:gap-20">
      <div className="lg:sticky lg:top-10 lg:self-start">
        <SectionHeading>Four numbers that run your day</SectionHeading>
        <p className="mt-4 max-w-[380px] text-[15px] leading-[1.6] text-ink-soft">
          Every band measures the same signals and feeds the same scores. Higher-end bands add sensors, not a
          different app.
        </p>
      </div>

      <ol className="border-t border-line-strong">
        {METRICS.map(({ id, icon: Icon, label, value, unit, description, sources }, index) => (
          <li key={id} className="border-b border-line-strong">
            <Reveal delay={index * 80} className="grid gap-4 py-9 sm:grid-cols-[200px_1fr] sm:gap-10">
              <p className="font-serif text-[64px] leading-none font-medium tracking-[-0.02em]">
                {value}
                {unit && <span className="ml-1 text-[24px] text-muted">{unit}</span>}
              </p>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-accent">
                    <Icon size={16} stroke={2} aria-hidden />
                  </span>
                  <h3 className="text-[18px] font-semibold">{label}</h3>
                </div>
                <p className="mt-3 max-w-[460px] text-[15px] leading-[1.6] text-ink-soft">{description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${label} is based on`}>
                  {sources.map((source) => (
                    <li key={source} className="rounded-full bg-chip px-3 py-1 text-[12px] font-medium text-ink-soft">
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
