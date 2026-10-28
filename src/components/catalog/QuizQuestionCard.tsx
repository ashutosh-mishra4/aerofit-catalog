import type { QuizQuestion } from '../../types/catalog'
import { ChoiceChip } from '../ui/ChoiceChip'

interface QuizQuestionCardProps<T extends string> {
  index: number
  total: number
  question: QuizQuestion<T>
  value: T
  onChange: (value: T) => void
}

export function QuizQuestionCard<T extends string>({
  index,
  total,
  question,
  value,
  onChange,
}: QuizQuestionCardProps<T>) {
  const titleId = `quiz-q-${index}`
  return (
    <div className="rounded-tile bg-white p-5">
      <p className="text-[13px] text-muted">
        Question {index} of {total}
      </p>
      <p id={titleId} className="mt-1 text-[17px] font-medium">
        {question.title}
      </p>
      <div role="group" aria-labelledby={titleId} className="mt-3 flex flex-wrap gap-2">
        {question.options.map((option) => (
          <ChoiceChip key={option.value} isSelected={option.value === value} onClick={() => onChange(option.value)}>
            {option.label}
          </ChoiceChip>
        ))}
      </div>
    </div>
  )
}
