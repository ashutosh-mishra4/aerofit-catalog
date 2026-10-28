import type {
  NightPreference,
  ProductId,
  PurchaseMode,
  QuizQuestion,
  UseCaseId,
} from '../types/catalog'

export const USE_QUESTION: QuizQuestion<UseCaseId> = {
  title: 'What will you use it for most?',
  options: [
    { value: 'sleep', label: 'Sleep' },
    { value: 'training', label: 'Training' },
    { value: 'music', label: 'Music on runs' },
    { value: 'endurance', label: 'Long days outdoors' },
  ],
}

export const NIGHT_QUESTION: QuizQuestion<NightPreference> = {
  title: 'How do you feel about wearing it overnight?',
  options: [
    { value: 'light', label: 'I want the lightest band' },
    { value: 'any', label: "Weight doesn't matter" },
  ],
}

export const PAY_QUESTION: QuizQuestion<PurchaseMode> = {
  title: 'How would you like to pay?',
  options: [
    { value: 'outright', label: 'Buy the band outright' },
    { value: 'membership', label: 'Include it in a membership' },
  ],
}

export const QUIZ_PAIRS: Record<UseCaseId, Record<NightPreference, [ProductId, ProductId]>> = {
  sleep: { light: ['lite', 'smart'], any: ['smart', 'pro'] },
  training: { light: ['pro', 'smart'], any: ['pro', 'ultra'] },
  music: { light: ['music', 'smart'], any: ['music', 'pro'] },
  endurance: { light: ['pro', 'smart'], any: ['ultra', 'pro'] },
}
