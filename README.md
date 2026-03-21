# SemioViz — Summarized & Visualized

**Foundations of Semiotics: From Equivalence to Inference**
**Fondamenti della semiotica — Dall'equivalenza all'inferenza**

> Interactive map of the key concepts from the course **Theory and Models of Semiotics** (Prof. Claudio Paolucci, University of Bologna).
> Inspired by [History of Philosophy — Summarized & Visualized](https://www.denizcemonduygu.com/philo/) by Deniz Cem Önduygu.

## What is it

A visualization that presents the core statements of **five semiotic traditions** with colored connection lines between them:

- **Green line** — agreement, development, continuity
- **Red dashed line** — critique, opposition, correction

### Authors

| Column | Author | Main work |
|--------|--------|-----------|
| Precursors | Hippocrates, Aristotle, Stoics, Augustine | — |
| Saussure | Ferdinand de Saussure | *Course in General Linguistics* (1916) |
| Peirce | Charles S. Peirce | Anti-Cartesian essays (1868) · Pragmatist essays (1877–78) |
| Hjelmslev | Louis Hjelmslev | *Prolegomena to a Theory of Language* (1943) |
| Eco | Umberto Eco | *Semiotics and the Philosophy of Language* (1984) |

### Central thread

The passage from the **restricted model** of the sign (equivalence: signifier ↔ signified) to the **enlarged model** (inference: the sign as starting point for an open interpretive process), as proposed by Paolucci.

## How it works

### Mobile (< 768px)
- **Author tabs** at the top: tap to switch between authors
- **Vertical card list** with full text and colored tag
- **Tap a card** → bottom sheet opens with explanation, diagrams, examples
- **Connection chips** in the sheet: tap to navigate to the linked card (even in another author)

### Desktop (≥ 768px)
- **All columns visible** side by side with horizontal scroll
- **Animated SVG lines** between connected cards when one is selected (draw-in animation)
- **Bottom sheet** with backdrop blur for details; click outside or press Esc to close
- **"Guida e info"** button in topbar opens a panel with legend, instructions and references

### Features
- **Light/dark theme** toggle (light default, WCAG 2.2 AA compliant)
- **Italian/English** full translation toggle
- **Search** by keyword across all statements
- **Integrated guide panel** with visual legend (connection colors, diagram icon), references, and credits
- **Keyboard navigation** — Tab through cards, Enter/Space to select, Esc to close, focus management between sheet and cards
- **Card entrance animations** on first load with staggered reveal (respects `prefers-reduced-motion`)
- **Diagram indicator** — cards containing SVG diagrams show a small icon in the tag

## Contents

- **~56 statements** with extended explanations
- **~90 connections** of agreement or critique
- **13 SVG diagrams** inline: dyadic sign, sheet-of-paper metaphor, value (mouton/sheep), chess analogy, syntagmatic/associative axes, Peirce's triad, Immediate/Dynamic Object, quadripartition, form of content (colours), commutation, denotation/connotation, icon/index/symbol, dictionary vs. encyclopedia, Stoic conditional
- **Didactic examples** in descriptions
- **Full English translation** of all content and UI

## Project structure

```
semio-viz/
├── index.html                # HTML shell (SEO, Schema.org JSON-LD)
├── css/
│   ├── fonts.css             # @font-face declarations (source)
│   ├── fonts.min.css         # Minified (production)
│   ├── style.css             # Stylesheet, WCAG 2.2 AA (source)
│   └── style.min.css         # Minified (production)
├── fonts/                    # Self-hosted web fonts (woff2)
│   ├── cormorant-garamond-*.woff2
│   └── dm-sans-*.woff2
├── img/                      # Author portraits (Wikimedia Commons, WebP)
│   ├── Aristotle_Altemps_Inv8575.jpg.webp
│   ├── Ferdinand_de_Saussure_by_Jullien_Restored.webp
│   ├── Charles_Sanders_Peirce.webp
│   └── Italiaanse_schrijver_Umberto_Eco,_portret.webp
├── js/
│   ├── data.js               # Authors, statements, connections, diagrams (source)
│   ├── data.min.js           # Minified (production)
│   ├── i18n.js               # Italian + English translations (source)
│   ├── i18n.min.js           # Minified (production)
│   ├── app.js                # App logic, rendering, i18n (source)
│   └── app.min.js            # Minified (production)
├── LICENSE                   # CC BY-NC-SA 4.0
└── README.md
```

## Performance

Total payload ~362 KB uncompressed (~130 KB gzipped). No dependencies, no build step, no CDN.

- All images converted to **WebP**
- Scripts loaded with `defer` for non-blocking first paint
- Critical fonts **preloaded**
- Self-hosted fonts with `unicode-range` subsetting and `font-display: swap`

## Installation

```bash
git clone https://github.com/stefanocarotenuto/semio-viz.git
cd semio-viz
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Accessibility

- **WCAG 2.2 AA contrast** for all text on both light and dark themes
- **`prefers-reduced-motion`** — all animations and transitions disabled
- Keyboard navigation (Tab, Enter, Space, Esc) with focus management
- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<aside>`) with ARIA labels
- Non-blocking bottom sheet with click-outside-to-close and Esc hint

## SEO

- `<meta>` description and keywords (IT)
- Open Graph and Twitter Card meta tags
- Schema.org JSON-LD (`WebApplication`)
- `<link rel="canonical">`

## Privacy

This is a fully static application. It does not collect personal data, does not use cookies, and does not employ any third-party tracking or analytics services. No data is transmitted to external servers.

## Credits

- **Design and development:** [Stefano Carotenuto](https://stefanocarotenuto.it)
- **Built with:** [Claude Code](https://claude.com/claude-code) by Anthropic
- **Course:** Theory and Models of Semiotics — Prof. Claudio Paolucci, University of Bologna
- **Visual inspiration:** [History of Philosophy — Summarized & Visualized](https://www.denizcemonduygu.com/philo/) by Deniz Cem Önduygu
- **Primary sources:** Saussure, Hjelmslev, [Peirce](https://www.peirce.org/writings.html), Eco

### Image credits

Author portraits from [Wikimedia Commons](https://commons.wikimedia.org/):

| Image | License |
|-------|---------|
| Bust of Aristotle (Palazzo Altemps) | Public domain |
| Portrait of Saussure by F. Jullien | Public domain |
| Portrait of C.S. Peirce | Public domain |
| Portrait of Eco (© Rob Bogaerts / Anefo) | CC BY-SA 3.0 NL |

### Typography

- Georgia (serif) — system font
- system-ui (sans-serif) — system font

## License

This project is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — free to share and adapt for non-commercial purposes, with attribution and same license.
