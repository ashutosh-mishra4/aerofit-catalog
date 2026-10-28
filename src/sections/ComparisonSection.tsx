import { ComparisonCard } from '../components/catalog/ComparisonCard'
import { Section, SectionHeader } from '../components/ui/Section'
import { COMPARISON_ORDER, SECTION_IDS, SPEC_ROWS, USE_CASES } from '../data/catalog'
import { useCatalog } from '../state/useCatalog'

export function ComparisonSection() {
  const { state, actions } = useCatalog()

  return (
    <Section id={SECTION_IDS.compare} className="scroll-mt-6 pt-28">
      <SectionHeader
        title="How the five differ"
        description={
          <>
            The rows that decide most purchases come first. Rows for{' '}
            <mark className="rounded-sm bg-accent px-1.5 text-inherit">{USE_CASES[state.useCase].label}</mark> are
            highlighted.
          </>
        }
      />

      <ComparisonCard
        className="mt-8"
        productIds={COMPARISON_ORDER}
        rows={SPEC_ROWS}
        mode={state.mode}
        plan={state.plan}
        useCase={state.useCase}
        isExpanded={state.showAllSpecs}
        onToggleExpanded={actions.toggleSpecs}
      />
    </Section>
  )
}
