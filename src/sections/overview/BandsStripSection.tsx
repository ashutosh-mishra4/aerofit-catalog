import { Link } from 'react-router'
import { BandTile } from '../../components/overview/BandTile'
import { textLinkClass } from '../../components/ui/buttonStyles'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeader } from '../../components/ui/Section'
import { COMPARISON_ORDER, PRODUCTS, SECTION_IDS } from '../../data/catalog'
import { ROUTES } from '../../data/navigation'

const lineupHref = `${ROUTES.shop}#${SECTION_IDS.lineup}`

export function BandsStripSection() {
  return (
    <Section className="pt-28">
      <SectionHeader
        title="Five bands, one membership"
        description="From an 18 g sleep tracker to a titanium GPS watch. Pick the hardware; the coaching is the same."
        descriptionClassName="max-w-[520px]"
        aside={
          <Link to={`${ROUTES.shop}#${SECTION_IDS.compare}`} className={textLinkClass}>
            Compare all five side by side
          </Link>
        }
      />
      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
        {COMPARISON_ORDER.map((id, index) => (
          <li key={id}>
            <Reveal delay={index * 70}>
              <BandTile product={PRODUCTS[id]} to={lineupHref} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
