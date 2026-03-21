// ═══════════════════════════════════════════════════
// SemioViz — App Logic (i18n + a11y)
// ═══════════════════════════════════════════════════

const COL_W = 370, COL_GAP = 28, PAD = 32, HDR_H = 100, ROW_H = 76, NODE_H = 64;

const state = {
  selected: null, filter: "all", search: "",
  activeTab: "precursors", theme: "light",
  lang: "it", showInfo: false,
};
let firstRender = true;

const isDesktop = () => window.innerWidth >= 768;

// ── i18n helpers ──
function t(key) { return I18N[state.lang]?.[key] ?? I18N.it[key] ?? key; }
function tStmt(s, field) {
  const override = I18N[state.lang]?.stmts?.[s.id]?.[field];
  return override ?? s[field];
}
function tAuthor(a) { return I18N[state.lang]?.authors?.[a.id] ?? { name: a.name, sub: a.sub }; }
function tFilter(fid) { return I18N[state.lang]?.filters?.[fid] ?? fid; }

function acol(id) {
  return { precursors:"var(--col-precursors)", saussure:"var(--col-saussure)",
    peirce:"var(--col-peirce)", hjelmslev:"var(--col-hjelmslev)", eco:"var(--col-eco)" }[id] || "var(--accent)";
}
function getFiltered() {
  let list = S;
  if (state.filter !== "all") list = list.filter(s => s.f.includes(state.filter));
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(s =>
      tStmt(s,"text").toLowerCase().includes(q) ||
      tStmt(s,"tag").toLowerCase().includes(q) ||
      tStmt(s,"detail").toLowerCase().includes(q));
  }
  return new Set(list.map(s => s.id));
}
function getActiveConns(fids) {
  if (!state.selected) return [];
  return CONNECTIONS.filter(c =>
    (c.f === state.selected || c.t === state.selected) && fids.has(c.f) && fids.has(c.t));
}
function getCS(prop) { return getComputedStyle(document.body).getPropertyValue(prop).trim(); }

// ── Theme ──
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  document.body.className = state.theme;
  // Icons: moon visible in light (action=go dark), sun visible in dark (action=go light)
  document.getElementById("icon-moon").style.display = state.theme === "light" ? "" : "none";
  document.getElementById("icon-sun").style.display = state.theme === "dark" ? "" : "none";
  if (state.selected) renderSheet();
}

// ── Language ──
function toggleLang() {
  state.lang = state.lang === "it" ? "en" : "it";
  document.getElementById("lang-btn").textContent = state.lang === "it" ? "EN" : "IT";
  document.documentElement.lang = state.lang;
  // Rebuild everything
  buildFilters(); buildTabs(); render();
  if (state.selected) renderSheet();
  document.querySelector(".tagline").textContent = t("tagline");
  document.getElementById("search-box").placeholder = t("search");
  document.getElementById("info-btn").textContent = t("guideLabel");
}

// ── Info ──
function toggleInfo() {
  state.showInfo = !state.showInfo;
  document.getElementById("info-panel").classList.toggle("open", state.showInfo);
  if (state.showInfo) document.getElementById("info-body").innerHTML = t("info");
}


// ── Render ──
function render() {
  const fids = getFiltered();
  const conns = getActiveConns(fids);
  const connIds = new Set();
  conns.forEach(c => { connIds.add(c.f); connIds.add(c.t); });

  const visRowMap = {};
  let maxRows = 0;
  AUTHORS.forEach(a => {
    let ri = 0;
    S.filter(s => s.a === a.id).forEach(s => { if (fids.has(s.id)) visRowMap[s.id] = ri++; });
    if (ri > maxRows) maxRows = ri;
  });

  let html = "";
  AUTHORS.forEach(a => {
    const c = acol(a.id);
    const ta = tAuthor(a);
    const vis = isDesktop() || state.activeTab === a.id;
    const avatar = a.img
      ? `<img class="col-avatar" src="${a.img}" alt="${ta.name}" loading="lazy">`
      : `<span class="col-avatar col-avatar-init">${ta.name.charAt(0)}</span>`;
    html += `<div class="col ${vis?"visible":""}" data-author="${a.id}" style="--_c:${c}">
      <div class="col-header">
        ${avatar}
        <div class="col-header-text"><h2>${ta.name} <span class="col-years">${a.years}</span></h2><div class="col-sub">${ta.sub}</div></div>
      </div>`;
    S.filter(s => s.a === a.id).forEach(s => {
      if (!fids.has(s.id)) return;
      const isSel = state.selected === s.id;
      const isConn = state.selected && connIds.has(s.id) && !isSel;
      const connTy = isConn ? conns.find(x => x.f === s.id || x.t === s.id)?.ty : null;
      const dim = state.selected && !isSel && !isConn;
      let cls = "card";
      if (isSel) cls += " selected";
      else if (connTy === "agree") cls += " conn-agree";
      else if (connTy === "disagree") cls += " conn-disagree";
      if (dim) cls += " dimmed";
      const extra = isSel ? `border-color:${c};background:color-mix(in srgb, ${c} 6%, var(--card));` : "";
      const delay = firstRender && visRowMap[s.id] !== undefined ? visRowMap[s.id] * 0.04 : 0;
      const enterCls = firstRender ? " entering" : "";
      html += `<div class="${cls}${enterCls}" data-id="${s.id}" onclick="selectCard('${s.id}')" style="animation-delay:${delay}s;${extra}"
        tabindex="${dim ? -1 : 0}" role="button" aria-pressed="${isSel}"
        aria-label="${tStmt(s,"tag")}: ${tStmt(s,"text")}">
        <div class="card-tag">${tStmt(s,"tag")}${s.diagram ? '<svg class="card-dia-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="1" y="4" width="5" height="8" rx="1" opacity=".5"/><rect x="8" y="1" width="7" height="14" rx="1" opacity=".7"/></svg>' : ''}</div>
        <div class="card-text">${tStmt(s,"text")}</div>
      </div>`;
    });
    html += `</div>`;
  });

  document.getElementById("columns").innerHTML = html;
  if (firstRender) firstRender = false;
  renderLines(fids, conns);
}

function renderLines(fids, conns) {
  const svg = document.getElementById("lines-svg");
  if (!isDesktop() || !state.selected) { svg.innerHTML = ""; return; }
  const wrap = document.getElementById("columns");
  const wrapRect = wrap.getBoundingClientRect();
  const sl = wrap.scrollLeft;
  let paths = "";
  conns.forEach(conn => {
    const fCard = wrap.querySelector(`[data-id="${conn.f}"]`);
    const tCard = wrap.querySelector(`[data-id="${conn.t}"]`);
    if (!fCard || !tCard) return;
    const fr = fCard.getBoundingClientRect(), tr = tCard.getBoundingClientRect();
    const fai = AUTHORS.findIndex(a => a.id === S.find(s => s.id === conn.f).a);
    const tai = AUTHORS.findIndex(a => a.id === S.find(s => s.id === conn.t).a);
    const same = fai === tai;
    const fx = fr.left - wrapRect.left + sl + (same ? 0 : fai < tai ? fr.width : 0);
    const fy = fr.top - wrapRect.top + fr.height/2;
    const tx = tr.left - wrapRect.left + sl + (same ? 0 : tai < fai ? tr.width : 0);
    const ty = tr.top - wrapRect.top + tr.height/2;
    const color = conn.ty === "agree" ? "var(--green)" : "var(--red)";
    const dash = conn.ty === "disagree" ? 'stroke-dasharray="7,4"' : '';
    const mx = (fx + tx) / 2;
    const off = same ? -80 : 0;
    paths += `<path d="M${fx},${fy} C${same?fx+off:mx},${fy} ${same?tx+off:mx},${ty} ${tx},${ty}" fill="none" stroke="${color}" stroke-width="1.8" opacity="0.55" ${dash} class="conn-line"/>`;
  });
  const sw = wrap.scrollWidth, sh = wrap.scrollHeight;
  svg.setAttribute("width", sw); svg.setAttribute("height", sh);
  svg.style.width = sw + "px"; svg.style.height = sh + "px";
  syncLineScroll();
  svg.innerHTML = paths;
}
function syncLineScroll() {
  const svg = document.getElementById("lines-svg");
  const sl = document.getElementById("columns").scrollLeft;
  if (svg) svg.style.transform = `translateX(${-sl}px)`;
}

// ── Selection ──
let _lastFocusedCard = null;
function selectCard(id) {
  if (state.selected === id) { deselect(); return; }
  _lastFocusedCard = document.activeElement;
  state.selected = id;
  render(); renderSheet();
  document.getElementById("sheet").classList.add("open");
  document.getElementById("main").classList.add("sheet-open");
  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  // Move focus to close button so keyboard users can dismiss immediately
  const closeBtn = document.getElementById("sheet-close-btn");
  if (closeBtn) closeBtn.focus({ preventScroll: true });
}
function deselect() {
  state.selected = null;
  document.getElementById("sheet").classList.remove("open");
  document.getElementById("main").classList.remove("sheet-open");
  render();
  // Restore focus to the card that opened the sheet
  if (_lastFocusedCard) {
    const restored = document.querySelector(`[data-id="${_lastFocusedCard.dataset?.id}"]`);
    if (restored) restored.focus({ preventScroll: true });
    _lastFocusedCard = null;
  }
}
function navigateTo(id) {
  const s = S.find(x => x.id === id);
  if (!s) return;
  if (!isDesktop() && state.activeTab !== s.a) { state.activeTab = s.a; updateTabs(); }
  selectCard(id);
}

// ── Sheet ──
function renderSheet() {
  const s = S.find(x => x.id === state.selected);
  if (!s) return;
  const a = AUTHORS.find(x => x.id === s.a);
  const c = acol(s.a);
  const ta = tAuthor(a);
  const fids = getFiltered();
  const conns = getActiveConns(fids);

  document.getElementById("s-author").style.color = c;
  document.getElementById("s-author").textContent = ta.name;
  const tag = document.getElementById("s-tag");
  tag.style.background = `color-mix(in srgb, ${c} 10%, transparent)`;
  tag.style.color = c;
  tag.textContent = tStmt(s, "tag");
  document.getElementById("s-text").textContent = tStmt(s, "text");
  document.getElementById("s-body").innerHTML = tStmt(s, "detail");
  document.getElementById("sheet").style.borderTopColor = c;

  // Diagram — adapt to theme
  const dEl = document.getElementById("s-diagram");
  if (s.diagram && DIAGRAMS[s.diagram]) {
    let svg = DIAGRAMS[s.diagram];
    if (state.theme === "light") {
      svg = svg.replace(/fill="#e8eaf0"/g, `fill="${getCS("--dia-text")}"`)
        .replace(/fill="#a0a6b8"/g, `fill="${getCS("--dia-sec")}"`)
        .replace(/fill="#5c6278"/g, `fill="${getCS("--dia-dim")}"`)
        .replace(/fill="#1a1e2a"/g, `fill="${getCS("--dia-card")}"`)
        .replace(/#60a5fa/g, getCS("--col-saussure")).replace(/#f87171/g, getCS("--col-peirce"))
        .replace(/#a78bfa/g, getCS("--col-hjelmslev")).replace(/#34d399/g, getCS("--col-eco"))
        .replace(/#94a3b8/g, getCS("--col-precursors"));
    }
    dEl.innerHTML = svg;
  } else dEl.innerHTML = "";

  const label = document.getElementById("s-conns-label");
  const chipsEl = document.getElementById("s-conns");
  if (conns.length) {
    label.textContent = `${t("connsLabel")} (${conns.length})`;
    chipsEl.innerHTML = conns.map(conn => {
      const oid = conn.f === state.selected ? conn.t : conn.f;
      const o = S.find(x => x.id === oid);
      const oa = AUTHORS.find(x => x.id === o.a);
      return `<button class="chip ${conn.ty}" onclick="navigateTo('${oid}')">
        <span class="c-sign">${conn.ty === "agree" ? "+" : "−"}</span>
        <span class="c-author" style="color:${acol(o.a)}">${tAuthor(oa).name}</span>
        ${tStmt(o, "tag")}
      </button>`;
    }).join("");
  } else { label.textContent = ""; chipsEl.innerHTML = ""; }
}

// ── Filters ──
function setFilter(id) {
  state.filter = id; state.selected = null;
  document.getElementById("sheet").classList.remove("open");
  document.getElementById("main").classList.remove("sheet-open");
  document.querySelectorAll(".f-btn").forEach(b => b.classList.toggle("active", b.dataset.fid === id));
  render();
}
function onSearch(val) {
  state.search = val; state.selected = null;
  document.getElementById("sheet").classList.remove("open");
  document.getElementById("main").classList.remove("sheet-open");
  render();
}

// ── Tabs ──
function setTab(aid) { state.activeTab = aid; updateTabs(); render(); }
function updateTabs() {
  document.querySelectorAll(".a-tab").forEach(t => t.classList.toggle("active", t.dataset.aid === state.activeTab));
}

// ── Build UI ──
function buildFilters() {
  document.getElementById("filters").innerHTML = FILTERS.map(f =>
    `<button class="f-btn ${f.id === state.filter ? "active" : ""}" data-fid="${f.id}" onclick="setFilter('${f.id}')">${tFilter(f.id)}</button>`
  ).join("");
}
function buildTabs() {
  document.getElementById("author-tabs").innerHTML = AUTHORS.map(a => {
    const ta = tAuthor(a);
    return `<button class="a-tab ${a.id === state.activeTab ? "active" : ""}" data-aid="${a.id}" style="--_c:${acol(a.id)}" onclick="setTab('${a.id}')">${ta.name}</button>`;
  }).join("");
}

// ── Controls ──
let _lineRaf = 0;
function updateLines() {
  if (!state.selected || !isDesktop()) return;
  syncLineScroll();
}
function initControls() {
  const wrap = document.getElementById("columns");
  wrap.addEventListener("scroll", updateLines);
  window.addEventListener("scroll", updateLines, { passive: true });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (state.showInfo) toggleInfo(); else deselect(); }
    // Cards: Enter/Space activates like a click (WAI-ARIA button pattern)
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) {
      e.preventDefault();
      const id = e.target.dataset.id;
      if (id) selectCard(id);
    }
  });
  // Click outside sheet to close
  document.addEventListener("mousedown", e => {
    if (!state.selected) return;
    const sheet = document.getElementById("sheet");
    if (sheet.contains(e.target)) return;
    if (e.target.closest(".card")) return;
    deselect();
  });
  let rto;
  window.addEventListener("resize", () => { clearTimeout(rto); rto = setTimeout(() => render(), 150); });
}

// ── Init ──
function init() {
  document.documentElement.lang = state.lang;
  buildFilters(); buildTabs(); initControls(); render();
}
document.addEventListener("DOMContentLoaded", init);
