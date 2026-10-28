import type {
  BandSize,
  Plan,
  PlanTier,
  Product,
  ProductId,
  SpecRow,
  SpecValue,
  UseCase,
  UseCaseId,
} from '../types/catalog'

const CDN = 'https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f'
export const ASSET_CDN = CDN

export const HERO_IMAGE = `${CDN}/1f026a8f11f74e0cbbfa802834c37de1.jpg`

export const SECTION_IDS = {
  featured: 'ultra',
  lineup: 'lineup',
  compare: 'compare',
} as const

export const PRODUCTS: Record<ProductId, Product> = {
  ultra: {
    id: 'ultra',
    name: 'Ultra',
    tagline: 'Titanium case, dual-band GPS and 14 days of battery for multi-day races and long training blocks.',
    price: 399,
    minPlan: 3,
    image: `${CDN}/76d7a24f75bc4dbeafec4d446b539a12.jpg`,
    colors: [
      { name: 'Titanium', hex: '#8B8A87' },
      { name: 'Black', hex: '#1F1F1F' },
      { name: 'Trail', hex: '#6B7B4E' },
    ],
    highlight: '14-day battery, dual-band GPS',
    keySpecs: [
      { value: '14 days', label: 'Battery' },
      { value: '100 m', label: 'Water' },
      { value: 'Dual-band', label: 'GPS' },
    ],
    shipNote: 'Ships Nov 4',
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    tagline: 'Built-in GPS and ECG for structured training without your phone.',
    price: 299,
    minPlan: 2,
    image: `${CDN}/72180f80b3a64de99cbdef213dc621cd.jpg`,
    colors: [
      { name: 'Graphite', hex: '#2E2E30' },
      { name: 'Volt', hex: '#E3E86A' },
      { name: 'Stone', hex: '#BDB5AC' },
    ],
    highlight: 'built-in GPS and ECG',
  },
  lite: {
    id: 'lite',
    name: 'Lite',
    tagline: 'Featherweight tracking for sleep, steps and daily recovery.',
    price: 149,
    minPlan: 1,
    image: `${CDN}/da32fd7c279245b5ab743623f57ddf23.jpg`,
    colors: [
      { name: 'Slate', hex: '#5E6E7D' },
      { name: 'Black', hex: '#1F1F1F' },
      { name: 'Sand', hex: '#D8C8B2' },
    ],
    highlight: '18 g, the lightest band',
  },
  smart: {
    id: 'smart',
    name: 'Smart',
    tagline: 'Everyday sleep, strain and recovery on an always-on display.',
    price: 199,
    minPlan: 1,
    image: `${CDN}/7754f0f6d49a4ed38f644dce2670c620.jpg`,
    colors: [
      { name: 'Black', hex: '#1F1F1F' },
      { name: 'Mist', hex: '#C8CDD2' },
      { name: 'Plum', hex: '#5B2439' },
    ],
    highlight: '24 g with skin temperature',
  },
  music: {
    id: 'music',
    name: 'Music',
    tagline: 'Stores 500 songs and plays to Bluetooth headphones on the run.',
    price: 279,
    minPlan: 2,
    image: `${CDN}/46a42b1d18d34403be756d1c74222484.jpg`,
    colors: [
      { name: 'Black', hex: '#1F1F1F' },
      { name: 'Ember', hex: '#C8553D' },
      { name: 'Ice', hex: '#DDE6EE' },
    ],
    highlight: '4 GB of onboard music',
  },
}

export const FEATURED_PRODUCT_ID: ProductId = 'ultra'
/** Cards rendered after the featured product in the lineup grid. */
export const LINEUP_ORDER: ProductId[] = ['pro', 'lite', 'smart', 'music']
/** Column order in the comparison table. */
export const COMPARISON_ORDER: ProductId[] = ['lite', 'smart', 'pro', 'music', 'ultra']

export const PLANS: Record<PlanTier, Plan> = {
  1: { name: 'One', monthly: 16, yearly: 199 },
  2: { name: 'Peak', monthly: 25, yearly: 299 },
  3: { name: 'Life', monthly: 33, yearly: 399 },
}
export const PLAN_TIERS: PlanTier[] = [1, 2, 3]

export const BAND_SIZES: BandSize[] = ['S', 'M', 'L']
export const SIZE_RANGES: Record<BandSize, string> = {
  S: '130–160 mm',
  M: '150–190 mm',
  L: '180–220 mm',
}

export const USE_CASES: Record<UseCaseId, UseCase> = {
  sleep: {
    id: 'sleep',
    label: 'sleep',
    image: 'https://images.pexels.com/photos/6963181/pexels-photo-6963181.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Hand reaching for the bedside in morning light, photo by cottonbro studio on Pexels',
    fit: ['lite', 'smart'],
    highlightRows: ['sleep', 'temp', 'weight', 'battery'],
  },
  training: {
    id: 'training',
    label: 'training',
    image: 'https://images.unsplash.com/photo-1630254608294-d844a0242357?auto=format&w=600&q=80&fit=crop',
    alt: 'Man training on a forest path, photo by Alex Gagareen on Unsplash',
    fit: ['pro', 'ultra'],
    highlightRows: ['gps', 'modes', 'ecg', 'recovery'],
  },
  music: {
    id: 'music',
    label: 'music',
    image: 'https://images.pexels.com/photos/18823179/pexels-photo-18823179.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Woman walking with headphones, photo by Fatih Güney on Pexels',
    fit: ['music', 'pro'],
    highlightRows: ['storage', 'bluetooth', 'gps'],
  },
  endurance: {
    id: 'endurance',
    label: 'endurance',
    image: 'https://images.unsplash.com/photo-1745692607831-66df9207b8bc?auto=format&w=600&q=80&fit=crop',
    alt: 'Hiker resting on a mountain ridge, photo by Haroon Khalid on Unsplash',
    fit: ['ultra', 'pro'],
    highlightRows: ['battery', 'gps', 'water', 'case'],
  },
}
export const USE_CASE_ORDER: UseCaseId[] = ['sleep', 'training', 'music', 'endurance']

/** Values in comparison order: lite, smart, pro, music, ultra. */
const byBand = (
  lite: SpecValue,
  smart: SpecValue,
  pro: SpecValue,
  music: SpecValue,
  ultra: SpecValue,
): Record<ProductId, SpecValue> => ({ lite, smart, pro, music, ultra })

export const SPEC_ROWS: SpecRow[] = [
  { key: 'battery', label: 'Battery life', values: byBand('5 days', '7 days', '10 days', '6 days', '14 days'), isPrimary: true },
  { key: 'gps', label: 'GPS', values: byBand('Via phone', 'Via phone', 'Built-in', 'Built-in', 'Dual-band'), isPrimary: true },
  { key: 'ecg', label: 'ECG with Heart Screener', values: byBand(false, false, true, false, true), isPrimary: true },
  { key: 'storage', label: 'Onboard music', values: byBand(false, false, false, '4 GB · ~500 songs', false), isPrimary: true },
  { key: 'case', label: 'Case material', values: byBand('Polymer', 'Aluminum', 'Aluminum', 'Aluminum', 'Titanium'), isPrimary: true },
  { key: 'weight', label: 'Weight with band', values: byBand('18 g', '24 g', '27 g', '28 g', '32 g'), isPrimary: true },
  {
    key: 'outright',
    label: 'Buy outright',
    values: byBand(
      `$${PRODUCTS.lite.price}`,
      `$${PRODUCTS.smart.price}`,
      `$${PRODUCTS.pro.price}`,
      `$${PRODUCTS.music.price}`,
      `$${PRODUCTS.ultra.price}`,
    ),
    isPrimary: true,
  },
  { key: 'included', label: 'Included with membership', values: byBand('One, Peak, Life', 'One, Peak, Life', 'Peak, Life', 'Peak, Life', 'Life only'), isPrimary: true },
  { key: 'display', label: 'Display', values: byBand('Mono OLED', 'AMOLED', 'AMOLED', 'AMOLED', 'AMOLED, sapphire'), isPrimary: false },
  { key: 'water', label: 'Water resistance', values: byBand('50 m', '50 m', '50 m', '50 m', '100 m'), isPrimary: false },
  { key: 'sleep', label: 'Sleep stages & Sleep Performance', values: byBand(true, true, true, true, true), isPrimary: false },
  { key: 'recovery', label: 'Recovery & Strain scores', values: byBand(true, true, true, true, true), isPrimary: false },
  { key: 'temp', label: 'Skin temperature', values: byBand(false, true, true, true, true), isPrimary: false },
  { key: 'bp', label: 'Blood Pressure Insights', values: byBand(false, false, true, false, true), isPrimary: false },
  { key: 'modes', label: 'Workout types', values: byBand('20', '40', '120', '80', '150'), isPrimary: false },
  { key: 'bluetooth', label: 'Bluetooth headphones', values: byBand(false, false, false, true, false), isPrimary: false },
]
