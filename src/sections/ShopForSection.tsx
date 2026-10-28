import { UseCaseCard } from '../components/catalog/UseCaseCard'
import { Section, SectionHeader } from '../components/ui/Section'
import { USE_CASE_ORDER, USE_CASES } from '../data/catalog'
import { useCatalog } from '../state/useCatalog'

export function ShopForSection() {
  const { state, actions } = useCatalog()

  return (
    <Section className="pt-24">
      <SectionHeader
        title="Which band belongs to you?"
        titleClassName="max-w-[560px]"
        aside={
          <p className="max-w-[400px] text-[15px] leading-[1.6] text-ink-soft">
            Pick what you do most. We'll point out the bands that suit it in the lineup and comparison below.
          </p>
        }
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {USE_CASE_ORDER.map((id) => (
          <UseCaseCard
            key={id}
            useCase={USE_CASES[id]}
            isSelected={state.useCase === id}
            onSelect={() => actions.setUseCase(id)}
          />
        ))}
      </div>
    </Section>
  )
}
