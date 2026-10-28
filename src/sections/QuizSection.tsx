import { useMemo } from 'react'
import { QuizQuestionCard } from '../components/catalog/QuizQuestionCard'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/Section'
import { SECTION_IDS } from '../data/catalog'
import { NIGHT_QUESTION, PAY_QUESTION, USE_QUESTION } from '../data/quiz'
import { getQuizRecommendation, scrollToSection } from '../lib/catalog'
import { useCatalog } from '../state/useCatalog'

const TOTAL_QUESTIONS = 3

export function QuizSection() {
  const { state, actions } = useCatalog()
  const { quiz } = state
  const { pair, summary } = useMemo(() => getQuizRecommendation(quiz), [quiz])
  const [first, second] = pair

  const handleCompare = () => {
    actions.setUseCase(quiz.use)
    scrollToSection(SECTION_IDS.compare)
  }

  return (
    <section className="mx-4 mt-28 grid gap-10 rounded-section bg-sand px-6 py-16 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-[80px]">
      <div>
        <SectionHeading size="md">Find your band in three questions</SectionHeading>
        <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft">
          You'll get two bands worth comparing and the reason why. You can still compare all five below.
        </p>
      </div>

      <div>
        <div className="space-y-3">
          <QuizQuestionCard
            index={1}
            total={TOTAL_QUESTIONS}
            question={USE_QUESTION}
            value={quiz.use}
            onChange={(use) => actions.answerQuiz({ use })}
          />
          <QuizQuestionCard
            index={2}
            total={TOTAL_QUESTIONS}
            question={NIGHT_QUESTION}
            value={quiz.night}
            onChange={(night) => actions.answerQuiz({ night })}
          />
          <QuizQuestionCard
            index={3}
            total={TOTAL_QUESTIONS}
            question={PAY_QUESTION}
            value={quiz.pay}
            onChange={(pay) => actions.answerQuiz({ pay })}
          />
        </div>

        <div
          aria-live="polite"
          className="mt-4 flex flex-col gap-6 rounded-float bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-8"
        >
          <div>
            <p className="text-[13px] text-white/70">Start by comparing</p>
            <p className="font-serif text-[30px] leading-tight font-medium">
              {first.name} and {second.name}
            </p>
            <p className="mt-2 text-[14px] text-white/80">{summary}</p>
          </div>
          <Button variant="accent" onClick={handleCompare}>
            Compare {first.name} and {second.name}
          </Button>
        </div>
      </div>
    </section>
  )
}
