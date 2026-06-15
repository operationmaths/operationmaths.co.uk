---
layout: default
title: Online Maths Tests
description: Online maths tests for KS2, KS3 & KS4 students from Operation Maths.
permalink: /online-maths-tests/
---

<style>
:root { --blue: #1c75bc; --blue-dark: #155f99; --green: #009444; --green-dark: #007a38; --purple: #800080; --orange: #f7941e; --orange-dark: #d47c10; }
.dark-btn { background: #fff; color: #374151; border: 2px solid #d0d0d0; }
.dark-btn:hover { background: #f5f6f8; border-color: #9ca3af; }
.option-btn.dark-btn:hover { background: #f0f0f0; border-color: #9ca3af; color: #111827; }
.option-btn.dark-btn.selected { background: #111827; color: #fff; border-color: #111827; }
.table-btn.selected { background: var(--blue); color: #fff; border-color: var(--blue); }
.script-l { font-family: "Times New Roman", "Liberation Serif", serif; font-style: normal; }

.frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; font-size: 0.85em; line-height: 1.1; margin: 0 2px; }
.frac sup, .frac sub { font-size: 1em; line-height: 1.2; }
.frac .frac-bar { border-top: 1.5px solid currentColor; width: 100%; display: block; margin: 1px 0; }
.dark-btn { background: #fff; color: #374151; border: 1.5px solid #e5e7eb; }
.dark-btn:hover { background: #f5f6f8; border-color: #9ca3af; }
.option-btn.dark-btn:hover { background: #f0f0f0; border-color: #9ca3af; color: #111827; }
.option-btn.dark-btn.selected { background: #111827; color: #fff; border-color: #111827; }
.option-btn.blue-btn { background: #fff; }
.table-btn { background: #fff; }
.table-btn:hover { background: #f0f6ff; border-color: var(--blue); color: var(--blue); }
.table-btn.selected { background: var(--blue); color: #fff; border-color: var(--blue); }
.timeout-pill { display: inline-block; background: #fff5e6; color: #b85c00; font-size: 0.8rem; font-weight: 500; padding: 3px 10px; border-radius: 20px; border: 1px solid #f7941e; margin: 4px 0 12px; }
.no-wrong-msg { font-size: 0.9rem; color: #6b7280; font-style: italic; margin: 0.5rem 0 1.5rem; }
.wrong-table th { text-align: left; font-size: 0.78rem; font-weight: 600; color: #6b7280; padding: 5px 10px; border-bottom: 1px solid #e5e7eb; }
.wrong-table td { padding: 6px 10px; border-bottom: 1px solid #f3f4f6; }
.wrong-table tr:last-child td { border-bottom: none; }
.wrong-table td.your-ans-cell { color: #c0392b; font-weight: 600; }
.wrong-table td:nth-child(2) { font-weight: 600; }
.results-wrong { width: 100%; }
.fdp-q-wrap { display: flex; flex-direction: column; height: 14rem; }
#fdp-question { font-size: clamp(1.1rem, 3.5vw, 2.25rem); flex-shrink: 0; height: 6rem; display: flex; align-items: center; justify-content: center; text-align: center; overflow: visible; flex-wrap: wrap; gap: 0.3em; line-height: 1.6; }
.fdp-options { display: flex; gap: 10px; flex-wrap: nowrap; margin-top: 1.25rem; justify-content: center; align-items: stretch; }
.fdp-opt-btn { flex: 1; height: 72px; min-width: 0; padding: 6px 8px; font-size: 1.05rem; font-weight: 700; border: 2px solid #d0d0d0; border-radius: 8px; background: #fff; cursor: pointer; transition: background 0.12s, border-color 0.12s; font-family: inherit; display: flex; align-items: center; justify-content: center; text-align: center; box-sizing: border-box; }
.fdp-opt-btn:hover { background: #f0f6ff; border-color: var(--blue); color: var(--blue); }
.fdp-opt-btn.selected { background: var(--blue); border-color: var(--blue); color: #fff; }
</style>

<section class="om-hero" style="min-height:0; padding: 4rem 2rem 1rem;">
  <h1>Online <em>maths tests</em></h1>
  <p>Choose a test below, pick your settings and go.<br>One question at a time – results at the end.</p>
  <div class="test-tabs" style="margin-top:1.75rem;">
    <button class="test-tab active" data-target="times-tables">Times tables</button>
    <button class="test-tab" data-target="number-bonds">Number bonds</button>
    <button class="test-tab" data-target="doubling-halving">Double and halve</button>
    <button class="test-tab" data-target="rounding">Rounding</button>
    <button class="test-tab" data-target="fdp-conversions">FDP conversions</button>
    <button class="test-tab" data-target="fractions-of-numbers">Fractions of numbers</button>
    <button class="test-tab" data-target="metric-conversions">Metric conversions</button>
    <button class="test-tab" data-target="powers-and-roots">Powers and roots</button>
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
            <button class="option-btn dark-btn selected" data-op="times" onclick="ttSelectOp(this)">Times tables (×)</button>
            <button class="option-btn dark-btn" data-op="division" onclick="ttSelectOp(this)">Division (÷)</button>
            <button class="option-btn dark-btn" data-op="mixed" onclick="ttSelectOp(this)">MIXED (× and ÷)</button>
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
              <button class="option-btn purple-btn" data-timelimit="60" onclick="ttSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-timelimit="120" onclick="ttSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-timelimit="300" onclick="ttSelectTime(this)">5 minutes</button>
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
        <button class="quiz-next-btn" id="tt-next-btn">Next question →</button>
        <button class="quiz-menu-btn" id="tt-quiz-menu-btn">← Menu</button>
      </div>

      <div class="results-card" id="tt-results">
        <div class="results-score" id="tt-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="tt-time-taken"></div>
        <div class="results-timeout" id="tt-timeout"></div>
        <div class="results-perfect" id="tt-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="tt-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="tt-wrong-list"></tbody></table>
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
            <button class="option-btn dark-btn selected" data-nb-target="10" onclick="nbSelectTarget(this)">10</button>
            <button class="option-btn dark-btn" data-nb-target="20" onclick="nbSelectTarget(this)">20</button>
            <button class="option-btn dark-btn" data-nb-target="100" onclick="nbSelectTarget(this)">100</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Operation</span>
          <div class="option-row">
            <button class="option-btn blue-btn" data-nb-op="addition" onclick="nbSelectOp(this)">Addition (+)</button>
            <button class="option-btn blue-btn" data-nb-op="subtraction" onclick="nbSelectOp(this)">Subtraction (−)</button>
            <button class="option-btn blue-btn" data-nb-op="mixed" onclick="nbSelectOp(this)">MIXED (+ and −)</button>
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
              <button class="option-btn purple-btn" data-nb-timelimit="60" onclick="nbSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-nb-timelimit="120" onclick="nbSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-nb-timelimit="300" onclick="nbSelectTime(this)">5 minutes</button>
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
        <button class="quiz-next-btn" id="nb-next-btn" onclick="nbSubmitAnswer()">Next question →</button>
        <button class="quiz-menu-btn" id="nb-quiz-menu-btn" onclick="nbResetSetup()">← Menu</button>
      </div>

      <div class="results-card" id="nb-results">
        <div class="results-score" id="nb-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="nb-time-taken"></div>
        <div class="results-timeout" id="nb-timeout"></div>
        <div class="results-perfect" id="nb-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="nb-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="nb-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="nb-actions"></div>
      </div>

    </div>

    <!-- DOUBLING AND HALVING PANEL -->
    <div class="test-panel" id="panel-doubling-halving">

      <div class="setup-card" id="dh-setup">
        <div class="setup-section">
          <span class="setup-section-title">Type</span>
          <div class="option-row">
            <button class="option-btn dark-btn" data-dh-type="doubles" onclick="dhSelectType(this)">Doubles to 10</button>
            <button class="option-btn dark-btn" data-dh-type="halves" onclick="dhSelectType(this)">Halves to 20</button>
            <button class="option-btn dark-btn" id="dh-mixed-btn" data-dh-type="mixed" onclick="dhSelectMixed(this)">MIXED</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-dh-qcount="20" onclick="dhSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-dh-qcount="60" onclick="dhSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-dh-timed="false" onclick="dhSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-dh-timed="true" onclick="dhSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="dh-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-dh-timelimit="60" onclick="dhSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-dh-timelimit="120" onclick="dhSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-dh-timelimit="300" onclick="dhSelectTime(this)">5 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="dh-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="dh-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="dh-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="dh-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="dh-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="dh-question">Double 4 = ?</div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="dh-answer" type="text" inputmode="numeric" autocomplete="off" placeholder="?" pattern="[0-9]*">
        </div>
        <button class="quiz-next-btn" id="dh-next-btn" onclick="dhSubmitAnswer()">Next question →</button>
        <button class="quiz-menu-btn" id="dh-quiz-menu-btn" onclick="dhResetSetup()">← Menu</button>
      </div>

      <div class="results-card" id="dh-results">
        <div class="results-score" id="dh-score">20/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="dh-time-taken"></div>
        <div class="results-timeout" id="dh-timeout"></div>
        <div class="results-perfect" id="dh-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="dh-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="dh-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="dh-actions"></div>
      </div>

    </div>

    <!-- ROUNDING PANEL -->
    <div class="test-panel" id="panel-rounding">

      <div class="setup-card" id="rnd-setup">
        <div class="setup-section">
          <span class="setup-section-title">Round to</span>
          <div class="option-row">
            <button class="option-btn dark-btn" data-rnd-whole="10" onclick="rndSelectWhole(this)">Nearest 10</button>
            <button class="option-btn dark-btn" data-rnd-whole="100" onclick="rndSelectWhole(this)">Nearest 100</button>
            <button class="option-btn dark-btn" data-rnd-whole="1000" onclick="rndSelectWhole(this)">Nearest 1,000</button>
            <button class="option-btn dark-btn" id="rnd-whole-mixed-btn" data-rnd-whole="mixed-whole" onclick="rndSelectWholeMixed(this)">MIXED</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Round to</span>
          <div class="option-row">
            <button class="option-btn dark-btn" data-rnd-type="dp" onclick="rndSelectType(this)">Decimal places</button>
            <button class="option-btn dark-btn" data-rnd-type="sf" onclick="rndSelectType(this)">Significant figures</button>
            <button class="option-btn dark-btn" data-rnd-type="mixed-dpSf" onclick="rndSelectType(this)">MIXED</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-rnd-qcount="20" onclick="rndSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-rnd-qcount="60" onclick="rndSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-rnd-timed="false" onclick="rndSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-rnd-timed="true" onclick="rndSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="rnd-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-rnd-timelimit="60" onclick="rndSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-rnd-timelimit="120" onclick="rndSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-rnd-timelimit="300" onclick="rndSelectTime(this)">5 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="rnd-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="rnd-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="rnd-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="rnd-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="rnd-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="rnd-question"></div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="rnd-answer" type="text" inputmode="decimal" autocomplete="off" placeholder="?">
        </div>
        <button class="quiz-next-btn" id="rnd-next-btn" onclick="rndSubmitAnswer()">Next question &#8594;</button>
        <button class="quiz-menu-btn" id="rnd-quiz-menu-btn" onclick="rndResetSetup()">&#8592; Menu</button>
      </div>

      <div class="results-card" id="rnd-results">
        <div class="results-score" id="rnd-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="rnd-time-taken"></div>
        <div class="results-timeout" id="rnd-timeout"></div>
        <div class="results-perfect" id="rnd-perfect" style="display:none">Full marks &#8212; excellent work!</div>
        <div class="results-wrong" id="rnd-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="rnd-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="rnd-actions"></div>
      </div>

    </div>

    <!-- FDP CONVERSIONS PANEL -->
    <div class="test-panel" id="panel-fdp-conversions">

      <div class="setup-card" id="fdp-setup">
        <div class="setup-section">
          <span class="setup-section-title">Level</span>
          <div class="option-row">
            <button class="option-btn dark-btn selected" data-fdp-level="basic" onclick="fdpSelectLevel(this)">Basic</button>
            <button class="option-btn dark-btn" data-fdp-level="tenths-hundredths" onclick="fdpSelectLevel(this)">Tenths &amp; hundredths</button>
            <button class="option-btn dark-btn" data-fdp-level="mixed" onclick="fdpSelectLevel(this)">MIXED</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-fdp-qcount="20" onclick="fdpSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-fdp-qcount="60" onclick="fdpSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-fdp-timed="false" onclick="fdpSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-fdp-timed="true" onclick="fdpSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="fdp-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-fdp-timelimit="60" onclick="fdpSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-fdp-timelimit="120" onclick="fdpSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-fdp-timelimit="300" onclick="fdpSelectTime(this)">5 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="fdp-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="fdp-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="fdp-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="fdp-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="fdp-progress-bar" style="width:0%"></div>
        </div>
        <div class="fdp-q-wrap">
          <div class="quiz-question" id="fdp-question"></div>
          <div class="fdp-options" id="fdp-options"></div>
        </div>
        <button class="quiz-menu-btn" id="fdp-quiz-menu-btn" onclick="fdpResetSetup()">← Menu</button>
      </div>

      <div class="results-card" id="fdp-results">
        <div class="results-score" id="fdp-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="fdp-time-taken"></div>
        <div class="results-timeout" id="fdp-timeout"></div>
        <div class="results-perfect" id="fdp-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="fdp-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="fdp-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="fdp-actions"></div>
      </div>

    </div>

    <!-- FRACTIONS OF NUMBERS PANEL -->
    <div class="test-panel" id="panel-fractions-of-numbers">

      <div class="setup-card" id="fon-setup">
        <div class="setup-section">
          <span class="setup-section-title">Level</span>
          <div class="option-row">
            <button class="option-btn dark-btn selected" data-fon-level="1" onclick="fonSelectLevel(this)">Unit fractions</button>
            <button class="option-btn dark-btn" data-fon-level="2" onclick="fonSelectLevel(this)">Proper fractions</button>
            <button class="option-btn dark-btn" data-fon-level="3" onclick="fonSelectLevel(this)">Larger numbers</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-fon-qcount="20" onclick="fonSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-fon-qcount="60" onclick="fonSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-fon-timed="false" onclick="fonSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-fon-timed="true" onclick="fonSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="fon-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-fon-timelimit="60" onclick="fonSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-fon-timelimit="120" onclick="fonSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-fon-timelimit="300" onclick="fonSelectTime(this)">5 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="fon-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="fon-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="fon-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="fon-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="fon-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="fon-question"></div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="fon-answer" type="text" inputmode="numeric" autocomplete="off" placeholder="?">
        </div>
        <button class="quiz-next-btn" id="fon-next-btn" onclick="fonSubmitAnswer()">Next question &#8594;</button>
        <button class="quiz-menu-btn" id="fon-quiz-menu-btn" onclick="fonResetSetup()">&#8592; Menu</button>
      </div>

      <div class="results-card" id="fon-results">
        <div class="results-score" id="fon-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="fon-time-taken"></div>
        <div class="results-timeout" id="fon-timeout"></div>
        <div class="results-perfect" id="fon-perfect" style="display:none">Full marks &#8212; excellent work!</div>
        <div class="results-wrong" id="fon-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="fon-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="fon-actions"></div>
      </div>

    </div>

    <!-- METRIC CONVERSIONS PANEL -->
    <div class="test-panel" id="panel-metric-conversions">

      <div class="setup-card" id="mc-setup">
        <div class="setup-section">
          <span class="setup-section-title">Difficulty</span>
          <div class="option-row">
            <button class="option-btn dark-btn selected" data-mc-diff="basic" onclick="mcSelectDiff(this)">Basic</button>
            <button class="option-btn dark-btn" data-mc-diff="easier" onclick="mcSelectDiff(this)">Easier</button>
            <button class="option-btn dark-btn" data-mc-diff="harder" onclick="mcSelectDiff(this)">Harder</button>
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
              <button class="option-btn purple-btn" data-mc-timelimit="60" onclick="mcSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-mc-timelimit="120" onclick="mcSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-mc-timelimit="300" onclick="mcSelectTime(this)">5 minutes</button>
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
        <button class="quiz-next-btn" id="mc-next-btn" onclick="mcSubmitAnswer()">Next question →</button>
        <button class="quiz-menu-btn" id="mc-quiz-menu-btn" onclick="mcResetSetup()">← Menu</button>
      </div>

      <div class="results-card" id="mc-results">
        <div class="results-score" id="mc-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="mc-time-taken"></div>
        <div class="results-timeout" id="mc-timeout"></div>
        <div class="results-perfect" id="mc-perfect" style="display:none">Full marks — excellent work!</div>
        <div class="results-wrong" id="mc-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="mc-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="mc-actions"></div>
      </div>

    </div>


    <!-- POWERS AND ROOTS PANEL -->
    <div class="test-panel" id="panel-powers-and-roots">

      <div class="setup-card" id="pr-setup">
        <div class="setup-section">
          <span class="setup-section-title">Type</span>
          <div class="option-row">
            <button class="option-btn dark-btn" data-pr-type="squares" onclick="prSelectType(this)">Squares</button>
            <button class="option-btn dark-btn" data-pr-type="square-roots" onclick="prSelectType(this)">Square roots</button>
            <button class="option-btn dark-btn" data-pr-type="cubes" onclick="prSelectType(this)">Cubes</button>
            <button class="option-btn dark-btn" data-pr-type="cube-roots" onclick="prSelectType(this)">Cube roots</button>
            <button class="option-btn dark-btn" id="pr-mixed-btn" data-pr-type="mixed" onclick="prSelectMixed(this)">MIXED</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Questions</span>
          <div class="option-row">
            <button class="option-btn green-btn" data-pr-qcount="20" onclick="prSelectCount(this)">Quick test (20 questions)</button>
            <button class="option-btn green-btn" data-pr-qcount="60" onclick="prSelectCount(this)">Full test (60 questions)</button>
          </div>
        </div>
        <div class="setup-section">
          <span class="setup-section-title">Timing</span>
          <div class="option-row">
            <button class="option-btn purple-btn" data-pr-timed="false" onclick="prSelectTimed(this)">Untimed</button>
            <button class="option-btn purple-btn" data-pr-timed="true" onclick="prSelectTimed(this)">Timed</button>
          </div>
          <div class="time-options" id="pr-time-options">
            <span class="setup-section-title" style="margin-top:0.75rem;display:block">Time limit</span>
            <div class="option-row">
              <button class="option-btn purple-btn" data-pr-timelimit="60" onclick="prSelectTime(this)">1 minute</button>
              <button class="option-btn purple-btn" data-pr-timelimit="120" onclick="prSelectTime(this)">2 minutes</button>
              <button class="option-btn purple-btn" data-pr-timelimit="300" onclick="prSelectTime(this)">5 minutes</button>
            </div>
          </div>
        </div>
        <div class="setup-section">
          <button class="start-btn" id="pr-start-btn" disabled>Start test</button>
        </div>
      </div>

      <div class="quiz-card" id="pr-quiz">
        <div class="quiz-meta">
          <span class="quiz-progress" id="pr-progress">Question 1 of 20</span>
          <span class="quiz-timer" id="pr-timer" style="display:none"></span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="pr-progress-bar" style="width:0%"></div>
        </div>
        <div class="quiz-question" id="pr-question"></div>
        <div class="quiz-input-wrap">
          <input class="quiz-input" id="pr-answer" type="text" inputmode="numeric" autocomplete="off" placeholder="?">
        </div>
        <button class="quiz-next-btn" id="pr-next-btn" onclick="prSubmitAnswer()">Next question &#8594;</button>
        <button class="quiz-menu-btn" id="pr-quiz-menu-btn" onclick="prResetSetup()">&#8592; Menu</button>
      </div>

      <div class="results-card" id="pr-results">
        <div class="results-score" id="pr-score">17/20</div>
        <div class="results-label">correct answers</div>
        <div class="results-time" id="pr-time-taken"></div>
        <div class="results-timeout" id="pr-timeout"></div>
        <div class="results-perfect" id="pr-perfect" style="display:none">Full marks &#8212; excellent work!</div>
        <div class="results-wrong" id="pr-wrong-wrap" style="display:none">
          <h3>Wrong answers</h3>
          <table class="wrong-table"><thead><tr><th>Question</th><th>Correct answer</th><th>Your answer</th></tr></thead><tbody id="pr-wrong-list"></tbody></table>
        </div>
        <div class="results-actions" id="pr-actions"></div>
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

  const dhState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, type: null, qcount: null, wrongOnly: false };
  let dhSelTypes = new Set(), dhSelCount = null, dhSelTimed = null, dhSelTime = null;

  const mcState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, diff: null, groups: new Set(), qcount: null, wrongOnly: false };
  let mcSelDiff = null, mcSelGroups = new Set(), mcSelCount = null, mcSelTimed = null, mcSelTime = null;

  const fdpState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, level: 'basic', qcount: null, wrongOnly: false };
  let fdpSelLevel = 'basic', fdpSelCount = null, fdpSelTimed = null, fdpSelTime = null;

  const fonState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, level: '1', qcount: null, wrongOnly: false };
  let fonSelLevel = '1', fonSelCount = null, fonSelTimed = null, fonSelTime = null;

  const rndState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, type: null, qcount: null, wrongOnly: false };
  let rndSelType = null, rndSelWholeTypes = new Set(), rndSelCount = null, rndSelTimed = null, rndSelTime = null;

  const prState = { questions: [], current: 0, userAnswers: [], elapsed: 0, remaining: 0, timerInterval: null, timed: false, timelimit: null, type: null, qcount: null, wrongOnly: false };
  let prSelTypes = new Set(), prSelCount = null, prSelTimed = null, prSelTime = null;

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

  function wrongTableRows(answeredWrong, questionFn, correctFn) {
    return answeredWrong.map(a =>
      '<tr><td>' + questionFn(a) + '</td><td>' + correctFn(a) + '</td><td class="your-ans-cell">' + a.given + '</td></tr>'
    ).join('');
  }

  function timedOutPill(notReached) {
    if (notReached <= 0) return '';
    return '<span class="timeout-pill">Time ran out \u2014 ' + notReached + ' question' + (notReached === 1 ? '' : 's') + ' not answered</span>';
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
    if (typeof dhResetSetup === 'function') dhResetSetup();
    mcResetSetup();
    if (typeof fdpResetSetup === 'function') fdpResetSetup();
    if (typeof fonResetSetup === 'function') fonResetSetup();
    if (typeof rndResetSetup === 'function') rndResetSetup();
    if (typeof prResetSetup === 'function') prResetSetup();
  }

  document.querySelectorAll('.test-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;
      history.pushState(null, '', '/online-maths-tests/#' + target);
      activateTab(target);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.replace('#', '') || 'times-tables';
    const valid = ['times-tables', 'number-bonds', 'doubling-halving', 'metric-conversions', 'fdp-conversions', 'fractions-of-numbers', 'rounding', 'powers-and-roots'];
    activateTab(valid.includes(hash) ? hash : 'times-tables');
  });

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
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); selOp = null; updateTableLabels('times'); updateStartBtn(); return; }
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
    const notReached = state.questions.length - state.current;
    if (timedOut) {
      for (let i = state.current; i < state.questions.length; i++) {
        const q = state.questions[i];
        state.userAnswers.push({ q: q, correct: q.answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('tt-quiz').classList.remove('active');
    const correct = state.userAnswers.filter(a => a.isCorrect).length;
    const total = timedOut ? state.userAnswers.filter(a => !a.unanswered).length : state.userAnswers.length;
    const answeredWrong = state.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const perfect = correct === total;
    document.getElementById('tt-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('tt-time-taken');
    if (state.timed) { const used = state.timelimit - state.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(state.elapsed); }
    const pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('tt-timeout').innerHTML = pill;
    const perfectEl = document.getElementById('tt-perfect');
    const wrongWrap = document.getElementById('tt-wrong-wrap');
    const wrongList = document.getElementById('tt-wrong-list');
    const actionsEl = document.getElementById('tt-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="resetSetup()">← Menu</button><button class="results-btn primary" onclick="retakeSame()">Try again</button>';
      if (!state.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, a => questionLabel(a.q), a => a.correct);
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('tt-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers — well done!</p>';
      }
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="retakeWrong()">Retry incorrect</button>' : '';
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
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); nbSelTarget = null; nbUpdateStartBtn(); return; }
    document.querySelectorAll('[data-nb-target]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    nbSelTarget = parseInt(btn.dataset.nbTarget);
    nbUpdateStartBtn();
  }

  function nbSelectOp(btn) {
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); nbSelOp = null; nbUpdateStartBtn(); return; }
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
    else if (target === 100) { for (let a = 0; a <= 100; a++) pairs.push([a, 100 - a]); }
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
    const notReached = nbState.questions.length - nbState.current;
    if (timedOut) {
      for (let i = nbState.current; i < nbState.questions.length; i++) {
        nbState.userAnswers.push({ q: nbState.questions[i], correct: nbState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('nb-quiz').classList.remove('active');
    const correct = nbState.userAnswers.filter(a => a.isCorrect).length;
    const total = timedOut ? nbState.userAnswers.filter(a => !a.unanswered).length : nbState.userAnswers.length;
    const answeredWrong = nbState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const perfect = correct === total;
    document.getElementById('nb-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('nb-time-taken');
    if (nbState.timed) { const used = nbState.timelimit - nbState.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(nbState.elapsed); }
    const pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('nb-timeout').innerHTML = pill;
    const perfectEl = document.getElementById('nb-perfect');
    const wrongWrap = document.getElementById('nb-wrong-wrap');
    const wrongList = document.getElementById('nb-wrong-list');
    const actionsEl = document.getElementById('nb-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="nbResetSetup()">← Menu</button><button class="results-btn primary" onclick="nbRetakeSame()">Try again</button>';
      if (!nbState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, a => a.q.label.includes('?') ? a.q.label : a.q.label + ' = ?', a => a.correct);
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('nb-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="nbRetakeWrong()">Retry incorrect</button>' : '';
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

  // ── DOUBLING AND HALVING SETUP ────────────────────────────────────────────
  function dhUpdateStartBtn() {
    const timedOk = dhSelTimed === false || (dhSelTimed === true && dhSelTime !== null);
    document.getElementById('dh-start-btn').disabled = !(dhSelTypes.size > 0 && dhSelCount !== null && dhSelTimed !== null && timedOk);
  }
  function dhResetSetup() {
    clearInterval(dhState.timerInterval);
    document.getElementById('dh-quiz').classList.remove('active');
    document.getElementById('dh-results').classList.remove('active');
    document.getElementById('dh-setup').style.display = '';
    dhSelTypes = new Set(); dhSelCount = null; dhSelTimed = null; dhSelTime = null;
    document.querySelectorAll('[data-dh-type]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-dh-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-dh-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-dh-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('dh-time-options').classList.remove('visible');
    dhUpdateStartBtn();
  }
  function dhSelectType(btn) {
    const val = btn.dataset.dhType;
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); dhSelTypes.delete(val); }
    else { btn.classList.add('selected'); dhSelTypes.add(val); document.getElementById('dh-mixed-btn').classList.remove('selected'); dhSelTypes.delete('mixed'); }
    if (dhSelTypes.has('doubles') && dhSelTypes.has('halves')) {
      document.querySelectorAll('[data-dh-type]').forEach(b => b.classList.remove('selected'));
      document.getElementById('dh-mixed-btn').classList.add('selected');
      dhSelTypes.clear(); dhSelTypes.add('mixed');
    }
    dhUpdateStartBtn();
  }
  function dhSelectMixed(btn) {
    document.querySelectorAll('[data-dh-type]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); dhSelTypes.clear(); dhSelTypes.add('mixed');
    dhUpdateStartBtn();
  }
  function dhSelectCount(btn) {
    document.querySelectorAll('[data-dh-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); dhSelCount = parseInt(btn.dataset.dhQcount); dhUpdateStartBtn();
  }
  function dhSelectTimed(btn) {
    document.querySelectorAll('[data-dh-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); dhSelTimed = btn.dataset.dhTimed === 'true';
    const opts = document.getElementById('dh-time-options');
    if (dhSelTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); dhSelTime = null; document.querySelectorAll('[data-dh-timelimit]').forEach(b => b.classList.remove('selected')); }
    dhUpdateStartBtn();
  }
  function dhSelectTime(btn) {
    document.querySelectorAll('[data-dh-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); dhSelTime = parseInt(btn.dataset.dhTimelimit); dhUpdateStartBtn();
  }
  function dhGenerateQuestions(types, count) {
    const doublesPool = [], halvesPool = [];
    for (let n = 1; n <= 10; n++) doublesPool.push({ label: 'Double ' + n + ' = ?', answer: n * 2 });
    for (let n = 2; n <= 20; n += 2) halvesPool.push({ label: 'Half of ' + n + ' = ?', answer: n / 2 });
    if (types.has('doubles')) return shuffleNoConsec(genericDrawCapped(doublesPool, count));
    if (types.has('halves')) return shuffleNoConsec(genericDrawCapped(halvesPool, count));
    const half = Math.floor(count / 2);
    return shuffleNoConsec([...genericDrawCapped(doublesPool, count - half), ...genericDrawCapped(halvesPool, half)]);
  }
  function dhStartTest(questions) {
    dhState.questions = questions; dhState.current = 0; dhState.userAnswers = []; dhState.elapsed = 0;
    document.getElementById('dh-setup').style.display = 'none';
    document.getElementById('dh-results').classList.remove('active');
    document.getElementById('dh-quiz').classList.add('active');
    const timerEl = document.getElementById('dh-timer');
    if (dhState.timed) {
      dhState.remaining = dhState.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(dhState.remaining); timerEl.className = 'quiz-timer';
      dhState.timerInterval = setInterval(function() {
        dhState.remaining--; timerEl.textContent = formatTime(dhState.remaining);
        if (dhState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (dhState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (dhState.remaining <= 0) { clearInterval(dhState.timerInterval); dhFinishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; dhState.timerInterval = setInterval(function() { dhState.elapsed++; }, 1000); }
    dhShowQuestion();
  }
  function dhShowQuestion() {
    const q = dhState.questions[dhState.current];
    const total = dhState.questions.length;
    document.getElementById('dh-progress').textContent = 'Question ' + (dhState.current + 1) + ' of ' + total;
    document.getElementById('dh-progress-bar').style.width = (dhState.current / total * 100) + '%';
    document.getElementById('dh-question').textContent = q.label;
    const input = document.getElementById('dh-answer');
    input.value = ''; input.focus();
  }
  function dhSubmitAnswer() {
    const input = document.getElementById('dh-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const given = parseInt(raw, 10);
    if (isNaN(given)) return;
    const q = dhState.questions[dhState.current];
    dhState.userAnswers.push({ q: q, correct: q.answer, given: given, isCorrect: given === q.answer, unanswered: false });
    dhState.current++;
    if (dhState.current >= dhState.questions.length) { dhFinishTest(false); } else { dhShowQuestion(); }
  }
  document.getElementById('dh-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); dhSubmitAnswer(); return; }
    var allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });
  function dhFinishTest(timedOut) {
    clearInterval(dhState.timerInterval);
    var notReached = dhState.questions.length - dhState.current;
    if (timedOut) {
      for (var i = dhState.current; i < dhState.questions.length; i++) {
        dhState.userAnswers.push({ q: dhState.questions[i], correct: dhState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('dh-quiz').classList.remove('active');
    var correct = dhState.userAnswers.filter(function(a) { return a.isCorrect; }).length;
    var total = timedOut ? dhState.userAnswers.filter(function(a) { return !a.unanswered; }).length : dhState.userAnswers.length;
    var answeredWrong = dhState.userAnswers.filter(function(a) { return !a.isCorrect && !a.unanswered; });
    var perfect = correct === total;
    document.getElementById('dh-score').textContent = correct + '/' + total;
    var timeEl = document.getElementById('dh-time-taken');
    if (dhState.timed) { var used = dhState.timelimit - dhState.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(dhState.elapsed); }
    var pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('dh-timeout').innerHTML = pill;
    var perfectEl = document.getElementById('dh-perfect');
    var wrongWrap = document.getElementById('dh-wrong-wrap');
    var wrongList = document.getElementById('dh-wrong-list');
    var actionsEl = document.getElementById('dh-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="dhResetSetup()">← Menu</button><button class="results-btn primary" onclick="dhRetakeSame()">Try again</button>';
      if (!dhState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, function(a) { return a.q.label; }, function(a) { return a.correct; });
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('dh-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      var retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="dhRetakeWrong()">Retry incorrect</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="dhResetSetup()">← Menu</button><button class="results-btn primary" onclick="dhRetakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('dh-results').classList.add('active');
  }
  function dhRetakeSame() {
    document.getElementById('dh-results').classList.remove('active');
    dhState.wrongOnly = false;
    dhStartTest(dhGenerateQuestions(dhState.types, dhState.qcount));
  }
  function dhRetakeWrong() {
    var answeredWrong = dhState.userAnswers.filter(function(a) { return !a.isCorrect && !a.unanswered; });
    var wrongQs = answeredWrong.map(function(a) { return a.q; });
    var count = Math.min(wrongQs.length, dhState.qcount);
    var filled = [];
    while (filled.length < count) { filled.push.apply(filled, shuffleNoConsec(wrongQs.slice())); }
    document.getElementById('dh-results').classList.remove('active');
    dhState.wrongOnly = true; dhState.timed = false;
    dhStartTest(filled.slice(0, count));
  }
  document.getElementById('dh-start-btn').addEventListener('click', function() {
    dhState.types = new Set(dhSelTypes); dhState.qcount = dhSelCount;
    dhState.timed = dhSelTimed; dhState.timelimit = dhSelTime; dhState.wrongOnly = false;
    dhStartTest(dhGenerateQuestions(dhSelTypes, dhSelCount));
  });

  // ── METRIC CONVERSIONS SETUP ──────────────────────────────────────────────
  const scriptL = '<span class="script-l">ℓ</span>';
  const MC_BASIC_POOL = [
    { label: '1 cm = ? mm',  resultLabel: '1 cm = 10 mm',    answer: '10' },
    { label: '1 m = ? cm',   resultLabel: '1 m = 100 cm',    answer: '100' },
    { label: '1 km = ? m',   resultLabel: '1 km = 1000 m',   answer: '1000' },
    { label: '1 ' + scriptL + ' = ? m' + scriptL, resultLabel: '1 ' + scriptL + ' = 1000 m' + scriptL, answer: '1000' },
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
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); mcSelDiff = null; document.getElementById('mc-groups-section').style.display = 'none'; mcUpdateStartBtn(); return; }
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
          const from = pair.from.replace('ml', 'm' + scriptL).replace('l', scriptL);
          const to = pair.to.replace('ml', 'm' + scriptL).replace('l', scriptL);
          const qLabel = mcFormatNum(v) + ' ' + from + ' = ? ' + to;
          const rLabel = mcFormatNum(v) + ' ' + from + ' = ' + ans + ' ' + to;
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
    document.getElementById('mc-question').innerHTML = q.label;
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
    const notReached = mcState.questions.length - mcState.current;
    if (timedOut) {
      for (let i = mcState.current; i < mcState.questions.length; i++) {
        mcState.userAnswers.push({ q: mcState.questions[i], correct: mcState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('mc-quiz').classList.remove('active');
    const correct = mcState.userAnswers.filter(a => a.isCorrect).length;
    const total = timedOut ? mcState.userAnswers.filter(a => !a.unanswered).length : mcState.userAnswers.length;
    const answeredWrong = mcState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const perfect = correct === total;
    document.getElementById('mc-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('mc-time-taken');
    if (mcState.timed) { const used = mcState.timelimit - mcState.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(mcState.elapsed); }
    const pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('mc-timeout').innerHTML = pill;
    const perfectEl = document.getElementById('mc-perfect');
    const wrongWrap = document.getElementById('mc-wrong-wrap');
    const wrongList = document.getElementById('mc-wrong-list');
    const actionsEl = document.getElementById('mc-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="mcResetSetup()">← Menu</button><button class="results-btn primary" onclick="mcRetakeSame()">Try again</button>';
      if (!mcState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, a => a.q.label, a => a.correct);
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('mc-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="mcRetakeWrong()">Retry incorrect</button>' : '';
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

  // ── FDP CONVERSIONS ───────────────────────────────────────────────────────

  function fracHTML(n, d) {
    return '&nbsp;<span class="frac"><sup>' + n + '</sup><span class="frac-bar"></span><sub>' + d + '</sub></span>&nbsp;';
  }

  function fdpBuildFacts(level) {
    const facts = [];
    if (level === 'basic') {
      for (const b of [{n:1,d:2,dec:0.5,pct:50},{n:1,d:4,dec:0.25,pct:25},{n:1,d:5,dec:0.2,pct:20},{n:1,d:10,dec:0.1,pct:10},{n:1,d:100,dec:0.01,pct:1}])
        facts.push({n:b.n,d:b.d,decimal:b.dec,percent:b.pct});
    } else if (level === 'tenths-hundredths') {
      for (let i=1;i<=9;i++) facts.push({n:i,d:10,decimal:i/10,percent:i*10});
      for (let i=1;i<=99;i++) {
        if (i%10===0 && i<=90) continue;
        facts.push({n:i,d:100,decimal:i/100,percent:i});
      }
    } else {
      facts.push({n:1,d:2,decimal:0.5,percent:50});
      facts.push({n:1,d:4,decimal:0.25,percent:25});
      facts.push({n:3,d:4,decimal:0.75,percent:75});
      for (let i=1;i<=4;i++) facts.push({n:i,d:5,decimal:i/5,percent:i*20});
      for (let i=1;i<=9;i++) facts.push({n:i,d:10,decimal:i/10,percent:i*10});
      const skip=[50,25,75,20,40,60,80,10,30,70,90];
      for (let i=1;i<=99;i++) {
        if (skip.includes(i)) continue;
        facts.push({n:i,d:100,decimal:i/100,percent:i});
      }
    }
    return facts;
  }

  function fdpFmtDec(v) {
    // Format decimal cleanly e.g. 0.1 not 0.10000000000000001
    return parseFloat(v.toPrecision(4)).toString();
  }

  function fdpBuildPool(facts) {
    const pool = [];
    for (const f of facts) {
      const fH = fracHTML(f.n,f.d);
      const dS = fdpFmtDec(f.decimal);
      const pS = f.percent + '%';
      pool.push({qHTML:'What is '+fH+' as a decimal?',   answerDisplay:dS, answerKey:'dec:'+dS,         type:'F\u2192D', fact:f});
      pool.push({qHTML:'What is '+fH+' as a percentage?',answerDisplay:pS, answerKey:'pct:'+f.percent,   type:'F\u2192%', fact:f});
      pool.push({qHTML:'What is '+dS+' as a fraction?',  answerDisplay:fH, answerKey:'frac:'+f.n+'/'+f.d,type:'D\u2192F', fact:f});
      pool.push({qHTML:'What is '+dS+' as a percentage?',answerDisplay:pS, answerKey:'pct:'+f.percent,   type:'D\u2192%', fact:f});
      pool.push({qHTML:'What is '+pS+' as a fraction?',  answerDisplay:fH, answerKey:'frac:'+f.n+'/'+f.d,type:'%\u2192F', fact:f});
      pool.push({qHTML:'What is '+pS+' as a decimal?',   answerDisplay:dS, answerKey:'dec:'+dS,          type:'%\u2192D', fact:f});
    }
    return pool;
  }

  function fdpDistractors(q, allFacts) {
    const others = allFacts.filter(f => !(f.n===q.fact.n && f.d===q.fact.d));
    for (let i=others.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[others[i],others[j]]=[others[j],others[i]];}
    const result = [];
    for (const f of others) {
      if (result.length >= 2) break;
      let display, key;
      if (q.type==='F\u2192D'||q.type==='%\u2192D') { display=fdpFmtDec(f.decimal); key='dec:'+display; }
      else if (q.type==='F\u2192%'||q.type==='D\u2192%') { display=f.percent+'%'; key='pct:'+f.percent; }
      else { display=fracHTML(f.n,f.d); key='frac:'+f.n+'/'+f.d; }
      if (result.every(r=>r.key!==key) && key!==q.answerKey) result.push({display,key});
    }
    return result;
  }

  function fdpGenerateQuestions(level, count) {
    const facts = fdpBuildFacts(level);
    const pool  = fdpBuildPool(facts);
    const maxRepeats = Math.max(2, Math.ceil(count / pool.length));
    const counts = new Map();
    const result = [];
    let passes = 0;
    while (result.length < count) {
      passes++;
      const shuffled = shuffleNoConsec([...pool]);
      for (const q of shuffled) {
        const k = q.answerKey+'|'+q.type;
        const seen = counts.get(k)||0;
        if (seen < maxRepeats && result.length < count) {
          const dist = fdpDistractors(q, facts);
          const opts = [{display:q.answerDisplay,key:q.answerKey,correct:true},...dist.map(d=>({display:d.display,key:d.key,correct:false}))];
          for (let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
          result.push({...q,opts});
          counts.set(k,seen+1);
        }
      }
      if (passes>20) break;
    }
    return result;
  }

  function fdpUpdateStartBtn() {
    const timedOk = fdpSelTimed===false||(fdpSelTimed===true&&fdpSelTime!==null);
    document.getElementById('fdp-start-btn').disabled = !(fdpSelLevel!==null&&fdpSelCount!==null&&fdpSelTimed!==null&&timedOk);
  }

  function fdpResetSetup() {
    clearInterval(fdpState.timerInterval);
    document.getElementById('fdp-quiz').classList.remove('active');
    document.getElementById('fdp-results').classList.remove('active');
    document.getElementById('fdp-setup').style.display = '';
    fdpSelLevel=null; fdpSelCount=null; fdpSelTimed=null; fdpSelTime=null;
    document.querySelectorAll('[data-fdp-level]').forEach(b=>b.classList.remove('selected'));
    document.querySelectorAll('[data-fdp-qcount]').forEach(b=>b.classList.remove('selected'));
    document.querySelectorAll('[data-fdp-timed]').forEach(b=>b.classList.remove('selected'));
    document.querySelectorAll('[data-fdp-timelimit]').forEach(b=>b.classList.remove('selected'));
    document.getElementById('fdp-time-options').classList.remove('visible');
    fdpUpdateStartBtn();
  }

  function fdpSelectLevel(btn) {
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); fdpSelLevel = null; fdpUpdateStartBtn(); return; }
    document.querySelectorAll('[data-fdp-level]').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected'); fdpSelLevel=btn.dataset.fdpLevel; fdpUpdateStartBtn();
  }
  function fdpSelectCount(btn) {
    document.querySelectorAll('[data-fdp-qcount]').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected'); fdpSelCount=parseInt(btn.dataset.fdpQcount); fdpUpdateStartBtn();
  }
  function fdpSelectTimed(btn) {
    document.querySelectorAll('[data-fdp-timed]').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected'); fdpSelTimed=btn.dataset.fdpTimed==='true';
    const opts=document.getElementById('fdp-time-options');
    if (fdpSelTimed){opts.classList.add('visible');}
    else{opts.classList.remove('visible');fdpSelTime=null;document.querySelectorAll('[data-fdp-timelimit]').forEach(b=>b.classList.remove('selected'));}
    fdpUpdateStartBtn();
  }
  function fdpSelectTime(btn) {
    document.querySelectorAll('[data-fdp-timelimit]').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected'); fdpSelTime=parseInt(btn.dataset.fdpTimelimit); fdpUpdateStartBtn();
  }

  function fdpStartTest(questions) {
    fdpState.questions=questions; fdpState.current=0; fdpState.userAnswers=[]; fdpState.elapsed=0;
    document.getElementById('fdp-setup').style.display='none';
    document.getElementById('fdp-results').classList.remove('active');
    document.getElementById('fdp-quiz').classList.add('active');
    const timerEl=document.getElementById('fdp-timer');
    if (fdpState.timed) {
      fdpState.remaining=fdpState.timelimit; timerEl.style.display='block'; timerEl.textContent=formatTime(fdpState.remaining); timerEl.className='quiz-timer';
      fdpState.timerInterval=setInterval(()=>{
        fdpState.remaining--; timerEl.textContent=formatTime(fdpState.remaining);
        if(fdpState.remaining<=30)timerEl.className='quiz-timer warning';
        if(fdpState.remaining<=10)timerEl.className='quiz-timer danger';
        if(fdpState.remaining<=0){clearInterval(fdpState.timerInterval);fdpFinishTest(true);}
      },1000);
    } else {timerEl.style.display='none';fdpState.timerInterval=setInterval(()=>{fdpState.elapsed++;},1000);}
    fdpShowQuestion();
  }

  function fdpShowQuestion() {
    const q=fdpState.questions[fdpState.current];
    const total=fdpState.questions.length;
    document.getElementById('fdp-progress').textContent='Question '+(fdpState.current+1)+' of '+total;
    document.getElementById('fdp-progress-bar').style.width=(fdpState.current/total*100)+'%';
    document.getElementById('fdp-question').innerHTML=q.qHTML;
    document.getElementById('fdp-options').innerHTML=q.opts.map((opt,i)=>
      '<button class="fdp-opt-btn" onclick="fdpSelectAnswer('+i+')">'+opt.display+'</button>'
    ).join('');
  }

  function fdpSelectAnswer(i) {
    const q=fdpState.questions[fdpState.current];
    const opt=q.opts[i];
    const correctOpt=q.opts.find(o=>o.correct);
    fdpState.userAnswers.push({q,correct:correctOpt.display,correctKey:q.answerKey,given:opt.display,givenKey:opt.key,isCorrect:opt.correct,unanswered:false});
    fdpState.current++;
    if(fdpState.current>=fdpState.questions.length){fdpFinishTest(false);}else{fdpShowQuestion();}
  }

  function fdpFinishTest(timedOut) {
    clearInterval(fdpState.timerInterval);
    const notReached=fdpState.questions.length-fdpState.current;
    if (timedOut) {
      for(let i=fdpState.current;i<fdpState.questions.length;i++){
        const q=fdpState.questions[i];
        const cOpt=q.opts.find(o=>o.correct);
        fdpState.userAnswers.push({q,correct:cOpt.display,correctKey:q.answerKey,given:null,givenKey:null,isCorrect:false,unanswered:true});
      }
    }
    document.getElementById('fdp-quiz').classList.remove('active');
    const correct=fdpState.userAnswers.filter(a=>a.isCorrect).length;
    const total=timedOut?fdpState.userAnswers.filter(a=>!a.unanswered).length:fdpState.userAnswers.length;
    const answeredWrong=fdpState.userAnswers.filter(a=>!a.isCorrect&&!a.unanswered);
    const perfect=correct===total;
    document.getElementById('fdp-score').textContent=correct+'/'+total;
    const timeEl=document.getElementById('fdp-time-taken');
    if(fdpState.timed){const used=fdpState.timelimit-fdpState.remaining;timeEl.textContent=timedOut?'':'Time taken: '+formatTime(used);}
    else{timeEl.textContent='Time taken: '+formatTime(fdpState.elapsed);}
    const pill=timedOut?timedOutPill(notReached):'';
    document.getElementById('fdp-timeout').innerHTML=pill;
    const perfectEl=document.getElementById('fdp-perfect');
    const wrongWrap=document.getElementById('fdp-wrong-wrap');
    const wrongList=document.getElementById('fdp-wrong-list');
    const actionsEl=document.getElementById('fdp-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display='block'; wrongWrap.style.display='none';
      actionsEl.innerHTML='<button class="results-btn secondary" onclick="fdpResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="fdpRetakeSame()">Try again</button>';
      if(!fdpState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display='none';
      if(answeredWrong.length>0){
        wrongWrap.style.display='block';
        wrongList.innerHTML=wrongTableRows(answeredWrong, a=>a.q.qHTML+' = ?', a=>a.correct);
      } else {
        wrongWrap.style.display='none';
        document.getElementById('fdp-timeout').innerHTML=pill+'<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      const retryBtn=answeredWrong.length>0?'<button class="results-btn green-btn" onclick="fdpRetakeWrong()">Retry incorrect</button>':'';
      actionsEl.innerHTML='<button class="results-btn secondary" onclick="fdpResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="fdpRetakeSame()">Try again</button>'+retryBtn;
    }
    document.getElementById('fdp-results').classList.add('active');
  }

  function fdpRetakeSame() {
    document.getElementById('fdp-results').classList.remove('active');
    fdpState.wrongOnly=false;
    fdpStartTest(fdpGenerateQuestions(fdpState.level,fdpState.qcount));
  }

  function fdpRetakeWrong() {
    const answeredWrong=fdpState.userAnswers.filter(a=>!a.isCorrect&&!a.unanswered);
    const wrongQs=answeredWrong.map(a=>a.q);
    const count=Math.min(wrongQs.length,fdpState.qcount);
    const filled=[];
    while(filled.length<count){filled.push(...[...wrongQs].sort(()=>Math.random()-0.5));}
    document.getElementById('fdp-results').classList.remove('active');
    fdpState.wrongOnly=true; fdpState.timed=false;
    fdpStartTest(filled.slice(0,count));
  }

  document.getElementById('fdp-start-btn').addEventListener('click', function() {
    fdpState.level=fdpSelLevel; fdpState.qcount=fdpSelCount;
    fdpState.timed=fdpSelTimed; fdpState.timelimit=fdpSelTime; fdpState.wrongOnly=false;
    fdpStartTest(fdpGenerateQuestions(fdpSelLevel,fdpSelCount));
  });


  // ── FRACTIONS OF NUMBERS ──────────────────────────────────────────────────

  function fonBuildPool(level) {
    const pool = [];
    const denoms = [2,3,4,5,6,7,8,9,10,11,12];

    if (level === '1') {
      // Unit fractions of ×2 to ×12 multiples only (up to 144)
      for (const d of denoms) {
        for (let m = 2; m <= 12; m++) {
          const whole = d * m;
          if (whole > 144) continue;
          const answer = m; // (1/d) of (d*m) = m
          pool.push({ n: 1, d: d, whole: whole, answer: answer });
        }
      }
    } else if (level === '2') {
      // All proper fractions n/d where answer is whole, ×2 to ×12 multiples up to 144
      for (const d of denoms) {
        for (let m = 2; m <= 12; m++) {
          const whole = d * m;
          if (whole > 144) continue;
          for (let n = 1; n < d; n++) {
            const answer = n * m; // (n/d) of (d*m) = n*m
            pool.push({ n: n, d: d, whole: whole, answer: answer });
          }
        }
      }
    } else {
      // Level 3: 30% from levels 1+2 (small), 70% larger numbers
      // Small: sample from level 1 and 2 pools
      const smallPool = [];
      for (const d of denoms) {
        for (let m = 2; m <= 12; m++) {
          const whole = d * m;
          if (whole > 144) continue;
          // Unit fraction
          smallPool.push({ n: 1, d: d, whole: whole, answer: m });
          // Non-unit fractions
          for (let n = 2; n < d; n++) {
            smallPool.push({ n: n, d: d, whole: whole, answer: n * m });
          }
        }
      }
      // Large: denominator × 10 through denominator × 120, all proper fractions
      for (const d of denoms) {
        for (let m = 10; m <= 120; m += 10) {
          const whole = d * m;
          for (let n = 1; n < d; n++) {
            const answer = n * m;
            pool.push({ n: n, d: d, whole: whole, answer: answer, large: true });
          }
        }
      }
      // Add 30% small questions - will be drawn proportionally in generate
      for (const q of smallPool) pool.push({ ...q, large: false });
    }
    return pool;
  }

  function fonDraw(pool, needed) {
    // Simple draw that doesn't require a label property
    const maxRepeats = Math.max(2, Math.ceil(needed / pool.length));
    const counts = new Map();
    const result = [];
    let passes = 0;
    while (result.length < needed) {
      passes++;
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      for (const q of shuffled) {
        const key = q.n + '/' + q.d + ':' + q.whole;
        const seen = counts.get(key) || 0;
        if (seen < maxRepeats && result.length < needed) { result.push(q); counts.set(key, seen + 1); }
      }
      if (passes > 20) break;
    }
    return result;
  }

  function fonGenerateQuestions(level, count) {
    if (level === '3') {
      const allPool = fonBuildPool('3');
      const large = allPool.filter(q => q.large);
      const small = allPool.filter(q => !q.large);
      const smallCount = Math.round(count * 0.3);
      const largeCount = count - smallCount;
      const drawn = [
        ...fonDraw(large, largeCount),
        ...fonDraw(small, smallCount)
      ].map(q => fonMakeQ(q));
      return shuffleNoConsec(drawn);
    }
    const pool = fonBuildPool(level);
    const drawn = fonDraw(pool, count).map(q => fonMakeQ(q));
    return shuffleNoConsec(drawn);
  }

  function fonMakeQ(q) {
    // Randomly use 'of' or '×' (multiplication symbol)
    const useOf = Math.random() < 0.5;
    const fracH = fracHTML(q.n, q.d);
    const qHTML = useOf
      ? fracH + ' of ' + q.whole
      : fracH + ' \u00d7 ' + q.whole;
    const resultHTML = fracH + ' of ' + q.whole + ' = ' + q.answer;
    const label = q.n + '/' + q.d + (useOf ? ' of ' : ' \u00d7 ') + q.whole;
    return { qHTML, resultHTML, label, answer: q.answer };
  }

  // ── FON setup handlers ────────────────────────────────────────────────────
  function fonUpdateStartBtn() {
    const timedOk = fonSelTimed === false || (fonSelTimed === true && fonSelTime !== null);
    document.getElementById('fon-start-btn').disabled = !(fonSelLevel !== null && fonSelCount !== null && fonSelTimed !== null && timedOk);
  }

  function fonResetSetup() {
    clearInterval(fonState.timerInterval);
    document.getElementById('fon-quiz').classList.remove('active');
    document.getElementById('fon-results').classList.remove('active');
    document.getElementById('fon-setup').style.display = '';
    fonSelLevel = null; fonSelCount = null; fonSelTimed = null; fonSelTime = null;
    document.querySelectorAll('[data-fon-level]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-fon-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-fon-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-fon-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('fon-time-options').classList.remove('visible');
    fonUpdateStartBtn();
  }

  function fonSelectLevel(btn) {
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); fonSelLevel = null; fonUpdateStartBtn(); return; }
    document.querySelectorAll('[data-fon-level]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); fonSelLevel = btn.dataset.fonLevel; fonUpdateStartBtn();
  }
  function fonSelectCount(btn) {
    document.querySelectorAll('[data-fon-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); fonSelCount = parseInt(btn.dataset.fonQcount); fonUpdateStartBtn();
  }
  function fonSelectTimed(btn) {
    document.querySelectorAll('[data-fon-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); fonSelTimed = btn.dataset.fonTimed === 'true';
    const opts = document.getElementById('fon-time-options');
    if (fonSelTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); fonSelTime = null; document.querySelectorAll('[data-fon-timelimit]').forEach(b => b.classList.remove('selected')); }
    fonUpdateStartBtn();
  }
  function fonSelectTime(btn) {
    document.querySelectorAll('[data-fon-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); fonSelTime = parseInt(btn.dataset.fonTimelimit); fonUpdateStartBtn();
  }

  // ── FON test ──────────────────────────────────────────────────────────────
  function fonStartTest(questions) {
    fonState.questions = questions; fonState.current = 0; fonState.userAnswers = []; fonState.elapsed = 0;
    document.getElementById('fon-setup').style.display = 'none';
    document.getElementById('fon-results').classList.remove('active');
    document.getElementById('fon-quiz').classList.add('active');
    const timerEl = document.getElementById('fon-timer');
    if (fonState.timed) {
      fonState.remaining = fonState.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(fonState.remaining); timerEl.className = 'quiz-timer';
      fonState.timerInterval = setInterval(() => {
        fonState.remaining--; timerEl.textContent = formatTime(fonState.remaining);
        if (fonState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (fonState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (fonState.remaining <= 0) { clearInterval(fonState.timerInterval); fonFinishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; fonState.timerInterval = setInterval(() => { fonState.elapsed++; }, 1000); }
    fonShowQuestion();
  }

  function fonShowQuestion() {
    const q = fonState.questions[fonState.current];
    const total = fonState.questions.length;
    document.getElementById('fon-progress').textContent = 'Question ' + (fonState.current + 1) + ' of ' + total;
    document.getElementById('fon-progress-bar').style.width = (fonState.current / total * 100) + '%';
    document.getElementById('fon-question').innerHTML = q.qHTML;
    const input = document.getElementById('fon-answer');
    input.value = ''; input.focus();
  }

  function fonSubmitAnswer() {
    const input = document.getElementById('fon-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const given = parseInt(raw, 10);
    if (isNaN(given)) return;
    const q = fonState.questions[fonState.current];
    fonState.userAnswers.push({ q, correct: q.answer, given, isCorrect: given === q.answer, unanswered: false });
    fonState.current++;
    if (fonState.current >= fonState.questions.length) { fonFinishTest(false); } else { fonShowQuestion(); }
  }

  document.getElementById('fon-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); fonSubmitAnswer(); return; }
    const allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });

  function fonFinishTest(timedOut) {
    clearInterval(fonState.timerInterval);
    const notReached = fonState.questions.length - fonState.current;
    if (timedOut) {
      for (let i = fonState.current; i < fonState.questions.length; i++) {
        fonState.userAnswers.push({ q: fonState.questions[i], correct: fonState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('fon-quiz').classList.remove('active');
    const correct = fonState.userAnswers.filter(a => a.isCorrect).length;
    const total = timedOut ? fonState.userAnswers.filter(a => !a.unanswered).length : fonState.userAnswers.length;
    const answeredWrong = fonState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const perfect = correct === total;
    document.getElementById('fon-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('fon-time-taken');
    if (fonState.timed) { const used = fonState.timelimit - fonState.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(fonState.elapsed); }
    const pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('fon-timeout').innerHTML = pill;
    const perfectEl = document.getElementById('fon-perfect');
    const wrongWrap = document.getElementById('fon-wrong-wrap');
    const wrongList = document.getElementById('fon-wrong-list');
    const actionsEl = document.getElementById('fon-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="fonResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="fonRetakeSame()">Try again</button>';
      if (!fonState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, a => a.q.qHTML + ' = ?', a => a.correct);
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('fon-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="fonRetakeWrong()">Retry incorrect</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="fonResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="fonRetakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('fon-results').classList.add('active');
  }

  function fonRetakeSame() {
    document.getElementById('fon-results').classList.remove('active');
    fonState.wrongOnly = false;
    fonStartTest(fonGenerateQuestions(fonState.level, fonState.qcount));
  }

  function fonRetakeWrong() {
    const answeredWrong = fonState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const wrongQs = answeredWrong.map(a => a.q);
    const count = Math.min(wrongQs.length, fonState.qcount);
    const filled = [];
    while (filled.length < count) { filled.push(...shuffleNoConsec([...wrongQs])); }
    document.getElementById('fon-results').classList.remove('active');
    fonState.wrongOnly = true; fonState.timed = false;
    fonStartTest(filled.slice(0, count));
  }

  document.getElementById('fon-start-btn').addEventListener('click', function() {
    fonState.level = fonSelLevel; fonState.qcount = fonSelCount;
    fonState.timed = fonSelTimed; fonState.timelimit = fonSelTime; fonState.wrongOnly = false;
    fonStartTest(fonGenerateQuestions(fonSelLevel, fonSelCount));
  });


  // ── ROUNDING ──────────────────────────────────────────────────────────────

  function rndFmt(n) { return parseFloat(n.toPrecision(15)).toString(); }

  function rndBuildPool(type) {
    const pool = [];
    // Support comma-separated multi-select e.g. "10,100"
    const types = type.includes(',') ? type.split(',') : [type];

    function addWhole(n, target) {
      // target: 10, 100 or 1000
      const ans = Math.round(n / target) * target;
      const label = 'Round ' + n.toLocaleString() + ' to the nearest ' + target.toLocaleString();
      pool.push({ label, question: label, answer: ans.toString(), resultLabel: label + ' = ' + ans.toLocaleString() });
    }

    function addDp(n, dp) {
      const factor = Math.pow(10, dp);
      const ans = Math.round(n * factor) / factor;
      const ansStr = ans.toFixed(dp);
      const label = 'Round ' + n + ' to ' + dp + ' decimal place' + (dp > 1 ? 's' : '');
      pool.push({ label, question: label, answer: ansStr, resultLabel: label + ' = ' + ansStr });
    }

    function addSf(n, sf) {
      // Round n to sf significant figures
      if (n === 0) return;
      const mag = Math.floor(Math.log10(Math.abs(n)));
      const factor = Math.pow(10, sf - 1 - mag);
      const ans = Math.round(n * factor) / factor;
      const ansStr = rndFmt(ans);
      const label = 'Round ' + n + ' to ' + sf + ' significant figure' + (sf > 1 ? 's' : '');
      pool.push({ label, question: label, answer: ansStr, resultLabel: label + ' = ' + ansStr });
    }

    if (types.some(t => t === '10') || types.some(t => t === 'mixed-whole')) {
      // Numbers up to 9,999 for nearest 10
      const nums10 = [];
      for (let i = 0; i < 60; i++) {
        const n = Math.floor(Math.random() * 9990) + 5;
        // Ensure not already a multiple of 10
        const adjusted = n % 10 === 0 ? n + 3 : n;
        nums10.push(adjusted);
      }
      nums10.forEach(n => addWhole(n, 10));
    }
    if (types.some(t => t === '100') || types.some(t => t === 'mixed-whole')) {
      const nums100 = [];
      for (let i = 0; i < 60; i++) {
        const n = Math.floor(Math.random() * 99900) + 50;
        const adjusted = n % 100 === 0 ? n + 37 : n;
        nums100.push(adjusted);
      }
      nums100.forEach(n => addWhole(n, 100));
    }
    if (types.some(t => t === '1000') || types.some(t => t === 'mixed-whole')) {
      const nums1000 = [];
      for (let i = 0; i < 60; i++) {
        const n = Math.floor(Math.random() * 99000) + 500;
        const adjusted = n % 1000 === 0 ? n + 371 : n;
        nums1000.push(adjusted);
      }
      nums1000.forEach(n => addWhole(n, 1000));
    }

    if (types.some(t => t === 'dp') || types.some(t => t === 'mixed-dpSf')) {
      // Even mix of 1, 2 and 3 digits before decimal; round to 1, 2 or 3 d.p.
      const intRanges = [[1,9],[10,99],[100,999]]; // 1-digit, 2-digit, 3-digit integer parts
      for (let dp = 1; dp <= 3; dp++) {
        for (const [lo, hi] of intRanges) {
          for (let i = 0; i < 15; i++) {
            const intPart = lo + Math.floor(Math.random() * (hi - lo + 1));
            const extraDp = dp + 1 + Math.floor(Math.random() * (3 - dp)); // 1-3 extra d.p. beyond target
            const totalDp = Math.min(dp + extraDp, 5);
            const decPart = Math.floor(Math.random() * Math.pow(10, totalDp));
            const n = parseFloat((intPart + decPart / Math.pow(10, totalDp)).toFixed(totalDp));
            const nStr = n.toString();
            const actualDp = nStr.includes('.') ? nStr.split('.')[1].length : 0;
            if (actualDp <= dp) continue;
            addDp(n, dp);
          }
        }
      }
    }

    if (types.some(t => t === 'sf') || types.some(t => t === 'mixed-dpSf')) {
      // Whole numbers and decimals, up to 6 digits
      for (let sf = 1; sf <= 3; sf++) {
        // Straightforward: e.g. 3.471 → 2sf = 3.5
        const straightNums = [
          1.234, 2.567, 3.891, 4.123, 5.678, 6.234, 7.891, 8.456, 9.012,
          12.34, 23.45, 34.56, 45.67, 56.78, 67.89, 78.91, 89.12, 91.23,
          123.4, 234.5, 345.6, 456.7, 567.8, 678.9, 789.1, 891.2, 912.3,
          1234, 2345, 3456, 4567, 5678, 6789, 7891, 8912, 9123,
          12345, 23456, 34567, 45678, 56789, 67891
        ];
        straightNums.forEach(n => addSf(n, sf));
        // Leading zeros: e.g. 0.003471 → 2sf = 0.0035
        const leadingNums = [
          0.001234, 0.002345, 0.003456, 0.004567, 0.005678, 0.006789,
          0.01234, 0.02345, 0.03456, 0.04567, 0.05678, 0.06789,
          0.1234, 0.2345, 0.3456, 0.4567, 0.5678, 0.6789
        ];
        leadingNums.forEach(n => addSf(n, sf));
      }
    }

    return pool;
  }

  function rndUpdateStartBtn() {
    const timedOk = rndSelTimed === false || (rndSelTimed === true && rndSelTime !== null);
    const typeOk = rndSelType !== null || rndSelWholeTypes.size > 0;
    document.getElementById('rnd-start-btn').disabled = !(typeOk && rndSelCount !== null && rndSelTimed !== null && timedOk);
  }

  function rndResetSetup() {
    clearInterval(rndState.timerInterval);
    document.getElementById('rnd-quiz').classList.remove('active');
    document.getElementById('rnd-results').classList.remove('active');
    document.getElementById('rnd-setup').style.display = '';
    rndSelType = null; rndSelWholeTypes = new Set(); rndSelCount = null; rndSelTimed = null; rndSelTime = null;
    document.querySelectorAll('[data-rnd-whole]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-rnd-type]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-rnd-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-rnd-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-rnd-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('rnd-time-options').classList.remove('visible');
    rndUpdateStartBtn();
  }

  function rndSelectWhole(btn) {
    // Deselect dp/sf type if a whole button is clicked
    rndSelType = null;
    document.querySelectorAll('[data-rnd-type]').forEach(b => b.classList.remove('selected'));
    // If MIXED was active, clear it first
    if (rndSelWholeTypes.has('mixed-whole')) {
      rndSelWholeTypes.clear();
      document.getElementById('rnd-whole-mixed-btn').classList.remove('selected');
    }
    const val = parseInt(btn.dataset.rndWhole);
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); rndSelWholeTypes.delete(val); }
    else { btn.classList.add('selected'); rndSelWholeTypes.add(val); }
    // Auto-select MIXED if all three chosen
    if (rndSelWholeTypes.size === 3) {
      document.querySelectorAll('[data-rnd-whole]').forEach(b => b.classList.remove('selected'));
      document.getElementById('rnd-whole-mixed-btn').classList.add('selected');
      rndSelWholeTypes.clear(); rndSelWholeTypes.add('mixed-whole');
    }
    rndUpdateStartBtn();
  }
  function rndSelectWholeMixed(btn) {
    rndSelType = null;
    document.querySelectorAll('[data-rnd-type]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-rnd-whole]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); rndSelWholeTypes.clear(); rndSelWholeTypes.add('mixed-whole');
    rndUpdateStartBtn();
  }
  function rndSelectType(btn) {
    rndSelWholeTypes = new Set();
    document.querySelectorAll('[data-rnd-whole]').forEach(b => b.classList.remove('selected'));
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); rndSelType = null; rndUpdateStartBtn(); return; }
    document.querySelectorAll('[data-rnd-type]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); rndSelType = btn.dataset.rndType; rndUpdateStartBtn();
  }
  function rndSelectCount(btn) {
    document.querySelectorAll('[data-rnd-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); rndSelCount = parseInt(btn.dataset.rndQcount); rndUpdateStartBtn();
  }
  function rndSelectTimed(btn) {
    document.querySelectorAll('[data-rnd-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); rndSelTimed = btn.dataset.rndTimed === 'true';
    const opts = document.getElementById('rnd-time-options');
    if (rndSelTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); rndSelTime = null; document.querySelectorAll('[data-rnd-timelimit]').forEach(b => b.classList.remove('selected')); }
    rndUpdateStartBtn();
  }
  function rndSelectTime(btn) {
    document.querySelectorAll('[data-rnd-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); rndSelTime = parseInt(btn.dataset.rndTimelimit); rndUpdateStartBtn();
  }

  function rndGenerateQuestions(type, wholeTypes, count) {
    if (wholeTypes && wholeTypes.size > 0) {
      const typeStr = wholeTypes.has('mixed-whole') ? 'mixed-whole' : [...wholeTypes].join(',');
      const pool = rndBuildPool(typeStr);
      return shuffleNoConsec(genericDrawCapped(pool, count));
    }
    const pool = rndBuildPool(type);
    return shuffleNoConsec(genericDrawCapped(pool, count));
  }

  function rndStartTest(questions) {
    rndState.questions = questions; rndState.current = 0; rndState.userAnswers = []; rndState.elapsed = 0;
    document.getElementById('rnd-setup').style.display = 'none';
    document.getElementById('rnd-results').classList.remove('active');
    document.getElementById('rnd-quiz').classList.add('active');
    // Allow decimal input
    const input = document.getElementById('rnd-answer');
    input.dataset.decimal = '1';
    const timerEl = document.getElementById('rnd-timer');
    if (rndState.timed) {
      rndState.remaining = rndState.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(rndState.remaining); timerEl.className = 'quiz-timer';
      rndState.timerInterval = setInterval(() => {
        rndState.remaining--; timerEl.textContent = formatTime(rndState.remaining);
        if (rndState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (rndState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (rndState.remaining <= 0) { clearInterval(rndState.timerInterval); rndFinishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; rndState.timerInterval = setInterval(() => { rndState.elapsed++; }, 1000); }
    rndShowQuestion();
  }

  function rndShowQuestion() {
    const q = rndState.questions[rndState.current];
    const total = rndState.questions.length;
    document.getElementById('rnd-progress').textContent = 'Question ' + (rndState.current + 1) + ' of ' + total;
    document.getElementById('rnd-progress-bar').style.width = (rndState.current / total * 100) + '%';
    document.getElementById('rnd-question').textContent = q.question;
    const input = document.getElementById('rnd-answer');
    input.value = ''; input.focus();
  }

  function rndSubmitAnswer() {
    const input = document.getElementById('rnd-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const q = rndState.questions[rndState.current];
    const isCorrect = parseFloat(raw) === parseFloat(q.answer);
    rndState.userAnswers.push({ q, correct: q.answer, given: raw, isCorrect, unanswered: false });
    rndState.current++;
    if (rndState.current >= rndState.questions.length) { rndFinishTest(false); } else { rndShowQuestion(); }
  }

  document.getElementById('rnd-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); rndSubmitAnswer(); return; }
    const allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (e.key === '.' && !this.value.includes('.')) return;
    if (e.key === '-' && this.value === '') return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });

  function rndFinishTest(timedOut) {
    clearInterval(rndState.timerInterval);
    const notReached = rndState.questions.length - rndState.current;
    if (timedOut) {
      for (let i = rndState.current; i < rndState.questions.length; i++) {
        rndState.userAnswers.push({ q: rndState.questions[i], correct: rndState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('rnd-quiz').classList.remove('active');
    const correct = rndState.userAnswers.filter(a => a.isCorrect).length;
    const total = timedOut ? rndState.userAnswers.filter(a => !a.unanswered).length : rndState.userAnswers.length;
    const answeredWrong = rndState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const perfect = correct === total;
    document.getElementById('rnd-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('rnd-time-taken');
    if (rndState.timed) { const used = rndState.timelimit - rndState.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(rndState.elapsed); }
    const pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('rnd-timeout').innerHTML = pill;
    const perfectEl = document.getElementById('rnd-perfect');
    const wrongWrap = document.getElementById('rnd-wrong-wrap');
    const wrongList = document.getElementById('rnd-wrong-list');
    const actionsEl = document.getElementById('rnd-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="rndResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="rndRetakeSame()">Try again</button>';
      if (!rndState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, a => a.q.question, a => a.correct);
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('rnd-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="rndRetakeWrong()">Retry incorrect</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="rndResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="rndRetakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('rnd-results').classList.add('active');
  }

  function rndRetakeSame() {
    document.getElementById('rnd-results').classList.remove('active');
    rndState.wrongOnly = false;
    rndStartTest(rndGenerateQuestions(rndState.type, rndState.wholeTypes || new Set(), rndState.qcount));
  }

  function rndRetakeWrong() {
    const answeredWrong = rndState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const wrongQs = answeredWrong.map(a => a.q);
    const count = Math.min(wrongQs.length, rndState.qcount);
    const filled = [];
    while (filled.length < count) { filled.push(...shuffleNoConsec([...wrongQs])); }
    document.getElementById('rnd-results').classList.remove('active');
    rndState.wrongOnly = true; rndState.timed = false;
    rndStartTest(filled.slice(0, count));
  }

  document.getElementById('rnd-start-btn').addEventListener('click', function() {
    rndState.type = rndSelType; rndState.wholeTypes = new Set(rndSelWholeTypes); rndState.qcount = rndSelCount;
    rndState.timed = rndSelTimed; rndState.timelimit = rndSelTime; rndState.wrongOnly = false;
    rndStartTest(rndGenerateQuestions(rndSelType, rndSelWholeTypes, rndSelCount));
  });

  // ── POWERS AND ROOTS ──────────────────────────────────────────────────────

  function prBuildPool(types) {
    const pool = [];
    const squares = [1,2,3,4,5,6,7,8,9,10,11,12];
    const cubes   = [1,2,3,4,5,10];
    const typeSet = types instanceof Set ? types : new Set([types]);

    if (typeSet.has('squares') || typeSet.has('mixed')) {
      for (const n of squares) {
        pool.push({ label: n + '\u00b2 = ?', question: n + '\u00b2 = ?', answer: (n*n).toString(), resultLabel: n + '\u00b2 = ' + (n*n) });
      }
    }
    if (typeSet.has('square-roots') || typeSet.has('mixed')) {
      for (const n of squares) {
        const sq = n * n;
        pool.push({ label: '\u221a' + sq + ' = ?', question: '\u221a' + sq + ' = ?', answer: n.toString(), resultLabel: '\u221a' + sq + ' = ' + n });
      }
    }
    if (typeSet.has('cubes') || typeSet.has('mixed')) {
      for (const n of cubes) {
        const cb = n * n * n;
        pool.push({ label: n + '\u00b3 = ?', question: n + '\u00b3 = ?', answer: cb.toString(), resultLabel: n + '\u00b3 = ' + cb });
      }
    }
    if (typeSet.has('cube-roots') || typeSet.has('mixed')) {
      for (const n of cubes) {
        const cb = n * n * n;
        pool.push({ label: '\u221b' + cb + ' = ?', question: '\u221b' + cb + ' = ?', answer: n.toString(), resultLabel: '\u221b' + cb + ' = ' + n });
      }
    }
    return pool;
  }

  function prUpdateStartBtn() {
    const timedOk = prSelTimed === false || (prSelTimed === true && prSelTime !== null);
    document.getElementById('pr-start-btn').disabled = !(prSelTypes.size > 0 && prSelCount !== null && prSelTimed !== null && timedOk);
  }

  function prResetSetup() {
    clearInterval(prState.timerInterval);
    document.getElementById('pr-quiz').classList.remove('active');
    document.getElementById('pr-results').classList.remove('active');
    document.getElementById('pr-setup').style.display = '';
    prSelTypes = new Set(); prSelCount = null; prSelTimed = null; prSelTime = null;
    document.querySelectorAll('[data-pr-type]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-pr-qcount]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-pr-timed]').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('[data-pr-timelimit]').forEach(b => b.classList.remove('selected'));
    document.getElementById('pr-time-options').classList.remove('visible');
    prUpdateStartBtn();
  }

  function prSelectType(btn) {
    const val = btn.dataset.prType;
    if (btn.classList.contains('selected')) { btn.classList.remove('selected'); prSelTypes.delete(val); }
    else { btn.classList.add('selected'); prSelTypes.add(val); document.getElementById('pr-mixed-btn').classList.remove('selected'); prSelTypes.delete('mixed'); }
    // Auto-select MIXED if all four individual types selected
    if (['squares','square-roots','cubes','cube-roots'].every(t => prSelTypes.has(t))) {
      document.querySelectorAll('[data-pr-type]').forEach(b => b.classList.remove('selected'));
      document.getElementById('pr-mixed-btn').classList.add('selected');
      prSelTypes.clear(); prSelTypes.add('mixed');
    }
    prUpdateStartBtn();
  }
  function prSelectMixed(btn) {
    document.querySelectorAll('[data-pr-type]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); prSelTypes.clear(); prSelTypes.add('mixed');
    prUpdateStartBtn();
  }
  function prSelectCount(btn) {
    document.querySelectorAll('[data-pr-qcount]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); prSelCount = parseInt(btn.dataset.prQcount); prUpdateStartBtn();
  }
  function prSelectTimed(btn) {
    document.querySelectorAll('[data-pr-timed]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); prSelTimed = btn.dataset.prTimed === 'true';
    const opts = document.getElementById('pr-time-options');
    if (prSelTimed) { opts.classList.add('visible'); }
    else { opts.classList.remove('visible'); prSelTime = null; document.querySelectorAll('[data-pr-timelimit]').forEach(b => b.classList.remove('selected')); }
    prUpdateStartBtn();
  }
  function prSelectTime(btn) {
    document.querySelectorAll('[data-pr-timelimit]').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); prSelTime = parseInt(btn.dataset.prTimelimit); prUpdateStartBtn();
  }

  function prGenerateQuestions(types, count) {
    const pool = prBuildPool(types);
    return shuffleNoConsec(genericDrawCapped(pool, count));
  }

  function prStartTest(questions) {
    prState.questions = questions; prState.current = 0; prState.userAnswers = []; prState.elapsed = 0;
    document.getElementById('pr-setup').style.display = 'none';
    document.getElementById('pr-results').classList.remove('active');
    document.getElementById('pr-quiz').classList.add('active');
    const timerEl = document.getElementById('pr-timer');
    if (prState.timed) {
      prState.remaining = prState.timelimit; timerEl.style.display = 'block'; timerEl.textContent = formatTime(prState.remaining); timerEl.className = 'quiz-timer';
      prState.timerInterval = setInterval(() => {
        prState.remaining--; timerEl.textContent = formatTime(prState.remaining);
        if (prState.remaining <= 30) timerEl.className = 'quiz-timer warning';
        if (prState.remaining <= 10) timerEl.className = 'quiz-timer danger';
        if (prState.remaining <= 0) { clearInterval(prState.timerInterval); prFinishTest(true); }
      }, 1000);
    } else { timerEl.style.display = 'none'; prState.timerInterval = setInterval(() => { prState.elapsed++; }, 1000); }
    prShowQuestion();
  }

  function prShowQuestion() {
    const q = prState.questions[prState.current];
    const total = prState.questions.length;
    document.getElementById('pr-progress').textContent = 'Question ' + (prState.current + 1) + ' of ' + total;
    document.getElementById('pr-progress-bar').style.width = (prState.current / total * 100) + '%';
    document.getElementById('pr-question').innerHTML = q.question;
    const input = document.getElementById('pr-answer');
    input.value = ''; input.focus();
  }

  function prSubmitAnswer() {
    const input = document.getElementById('pr-answer');
    const raw = input.value.trim();
    if (raw === '') return;
    const given = parseInt(raw, 10);
    if (isNaN(given)) return;
    const q = prState.questions[prState.current];
    prState.userAnswers.push({ q, correct: q.answer, given: given.toString(), isCorrect: given.toString() === q.answer, unanswered: false });
    prState.current++;
    if (prState.current >= prState.questions.length) { prFinishTest(false); } else { prShowQuestion(); }
  }

  document.getElementById('pr-answer').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); prSubmitAnswer(); return; }
    const allowed = ['Backspace','Delete','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  });

  function prFinishTest(timedOut) {
    clearInterval(prState.timerInterval);
    const notReached = prState.questions.length - prState.current;
    if (timedOut) {
      for (let i = prState.current; i < prState.questions.length; i++) {
        prState.userAnswers.push({ q: prState.questions[i], correct: prState.questions[i].answer, given: null, isCorrect: false, unanswered: true });
      }
    }
    document.getElementById('pr-quiz').classList.remove('active');
    const correct = prState.userAnswers.filter(a => a.isCorrect).length;
    const total = timedOut ? prState.userAnswers.filter(a => !a.unanswered).length : prState.userAnswers.length;
    const answeredWrong = prState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const perfect = correct === total;
    document.getElementById('pr-score').textContent = correct + '/' + total;
    const timeEl = document.getElementById('pr-time-taken');
    if (prState.timed) { const used = prState.timelimit - prState.remaining; timeEl.textContent = timedOut ? '' : 'Time taken: ' + formatTime(used); }
    else { timeEl.textContent = 'Time taken: ' + formatTime(prState.elapsed); }
    const pill = timedOut ? timedOutPill(notReached) : '';
    document.getElementById('pr-timeout').innerHTML = pill;
    const perfectEl = document.getElementById('pr-perfect');
    const wrongWrap = document.getElementById('pr-wrong-wrap');
    const wrongList = document.getElementById('pr-wrong-list');
    const actionsEl = document.getElementById('pr-actions');
    if (perfect && !timedOut) {
      perfectEl.style.display = 'block'; wrongWrap.style.display = 'none';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="prResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="prRetakeSame()">Try again</button>';
      if (!prState.wrongOnly) launchConfetti();
    } else {
      perfectEl.style.display = 'none';
      if (answeredWrong.length > 0) {
        wrongWrap.style.display = 'block';
        wrongList.innerHTML = wrongTableRows(answeredWrong, a => a.q.question, a => a.correct);
      } else {
        wrongWrap.style.display = 'none';
        document.getElementById('pr-timeout').innerHTML = pill + '<p class="no-wrong-msg">No incorrect answers \u2014 well done!</p>';
      }
      const retryBtn = answeredWrong.length > 0 ? '<button class="results-btn green-btn" onclick="prRetakeWrong()">Retry incorrect</button>' : '';
      actionsEl.innerHTML = '<button class="results-btn secondary" onclick="prResetSetup()">\u2190 Menu</button><button class="results-btn primary" onclick="prRetakeSame()">Try again</button>' + retryBtn;
    }
    document.getElementById('pr-results').classList.add('active');
  }

  function prRetakeSame() {
    document.getElementById('pr-results').classList.remove('active');
    prState.wrongOnly = false;
    prStartTest(prGenerateQuestions(prState.types, prState.qcount));
  }

  function prRetakeWrong() {
    const answeredWrong = prState.userAnswers.filter(a => !a.isCorrect && !a.unanswered);
    const wrongQs = answeredWrong.map(a => a.q);
    const count = Math.min(wrongQs.length, prState.qcount);
    const filled = [];
    while (filled.length < count) { filled.push(...shuffleNoConsec([...wrongQs])); }
    document.getElementById('pr-results').classList.remove('active');
    prState.wrongOnly = true; prState.timed = false;
    prStartTest(filled.slice(0, count));
  }

  document.getElementById('pr-start-btn').addEventListener('click', function() {
    prState.types = new Set(prSelTypes); prState.qcount = prSelCount;
    prState.timed = prSelTimed; prState.timelimit = prSelTime; prState.wrongOnly = false;
    prStartTest(prGenerateQuestions(prSelTypes, prSelCount));
  });

</script>
