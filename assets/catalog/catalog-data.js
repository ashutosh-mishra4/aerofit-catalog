// Generated from src/data/catalog.ts — do not edit by hand.
// Regenerate after changing the catalog data.
window.AEROFIT_CATALOG = {
  "ASSET_CDN": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f",
  "HERO_IMAGE": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f/1f026a8f11f74e0cbbfa802834c37de1.jpg",
  "SECTION_IDS": {
    "featured": "ultra",
    "lineup": "lineup",
    "compare": "compare"
  },
  "PRODUCTS": {
    "ultra": {
      "id": "ultra",
      "name": "Ultra",
      "tagline": "Titanium case, dual-band GPS and 14 days of battery for multi-day races and long training blocks.",
      "price": 399,
      "minPlan": 3,
      "image": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f/76d7a24f75bc4dbeafec4d446b539a12.jpg",
      "colors": [
        {
          "name": "Titanium",
          "hex": "#8B8A87"
        },
        {
          "name": "Black",
          "hex": "#1F1F1F"
        },
        {
          "name": "Trail",
          "hex": "#6B7B4E"
        }
      ],
      "highlight": "14-day battery, dual-band GPS",
      "keySpecs": [
        {
          "value": "14 days",
          "label": "Battery"
        },
        {
          "value": "100 m",
          "label": "Water"
        },
        {
          "value": "Dual-band",
          "label": "GPS"
        }
      ],
      "shipNote": "Ships Nov 4"
    },
    "pro": {
      "id": "pro",
      "name": "Pro",
      "tagline": "Built-in GPS and ECG for structured training without your phone.",
      "price": 299,
      "minPlan": 2,
      "image": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f/72180f80b3a64de99cbdef213dc621cd.jpg",
      "colors": [
        {
          "name": "Graphite",
          "hex": "#2E2E30"
        },
        {
          "name": "Volt",
          "hex": "#E3E86A"
        },
        {
          "name": "Stone",
          "hex": "#BDB5AC"
        }
      ],
      "highlight": "built-in GPS and ECG"
    },
    "lite": {
      "id": "lite",
      "name": "Lite",
      "tagline": "Featherweight tracking for sleep, steps and daily recovery.",
      "price": 149,
      "minPlan": 1,
      "image": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f/da32fd7c279245b5ab743623f57ddf23.jpg",
      "colors": [
        {
          "name": "Slate",
          "hex": "#5E6E7D"
        },
        {
          "name": "Black",
          "hex": "#1F1F1F"
        },
        {
          "name": "Sand",
          "hex": "#D8C8B2"
        }
      ],
      "highlight": "18 g, the lightest band"
    },
    "smart": {
      "id": "smart",
      "name": "Smart",
      "tagline": "Everyday sleep, strain and recovery on an always-on display.",
      "price": 199,
      "minPlan": 1,
      "image": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f/7754f0f6d49a4ed38f644dce2670c620.jpg",
      "colors": [
        {
          "name": "Black",
          "hex": "#1F1F1F"
        },
        {
          "name": "Mist",
          "hex": "#C8CDD2"
        },
        {
          "name": "Plum",
          "hex": "#5B2439"
        }
      ],
      "highlight": "24 g with skin temperature"
    },
    "music": {
      "id": "music",
      "name": "Music",
      "tagline": "Stores 500 songs and plays to Bluetooth headphones on the run.",
      "price": 279,
      "minPlan": 2,
      "image": "https://kombai-assets.b-cdn.net/generated_assets/f9b46c42-f591-4385-bfc2-9b6663bcd54f/46a42b1d18d34403be756d1c74222484.jpg",
      "colors": [
        {
          "name": "Black",
          "hex": "#1F1F1F"
        },
        {
          "name": "Ember",
          "hex": "#C8553D"
        },
        {
          "name": "Ice",
          "hex": "#DDE6EE"
        }
      ],
      "highlight": "4 GB of onboard music"
    }
  },
  "FEATURED_PRODUCT_ID": "ultra",
  "LINEUP_ORDER": [
    "pro",
    "lite",
    "smart",
    "music"
  ],
  "COMPARISON_ORDER": [
    "lite",
    "smart",
    "pro",
    "music",
    "ultra"
  ],
  "PLANS": {
    "1": {
      "name": "One",
      "monthly": 16,
      "yearly": 199
    },
    "2": {
      "name": "Peak",
      "monthly": 25,
      "yearly": 299
    },
    "3": {
      "name": "Life",
      "monthly": 33,
      "yearly": 399
    }
  },
  "PLAN_TIERS": [
    1,
    2,
    3
  ],
  "BAND_SIZES": [
    "S",
    "M",
    "L"
  ],
  "SIZE_RANGES": {
    "S": "130–160 mm",
    "M": "150–190 mm",
    "L": "180–220 mm"
  },
  "USE_CASES": {
    "sleep": {
      "id": "sleep",
      "label": "sleep",
      "image": "https://images.pexels.com/photos/6963181/pexels-photo-6963181.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      "alt": "Hand reaching for the bedside in morning light, photo by cottonbro studio on Pexels",
      "fit": [
        "lite",
        "smart"
      ],
      "highlightRows": [
        "sleep",
        "temp",
        "weight",
        "battery"
      ]
    },
    "training": {
      "id": "training",
      "label": "training",
      "image": "https://images.unsplash.com/photo-1630254608294-d844a0242357?auto=format&w=600&q=80&fit=crop",
      "alt": "Man training on a forest path, photo by Alex Gagareen on Unsplash",
      "fit": [
        "pro",
        "ultra"
      ],
      "highlightRows": [
        "gps",
        "modes",
        "ecg",
        "recovery"
      ]
    },
    "music": {
      "id": "music",
      "label": "music",
      "image": "https://images.pexels.com/photos/18823179/pexels-photo-18823179.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      "alt": "Woman walking with headphones, photo by Fatih Güney on Pexels",
      "fit": [
        "music",
        "pro"
      ],
      "highlightRows": [
        "storage",
        "bluetooth",
        "gps"
      ]
    },
    "endurance": {
      "id": "endurance",
      "label": "endurance",
      "image": "https://images.unsplash.com/photo-1745692607831-66df9207b8bc?auto=format&w=600&q=80&fit=crop",
      "alt": "Hiker resting on a mountain ridge, photo by Haroon Khalid on Unsplash",
      "fit": [
        "ultra",
        "pro"
      ],
      "highlightRows": [
        "battery",
        "gps",
        "water",
        "case"
      ]
    }
  },
  "USE_CASE_ORDER": [
    "sleep",
    "training",
    "music",
    "endurance"
  ],
  "SPEC_ROWS": [
    {
      "key": "battery",
      "label": "Battery life",
      "values": {
        "lite": "5 days",
        "smart": "7 days",
        "pro": "10 days",
        "music": "6 days",
        "ultra": "14 days"
      },
      "isPrimary": true
    },
    {
      "key": "gps",
      "label": "GPS",
      "values": {
        "lite": "Via phone",
        "smart": "Via phone",
        "pro": "Built-in",
        "music": "Built-in",
        "ultra": "Dual-band"
      },
      "isPrimary": true
    },
    {
      "key": "ecg",
      "label": "ECG with Heart Screener",
      "values": {
        "lite": false,
        "smart": false,
        "pro": true,
        "music": false,
        "ultra": true
      },
      "isPrimary": true
    },
    {
      "key": "storage",
      "label": "Onboard music",
      "values": {
        "lite": false,
        "smart": false,
        "pro": false,
        "music": "4 GB · ~500 songs",
        "ultra": false
      },
      "isPrimary": true
    },
    {
      "key": "case",
      "label": "Case material",
      "values": {
        "lite": "Polymer",
        "smart": "Aluminum",
        "pro": "Aluminum",
        "music": "Aluminum",
        "ultra": "Titanium"
      },
      "isPrimary": true
    },
    {
      "key": "weight",
      "label": "Weight with band",
      "values": {
        "lite": "18 g",
        "smart": "24 g",
        "pro": "27 g",
        "music": "28 g",
        "ultra": "32 g"
      },
      "isPrimary": true
    },
    {
      "key": "outright",
      "label": "Buy outright",
      "values": {
        "lite": "$149",
        "smart": "$199",
        "pro": "$299",
        "music": "$279",
        "ultra": "$399"
      },
      "isPrimary": true
    },
    {
      "key": "included",
      "label": "Included with membership",
      "values": {
        "lite": "One, Peak, Life",
        "smart": "One, Peak, Life",
        "pro": "Peak, Life",
        "music": "Peak, Life",
        "ultra": "Life only"
      },
      "isPrimary": true
    },
    {
      "key": "display",
      "label": "Display",
      "values": {
        "lite": "Mono OLED",
        "smart": "AMOLED",
        "pro": "AMOLED",
        "music": "AMOLED",
        "ultra": "AMOLED, sapphire"
      },
      "isPrimary": false
    },
    {
      "key": "water",
      "label": "Water resistance",
      "values": {
        "lite": "50 m",
        "smart": "50 m",
        "pro": "50 m",
        "music": "50 m",
        "ultra": "100 m"
      },
      "isPrimary": false
    },
    {
      "key": "sleep",
      "label": "Sleep stages & Sleep Performance",
      "values": {
        "lite": true,
        "smart": true,
        "pro": true,
        "music": true,
        "ultra": true
      },
      "isPrimary": false
    },
    {
      "key": "recovery",
      "label": "Recovery & Strain scores",
      "values": {
        "lite": true,
        "smart": true,
        "pro": true,
        "music": true,
        "ultra": true
      },
      "isPrimary": false
    },
    {
      "key": "temp",
      "label": "Skin temperature",
      "values": {
        "lite": false,
        "smart": true,
        "pro": true,
        "music": true,
        "ultra": true
      },
      "isPrimary": false
    },
    {
      "key": "bp",
      "label": "Blood Pressure Insights",
      "values": {
        "lite": false,
        "smart": false,
        "pro": true,
        "music": false,
        "ultra": true
      },
      "isPrimary": false
    },
    {
      "key": "modes",
      "label": "Workout types",
      "values": {
        "lite": "20",
        "smart": "40",
        "pro": "120",
        "music": "80",
        "ultra": "150"
      },
      "isPrimary": false
    },
    {
      "key": "bluetooth",
      "label": "Bluetooth headphones",
      "values": {
        "lite": false,
        "smart": false,
        "pro": false,
        "music": true,
        "ultra": false
      },
      "isPrimary": false
    }
  ]
};
