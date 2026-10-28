import { IconActivityHeartbeat, IconBolt, IconFlame, IconHeartbeat, IconMoonStars, IconRun, IconSunrise, IconToolsKitchen2 } from '@tabler/icons-react'
import type { DayMoment, Metric, ReadoutRow } from '../types/content'
import { ASSET_CDN } from './catalog'

export const OVERVIEW_HERO_IMAGE = `${ASSET_CDN}/ff20317377ff42e99355401aec31e474.jpg`

export const MORNING_READOUT: { score: string; verdict: string; rows: ReadoutRow[] } = {
  score: '82%',
  verdict: 'Green light for intervals',
  rows: [
    { label: 'Sleep', value: '7h 42m', level: 86 },
    { label: 'HRV', value: '64 ms', level: 72 },
    { label: 'Resting HR', value: '52 bpm', level: 64 },
  ],
}

export const METRICS: Metric[] = [
  {
    id: 'sleep',
    icon: IconMoonStars,
    label: 'Sleep Performance',
    value: '86',
    unit: '%',
    description: 'How much of the sleep your body needed you actually got, split into light, deep and REM stages.',
    sources: ['Sleep stages', 'Skin temperature', 'Breathing rate'],
  },
  {
    id: 'recovery',
    icon: IconBolt,
    label: 'Recovery',
    value: '82',
    unit: '%',
    description: 'A morning read on how ready you are to take on load, so you know whether to push or back off.',
    sources: ['Heart rate variability', 'Resting heart rate', 'Sleep'],
  },
  {
    id: 'strain',
    icon: IconFlame,
    label: 'Strain',
    value: '14.2',
    description: 'Every workout, commute and flight of stairs adds up to one daily effort score on a 0–21 scale.',
    sources: ['Heart rate zones', 'Workout types', 'Steps'],
  },
  {
    id: 'heart',
    icon: IconHeartbeat,
    label: 'Heart health',
    value: '52',
    unit: 'bpm',
    description: 'Resting heart rate trends, plus ECG and Blood Pressure Insights on Pro and Ultra.',
    sources: ['Resting HR', 'ECG', 'Blood pressure'],
  },
]

export const DAY_MOMENTS: DayMoment[] = [
  {
    time: '6:40',
    icon: IconSunrise,
    title: 'Wake to a plan',
    description: 'Your Recovery score is waiting, with a strain target sized to how well you slept.',
  },
  {
    time: '12:15',
    icon: IconToolsKitchen2,
    title: 'Steady through the day',
    description: 'Strain builds quietly in the background. A nudge arrives if you have been still too long.',
  },
  {
    time: '18:30',
    icon: IconRun,
    title: 'Train with feedback',
    description: 'Live heart rate zones and GPS on your wrist, then a breakdown of what the session cost you.',
  },
  {
    time: '22:50',
    icon: IconActivityHeartbeat,
    title: 'Wind down on time',
    description: 'A bedtime suggestion based on tomorrow’s plan, so your sleep matches the day ahead.',
  },
]
