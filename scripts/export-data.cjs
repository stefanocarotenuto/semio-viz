/**
 * Export dataset from js/data.js to open formats in data/
 *
 * Usage: node scripts/export-data.cjs
 *
 * Generates:
 *   data/semioviz-dataset.json  — JSON-LD with semantic context
 *   data/authors.csv            — authors/traditions (UTF-8 with BOM)
 *   data/statements.csv         — statements (UTF-8 with BOM)
 *   data/connections.csv        — connections (UTF-8 with BOM)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

// Read and eval data.js to extract constants
const dataJS = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
const extract = new Function(dataJS + '\n  return { AUTHORS, FILTERS, DIAGRAMS, S, CONNECTIONS };');
const { AUTHORS, FILTERS, DIAGRAMS, S, CONNECTIONS } = extract();

const BOM = '\uFEFF';

// === Helpers ===
function csvEscape(str) {
  if (!str) return '';
  const s = str.replace(/<[^>]+>/g, '').replace(/"/g, '""');
  return `"${s}"`;
}

// === JSON-LD Export ===
const jsonLD = {
  "@context": {
    "@vocab": "https://schema.org/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "cito": "http://purl.org/spar/cito/",
    "dcterms": "http://purl.org/dc/terms/",
    "wikidata": "http://www.wikidata.org/entity/"
  },
  "@type": "Dataset",
  "name": "SemioViz — Fondamenti della semiotica",
  "description": "Dataset strutturato sulla storia e i concetti fondamentali della semiotica. 56 tesi sintetiche, 90+ connessioni, 13 diagrammi, 5 tradizioni semiotiche. Dal modello ristretto (equivalenza) al modello allargato (inferenza).",
  "url": "https://stefanocarotenuto.github.io/semio-viz/",
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "version": "1.0.0",
  "datePublished": "2026-03-21",
  "inLanguage": ["it", "en"],
  "creator": {
    "@type": "Person",
    "name": "Stefano Carotenuto",
    "affiliation": {
      "@type": "Organization",
      "name": "CNR-ISMED",
      "url": "https://www.ismed.cnr.it/"
    }
  },
  "isBasedOn": {
    "@type": "Course",
    "name": "Teoria e modelli della semiotica",
    "provider": { "@type": "Organization", "name": "Università di Bologna" },
    "instructor": { "@type": "Person", "name": "Claudio Paolucci" }
  },
  "keywords": [
    "semiotics", "semiotica", "Saussure", "Peirce", "Hjelmslev", "Eco",
    "sign theory", "data visualization", "digital humanities", "open data"
  ],
  "authors": AUTHORS.map(a => ({
    "@type": "Thing",
    "identifier": a.id,
    "name": a.name,
    "description": a.sub,
    "temporalCoverage": a.years,
    "color": a.color
  })),
  "filters": FILTERS.filter(f => f.id !== "all").map(f => ({
    "@type": "skos:Concept",
    "identifier": f.id,
    "skos:prefLabel": f.label
  })),
  "statements": S.map(s => ({
    "@type": "CreativeWork",
    "identifier": s.id,
    "author": s.a,
    "name": s.tag,
    "text": s.text,
    "description": s.detail.replace(/<[^>]+>/g, ''),
    "keywords": s.f,
    "hasDiagram": s.diagram || null
  })),
  "connections": CONNECTIONS.map(c => ({
    "@type": c.ty === "agree" ? "cito:agreesWith" : "cito:disputes",
    "source": c.f,
    "target": c.t,
    "relationType": c.ty
  }))
};

fs.writeFileSync(
  path.join(DATA_DIR, 'semioviz-dataset.json'),
  JSON.stringify(jsonLD, null, 2),
  'utf8'
);
console.log('  data/semioviz-dataset.json');

// === CSV: Authors ===
const authorsCSV = BOM + [
  'id,name,subtitle,years,color',
  ...AUTHORS.map(a =>
    `${a.id},"${a.name}","${a.sub}","${a.years}",${a.color}`
  )
].join('\n');

fs.writeFileSync(path.join(DATA_DIR, 'authors.csv'), authorsCSV, 'utf8');
console.log('  data/authors.csv');

// === CSV: Statements ===
const statementsCSV = BOM + [
  'id,author,tag,text,detail,filters,has_diagram',
  ...S.map(s =>
    [
      s.id,
      s.a,
      csvEscape(s.tag),
      csvEscape(s.text),
      csvEscape(s.detail),
      csvEscape(s.f.join('; ')),
      s.diagram || ''
    ].join(',')
  )
].join('\n');

fs.writeFileSync(path.join(DATA_DIR, 'statements.csv'), statementsCSV, 'utf8');
console.log('  data/statements.csv');

// === CSV: Connections ===
const connectionsCSV = BOM + [
  'source,target,type',
  ...CONNECTIONS.map(c => `${c.f},${c.t},${c.ty}`)
].join('\n');

fs.writeFileSync(path.join(DATA_DIR, 'connections.csv'), connectionsCSV, 'utf8');
console.log('  data/connections.csv');

console.log('\nDone.');
