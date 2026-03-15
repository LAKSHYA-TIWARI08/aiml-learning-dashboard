# AI/ML Learning Dashboard
### Future-Proof Roadmap · 18 Months · 2025 Edition

A premium Notion-style AI/ML learning dashboard built with React. Track your progress phase by phase, access free resources, and stay on the 18-month roadmap to a top-company AI/ML role.

---

## Run in VS Code — 3 Steps

```bash
# 1. Open this folder in VS Code, then open the terminal (Ctrl + `)

# 2. Install dependencies
npm install

# 3. Start the app
npm start
```

The app opens automatically at **http://localhost:3000**

> **Node.js required.** If you don't have it: https://nodejs.org — download the LTS version and install it, then run the 3 steps above.

---

## Folder Structure

```
aiml-learning-dashboard/
│
├── public/
│   └── index.html                    ← HTML shell + Google Fonts
│
├── src/
│   ├── index.js                      ← React entry point
│   ├── index.css                     ← CSS variables (dark/light themes) + reset
│   │
│   ├── App.js                        ← Root component, routing, filter logic
│   ├── App.module.css                ← Main layout styles
│   │
│   ├── data/
│   │   └── roadmap.js                ← ALL phases, topics, resources, links (edit here)
│   │
│   ├── hooks/
│   │   ├── useProgress.js            ← localStorage progress state + stats
│   │   └── useTheme.js               ← Dark/light mode with persistence
│   │
│   └── components/
│       ├── Sidebar.js                ← Sticky left navigation
│       ├── Sidebar.module.css
│       │
│       ├── Header.js                 ← Search bar, filters, theme toggle, reset
│       ├── Header.module.css
│       │
│       ├── StatsBar.js               ← Analytics dashboard (counts, hours, rings)
│       ├── StatsBar.module.css
│       │
│       ├── PhaseSection.js           ← Phase banner + topic list + goal box
│       ├── PhaseSection.module.css
│       │
│       ├── TopicCard.js              ← Individual topic card with checkbox + expand
│       ├── TopicCard.module.css
│       │
│       ├── EmergingFields.js         ← 8 emerging fields with relevance bars
│       ├── EmergingFields.module.css
│       │
│       ├── QuickPlatforms.js         ← 11 essential free platforms grid
│       └── QuickPlatforms.module.css
│
├── package.json
└── README.md
```

---

## Features

### Learning Roadmap
| Phase | Topics | Months |
|-------|--------|--------|
| 01 — Foundations | Python, NumPy, Pandas, Matplotlib, Git, Prompt Eng., OpenAI API, AI Literacy | 1–3 |
| 02 — Core ML | Scikit-Learn, Embeddings, Vector DBs, RAG, SHAP, Gradio, Kaggle | 4–7 |
| 03 — Deep Learning | PyTorch, Transformers/nanoGPT, LoRA/QLoRA, Multimodal AI | 8–11 |
| 04 — Specialization | DSA/LeetCode, GitHub Portfolio | 12–18 |

### Progress Tracking
- ☑ Checkbox per topic — click to mark complete / incomplete
- 📊 Overall progress % with animated progress bar
- 🔵 Per-phase circular progress rings
- ⏱ Hours completed tracker (out of 509 total hours)
- 💾 Everything auto-saved in `localStorage` — persists after browser close

### Navigation & Search
- Sidebar navigation — jump to any phase instantly
- Real-time search across all topic titles, descriptions, and tags
- Filter: All / Not Started / Completed
- Reset all progress button (with confirmation)

### Analytics Dashboard
- Total topics done out of 21
- Total learning hours done out of 509
- Per-phase progress bars (4 phases)
- Emerging fields with 2025–2030 relevance %

### Design
- Dark mode by default, light mode toggle
- DM Sans + DM Mono fonts
- CSS Modules — scoped styles, no conflicts
- Smooth expand/collapse animations
- Full responsive layout (desktop → tablet → mobile)

---

## Customisation

### Add a new topic
Open `src/data/roadmap.js` and add to the relevant phase's `topics` array:

```js
{
  id: 'my-new-topic',          // must be unique
  title: 'My New Topic',
  tag: 'NEW — 2025',
  level: 'Intermediate',       // Beginner | Intermediate | Advanced
  hours: 20,
  isNew: true,                 // shows green NEW badge
  isUpgraded: false,           // shows yellow Upgraded badge
  description: 'What this topic is about and why it matters.',
  project: 'Build X that solves Y using Z.',
  resources: [
    { type: 'YouTube', label: 'Video title', url: 'https://...' },
    { type: 'Course',  label: 'Course name', url: 'https://...' },
    { type: 'Docs',    label: 'Docs title',  url: 'https://...' },
  ],
},
```

### Change theme colours
Edit the CSS variables in `src/index.css`:

```css
[data-theme="dark"] {
  --accent: #6366f1;    /* primary accent colour */
  --bg-base: #0c0c0f;   /* page background */
}
[data-theme="light"] {
  --accent: #5b58e8;
  --bg-base: #f2f1f8;
}
```

### Change a phase colour
Edit the `color` field in `src/data/roadmap.js`:

```js
{
  id: 'phase-1',
  color: '#6366F1',   // ← change this hex value
  ...
}
```

---

## Build for Production

```bash
npm run build
```

Creates a `build/` folder with optimised static files ready to deploy anywhere.

---

## Deploy (Free Options)

### Vercel — recommended, deploys in 30 seconds
```bash
npm install -g vercel
vercel
# Follow the prompts
```

### Netlify Drop
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `build/` folder into the browser
4. Live instantly with a shareable URL

### GitHub Pages
```bash
# Add to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/aiml-learning-dashboard"

npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| CSS Modules | Scoped component styles |
| CSS Variables | Dark / light theming |
| localStorage | Progress persistence |
| DM Sans + DM Mono | Typography (Google Fonts) |
| Create React App | Build tooling |

---

*Built from content extracted directly from the Future-Proof AI/ML Roadmap PDF and the AI/ML Resource Guide PDF. All 80+ resource links are real and free.*
