---
layout: default
title: Question Generator
description: Generate free primary, secondary and GCSE maths practice questions with answers, covering number, algebra, statistics and more. View on screen or print.
permalink: /question-generator/
body_class: has-bottom-bar
---
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');

:root {
  --blue: #1c75bc;
  --blue-dark: #155f99;
  --green: #009444;
  --green-dark: #007a38;
  --purple: #800080;
  --purple-dark: #660066;
  --orange: #f7941e;
  --orange-dark: #d47c10;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'DM Sans', sans-serif; background: #f5f6f8; color: #111827; font-size: 16px; min-height: 100vh; display: flex; flex-direction: column; }
html, body { overflow-x: hidden; overflow-x: clip; }  
main { flex: 1; }
[id] { scroll-margin-top: 20px; }

/* ── BODY / PAGE HERO (matches main.scss conventions) ── */
.om-body { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem 4rem; }
.page-hero { background: #0f1120; padding: 4rem 2rem 0; text-align: center; }
.page-hero h1 { font-size: 46px; font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 1rem; }
.page-hero h1 em { font-style: normal; color: var(--orange); }
.page-hero p { font-size: 17px; font-weight: 300; color: #9ca3af; max-width: 580px; margin: 0 auto 0.2rem; line-height: 1.6; }
.page-hero::after { content: ""; display: block; height: 3rem; width: 100%; }

/* ── QUESTION GENERATOR — page-specific styles ── */

.qg-controls { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 1.5rem; margin-bottom: 2rem; }
.qg-controls-top { margin-bottom: 1.5rem; }


.qg-pill-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; width: 100%; }
.qg-pill {
  display: inline-flex; align-items: center; justify-content: center;
  border: 2px solid transparent; color: #fff;
  font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 700;
  padding: 11px 14px; border-radius: 8px; cursor: pointer;
  transition: background 0.12s, border-color 0.12s;
}
.qg-pill.number      { background: var(--blue);   border-color: var(--blue); }
.qg-pill.number:hover      { background: var(--blue-dark);   border-color: var(--blue-dark); }
.qg-pill.algebra     { background: var(--green);  border-color: var(--green); }
.qg-pill.algebra:hover     { background: var(--green-dark);  border-color: var(--green-dark); }
.qg-pill.statistics  { background: var(--purple); border-color: var(--purple); }
.qg-pill.statistics:hover  { background: var(--purple-dark); border-color: var(--purple-dark); }
.qg-pill.geometry    { background: var(--orange); border-color: var(--orange); }
.qg-pill.geometry:hover    { background: var(--orange-dark); border-color: var(--orange-dark); }

.qg-strands { display: flex; flex-direction: column; gap: 1rem; }
.qg-strand { border-radius: 10px; overflow: hidden; background: #fff; }
#qg-strand-number { border: 3px solid var(--blue); }
#qg-strand-algebra { border: 3px solid var(--green); }
#qg-strand-statistics { border: 3px solid var(--purple); }
#qg-strand-geometry { border: 3px solid var(--orange); }
.qg-strand-header { display: flex; align-items: center; padding: 0.7rem 1.1rem; border-bottom: 1px solid #e5e7eb; background: #fafafa; }
.qg-strand-name { font-weight: 700; font-size: 15px; color: #111827; display: flex; align-items: center; gap: 0.55rem; }
.qg-strand-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.qg-strand-body { padding: 0.8rem 1.1rem; display: flex; flex-direction: column; gap: 0.9rem; }
.qg-subsection-label { font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; }
.qg-chip-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }

.qg-chip { padding: 6px 14px; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; border: 1.5px solid transparent; cursor: pointer; transition: background 0.12s, color 0.12s; background: #f3f4f6; color: #374151; min-height: 48px; display: flex; align-items: center; justify-content: center; text-align: center; }
.qg-chip.selected { color: #fff; }
.qg-chip.selected.number  { background: var(--blue); }
.qg-chip.selected.algebra { background: var(--green); }
.qg-chip.selected.statistics { background: var(--purple); }
.qg-chip:not(.selected):hover { background: #e5e7eb; }
.qg-chip.number:not(.selected):hover { background: #eaf2fb; border-color: var(--blue); color: var(--blue); }
.qg-chip.algebra:not(.selected):hover { background: #eaf8f0; border-color: var(--green); color: var(--green); }
.qg-chip.statistics:not(.selected):hover { background: #f8eafa; border-color: var(--purple); color: var(--purple); }
.qg-chip.selected.geometry { background: var(--orange); }
.qg-chip.geometry:not(.selected):hover { background: #fef3e2; border-color: var(--orange); color: var(--orange); }
.qg-diagram { margin: 0.4rem 0 0.2rem 1.8rem; line-height: 0; }
.qg-diagram svg { max-width: 100%; height: auto; }
@media print {
  .qg-diagram { break-inside: avoid; }
  .qg-diagram svg { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
}

/* ── SEARCH, STRAND BUTTONS, ANSWERS TICK BOX ── */
.qg-controls [hidden] { display: none !important; }
.qg-root-tall { position: relative; padding-left: 0.75em; }
.qg-radical { position: absolute; left: 0; top: 0; width: 0.75em; height: 100%; overflow: visible; }
.qg-radical path { fill: none; stroke: currentColor; stroke-width: 1.4px; vector-effect: non-scaling-stroke; stroke-linejoin: miter; stroke-linecap: butt; }
.qg-root-tall .qg-root-radicand { display: flex; align-items: center; padding-top: 0.2em; padding-bottom: 0.05em; line-height: 1; }
.qg-root-tall .qg-frac { top: 0; margin: 0 1px; }
.qg-root-tall .qg-root-radicand::before { top: 0; left: -1px; }
.qg-search { position: relative; margin-bottom: 1.5rem; }
.qg-search-input { width: 100%; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 400; padding: 11px 40px 11px 14px; border: 1.5px solid #e5e7eb; border-radius: 8px; background: #fff; color: #111827; }
.qg-search-input:focus { outline: none; border-color: #6b7280; }
.qg-search-clear { position: absolute; right: 4px; top: 0; bottom: 0; width: 36px; border: none; background: none; color: #6b7280; font-size: 0.95rem; cursor: pointer; }
.qg-search-clear:hover { color: #111827; }
.qg-no-results { padding: 1.25rem; text-align: center; color: #6b7280; font-size: 14px; }
.qg-subsection { border-top: 1px solid #e9ebef; padding-top: 0.9rem; }
.qg-subsection.qg-first { border-top: none; padding-top: 0; }
.qg-topic-head { display: flex; align-items: flex-start; justify-content: space-between; padding-right: 17px; }
.qg-topic-head .qg-topic-label { display: inline-flex; align-items: center; box-sizing: border-box; height: 24px; padding-top: 0; padding-bottom: 0; }
#qg-toggle-all-btn { width: 130px; height: 24px; box-sizing: border-box; padding: 0 11px; font-size: 12px; line-height: 1; background: #f9fafb; border-color: #000000; border-radius: 5px; }
#qg-toggle-all-btn:hover { background: #f3f4f6; }
.qg-check { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; color: #374151; cursor: pointer; white-space: nowrap; }
.qg-check input { width: 16px; height: 16px; cursor: pointer; }

/* ── STICKY GENERATE BAR (matches the builder bar on the SATs and GCSE question banks) ── */
body { transition: padding-bottom 0.2s ease; }
.qg-bar { display: none; position: sticky; bottom: 0; z-index: 30; background: #0f1120; color: #fff; padding: 14px 0 calc(14px + env(safe-area-inset-bottom, 0px)); box-shadow: 0 -6px 20px rgba(0,0,0,0.15); }
.qg-bar.show { display: block; animation: qgBarIn 0.25s ease; }
@keyframes qgBarIn { from { transform: translateY(100%); } to { transform: translateY(0); } }
.qg-bar-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.qg-bar-left { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.qg-bar-info { font-size: 14px; font-weight: 400; }
.qg-bar-info strong { color: var(--orange); font-weight: 700; }
.qg-bar-btn { font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700; border-radius: 8px; padding: 10px 16px; cursor: pointer; border: 1px solid transparent; transition: background 0.12s, border-color 0.12s; }
.qg-bar-btn-primary { background: var(--orange); border-color: var(--orange); color: #0f1120; padding-left: 26px; padding-right: 26px; white-space: nowrap; }
@media (min-width: 601px) { .qg-bar-btn-primary { width: 190px; padding-left: 8px; padding-right: 8px; } }
.qg-bar-btn-primary:hover { background: var(--orange-dark); border-color: var(--orange-dark); }
.qg-bar-btn-ghost { background: transparent; color: #fff; border-color: #454863; }
.qg-bar-btn-ghost:hover { background: #1c1e33; }
.qg-bar-right { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.qg-bar-qcount { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 400; cursor: pointer; }
.qg-bar-select { font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 400; padding: 9px 12px; border: 1px solid #454863; border-radius: 8px; background: #1c1e33; color: #fff; cursor: pointer; }
.qg-bar-select:focus { outline: none; }
.qg-bar-label-short { display: none; }

#qg-output { display: none; }
.qg-out-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem; }
.qg-out-title { font-size: 18px; font-weight: 700; color: #111827; }
.qg-out-actions { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.qg-btn-outline { display: inline-flex; align-items: center; justify-content: center; gap: 5px; background: #fff; border: 1.5px solid #e5e7eb; color: #374151; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; padding: 8px 14px; border-radius: 6px; cursor: pointer; transition: background 0.12s; text-align: center; }
.qg-btn-outline:hover { background: #f3f4f6; }

.qg-topic-block { margin-bottom: 1.75rem; }
.qg-topic-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 6px; display: inline-block; margin-bottom: 0.75rem; color: #fff; }
.qg-q-list { display: flex; flex-direction: column; gap: 8px; }
.qg-q-item { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; display: flex; align-items: flex-start; gap: 16px; }
.qg-q-num { font-weight: 700; color: #d1d5db; font-size: 14px; min-width: 22px; padding-top: 1px; }
.qg-q-main { flex: 1; display: flex; flex-direction: column; gap: 6px; }
.qg-q-text { font-size: 15px; color: #111827; line-height: 1.6; }
.qg-q-right { display: flex; align-items: center; }

/* Maths notation rendering */
.qg-frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; font-size: 0.85em; line-height: 1; position: relative; top: 0.1em; }
.qg-frac-num { padding: 0 3px 1px; border-bottom: 1.4px solid currentColor; }
.qg-frac-den { padding: 1px 3px 0; }
.qg-q-text sup, .qg-answer sup { font-size: 0.7em; position: relative; top: -0.5em; }
.qg-frac-num sup { font-size: 0.7em; position: relative; top: -0.4em; }
.qg-frac-den sup { font-size: 0.7em; position: relative; top: 0.1em; }
.qg-dot { position: relative; display: inline-block; padding-top: 0.28em; }
.qg-dot::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 3px; height: 3px; border-radius: 50%; background: currentColor; }
.qg-x { font-style: italic; font-family: Georgia, 'Times New Roman', serif; }
.qg-l { font-family: "Times New Roman", "Liberation Serif", serif; font-style: normal; }
.qg-root { display: inline-flex; align-items: flex-start; vertical-align: middle; margin: 0 2px; line-height: 1; }
.qg-root-symbol { font-family: "Times New Roman", "Liberation Serif", serif; font-size: 1.15em; line-height: 1; margin-right: 1px; }
.qg-root-index { font-family: "Times New Roman", "Liberation Serif", serif; font-size: 0.55em; line-height: 1; position: relative; top: -0.05em; margin-right: 0.5px; }

.qg-root-radicand {
  display: inline-block;
  position: relative;
  padding: 0 2px 0 1px;
  line-height: 1.15;
}

.qg-root-radicand::before {
  content: "";
  position: absolute;
  left: -1.5px;
  right: 2px;
  top: -0.15em;
  border-top: 1.4px solid currentColor;
}

/* Working space (printed worksheet mode) — all layout rules scoped to @media print below, so screen view never changes */
.qg-working-space { display: none; }
.qg-show-btn { display: inline-flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 700; padding: 0 11px; border-radius: 5px; border: 1.5px solid #e5e7eb; background: #f9fafb; color: #374151; cursor: pointer; white-space: nowrap; width: 130px; height: 24px; box-sizing: border-box; text-align: center; line-height: 1; }
.qg-show-btn:hover { background: #f3f4f6; }
.qg-answer { font-size: 15px; font-weight: 700; color: var(--green-dark); display: none; text-align: left; }
.qg-answer.vis { display: block; }

/* Answer page — print only, forced onto its own page */
.qg-answer-page { display: none; }
.qg-answer-page-title { font-size: 26px; font-weight: 700; color: #111827; margin-bottom: 1.25rem; }
.qg-ans-topic { margin-bottom: 1.5rem; }
.qg-ans-topic-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 6px; display: inline-block; margin-bottom: 0.6rem; color: #fff; }
.qg-ans-page-list { display: flex; flex-direction: column; gap: 4px; }
.qg-ans-page-row { display: flex; gap: 10px; font-size: 14px; color: #111827; }
.qg-ans-page-num { font-weight: 700; color: #6b7280; min-width: 22px; }

@page {
  margin: 17mm;
  @bottom-right {
    content: "\00a9  Operation Maths";
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 700;
    color: #6b7280;
  }
}

@media print {
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
  .om-nav, .om-nav-drawer, .om-footer, .page-hero, .qg-controls, .qg-bar, .qg-out-actions, #qg-toggle-all-btn, .qg-out-title, .qg-show-btn { display: none !important; }
  body { background: #fff !important; display: block !important; padding-bottom: 0 !important; }
  .om-body { padding: 0; max-width: 100%; }
  .qg-q-right { display: none !important; }
  .qg-answer { display: none !important; }
  .qg-q-item { border: none; border-radius: 0; break-inside: avoid; padding: 10px 0; }
  .qg-q-list { gap: 0; }
  .qg-topic-block { break-inside: avoid; }
  .qg-answer-page { display: none !important; }
  .qg-print-answers .qg-answer-page { display: block !important; break-before: page; }

  /* Simple page border around the whole printed output, with credit line at the end */
  #qg-output { padding: 0; }

  /* Working-space (worksheet) layout — scoped entirely to print, never affects screen view */
  .qg-print-working .qg-topic-label {
    margin-bottom: 1rem;
  }
  .qg-print-working .qg-q-list { gap: 0; }
  .qg-print-working .qg-q-item {
    border: 1.5px solid #111827;
    border-radius: 0;
    padding: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    min-height: 110px;
    margin-top: -1.5px;
  }
  .qg-print-working .qg-q-list > .qg-q-item:first-child { margin-top: 0; }
  .qg-print-working .qg-q-num { display: none; }
  .qg-print-working .qg-q-text { padding: 10px 14px; font-size: 15px; flex: 0 0 auto; }
  .qg-print-working .qg-working-space { display: block !important; flex: 1; }
}

@media (max-width: 900px) {
  .om-nav-links { display: none; }
  .om-nav-hamburger { display: flex; }
  .page-hero h1 { font-size: 38px; }
}

@media (max-width: 600px) {
  .page-hero { padding: 3rem 1.5rem 0; }
  .page-hero h1 { font-size: 28px; }
  .page-hero p { font-size: 15px; }
  .qg-q-item { flex-wrap: wrap; }
  .qg-q-right { flex-direction: row; align-items: center; min-width: unset; width: 100%; justify-content: flex-start; }
  .qg-chip-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .qg-chip { min-height: 84px; font-size: 12px; }
  .qg-subsection-label { font-size: 10px; }

  /* Generate bar: summary on the first row, Clear and Generate on the second */
  .qg-pill-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .qg-bar-inner { padding: 0 1rem; display: grid; grid-template-columns: 1fr auto; gap: 10px; }
  .qg-bar-left, .qg-bar-right { display: contents; }
  .qg-bar-info { grid-column: 1 / -1; grid-row: 1; text-align: center; font-size: 13px; }
  .qg-bar-qcount { grid-column: 1; grid-row: 2; }
  .qg-bar-select { flex: 1; min-width: 0; }
  .qg-bar-label-full { display: none; }
  .qg-bar-label-short { display: inline; }
  .qg-bar-btn-ghost { grid-column: 2; grid-row: 2; }
  .qg-bar-btn-primary { grid-column: 1 / -1; grid-row: 3; }
}
</style>  
<section class="page-hero">
  <h1>Question <em>generator</em></h1>
  <p>Select topics and generate questions, with answers included.</p>
  <p>View on screen or print.</p>
</section>
<div class="om-body">
  <div class="qg-controls">
    <div class="qg-controls-top">
      <div class="qg-pill-row">
        <button type="button" class="qg-pill number" onclick="qgScrollToStrand('number')">Number</button>
        <button type="button" class="qg-pill algebra" onclick="qgScrollToStrand('algebra')">Algebra</button>
        <button type="button" class="qg-pill statistics" onclick="qgScrollToStrand('statistics')">Statistics</button>
        <button type="button" class="qg-pill geometry" onclick="qgScrollToStrand('geometry')">Geometry</button>
      </div>
    </div>
    <div class="qg-search">
      <input type="text" id="qg-search" class="qg-search-input" placeholder="Search topics, for example fractions or quadratics" autocomplete="off" aria-label="Search topics">
      <button type="button" class="qg-search-clear" id="qg-search-clear" aria-label="Clear search" hidden>✕</button>
    </div>

    <div class="qg-strands" id="qg-strands"></div>
    <div class="qg-no-results" id="qg-no-results" hidden>No topics match your search.</div>

</div>
<div id="qg-output"></div>
</div>
<div class="qg-bar" id="qg-bar" role="region" aria-label="Generate questions">
  <div class="qg-bar-inner">
    <div class="qg-bar-left">
      <button type="button" class="qg-bar-btn qg-bar-btn-ghost" onclick="qgClearSelection()">Clear selection</button>
      <div class="qg-bar-info" id="qg-bar-info" aria-live="polite"></div>
    </div>
    <div class="qg-bar-right">
      <label class="qg-bar-qcount" for="qg-qcount">
        <span class="qg-bar-label-full">Questions per topic</span><span class="qg-bar-label-short">Per topic</span>
        <select id="qg-qcount" class="qg-bar-select">
          <option value="1">1 question</option>
          <option value="2" selected>2 questions</option>
          <option value="3">3 questions</option>
          <option value="4">4 questions</option>
          <option value="5">5 questions</option>
        </select>
      </label>
      <button type="button" id="qg-gen-btn" class="qg-bar-btn qg-bar-btn-primary" onclick="qgGenerate()">Generate questions</button>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/question-generator-core.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
<script>
{% raw %}
document.addEventListener('click', function(e) {
  if (!e.target.closest('.om-nav-dropdown')) {
    document.querySelectorAll('.om-dropdown-menu').forEach(m => m.classList.remove('open'));
  }
});

/* ── QUESTION BANK ── */
function qgAllTopics(strand) {
  return strand.subsections.flatMap(s => s.topics);
}

// Master list of every topic in the order it appears on the page (strand by strand, subsection by subsection)
const QG_PAGE_ORDER = QG_STRANDS.flatMap(strand => qgAllTopics(strand));

function qgSelectedInPageOrder() {
  return QG_PAGE_ORDER.filter(topic => qgSelected.has(topic));
}

let qgSelected = new Set();
let qgIncludeAnswers = false;

function qgChipId(topic) { return 'qg-chip-' + topic.toLowerCase().replace(/[^a-z0-9]/g, '-'); }

function qgScrollToStrand(strandId) {
  const el = document.getElementById('qg-strand-' + strandId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function qgBuildStrands() {
  const container = document.getElementById('qg-strands');
  container.innerHTML = QG_STRANDS.map(strand => `
    <div class="qg-strand" id="qg-strand-${strand.id}">
      <div class="qg-strand-header">
        <span class="qg-strand-name"><span class="qg-strand-dot" style="background:${strand.dotColor}"></span>${strand.name}</span>
      </div>
      <div class="qg-strand-body">
        ${strand.subsections.map((sub, si) => `
          <div class="qg-subsection${si === 0 ? ' qg-first' : ''}" data-label="${sub.label || ''}">
            ${sub.label ? `<div class="qg-subsection-label">${sub.label}</div>` : ''}
            <div class="qg-chip-row">
              ${sub.topics.map(t => `<button class="qg-chip ${strand.id}" id="${qgChipId(t)}" onclick="qgToggleChip('${t.replace(/'/g, "\\'")}')">${t}</button>`).join('')}
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');
  qgUpdateSummary();
}

function qgToggleChip(topic) {
  const btn = document.getElementById(qgChipId(topic));
  if (qgSelected.has(topic)) { qgSelected.delete(topic); btn.classList.remove('selected'); }
  else { qgSelected.add(topic); btn.classList.add('selected'); }
  qgUpdateSummary();
}

document.getElementById('qg-qcount').addEventListener('change', qgUpdateSummary);

function qgUpdateSummary() {
  const n = qgSelected.size;
  const qcount = parseInt(document.getElementById('qg-qcount').value);
  const total = n * qcount;
  document.getElementById('qg-bar-info').innerHTML =
    '<strong>' + n + '</strong> topic' + (n === 1 ? '' : 's') + ' selected &nbsp;·&nbsp; ' +
    '<strong>' + total + '</strong> question' + (total === 1 ? '' : 's') + ' total';
  document.getElementById('qg-bar').classList.toggle('show', n > 0);
}
// The bar is position:sticky, so it follows the bottom of the screen while scrolling and
// settles above the footer at the end of the page. It needs no padding on the page.

function qgClearSelection() {
  qgSelected.forEach(topic => {
    const btn = document.getElementById(qgChipId(topic));
    if (btn) btn.classList.remove('selected');
  });
  qgSelected.clear();
  qgUpdateSummary();

  // Also remove any generated questions and take the user back to the topics
  const out = document.getElementById('qg-output');
  if (out.style.display === 'block') {
    out.innerHTML = '';
    out.style.display = 'none';
    document.getElementById('qg-gen-btn').textContent = 'Generate questions';
    document.querySelector('.qg-controls').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Search: every word typed must appear in the topic name or its sub-heading
function qgFilterTopics() {
  const words = document.getElementById('qg-search').value.toLowerCase().split(/\s+/).filter(Boolean);
  document.getElementById('qg-search-clear').hidden = words.length === 0;
  let anyVisible = false;
  document.querySelectorAll('.qg-strand').forEach(strandEl => {
    let strandHas = false;
    strandEl.querySelectorAll('.qg-subsection').forEach(subEl => {
      const label = (subEl.dataset.label || '').toLowerCase();
      let subHas = false;
      subEl.querySelectorAll('.qg-chip').forEach(chip => {
        const hay = label + ' ' + chip.textContent.toLowerCase();
        const match = words.every(w => hay.includes(w));
        chip.hidden = !match;
        if (match) subHas = true;
      });
      subEl.hidden = !subHas;
      subEl.classList.toggle('qg-first', subHas && !strandHas);
      if (subHas) strandHas = true;
    });
    strandEl.hidden = !strandHas;
    if (strandHas) anyVisible = true;
  });
  document.getElementById('qg-no-results').hidden = anyVisible;
}
function qgClearSearch() {
  const input = document.getElementById('qg-search');
  input.value = '';
  qgFilterTopics();
  input.focus();
}
document.getElementById('qg-search').addEventListener('input', qgFilterTopics);
document.getElementById('qg-search').addEventListener('keydown', e => { if (e.key === 'Escape') qgClearSearch(); });
document.getElementById('qg-search-clear').addEventListener('click', qgClearSearch);
if (window.matchMedia) {
  const qgMq = window.matchMedia('(max-width: 600px)');
  const qgSetPlaceholder = () => { document.getElementById('qg-search').placeholder = qgMq.matches ? 'Search topics' : 'Search topics, for example fractions or quadratics'; };
  qgSetPlaceholder();
  qgMq.addEventListener('change', qgSetPlaceholder);
}

function qgGenerate() {
  if (qgSelected.size === 0) { alert('Please select at least one topic.'); return; }

  const qcount = parseInt(document.getElementById('qg-qcount').value);
  const topicStrandMap = {};
  QG_STRANDS.forEach(strand => qgAllTopics(strand).forEach(t => { topicStrandMap[t] = strand; }));

  let html = `
    <div class="qg-out-header">
      <span class="qg-out-title">Generated questions</span>
      <div class="qg-out-actions">
        <label class="qg-check"><input type="checkbox" onchange="qgIncludeAnswers = this.checked" ${qgIncludeAnswers ? 'checked' : ''}>Include answers</label>
        <button class="btn btn-green" onclick="qgPrint(false)">Print worksheet</button>
        <button class="btn btn-blue" onclick="qgPrint(true)">Print with working space</button>
      </div>
    </div>`;

  let answerListHtml = '';
  let n = 0;
  qgSelectedInPageOrder().forEach(topic => {
    const strand = topicStrandMap[topic];
    const bank = QG_BANK[topic] || [];
    const picked = qgShuffle(bank).slice(0, Math.min(qcount, bank.length));

    const toggleBtn = n === 0 ? `<button class="qg-btn-outline" id="qg-toggle-all-btn" onclick="qgToggleAllAnswers()">Show all answers</button>` : '';
    html += `<div class="qg-topic-block"><div class="qg-topic-head"><span class="qg-topic-label" style="background:${strand.dotColor}">${topic}</span>${toggleBtn}</div><div class="qg-q-list">`;
    answerListHtml += `<div class="qg-ans-topic"><span class="qg-ans-topic-label" style="background:${strand.dotColor}">${topic}</span><div class="qg-ans-page-list">`;

    picked.forEach(item => {
      n++;
      const uid = 'qg-ans-' + n;
      const diagHtml = item.diagram ? `<div class="qg-diagram">${item.diagram}</div>` : '';
      html += `<div class="qg-q-item">
        <span class="qg-q-num">${n}.</span>
        <div class="qg-q-main">
          <span class="qg-q-text">${qgFormatMaths(item.q)}</span>
          ${diagHtml}
          <span class="qg-answer" id="${uid}">${qgFormatMaths(item.a)}</span>
        </div>
        <div class="qg-q-right">
          <button class="qg-show-btn" onclick="qgToggleAnswer('${uid}', this)">Show answer</button>
        </div>
        <div class="qg-working-space"></div>
      </div>`;

      answerListHtml += `<div class="qg-ans-page-row">
        <span class="qg-ans-page-num">${n}.</span>
        <span class="qg-ans-page-text">${qgFormatMaths(item.a)}</span>
      </div>`;
    });

    html += `</div></div>`;
    answerListHtml += `</div></div>`;
  });

  html += `<div class="qg-answer-page">
    <h2 class="qg-answer-page-title">Answers</h2>
    ${answerListHtml}
  </div>`;

  const out = document.getElementById('qg-output');
  out.innerHTML = html;
  out.style.display = 'block';
  out.classList.remove('qg-print-working');
  document.getElementById('qg-gen-btn').textContent = 'Generate new questions';
  out.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function qgPrint(withWorking) {
  const out = document.getElementById('qg-output');
  out.classList.toggle('qg-print-working', withWorking);
  out.classList.toggle('qg-print-answers', qgIncludeAnswers);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => window.print());
  });
}

function qgToggleAnswer(uid, btn) {
  const visible = document.getElementById(uid).classList.toggle('vis');
  btn.textContent = visible ? 'Hide answer' : 'Show answer';
  qgSyncToggleAllLabel();
}

function qgToggleAllAnswers() {
  const answers = document.querySelectorAll('.qg-answer');
  const allVisible = Array.from(answers).every(e => e.classList.contains('vis'));
  answers.forEach(e => e.classList.toggle('vis', !allVisible));
  document.querySelectorAll('.qg-show-btn').forEach(b => b.textContent = allVisible ? 'Show answer' : 'Hide answer');
  qgSyncToggleAllLabel(!allVisible);
}

function qgSyncToggleAllLabel(forceState) {
  const btn = document.getElementById('qg-toggle-all-btn');
  if (!btn) return;
  const answers = document.querySelectorAll('.qg-answer');
  const allVisible = forceState !== undefined ? forceState : (answers.length > 0 && Array.from(answers).every(e => e.classList.contains('vis')));
  btn.textContent = allVisible ? 'Hide all answers' : 'Show all answers';
}

qgBuildStrands();
{% endraw %}
</script>
