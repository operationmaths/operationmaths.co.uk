---
layout: default
title: Online Maths Tests
description: Online maths tests for KS2 and KS3 students from Operation Maths.
permalink: /online-maths-tests/
---

<main>
  <div class="om-body">

    <!-- TIMES TABLES PANEL -->
    <div class="test-panel active" id="panel-times-tables">

      <!-- SETUP -->
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

      <!-- QUIZ -->
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

      <!-- RESULTS -->
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
