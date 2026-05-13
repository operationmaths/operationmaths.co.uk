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
        <div class="results-perfect" id="tt-perfect" style="display:none">🎉 Full marks! Brilliant work!</div>
        <div class="results-wrong" id="tt-wrong-wrap" style="display:none">
          <h3>Incorrect or unanswered questions</h3>
          <ul class="wrong-list" id="tt-wrong-list"></ul>
        </div>
        <div class="results-actions" id="tt-actions"></div>
      </div>

    </div>

    <!-- NUMBER BONDS PANEL -->
    <div class="test-panel" id="panel-number-bonds">
      <div class="coming-soon">
        <p>Number bonds test — coming soon!</p>
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
    let pool;
    if (op === 'times') pool = timesPool;
    else if (op === 'division') pool = divPool;
    else pool = [...timesPool, ...divPool];
    const qs = [];
    while (qs.length < count) { qs.push(...[...pool].sort(() => Math.random() - 0.5)); }
    return qs.slice(0, count);
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
</script>
