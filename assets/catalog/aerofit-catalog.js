// Shared product data + illustrated band renderer for the Aero Fit catalog variations.
window.AEROFIT = (function () {
  const products = [
    {
      id: 'lite', name: 'Aero Fit Lite', short: 'Lite', price: 149, tag: 'Everyday essentials',
      blurb: 'A screenless, featherweight band for sleep, steps and recovery — wear it and forget it.',
      goals: ['sleep', 'everyday'], battery: 7, weight: '18 g',
      highlights: ['Sleep & recovery score', '7-day battery', 'Screenless, 18 g'],
      specs: { display: false, gps: 'Phone', music: false, ecg: false, spo2: true, temp: false, water: '5 ATM', material: 'Polymer' },
      colors: [['Sand', '#E9DCCF'], ['Onyx', '#2A2224'], ['Sage', '#B9C7B0']],
      art: { strap: '#E9DCCF', pod: '#F6EFE8', screen: false },
    },
    {
      id: 'smart', name: 'Aero Fit Smart', short: 'Smart', price: 229, tag: 'Most popular',
      blurb: 'An always-on AMOLED display with live Strain, Recovery and coaching nudges on your wrist.',
      goals: ['everyday', 'training'], battery: 10, weight: '26 g',
      highlights: ['AMOLED always-on display', 'Live Strain coaching', '10-day battery'],
      specs: { display: 'AMOLED', gps: 'Connected', music: false, ecg: false, spo2: true, temp: true, water: '5 ATM', material: 'Aluminium' },
      colors: [['Blush', '#F2C9C2'], ['Onyx', '#2A2224'], ['Lemon', '#F3EE85']],
      art: { strap: '#F2C9C2', pod: '#2A0B14', screen: 'strain' },
    },
    {
      id: 'music', name: 'Aero Fit Music', short: 'Music', price: 279, tag: 'Phone-free runs',
      blurb: 'Store 600 songs and podcasts, pair your earbuds and leave the phone at home.',
      goals: ['training', 'music'], battery: 8, weight: '29 g',
      highlights: ['4 GB · 600+ songs', 'Bluetooth earbuds', 'Built-in GPS'],
      specs: { display: 'AMOLED', gps: 'Built-in', music: true, ecg: false, spo2: true, temp: true, water: '5 ATM', material: 'Aluminium' },
      colors: [['Lilac', '#D9CBE6'], ['Onyx', '#2A2224'], ['Coral', '#F4A99A']],
      art: { strap: '#D9CBE6', pod: '#2A0B14', screen: 'music' },
    },
    {
      id: 'pro', name: 'Aero Fit Pro', short: 'Pro', price: 349, tag: 'For serious training',
      blurb: 'Medical-grade ECG, multi-sport GPS and Heart Screener for athletes who train with intent.',
      goals: ['training', 'heart'], battery: 14, weight: '32 g',
      highlights: ['Medical-grade ECG', 'Multi-sport GPS', '14-day battery'],
      specs: { display: 'AMOLED', gps: 'Built-in', music: true, ecg: true, spo2: true, temp: true, water: '10 ATM', material: 'Stainless steel' },
      colors: [['Forest', '#4F6B5A'], ['Onyx', '#2A2224'], ['Clay', '#C98D6E']],
      art: { strap: '#4F6B5A', pod: '#1C0A10', screen: 'heart' },
    },
    {
      id: 'ultra', name: 'Aero Fit Ultra', short: 'Ultra', price: 499, tag: 'Built for the extreme',
      blurb: 'Titanium and sapphire, dual-band GPS and 21 days of battery for ultras, peaks and open water.',
      goals: ['training', 'heart', 'adventure'], battery: 21, weight: '41 g',
      highlights: ['Titanium + sapphire', 'Dual-band GPS', '21-day battery'],
      specs: { display: 'Sapphire AMOLED', gps: 'Dual-band', music: true, ecg: true, spo2: true, temp: true, water: '10 ATM + dive', material: 'Titanium' },
      colors: [['Ember', '#E5703F'], ['Titanium', '#8E8A86'], ['Onyx', '#2A2224']],
      art: { strap: '#E5703F', pod: '#1C0A10', screen: 'ultra', bezel: '#B7B1AB' },
    },
  ];

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = (v) => Math.max(0, Math.min(255, v + amt));
    const r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  let uid = 0;
  // Illustrated band, viewBox 200x320. opts.strap overrides the strap colour (swatch picker).
  function band(p, opts = {}) {
    const a = p.art, strap = opts.strap || a.strap, id = 'b' + (uid++);
    const dark = shade(strap, -28), light = shade(strap, 18);
    const bezel = a.bezel || shade(a.pod, a.screen ? 40 : -18);
    let face = '';
    if (!a.screen) {
      face = `<circle cx="100" cy="160" r="22" fill="none" stroke="${shade(a.pod, -30)}" stroke-width="2"/>
        <path d="M88 166 L100 148 L112 166" fill="none" stroke="${shade(a.pod, -40)}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="100" cy="196" r="2.5" fill="#2BB673"/>`;
    } else {
      const glyphs = {
        strain: `<text x="100" y="152" text-anchor="middle" font-family="Inter" font-size="9" fill="#BFB2B6">STRAIN</text>
          <text x="100" y="178" text-anchor="middle" font-family="Source Serif 4" font-size="28" fill="#F8F38A">14.2</text>
          <rect x="74" y="188" width="52" height="4" rx="2" fill="#45172A"/><rect x="74" y="188" width="36" height="4" rx="2" fill="#F8F38A"/>`,
        music: `<path d="M92 168 V146 L114 141 V163" fill="none" stroke="#F8F38A" stroke-width="3" stroke-linecap="round"/>
          <circle cx="88" cy="169" r="5" fill="#F8F38A"/><circle cx="110" cy="164" r="5" fill="#F8F38A"/>
          <rect x="76" y="184" width="48" height="3" rx="1.5" fill="#45172A"/><rect x="76" y="184" width="20" height="3" rx="1.5" fill="#D9CBE6"/>`,
        heart: `<polyline points="72,166 84,166 90,152 98,182 104,160 110,166 128,166" fill="none" stroke="#EF6A84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="100" y="196" text-anchor="middle" font-family="Inter" font-size="10" fill="#BFB2B6">62 bpm</text>`,
        ultra: `<circle cx="100" cy="164" r="26" fill="none" stroke="#45172A" stroke-width="5"/>
          <path d="M100 138 A26 26 0 1 1 76 174" fill="none" stroke="#E5703F" stroke-width="5" stroke-linecap="round"/>
          <text x="100" y="170" text-anchor="middle" font-family="Source Serif 4" font-size="18" fill="#fff">87</text>`,
      };
      face = `<rect x="64" y="122" width="72" height="80" rx="18" fill="#120408"/>${glyphs[a.screen]}`;
    }
    const ridges = [18, 36, 54, 72, 90].map((y) => `<rect x="70" y="${y}" width="60" height="3" rx="1.5" fill="${dark}" opacity=".35"/>`).join('')
      + [230, 248, 266, 284, 302].map((y) => `<rect x="70" y="${y}" width="60" height="3" rx="1.5" fill="${dark}" opacity=".35"/>`).join('');
    return `<svg viewBox="0 0 200 320" class="${opts.cls || 'w-full h-full'}" role="img" aria-label="${p.name} illustration">
      <defs>
        <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="${dark}"/><stop offset=".45" stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></linearGradient>
        <linearGradient id="${id}p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(a.pod, 22)}"/><stop offset="1" stop-color="${shade(a.pod, -12)}"/></linearGradient>
      </defs>
      <rect x="64" y="0" width="72" height="140" rx="22" fill="url(#${id}s)"/>
      <rect x="64" y="180" width="72" height="140" rx="22" fill="url(#${id}s)"/>
      ${ridges}
      <rect x="44" y="100" width="112" height="124" rx="34" fill="${bezel}"/>
      <rect x="50" y="106" width="100" height="112" rx="30" fill="url(#${id}p)"/>
      ${a.bezel ? `<rect x="156" y="140" width="6" height="22" rx="3" fill="${bezel}"/><rect x="156" y="168" width="6" height="12" rx="3" fill="${a.strap}"/>` : `<rect x="156" y="150" width="4" height="18" rx="2" fill="${bezel}"/>`}
      ${face}
    </svg>`;
  }

  return { products, band, byId: (id) => products.find((p) => p.id === id) };
})();
