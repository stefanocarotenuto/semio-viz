// ═══════════════════════════════════════════════════════════════
// SemioViz — Summarized & Visualized
// Data: Authors, Statements, Connections, Diagrams
// ═══════════════════════════════════════════════════════════════

const AUTHORS = [
  { id:"precursors", name:"Precursori", sub:"Ippocrate · Aristotele · Stoici · Agostino", years:"V a.C. – V d.C.", color:"#94a3b8", img:"img/Aristotle_Altemps_Inv8575.jpg.webp" },
  { id:"saussure", name:"Saussure", sub:"Corso di linguistica generale (1916)", years:"1857–1913", color:"#60a5fa", img:"img/Ferdinand_de_Saussure_by_Jullien_Restored.webp" },
  { id:"peirce", name:"Peirce", sub:"Saggi anti-cartesiani (1868) · pragmatisti (1877–78)", years:"1839–1914", color:"#f87171", img:"img/Charles_Sanders_Peirce.webp" },
  { id:"hjelmslev", name:"Hjelmslev", sub:"I fondamenti della teoria del linguaggio (1943)", years:"1899–1965", color:"#a78bfa", img:"" },
  { id:"eco", name:"Eco", sub:"Semiotica e filosofia del linguaggio (1984)", years:"1932–2016", color:"#34d399", img:"img/Italiaanse_schrijver_Umberto_Eco,_portret.webp" },
];

const FILTERS = [
  { id:"all", label:"Tutto" },
  { id:"segno", label:"Segno" },
  { id:"significato", label:"Significato" },
  { id:"epistemologia", label:"Epistemologia" },
  { id:"forma", label:"Forma / Struttura" },
  { id:"interpretazione", label:"Interpretazione" },
  { id:"codice", label:"Codice" },
  { id:"soggetto", label:"Soggettività" },
  { id:"pragmatismo", label:"Pragmatismo" },
  { id:"storia", label:"Ricostruzione storica" },
];

// ═══════════════════════════════════════════════════════════════
// SVG DIAGRAMS — rendered inline in detail panel
// ═══════════════════════════════════════════════════════════════

const DIAGRAMS = {

segnoDiadico: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" style="max-width:260px">
  <ellipse cx="140" cy="80" rx="120" ry="70" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <line x1="20" y1="80" x2="260" y2="80" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="140" y="55" text-anchor="middle" fill="#e8eaf0" font-size="14" font-weight="600" font-family="system-ui,sans-serif">significato</text>
  <text x="140" y="55" text-anchor="middle" fill="#e8eaf0" font-size="11" font-style="italic" dy="14">(concetto)</text>
  <text x="140" y="105" text-anchor="middle" fill="#e8eaf0" font-size="14" font-weight="600" font-family="system-ui,sans-serif">significante</text>
  <text x="140" y="105" text-anchor="middle" fill="#e8eaf0" font-size="11" font-style="italic" dy="14">(immagine acustica)</text>
  <path d="M8,30 Q2,80 8,130" fill="none" stroke="#60a5fa55" stroke-width="1.5"/>
  <path d="M272,30 Q278,80 272,130" fill="none" stroke="#60a5fa55" stroke-width="1.5"/>
</svg>`,

foglioDiCarta: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="max-width:280px">
  <rect x="40" y="10" width="220" height="100" rx="4" fill="none" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="40" y1="60" x2="260" y2="60" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="150" y="42" text-anchor="middle" fill="#a0a6b8" font-size="12" font-family="system-ui,sans-serif">significato (recto)</text>
  <text x="150" y="82" text-anchor="middle" fill="#a0a6b8" font-size="12" font-family="system-ui,sans-serif">significante (verso)</text>
  <text x="150" y="82" text-anchor="middle" fill="#a0a6b8" font-size="9" dy="13">non si può ritagliare l'uno senza l'altro</text>
  <line x1="10" y1="60" x2="30" y2="40" stroke="#f8717155" stroke-width="1.5"/>
  <line x1="10" y1="60" x2="30" y2="80" stroke="#f8717155" stroke-width="1.5"/>
  <text x="6" y="64" fill="#f87171" font-size="16">✂</text>
</svg>`,

valoreScacchi: `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
  <rect x="10" y="10" width="90" height="90" rx="3" fill="#1a1e2a" stroke="#60a5fa44" stroke-width="1"/>
  <text x="55" y="45" text-anchor="middle" fill="#60a5fa" font-size="28">♞</text>
  <text x="55" y="72" text-anchor="middle" fill="#a0a6b8" font-size="10" font-family="system-ui,sans-serif">legno</text>
  <text x="55" y="85" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="600">= valore X</text>
  <text x="155" y="55" text-anchor="middle" fill="#5c6278" font-size="20">=</text>
  <rect x="200" y="10" width="90" height="90" rx="3" fill="#1a1e2a" stroke="#60a5fa44" stroke-width="1"/>
  <text x="245" y="45" text-anchor="middle" fill="#60a5fa" font-size="28">♞</text>
  <text x="245" y="72" text-anchor="middle" fill="#a0a6b8" font-size="10" font-family="system-ui,sans-serif">avorio</text>
  <text x="245" y="85" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="600">= valore X</text>
  <text x="155" y="108" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">conta la posizione, non la materia</text>
</svg>`,

valoreMouton: `<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
  <rect x="10" y="10" width="150" height="90" rx="4" fill="#1a1e2a" stroke="#60a5fa33" stroke-width="1"/>
  <text x="85" y="32" text-anchor="middle" fill="#a0a6b8" font-size="10" font-family="system-ui,sans-serif">FRANCESE</text>
  <rect x="25" y="42" width="120" height="42" rx="3" fill="#60a5fa11" stroke="#60a5fa44" stroke-width="1"/>
  <text x="85" y="69" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="600" font-family="system-ui,sans-serif">mouton</text>
  <text x="180" y="58" text-anchor="middle" fill="#5c6278" font-size="18">≠</text>
  <rect x="200" y="10" width="150" height="90" rx="4" fill="#1a1e2a" stroke="#f8717133" stroke-width="1"/>
  <text x="275" y="32" text-anchor="middle" fill="#a0a6b8" font-size="10" font-family="system-ui,sans-serif">INGLESE</text>
  <rect x="210" y="42" width="60" height="42" rx="3" fill="#f8717111" stroke="#f8717144" stroke-width="1"/>
  <text x="240" y="69" text-anchor="middle" fill="#f87171" font-size="12" font-weight="600">sheep</text>
  <rect x="278" y="42" width="62" height="42" rx="3" fill="#f8717111" stroke="#f8717144" stroke-width="1"/>
  <text x="309" y="69" text-anchor="middle" fill="#f87171" font-size="12" font-weight="600">mutton</text>
</svg>`,

assiSaussure: `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
  <line x1="30" y1="45" x2="310" y2="45" stroke="#60a5fa" stroke-width="2" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#60a5fa"/></marker></defs>
  <text x="170" y="25" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="600" font-family="system-ui,sans-serif">ASSE SINTAGMATICO (in praesentia)</text>
  <rect x="40" y="34" width="50" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa44" stroke-width="1"/>
  <text x="65" y="49" text-anchor="middle" fill="#e8eaf0" font-size="10">in-</text>
  <rect x="98" y="34" width="60" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa44" stroke-width="1"/>
  <text x="128" y="49" text-anchor="middle" fill="#e8eaf0" font-size="10">-segn-</text>
  <rect x="166" y="34" width="70" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa44" stroke-width="1"/>
  <text x="201" y="49" text-anchor="middle" fill="#e8eaf0" font-size="10">-amento</text>
  <line x1="128" y1="70" x2="128" y2="165" stroke="#a78bfa" stroke-width="2" marker-end="url(#arr2)"/>
  <defs><marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" fill="#a78bfa"><path d="M0,0 L8,3 L0,6"/></marker></defs>
  <text x="200" y="85" fill="#a78bfa" font-size="11" font-weight="600" font-family="system-ui,sans-serif">ASSE ASSOCIATIVO</text>
  <text x="200" y="98" fill="#a78bfa" font-size="10" font-family="system-ui,sans-serif">(in absentia)</text>
  <text x="128" y="92" text-anchor="middle" fill="#a0a6b8" font-size="10">educazione</text>
  <text x="128" y="110" text-anchor="middle" fill="#a0a6b8" font-size="10">apprendimento</text>
  <text x="128" y="128" text-anchor="middle" fill="#a0a6b8" font-size="10">armamento</text>
  <text x="128" y="146" text-anchor="middle" fill="#a0a6b8" font-size="10">cambiamento</text>
  <text x="128" y="162" text-anchor="middle" fill="#5c6278" font-size="10">...</text>
</svg>`,

triadePeirce: `<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
  <line x1="170" y1="52" x2="50" y2="195" stroke="#f87171" stroke-width="1.5"/>
  <line x1="170" y1="52" x2="290" y2="195" stroke="#f87171" stroke-width="1.5"/>
  <line x1="50" y1="195" x2="290" y2="195" stroke="#f87171" stroke-width="1.5"/>
  <circle cx="170" cy="48" r="24" fill="#1a1e2a" stroke="#f87171" stroke-width="2"/>
  <text x="170" y="53" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700" font-family="system-ui,sans-serif">OGG.</text>
  <text x="170" y="14" text-anchor="middle" fill="#a0a6b8" font-size="9" font-family="system-ui,sans-serif">ciò per cui il segno sta</text>
  <circle cx="50" cy="195" r="24" fill="#1a1e2a" stroke="#f87171" stroke-width="2"/>
  <text x="50" y="200" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700" font-family="system-ui,sans-serif">REPR.</text>
  <text x="50" y="232" text-anchor="middle" fill="#a0a6b8" font-size="9" font-family="system-ui,sans-serif">veicolo segnico</text>
  <circle cx="290" cy="195" r="24" fill="#1a1e2a" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="200" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700" font-family="system-ui,sans-serif">INTERP.</text>
  <text x="290" y="232" text-anchor="middle" fill="#a0a6b8" font-size="9" font-family="system-ui,sans-serif">effetto → nuovo segno</text>
  <text x="95" y="115" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif" transform="rotate(-47,95,115)">determina</text>
  <text x="245" y="115" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif" transform="rotate(47,245,115)">genera</text>
  <text x="170" y="252" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">traduce / interpreta</text>
</svg>`,

oggettoIdDin: `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
  <text x="170" y="14" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700" font-family="system-ui,sans-serif">PEIRCE</text>
  <rect x="10" y="24" width="140" height="50" rx="5" fill="#f8717111" stroke="#f87171" stroke-width="1.5"/>
  <text x="80" y="45" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700" font-family="system-ui,sans-serif">Ogg. Dinamico</text>
  <text x="80" y="62" text-anchor="middle" fill="#a0a6b8" font-size="9" font-family="system-ui,sans-serif">la cosa-in-sé · il reale</text>
  <text x="170" y="53" text-anchor="middle" fill="#5c6278" font-size="16">→</text>
  <rect x="190" y="24" width="140" height="50" rx="5" fill="#f8717111" stroke="#f87171" stroke-width="1.5"/>
  <text x="260" y="45" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700" font-family="system-ui,sans-serif">Ogg. Immediato</text>
  <text x="260" y="62" text-anchor="middle" fill="#a0a6b8" font-size="9" font-family="system-ui,sans-serif">come il segno lo presenta</text>
  <line x1="80" y1="82" x2="80" y2="108" stroke="#5c627855" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="260" y1="82" x2="260" y2="108" stroke="#5c627855" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="170" y="100" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">≈ Hjelmslev</text>
  <text x="170" y="122" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="700" font-family="system-ui,sans-serif">HJELMSLEV</text>
  <rect x="10" y="130" width="140" height="34" rx="4" fill="#a78bfa11" stroke="#a78bfa55" stroke-width="1"/>
  <text x="80" y="152" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Materia / Continuum</text>
  <rect x="190" y="130" width="140" height="34" rx="4" fill="#a78bfa11" stroke="#a78bfa55" stroke-width="1"/>
  <text x="260" y="152" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="600" font-family="system-ui,sans-serif">Forma del contenuto</text>
</svg>`,

quadripartizione: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
  <rect x="5" y="5" width="370" height="230" rx="6" fill="none" stroke="#a78bfa33" stroke-width="1"/>
  <line x1="5" y1="44" x2="375" y2="44" stroke="#a78bfa33" stroke-width="1"/>
  <line x1="105" y1="5" x2="105" y2="235" stroke="#a78bfa33" stroke-width="1"/>
  <line x1="240" y1="44" x2="240" y2="235" stroke="#a78bfa55" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="55" y="29" text-anchor="middle" fill="#5c6278" font-size="10" font-family="system-ui,sans-serif"></text>
  <text x="172" y="29" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="700" font-family="system-ui,sans-serif">ESPRESSIONE</text>
  <text x="307" y="29" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="700" font-family="system-ui,sans-serif">CONTENUTO</text>
  <text x="55" y="82" text-anchor="middle" fill="#a0a6b8" font-size="10" font-weight="600">Materia</text>
  <text x="55" y="96" text-anchor="middle" fill="#5c6278" font-size="8" font-family="system-ui,sans-serif">(continuum amorfo)</text>
  <text x="55" y="145" text-anchor="middle" fill="#a0a6b8" font-size="10" font-weight="600">Forma</text>
  <text x="55" y="159" text-anchor="middle" fill="#5c6278" font-size="8" font-family="system-ui,sans-serif">(rete differenziale)</text>
  <text x="55" y="208" text-anchor="middle" fill="#a0a6b8" font-size="10" font-weight="600">Sostanza</text>
  <text x="55" y="222" text-anchor="middle" fill="#5c6278" font-size="8" font-family="system-ui,sans-serif">(materia formata)</text>
  <text x="172" y="86" text-anchor="middle" fill="#e8eaf0" font-size="10">continuum sonoro</text>
  <text x="172" y="150" text-anchor="middle" fill="#e8eaf0" font-size="10">fonemi (/p/,/b/,/t/...)</text>
  <text x="172" y="213" text-anchor="middle" fill="#e8eaf0" font-size="10">suoni concreti</text>
  <text x="307" y="86" text-anchor="middle" fill="#e8eaf0" font-size="10">continuum esperienza</text>
  <text x="307" y="150" text-anchor="middle" fill="#e8eaf0" font-size="10">unità di significato</text>
  <text x="307" y="213" text-anchor="middle" fill="#e8eaf0" font-size="10">concetti concreti</text>
  <line x1="105" y1="118" x2="375" y2="118" stroke="#a78bfa22" stroke-width="1"/>
  <line x1="105" y1="182" x2="375" y2="182" stroke="#a78bfa22" stroke-width="1"/>
</svg>`,

formaContenutoColori: `<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
  <defs><linearGradient id="spectrum" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#22c55e"/><stop offset="25%" stop-color="#3b82f6"/>
    <stop offset="50%" stop-color="#6366f1"/><stop offset="75%" stop-color="#8b5cf6"/>
    <stop offset="100%" stop-color="#a0522d"/>
  </linearGradient></defs>
  <rect x="10" y="10" width="340" height="20" rx="4" fill="url(#spectrum)" opacity="0.5"/>
  <text x="180" y="24" text-anchor="middle" fill="#e8eaf0" font-size="9" font-weight="600">CONTINUUM DEI COLORI (materia identica)</text>
  <text x="10" y="55" fill="#60a5fa" font-size="10" font-weight="700" font-family="system-ui,sans-serif">INGLESE:</text>
  <rect x="80" y="42" width="55" height="22" rx="3" fill="#22c55e22" stroke="#22c55e55" stroke-width="1"/>
  <text x="107" y="57" text-anchor="middle" fill="#e8eaf0" font-size="10">green</text>
  <rect x="140" y="42" width="45" height="22" rx="3" fill="#3b82f622" stroke="#3b82f655" stroke-width="1"/>
  <text x="162" y="57" text-anchor="middle" fill="#e8eaf0" font-size="10">blue</text>
  <rect x="190" y="42" width="45" height="22" rx="3" fill="#6366f122" stroke="#6366f155" stroke-width="1"/>
  <text x="212" y="57" text-anchor="middle" fill="#e8eaf0" font-size="10">gray</text>
  <rect x="240" y="42" width="55" height="22" rx="3" fill="#8b5cf622" stroke="#8b5cf655" stroke-width="1"/>
  <text x="267" y="57" text-anchor="middle" fill="#e8eaf0" font-size="10">brown</text>
  <text x="10" y="90" fill="#34d399" font-size="10" font-weight="700" font-family="system-ui,sans-serif">GALLESE:</text>
  <rect x="80" y="77" width="70" height="22" rx="3" fill="#22c55e22" stroke="#22c55e55" stroke-width="1"/>
  <text x="115" y="92" text-anchor="middle" fill="#e8eaf0" font-size="10">gwyrdd</text>
  <rect x="155" y="77" width="70" height="22" rx="3" fill="#3b82f622" stroke="#3b82f655" stroke-width="1"/>
  <text x="190" y="92" text-anchor="middle" fill="#e8eaf0" font-size="10">glas</text>
  <rect x="230" y="77" width="65" height="22" rx="3" fill="#8b5cf622" stroke="#8b5cf655" stroke-width="1"/>
  <text x="262" y="92" text-anchor="middle" fill="#e8eaf0" font-size="10">llwyd</text>
  <text x="180" y="125" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">Stessa materia cromatica → forme diverse → sostanze diverse</text>
</svg>`,

commutazione: `<svg viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg" style="max-width:320px">
  <rect x="10" y="10" width="150" height="40" rx="4" fill="#34d39911" stroke="#34d39944" stroke-width="1"/>
  <text x="85" y="27" text-anchor="middle" fill="#e8eaf0" font-size="12" font-weight="600">/p/ane → /b/ane</text>
  <text x="85" y="42" text-anchor="middle" fill="#34d399" font-size="9">cambia contenuto ✓</text>
  <text x="260" y="22" text-anchor="middle" fill="#34d399" font-size="10" font-weight="700">= INVARIANTI</text>
  <text x="260" y="38" text-anchor="middle" fill="#a0a6b8" font-size="9">(fonemi distinti)</text>
  <rect x="10" y="62" width="150" height="40" rx="4" fill="#f8717111" stroke="#f8717144" stroke-width="1"/>
  <text x="85" y="79" text-anchor="middle" fill="#e8eaf0" font-size="12" font-weight="600">/r/ moscia vs normale</text>
  <text x="85" y="94" text-anchor="middle" fill="#f87171" font-size="9">contenuto invariato ✗</text>
  <text x="260" y="74" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">= VARIANTI</text>
  <text x="260" y="90" text-anchor="middle" fill="#a0a6b8" font-size="9">(stesso fonema)</text>
</svg>`,

denotazioneConnotazione: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
  <text x="180" y="15" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="700" font-family="system-ui,sans-serif">SEMIOTICA DENOTATIVA</text>
  <rect x="30" y="25" width="300" height="60" rx="5" fill="#a78bfa08" stroke="#a78bfa44" stroke-width="1.5"/>
  <rect x="42" y="34" width="132" height="22" rx="3" fill="#a78bfa11" stroke="#a78bfa33" stroke-width="1"/>
  <text x="108" y="50" text-anchor="middle" fill="#e8eaf0" font-size="10" font-family="system-ui,sans-serif">Espr.: /destriero/</text>
  <rect x="186" y="34" width="132" height="22" rx="3" fill="#a78bfa11" stroke="#a78bfa33" stroke-width="1"/>
  <text x="252" y="50" text-anchor="middle" fill="#e8eaf0" font-size="10" font-family="system-ui,sans-serif">Cont.: «cavallo»</text>
  <text x="180" y="76" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">funzione segnica denotativa</text>
  <path d="M180,92 L180,112" stroke="#34d39966" stroke-width="1.5" marker-end="url(#arrowDC)"/>
  <defs><marker id="arrowDC" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#34d399"/></marker></defs>
  <text x="210" y="106" fill="#5c6278" font-size="8" font-family="system-ui,sans-serif">diventa espressione di…</text>
  <text x="30" y="128" fill="#34d399" font-size="10" font-weight="700" font-family="system-ui,sans-serif">SEMIOTICA CONNOTATIVA</text>
  <rect x="30" y="136" width="300" height="55" rx="5" fill="#34d39908" stroke="#34d39944" stroke-width="1.5"/>
  <rect x="42" y="144" width="132" height="22" rx="3" fill="#34d39911" stroke="#34d39933" stroke-width="1"/>
  <text x="108" y="160" text-anchor="middle" fill="#a0a6b8" font-size="9" font-family="system-ui,sans-serif">intero segno denotativo ↑</text>
  <rect x="186" y="144" width="132" height="22" rx="3" fill="#34d39911" stroke="#34d39933" stroke-width="1"/>
  <text x="252" y="160" text-anchor="middle" fill="#34d399" font-size="9" font-weight="600" font-family="system-ui,sans-serif">arcaismo, aulicità</text>
  <text x="180" y="182" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">funzione segnica connotativa</text>
</svg>`,

iconaIndiceSimb: `<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg" style="max-width:340px">
  <rect x="5" y="10" width="110" height="100" rx="5" fill="#f8717108" stroke="#f8717133" stroke-width="1"/>
  <text x="60" y="30" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700" font-family="system-ui,sans-serif">ICONA</text>
  <text x="60" y="45" text-anchor="middle" fill="#a0a6b8" font-size="9">somiglianza</text>
  <text x="60" y="65" text-anchor="middle" fill="#5c6278" font-size="9">ritratto, mappa,</text>
  <text x="60" y="78" text-anchor="middle" fill="#5c6278" font-size="9">onomatopea,</text>
  <text x="60" y="91" text-anchor="middle" fill="#5c6278" font-size="9">diagramma</text>
  <rect x="125" y="10" width="110" height="100" rx="5" fill="#f8717108" stroke="#f8717133" stroke-width="1"/>
  <text x="180" y="30" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700" font-family="system-ui,sans-serif">INDICE</text>
  <text x="180" y="45" text-anchor="middle" fill="#a0a6b8" font-size="9">connessione causale</text>
  <text x="180" y="65" text-anchor="middle" fill="#5c6278" font-size="9">fumo→fuoco,</text>
  <text x="180" y="78" text-anchor="middle" fill="#5c6278" font-size="9">banderuola→vento,</text>
  <text x="180" y="91" text-anchor="middle" fill="#5c6278" font-size="9">impronta→animale</text>
  <rect x="245" y="10" width="110" height="100" rx="5" fill="#f8717108" stroke="#f8717133" stroke-width="1"/>
  <text x="300" y="30" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700" font-family="system-ui,sans-serif">SIMBOLO</text>
  <text x="300" y="45" text-anchor="middle" fill="#a0a6b8" font-size="9">convenzione/legge</text>
  <text x="300" y="65" text-anchor="middle" fill="#5c6278" font-size="9">parole, segnali</text>
  <text x="300" y="78" text-anchor="middle" fill="#5c6278" font-size="9">stradali, monete,</text>
  <text x="300" y="91" text-anchor="middle" fill="#5c6278" font-size="9">simboli matematici</text>
</svg>`,

dizionarioEnciclopedia: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" style="max-width:360px">
  <text x="90" y="15" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700" font-family="system-ui,sans-serif">DIZIONARIO (albero)</text>
  <line x1="90" y1="30" x2="90" y2="45" stroke="#f8717155" stroke-width="1.5"/>
  <line x1="90" y1="45" x2="50" y2="68" stroke="#f8717155" stroke-width="1.5"/>
  <line x1="90" y1="45" x2="130" y2="68" stroke="#f8717155" stroke-width="1.5"/>
  <line x1="50" y1="68" x2="28" y2="92" stroke="#f8717155" stroke-width="1"/>
  <line x1="50" y1="68" x2="72" y2="92" stroke="#f8717155" stroke-width="1"/>
  <line x1="130" y1="68" x2="110" y2="92" stroke="#f8717155" stroke-width="1"/>
  <line x1="130" y1="68" x2="152" y2="92" stroke="#f8717155" stroke-width="1"/>
  <circle cx="90" cy="28" r="5" fill="#f87171"/>
  <text x="90" y="26" text-anchor="middle" fill="#f87171" font-size="8" font-family="system-ui,sans-serif" dy="-6">animale</text>
  <circle cx="50" cy="68" r="4" fill="#f87171"/>
  <circle cx="130" cy="68" r="4" fill="#f87171"/>
  <circle cx="28" cy="92" r="3" fill="#f87171"/>
  <circle cx="72" cy="92" r="3" fill="#f87171"/>
  <circle cx="110" cy="92" r="3" fill="#f87171"/>
  <circle cx="152" cy="92" r="3" fill="#f87171"/>
  <text x="90" y="118" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">genus + differentia</text>
  <text x="90" y="132" text-anchor="middle" fill="#5c6278" font-size="8" font-family="system-ui,sans-serif">chiuso, finito</text>
  <line x1="190" y1="20" x2="190" y2="140" stroke="#5c627833" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="290" y="15" text-anchor="middle" fill="#34d399" font-size="10" font-weight="700" font-family="system-ui,sans-serif">ENCICLOPEDIA (rete)</text>
  <circle cx="260" cy="45" r="5" fill="#34d399"/><circle cx="310" cy="35" r="4" fill="#34d399"/>
  <circle cx="240" cy="72" r="4" fill="#34d399"/><circle cx="285" cy="75" r="4" fill="#34d399"/>
  <circle cx="330" cy="62" r="4" fill="#34d399"/><circle cx="260" cy="100" r="4" fill="#34d399"/>
  <circle cx="310" cy="95" r="4" fill="#34d399"/><circle cx="345" cy="95" r="5" fill="#34d399"/>
  <line x1="260" y1="45" x2="310" y2="35" stroke="#34d39955" stroke-width="1"/>
  <line x1="260" y1="45" x2="240" y2="72" stroke="#34d39955" stroke-width="1"/>
  <line x1="260" y1="45" x2="285" y2="75" stroke="#34d39955" stroke-width="1"/>
  <line x1="310" y1="35" x2="330" y2="62" stroke="#34d39955" stroke-width="1"/>
  <line x1="285" y1="75" x2="330" y2="62" stroke="#34d39955" stroke-width="1"/>
  <line x1="285" y1="75" x2="260" y2="100" stroke="#34d39955" stroke-width="1"/>
  <line x1="285" y1="75" x2="310" y2="95" stroke="#34d39955" stroke-width="1"/>
  <line x1="330" y1="62" x2="345" y2="95" stroke="#34d39955" stroke-width="1"/>
  <line x1="310" y1="95" x2="345" y2="95" stroke="#34d39955" stroke-width="1"/>
  <line x1="240" y1="72" x2="260" y2="100" stroke="#34d39955" stroke-width="1"/>
  <line x1="310" y1="35" x2="285" y2="75" stroke="#34d39955" stroke-width="1"/>
  <line x1="260" y1="100" x2="310" y2="95" stroke="#34d39955" stroke-width="1"/>
  <text x="290" y="122" text-anchor="middle" fill="#5c6278" font-size="9" font-family="system-ui,sans-serif">rizomatica, aperta</text>
  <text x="290" y="136" text-anchor="middle" fill="#5c6278" font-size="8" font-family="system-ui,sans-serif">potenzialmente infinita</text>
</svg>`,

condizionaleStoico: `<svg viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg" style="max-width:300px">
  <rect x="10" y="15" width="120" height="50" rx="5" fill="#94a3b811" stroke="#94a3b844" stroke-width="1.5"/>
  <text x="70" y="35" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="600">SE fumo</text>
  <text x="70" y="52" text-anchor="middle" fill="#a0a6b8" font-size="9">(antecedente = SEGNO)</text>
  <text x="160" y="44" text-anchor="middle" fill="#5c6278" font-size="16">→</text>
  <rect x="190" y="15" width="120" height="50" rx="5" fill="#94a3b811" stroke="#94a3b844" stroke-width="1.5"/>
  <text x="250" y="35" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="600">ALLORA fuoco</text>
  <text x="250" y="52" text-anchor="middle" fill="#a0a6b8" font-size="9">(conseguente = signif.)</text>
</svg>`,

};

// ═══════════════════════════════════════════════════════════════
// STATEMENTS — with enriched details, examples, diagram keys
// ═══════════════════════════════════════════════════════════════

const S = [
  // ═══ PRECURSORI ═══
  { id:"ip1", a:"precursors", text:"La semeiotica medica di Ippocrate è lettura inferenziale dei sintomi: il corpo è un testo da interpretare tramite indizi.", detail:"La semeiotica nasce come disciplina medica: il medico osserva sintomi (segni naturali) e inferisce la malattia. <b>Esempio:</b> il colorito giallastro della pelle (segno) → probabile malattia epatica (significato inferito). Non c'è equivalenza: il sintomo è punto di partenza per un ragionamento, non etichetta. Eco parte da qui per dimostrare che il modello originario del segno era l'inferenza, non l'equivalenza.", tag:"Semeiotica medica", f:["segno","interpretazione","storia"] },
  { id:"ar1", a:"precursors", text:"Il termine linguistico è equivalente alla propria definizione ed è pienamente convertibile con essa (bicondizionale).", detail:"Aristotele nelle <i>Categorie</i> e nei <i>Topici</i> instaura il modello dell'equivalenza: il termine è equivalente alla definizione per genere prossimo e differenza specifica. <b>Esempio:</b> «uomo» = «animale razionale» — i due sono pienamente interscambiabili. Ma questo vale solo per i termini categorematici in proposizioni assertorie, non per tutti i segni.", tag:"Equivalenza aristotelica", f:["segno","significato","storia"] },
  { id:"ar2", a:"precursors", text:"Nella Retorica il segno è sempre principio di un'inferenza: il tekmerion (necessario) e il semeion (confutabile).", detail:"Aristotele, <i>Retorica</i> I, 1357a: gli entimemi si traggono da verosimili e da segni. Due tipi: <b>Tekmerion</b> (segno necessario): «se ha latte, allora ha partorito» — non confutabile. <b>Semeion</b> (segno confutabile): «se respira affannosamente, allora ha la febbre» — può essere per altre cause. Il segno retorico è inferenziale, non equivalenziale. Eco nota: lo stesso Aristotele usa 'segno' in modo opposto nella <i>Retorica</i> e nel <i>De Interpretatione</i>.", tag:"Segno retorico", f:["segno","interpretazione","storia"] },
  { id:"ar3", a:"precursors", text:"Il verbo nel De Interpretatione non è segno dell'esistenza della cosa, ma indizio (sintomo) che si sta compiendo un'asserzione.", detail:"Aristotele, <i>De Interpretatione</i> 16b: il verbo 'essere' da solo non afferma l'esistenza. Tommaso chiarisce: la presenza del verbo è <i>prova, indizio, sintomo</i> che nell'enunciato si sta asserendo qualcosa — uso inferenziale/indiziale. <b>Esempio:</b> dire 'è' in 'Socrate è mortale' non significa che Socrate esiste qui e ora, ma segnala che si sta predicando qualcosa.", tag:"Segno vs. indizio", f:["segno","storia"] },
  { id:"st1", a:"precursors", text:"Il segno stoico è l'antecedente di un condizionale valido: «se questo fumo, allora fuoco».", detail:"Gli Stoici definiscono il segno come proposizione antecedente in un condizionale valido, che serve a <i>rivelare</i> il conseguente. <b>Esempio classico:</b> «Se c'è fumo, allora c'è fuoco». La struttura è: se <i>p</i>, allora <i>q</i> — dove <i>p</i> è il segno e <i>q</i> è il significato. Modello intrinsecamente inferenziale: il segno non 'è' il significato, ma lo implica.", tag:"Condizionale stoico", f:["segno","interpretazione","storia"], diagram:"condizionaleStoico" },
  { id:"st2", a:"precursors", text:"L'implicazione stoica ammette gradi: dall'equivalenza necessaria al segno ipotetico e confutabile.", detail:"Sesto Empirico distingue: <b>segni indicativi</b> (rivelano l'inosservabile: 'se suda, allora ha pori' — necessario) e <b>rammemorativi</b> (basati su esperienza: 'se una torcia, allora nemici' — convenzionale). Il gradiente va dalla massima cogenza alla minima. <b>Esempio debole:</b> 'se un uomo cade in povertà' → ha dissipato le ricchezze? naufragio? Molte cause possibili — segno ipotetico, quasi abduzione.", tag:"Gradi dell'implicazione", f:["segno","codice","interpretazione","storia"] },
  { id:"st3", a:"precursors", text:"Ogni categoria sintattica ha controparte semantica: anche articoli, preposizioni, congiunzioni hanno significato.", detail:"Gli Stoici: i <i>lekta</i> completi si compongono di <i>lekta</i> incompleti; tutti hanno contenuto semantico. Molto più ampio di Aristotele. <b>Esempio:</b> 'di' in 'il libro <u>di</u> Marco' esprime una relazione di possesso — non è semanticamente vuoto. Agostino lo svilupperà: «anche le preposizioni hanno significato».", tag:"Semantica estesa stoica", f:["significato","forma","storia"] },
  { id:"ag1", a:"precursors", text:"Agostino introduce la lingua verbale tra i segni e fonda il modello istruzionale: il segno istruisce qualcuno su qualcosa.", detail:"Nel <i>De Doctrina Christiana</i> (II, 1): il segno non è equivalenza ma <i>istruzione</i>. Agostino distingue <b>signa naturalia</b> (fumo→fuoco, senza intenzione) e <b>signa data</b> (intenzionali, come le parole). Mossa cruciale: includere il linguaggio verbale nella teoria generale dei segni. <b>Esempio:</b> un soldato alza lo scudo: signum datum per comunicare qualcosa ai compagni.", tag:"Modello istruzionale", f:["segno","interpretazione","storia"] },
  { id:"ag2", a:"precursors", text:"Il rapporto espressione↔contenuto sembra equivalenza; il rapporto proposizione→significato è implicazione. Ma è un'illusione ottica?", detail:"Eco: Agostino consegna alla tradizione un problema irrisolto — la differenza tra il rapporto denotativo (parola↔significato, che pare equivalenza) e il rapporto inferenziale (il segno come premessa di un ragionamento). «Il primo livello si regge sull'equivalenza, il secondo sull'implicazione». Ma Eco sospetta che anche il primo livello sia segretamente inferenziale.", tag:"Due livelli del segno", f:["segno","storia","interpretazione"] },
  { id:"ag3", a:"precursors", text:"Quando la lingua diventa il modello semiotico per eccellenza, il segno si cristallizza nella forma 'piatta' dell'equivalenza.", detail:"Gradualmente, poiché la lingua è il sistema semiotico più analizzabile, il modello del segno linguistico si impone come <i>il</i> modello. Ma a quel punto è già cristallizzato nella forma ristretta: «incoraggiata dai dizionari e, malauguratamente, da molta logica formale» (Eco). <b>Il coronamento è in Saussure.</b>", tag:"Cristallizzazione", f:["segno","significato","storia"] },

  // ═══ SAUSSURE ═══
  { id:"sa1", a:"saussure", text:"Il segno linguistico è un'entità psichica a due facce: significante (immagine acustica) e significato (concetto).", detail:"Non unisce una cosa e un nome, ma un concetto e un'immagine acustica. I due sono intimamente uniti: come <b>recto e verso di un foglio di carta</b> — non si può ritagliare l'uno senza l'altro. <b>Esempio:</b> il segno /albero/ non unisce l'oggetto albero alla parola 'albero', ma il concetto «albero» all'immagine acustica /albero/. Il segno è un dominio chiuso, «esistente per se stesso» — ed è questa chiusura che lo rende 'ristretto' nella lettura di Eco.", tag:"Segno diadico", f:["segno"], diagram:"segnoDiadico" },
  { id:"sa2", a:"saussure", text:"Il legame tra significante e significato è arbitrario: non c'è alcun rapporto naturale tra i due.", detail:"L'idea di «sorella» non è legata da rapporto interno alla sequenza fonica <i>s-o-r-e-l-l-a</i>. Potrebbe essere qualunque altra sequenza: prova ne sia che in francese è <i>sœur</i>, in tedesco <i>Schwester</i>. <b>Paradosso dell'arbitrarietà:</b> la scelta è libera (nessuna ragione naturale), MA il tempo fissa la scelta rendendola obbligatoria. Diciamo <i>uomo</i> e <i>cane</i> perché prima di noi si è detto <i>uomo</i> e <i>cane</i>. <b>Arbitrario e differenziale sono due qualità correlative</b>: il segno è arbitrario perché è differenziale, e differenziale perché è arbitrario.", tag:"Arbitrarietà", f:["segno","forma"] },
  { id:"sa3", a:"saussure", text:"Nella lingua non ci sono se non differenze, senza termini positivi: il valore è puramente differenziale e negativo.", detail:"<b>Valore ≠ significazione.</b> La significazione è il rapporto interno significante↔significato. Il valore è la posizione del segno nel sistema: un segno è ciò che gli altri non sono. <b>Esempio classico:</b> fr. <i>mouton</i> ≠ ingl. <i>sheep</i>/<i>mutton</i> — in francese un solo termine copre l'animale vivo e la carne; in inglese due termini diversi. <i>Mouton</i> e <i>sheep</i> non hanno lo stesso valore perché il sistema è diverso. Il valore opera su entrambi i piani: concettuale (significato come posizione) e materiale (il suono conta per le differenze foniche che lo distinguono, non per le sue qualità positive).", tag:"Valore differenziale", f:["segno","significato","forma"], diagram:"valoreMouton" },
  { id:"sa4", a:"saussure", text:"La lingua è un sistema in cui tutti i termini sono solidali: il valore dell'uno risulta dalla presenza simultanea degli altri.", detail:"<b>Analogia degli scacchi:</b> come negli scacchi, ogni pezzo ha valore per la sua posizione nel gioco, non per la materia di cui è fatto. Un cavallo di legno sostituito da uno d'avorio funziona allo stesso modo, purché occupi la stessa posizione nel sistema. Se viene eliminato un pezzo, tutti gli altri cambiano valore. La lingua non è una nomenclatura (lista di etichette sulle cose) ma un sistema di rapporti differenziali.", tag:"Sistema di differenze", f:["forma","significato"], diagram:"valoreScacchi" },
  { id:"sa5", a:"saussure", text:"La langue è il sistema sociale condiviso; la parole è l'atto individuale. La linguistica studia la langue.", detail:"<b>Langage</b> (facoltà generale del linguaggio) → troppo eterogeneo per essere oggetto scientifico. Si scinde in: <b>Langue</b> (codice sociale, «tesoro depositato dalla pratica della parole nei soggetti appartenenti a una stessa comunità», sistematico, essenziale) e <b>Parole</b> (atto individuale di fonazione, combinatorio, accessorio). <b>Attenzione:</b> non è dicotomia rigida — sono interdipendenti. La langue si deposita dalla sedimentazione della parole; la parole presuppone la langue per essere intelligibile.", tag:"Langue / Parole / Langage", f:["forma"] },
  { id:"sa6", a:"saussure", text:"Due assi: sintagmatico (in praesentia, nella catena) e associativo (in absentia, nella memoria). NON 'paradigmatico'.", detail:"<b>Asse sintagmatico:</b> rapporti nella catena del discorso. <i>In-segn-amento</i>: ogni elemento ha valore per opposizione a ciò che precede e segue. <b>Asse associativo:</b> rapporti nella memoria. <i>Insegnamento</i> evoca: <i>educazione, apprendimento</i> (per significato); <i>armamento, cambiamento</i> (per forma); <i>insegnare, insegnante</i> (per radice). <b>NOTA CRUCIALE:</b> Saussure dice «associativo», MAI «paradigmatico». Il termine 'paradigmatico' è introdotto da Hjelmslev. Usare 'paradigmatico' per Saussure è un anacronismo.", tag:"Sintagmatico / Associativo", f:["forma"], diagram:"assiSaussure" },
  { id:"sa7", a:"saussure", text:"Si può concepire una scienza dei segni in seno alla vita sociale: la semiologia. La linguistica ne è solo una parte.", detail:"Saussure immagina una «scienza che studi la vita dei segni in seno alla vita sociale»: la <b>semiologia</b>. La linguistica ne sarebbe solo una parte, sebbene la parte principale. <b>Paradosso del progetto semiologico:</b> la lingua, pensata come caso particolare, finisce per diventare il modello per tutti i sistemi di segni. Eco chiama questo il «ricatto del segno linguistico»: la semiologia avrebbe dovuto liberare il segno dalla linguistica, ma ha finito per imporre il modello linguistico a tutta la semiotica.", tag:"Progetto semiologico", f:["segno","storia"] },
  { id:"sa8", a:"saussure", text:"Immutabilità e mutabilità coesistono: il segno non cambia per volontà, ma il tempo lo altera.", detail:"<b>Immutabilità:</b> la massa parlante non può cambiare il segno a piacere. Quattro ragioni: (1) carattere arbitrario (nessuna base razionale per contestarlo); (2) moltitudine dei segni; (3) complessità del sistema; (4) resistenza dell'inerzia collettiva. <b>Mutabilità:</b> il tempo, che assicura la continuità, produce anche alterazione — spostamento del rapporto significante/significato. <b>Esempio:</b> lat. <i>necare</i> (=uccidere) → fr. <i>noyer</i> (=annegare): il significante è rimasto simile ma il significato si è spostato.", tag:"Immutabilità / Mutabilità", f:["segno","forma"] },
  { id:"sa9", a:"saussure", text:"La lingua non è un mezzo fisico per l'espressione delle idee: questa combinazione produce una forma, non una sostanza.", detail:"«Il ruolo caratteristico della lingua di fronte al pensiero non è creare un mezzo fisico materiale per l'espressione delle idee, ma servire da intermediario tra pensiero e suono». Il pensiero, «caotico per natura, è forzato a precisarsi decomponendosi». <b>Metafora dell'aria e dell'acqua:</b> se la pressione atmosferica cambia, la superficie dell'acqua si decompone in onde — la lingua è come questa superficie, zona di articolazione tra due masse amorfe. <b>«Questa combinazione produce una forma, non una sostanza»</b> — frase capitale per Hjelmslev.", tag:"Forma, non sostanza", f:["forma","significato"], diagram:"foglioDiCarta" },
  { id:"sa10", a:"saussure", text:"Il significante è lineare: si sviluppa nel tempo, e questo carattere governa tutto il meccanismo della lingua.", detail:"Principio di linearità: gli elementi del significante si presentano uno dopo l'altro nella catena parlata, formando una linea temporale. Non si possono pronunciare due fonemi contemporaneamente. <b>Esempio:</b> /g-a-t-t-o/ si sviluppa in sequenza, non simultaneamente. Questo principio governa l'organizzazione sintagmatica e distingue la lingua da sistemi semiotici visivi (dove più elementi coesistono simultaneamente).", tag:"Linearità del significante", f:["forma"] },

  // ═══ PEIRCE ═══
  { id:"pe1", a:"peirce", text:"Non abbiamo alcuna facoltà di intuizione: ogni cognizione è determinata logicamente da cognizioni precedenti.", detail:"<i>Questions Concerning Certain Faculties</i> (1868). Prima delle quattro negazioni anti-cartesiane. Contro Cartesio: non esiste una conoscenza immediata, non-inferenziale, non determinata da cognizioni precedenti. <b>Esempio di Peirce:</b> quando entriamo in una stanza e avvertiamo un odore sgradevole, non abbiamo un'«intuizione» immediata dell'odore — abbiamo un'inferenza istantanea basata su segni precedenti (sensazioni fisiche, memorie, confronti). Il regresso è infinito: non c'è un 'primo' pensiero puro.", tag:"Anti-intuizionismo", f:["epistemologia"] },
  { id:"pe2", a:"peirce", text:"Non abbiamo alcuna facoltà di introspezione: la conoscenza del mondo interno è inferita da fatti esterni.", detail:"Seconda negazione (1868). Non c'è accesso diretto e privilegiato alla propria mente. Anche la conoscenza di sé è mediata da segni esterni. <b>Esempio di Peirce:</b> un bambino che tocca una stufa calda: non ha un'«intuizione» immediata del dolore come stato interno — <i>inferisce</i> il proprio stato interiore dalla percezione del contatto e della reazione corporea. Il «cogito ergo sum» cartesiano è esso stesso un'inferenza, non un'intuizione.", tag:"Anti-introspezione", f:["epistemologia","soggetto"] },
  { id:"pe3", a:"peirce", text:"Non abbiamo alcuna capacità di pensare senza segni: il pensiero stesso È intrinsecamente segnico.", detail:"Terza negazione (1868). Il pensiero non è un'attività 'interna' che si esprime 'esternamente' tramite segni: <b>il pensiero È segno</b>. Non esiste pensiero pre-segnico o a-segnico. <b>Esempio:</b> provate a pensare al concetto di «giustizia» senza usare parole, immagini, simboli: è impossibile. Anche il pensiero più astratto è costituito da segni. Conseguenza radicale: la dicotomia mente/linguaggio viene abolita.", tag:"Pensiero = Segno", f:["segno","epistemologia","soggetto"] },
  { id:"pe4", a:"peirce", text:"Non abbiamo alcuna concezione dell'assolutamente incognoscibile: ciò che è al di fuori di ogni cognizione non ha senso.", detail:"Quarta negazione (1868). Il «noumeno» kantiano, la cosa-in-sé assolutamente inaccessibile, non ha senso come concetto. Il reale è ciò verso cui converge l'indagine della comunità, non una cosa-in-sé per principio inaccessibile. <b>NB:</b> Peirce non nega l'esistenza del reale — nega che il reale sia per principio inconoscibile. Lo definisce come il limite ideale della ricerca.", tag:"Anti-incognoscibile", f:["epistemologia"] },
  { id:"pe5", a:"peirce", text:"L'uomo stesso è un segno: «ogni pensiero-segno è tradotto o interpretato in uno susseguente» (CP 5.284).", detail:"<i>Some Consequences of Four Incapacities</i> (1868). «<b>Man is a sign</b>». La coscienza non è il fondamento dell'esperienza ma un <i>prodotto</i> del processo segnico. L'uomo è inserito nel flusso della semiosi, non ne è l'osservatore esterno. Conseguenza: il dualismo soggetto/oggetto viene superato. Il «soggetto» non precede il segno: è costituito da segni. Questa tesi può essere vista come anticipazione del cognitivismo 4E (mente estesa).", tag:"Man is a sign", f:["segno","soggetto","epistemologia"] },
  { id:"pe6", a:"peirce", text:"Il segno è relazione triadica genuina e irriducibile: representamen, oggetto, interpretante.", detail:"Definizione (CP 2.228): «il segno, o representamen, è qualcosa che sta a qualcuno per qualcosa sotto qualche rispetto o capacità». Tre poli: <b>Representamen</b> (il veicolo segnico — la parola 'fuoco', l'impronta nella neve). <b>Oggetto</b> (ciò per cui il segno sta — il fuoco reale, l'animale che ha lasciato l'impronta). <b>Interpretante</b> (l'effetto significativo del segno — a sua volta un segno). La triade non si riduce a tre coppie diadiche: è relazione genuinamente a tre posti. <b>L'interpretante è ciò che manca nel modello saussuriano</b> e che lo rende 'ristretto'.", tag:"Segno triadico", f:["segno"], diagram:"triadePeirce" },
  { id:"pe7", a:"peirce", text:"Oggetto Immediato: come il segno presenta l'oggetto. Oggetto Dinamico: ciò che stimola e motiva il segno.", detail:"Distinzione cruciale. <b>Oggetto Immediato:</b> «l'Oggetto come il segno lo rappresenta» — la porzione dell'oggetto catturata dal segno. <b>Oggetto Dinamico:</b> l'oggetto reale che motiva il segno ma che il segno non esaurisce. <b>Esempio:</b> la parola «acqua» — l'Ogg. Immediato è il concetto linguistico di acqua (H₂O, liquido, trasparente…); l'Ogg. Dinamico è l'acqua reale in tutta la sua complessità inesauribile. <b>Eco identifica:</b> Ogg. Immediato ≈ forma del contenuto (Hjelmslev); Ogg. Dinamico ≈ materia/continuum.", tag:"Oggetto Immediato / Dinamico", f:["segno","significato"], diagram:"oggettoIdDin" },
  { id:"pe8", a:"peirce", text:"La semiosi è illimitata: ogni interpretante è a sua volta un segno che genera nuovi interpretanti.", detail:"Ogni segno, manifestandosi a un interprete, produce effetti (interpretanti) che sono a loro volta segni — potenzialmente all'infinito. <b>Esempio:</b> la parola «gatto» → evoca l'immagine di un gatto → che evoca «felino» → che evoca «animale domestico» → «fa le fusa» → «adorato in Egitto»… Ogni passo allarga la comprensione. Non è regresso vizioso: <b>si arresta provvisoriamente nell'abito</b> — ma è sempre riattivabile.", tag:"Semiosi illimitata", f:["segno","interpretazione"] },
  { id:"pe9", a:"peirce", text:"L'interpretante logico finale è un mutamento d'abito: la modifica della disposizione ad agire in determinate circostanze.", detail:"Tre tipi di interpretante: <b>(1) Emozionale:</b> sentimento prodotto dal segno (la «sensazione» di aver compreso). <b>(2) Energetico:</b> atto pratico, sforzo individuale (un gesto, un'azione). <b>(3) Logico:</b> concetto di natura generale — ma è ancora un segno e non può essere l'ultimo. L'unico interpretante genuinamente 'ultimo' è l'<b>abito (habit)</b>: un mutamento di disposizione ad agire. <b>Esempio:</b> dopo aver imparato che il fuoco brucia, l'abito è la disposizione automatica a non toccare la fiamma. L'abito non è un segno, quindi non genera ulteriori interpretanti — ma è <i>rivedibile</i>.", tag:"Abito / Habit", f:["segno","interpretazione","significato","pragmatismo"] },
  { id:"pe10", a:"peirce", text:"Il significato di un concetto si identifica con l'insieme delle sue conseguenze pratiche concepibili.", detail:"<i>How to Make Our Ideas Clear</i> (1878). <b>Massima pragmatica:</b> «Consideriamo quali effetti, che possano concepibilmente avere conseguenze pratiche, noi concepiamo che l'oggetto della nostra concezione abbia. Allora la nostra concezione di questi effetti è l'intera nostra concezione dell'oggetto.» Tre gradi di chiarezza: (1) familiarità d'uso, (2) definizione astratta, (3) comprensione delle conseguenze pratiche. <b>Esempio di Peirce:</b> che significa 'duro'? Non una definizione astratta, ma: «non sarà scalfito da molte altre sostanze». Il significato è l'abito d'azione che il concetto produce.", tag:"Massima pragmatica", f:["significato","interpretazione","pragmatismo"] },
  { id:"pe11", a:"peirce", text:"Il dubbio reale nasce da irritazione genuina, non da metodo: non si può dubitare di tutto per decisione.", detail:"<i>The Fixation of Belief</i> (1877). Contro il dubbio cartesiano (fittizio, «di carta»): non si può dubitare veramente di tutto — si dubita solo di ciò per cui si ha una ragione positiva di dubitare. <b>Esempio:</b> «Non potrei dubitare che questa è la mia mano» — il dubbio universale cartesiano non è un vero stato psicologico ma un artificio metodologico. L'indagine parte dall'<b>irritazione del dubbio reale</b> e mira alla <b>fissazione della credenza</b>: stato stabile che guida l'azione.", tag:"Dubbio reale vs. fittizio", f:["epistemologia","pragmatismo"] },
  { id:"pe12", a:"peirce", text:"Quattro metodi di fissazione della credenza: tenacia, autorità, a priori, scientifico. Solo l'ultimo è affidabile.", detail:"(1) <b>Tenacia:</b> aggrapparsi alla propria opinione. (2) <b>Autorità:</b> affidarsi a un'istituzione. (3) <b>A priori:</b> ragionamento puro, ma basato su «gusti intellettuali». (4) <b>Scientifico:</b> unico metodo che sottopone le ipotesi al vaglio della realtà esterna. <b>Solo il metodo scientifico funziona a lungo termine</b> perché presuppone un «reale» indipendente dalle opinioni individuali. La verità è il limite ideale verso cui converge la comunità degli indagatori nel lungo periodo.", tag:"Fissazione della credenza", f:["epistemologia","pragmatismo"] },
  { id:"pe13", a:"peirce", text:"Icona (somiglianza), indice (connessione causale), simbolo (convenzione): nessun segno è puramente uno solo.", detail:"Tripartizione per rapporto con l'Oggetto. <b>Icona:</b> somiglianza con l'oggetto (ritratto, mappa, onomatopea). <b>Indice:</b> connessione causale/esistenziale (fumo→fuoco, banderuola→vento, impronta→animale). <b>Simbolo:</b> convenzione o legge (parole, segnali stradali, formule chimiche). <b>Cruciale:</b> nessun segno è puramente uno dei tre — contiene elementi delle tre modalità in proporzioni diverse. <b>ATTENZIONE terminologica:</b> il 'simbolo' peirciano (convenzionale) è l'opposto del 'simbolo' saussuriano (motivato, non del tutto arbitrario).", tag:"Icona / Indice / Simbolo", f:["segno"], diagram:"iconaIndiceSimb" },
  { id:"pe14", a:"peirce", text:"L'abduzione è l'inferenza ipotetica: osservo un fatto sorprendente e ipotizzo una legge che lo spieghi.", detail:"Oltre deduzione e induzione, Peirce introduce l'<b>abduzione</b>: il processo con cui si genera un'ipotesi. Schema: osservo un <b>Risultato</b> sorprendente → ipotizzo una <b>Legge</b> → il fatto diventa un <b>Caso</b> di quella legge. <b>Esempio medico (Eco):</b> osservo macchie rosse sulla pelle (Risultato) → ipotizzo «morbillo» (Legge) → le macchie sono un Caso di morbillo. È il motore della scoperta scientifica e dell'interpretazione dei segni deboli.", tag:"Abduzione", f:["interpretazione","epistemologia"] },

  // ═══ HJELMSLEV ═══
  { id:"hj1", a:"hjelmslev", text:"«Una totalità non consiste di cose ma di rapporti»: la linguistica deve descrivere la lingua come struttura autosufficiente.", detail:"<b>Principio di immanenza.</b> La lingua va studiata come forma, non come sostanza. «Postulare gli oggetti come qualcosa di diverso dai termini dei rapporti è un assioma superfluo.» La teoria deve essere: (1) <b>coerente</b> (non-contraddittoria), (2) <b>esaustiva</b> (rendere conto di tutti i dati), (3) <b>il più semplice possibile</b> (principio empirico). Non è rifiuto della realtà esterna ma priorità metodologica: la descrizione formale viene prima.", tag:"Principio di immanenza", f:["forma"] },
  { id:"hj2", a:"hjelmslev", text:"Una semiotica è una funzione segnica contratta da due funtivi: il piano dell'espressione e il piano del contenuto.", detail:"I due piani sono <b>solidali</b> (interdipendenti): non c'è espressione senza contenuto né contenuto senza espressione. La <b>funzione segnica</b> è il rapporto che li unisce. <b>Esempio:</b> la parola /gatto/: il piano dell'espressione è la sequenza fonica [g-a-t-t-o]; il piano del contenuto è il concetto «piccolo felino domestico». L'analisi dell'uno non prescinde dall'altro.", tag:"Funzione segnica", f:["segno","forma"] },
  { id:"hj3", a:"hjelmslev", text:"La forma del contenuto è la rete di relazioni differenziali che ogni lingua proietta sulla materia amorfa dell'esperienza.", detail:"Come il continuum sonoro è segmentato in fonemi dalla forma dell'espressione, così il continuum dell'esperienza è segmentato dalla <b>forma del contenuto</b>. <b>Esempio dei colori:</b> la stessa zona dello spettro cromatico è divisa in 4 termini dall'inglese (<i>green, blue, gray, brown</i>) e in 3 dal gallese (<i>gwyrdd, glas, llwyd</i>). Stessa materia → forme diverse → sostanze diverse. <b>Esempio dei termini di parentela:</b> it. <i>fratello/sorella</i> (2 termini); cinese: <i>xiōng/dì/zǐ/mèi</i> (4 termini, distinguono maggiore/minore); malese: <i>saudara</i> (1 solo termine). <b>NON è semantica</b>: è la struttura differenziale interna, non il significato.", tag:"Forma del contenuto", f:["forma","significato"], diagram:"formaContenutoColori" },
  { id:"hj4", a:"hjelmslev", text:"Materia (continuum amorfo), forma (rete differenziale), sostanza (materia formata). La sostanza presuppone la forma.", detail:"<b>Quadripartizione hjelmsleviana:</b> per ciascun piano (espressione e contenuto) si distingue: <b>Materia</b> (<i>mening</i>, <i>purport</i>): il continuum amorfo, identico tra lingue. <b>Forma:</b> la rete di opposizioni e relazioni differenziali. <b>Sostanza:</b> la materia una volta formata — il risultato della proiezione della forma sulla materia. <b>La sostanza presuppone la forma, non viceversa:</b> data una forma, può manifestarsi in qualunque sostanza; ma data una sostanza, essa è necessariamente manifestazione di una forma.", tag:"Quadripartizione", f:["forma"], diagram:"quadripartizione" },
  { id:"hj5", a:"hjelmslev", text:"Prova di commutazione: se lo scambio su un piano provoca scambio corrispondente sull'altro, i due sono invarianti.", detail:"Criterio empirico per distinguere <b>invarianti</b> (unità pertinenti) da <b>varianti</b>. Se lo scambio di un elemento sul piano dell'espressione provoca uno scambio corrispondente sul piano del contenuto → i due elementi sono invarianti. <b>Esempio espressione:</b> /p/ane → /b/ane: cambia il contenuto → /p/ e /b/ sono fonemi distinti (invarianti). <b>Esempio variante:</b> /r/ moscia vs. /r/ vibrante in 'roma': il contenuto non cambia → sono varianti dello stesso fonema. La prova è <b>reversibile</b> (funziona anche dal contenuto all'espressione) e necessita della sostanza per la verifica.", tag:"Commutazione", f:["forma"], diagram:"commutazione" },
  { id:"hj6", a:"hjelmslev", text:"I segni si analizzano in figure (non-segni): fonemi (espressione) e semi/pleremi (contenuto).", detail:"Le <b>figure</b> sono gli elementi minimi non dotati di significato proprio, che compongono i segni. <b>Espressione:</b> i fonemi. /p/, /a/, /n/, /e/ compongono il segno 'pane' ma non sono segni. <b>Contenuto:</b> i semi (pleremi). «bovino + maschio» = <i>toro</i>; «bovino + femmina» = <i>vacca</i>; «equino + maschio» = <i>stallone</i>. <b>Differenza cruciale:</b> per i segni, stessa differenza di espressione = stessa differenza di contenuto; per le figure, stessa differenza → mutamenti diversi (<i>pero/paro</i> vs. <i>meno/mano</i>). Le figure permettono l'<b>economia del sistema</b>: un numero limitato di figure → infiniti segni.", tag:"Figure / Non-segni", f:["segno","forma"] },
  { id:"hj7", a:"hjelmslev", text:"La semiotica connotativa ha come espressione un'intera semiotica denotativa. La metasemiotica ha come contenuto una semiotica.", detail:"<b>Semiotica denotativa:</b> il sistema base (espressione + contenuto in funzione segnica). <b>Semiotica connotativa:</b> l'intero segno denotativo diventa il piano dell'espressione di un ulteriore contenuto. <b>Esempio:</b> 'destriero' (segno denotativo: significante /destriero/ + significato «cavallo») → in quanto segno completo diventa espressione di: «arcaismo, letterarietà, registro aulico». <b>Metasemiotica:</b> il piano del contenuto è una semiotica — lingua che parla di una lingua (la linguistica è metasemiotica). <b>NOTA STORICA:</b> Hjelmslev, <i>Fondamenti</i> cap. 22 (1943), NON Barthes. Barthes negli anni '60 popolarizza il diagramma, ma l'invenzione è hjelmsleviana.", tag:"Denotazione / Connotazione", f:["segno","codice"], diagram:"denotazioneConnotazione" },
  { id:"hj8", a:"hjelmslev", text:"La lingua è una forma, non una sostanza. Le differenze tra le lingue sono diversità di forma, non di sostanza.", detail:"«Le differenze fra le lingue non si basano su realizzazioni diverse di un tipo unico di sostanza, ma su realizzazioni diverse di un <b>principio di formazione</b>». <b>Esempio:</b> il continuum dei suoni vocalici — il lak (lingua caucasica) ha 3 vocali (<i>i, a, u</i>), lo spagnolo 5 (<i>i, e, a, o, u</i>), l'italiano 7 (con <i>e</i>/<i>ɛ</i> e <i>o</i>/<i>ɔ</i>): la materia sonora è la stessa, le forme differiscono. Conseguenza: «tipi fonetici di validità generale o schemi eterni di idee non si possono costruire empiricamente».", tag:"Forma, non sostanza", f:["forma"] },
  { id:"hj9", a:"hjelmslev", text:"I due piani sono non-conformi: non c'è rapporto biunivoco tra funtivi dell'espressione e funtivi del contenuto.", detail:"<b>Non-conformità:</b> la condizione per operare con due piani. Se ci fosse isomorfismo (conformità) tra espressione e contenuto, basterebbe un solo piano. <b>Esempio:</b> il segno latino <i>-ibus</i>: 4 elementi dell'espressione (<i>i, b, u, s</i>) ma solo 2 del contenuto («dativo/ablativo» + «plurale»). Non c'è rapporto biunivoco. Le lingue sono <b>biplanari e non-conformi</b> — per questo hanno figure e si distinguono dai sistemi «simbolici» (uniplanari).", tag:"Biplanarità / Non-conformità", f:["forma","segno"] },
  { id:"hj10", a:"hjelmslev", text:"Hjelmslev chiama 'simbolici' i sistemi uniplanari dove l'espressione è isomorfa al contenuto (scacchi, diagrammi).", detail:"Per Hjelmslev, i sistemi <b>simbolici</b> sono quelli in cui l'espressione è isomorfa al contenuto: «entità che sono raffigurazioni o emblemi, come il Cristo di Thorvaldsen come simbolo della compassione, la falce e il martello come simbolo del comunismo, la bilancia come simbolo della giustizia». <b>Anche gli scacchi</b> sono un sistema simbolico in Hjelmslev: uniplanare. <b>Confusione terminologica:</b> il 'simbolo' di Saussure è il segno motivato (la bilancia della giustizia «non è del tutto arbitraria»); il 'simbolo' di Peirce è convenzionale; Hjelmslev lo usa per sistemi uniplanari.", tag:"Simbolico in Hjelmslev", f:["segno","forma"] },

  // ═══ ECO ═══
  { id:"ec1", a:"eco", text:"Il segno, erroneamente ridotto al modello 'ristretto' dell'equivalenza, va riscoperto nel modello 'allargato' dell'inferenza.", detail:"<b>Tesi portante</b> di <i>Semiotica e filosofia del linguaggio</i>, cap. 1 (Segno e inferenza). Il segno come equivalenza bidirezionale (significante ↔ significato, definiens ↔ definiendum) è una riduzione storica. <b>Il modello originario</b> — da Ippocrate (semeiotica medica) agli Stoici (condizionale) ad Agostino (modello istruzionale) — era <b>inferenziale</b>: il segno come punto di partenza per un ragionamento, non come etichetta sostituibile.", tag:"Ristretto → Allargato", f:["segno","interpretazione","storia"] },
  { id:"ec2", a:"eco", text:"Il modello inferenziale del segno era quello ORIGINARIO: la riduzione a equivalenza è effetto storico della cristallizzazione linguistica.", detail:"<b>Ricostruzione storica di Eco:</b> Ippocrate (lettura inferenziale dei sintomi) → Aristotele (nella Retorica, segno = premessa di entimema) → Stoici (segno = antecedente di condizionale) → Agostino (modello istruzionale). La cristallizzazione in equivalenza avviene quando il segno linguistico si impone come modello per eccellenza, «incoraggiato dai dizionari e da molta logica formale». Eco dimostra che è <b>legittimo riformulare</b> il segno in senso allargato perché il modello allargato era quello originario.", tag:"Ricostruzione storica", f:["segno","interpretazione","storia"] },
  { id:"ec3", a:"eco", text:"Il segno è sempre ciò che mi apre a qualcosa d'altro: l'interpretante non solo ritraduce ma allarga i confini.", detail:"<b>Criterio di interpretanza</b> (da Peirce): ogni interpretante non solo ritraduce l'oggetto immediato, ma ne allarga la comprensione. «Non c'è interpretante che, nell'adeguare il segno che interpreta, non ne sposti sia pure di poco i confini.» <b>Esempio di Eco:</b> dico /padre/ → il termine definisce un predicato a due argomenti → se padre, allora qualcuno che è figlio → si apre una topica argomentativa → dal termine alla proposizione all'argomentazione. Questa è la <b>condanna dell'equivalenza 'piatta'</b>.", tag:"Criterio di interpretanza", f:["interpretazione","segno"] },
  { id:"ec4", a:"eco", text:"Interpretare un segno = definire la porzione di contenuto veicolata, nei suoi rapporti con le altre porzioni.", detail:"«Interpretare un segno significa definire la porzione di contenuto veicolata, nei suoi rapporti con le altre porzioni derivate dalla segmentazione globale del contenuto.» L'interpretazione è traduzione in altri segni. <b>Possibilità radicale:</b> se l'interpretazione è condotta molto avanti, può mettere in crisi la <b>segmentazione stessa</b> — il modo in cui la forma del contenuto ha segmentato il continuum. <b>Esempio:</b> il concetto di «razza umana», interpretato a fondo, mette in crisi la segmentazione stessa del contenuto «umanità».", tag:"Interpretazione come definizione", f:["interpretazione","significato"] },
  { id:"ec5", a:"eco", text:"Hjelmslev descrive la FORMA del segno; Peirce spiega come quella forma GENERA significato. Integrazione, non alternativa.", detail:"<b>Integrazione cruciale di Eco:</b> non è Hjelmslev OPPURE Peirce, ma Hjelmslev <b>E</b> Peirce. Hjelmslev dà la <b>struttura</b> (forma del contenuto: come il sistema segmenta il continuum). Peirce dà il <b>processo</b> (semiosi illimitata: come il significato si genera e si espande attraverso interpretanti). <b>L'enciclopedia è il punto d'incontro:</b> struttura rizomatica (forma) attraversata da processi interpretativi (semiosi).", tag:"Integrazione Hj + Pe", f:["segno","forma","interpretazione"] },
  { id:"ec6", a:"eco", text:"Il continuum di Hjelmslev = l'Oggetto Dinamico di Peirce: ciò che motiva il segno ma di cui il segno non rende ragione.", detail:"<b>Riformulazione decisiva:</b> Materia/continuum (Hjelmslev) = Oggetto Dinamico (Peirce): il reale che stimola la produzione del segno. Forma del contenuto = Oggetto Immediato: come il segno presenta quell'oggetto. «Una data civiltà organizza il contenuto in campi, assi, sottosistemi, non sempre coerenti tra loro, spesso articolabili secondo la prospettiva contestuale che si sceglie.» <b>Il significato semiotico è legato al significato conoscitivo:</b> conoscere è segmentare il continuum attraverso segni.", tag:"Continuum = Ogg. Dinamico", f:["forma","significato","interpretazione"], diagram:"oggettoIdDin" },
  { id:"ec7", a:"eco", text:"DIZIONARIO: albero chiuso (genus + differentia). ENCICLOPEDIA: rete aperta di interpretanti, limitata dall'abito.", detail:"<b>Dizionario:</b> albero di Porfirio / Katz & Fodor. 'Scapolo' = [+umano, +maschio, +adulto, +non sposato]. Problemi: (1) i semi sono parole → regresso infinito; (2) non rende conto della conoscenza enciclopedica. <b>Enciclopedia:</b> rete rizomatica, potenzialmente infinita. <b>Esempio:</b> la conoscenza enciclopedica di «gatto»: fa le fusa, caccia i topi, è stato adorato nell'antico Egitto, è protagonista di meme su internet — niente di questo entra in un dizionario a condizioni necessarie e sufficienti. L'enciclopedia è un <b>postulato semiotico</b>: non esiste nella sua totalità, è l'orizzonte regolativo dell'interpretazione.", tag:"Dizionario vs. Enciclopedia", f:["significato","interpretazione"], diagram:"dizionarioEnciclopedia" },
  { id:"ec8", a:"eco", text:"L'enciclopedia integra la forma hjelmsleviana (struttura) con il processo peirciano (semiosi). È postulato, non oggetto.", detail:"L'enciclopedia non è un dizionario più grande — è un <b>modello teorico diverso</b>. Integra la forma del contenuto di Hjelmslev (la rete di differenze che struttura il significato) con la semiosi illimitata di Peirce (il processo per cui ogni interpretante ne genera altri). <b>Non esiste nella sua totalità:</b> è l'insieme delle interpretazioni possibili, limitato pragmaticamente dall'abito peirciano e dalla negoziazione sociale.", tag:"Enciclopedia come postulato", f:["significato","interpretazione"] },
  { id:"ec9", a:"eco", text:"Per il CODICE il modello originario ERA quello ristretto. La riformulazione in senso allargato è un 'nuovo battesimo'.", detail:"<b>Simmetria invertita</b> rispetto al segno (cap. 3, La famiglia dei codici): per il segno, il modello allargato (inferenziale) era l'originario → va <i>riscoperto</i>. Per il codice, il modello ristretto (correlazionale) era l'originario → l'allargamento è un <i>nuovo e arbitrario battesimo</i>. Tre accezioni storiche di 'codice': <b>paleografico</b> (il codex, tronco d'albero → libro), <b>correlazionale</b> (il codice Morse: corrispondenza termine a termine), <b>istituzionale</b> (il codice civile: sistema di norme).", tag:"Codice: simmetria invertita", f:["codice","storia"] },
  { id:"ec10", a:"eco", text:"Il codice crittografico è il modello puro dell'equivalenza: se ogni segno fosse così, sarebbe IL modello semiotico.", detail:"Il codice crittografico instaura «rapporti di assoluta equivalenza tra espressione e contenuto»: il definiens è sostituibile col definiendum in ogni contesto. <b>Esempio:</b> il codice dell'abate Tritemio (1499): A=«Annuncidi», B=«Sempre», C=«Mondo senza fine»… — corrispondenza biunivoca totale. <b>Ma:</b> «se il segno è basato sul modello dell'inferenza ed è il punto di partenza per un indefinito processo di interpretazione, allora il modello crittografico non definisce la vita dei sistemi semiotici» — descrive solo le semie sostitutive.", tag:"Codice crittografico", f:["codice","segno"] },
  { id:"ec11", a:"eco", text:"Codici forti (correlazione stabile) e codici deboli (instabili, abduttivi): gradiente dal ristretto all'allargato.", detail:"Il gradiente va dalla massima cogenza (equivalenza) alla minima (abduzione). <b>Codice forte:</b> correlazione stabile, quasi-equivalenza. <i>Esempio:</i> il codice Morse, il codice della strada. <b>Codice debole:</b> correlazione instabile, ipotetica, abduttiva. <i>Esempio:</i> i sintomi medici, gli indizi di un detective. <b>Eco nota</b> che la nozione di codice si dissolve progressivamente in quella di enciclopedia man mano che la cogenza si indebolisce: quando il 'se…allora' diventa ipotetico, non si ha più un codice ma un'interpretazione.", tag:"Codici forti / deboli", f:["codice","interpretazione"] },
  { id:"ec12", a:"eco", text:"Ratio facilis: tipo espressivo preformato. Ratio difficilis: tipo espressivo modellato sul tipo del contenuto.", detail:"Eco propone non una tipologia dei segni ma dei <b>modi di produrre segni</b>. <b>Ratio facilis:</b> il tipo espressivo è preformato, correlato arbitrariamente al contenuto. <i>Esempio:</i> la parola 'cavallo' non somiglia a un cavallo — il tipo espressivo era già nel sistema. <b>Ratio difficilis:</b> per mancanza di tipo preformato, l'espressione si modella sul contenuto. <i>Esempio:</i> un diagramma ferroviario che proietta rapporti spaziali tra Torino, Bologna e Firenze — l'espressione riproduce la struttura del contenuto. Un singolo segno è di solito il risultato di <b>più modi produttivi</b> combinati.", tag:"Ratio facilis / difficilis", f:["segno","forma"] },
  { id:"ec13", a:"eco", text:"Il 'simbolo' peirciano (convenzionale) ≠ 'simbolo' saussuriano (motivato) ≠ 'simbolico' hjelmsleviano (uniplanare).", detail:"Tre usi irriducibili dello stesso termine: <b>Peirce:</b> simbolo = segno per convenzione/legge (parole, segnali). <b>Saussure:</b> simbolo = segno non del tutto arbitrario, con residuo di legame naturale (la bilancia della giustizia «non è del tutto arbitraria»). <b>Hjelmslev:</b> simbolico = sistema uniplanare isomorfo (scacchi, diagrammi, emblemi). Eco ricostruisce questa «rete di somiglianze di famiglia» mostrando come il «medesimo» termine dica cose diverse in quadri teorici diversi.", tag:"Equivocità di 'simbolo'", f:["segno"] },
  { id:"ec14", a:"eco", text:"Tracce, sintomi, indizi: modi di produzione segnica con gradi diversi di ratio e codificazione.", detail:"<b>Tracce/impronte:</b> rette da ratio difficilis — l'impronta «dice che, data una configurazione su superficie imprimibile, allora una data classe di agenti impressori». <i>Esempio:</i> un'orma nella neve → classe di animali. <b>Sintomi:</b> retti da ratio facilis <i>quando già codificati</i> (il sintomo è riconosciuto nel sistema medico) — rinviano a una causa per esperienza codificata. <i>Esempio:</i> febbre alta + macchie → morbillo. Ma un sintomo non ancora codificato è più vicino alla ratio difficilis e all'abduzione. La tavola dei modi non classifica segni ma <b>processi produttivi</b>: «quello che viene chiamato un segno è di solito il risultato di più modi produttivi diversi».", tag:"Modi di produzione segnica", f:["segno","interpretazione"] },
  { id:"ec15", a:"eco", text:"La connotazione hjelmsleviana (stratificazione sistemica) differisce dalla semiosi peirciana (dinamica processuale), ma Eco le integra.", detail:"<b>Hjelmslev:</b> la connotazione è stratificazione <i>statica</i> di livelli semiotici — una semiotica denotativa che diventa espressione di ulteriore contenuto. <b>Peirce:</b> la semiosi è processo <i>dinamico</i> di generazione di interpretanti — il significato si espande nel tempo. <b>Eco integra entrambe:</b> la connotazione descrive <i>come i sistemi si impilano</i>; la semiosi descrive <i>come il significato si genera</i>. Non c'è contraddizione: sono due prospettive complementari sullo stesso fenomeno.", tag:"Connotazione vs. Semiosi", f:["segno","interpretazione","forma"] },
  { id:"ec16", a:"eco", text:"Non c'è differenza di struttura semiotica tra primo e secondo livello: ciò che muta è la cogenza del se/allora.", detail:"Tra denotazione e connotazione, tra codice forte e codice debole: ciò che cambia è il <b>grado di necessità epistemologica</b> del «se…allora», non la struttura del segno. «Non c'è dunque differenza di struttura semiotica tra significazione di primo e di secondo livello.» Il segno è sempre inferenziale: più o meno cogente, ma strutturalmente unitario. <b>Questa è l'unificazione finale di Eco:</b> un solo modello semiotico con un gradiente di forza.", tag:"Struttura unitaria del segno", f:["segno","codice","interpretazione"] },
];

// ═══════════════════════════════════════════════════════════════
// CONNECTIONS
// type: "agree" = green (development/agreement) | "disagree" = red (critique/opposition)
// ═══════════════════════════════════════════════════════════════

const CONNECTIONS = [
  // Precursors internal
  {f:"ip1",t:"st1",ty:"agree"}, {f:"ip1",t:"ar2",ty:"agree"}, {f:"ar2",t:"st1",ty:"agree"},
  {f:"st1",t:"ag1",ty:"agree"}, {f:"st3",t:"ag1",ty:"agree"}, {f:"ag1",t:"ag2",ty:"agree"},
  {f:"ag2",t:"ag3",ty:"agree"}, {f:"ar1",t:"ar2",ty:"disagree"}, {f:"ar1",t:"ar3",ty:"agree"},
  {f:"st2",t:"st1",ty:"agree"},
  // Precursors → Saussure
  {f:"ar1",t:"sa1",ty:"agree"}, {f:"ag3",t:"sa1",ty:"agree"}, {f:"ag3",t:"sa7",ty:"agree"},
  // Saussure internal
  {f:"sa2",t:"sa3",ty:"agree"}, {f:"sa3",t:"sa4",ty:"agree"}, {f:"sa2",t:"sa8",ty:"agree"},
  {f:"sa9",t:"sa3",ty:"agree"}, {f:"sa5",t:"sa6",ty:"agree"}, {f:"sa10",t:"sa6",ty:"agree"},
  {f:"sa4",t:"sa9",ty:"agree"}, {f:"sa1",t:"sa2",ty:"agree"},
  // Peirce → Precursors
  {f:"st1",t:"pe6",ty:"agree"}, {f:"ar2",t:"pe6",ty:"agree"}, {f:"st2",t:"pe8",ty:"agree"},
  {f:"ag1",t:"pe6",ty:"agree"}, {f:"ip1",t:"pe14",ty:"agree"},
  // Peirce internal
  {f:"pe1",t:"pe3",ty:"agree"}, {f:"pe2",t:"pe5",ty:"agree"}, {f:"pe3",t:"pe5",ty:"agree"},
  {f:"pe1",t:"pe4",ty:"agree"}, {f:"pe6",t:"pe8",ty:"agree"}, {f:"pe8",t:"pe9",ty:"agree"},
  {f:"pe10",t:"pe9",ty:"agree"}, {f:"pe11",t:"pe12",ty:"agree"}, {f:"pe11",t:"pe1",ty:"agree"},
  {f:"pe6",t:"pe7",ty:"agree"}, {f:"pe14",t:"pe8",ty:"agree"}, {f:"pe1",t:"pe2",ty:"agree"},
  // Peirce ↔ Saussure (CRITIQUES)
  {f:"pe6",t:"sa1",ty:"disagree"}, {f:"pe8",t:"sa1",ty:"disagree"}, {f:"pe3",t:"sa9",ty:"agree"},
  {f:"pe5",t:"sa1",ty:"disagree"},
  // Hjelmslev ↔ Saussure (DEVELOPMENTS)
  {f:"sa3",t:"hj3",ty:"agree"}, {f:"sa9",t:"hj8",ty:"agree"}, {f:"sa4",t:"hj1",ty:"agree"},
  {f:"sa6",t:"hj5",ty:"agree"}, {f:"sa9",t:"hj4",ty:"agree"},
  // Hjelmslev internal
  {f:"hj1",t:"hj4",ty:"agree"}, {f:"hj4",t:"hj3",ty:"agree"}, {f:"hj2",t:"hj6",ty:"agree"},
  {f:"hj6",t:"hj5",ty:"agree"}, {f:"hj8",t:"hj4",ty:"agree"}, {f:"hj9",t:"hj6",ty:"agree"},
  {f:"hj2",t:"hj9",ty:"agree"}, {f:"hj7",t:"hj2",ty:"agree"}, {f:"hj10",t:"hj9",ty:"agree"},
  // Eco ↔ everyone
  {f:"ec1",t:"sa1",ty:"disagree"}, {f:"ec1",t:"ar1",ty:"disagree"},
  {f:"ec2",t:"ip1",ty:"agree"}, {f:"ec2",t:"st1",ty:"agree"}, {f:"ec2",t:"ag1",ty:"agree"}, {f:"ec2",t:"ar2",ty:"agree"},
  {f:"ec3",t:"pe8",ty:"agree"}, {f:"ec3",t:"pe6",ty:"agree"},
  {f:"ec5",t:"hj3",ty:"agree"}, {f:"ec5",t:"pe6",ty:"agree"},
  {f:"ec6",t:"hj4",ty:"agree"}, {f:"ec6",t:"pe7",ty:"agree"},
  {f:"ec7",t:"pe9",ty:"agree"}, {f:"ec7",t:"pe10",ty:"agree"}, {f:"ec7",t:"hj3",ty:"agree"},
  {f:"ec8",t:"ec7",ty:"agree"},
  {f:"ec9",t:"ec1",ty:"agree"},
  {f:"ec10",t:"ar1",ty:"agree"}, {f:"ec10",t:"sa1",ty:"agree"},
  {f:"ec11",t:"st2",ty:"agree"},
  {f:"ec12",t:"pe13",ty:"agree"},
  {f:"ec13",t:"pe13",ty:"disagree"}, {f:"ec13",t:"sa2",ty:"disagree"}, {f:"ec13",t:"hj10",ty:"disagree"},
  {f:"ec9",t:"sa1",ty:"disagree"},
  {f:"ec15",t:"hj7",ty:"agree"}, {f:"ec15",t:"pe8",ty:"agree"},
  {f:"ec16",t:"st2",ty:"agree"}, {f:"ec16",t:"ec11",ty:"agree"},
  {f:"ec14",t:"pe14",ty:"agree"}, {f:"ec14",t:"pe13",ty:"agree"},
  {f:"ec4",t:"pe8",ty:"agree"}, {f:"ec4",t:"hj3",ty:"agree"},
  {f:"ec5",t:"pe7",ty:"agree"},
];
