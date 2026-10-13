/* Topic pages (layout: topic-page). One script for every /gcse/<topic>/ page.
   Reads the topic's settings from #tp-config, then:
   - B  fills the question generator rows from QG_BANK (assets/js/qg-core.js)
   - D  fills the past question cards from QUESTIONS (assets/js/gcse-question-core.js)
   - removes a section that has no questions and re-letters the others
   - runs the question viewer and the printing */
(function () {
  'use strict';

  var cfgEl = document.getElementById('tp-config');
  var cfg = {};
  try { cfg = JSON.parse(cfgEl.textContent) || {}; } catch (e) { cfg = {}; }

  /* The shared question helpers read a global called state (the bank page keeps filters there).
     On a topic page there are no filters, so questions always show as they do in the bank's "all" view. */
  window.state = { tier: 'all' };

  /* ---------- small helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function shuffled(arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* ---------- letters: A, B, C... follow whichever sections are on the page ---------- */
  var LETTERS = 'ABCDEFGH';
  function relabel() {
    var secs = document.querySelectorAll('#tp-page .tp-sec[data-tp]');
    Array.prototype.forEach.call(secs, function (sec, i) {
      var key = sec.getAttribute('data-tp');
      var l = sec.querySelector('.tp-letter');
      if (l) l.textContent = LETTERS.charAt(i);
      var pill = document.querySelector('.tp-pill[data-tp="' + key + '"] .tp-lt');
      if (pill) pill.textContent = LETTERS.charAt(i);
    });
  }
  function removeSection(key) {
    var sec = document.querySelector('#tp-page .tp-sec[data-tp="' + key + '"]');
    var pill = document.querySelector('.tp-pill[data-tp="' + key + '"]');
    if (sec) sec.parentNode.removeChild(sec);
    if (pill) pill.parentNode.removeChild(pill);
    relabel();
  }

  /* ================= B: QUESTION GENERATOR ================= */
  var genPicks = [], genShown = {};
  function genPool() {
    var pool = [];
    (cfg.generator || []).forEach(function (topic) {
      ((typeof QG_BANK !== 'undefined' && QG_BANK[topic]) || []).forEach(function (item) { pool.push(item); });
    });
    return pool;
  }
  function genAllShown() {
    return genPicks.length > 0 && genPicks.every(function (p, i) { return genShown[i]; });
  }
  function genRender() {
    var box = $('tp-qlist');
    box.textContent = '';
    genPicks.forEach(function (item, i) {
      var row = el('div', 'tp-qitem');
      row.appendChild(el('span', 'tp-qnum', (i + 1) + '.'));
      var main = el('div', 'tp-qmain');
      main.appendChild(el('span', 'tp-qtext', qgFormatMaths(item.q)));
      if (item.diagram) main.appendChild(el('div', 'qg-diagram', item.diagram));
      var ans = el('span', 'tp-qans', qgFormatMaths(item.a));
      ans.hidden = !genShown[i];
      main.appendChild(ans);
      row.appendChild(main);
      var btn = el('button', 'tp-show-btn', genShown[i] ? 'Hide answer' : 'Show answer');
      btn.type = 'button';
      btn.addEventListener('click', function () { genShown[i] = !genShown[i]; genRender(); });
      row.appendChild(btn);
      box.appendChild(row);
    });
    $('tp-gen-all').textContent = genAllShown() ? 'Hide all answers' : 'Show all answers';
  }
  function genNew(pool) {
    genPicks = shuffled(pool).slice(0, cfg.generatorCount || 5);
    genShown = {};
    genRender();
  }
  function initGenerator() {
    var pool = genPool();
    if (!pool.length) { removeSection('generator'); return; }
    genNew(pool);
    $('tp-gen-new').addEventListener('click', function () { genNew(pool); });
    $('tp-gen-all').addEventListener('click', function () {
      var show = !genAllShown();
      genShown = {};
      if (show) genPicks.forEach(function (p, i) { genShown[i] = true; });
      genRender();
    });
  }

  /* ================= D: PAST EXAM QUESTIONS ================= */
  var past = [];
  var modal = { open: false, i: 0, ans: false, opener: null };
  var toastTimer;

  function pastCard(q, i) {
    var card = el('div', 'tp-qcard');
    card.style.setProperty('--strand', STRANDS[q.strand]);
    var open = el('div', 'tp-qopen');
    open.setAttribute('role', 'button');
    open.tabIndex = 0;
    open.setAttribute('aria-label', 'Open question ' + displayN(q) + ', ' + sourceTag(q));
    open.innerHTML =
      '<div class="card-top">' +
        '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-width:0;">' +
          '<span class="subtopic-pill">' + esc(q.subtopic) + '</span>' +
          '<span class="source-tag">' + esc(sourceTag(q)) + '</span>' +
        '</div>' +
        '<div class="card-top-right">' + calcIconHTML(q) +
          '<span class="marks-badge">' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') + '</span>' +
        '</div>' +
      '</div>' +
      qHeadingHTML(q) +
      '<div class="card-body">' + qBodyHTML(q) + '</div>';
    open.addEventListener('click', function () { openModal(i, open); });
    open.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(i, open); }
    });
    card.appendChild(open);
    var foot = el('div', 'tp-qfoot');
    var pr = el('button', 'tp-print-one', 'Print this question →');
    pr.type = 'button';
    pr.addEventListener('click', function () { printQuestions([q], true); });
    foot.appendChild(pr);
    card.appendChild(foot);
    return card;
  }
  function renderPast() {
    var box = $('tp-past');
    box.textContent = '';
    past.forEach(function (q, i) { box.appendChild(pastCard(q, i)); });
  }
  function initPast() {
    var subs = cfg.bank || [];
    var pool = (typeof QUESTIONS !== 'undefined' ? QUESTIONS : []).filter(function (q) { return subs.indexOf(q.subtopic) > -1; });
    if (!pool.length) { removeSection('past'); return; }
    var max = cfg.maxPast || 4;
    past = shuffled(pool).slice(0, max);
    renderPast();
    $('tp-print-all').addEventListener('click', function () { printQuestions(past, $('tp-print-answers').checked); });
    initModal();
  }

  /* ---------- question viewer ---------- */
  function renderModal() {
    var q = past[modal.i];
    $('tp-modal-box').style.setProperty('--strand', STRANDS[q.strand]);
    $('tp-m-head').innerHTML = questionHeaderHTML(q);
    $('tp-m-body').innerHTML = questionCardHTML(q, modal.ans);
    $('tp-m-ans').textContent = modal.ans ? 'Hide answer' : 'Show answer';
    $('tp-m-count').textContent = 'Question ' + (modal.i + 1) + ' of ' + past.length;
    $('tp-m-prev').disabled = modal.i <= 0;
    $('tp-m-next').disabled = modal.i >= past.length - 1;
  }
  function openModal(i, opener) {
    modal.open = true; modal.i = i; modal.ans = false; modal.opener = opener;
    $('tp-modal').hidden = false;
    document.body.style.overflow = 'hidden';
    renderModal();
    $('tp-m-close').focus();
  }
  function closeModal() {
    modal.open = false;
    $('tp-modal').hidden = true;
    document.body.style.overflow = '';
    if (modal.opener) modal.opener.focus();
  }
  function step(d) {
    var n = modal.i + d;
    if (n < 0 || n >= past.length) return;
    modal.i = n; modal.ans = false;
    renderModal();
  }
  function initModal() {
    $('tp-m-close').addEventListener('click', closeModal);
    $('tp-modal').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
    $('tp-m-prev').addEventListener('click', function () { step(-1); });
    $('tp-m-next').addEventListener('click', function () { step(1); });
    $('tp-m-ans').addEventListener('click', function () { modal.ans = !modal.ans; renderModal(); });
    $('tp-m-print').addEventListener('click', function () { printQuestions([past[modal.i]], true); });
    document.addEventListener('keydown', function (e) {
      if (!modal.open) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });
  }

  /* ---------- printing ---------- */
  function printQuestions(list, withAnswers) {
    if (!list.length) return;
    var area = el('div', 'tp-print-area');
    var html = '<h1>' + esc(cfg.title || 'Exam questions') + ' – exam questions</h1>' +
               '<p class="tp-print-sub">Operation Maths · operationmaths.co.uk</p>';
    list.forEach(function (q) {
      html += '<div class="tp-pcard" style="--strand:' + STRANDS[q.strand] + '">' +
        '<div class="card-top"><div><span class="subtopic-pill">' + esc(q.subtopic) + '</span>' +
        '<span class="source-tag">' + esc(sourceTag(q)) + '</span></div>' +
        '<div class="card-top-right">' + calcIconHTML(q) +
        '<span class="marks-badge">' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') + '</span></div></div>' +
        qHeadingHTML(q) + qBodyHTML(q) + '</div>';
    });
    if (withAnswers) {
      html += '<div class="tp-print-answers"><h2>Answers</h2>' + list.map(function (q) {
        return '<div class="answer-item"><span class="answer-source">' + esc(sourceTag(q)) + '</span>' +
          '<div class="answer-box"><strong>Answer:</strong> ' + mathText(q.answer) +
          '<hr style="border:none;border-top:1px solid var(--card-border);margin:10px 0;">' +
          '<strong>Mark scheme:</strong><br>' + mathMarkscheme(q.markscheme) + '</div></div>';
      }).join('') + '</div>';
    }
    area.innerHTML = html;
    $('tp-page').appendChild(area);
    document.body.classList.add('tp-printing');

    var done = false;
    function cleanup() {
      if (done) return;
      done = true;
      document.body.classList.remove('tp-printing');
      if (area.parentNode) area.parentNode.removeChild(area);
      window.removeEventListener('afterprint', cleanup);
    }
    window.addEventListener('afterprint', cleanup);

    /* wait for the question images before the print box opens, so none print blank */
    var imgs = Array.prototype.slice.call(area.querySelectorAll('img'));
    var waits = imgs.map(function (im) {
      return im.complete ? Promise.resolve() : new Promise(function (res) { im.onload = im.onerror = res; });
    });
    Promise.race([Promise.all(waits), new Promise(function (res) { setTimeout(res, 2500); })]).then(function () {
      window.print();
      setTimeout(cleanup, 2000);
    });
  }

  /* ---------- go ---------- */
  if ($('tp-qlist')) initGenerator();
  if ($('tp-past')) initPast();
  relabel();
})();
