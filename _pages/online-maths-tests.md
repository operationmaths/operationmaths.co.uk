---
layout: default
title: Online Maths Tests
description: Online maths tests for KS2 and KS3 students from Operation Maths.
permalink: /online-maths-tests/
---

<section class="om-hero" style="min-height:0; padding: 4rem 2rem 3.5rem;">
  <h1>Online <em>maths tests</em></h1>
  <p>Choose a test below, pick your settings and go.<br>One question at a time – results at the end.</p>
  <div class="test-tabs" style="margin-top:1.75rem;">
    <button class="test-tab active" data-target="times-tables">Times tables</button>
    <button class="test-tab" data-target="number-bonds">Number bonds</button>
    <button class="test-tab" data-target="metric-conversions">Metric conversions</button>
  </div>
</section>

<main>
  <div class="om-body">

    <!-- TIMES TABLES PANEL -->
    <div class="test-panel active" id="panel-times-tables">

      <div class="setup-card" id="tt-setup">
        <div class="setup-section">
          <span class="setup-section-title">Operation</span>
          <div class="option-row">
            <button class="option-btn blue-btn selected" data-op="times" onclick="ttSelectOp(this)">Times tables (×)</button>
            <button class="option-btn blue-btn" data-op="division" onclick="ttSelectOp(this)">Division (÷)</button>
            <button class="option-btn blue-btn" data-op="mixed" onclick="ttSelectOp(this)">Mixed (× and ÷)</button>
          </div>
        </div>
        <div class="setup-section">
          <div class="table-grid">
            <div style="width:100%"><button class="table-btn all-btn" data-table="all" id="all-btn" onclick="ttSelectTable(this)">ALL × 2 to × 12</button></div>
            <button class="table-btn" data-table="2" data-n="2" onclick="ttSelectTable(this)">× 2</button>
            <button class="table-btn" data-table="3" data-n="3" onclick="ttSelectTable(this)">× 3</button>
            <button class="table-btn" data-table="4" data-n="4" onclick="ttSelectTable(this)">× 4</button>
            <button class="table-btn" data-table="5" data-n="5" onclick="ttSelectTable(this)">× 5</button>
            <button class="table-btn" data-table="6" data-n="6" onclick="ttSelectTable(this)">× 6</button>
            <button class="table-btn" data-table="7" data-n="7" onclick="ttSelectTable(this)">× 7</button>
            <button class="table-btn" data-table="8" data-n="8" onclick="ttSelectTable(this)">× 8</button>
            <button class="table-btn" data-table="9" data-n="9" onclick="ttSelectTable(this)">× 9</button>
            <button class="table-btn" data-table="10" data-n="10" onclick="ttSelectTable(this)">× 10</button>
            <button class="table-btn" data-table="11" data-n="11" onclick="ttSelectTable(this)">× 11</button>
            <button class="table-btn" data-table="12" data-n="12" onclick="ttSelectTable(this)">× 12</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-qcount="20" onclick="ttSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-qcount="60" onclick="ttSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-timed="false" onclick="ttSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-timed="true" onclick="ttSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-timelimit="120" onclick="ttSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-timelimit="300" onclick="ttSelectTime(this)">5 minutes</button>
              <button class="option-btn purple-btn" data-timelimit="600" onclick="ttSelectTime(this)">10 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="tt-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="tt-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="tt-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="tt-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="tt-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="tt-question">6 × 7 = ?</div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="tt-answer" type="text" inputmode="numeric" autocomplete="off" placeholder="?" pattern="[0-9]*">
        </div>
        <p class="quiz-hint">Type your answer and press Enter to continue</p>
        <button class="quiz-next-btn" id="tt-next-btn">Next question →</button>
        <button class="quiz-menu-btn" id="tt-quiz-menu-btn">← Menu</button>
      </div>

      <div class="results-card" id="tt-results">
        <div class="results-score" id="tt-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="tt-time-taken"></div>
        <div class="results-perfect" id="tt-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="tt-wrong-wrap" style="display:none">
          <h3>Incorrect or unanswered questions</h3>
          <ul class="wrong-list" id="tt-wrong-list"></ul>
        </div>
        <div class="results-actions" id="tt-actions"></div>
      </div>

    </div>

    <!-- NUMBER BONDS PANEL -->
    <div class="test-panel" id="panel-number-bonds">

      <div class="setup-card" id="nb-setup">
        <div class="setup-section">
          <span class="setup-section-title">Bonds to</span>
          <div class="option-row">
            <button class="option-btn blue-btn" data-nb-target="10" onclick="nbSelectTarget(this)">10</button>
            <button class="option-btn blue-btn" data-nb-target="20" onclick="nbSelectTarget(this)">20</button>
            <button class="option-btn blue-btn" data-nb-target="100" onclick="nbSelectTarget(this)">100</button>
            <button class="option-btn blue-btn" data-nb-target="1000" onclick="nbSelectTarget(this)">1000</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Operation</span>
          <div class="option-row">
            <button class="option-btn blue-btn" data-nb-op="addition" onclick="nbSelectOp(this)">Addition (+)</button>
            <button class="option-btn blue-btn" data-nb-op="subtraction" onclick="nbSelectOp(this)">Subtraction (−)</button>
            <button class="option-btn blue-btn" data-nb-op="mixed" onclick="nbSelectOp(this)">Mixed (+ and −)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-nb-qcount="20" onclick="nbSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-nb-qcount="60" onclick="nbSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-nb-timed="false" onclick="nbSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-nb-timed="true" onclick="nbSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="nb-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-nb-timelimit="120" onclick="nbSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-nb-timelimit="300" onclick="nbSelectTime(this)">5 minutes</button>
              <button class="option-btn purple-btn" data-nb-timelimit="600" onclick="nbSelectTime(this)">10 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="nb-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="nb-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="nb-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="nb-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="nb-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="nb-question">3 + ? = 10</div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="nb-answer" type="text" inputmode="numeric" autocomplete="off" placeholder="?" pattern="[0-9]*">
        </div>
        <p class="quiz-hint">Type your answer and press Enter to continue</p>
        <button class="quiz-next-btn" id="nb-next-btn" onclick="nbSubmitAnswer()">Next question →</button>
        <button class="quiz-menu-btn" id="nb-quiz-menu-btn" onclick="nbResetSetup()">← Menu</button>
      </div>

      <div class="results-card" id="nb-results">
        <div class="results-score" id="nb-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="nb-time-taken"></div>
        <div class="results-perfect" id="nb-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="nb-wrong-wrap" style="display:none">
          <h3>Incorrect or unanswered questions</h3>
          <ul class="wrong-list" id="nb-wrong-list"></ul>
        </div>
        <div class="results-actions" id="nb-actions"></div>
      </div>

    </div>

    <!-- METRIC CONVERSIONS PANEL -->
    <div class="test-panel" id="panel-metric-conversions">

      <div class="setup-card" id="mc-setup">
        <div class="setup-section">
          <span class="setup-section-title">Difficulty</span>
          <div class="option-row">
            <button class="option-btn blue-btn" data-mc-diff="basic" onclick="mcSelectDiff(this)">Basic</button>
            <button class="option-btn blue-btn" data-mc-diff="easier" onclick="mcSelectDiff(this)">Easier</button>
            <button class="option-btn blue-btn" data-mc-diff="harder" onclick="mcSelectDiff(this)">Harder</button>
          </div>
        </div>
        <div class="setup-section" id="mc-groups-section" style="display:none">
          <span class="setup-section-title">Groups</span>
          <div class="option-row">
            <button class="option-btn blue-btn mc-group-all-btn" data-mc-group="all" onclick="mcSelectGroup(this)">All</button>
            <button class="option-btn blue-btn" data-mc-group="length" onclick="mcSelectGroup(this)">Length</button>
            <button class="option-btn blue-btn" data-mc-group="mass" onclick="mcSelectGroup(this)">Mass</button>
            <button class="option-btn blue-btn" data-mc-group="capacity" onclick="mcSelectGroup(this)">Capacity</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-mc-qcount="20" onclick="mcSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-mc-qcount="60" onclick="mcSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-mc-timed="false" onclick="mcSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-mc-timed="true" onclick="mcSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="mc-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-mc-timelimit="120" onclick="mcSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-mc-timelimit="300" onclick="mcSelectTime(this)">5 minutes</button>
              <button class="option-btn purple-btn" data-mc-timelimit="600" onclick="mcSelectTime(this)">10 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="mc-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="mc-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="mc-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="mc-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="mc-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="mc-question">1 km = ? m</div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="mc-answer" type="text" inputmode="decimal" autocomplete="off" placeholder="?">
        </div>
        <p class="quiz-hint">Type your answer and press Enter to continue</p>
        <button class="quiz-next-btn" id="mc-next-btn" onclick="mcSubmitAnswer()">Next question →</button>
        <button class="quiz-menu-btn" id="mc-quiz-menu-btn" onclick="mcResetSetup()">← Menu</button>
      </div>

      <div class="results-card" id="mc-results">
        <div class="results-score" id="mc-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="mc-time-taken"></div>
        <div class="results-perfect" id="mc-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="mc-wrong-wrap" style="display:none">
          <h3>Incorrect or unanswered questions</h3>
          <ul class="wrong-list" id="mc-wrong-list"></ul>
        </div>
        <div class="results-actions" id="mc-actions"></div>
      </div>

    </div>

  </div>
</main>

<script>
  // ── STATE ─────────────────────────────────────────────────────────────────
  const state = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, tables: new Set(), op: null, qcount: null, wrongOnly: false };
  let selTables = new Set();
  let selOp = null, selCount = null, selTimed = null, selTime = null;

  const nbState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, target: null, op: null, qcount: null, wrongOnly: false };
  let nbSelTarget = null, nbSelOp = null, nbSelCount = null, nbSelTimed = null, nbSelTime = null;

  const mcState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, diff: null, groups: new Set(), qcount: null, wrongOnly: false };
  let mcSelDiff = null, mcSelGroups = new Set(), mcSelCount = null, mcSelTimed = null, mcSelTime = null;

  // ── SHARED ────────────────────────────────────────────────────────────────
  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return m + ':' + s;
  }

  function shuffleNoConsec(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].label === arr[i + 1].label) {
        for (let j = i + 2; j < arr.length; j++) {
          if (arr[j].label !== arr[i].label) { [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]]; break; }
        }
      }
    }
    return arr;
  }

  function genericDrawCapped(pool, needed) {
    const maxRepeats = Math.max(2, Math.ceil(needed / pool.length));
    const counts = new Map();
    const result = [];
    let passes = 0;
    while (result.length < needed) {
      passes++;
      const shuffled = shuffleNoConsec([...pool]);
      for (const q of shuffled) {
        const seen = counts.get(q.label) || 0;
        if (seen < maxRepeats && result.length < needed) { result.push(q); counts.set(q.label, seen + 1); }
      }
      if (passes > 20) break;
    }
    return result;
  }

  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const colours = ['#f94144','#f3722c','#f8961e','#f9c74f','#90be6d','#43aa8b','#577590','#9b5de5','#f15bb5','#00bbf9'];
    function makePiece(fromX) {
      const leftSide = fromX < canvas.width / 2;
      const angleMin = leftSide ? -Math.PI * 0.85 : -Math.PI * 0.95;
      const angleMax = leftSide ? -Math.PI * 0.15 : -Math.PI * 0.05;
      const angle = angleMin + Math.random() * (angleMax - angleMin);
      const speed = 6 + Math.random() * 10;
      return { x: fromX, y: canvas.height, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, w: 7 + Math.random() * 7, h: 4 + Math.random() * 5, colour: colours[Math.floor(Math.random() * colours.length)], rot: Math.random() * Math.PI * 2, spin: (Math.random() - 0.5) * 0.25, gravity: 0.18 + Math.random() * 0.12 };
    }
    const pieces = [...Array.from({ length: 80 }, () => makePiece(0)), ...Array.from({ length: 80 }, () => makePiece(canvas.width))];
    let frame, start;
    const duration = 4500;
    function draw(ts) {
      if (!start) start = ts;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = ts - start;
      const fade = Math.max(0, 1 - (elapsed - duration * 0.55) / (duration * 0.45));
      ctx.globalAlpha = fade;
      for (const p of pieces) { p.vy += p.gravity; p.x += p.vx; p.y += p.vy; p.rot += p.spin; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.colour; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore(); }
      if (elapsed < duration) { frame = requestAnimationFrame(draw); } else { cancelAnimationFrame(frame); canvas.remove(); }
    }
    frame = requestAnimationFrame(draw);
  }

  // ── TABS ──────────────────────────────────────────────────────────────────
  function activateTab(target) {
    document.querySelectorAll('.test-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.test-panel').forEach(p => p.classList.remove('active'));
    const tab = document.querySelector('.test-tab[data-target="' + target + '"]');
    const panel = document.getElementById('panel-' + target);
    if (tab) tab.classList.add('active');
    if (panel) panel.classList.add('active');
    resetSetup();
    nbResetSetup();
    mcResetSetup();
  }

  document.querySelectorAll('.test-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;
      history.pushState(null, '', '/online-maths-tests/#' + target);
      activateTab(target);
    });
  });

  (function() {
    const hash = window.location.hash.replace('#', '') || 'times-tables';
    const valid = ['times-tables', 'number-bonds', 'metric-conversions'];
    activateTab(valid.includes(hash) ? hash : 'times-tables');
  })();

  window.addEventListener('popstate', function() {
    const hash = window.location.hash.replace('#', '') || 'times-tables';
    activateTab(hash);
  });

  // ── TIMES TABLES SETUP ────────────────────────────────────────────────────
  function updateStartBtn() {
    const timedOk = selTimed === false || (selTimed === true && selTime !== null);
    document.getElementById('tt-start-btn').disabled = !(selTables.size > 0 && selOp !== null && selCount !== null && selTimed !== null && timedOk);
  }

  function updateTableLabels(op) {
    const allBtn = document.getElementById('all-btn');
    if (op === 'times') {
      allBtn.textContent = 'ALL × 2 to × 12';
      document.querySelectorAll('.table-btn[data-n]').forEach(b => { b.textContent = '× ' + b.dataset.n; });
    } else if (op === 'division') {
      allBtn.textContent = 'ALL ÷ 2 to ÷ 12';
      document.querySelectorAll('.table-btn[data-n]').forEach(b => { b.textContent = '÷ ' + b.dataset.n; });
    } else {
      allBtn.textContent = 'ALL × and ÷ 2 to × and ÷ 12';
      document.querySelectorAll('.table-btn[data-n]').forEach(b => { b.textContent = '× and ÷ ' + b.dataset.n; });
    }
  }

  function resetSetup() {
    clearInterval(state.timerInterval);
    document.getElementById('tt-quiz').classList.remove('active');
    document.getElementById('tt-results').classList.remove('active');
    document.getElementById('tt-setup').style.display = '';
    selTables.clear();
    selOp = null; selCount = null; selTimed = null; selTime = null;
    document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-op]').forEach(b => b.classList.remove('selected'));
    document.querySelector('[data-op="times"]').classList.add('selected');
    selOp = 'times';
    document.querySelectorAll('[data-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('time-options').classList.remove('visible');
    updateTableLabels('times');
    updateStartBtn();
  }

  function ttSelectOp(btn) {
    document.querySelectorAll('[data-op]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selOp = btn.dataset.op;
    updateTableLabels(selOp);
    updateStartBtn();
  }

  function ttSelectTable(btn) {
    const val = btn.dataset.table;
    if (val === 'all') {
      if (btn.classList.contains('selected')) { btn.classList.remove('selected'); selTables.clear(); }
      else { document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); selTables.clear(); selTables.add('all'); }
    } else {
      const allBtn = document.querySelector('.all-btn');
      if (selTables.has('all')) { allBtn.classList.remove('selected'); selTables.clear(); }
      const n = parseInt(val);
      if (btn.classList.contains('selected')) { btn.classList.remove('selected'); selTables.delete(n); }
      else { btn.classList.add('selected'); selTables.add(n); }
      if (selTables.size === 11) { document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected')); allBtn.classList.add('selected'); selTables.clear(); selTables.add('all'); }
    }
    updateStartBtn();
  }

  function ttSelectCount(btn) {
    document.querySelectorAll('[data-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selCount = parseInt(btn.dataset.qcount);
    updateStartBtn();
  }

  function ttSelectTimed(btn) {
    document.querySelectorAll('[data-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selTimed = btn.dataset.timed === 'true';
    const opts = document.getElementById('time-options');
    if (selTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); selTime = null; document.querySelectorAll('[data-timelimit]').forEach(b => b.classList.remove('selected')); }
    updateStartBtn();
  }

  function ttSelectTime(btn) {
    document.querySelectorAll('[data-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selTime = parseInt(btn.dataset.timelimit);
    updateStartBtn();
  }

  // ── TIMES TABLES QUESTION GENERATION ─────────────────────────────────────
  function drawCapped(pool, needed) {
    const maxRepeats = Math.max(2, Math.ceil(needed / pool.length));
    const counts = new Map();
    const result = [];
    let passes = 0;
    while (result.length < needed) {
      passes++;
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      for (const q of shuffled) {
        const key = q.type + '_' + q.a + '_' + q.b;
        const seen = counts.get(key) || 0;
        if (seen < maxRepeats && result.length < needed) { result.push(q); counts.set(key, seen + 1); }
      }
      if (passes > 20) break;
    }
    return result;
  }

  function generateQuestions(tables, op, count) {
    const tableList = tables.has('all') ? [2,3,4,5,6,7,8,9,10,11,12] : [...tables].sort((a,b) => a - b);
    const timesPool = [], divPool = [];
    for (const t of tableList) {
      for (let m = 1; m <= 12; m++) {
        timesPool.push({ type: 'times', a: t, b: m, answer: t * m });
        if (m !== t) timesPool.push({ type: 'times', a: m, b: t, answer: m * t });
        divPool.push({ type: 'div', a: t * m, b: t, answer: m });
      }
    }
    if (op === 'times') return drawCapped(timesPool, count);
    if (op === 'division') return drawCapped(divPool, count);
    const divHalf = Math.floor(count / 2);
    const timesHalf = count - divHalf;
    return [...drawCapped(timesPool, timesHalf), ...drawCapped(divPool, divHalf)].sort(() => Math.random() - 0.5);
  }

  function questionLabel(q) { return q.type === 'div' ? q.a + ' ÷ ' + q.b + ' = ?' : q.a + ' × ' + q.b + ' = ?'; }
  function questionResultLabel(q) { return q.type === 'div' ? q.a + ' ÷ ' + q.b + ' = ' + q.answer : q.a + ' × ' + q.b + ' = ' + q.answer; }

  // ── TIMES TABLES TEST ─────────────────────────────────────────────────────
  function startTest(questions) {
    state.questions = questions; state.current = 0; state.userAnswers = []; state.elapsed = 0;
    document.getElementById('tt-setup').style.display = 'none';
    document.getElementById('tt-results').classList.remove('active');
    document.getElementById('tt-quiz').classList.add('active');
    const timerEl = document.getElementById('tt-timer');
    if (state.timed) {
      state.remaining = state.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(state.remaining); timerEl.className = 'quiz-timer';
      state.timerInterval = setInterval(() => {
        state.remaining--; timerEl.textContent = formatTime(state.remaining);
        if (state.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (state.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (state.remaining <= 0) { clearInterval(state.timerInterval); finishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; state.timerInterval = setInterval(() => { state.elapsed++; }, 1000); }
    showQuestion();
  }

  function showQuestion() {
    const q = state.questions[state.current];
    const total = state.questions.length;
    document.getElementById('tt-progress').textContent = 'Question ' + (state.current + 1) + ' of ' + total;
    document.getElementById('tt-progress-bar').style.width = (state.current / total * 100) + '%';
    document.getElementById('tt-question').textContent = questionLabel(q);
    const input = document.getElementById('tt-answer');
    input.value = ''; input.focus();
  }

  function submitAnswer() {
    const input = document.getElementById('tt-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const given = parseInt(raw, 10);
    if (isNaN(given)) return;
    const q = state.questions[state.current];
    state.userAnswers.push({ q: q, correct: q.answer, given: given, isCorrect: given === q.answer, unanswered: false });
    state.current++;
    if (state.current >= state.questions.length) { finishTest(false); } else { showQuestion(); }
  }

  document.getElementById('tt-next-btn').addEventListener('click', submitAnswer);
  document.getElementById('tt-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); submitAnswer(); return; }
    const allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });

  function finishTest(timedOut) {
    clearInterval(state.timerInterval);
    if (timedOut) {
      for (let i = state.current; i < state.questions.length; i++) {
        const q = state.questions[i];
        state.userAnswers.push({ q: q, correct: q.answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('tt-quiz').classList.remove('active');
    const correct = state.userAnswers.filter(a => a.isCorrect).length;
    const total = state.userAnswers.length;
    const answeredWrong = state.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const allWrong = state.userAnswers.filter(a => !a.isCorrect);
    const perfect = correct === total;
    document.getElementById('tt-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('tt-time-taken');
    if (state.timed) { const used = state.timelimit - state.remaining; timeEl.textContent = timedOut ? 'Time ran out' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(state.elapsed); }
    const perfectEl = document.getElementById('tt-perfect');
    const wrongWrap = document.getElementById('tt-wrong-wrap');
    const wrongList = document.getElementById('tt-wrong-list');
    const actionsEl = document.getElementById('tt-actions');
    if (perfect) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="resetSetup()">← Menu</button><button class="results-btn primary" onclick="retakeSame()">Try again</button>';
      if (!state.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none'; wrongWrap.style.display = 'block';
      wrongList.innerHTML = allWrong.map(a =>
        '<li><span class="q">' + questionResultLabel(a.q) + '</span>' + (a.unanswered ? '<span class="not-ans">Not answered</span>' : '<span class="your-ans">You answered: ' + a.given + '</span>') + '</li>'
      ).join('');
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="retakeWrong()">Retry wrong answers</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="resetSetup()">← Menu</button><button class="results-btn primary" onclick="retakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('tt-results').classList.add('active');
  }

  function retakeSame() {
    document.getElementById('tt-results').classList.remove('active');
    state.wrongOnly = false;
    startTest(generateQuestions(state.tables, state.op, state.qcount));
  }

  function retakeWrong() {
    const answeredWrong = state.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const wrongQs = answeredWrong.map(a => a.q);
    const count = Math.min(wrongQs.length, state.qcount);
    const filled = [];
    while (filled.length < count) { filled.push(...[...wrongQs].sort(() => Math.random() - 0.5)); }
    document.getElementById('tt-results').classList.remove('active');
    state.wrongOnly = true; state.timed = false;
    startTest(filled.slice(0, count));
  }

  document.getElementById('tt-start-btn').addEventListener('click', function() {
    state.tables = new Set(selTables); state.op = selOp; state.qcount = selCount;
    state.timed = selTimed; state.timelimit = selTime; state.wrongOnly = false;
    startTest(generateQuestions(selTables, selOp, selCount));
  });

  document.getElementById('tt-quiz-menu-btn').addEventListener('click', resetSetup);

  // ── NUMBER BONDS SETUP ────────────────────────────────────────────────────
  function nbUpdateStartBtn() {
    const timedOk = nbSelTimed === false || (nbSelTimed === true && nbSelTime !== null);
    document.getElementById('nb-start-btn').disabled = !(nbSelTarget !== null && nbSelOp !== null && nbSelCount !== null && nbSelTimed !== null && timedOk);
  }

  function nbResetSetup() {
    clearInterval(nbState.timerInterval);
    document.getElementById('nb-quiz').classList.remove('active');
    document.getElementById('nb-results').classList.remove('active');
    document.getElementById('nb-setup').style.display = '';
    nbSelTarget = null; nbSelOp = null; nbSelCount = null; nbSelTimed = null; nbSelTime = null;
    document.querySelectorAll('[data-nb-target]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-nb-op]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-nb-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-nb-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-nb-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('nb-time-options').classList.remove('visible');
    nbUpdateStartBtn();
  }

  function nbSelectTarget(btn) {
    document.querySelectorAll('[data-nb-target]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    nbSelTarget = parseInt(btn.dataset.nbTarget);
    nbUpdateStartBtn();
  }

  function nbSelectOp(btn) {
    document.querySelectorAll('[data-nb-op]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    nbSelOp = btn.dataset.nbOp;
    nbUpdateStartBtn();
  }

  function nbSelectCount(btn) {
    document.querySelectorAll('[data-nb-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    nbSelCount = parseInt(btn.dataset.nbQcount);
    nbUpdateStartBtn();
  }

  function nbSelectTimed(btn) {
    document.querySelectorAll('[data-nb-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    nbSelTimed = btn.dataset.nbTimed === 'true';
    const opts = document.getElementById('nb-time-options');
    if (nbSelTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); nbSelTime = null; document.querySelectorAll('[data-nb-timelimit]').forEach(b => b.classList.remove('selected')); }
    nbUpdateStartBtn();
  }

  function nbSelectTime(btn) {
    document.querySelectorAll('[data-nb-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    nbSelTime = parseInt(btn.dataset.nbTimelimit);
    nbUpdateStartBtn();
  }

  // ── NUMBER BONDS QUESTION GENERATION ─────────────────────────────────────
  function nbGenerateQuestions(target, op, count) {
    let pairs = [];
    if (target === 10) { for (let a = 0; a <= 10; a++) pairs.push([a, 10 - a]); }
    else if (target === 20) { for (let a = 0; a <= 20; a++) pairs.push([a, 20 - a]); }
    else if (target === 100) { for (let a = 0; a <= 100; a += 10) pairs.push([a, 100 - a]); }
    else if (target === 1000) { for (let a = 0; a <= 1000; a += 100) pairs.push([a, 1000 - a]); }
    const addPool = [], subPool = [];
    for (const [a, b] of pairs) {
      addPool.push({ label: a + ' + ? = ' + target, resultLabel: a + ' + ' + b + ' = ' + target, answer: b });
      if (a !== b) {
        addPool.push({ label: b + ' + ? = ' + target, resultLabel: b + ' + ' + a + ' = ' + target, answer: a });
        addPool.push({ label: '? + ' + a + ' = ' + target, resultLabel: b + ' + ' + a + ' = ' + target, answer: b });
        addPool.push({ label: '? + ' + b + ' = ' + target, resultLabel: a + ' + ' + b + ' = ' + target, answer: a });
      } else {
        addPool.push({ label: '? + ' + a + ' = ' + target, resultLabel: a + ' + ' + b + ' = ' + target, answer: b });
      }
      subPool.push({ label: target + ' − ' + a + ' = ?', resultLabel: target + ' − ' + a + ' = ' + b, answer: b });
      if (a !== b) subPool.push({ label: target + ' − ' + b + ' = ?', resultLabel: target + ' − ' + b + ' = ' + a, answer: a });
    }
    if (op === 'addition') return shuffleNoConsec(genericDrawCapped(addPool, count));
    if (op === 'subtraction') return shuffleNoConsec(genericDrawCapped(subPool, count));
    const subHalf = Math.floor(count / 2);
    return shuffleNoConsec([...genericDrawCapped(addPool, count - subHalf), ...genericDrawCapped(subPool, subHalf)]);
  }

  // ── NUMBER BONDS TEST ─────────────────────────────────────────────────────
  function nbStartTest(questions) {
    nbState.questions = questions; nbState.current = 0; nbState.userAnswers = []; nbState.elapsed = 0;
    document.getElementById('nb-setup').style.display = 'none';
    document.getElementById('nb-results').classList.remove('active');
    document.getElementById('nb-quiz').classList.add('active');
    const timerEl = document.getElementById('nb-timer');
    if (nbState.timed) {
      nbState.remaining = nbState.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(nbState.remaining); timerEl.className = 'quiz-timer';
      nbState.timerInterval = setInterval(() => {
        nbState.remaining--; timerEl.textContent = formatTime(nbState.remaining);
        if (nbState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (nbState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (nbState.remaining <= 0) { clearInterval(nbState.timerInterval); nbFinishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; nbState.timerInterval = setInterval(() => { nbState.elapsed++; }, 1000); }
    nbShowQuestion();
  }

  function nbShowQuestion() {
    const q = nbState.questions[nbState.current];
    const total = nbState.questions.length;
    document.getElementById('nb-progress').textContent = 'Question ' + (nbState.current + 1) + ' of ' + total;
    document.getElementById('nb-progress-bar').style.width = (nbState.current / total * 100) + '%';
    document.getElementById('nb-question').textContent = q.label;
    const input = document.getElementById('nb-answer');
    input.value = ''; input.focus();
  }

  function nbSubmitAnswer() {
    const input = document.getElementById('nb-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const given = parseInt(raw, 10);
    if (isNaN(given)) return;
    const q = nbState.questions[nbState.current];
    nbState.userAnswers.push({ q: q, correct: q.answer, given: given, isCorrect: given === q.answer, unanswered: false });
    nbState.current++;
    if (nbState.current >= nbState.questions.length) { nbFinishTest(false); } else { nbShowQuestion(); }
  }

  document.getElementById('nb-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); nbSubmitAnswer(); return; }
    const allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });

  function nbFinishTest(timedOut) {
    clearInterval(nbState.timerInterval);
    if (timedOut) {
      for (let i = nbState.current; i < nbState.questions.length; i++) {
        nbState.userAnswers.push({ q: nbState.questions[i], correct: nbState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('nb-quiz').classList.remove('active');
    const correct = nbState.userAnswers.filter(a => a.isCorrect).length;
    const total = nbState.userAnswers.length;
    const answeredWrong = nbState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const allWrong = nbState.userAnswers.filter(a => !a.isCorrect);
    const perfect = correct === total;
    document.getElementById('nb-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('nb-time-taken');
    if (nbState.timed) { const used = nbState.timelimit - nbState.remaining; timeEl.textContent = timedOut ? 'Time ran out' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(nbState.elapsed); }
    const perfectEl = document.getElementById('nb-perfect');
    const wrongWrap = document.getElementById('nb-wrong-wrap');
    const wrongList = document.getElementById('nb-wrong-list');
    const actionsEl = document.getElementById('nb-actions');
    if (perfect) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="nbResetSetup()">← Menu</button><button class="results-btn primary" onclick="nbRetakeSame()">Try again</button>';
      if (!nbState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none'; wrongWrap.style.display = 'block';
      wrongList.innerHTML = allWrong.map(a =>
        '<li><span class="q">' + a.q.resultLabel + '</span>' + (a.unanswered ? '<span class="not-ans">Not answered</span>' : '<span class="your-ans">You answered: ' + a.given + '</span>') + '</li>'
      ).join('');
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="nbRetakeWrong()">Retry wrong answers</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="nbResetSetup()">← Menu</button><button class="results-btn primary" onclick="nbRetakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('nb-results').classList.add('active');
  }

  function nbRetakeSame() {
    document.getElementById('nb-results').classList.remove('active');
    nbState.wrongOnly = false;
    nbStartTest(nbGenerateQuestions(nbState.target, nbState.op, nbState.qcount));
  }

  function nbRetakeWrong() {
    const answeredWrong = nbState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const wrongQs = answeredWrong.map(a => a.q);
    const count = Math.min(wrongQs.length, nbState.qcount);
    const filled = [];
    while (filled.length < count) { filled.push(...shuffleNoConsec([...wrongQs])); }
    document.getElementById('nb-results').classList.remove('active');
    nbState.wrongOnly = true; nbState.timed = false;
    nbStartTest(filled.slice(0, count));
  }

  document.getElementById('nb-start-btn').addEventListener('click', function() {
    nbState.target = nbSelTarget; nbState.op = nbSelOp; nbState.qcount = nbSelCount;
    nbState.timed = nbSelTimed; nbState.timelimit = nbSelTime; nbState.wrongOnly = false;
    nbStartTest(nbGenerateQuestions(nbSelTarget, nbSelOp, nbSelCount));
  });

  // ── METRIC CONVERSIONS SETUP ──────────────────────────────────────────────
  const MC_BASIC_POOL = [
    { label: '1 cm = ? mm',  resultLabel: '1 cm = 10 mm',    answer: '10' },
    { label: '1 m = ? cm',   resultLabel: '1 m = 100 cm',    answer: '100' },
    { label: '1 km = ? m',   resultLabel: '1 km = 1000 m',   answer: '1000' },
    { label: '1 l = ? ml',   resultLabel: '1 l = 1000 ml',   answer: '1000' },
    { label: '1 kg = ? g',   resultLabel: '1 kg = 1000 g',   answer: '1000' }
  ];

  const MC_PAIRS = {
    length: [
      { from: 'mm', to: 'cm', factor: 0.1 }, { from: 'cm', to: 'mm', factor: 10 },
      { from: 'cm', to: 'm',  factor: 0.01 }, { from: 'm', to: 'cm', factor: 100 },
      { from: 'm',  to: 'km', factor: 0.001 }, { from: 'km', to: 'm', factor: 1000 }
    ],
    mass:     [ { from: 'g', to: 'kg', factor: 0.001 }, { from: 'kg', to: 'g', factor: 1000 } ],
    capacity: [ { from: 'ml', to: 'l', factor: 0.001 }, { from: 'l', to: 'ml', factor: 1000 } ]
  };

  const MC_EASIER_VALUES = {
    'cm-mm': [2,3,4,5,6,7,8,9,10,15,20,25,50],          'mm-cm': [20,30,40,50,60,70,80,90,100,150,200,250,500],
    'cm-m':  [200,300,400,500,600,700,800,900,150,250],   'm-cm':  [2,3,4,5,6,7,8,9,10],
    'm-km':  [2000,3000,4000,5000,6000,7000,8000,9000],   'km-m':  [2,3,4,5,6,7,8,9,10],
    'g-kg':  [2000,3000,4000,5000,6000,7000,8000,9000],   'kg-g':  [2,3,4,5,6,7,8,9,10],
    'ml-l':  [2000,3000,4000,5000,6000,7000,8000,9000],   'l-ml':  [2,3,4,5,6,7,8,9,10]
  };

  const MC_HARDER_VALUES = {
    'cm-mm': [1.2,1.5,2.3,3.7,4.8,5.6,1.25,2.75,3.45,4.65,1.234,2.567,3.891],
    'mm-cm': [12,15,23,37,48,56,125,275,345,465,1234,2567,3891],
    'cm-m':  [125,235,347,456,678,1234,2345,3456,12345],
    'm-cm':  [1.25,2.35,3.47,4.56,6.78,12.34,23.45,34.56,123.45],
    'm-km':  [1234,2345,3456,4567,5678,1250,2500,3750],
    'km-m':  [1.234,2.345,3.456,4.567,5.678,1.25,2.5,3.75],
    'g-kg':  [1234,2345,3456,4567,5678,1250,2500,3750],
    'kg-g':  [1.234,2.345,3.456,4.567,5.678,1.25,2.5,3.75],
    'ml-l':  [1234,2345,3456,4567,5678,1250,2500,3750],
    'l-ml':  [1.234,2.345,3.456,4.567,5.678,1.25,2.5,3.75]
  };

  function mcFormatNum(n) { return parseFloat(n.toPrecision(10)).toString(); }

  function mcUpdateStartBtn() {
    const diffOk = mcSelDiff !== null;
    const groupOk = mcSelDiff === 'basic' || mcSelGroups.size > 0;
    const timedOk = mcSelTimed === false || (mcSelTimed === true && mcSelTime !== null);
    document.getElementById('mc-start-btn').disabled = !(diffOk && groupOk && mcSelCount !== null && mcSelTimed !== null && timedOk);
  }

  function mcResetSetup() {
    clearInterval(mcState.timerInterval);
    document.getElementById('mc-quiz').classList.remove('active');
    document.getElementById('mc-results').classList.remove('active');
    document.getElementById('mc-setup').style.display = '';
    mcSelDiff = null; mcSelGroups = new Set(); mcSelCount = null; mcSelTimed = null; mcSelTime = null;
    document.querySelectorAll('[data-mc-diff]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-mc-group]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-mc-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-mc-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-mc-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('mc-groups-section').style.display = 'none';
    document.getElementById('mc-time-options').classList.remove('visible');
    mcUpdateStartBtn();
  }

  function mcSelectDiff(btn) {
    document.querySelectorAll('[data-mc-diff]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    mcSelDiff = btn.dataset.mcDiff;
    const grpSection = document.getElementById('mc-groups-section');
    if (mcSelDiff === 'basic') { grpSection.style.display = 'none'; mcSelGroups = new Set(['all']); }
    else { grpSection.style.display = ''; mcSelGroups = new Set(); document.querySelectorAll('[data-mc-group]').forEach(b => b.classList.remove('selected')); }
    mcUpdateStartBtn();
  }

  function mcSelectGroup(btn) {
    const val = btn.dataset.mcGroup;
    const allBtn = document.querySelector('.mc-group-all-btn');
    if (val === 'all') {
      if (btn.classList.contains('selected')) { btn.classList.remove('selected'); mcSelGroups.clear(); }
      else { document.querySelectorAll('[data-mc-group]').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); mcSelGroups.clear(); mcSelGroups.add('all'); }
    } else {
      if (mcSelGroups.has('all')) { allBtn.classList.remove('selected'); mcSelGroups.clear(); }
      if (btn.classList.contains('selected')) { btn.classList.remove('selected'); mcSelGroups.delete(val); }
      else { btn.classList.add('selected'); mcSelGroups.add(val); }
      if (mcSelGroups.size === 3) { document.querySelectorAll('[data-mc-group]').forEach(b => b.classList.remove('selected')); allBtn.classList.add('selected'); mcSelGroups.clear(); mcSelGroups.add('all'); }
    }
    mcUpdateStartBtn();
  }

  function mcSelectCount(btn) {
    document.querySelectorAll('[data-mc-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    mcSelCount = parseInt(btn.dataset.mcQcount);
    mcUpdateStartBtn();
  }

  function mcSelectTimed(btn) {
    document.querySelectorAll('[data-mc-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    mcSelTimed = btn.dataset.mcTimed === 'true';
    const opts = document.getElementById('mc-time-options');
    if (mcSelTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); mcSelTime = null; document.querySelectorAll('[data-mc-timelimit]').forEach(b => b.classList.remove('selected')); }
    mcUpdateStartBtn();
  }

  function mcSelectTime(btn) {
    document.querySelectorAll('[data-mc-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    mcSelTime = parseInt(btn.dataset.mcTimelimit);
    mcUpdateStartBtn();
  }

  // ── METRIC CONVERSIONS QUESTION GENERATION ────────────────────────────────
  function mcBuildPool(diff, groups) {
    if (diff === 'basic') return [...MC_BASIC_POOL];
    const activeGroups = groups.has('all') ? ['length','mass','capacity'] : [...groups];
    const pool = [];
    for (const grp of activeGroups) {
      for (const pair of MC_PAIRS[grp]) {
        const key = pair.from + '-' + pair.to;
        const values = diff === 'easier' ? MC_EASIER_VALUES[key] : MC_HARDER_VALUES[key];
        if (!values) continue;
        for (const v of values) {
          const ans = mcFormatNum(v * pair.factor);
          const qLabel = mcFormatNum(v) + ' ' + pair.from + ' = ? ' + pair.to;
          const rLabel = mcFormatNum(v) + ' ' + pair.from + ' = ' + ans + ' ' + pair.to;
          pool.push({ label: qLabel, resultLabel: rLabel, answer: ans });
        }
      }
    }
    return pool;
  }

  function mcGenerateQuestions(diff, groups, count) {
    return shuffleNoConsec(genericDrawCapped(mcBuildPool(diff, groups), count));
  }

  // ── METRIC CONVERSIONS TEST ───────────────────────────────────────────────
  function mcStartTest(questions) {
    mcState.questions = questions; mcState.current = 0; mcState.userAnswers = []; mcState.elapsed = 0;
    document.getElementById('mc-setup').style.display = 'none';
    document.getElementById('mc-results').classList.remove('active');
    document.getElementById('mc-quiz').classList.add('active');
    document.getElementById('mc-answer').dataset.harder = mcState.diff === 'harder' ? '1' : '';
    const timerEl = document.getElementById('mc-timer');
    if (mcState.timed) {
      mcState.remaining = mcState.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(mcState.remaining); timerEl.className = 'quiz-timer';
      mcState.timerInterval = setInterval(() => {
        mcState.remaining--; timerEl.textContent = formatTime(mcState.remaining);
        if (mcState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (mcState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (mcState.remaining <= 0) { clearInterval(mcState.timerInterval); mcFinishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; mcState.timerInterval = setInterval(() => { mcState.elapsed++; }, 1000); }
    mcShowQuestion();
  }

  function mcShowQuestion() {
    const q = mcState.questions[mcState.current];
    const total = mcState.questions.length;
    document.getElementById('mc-progress').textContent = 'Question ' + (mcState.current + 1) + ' of ' + total;
    document.getElementById('mc-progress-bar').style.width = (mcState.current / total * 100) + '%';
    document.getElementById('mc-question').textContent = q.label;
    const input = document.getElementById('mc-answer');
    input.value = ''; input.focus();
  }

  function mcSubmitAnswer() {
    const input = document.getElementById('mc-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const q = mcState.questions[mcState.current];
    const isCorrect = !isNaN(parseFloat(raw)) && Math.abs(parseFloat(raw) - parseFloat(q.answer)) < 1e-9;
    mcState.userAnswers.push({ q: q, correct: q.answer, given: raw, isCorrect: isCorrect, unanswered: false });
    mcState.current++;
    if (mcState.current >= mcState.questions.length) { mcFinishTest(false); } else { mcShowQuestion(); }
  }

  document.getElementById('mc-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); mcSubmitAnswer(); return; }
    const allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (e.key === '.' && this.dataset.harder === '1' && !this.value.includes('.')) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });

  function mcFinishTest(timedOut) {
    clearInterval(mcState.timerInterval);
    if (timedOut) {
      for (let i = mcState.current; i < mcState.questions.length; i++) {
        mcState.userAnswers.push({ q: mcState.questions[i], correct: mcState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('mc-quiz').classList.remove('active');
    const correct = mcState.userAnswers.filter(a => a.isCorrect).length;
    const total = mcState.userAnswers.length;
    const answeredWrong = mcState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const allWrong = mcState.userAnswers.filter(a => !a.isCorrect);
    const perfect = correct === total;
    document.getElementById('mc-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('mc-time-taken');
    if (mcState.timed) { const used = mcState.timelimit - mcState.remaining; timeEl.textContent = timedOut ? 'Time ran out' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(mcState.elapsed); }
    const perfectEl = document.getElementById('mc-perfect');
    const wrongWrap = document.getElementById('mc-wrong-wrap');
    const wrongList = document.getElementById('mc-wrong-list');
    const actionsEl = document.getElementById('mc-actions');
    if (perfect) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="mcResetSetup()">← Menu</button><button class="results-btn primary" onclick="mcRetakeSame()">Try again</button>';
      if (!mcState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none'; wrongWrap.style.display = 'block';
      wrongList.innerHTML = allWrong.map(a =>
        '<li><span class="q">' + a.q.resultLabel + '</span>' + (a.unanswered ? '<span class="not-ans">Not answered</span>' : '<span class="your-ans">You answered: ' + a.given + '</span>') + '</li>'
      ).join('');
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="mcRetakeWrong()">Retry wrong answers</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="mcResetSetup()">← Menu</button><button class="results-btn primary" onclick="mcRetakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('mc-results').classList.add('active');
  }

  function mcRetakeSame() {
    document.getElementById('mc-results').classList.remove('active');
    mcState.wrongOnly = false;
    mcStartTest(mcGenerateQuestions(mcState.diff, mcState.groups, mcState.qcount));
  }

  function mcRetakeWrong() {
    const answeredWrong = mcState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const wrongQs = answeredWrong.map(a => a.q);
    const count = Math.min(wrongQs.length, mcState.qcount);
    const filled = [];
    while (filled.length < count) { filled.push(...shuffleNoConsec([...wrongQs])); }
    document.getElementById('mc-results').classList.remove('active');
    mcState.wrongOnly = true; mcState.timed = false;
    mcStartTest(filled.slice(0, count));
  }

  document.getElementById('mc-start-btn').addEventListener('click', function() {
    mcState.diff = mcSelDiff; mcState.groups = new Set(mcSelGroups); mcState.qcount = mcSelCount;
    mcState.timed = mcSelTimed; mcState.timelimit = mcSelTime; mcState.wrongOnly = false;
    mcStartTest(mcGenerateQuestions(mcSelDiff, mcSelGroups, mcSelCount));
  });
</script>
