import { Reveal } from '../../components/ui/Reveal'
import { SectionHeading } from '../../components/ui/Section'
import { DAY_MOMENTS } from '../../data/overview'

export function DayTimelineSection() {
  return (
    <section className="mx-4 mt-28 rounded-section bg-sand px-6 py-16 lg:px-[80px] lg:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading size="md" className="max-w-[520px]">
          A day on the band, from alarm to lights out
        </SectionHeading>
        <p className="max-w-[380px] text-[15px] leading-[1.6] text-ink-soft">
          You wear it and forget it. Aero Fit only speaks up when there is something worth acting on.
        </p>
      </div>

      <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <span aria-hidden className="absolute top-[7px] right-0 left-0 hidden h-px bg-line-strong lg:block" />
        {DAY_MOMENTS.map(({ time, icon: Icon, title, description }, index) => (
          <li key={time} className="relative">
            <Reveal delay={index * 120}>
              <span aria-hidden className="relative block size-[15px] rounded-full border-[3px] border-sand bg-ink" />
              <p className="mt-5 text-[13px] font-semibold tracking-wide text-muted tabular-nums">{time}</p>
              <div className="mt-3 flex size-11 items-center justify-center rounded-full bg-white">
                <Icon size={20} stroke={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-tight font-medium">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">{description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
