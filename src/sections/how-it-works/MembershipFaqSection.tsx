import { Accordion, type AccordionItem } from '../../components/ui/Accordion'
import { Section, SectionHeading } from '../../components/ui/Section'
import { MEMBERSHIP_FAQS } from '../../data/membership'

const FAQ_ITEMS: AccordionItem[] = MEMBERSHIP_FAQS.map((faq) => ({
  id: faq.id,
  title: faq.question,
  content: faq.answer,
}))

export function MembershipFaqSection() {
  return (
    <Section className="grid gap-10 pt-28 lg:grid-cols-[400px_1fr] lg:gap-20">
      <div>
        <SectionHeading size="md">Questions about paying</SectionHeading>
        <p className="mt-4 max-w-[360px] text-[15px] leading-[1.6] text-ink-soft">
          The short version: one yearly charge for the membership, nothing for the band.
        </p>
      </div>
      <Accordion items={FAQ_ITEMS} defaultOpenId={FAQ_ITEMS[0].id} />
    </Section>
  )
}
