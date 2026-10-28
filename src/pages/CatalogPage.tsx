import { ComparisonSection } from '../sections/ComparisonSection'
import { HeroSection } from '../sections/HeroSection'
import { LineupSection } from '../sections/LineupSection'
import { QuizSection } from '../sections/QuizSection'
import { ShopForSection } from '../sections/ShopForSection'

export function CatalogPage() {
  return (
    <>
      <title>Shop bands — Aero Fit</title>
      <HeroSection />
      <ShopForSection />
      <LineupSection />
      <QuizSection />
      <ComparisonSection />
    </>
  )
}
