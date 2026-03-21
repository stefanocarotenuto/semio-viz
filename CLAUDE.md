# CLAUDE.md — Istruzioni operative per SemioViz

## Progetto

SemioViz è un'applicazione web statica (vanilla JS, no framework, no build step) che visualizza la storia della semiotica. Licenza CC BY-NC-SA 4.0.

- **Autore:** Stefano Carotenuto (CNR-ISMED)
- **Sito:** https://stefanocarotenuto.github.io/semio-viz/
- **Lingua:** bilingue IT/EN

## Architettura dati

La **single source of truth** per i dati è `js/data.js`. Contiene:
- `AUTHORS` — 5 tradizioni/autori
- `FILTERS` — 10 categorie tematiche
- `DIAGRAMS` — 13 diagrammi SVG inline
- `S` — ~56 statements con dettagli, tag, filtri, diagrammi
- `CONNECTIONS` — ~90 connessioni (agree/disagree)

Le traduzioni EN sono in `js/i18n.js`.

## Regole operative

### Quando modifichi i dati in `js/data.js`:
1. **Rigenera i file di export** eseguendo: `node scripts/export-data.cjs`
   Questo rigenera automaticamente:
   - `data/semioviz-dataset.json` (JSON-LD completo)
   - `data/statements.csv` (con BOM UTF-8)
   - `data/connections.csv` (con BOM UTF-8)
   - `data/authors.csv` (con BOM UTF-8)
2. **Aggiorna `data/datapackage.json`** se cambia la struttura (nuovi campi, nuove risorse)
3. **Rigenera `js/data.min.js`** (versione minificata per produzione)
4. **Aggiorna le traduzioni** in `js/i18n.js` se aggiungi/modifichi testi

### Quando modifichi `js/i18n.js`:
1. Rigenera `js/i18n.min.js`
2. Aggiorna l'export JSON-LD se cambiano traduzioni degli statements

### Quando fai una nuova release:
1. Aggiorna la versione in `CITATION.cff` (campo `version` e `date-released`)
2. Aggiorna la versione in `data/datapackage.json`
3. Verifica che i metadati `schema.org/Dataset` in `index.html` siano aggiornati

### File da mantenere sincronizzati:
- `js/data.js` ↔ `js/data.min.js`
- `js/i18n.js` ↔ `js/i18n.min.js`
- `js/app.js` ↔ `js/app.min.js`
- `css/style.css` ↔ `css/style.min.css`
- `css/fonts.css` ↔ `css/fonts.min.css`
- `js/data.js` → `data/*.csv` + `data/semioviz-dataset.json`

## Stile del codice

- Vanilla JS ES6+, nessun framework
- Nessuna dipendenza esterna
- File minificati committati (no build step automatizzato)
- HTML semantico con ARIA labels
- WCAG 2.2 AA per contrasti (light e dark theme)
- Rispetta `prefers-reduced-motion`

## Note

- Le immagini degli autori sono da Wikimedia Commons (vedi README per licenze)
- Il sito non usa cookie, tracking, né servizi esterni
