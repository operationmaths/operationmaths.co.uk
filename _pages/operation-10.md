---
layout: default
title: Operation 10
description: 10 questions each day for daily maths practice. Different questions every day of the year.
permalink: /operation-10/
---

<section class="om-hero" id="op10-hero">
  <h1>Operation <em>10</em></h1>
  <p>10 questions each day for daily maths practice. Different questions every day of the year.</p>
</section>

<main>
  <div class="om-body">
  <div class="op10-tool-area">

  <div id="op10-levels" class="op10-level-groups">
    <div class="op10-level-row">
      <button class="op10-level-btn op10-ks2" data-level="year3">Year 3</button>
      <button class="op10-level-btn op10-ks2" data-level="year4">Year 4</button>
      <button class="op10-level-btn op10-ks2" data-level="year5">Year 5</button>
      <button class="op10-level-btn op10-ks2" data-level="year6">Year 6</button>
    </div>
    <div class="op10-level-row">
      <button class="op10-level-btn op10-ks3" data-level="year7">Year 7</button>
      <button class="op10-level-btn op10-ks3" data-level="year8">Year 8</button>
      <button class="op10-level-btn op10-ks3" data-level="year9">Year 9</button>
    </div>
    <div class="op10-level-row">
      <button class="op10-level-btn op10-ks4" data-level="gcseF">Foundation GCSE</button>
      <button class="op10-level-btn op10-ks4" data-level="gcseH">Higher GCSE</button>
    </div>
  </div>

  <div id="op10-view" class="op10-view" style="display:none;">

    <div class="op10-toolbar">
      <button id="op10-back" class="op10-btn op10-btn-ghost">&larr; Back to year group</button>
      <div class="op10-toolbar-right">
        <button id="op10-new-set" class="op10-btn op10-btn-outline-blue">New set</button>
        <button id="op10-show-all" class="op10-btn op10-btn-green">Show all answers</button>
        <button id="op10-print" class="op10-btn op10-btn-secondary">Print</button>
      </div>
    </div>

    <div class="op10-print-header-block">
      <h2 class="op10-print-title">Operation 10</h2>
      <img class="op10-print-logo" src="{{ site.baseurl }}/assets/images/logo.png" alt="Operation Maths logo">
    </div>
    <hr class="op10-print-rule">

    <div id="op10-columns" class="op10-columns"></div>

    <div id="op10-answer-key" class="op10-answer-key">
      <div class="op10-print-header-block">
        <h2 class="op10-print-title">Operation 10</h2>
        <img class="op10-print-logo" src="{{ site.baseurl }}/assets/images/logo.png" alt="Operation Maths logo">
      </div>
      <hr class="op10-print-rule">
      <div id="op10-answer-key-grid" class="op10-columns"></div>
    </div>

    <p id="op10-coming-soon" class="op10-coming-soon" style="display:none;">
      Questions for this year group are being written and will be added soon.
    </p>

  </div>

  </div>
  </div>
</main>

<style>
  .op10-tool-area {
    padding: 16px 0 24px;
    background: #f5f6f8;
    margin-top: -40px;
  }

  /* Level picker, grouped by key stage */
  .op10-level-groups {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }
  .op10-level-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .op10-level-btn {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    padding: 22px 16px;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    transition: background 0.15s ease;
    flex: 1;
    min-width: 140px;
    box-sizing: border-box;
  }
  .op10-ks2 { color: #009444; border: 2px solid #009444; }
  .op10-ks2:hover { background: #e6f5ec; }
  .op10-ks3 { color: #1c75bc; border: 2px solid #1c75bc; }
  .op10-ks3:hover { background: #eaf3fb; }
  .op10-ks4 { color: #800080; border: 2px solid #800080; }
  .op10-ks4:hover { background: #f5e6f5; }

  /* Toolbar */
  .op10-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
  }
  .op10-toolbar-right { display: flex; gap: 10px; }

  .op10-print-header-block { display: none; }
  .op10-print-title {
    color: #1c75bc;
    font-weight: 700;
    font-size: 1.4rem;
    margin: 0;
  }
  .op10-print-logo { height: 60px; }
  .op10-print-rule { display: none; }

  .op10-btn {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background 0.15s ease;
    white-space: nowrap;
    text-align: center;
  }
  .op10-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .op10-btn-secondary { background: #1c75bc; color: #fff; }
  .op10-btn-secondary:hover { background: #155a91; }
  .op10-btn-green { background: #009444; color: #fff; width: 148px; }
  .op10-btn-green:hover { background: #00753a; }
  .op10-btn-outline-blue { background: #fff; color: #1c75bc; border: 2px solid #1c75bc; }
  .op10-btn-outline-blue:hover { background: #eaf3fb; }
  .op10-btn-ghost { background: #fff; color: #000; border: 2px solid #000; min-width: auto; }
  .op10-btn-ghost:hover { background: #f0f0f0; }

  /* Two-column question layout: 5 rows fit on one screen, no scrolling */
  .op10-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;
  }
  @media (max-width: 700px) {
    .op10-columns { grid-template-columns: 1fr; }
  }
  .op10-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .op10-q-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 14px 16px;
    height: 128px;
    display: flex;
    flex-direction: column;
    border-left: 5px solid #ccc;
  }
  .op10-q-number {
    font-weight: 700;
    color: #999;
    margin-right: 8px;
  }
  .op10-q-text {
    margin: 0;
    flex: 1;
    overflow-y: auto;
    font-size: 0.95rem;
  }
  .op10-q-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 6px;
    gap: 10px;
  }
  .op10-q-answer {
    visibility: hidden;
    font-weight: 700;
    color: #009444;
    margin: 0;
    min-height: 1.3em;
    flex: 1;
    text-align: left;
  }
  .op10-q-answer.op10-visible { visibility: visible; }

  .op10-show-answer-btn {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #e9e9e9;
    color: #222;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    width: 90px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .op10-show-answer-btn:hover { background: #ddd; }

  /* Stacked fraction display, matching the Question Generator convention */
  .op10-frac {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    line-height: 1;
    font-size: 0.85em;
    margin: 0 2px;
  }
  .op10-frac-num { border-bottom: 1.5px solid currentColor; padding: 0 3px 1px; }
  .op10-frac-den { padding: 1px 3px 0; }

  .op10-coming-soon {
    font-size: 1.1rem;
    color: #666;
    padding: 40px 0;
  }

  /* Answer key page - screen-hidden, shown only on the second printed page.
     Reuses the same .op10-columns / .op10-q-card layout as the questions page
     so both pages match exactly. */
  .op10-answer-key { display: none; }

  /* Print styles */
  @media print {
    header, footer, .back-to-top { display: none !important; }
    #op10-hero, .op10-level-groups, .op10-toolbar { display: none !important; }
    .op10-print-header-block {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 4px;
    }
    .op10-print-rule {
      display: block;
      border: none;
      border-top: 2px solid #1c75bc;
      margin: 0 0 16px 0;
    }
    .op10-tool-area { background: #fff; margin-top: 0; }
    .op10-show-answer-btn { display: none !important; }
    .op10-q-card {
      box-shadow: none;
      border: 1px solid #ddd;
      height: 170px !important;
    }
    .op10-q-text { overflow: visible; }
    #op10-columns .op10-q-answer { visibility: hidden !important; }
    #op10-answer-key .op10-q-answer { visibility: visible !important; }
    .op10-columns { gap: 12px 24px; }
    .op10-q-card { break-inside: avoid; }
    .op10-answer-key {
      display: block;
      page-break-before: always;
    }
  }
</style>

<script>
(function () {

  /* Seeded pseudo-random shuffle - seed is the same for a given calendar date every year */
  function seededShuffle(arr, seed) {
    var a = arr.slice();
    var s = seed;
    function rnd() {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    }
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* Pick today's date, or ?date=YYYY-MM-DD in the URL for previewing other days */
  function getTargetDate() {
    var params = new URLSearchParams(window.location.search);
    var override = params.get('date');
    if (override) {
      var parts = override.split('-');
      if (parts.length === 3) {
        return { month: parseInt(parts[1], 10), day: parseInt(parts[2], 10) };
      }
    }
    var d = new Date();
    return { month: d.getMonth() + 1, day: d.getDate() };
  }

  /* Append text to a parent element, converting any N/D pattern into a stacked fraction */
  function appendTextWithFractions(parent, text) {
    var re = /(\d+)\/(\d+)/g;
    var lastIndex = 0;
    var match;
    while ((match = re.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parent.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      var frac = document.createElement('span');
      frac.className = 'op10-frac';
      var num = document.createElement('span');
      num.className = 'op10-frac-num';
      num.textContent = match[1];
      var den = document.createElement('span');
      den.className = 'op10-frac-den';
      den.textContent = match[2];
      frac.appendChild(num);
      frac.appendChild(den);
      parent.appendChild(frac);
      lastIndex = re.lastIndex;
    }
    if (lastIndex < text.length) {
      parent.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
  }

  /* ---------- Question banks ---------- */
  /* Each year group has 10 fixed categories. Every day, exactly one question is
     picked from each category (so the mix is the same shape every day, regardless
     of what order any particular school teaches topics in), and which question
     within each category comes up is decided by the date - so it's the same
     10 questions on the same calendar date every year, but varies day to day. */
  var OP10_BANK = {
    year3: {
      label: 'Year 3',
      categories: [
        {
          name: 'Place value',
          color: '#1c75bc',
          questions: [
            { q: 'Write the number four hundred and thirty-seven in digits.', a: '437' },
            { q: 'What is the value of the 6 in 462?', a: '60 (six tens)' },
            { q: 'Write 305 in words.', a: 'Three hundred and five' },
            { q: 'Order these numbers from smallest to largest: 348, 483, 384, 438', a: '348, 384, 438, 483' },
            { q: 'What number is 100 more than 256?', a: '356' },
            { q: 'What number is 10 less than 700?', a: '690' },
            { q: 'Continue the sequence: 150, 200, 250, 300, ___', a: '350' },
            { q: 'Which is greater: 509 or 590?', a: '590' },
            { q: 'Round 463 to the nearest 10.', a: '460' },
            { q: 'Round 685 to the nearest 100.', a: '700' },
            { q: 'Write the number that has 7 hundreds, 0 tens and 4 units.', a: '704' },
            { q: 'What is 999 + 1?', a: '1,000' }
          ]
        },
        {
          name: 'Addition',
          color: '#0e8a8a',
          questions: [
            { q: '245 + 132', a: '377' },
            { q: '372 + 458', a: '830' },
            { q: '156 + 267', a: '423' },
            { q: '428 + 356', a: '784' },
            { q: '519 + 274', a: '793' },
            { q: '683 + 129', a: '812' },
            { q: '247 + 358', a: '605' },
            { q: '396 + 247', a: '643' },
            { q: '512 + 289', a: '801' },
            { q: '634 + 178', a: '812' }
          ]
        },
        {
          name: 'Subtraction',
          color: '#0e8a8a',
          questions: [
            { q: '568 − 231', a: '337' },
            { q: '604 − 178', a: '426' },
            { q: '725 − 348', a: '377' },
            { q: '684 − 253', a: '431' },
            { q: '500 − 267', a: '233' },
            { q: '642 − 189', a: '453' },
            { q: '356 − 178', a: '178' },
            { q: '470 − 235', a: '235' },
            { q: '528 − 214', a: '314' },
            { q: '650 − 320', a: '330' }
          ]
        },
        {
          name: 'Multiplication',
          color: '#0e8a8a',
          questions: [
            { q: '4 × 6', a: '24' },
            { q: '8 × 3', a: '24' },
            { q: '3 × 9', a: '27' },
            { q: '7 × 8', a: '56' },
            { q: '4 × 8', a: '32' },
            { q: '9 × 3', a: '27' },
            { q: '8 × 6', a: '48' },
            { q: '3 × 7', a: '21' },
            { q: '4 × 9', a: '36' },
            { q: '8 × 5', a: '40' }
          ]
        },
        {
          name: 'Division',
          color: '#0e8a8a',
          questions: [
            { q: '24 ÷ 4', a: '6' },
            { q: '32 ÷ 8', a: '4' },
            { q: '56 ÷ 8', a: '7' },
            { q: '48 ÷ 4', a: '12' },
            { q: '27 ÷ 3', a: '9' },
            { q: '40 ÷ 8', a: '5' },
            { q: '36 ÷ 4', a: '9' },
            { q: '21 ÷ 3', a: '7' },
            { q: '64 ÷ 8', a: '8' },
            { q: '24 ÷ 3', a: '8' }
          ]
        },
        {
          name: 'Fractions',
          color: '#c43d6b',
          questions: [
            { q: 'What fraction is 1 part out of 4 equal parts called?', a: '1/4' },
            { q: 'Find 1/3 of 12.', a: '4' },
            { q: 'Find 1/4 of 20.', a: '5' },
            { q: 'Which is bigger, 1/2 or 1/4?', a: '1/2' },
            { q: 'Find 1/3 of 9.', a: '3' },
            { q: 'What is 1/4 of 24?', a: '6' },
            { q: '1/4 + 1/4', a: '2/4 (1/2)' },
            { q: '2/4 + 1/4', a: '3/4' },
            { q: '3/4 − 1/4', a: '2/4 (1/2)' },
            { q: 'What is 3/10 as a decimal?', a: '0.3' },
            { q: 'Write 7 tenths as a fraction.', a: '7/10' },
            { q: 'Is 3/4 greater than or less than 1/4?', a: 'Greater than' }
          ]
        },
        {
          name: 'Geometry',
          color: '#e0592b',
          questions: [
            { q: 'How many faces does a cube have?', a: '6' },
            { q: 'How many vertices (corners) does a cuboid have?', a: '8' },
            { q: 'What is a quarter turn also called?', a: 'A right angle (90°)' },
            { q: 'How many sides does a hexagon have?', a: '6' },
            { q: 'If I turn a half turn, how many degrees is that?', a: '180°' },
            { q: 'Which shape has no straight sides?', a: 'A circle' },
            { q: 'How many edges does a cube have?', a: '12' },
            { q: 'How many sides does a pentagon have?', a: '5' },
            { q: 'What is a full turn in degrees?', a: '360°' },
            { q: 'How many faces does a triangular prism have?', a: '5' }
          ]
        },
        {
          name: 'Statistics',
          color: '#800080',
          questions: [
            { q: 'A pictogram shows 3 whole symbols and each symbol represents 2 books. How many books is that?', a: '6 books' },
            { q: 'A bar chart shows 4 children like football and 6 like swimming, with no other answers. How many children were asked in total?', a: '10 children' },
            { q: 'A pictogram symbol represents 5 sweets. There are 4 symbols. How many sweets is that?', a: '20 sweets' },
            { q: 'On a tally chart, |||| represents how many?', a: '4' },
            { q: 'A bar chart shows 8 apples and 5 bananas. How many more apples than bananas?', a: '3' },
            { q: 'A pictogram key shows 2 pets per symbol. There are 5 symbols. How many pets is that?', a: '10 pets' },
            { q: 'A survey of favourite colours shows red 6, blue 4, green 2. How many children took part?', a: '12' },
            { q: 'A pictogram key shows 3 stickers per symbol. There are 6 symbols. How many stickers is that?', a: '18 stickers' },
            { q: 'A bar chart shows 7 oranges and 7 pears. Are these amounts equal?', a: 'Yes, equal' },
            { q: 'On a tally chart, |||| | represents how many?', a: '6' }
          ]
        },
        {
          name: 'Money',
          color: '#c49012',
          questions: [
            { q: 'I have £5 and spend £2.35. How much do I have left?', a: '£2.65' },
            { q: 'What is £1.50 + £2.75?', a: '£4.25' },
            { q: 'What coins make £1.20 using the fewest coins?', a: '£1 coin + 20p coin' },
            { q: 'I have three 50p coins. How much is that altogether?', a: '£1.50' },
            { q: '£10 − £6.40', a: '£3.60' },
            { q: 'How many 20p coins make £1?', a: '5' },
            { q: '£2.99 + £1.01', a: '£4.00' },
            { q: 'I buy a pen for 65p and pay with a £1 coin. How much change do I get?', a: '35p' },
            { q: '£3.75 + £2.25', a: '£6.00' },
            { q: 'How many 5p coins make 50p?', a: '10' }
          ]
        },
        {
          name: 'Measures',
          color: '#c49012',
          questions: [
            { q: 'What is the perimeter of a rectangle with sides 5 cm and 3 cm?', a: '16 cm' },
            { q: 'A square has sides of 7 cm. What is its perimeter?', a: '28 cm' },
            { q: 'Convert 250 cm to metres and centimetres.', a: '2 m 50 cm' },
            { q: 'Convert 3 m to centimetres.', a: '300 cm' },
            { q: 'It is 4:35. What time will it be in 10 minutes?', a: '4:45' },
            { q: 'Write the time "quarter past 6" as a digital time.', a: '6:15' },
            { q: 'A rectangle has a perimeter of 20 cm and one side is 6 cm. What is the length of the other side?', a: '4 cm' },
            { q: 'How many minutes are there between 2:15 and 2:50?', a: '35 minutes' },
            { q: 'What is the perimeter of a triangle with sides 4 cm, 5 cm and 6 cm?', a: '15 cm' },
            { q: 'Convert 1 metre 50 centimetres to centimetres.', a: '150 cm' },
            { q: 'It is 11:50. What time will it be in 20 minutes?', a: '12:10' },
            { q: 'A pentagon has 5 equal sides of 8 cm. What is its perimeter?', a: '40 cm' }
          ]
        }
      ]
    },

    /* Remaining year groups: banks to follow the same 10-category structure as Year 3 above */
    year4: { label: 'Year 4', comingSoon: true },
    year5: { label: 'Year 5', comingSoon: true },
    year6: { label: 'Year 6', comingSoon: true },
    year7: { label: 'Year 7', comingSoon: true },
    year8: { label: 'Year 8', comingSoon: true },
    year9: { label: 'Year 9', comingSoon: true },
    gcseF: { label: 'Foundation GCSE', comingSoon: true },
    gcseH: { label: 'Higher GCSE', comingSoon: true }
  };

  /* ---------- Rendering ---------- */
  var heroEl = document.getElementById('op10-hero');
  var levelsEl = document.getElementById('op10-levels');
  var viewEl = document.getElementById('op10-view');
  var columnsEl = document.getElementById('op10-columns');
  var answerKeyGridEl = document.getElementById('op10-answer-key-grid');
  var comingSoonEl = document.getElementById('op10-coming-soon');
  var backBtn = document.getElementById('op10-back');
  var newSetBtn = document.getElementById('op10-new-set');
  var showAllBtn = document.getElementById('op10-show-all');
  var printBtn = document.getElementById('op10-print');

  var allAnswersShown = false;
  var currentLevelData = null;

  function getTodaysQuestions(levelData) {
    var target = getTargetDate();
    var seed = target.month * 100 + target.day;

    /* One question from each category, chosen deterministically from the date */
    return levelData.categories.map(function (cat, i) {
      var shuffled = seededShuffle(cat.questions, seed + i * 997);
      var picked = shuffled[0];
      return { q: picked.q, a: picked.a, color: cat.color };
    });
  }

  function renderLevel(levelKey) {
    var levelData = OP10_BANK[levelKey];
    currentLevelData = levelData;
    allAnswersShown = false;
    showAllBtn.textContent = 'Show all answers';

    heroEl.style.display = 'none';
    levelsEl.style.display = 'none';
    viewEl.style.display = 'block';

    if (levelData.comingSoon || !levelData.categories) {
      columnsEl.innerHTML = '';
      answerKeyGridEl.innerHTML = '';
      comingSoonEl.style.display = 'block';
      newSetBtn.disabled = true;
      showAllBtn.disabled = true;
      printBtn.disabled = true;
      return;
    }
    comingSoonEl.style.display = 'none';
    newSetBtn.disabled = false;
    showAllBtn.disabled = false;
    printBtn.disabled = false;

    renderQuestions(getTodaysQuestions(levelData));
  }

  function renderQuestions(questions) {
    var half = Math.ceil(questions.length / 2);
    var colLeft = questions.slice(0, half);
    var colRight = questions.slice(half);

    columnsEl.innerHTML = '';
    columnsEl.appendChild(buildColumn(colLeft, 1, false));
    columnsEl.appendChild(buildColumn(colRight, half + 1, false));

    answerKeyGridEl.innerHTML = '';
    answerKeyGridEl.appendChild(buildColumn(colLeft, 1, true));
    answerKeyGridEl.appendChild(buildColumn(colRight, half + 1, true));
  }

  function buildColumn(questions, startNumber, isAnswerKey) {
    var col = document.createElement('div');
    col.className = 'op10-column';
    questions.forEach(function (item, i) {
      col.appendChild(buildQuestionCard(item, startNumber + i, isAnswerKey));
    });
    return col;
  }

  function buildQuestionCard(item, number, isAnswerKey) {
    var card = document.createElement('div');
    card.className = 'op10-q-card';
    if (item.color) {
      card.style.borderLeftColor = item.color;
    }

    var qText = document.createElement('p');
    qText.className = 'op10-q-text';

    var num = document.createElement('span');
    num.className = 'op10-q-number';
    num.textContent = number + '.';
    qText.appendChild(num);
    appendTextWithFractions(qText, item.q);

    var bottomRow = document.createElement('div');
    bottomRow.className = 'op10-q-bottom-row';

    var answer = document.createElement('p');
    answer.className = 'op10-q-answer';
    appendTextWithFractions(answer, item.a);
    bottomRow.appendChild(answer);

    if (!isAnswerKey) {
      var btn = document.createElement('button');
      btn.className = 'op10-show-answer-btn';
      btn.textContent = 'Show answer';
      btn.addEventListener('click', function () {
        var isVisible = answer.classList.toggle('op10-visible');
        btn.textContent = isVisible ? 'Hide answer' : 'Show answer';
      });
      bottomRow.appendChild(btn);
    }

    card.appendChild(qText);
    card.appendChild(bottomRow);
    return card;
  }

  /* ---------- Events ---------- */
  levelsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.op10-level-btn');
    if (!btn) return;
    renderLevel(btn.getAttribute('data-level'));
  });

  backBtn.addEventListener('click', function () {
    viewEl.style.display = 'none';
    levelsEl.style.display = 'flex';
    heroEl.style.display = '';
  });

  newSetBtn.addEventListener('click', function () {
    if (!currentLevelData || !currentLevelData.categories) return;
    var randomSeed = Math.floor(Math.random() * 1000000);
    var questions = currentLevelData.categories.map(function (cat, i) {
      var shuffled = seededShuffle(cat.questions, randomSeed + i * 997);
      var picked = shuffled[0];
      return { q: picked.q, a: picked.a, color: cat.color };
    });
    allAnswersShown = false;
    showAllBtn.textContent = 'Show all answers';
    renderQuestions(questions);
  });

  showAllBtn.addEventListener('click', function () {
    allAnswersShown = !allAnswersShown;
    var answers = columnsEl.querySelectorAll('.op10-q-answer');
    var buttons = columnsEl.querySelectorAll('.op10-show-answer-btn');
    answers.forEach(function (a) {
      if (allAnswersShown) a.classList.add('op10-visible');
      else a.classList.remove('op10-visible');
    });
    buttons.forEach(function (b) {
      b.textContent = allAnswersShown ? 'Hide answer' : 'Show answer';
    });
    showAllBtn.textContent = allAnswersShown ? 'Hide all answers' : 'Show all answers';
  });

  printBtn.addEventListener('click', function () {
    window.print();
  });

})();
</script>
