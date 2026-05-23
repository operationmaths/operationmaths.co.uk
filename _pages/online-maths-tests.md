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
            <button class="option-btn blue-btn selected" data-op="times">Times tables (×)</button>
            <button class="option-btn blue-btn" data-op="division">Division (÷)</button>
            <button class="option-btn blue-btn" data-op="mixed">Mixed (× and ÷)</button>
          </div>
        </div>
        <div class="setup-section">
          <div class="table-grid">
            <div style="width:100%"><button class="table-btn all-btn" data-table="all" id="all-btn">ALL × 2 to × 12</button></div>
            <button class="table-btn" data-table="2" data-n="2">× 2</button>
            <button class="table-btn" data-table="3" data-n="3">× 3</button>
            <button class="table-btn" data-table="4" data-n="4">× 4</button>
            <button class="table-btn" data-table="5" data-n="5">× 5</button>
            <button class="table-btn" data-table="6" data-n="6">× 6</button>
            <button class="table-btn" data-table="7" data-n="7">× 7</button>
            <button class="table-btn" data-table="8" data-n="8">× 8</button>
            <button class="table-btn" data-table="9" data-n="9">× 9</button>
            <button class="table-btn" data-table="10" data-n="10">× 10</button>
            <button class="table-btn" data-table="11" data-n="11">× 11</button>
            <button class="table-btn" data-table="12" data-n="12">× 12</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-qcount="20">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-qcount="60">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-timed="false">Untimed</button>
            <button class="option-btn purple-btn" data-timed="true">Timed</button>
          </div>
          <div class="time-options" id="time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-timelimit="120">2 minutes</button>
              <button class="option-btn purple-btn" data-timelimit="300">5 minutes</button>
              <button class="option-btn purple-btn" data-timelimit="600">10 minutes</button>
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
            <button class="option-btn blue-btn" data-nb-target="10">10</button>
            <button class="option-btn blue-btn" data-nb-target="20">20</button>
            <button class="option-btn blue-btn" data-nb-target="100">100</button>
            <button class="option-btn blue-btn" data-nb-target="1000">1000</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Operation</span>
          <div class="option-row">
            <button class="option-btn blue-btn" data-nb-op="addition">Addition (+)</button>
            <button class="option-btn blue-btn" data-nb-op="subtraction">Subtraction (−)</button>
            <button class="option-btn blue-btn" data-nb-op="mixed">Mixed (+ and −)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-nb-qcount="20">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-nb-qcount="60">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-nb-timed="false">Untimed</button>
            <button class="option-btn purple-btn" data-nb-timed="true">Timed</button>
          </div>
          <div class="time-options" id="nb-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-nb-timelimit="120">2 minutes</button>
              <button class="option-btn purple-btn" data-nb-timelimit="300">5 minutes</button>
              <button class="option-btn purple-btn" data-nb-timelimit="600">10 minutes</button>
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
        <button class="quiz-next-btn" id="nb-next-btn">Next question →</button>
        <button class="quiz-menu-btn" id="nb-quiz-menu-btn">← Menu</button>
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
      <div class="coming-soon">
        <p>Metric conversions test — coming soon!</p>
      </div>
    </div>

  </div>
</main>

<script>
  const state = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, tables: new Set(), op: null, qcount: null, wrongOnly: false };
  let selTables = new Set();
  let selOp = null, selCount = null, selTimed = null, selTime = null;

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

  function activateTab(target) {
    document.querySelectorAll('.test-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.test-panel').forEach(p => p.classList.remove('active'));
    const tab = document.querySelector('.test-tab[data-target="' + target + '"]');
    const panel = document.getElementById('panel-' + target);
    if (tab) tab.classList.add('active');
    if (panel) panel.classList.add('active');
    resetSetup();
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

  selOp = 'times';

  document.querySelectorAll('[data-op]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-op]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selOp = this.dataset.op;
      updateTableLabels(selOp);
      updateStartBtn();
    });
  });

  document.querySelectorAll('.table-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const val = this.dataset.table;
      if (val === 'all') {
        if (this.classList.contains('selected')) { this.classList.remove('selected'); selTables.clear(); }
        else {
          document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected'));
          this.classList.add('selected'); selTables.clear(); selTables.add('all');
        }
      } else {
        const allBtn = document.querySelector('.all-btn');
        if (selTables.has('all')) { allBtn.classList.remove('selected'); selTables.clear(); }
        const n = parseInt(val);
        if (this.classList.contains('selected')) { this.classList.remove('selected'); selTables.delete(n); }
        else { this.classList.add('selected'); selTables.add(n); }
        if (selTables.size === 11) {
          document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected'));
          allBtn.classList.add('selected'); selTables.clear(); selTables.add('all');
        }
      }
      updateStartBtn();
    });
  });

  document.querySelectorAll('[data-qcount]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-qcount]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selCount = parseInt(this.dataset.qcount);
      updateStartBtn();
    });
  });

  document.querySelectorAll('[data-timed]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-timed]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selTimed = this.dataset.timed === 'true';
      const opts = document.getElementById('time-options');
      if (selTimed) { opts.classList.add('visible'); }
      else { opts.classList.remove('visible'); selTime = null; document.querySelectorAll('[data-timelimit]').forEach(b => b.classList.remove('selected')); }
      updateStartBtn();
    });
  });

  document.querySelectorAll('[data-timelimit]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-timelimit]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selTime = parseInt(this.dataset.timelimit);
      updateStartBtn();
    });
  });

  // Draw `needed` questions from `pool`, capping each unique question at
  // max(2, ceil(needed / poolSize)) appearances. Works for any pool size,
  // whether that is 12 questions (one table) or 132 questions (all tables).
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
        if (seen < maxRepeats && result.length < needed) {
          result.push(q);
          counts.set(key, seen + 1);
        }
      }
      if (passes > 20) break; // safety valve
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

    // Mixed: draw exactly half from each pool, then shuffle together.
    // If count is odd the extra question goes to times tables.
    const divHalf = Math.floor(count / 2);
    const timesHalf = count - divHalf;
    const timesQs = drawCapped(timesPool, timesHalf);
    const divQs   = drawCapped(divPool,   divHalf);
    return [...timesQs, ...divQs].sort(() => Math.random() - 0.5);
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return m + ':' + s;
  }

  function questionLabel(q) { return q.type === 'div' ? q.a + ' ÷ ' + q.b + ' = ?' : q.a + ' × ' + q.b + ' = ?'; }
  function questionResultLabel(q) { return q.type === 'div' ? q.a + ' ÷ ' + q.b + ' = ' + q.answer : q.a + ' × ' + q.b + ' = ' + q.answer; }

  function showQuestion() {
    const q = state.questions[state.current];
    const total = state.questions.length;
    document.getElementById('tt-progress').textContent = 'Question ' + (state.current + 1) + ' of ' + total;
    document.getElementById('tt-progress-bar').style.width = (state.current / total * 100) + '%';
    document.getElementById('tt-question').textContent = questionLabel(q);
    const input = document.getElementById('tt-answer');
    input.value = '';
    input.focus();
  }

  document.getElementById('tt-start-btn').addEventListener('click', function() {
    state.tables = new Set(selTables); state.op = selOp; state.qcount = selCount;
    state.timed = selTimed; state.timelimit = selTime; state.wrongOnly = false;
    startTest(generateQuestions(selTables, selOp, selCount));
  });

  function startTest(questions) {
    state.questions = questions; state.current = 0; state.userAnswers = []; state.elapsed = 0;
    document.getElementById('tt-setup').style.display = 'none';
    document.getElementById('tt-results').classList.remove('active');
    document.getElementById('tt-quiz').classList.add('active');
    const timerEl = document.getElementById('tt-timer');
    if (state.timed) {
      state.remaining = state.timelimit;
      timerEl.style.display = 'block';
      timerEl.textContent = formatTime(state.remaining);
      timerEl.className = 'quiz-timer';
      state.timerInterval = setInterval(() => {
        state.remaining--;
        timerEl.textContent = formatTime(state.remaining);
        if (state.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (state.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (state.remaining <= 0) { clearInterval(state.timerInterval); finishTest(true); }
      }, 1000);
    } else {
      timerEl.style.display = 'none';
      state.timerInterval = setInterval(() => { state.elapsed++; }, 1000);
    }
    showQuestion();
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

  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colours = ['#f94144','#f3722c','#f8961e','#f9c74f','#90be6d','#43aa8b','#577590','#9b5de5','#f15bb5','#00bbf9'];

    // Two launch points — bottom-left and bottom-right corners
    function makePiece(fromX) {
      const leftSide = fromX < canvas.width / 2;
      // Angle range fans inward and upward from each corner
      const angleMin = leftSide ? -Math.PI * 0.85 : -Math.PI * 0.95;
      const angleMax = leftSide ? -Math.PI * 0.15 : -Math.PI * 0.05;
      const angle = angleMin + Math.random() * (angleMax - angleMin);
      const speed = 6 + Math.random() * 10;
      return {
        x: fromX,
        y: canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: 7 + Math.random() * 7,
        h: 4 + Math.random() * 5,
        colour: colours[Math.floor(Math.random() * colours.length)],
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.25,
        gravity: 0.18 + Math.random() * 0.12
      };
    }

    const pieces = [
      ...Array.from({ length: 80 }, () => makePiece(0)),
      ...Array.from({ length: 80 }, () => makePiece(canvas.width))
    ];

    let frame, start;
    const duration = 4500;

    function draw(ts) {
      if (!start) start = ts;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = ts - start;
      const fade = Math.max(0, 1 - (elapsed - duration * 0.55) / (duration * 0.45));
      ctx.globalAlpha = fade;
      for (const p of pieces) {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.colour;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (elapsed < duration) { frame = requestAnimationFrame(draw); }
      else { cancelAnimationFrame(frame); canvas.remove(); }
    }
    frame = requestAnimationFrame(draw);
  }

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
    if (state.timed) {
      const used = state.timelimit - state.remaining;
      timeEl.textContent = timedOut ? 'Time ran out' : 'Time taken: ' + formatTime(used);
    } else {
      timeEl.textContent = 'Time taken: ' + formatTime(state.elapsed);
    }
    const perfectEl = document.getElementById('tt-perfect');
    const wrongWrap = document.getElementById('tt-wrong-wrap');
    const wrongList = document.getElementById('tt-wrong-list');
    const actionsEl = document.getElementById('tt-actions');
    if (perfect) {
      perfectEl.style.display = 'block';
      wrongWrap.style.display = 'none';
      actionsEl.innerHTML = `<button class="results-btn secondary" onclick="resetSetup()">← Menu</button><button class="results-btn primary" onclick="retakeSame()">Try again</button>`;
      if (!state.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      wrongWrap.style.display = 'block';
      wrongList.innerHTML = allWrong.map(a =>
        `<li><span class="q">${questionResultLabel(a.q)}</span>${a.unanswered ? `<span class="not-ans">Not answered</span>` : `<span class="your-ans">You answered: ${a.given}</span>`}</li>`
      ).join('');
      const retryBtn = answeredWrong.length > 0 ? `<button class="results-btn green-btn" onclick="retakeWrong()">Retry wrong answers</button>` : '';
      actionsEl.innerHTML = `<button class="results-btn secondary" onclick="resetSetup()">← Menu</button><button class="results-btn primary" onclick="retakeSame()">Try again</button>${retryBtn}`;
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

  document.getElementById('tt-quiz-menu-btn').addEventListener('click', resetSetup);

  // ── NUMBER BONDS ──────────────────────────────────────────────────────────

  const nbState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, target: null, op: null, qcount: null, wrongOnly: false };
  let nbSelTarget = null, nbSelOp = null, nbSelCount = null, nbSelTimed = null, nbSelTime = null;

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

  document.querySelectorAll('[data-nb-target]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-nb-target]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      nbSelTarget = parseInt(this.dataset.nbTarget);
      nbUpdateStartBtn();
    });
  });

  document.querySelectorAll('[data-nb-op]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-nb-op]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      nbSelOp = this.dataset.nbOp;
      nbUpdateStartBtn();
    });
  });

  document.querySelectorAll('[data-nb-qcount]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-nb-qcount]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      nbSelCount = parseInt(this.dataset.nbQcount);
      nbUpdateStartBtn();
    });
  });

  document.querySelectorAll('[data-nb-timed]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-nb-timed]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      nbSelTimed = this.dataset.nbTimed === 'true';
      const opts = document.getElementById('nb-time-options');
      if (nbSelTimed) { opts.classList.add('visible'); }
      else { opts.classList.remove('visible'); nbSelTime = null; document.querySelectorAll('[data-nb-timelimit]').forEach(b => b.classList.remove('selected')); }
      nbUpdateStartBtn();
    });
  });

  document.querySelectorAll('[data-nb-timelimit]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-nb-timelimit]').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      nbSelTime = parseInt(this.dataset.nbTimelimit);
      nbUpdateStartBtn();
    });
  });

  function nbDrawCapped(pool, needed) {
    const maxRepeats = Math.max(2, Math.ceil(needed / pool.length));
    const counts = new Map();
    const result = [];
    let passes = 0;
    while (result.length < needed) {
      passes++;
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      for (const q of shuffled) {
        const key = q.label;
        const seen = counts.get(key) || 0;
        if (seen < maxRepeats && result.length < needed) {
          result.push(q);
          counts.set(key, seen + 1);
        }
      }
      if (passes > 20) break;
    }
    return result;
  }

  function nbGenerateQuestions(target, op, count) {
    let pairs = [];
    if (target === 10) {
      for (let a = 0; a <= 10; a++) pairs.push([a, 10 - a]);
    } else if (target === 20) {
      for (let a = 0; a <= 20; a++) pairs.push([a, 20 - a]);
    } else if (target === 100) {
      for (let a = 0; a <= 100; a += 10) pairs.push([a, 100 - a]);
    } else if (target === 1000) {
      for (let a = 0; a <= 1000; a += 100) pairs.push([a, 1000 - a]);
    }
    const addPool = [], subPool = [];
    for (const [a, b] of pairs) {
      addPool.push({ label: a + ' + ? = ' + target, resultLabel: a + ' + ' + b + ' = ' + target, answer: b });
      if (a !== b) addPool.push({ label: b + ' + ? = ' + target, resultLabel: b + ' + ' + a + ' = ' + target, answer: a });
      subPool.push({ label: target + ' − ' + a + ' = ?', resultLabel: target + ' − ' + a + ' = ' + b, answer: b });
      if (a !== b) subPool.push({ label: target + ' − ' + b + ' = ?', resultLabel: target + ' − ' + b + ' = ' + a, answer: a });
    }
    if (op === 'addition') return nbDrawCapped(addPool, count);
    if (op === 'subtraction') return nbDrawCapped(subPool, count);
    const subHalf = Math.floor(count / 2);
    const addHalf = count - subHalf;
    return [...nbDrawCapped(addPool, addHalf), ...nbDrawCapped(subPool, subHalf)].sort(() => Math.random() - 0.5);
  }

  function nbStartTest(questions) {
    nbState.questions = questions; nbState.current = 0; nbState.userAnswers = []; nbState.elapsed = 0;
    document.getElementById('nb-setup').style.display = 'none';
    document.getElementById('nb-results').classList.remove('active');
    document.getElementById('nb-quiz').classList.add('active');
    const timerEl = document.getElementById('nb-timer');
    if (nbState.timed) {
      nbState.remaining = nbState.timelimit;
      timerEl.style.display = 'block';
      timerEl.textContent = formatTime(nbState.remaining);
      timerEl.className = 'quiz-timer';
      nbState.timerInterval = setInterval(() => {
        nbState.remaining--;
        timerEl.textContent = formatTime(nbState.remaining);
        if (nbState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (nbState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (nbState.remaining <= 0) { clearInterval(nbState.timerInterval); nbFinishTest(true); }
      }, 1000);
    } else {
      timerEl.style.display = 'none';
      nbState.timerInterval = setInterval(() => { nbState.elapsed++; }, 1000);
    }
    nbShowQuestion();
  }

  function nbShowQuestion() {
    const q = nbState.questions[nbState.current];
    const total = nbState.questions.length;
    document.getElementById('nb-progress').textContent = 'Question ' + (nbState.current + 1) + ' of ' + total;
    document.getElementById('nb-progress-bar').style.width = (nbState.current / total * 100) + '%';
    document.getElementById('nb-question').textContent = q.label;
    const input = document.getElementById('nb-answer');
    input.value = '';
    input.focus();
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

  document.getElementById('nb-next-btn').addEventListener('click', nbSubmitAnswer);
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
        const q = nbState.questions[i];
        nbState.userAnswers.push({ q: q, correct: q.answer, given: null, isCorrect: false, unanswered: true });
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
    if (nbState.timed) {
      const used = nbState.timelimit - nbState.remaining;
      timeEl.textContent = timedOut ? 'Time ran out' : 'Time taken: ' + formatTime(used);
    } else {
      timeEl.textContent = 'Time taken: ' + formatTime(nbState.elapsed);
    }
    const perfectEl = document.getElementById('nb-perfect');
    const wrongWrap = document.getElementById('nb-wrong-wrap');
    const wrongList = document.getElementById('nb-wrong-list');
    const actionsEl = document.getElementById('nb-actions');
    if (perfect) {
      perfectEl.style.display = 'block';
      wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="nbResetSetup()">← Menu</button><button class="results-btn primary" onclick="nbRetakeSame()">Try again</button>';
      if (!nbState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      wrongWrap.style.display = 'block';
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
    while (filled.length < count) { filled.push(...[...wrongQs].sort(() => Math.random() - 0.5)); }
    document.getElementById('nb-results').classList.remove('active');
    nbState.wrongOnly = true; nbState.timed = false;
    nbStartTest(filled.slice(0, count));
  }

  document.getElementById('nb-start-btn').addEventListener('click', function() {
    nbState.target = nbSelTarget; nbState.op = nbSelOp; nbState.qcount = nbSelCount;
    nbState.timed = nbSelTimed; nbState.timelimit = nbSelTime; nbState.wrongOnly = false;
    nbStartTest(nbGenerateQuestions(nbSelTarget, nbSelOp, nbSelCount));
  });

  document.getElementById('nb-quiz-menu-btn').addEventListener('click', nbResetSetup);
</script>
