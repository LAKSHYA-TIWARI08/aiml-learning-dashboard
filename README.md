# AI/ML Learning Dashboard 

### 🚀 Future-Proof Roadmap · 18 Months · 2025 Edition

A premium Notion-style **AI/ML learning dashboard** built with React. Track progress phase-by-phase across **509 hours** and **21 core topics**, access **80+ free resources**, stay on the 18-month roadmap to top AI/ML roles.

**Roadmap Stats:**
| Phases | Topics | Total Hours | Emerging Fields | Platforms |
|--------|--------|-------------|-----------------|-----------|
| 4      | 21     | 509         | 8               | 11        |

---

## ⚡ Quick Start — 3 Steps

```bash
# 1. Open in VS Code (Terminal: Ctrl + `)
# 2. Install
npm install
# 3. Start dev server
npm start
```

**Auto-opens**: http://localhost:3000  
**Node.js LTS required**: [nodejs.org](https://nodejs.org)

---

## 📁 Folder Structure

```
aiml-learning-dashboard/
├── public/index.html          # HTML + Fonts
├── src/
│   ├── App.js                 # Root: routing, search/filter logic
│   ├── data/roadmap.js        # 🔥 Phases, topics, 80+ resources
│   ├── hooks/
│   │   ├── useProgress.js     # localStorage + stats
│   │   └── useTheme.js        # Dark/light persistence
│   └── components/            # 10+ components (Sidebar, StatsBar, etc.)
├── package.json
├── README.md
└── TODO.md                    # Current improvements
```

---

## ✨ Features

### 📈 Progress Tracking
- ☑ **Per-topic checkboxes** — auto-save to localStorage
- 📊 **Overall % + phase rings** (animated)
- ⏱ **Hours tracker** (509 total)
- 🔍 **Real-time search** (titles, desc, tags)
- 🧹 **Filters**: All / Completed / Not Started
- 🔄 **Reset** (with confirmation)

### 🎯 Learning Roadmap (from PDF)
| Phase | Focus | Months | Key Topics |
|-------|-------|--------|------------|
| **01 Foundations** | Python, NumPy, Pandas, Git, Prompt Eng, OpenAI API | 1–3 | 8 topics, 127h |
| **02 Core ML** | Scikit-Learn, Embeddings, RAG, SHAP, Kaggle | 4–7 | 7 topics, 150h |
| **03 Deep Learning** | PyTorch, nanoGPT, LoRA, Multimodal | 8–11 | 4 topics, 125h |
| **04 Specialization** | DSA/LeetCode, Portfolio | 12–18 | 2 topics, 75h |

### 📊 Analytics Dashboard
- Total topics: 21/21
- Hours: X/509
- Per-phase progress bars
- **Emerging Fields**: LLMs (100%), Agents (95%), etc.

### 🎨 Design & UX
- **Dark mode** (default) / light toggle
- **DM Sans + Mono** (Google Fonts)
- CSS Modules (scoped styles)
- Smooth animations (expand/collapse)
- **Fully responsive** (desktop/tablet/mobile)

---

## 🛠 Customization

### Add/Edit Topics
Edit `src/data/roadmap.js`:

```js
{
  id: 'custom-topic',
  title: 'My Topic',
  hours: 15,
  description: '...',
  resources: [
    { type: 'YouTube', label: 'Title', url: 'https://...' }
  ]
}
```

### Theme Colors (`src/index.css`)
```css
[data-theme="dark"] { --accent: #6366f1; }
[data-theme="light"] { --accent: #5b58e8; }
```

### Phase Colors (`roadmap.js`)
```js
{ id: 'phase-1', color: '#6366F1' }
```

---

## 🚀 Production & Deploy

```bash
npm run build  # Creates /build/
```

### Free Deploys
- **Vercel** (rec): `npx vercel --prod`
- **Netlify**: Drag `/build/` to [netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: Add `"homepage"` to package.json + `npx gh-pages -d build`

---

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI |
| CSS Modules | Styles |
| localStorage | State |
| DM Fonts | Typography |
| CRA | Build |

**Source**: Extracted from *Future-Proof AI/ML Roadmap PDF* + *AI/ML Resource Guide PDF*.

---

## 🤝 Contributing
1. Fork → Clone → `npm install`
2. Add topics/resources to `roadmap.js`
3. `npm test` → PR with description

Issues? [Open one](https://github.com/lakshmanan-s/aiml-learning-dashboard/issues).

## 📄 License
MIT — Free to use/fork/customize.

**⭐ Star if useful!** Built for the 2025 AI/ML job market.
