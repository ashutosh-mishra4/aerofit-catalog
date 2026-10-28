import {
  IconBattery4,
  IconBolt,
  IconCurrentLocation,
  IconDiamond,
  IconDroplet,
  IconFlame,
  IconHeartbeat,
  IconHeartRateMonitor,
  IconMapPin,
  IconMoonStars,
  IconWaveSine,
} from '@tabler/icons-react'
import type { BandShowcase, CollageItem, DayMoment, Metric, ReadoutRow } from '../types/content'
import { ASSET_CDN, PRODUCTS } from './catalog'

/** Lifestyle photography for the overview, hosted alongside the product shots. */
const LIFESTYLE_CDN = 'https://kombai-assets-dev.b-cdn.net/generated_assets/22958db3-c0cf-4d55-af69-a56c3814f90e'

export const OVERVIEW_SECTION_IDS = {
  scores: 'scores',
  bands: 'bands',
} as const

export const OVERVIEW_HERO_IMAGE = `${ASSET_CDN}/ff20317377ff42e99355401aec31e474.jpg`

/** This morning's Recovery score, counted up in the pinned score scene. */
export const MORNING_RECOVERY = 82

export const MORNING_READOUT: { score: string; verdict: string; rows: ReadoutRow[] } = {
  score: `${MORNING_RECOVERY}%`,
  verdict: 'Green light for intervals',
  rows: [
    { label: 'Sleep', value: '7h 42m', level: 86, icon: IconMoonStars },
    { label: 'HRV', value: '64 ms', level: 72, icon: IconWaveSine },
    { label: 'Resting HR', value: '52 bpm', level: 64, icon: IconHeartbeat },
  ],
}

export const COLLAGE_ITEMS: CollageItem[] = [
  { kind: 'photo', x: -34, y: -24, speed: 1.2, width: 210, height: 150, image: `${LIFESTYLE_CDN}/e8e9b52b3aa4462b8d6ad53cd59b2ef3.jpg`, alt: 'Runner checking his Aero Fit Ultra' },
  { kind: 'photo', x: -27, y: 20, speed: 0.8, width: 250, height: 170, image: `${LIFESTYLE_CDN}/07bb0b4b98b3472387094f62ed418e87.jpg`, alt: 'Runner in headphones wearing Aero Fit Music' },
  { kind: 'photo', x: -6, y: -36, speed: 1.4, width: 150, height: 112, image: `${LIFESTYLE_CDN}/3543f8cd7d9d41538a82a53b258a38b1.jpg`, alt: 'Aero Fit Lite on morning linen' },
  { kind: 'product', x: 30, y: -25, speed: 1, width: 180, height: 180, image: PRODUCTS.pro.image },
  { kind: 'photo', x: 34, y: 18, speed: 0.7, width: 240, height: 160, image: `${LIFESTYLE_CDN}/7a47796ecb4f4ff7a78dc7db5db4e0e9.jpg`, alt: 'Aero Fit Smart on a stone block' },
  { kind: 'photo', x: 9, y: 36, speed: 1.1, width: 190, height: 130, image: `${LIFESTYLE_CDN}/1554a09252854047951ad166e87cafc5.jpg`, alt: 'Aero Fit Ultra on a mossy summit rock' },
  { kind: 'stat', x: -16, y: 33, speed: 1.6, width: 150, height: 64, label: 'HRV', value: '64 ms' },
  { kind: 'stat', x: 19, y: -38, speed: 1.3, width: 160, height: 64, label: 'Resting HR', value: '52 bpm' },
]

export const METRICS: Metric[] = [
  {
    id: 'sleep',
    icon: IconMoonStars,
    label: 'Sleep Performance',
    value: '86',
    unit: '%',
    sources: ['Sleep stages', 'Skin temperature', 'Breathing rate'],
    image: `${ASSET_CDN}/989e11cd96844ee89265373e9d45e84c.jpg`,
    imageAlt: 'Woman resting with her Aero Fit Lite',
    imagePosition: 'object-[75%_center]',
    readout: {
      kind: 'bars',
      bars: [
        { level: 40, tone: 'chip' },
        { level: 70, tone: 'ink' },
        { level: 90, tone: 'ink' },
        { level: 55, tone: 'chip' },
        { level: 80, tone: 'ink' },
        { level: 35, tone: 'chip' },
        { level: 65, tone: 'ink' },
        { level: 95, tone: 'accent' },
        { level: 50, tone: 'chip' },
        { level: 75, tone: 'ink' },
      ],
    },
  },
  {
    id: 'recovery',
    icon: IconBolt,
    label: 'Recovery',
    value: '82',
    unit: '%',
    sources: ['Heart rate variability', 'Resting heart rate', 'Sleep'],
    image: `${LIFESTYLE_CDN}/87d408f175064ec88d083cb4a3861585.jpg`,
    imageAlt: 'Woman with morning coffee wearing her Aero Fit Smart',
    imagePosition: 'object-[75%_center]',
    readout: { kind: 'progress', level: 82, verdict: 'Ready to push' },
  },
  {
    id: 'strain',
    icon: IconFlame,
    label: 'Strain',
    readoutLabel: 'Strain · 0–21',
    value: '14.2',
    sources: ['Heart rate zones', 'Workout types', 'Steps'],
    image: `${LIFESTYLE_CDN}/356b3e3c8d704bf4887b81203fda5357.jpg`,
    imageAlt: 'Runner wearing Aero Fit Pro in the blocks on a track',
    imagePosition: 'object-[center_40%]',
    readout: { kind: 'segments', segments: ['ink', 'ink', 'ink', 'accent', 'chip'], caption: 'Target today: 13–15' },
  },
  {
    id: 'heart',
    icon: IconHeartbeat,
    label: 'Heart health',
    readoutLabel: 'Resting heart rate',
    value: '52',
    unit: 'bpm',
    sources: ['Resting HR', 'ECG', 'Blood pressure'],
    image: `${LIFESTYLE_CDN}/b676a18a466145849599dd16012925dc.jpg`,
    imageAlt: 'Athlete checking her pulse on her Aero Fit Pro',
    imagePosition: 'object-[70%_center]',
    readout: { kind: 'trend', points: '0,28 20,26 40,30 60,22 80,24 100,18 120,20 140,14 160,16 180,12 200,13' },
  },
]

export const DAY_MOMENTS: DayMoment[] = [
  {
    title: 'Wake to a plan',
    description: 'Your Recovery score is waiting, with a strain target sized to how well you slept.',
    image: `${ASSET_CDN}/2dabe16266d04995a3144d175002d70b.jpg`,
    imageAlt: 'Woman checking her morning Recovery score in bed',
  },
  {
    title: 'Steady through the day',
    description: 'Strain builds quietly in the background. A nudge arrives if you have been still too long.',
    image: `${ASSET_CDN}/86a131a0d4bc45ed8390ea519e3dfb4e.jpg`,
    imageAlt: 'Man stretching away from his desk at midday',
  },
  {
    title: 'Train with feedback',
    description: 'Live heart rate zones and GPS on your wrist, then a breakdown of what the session cost you.',
    image: `${ASSET_CDN}/6c37160e3d2e460fbd5f3cd60e3cf18e.jpg`,
    imageAlt: 'Runner checking her watch on an evening coastal run',
  },
  {
    title: 'Wind down on time',
    description: 'A bedtime suggestion based on tomorrow’s plan, so your sleep matches the day ahead.',
    image: `${ASSET_CDN}/3c387915ade44e58919ec9a131736683.jpg`,
    imageAlt: 'Man reading in bed under a warm lamp before sleep',
  },
]

export const BAND_SHOWCASES: BandShowcase[] = [
  {
    productId: 'lite',
    theme: 'slate',
    photo: `${LIFESTYLE_CDN}/3543f8cd7d9d41538a82a53b258a38b1.jpg`,
    photoAlt: 'Aero Fit Lite on morning linen sheets',
    statement:
      'Our lightest band. A screenless tracker for sleep, steps and daily recovery that you will forget you are wearing.',
    highlights: [
      { icon: IconBattery4, title: '5 days of battery', description: 'Charge once on the weekend and again mid-week.' },
      { icon: IconMoonStars, title: 'Sleep stages and Sleep Performance', description: 'The same sleep scoring as every other band.' },
      { icon: IconDroplet, title: 'Water resistant to 50 m', description: 'Wear it in the shower, the pool and the rain.' },
    ],
    ctaLabel: 'Add to cart',
  },
  {
    productId: 'pro',
    theme: 'olive',
    photo: `${LIFESTYLE_CDN}/356b3e3c8d704bf4887b81203fda5357.jpg`,
    photoAlt: 'Runner wearing Aero Fit Pro on a track',
    statement: 'Built-in GPS and ECG for structured training without your phone.',
    highlights: [
      { icon: IconMapPin, title: 'Built-in GPS', description: 'Leave the phone at home and still get pace and route.' },
      { icon: IconHeartRateMonitor, title: 'ECG with Heart Screener', description: 'Plus Blood Pressure Insights in the app.' },
      { icon: IconBattery4, title: '10 days of battery', description: 'A full training week and then some.' },
    ],
    ctaLabel: 'Add to cart',
  },
  {
    productId: 'ultra',
    theme: 'accent',
    photo: `${LIFESTYLE_CDN}/1554a09252854047951ad166e87cafc5.jpg`,
    photoAlt: 'Aero Fit Ultra on a mossy summit rock',
    statement: 'Titanium case, dual-band GPS and two weeks of battery for multi-day races and long training blocks.',
    highlights: [
      { icon: IconCurrentLocation, title: 'Dual-band GPS', description: 'Holds a clean track under trees and between buildings.' },
      { icon: IconDiamond, title: 'Titanium and sapphire', description: 'A titanium case and a sapphire-covered AMOLED display.' },
      { icon: IconDroplet, title: 'Water resistant to 100 m', description: 'Twice the rating of the rest of the range.' },
    ],
    ctaLabel: 'Pre-order',
  },
]
