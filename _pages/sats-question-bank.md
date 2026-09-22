---
layout: default
title: SATs maths question bank
description: Search real KS2 SATs maths past paper questions by curriculum year, paper, strand and sub-strand. View them on screen or print them straight into a worksheet.
permalink: /sats-question-bank/
body_class: page-sats-question-bank
---

<div id="sqb-page">
<style>
  :root{
    --blue:#1c75bc;      /* Number and place value */
    --green:#009444;     /* Algebra */
    --purple:#800080;    /* Statistics */
    --orange:#f7941e;    /* Buttons and focus accents */
    --amber:#a15c1f;      /* Ratio and proportion */
    --teal:#0e8a8a;       /* Calculation */
    --gold:#c49012;       /* Measurement */
    --vermilion:#e0592b;  /* Properties of shapes */
    --indigo:#4b4fb8;     /* Position and direction */
    --rose:#c43d6b;      /* Fractions, decimals and percentages */
    --navy:#0f1120;
    --bg:#f5f6f8;
    --card-border:#e5e7eb;
    --text:#20222b;
    --muted:#6b7280;
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    background:var(--bg);
    font-family:'DM Sans',sans-serif;
    font-weight:300;
    color:var(--text);
    transition:padding-bottom .2s ease;
  }
  h1,h2,h3,h4,button,.btn{font-weight:700;}
  .wrap{max-width:1100px;margin:0 auto;padding:0 20px;}

  /* Filter rail – scrolls with the page, no sticky positioning */
  .filters{
    background:#fff;
    border-bottom:1px solid var(--card-border);
    padding:14px 0;
  }
  /* Tier/Sub-strand share column 1; Paper/Marks share column 2. Each column
     auto-sizes to whichever of its two members is naturally wider, and the
     narrower one stretches to fill it - no hardcoded pixel widths, no JS. */
  .filters-grid{display:grid;grid-template-columns:auto auto;justify-content:space-between;column-gap:24px;row-gap:12px;}
  .filters-grid .full-row{grid-column:1/-1;}
  .filter-group{display:flex;flex-direction:column;gap:5px;min-width:0;}
  .filter-label{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700;}

  .tier-toggle{display:flex;border:1px solid var(--card-border);border-radius:8px;overflow:hidden;width:100%;}
  /* "All" keeps its natural width in every toggle group; the remaining
     buttons share whatever space is left, so each group fills its column. */
  .tier-toggle button:first-child{flex:0 0 auto;}
  .tier-toggle button:not(:first-child){flex:1 1 0;}
  .paper-bracket{display:inline;}
  /* Tablet and mobile: drop Paper's bracketed text. Marks' 5 short buttons
     then become the naturally wider of the pair, so the shared grid column
     matches to Marks' width and Paper's 2 buttons stretch to fill it -
     automatically, via the same rule that sizes them the other way round
     on desktop. */
  @media (max-width:760px){
    .paper-bracket{display:none;}
  }
  /* Mobile: single column. Tier, Paper and Marks each go full width with
     the same All-fixed / rest-stretched pattern; Sub-strand is already
     full width as a text input. */
  @media (max-width:480px){
    .filters-grid{grid-template-columns:1fr;justify-content:stretch;}
    .filters-grid > .filter-group{grid-column:1/-1;}
    #marksToggle button:not(:first-child){padding:8px 5px;font-size:.72rem;}
  }
  /* Very small/old phone screens (~320px): even tightened padding isn't
     enough room for "4+ marks" etc. alongside the other four buttons, so
     drop to bare numbers as a last resort. */
  @media (max-width:360px){
    .marks-suffix{display:none;}
  }

  .tier-toggle button{
    border:none;background:#fff;color:var(--text);padding:8px 14px;font-size:.85rem;cursor:pointer;
    border-right:1px solid var(--card-border);white-space:nowrap;
  }
  .tier-toggle button:last-child{border-right:none;}
  .tier-toggle button.active{background:var(--navy);color:#fff;}

  .chip-row{display:flex;flex-wrap:wrap;gap:8px;flex:1;}
  .chip{
    border:2px solid var(--chip-color,var(--card-border));background:#fff;border-radius:8px;
    padding:7px 14px;font-size:.83rem;cursor:pointer;font-weight:700;color:var(--chip-color,var(--text));
    white-space:nowrap;flex-shrink:0;transition:background .12s ease,color .12s ease;
  }
  .chip.active{background:var(--chip-color,var(--navy));color:#fff;}

  select, input[type="text"]{
    font-family:'DM Sans',sans-serif;font-weight:400;
    border:1px solid var(--card-border);border-radius:8px;padding:8px 10px;font-size:.85rem;
    min-width:200px;background:#fff;color:var(--text);
  }
  input[type="text"]:focus{outline:none;border-color:var(--orange);box-shadow:0 0 0 1px var(--orange);}
  input[type="text"][readonly]:focus{border-color:var(--card-border);box-shadow:none;}

  .combobox{position:relative;display:flex;align-items:stretch;}
  .combobox input[type="text"]{width:100%;min-width:0;padding-right:62px;}
  .combobox-arrow{
    position:absolute;right:2px;top:0;bottom:0;width:32px;
    border:none;background:none;color:var(--muted);cursor:pointer;font-size:1.3rem;
  }
  .combobox-arrow:hover{color:var(--text);}
  .combobox-clear{
    position:absolute;right:26px;top:0;bottom:0;width:26px;
    border:none;background:none;color:var(--muted);cursor:pointer;font-size:.85rem;
  }
  .combobox-clear:hover{color:var(--orange);}
  .combobox-clear.hidden{display:none;}

  .search-suggestions{
    position:absolute;top:100%;left:0;min-width:100%;width:max-content;max-width:min(560px,92vw);margin-top:4px;
    background:#fff;border:1px solid var(--card-border);border-radius:8px;
    box-shadow:0 6px 18px rgba(0,0,0,.12);z-index:30;overflow:hidden;
    max-height:320px;overflow-y:auto;
  }
  .search-suggestions.hidden{display:none;}
  .search-suggestion{
    padding:10px 14px;font-size:.9rem;cursor:pointer;border-bottom:1px solid var(--bg);
  }
  .search-suggestion:last-child{border-bottom:none;}
  .search-suggestion:hover,.search-suggestion.highlighted{background:#fde2e2;}

  .results-meta{padding:14px 0 4px;font-size:.85rem;color:var(--muted);}

  /* Question grid */
  .grid{
    display:grid;grid-template-columns:repeat(2,1fr);gap:16px;
    padding:10px 0 100px;
  }
  @media (max-width:760px){.grid{grid-template-columns:1fr;}}

  .card{
    background:#fff;border:1px solid var(--card-border);border-radius:10px;
    border-left:4px solid var(--strand,#999);
    padding:16px;display:flex;flex-direction:column;gap:10px;cursor:pointer;
    transition:box-shadow .15s ease;
    height:300px;overflow-x:hidden;overflow-y:hidden;min-width:0;
  }
  .card:hover{box-shadow:0 3px 12px rgba(0,0,0,.08);}
  /* No static padding-top here on purpose - see fixExpClipping() in the
     script. A superscript/fraction on a card's first line can clip against
     this container's own overflow:hidden top edge (transform moves paint
     position, not the layout box), but the fix is measured and applied
     per-card in JS after each render, only when that card actually needs
     it - a flat CSS value here previously added visible space to every
     card, including the vast majority with nothing near their top edge. */
  .card-body{flex:1;min-height:0;overflow-x:hidden;overflow-y:hidden;position:relative;display:flex;flex-direction:column;gap:8px;min-width:0;}
  .card-body::after{
    content:"";position:absolute;left:0;right:0;bottom:0;height:36px;
    background:linear-gradient(to bottom, rgba(255,255,255,0), #fff);
    pointer-events:none;
  }
  .card-top{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;}
  .card-top-right{display:flex;align-items:center;gap:6px;flex:0 0 auto;}
  .source-tag{font-size:.75rem;color:var(--muted);font-weight:400;}
  .marks-badge{
    font-size:.72rem;font-weight:700;background:var(--bg);border:1px solid var(--card-border);
    border-radius:20px;padding:3px 9px;white-space:nowrap;
  }
  .subtopic-pill{
    align-self:flex-start;font-size:.72rem;font-weight:700;color:#fff;
    background:var(--strand,#999);border-radius:6px;padding:3px 9px;
  }
  .q-heading{margin:0;font-size:.95rem;}
  .q-text{font-size:.88rem;line-height:1.5;font-weight:400;white-space:pre-line;flex:0 0 auto;}
  .q-diagram{display:flex;flex-wrap:wrap;justify-content:center;padding:6px 0 14px;flex:0 0 auto;min-width:0;max-width:100%;}
  .q-diagram img{min-width:0;}
  /* Cropped-from-PDF questions: shown left-aligned at a fixed 0.5x of their
     native pixel size (never stretched to fill the card), with no
     "Question N" heading since the number is already baked into the crop. */
  .q-diagram.q-crop{justify-content:flex-start;padding:2px 0 14px;}
  .q-diagram.q-crop img{display:block;margin:0;height:auto;}
  /* Modal has far more horizontal room than a grid card, so its crop uses a
     larger fixed scale (not the grid's 0.5x) - but still a FIXED multiple
     of native size, not stretched to the container. Stretching to width:100%
     made every crop's on-screen text a different size depending on that
     crop's own aspect ratio, which is exactly what a fixed scale avoids. */
  .q-diagram.q-crop-modal{display:block;padding:6px 0 16px;}
  .q-diagram.q-crop-modal img{display:block;max-width:100%;height:auto;margin:0;}
  /* Algebra letters need the genuine curled serif italic seen on the actual
     exam papers (e.g. Times New Roman Italic) - a sans-serif italic like DM
     Sans just slants the upright letterform and never gets that curled
     shape, regardless of whether a true italic weight is loaded. Maths
     notation (fractions, exponents, vector arrows) is switched to the same
     serif stack throughout so numerals match the papers too, not just the
     italic letters. */
  .q-text em, .answer-box em, .print-answers em{
    font-family:'Times New Roman',Times,'Liberation Serif',serif;font-style:italic;
  }
  .frac{display:inline-flex;flex-direction:column;align-items:stretch;vertical-align:middle;font-size:.92em;line-height:1.15;text-align:center;margin:0 2px;position:relative;top:.1em;font-family:'Times New Roman',Times,'Liberation Serif',serif;}
  .frac-sm{display:inline-flex;flex-direction:column;align-items:stretch;vertical-align:middle;font-size:.72em;line-height:.95;text-align:center;margin:0 1px;font-family:'Times New Roman',Times,'Liberation Serif',serif;}
  .frac .num{border-bottom:1px solid currentColor;padding:0 3px;}
  .frac .den{padding:0 3px;}
  .frac-sm .num{border-bottom:1px solid currentColor;padding:0 2px;}
  .frac-sm .den{padding:0 2px;}
  .card-actions{
    margin-top:auto;padding-top:8px;border-top:1px solid var(--card-border);
    display:flex;justify-content:space-between;align-items:center;
  }
  .add-label{display:flex;align-items:center;gap:7px;font-size:.82rem;cursor:pointer;}
  .print-one{
    border:none;background:none;color:var(--blue);font-size:.8rem;font-weight:700;cursor:pointer;
    display:flex;align-items:center;gap:4px;
  }
  .print-one:hover{text-decoration:underline;}

  /* Sticky worksheet builder bar - the signature element */
  .builder-bar{
    position:fixed;left:0;right:0;bottom:0;z-index:30;
    background:var(--navy);color:#fff;
    padding:14px 0;
    transform:translateY(110%);transition:transform .25s ease;
    box-shadow:0 -6px 20px rgba(0,0,0,.15);
  }
  .builder-bar.show{transform:translateY(0);}
  .builder-bar .wrap{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;}
  .builder-info{font-size:.9rem;}
  .builder-info strong{color:var(--orange);}
  .builder-actions{display:flex;gap:10px;align-items:center;}
  .builder-left{display:flex;gap:14px;align-items:center;}
  .answers-toggle-label{display:flex;align-items:center;gap:7px;font-size:.85rem;color:#fff;white-space:nowrap;cursor:pointer;}
  .print-answers{display:none;}
  .btn{
    border:none;border-radius:8px;padding:10px 16px;font-size:.85rem;cursor:pointer;
  }
  .btn-primary{background:var(--orange);color:#0f1120;}
  .btn-primary:hover{background:#d97e0f;}
  .btn-ghost{background:transparent;color:#fff;border:1px solid #454863;}
  .btn-ghost:hover{background:#1c1e33;}

  .no-results{padding:60px 0;text-align:center;color:var(--muted);}
  .load-more-wrap{display:flex;justify-content:center;padding:8px 0 40px;margin-top:-72px;}
  .btn-loadmore{background:var(--navy);color:#fff;border:none;font-weight:700;}
  .btn-loadmore:hover{background:#1c1e33;}
  .load-more-wrap .btn{padding:12px 28px;}

  /* Question viewer modal */
  .modal-overlay{
    position:fixed;inset:0;background:rgba(15,17,32,.55);z-index:50;
    display:flex;align-items:center;justify-content:center;padding:24px 16px;
  }
  .modal-overlay.hidden{display:none;}
  .modal-box{
    background:#fff;border-radius:12px;max-width:880px;width:100%;
    height:min(85vh,720px);
    position:relative;border-left:6px solid var(--strand,#999);
    display:flex;flex-direction:column;
    overflow:hidden;
  }
  .modal-header{
    padding:20px 50px 14px 24px;border-bottom:1px solid var(--card-border);flex-shrink:0;
  }
  .modal-header-top{display:flex;justify-content:space-between;align-items:center;gap:14px;}
  .modal-scroll-body{overflow-y:auto;flex:1;min-height:0;padding:18px 24px;}
  #modalContent{display:flex;flex-direction:column;height:100%;min-height:0;gap:10px;padding-top:4px;}
  .modal-close{
    position:absolute;top:16px;right:18px;border:none;background:none;
    font-size:1.3rem;cursor:pointer;color:var(--muted);line-height:1;
  }
  .modal-footer{flex-shrink:0;border-top:1px solid var(--card-border);background:var(--bg);}
  .modal-footer-row{
    display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;
    padding:12px 24px;
  }
  .modal-footer-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
  .modal-footer-nav{display:flex;align-items:center;gap:12px;}
  .modal-footer-row .add-label{display:flex;align-items:center;gap:7px;font-size:.85rem;white-space:nowrap;}
  .modal-footer-nav button{
    background:var(--navy);color:#fff;border:none;border-radius:10px;
    padding:8px 14px;font-size:.85rem;font-weight:700;cursor:pointer;
  }
  .modal-footer-nav button:hover:not(:disabled){background:#1c1e33;}
  .modal-footer-nav button:disabled{opacity:.3;cursor:default;}
  .modal-count{font-size:.8rem;color:var(--muted);white-space:nowrap;}
  .answer-box{
    margin-top:12px;background:#fff;border:1px solid var(--card-border);border-radius:8px;padding:12px;font-size:.85rem;
    white-space:pre-line;
  }
  .answer-toggle{
    border:none;background:var(--green);color:#fff;font-weight:700;font-size:.82rem;cursor:pointer;padding:8px 14px;border-radius:10px;
    width:112px;text-align:center;
  }
  .answer-toggle:hover{background:#00792f;}
  .modal-print-btn{
    border:none;background:var(--orange);color:#0f1120;font-weight:700;font-size:.82rem;cursor:pointer;padding:8px 14px;border-radius:10px;
  }

  @media print{
    /* Hide everything the shared layout adds around this page (header,
       footer, back-to-top button, whatever else lives directly in <body>)
       by only allowing our own wrapper through - more reliable than
       naming the layout's header/footer classes, which aren't visible
       from this file since they live in separate _includes partials. */
    body > *:not(#sqb-page){display:none !important;}
    .om-hero,.filters,.builder-bar,.card-actions,.results-meta,.load-more-wrap{display:none !important;}
    /* Printing must always show exactly what printSelected()/printOne()
       build from the grid cards - never the modal's own rendering (which
       uses a different, larger fill-width image scale). Without this, a
       print triggered from the popup's own "Print this question" button
       would show the modal's fixed-position content instead of, or on
       top of, the intended grid-card print output. */
    .modal-overlay{display:none !important;}
    .grid{display:block;}
    .card{
      display:block !important;
      border:1px solid #999;border-left:4px solid var(--strand,#999) !important;page-break-inside:avoid;margin-bottom:18px;
      height:auto !important;overflow:visible !important;
    }
    /* A higher-specificity selector is required here: .card already forces
       display:block !important above (needed so flexbox doesn't corrupt
       content across a page break - see .card-body note below), and an
       !important stylesheet rule beats a plain inline style, so printing
       used to silently override printSelected()/printOne()'s attempt to
       hide unchecked cards via c.style.display='none'. Hiding is done by
       toggling this class instead, whose compound selector outranks the
       single-class rule above regardless of !important on either side. */
    .card.print-hide{display:none !important;}
    /* Flexbox does not reliably fragment across a printed page break - when a
       card can't fit on one page whole (despite page-break-inside:avoid being
       only a hint), a flex column's children can render out of position or
       overlapping. Block layout fragments predictably, so the card's internal
       structure switches to plain block flow for print, with margins standing
       in for the on-screen flex gap. */
    .card-top{display:block !important;margin-bottom:8px;}
    .card-top > div{display:inline;}
    .card-top .subtopic-pill{display:inline-block;margin-right:8px;}
    .card-top .source-tag{display:inline;}
    .card-top .card-top-right{display:none !important;}
    .printing-selection .grid{display:none !important;}
    .printing-selection #printCards{display:block;}
    .card .q-diagram.q-crop{width:100%;}
    .card .q-diagram.q-crop img{width:100% !important;max-width:100% !important;height:auto;}
    .card-top .card-top-right .marks-badge{display:inline-block;}
    .card-body{display:block !important;overflow:visible !important;height:auto !important;}
    .card-body::after{display:none !important;}
    .q-heading{display:block;margin-bottom:8px;}
    .q-text{display:block;margin-bottom:10px;}
    .q-diagram{display:block !important;margin-bottom:10px;text-align:center;}
    .q-diagram img{display:inline-block !important;}
    .q-diagram.q-crop{text-align:left !important;}
    .q-diagram.q-crop img{display:block !important;margin:0 !important;}
    .answer-box{display:block;margin-top:10px;}
    .answer-img img{display:block !important;}
    body{background:#fff;}
    .print-answers.has-content{
      display:block !important;page-break-before:always;
    }
    .print-answers h2{font-family:'DM Sans',sans-serif;font-weight:700;font-size:1.3rem;margin:0 0 16px;}
    .print-answers .answer-item{margin-bottom:16px;page-break-inside:avoid;}
    /* No separate "strong" rule needed here - .answer-box already styles
       the inline "Answer:"/"Mark scheme:" labels correctly on its own,
       matching the modal exactly. */
    .print-answers .answer-box{margin-top:4px;}
    .print-answers .answer-source{display:block;font-size:.78rem;color:#666;margin-bottom:4px;}
    /* All answers use the SAME (smaller) fraction size here, regardless of
       the on-screen large/small logic based on line length - a dense list
       of many answers together should read as one consistent size, not a
       mix, even though that per-line sizing is the right call on screen. */
    .print-answers .frac{font-size:.72em !important;line-height:.95 !important;margin:0 1px !important;}
    .print-answers .answer-item > div{white-space:pre-line;}
    /* .markscheme-text rule removed - mark scheme now lives inside
       .answer-box alongside "Answer:", matching the modal exactly. */
  }
  #printCards{display:none;}
  .ms-bullet{display:flex;gap:.5em;margin-left:.4em;white-space:normal;}
  .ms-dot{flex:none;}
  .ms-bullet-img .ms-dot{margin-top:.5em;}
  .ms-bcontent{flex:1;min-width:0;}
  .ms-bcontent .answer-img{margin-top:2px;}
  .frac.mixed,.frac-sm.mixed{margin-left:0;}
  .answer-img{margin-top:10px;}
  .answer-img img{display:block;max-width:100%;height:auto;}

</style>

<section class="om-hero" style="min-height:0; padding: 3.5rem 2rem 1.75rem;">
  <h1>SATs maths <em>question bank</em></h1>
  <p>Search and practise real KS2 SATs maths past paper questions by topic, curriculum year and paper. Build your own worksheets, or view and print individual questions.</p>
  <p style="margin-top:0.75rem;font-size:0.85em;opacity:0.75;">The 2016 key stage 2 mathematics tests are Crown copyright and are reproduced under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" style="color:inherit;">Open Government Licence v3.0</a>. Contains public sector information licensed under the Open Government Licence v3.0.</p>
</section>

<div class="filters">
  <div class="wrap">
    <div class="filters-grid">
      <div class="filter-group">
        <span class="filter-label" title="The year of the national curriculum programme of study that the question assesses">Curriculum year</span>
        <div class="tier-toggle" id="yearToggle">
          <button data-year="all" class="active">All</button>
          <button data-year="3">Year 3</button>
          <button data-year="4">Year 4</button>
          <button data-year="5">Year 5</button>
          <button data-year="6">Year 6</button>
        </div>
      </div>

      <div class="filter-group">
        <span class="filter-label">Paper</span>
        <div class="tier-toggle" id="paperToggle">
          <button data-paper="all" class="active">All</button>
          <button data-paper="Paper 1 (arithmetic)">Paper 1 <span class="paper-bracket">(arithmetic)</span></button>
          <button data-paper="Papers 2 & 3 (reasoning)">Papers 2 &amp; 3 <span class="paper-bracket">(reasoning)</span></button>
        </div>
      </div>

      <div class="filter-group full-row">
        <span class="filter-label">Strand</span>
        <div class="chip-row" id="strandChips"></div>
      </div>

      <div class="filter-group" style="position:relative;">
        <span class="filter-label">Sub-strand</span>
        <div class="combobox">
          <input type="text" id="substrandInput" placeholder="Search or choose sub-strand" autocomplete="off">
          <button type="button" class="combobox-clear hidden" id="substrandClear" aria-label="Clear sub-strand filter">✕</button>
          <button type="button" class="combobox-arrow" id="substrandArrow" aria-label="Show all sub-strands">▾</button>
        </div>
        <div class="search-suggestions hidden" id="searchSuggestions"></div>
      </div>

      <div class="filter-group">
        <span class="filter-label">Marks</span>
        <div class="tier-toggle" id="marksToggle">
          <button data-marks="all" class="active">All</button>
          <button data-marks="1">1<span class="marks-suffix"> mark</span></button>
          <button data-marks="2">2<span class="marks-suffix"> marks</span></button>
          <button data-marks="3">3<span class="marks-suffix"> marks</span></button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrap">
  <div class="results-meta" id="resultsMeta"></div>
  <div class="grid" id="grid"></div>
  <div class="load-more-wrap" id="loadMoreWrap"></div>
</div>

<div class="builder-bar" id="builderBar">
  <div class="wrap">
    <div class="builder-left">
      <button class="btn btn-ghost" id="clearBtn">Clear selection</button>
      <div class="builder-info"><strong id="selCount">0</strong> questions selected &nbsp;·&nbsp; <span id="selMarks">0</span> marks total</div>
    </div>
    <div class="builder-actions">
      <label class="answers-toggle-label">
        <input type="checkbox" id="includeAnswersToggle">
        Include answers
      </label>
      <button class="btn btn-primary" id="printSelected">Print worksheet</button>
    </div>
  </div>
</div>

<div id="printCards"></div>

<div id="printAnswers" class="print-answers"></div>

<div class="modal-overlay hidden" id="modalOverlay">
  <div class="modal-box" id="modalBox">
    <button class="modal-close" id="modalClose">✕</button>
    <div class="modal-header" id="modalHeader"></div>
    <div class="modal-scroll-body" id="modalContent"></div>
    <div class="modal-footer">
      <div class="modal-footer-row">
        <div class="modal-footer-actions">
          <label class="add-label">
            <input type="checkbox" id="modalCheckbox">
            Add to worksheet
          </label>
          <button class="answer-toggle" id="modalAnswerToggle">Show answer</button>
          <button class="modal-print-btn" id="modalPrintBtn">Print this question →</button>
        </div>
        <div class="modal-footer-nav">
          <button id="modalPrev">← Previous</button>
          <span class="modal-count" id="modalCount"></span>
          <button id="modalNext">Next →</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const STRANDS = {
  "Number and place value": "var(--blue)",
  "Calculation": "var(--teal)",
  "Fractions, decimals and percentages": "var(--rose)",
  "Ratio and proportion": "var(--amber)",
  "Algebra": "var(--green)",
  "Measurement": "var(--gold)",
  "Properties of shapes": "var(--vermilion)",
  "Position and direction": "var(--indigo)",
  "Statistics": "var(--purple)"
};

// Base path for the linked question images under assets/images/ on the real
// site. Every question is a crop taken straight from the original test paper,
// saved at 2x the paper's own size (144 dpi), so one fixed display scale keeps
// every question's printed text the same size on screen.
const QIMG_BASE_PATH = "/assets/images/sats-question-bank/";
const GRID_CROP_SCALE = 0.5;
const MODAL_CROP_SCALE = 0.75;
const ANSWER_IMG_SCALE = 0.5;

// Each record:
//   qimg      image of the question (src is the file name without .png, w/h are its native pixel size)
//   n         question number as printed on the paper, with any parts (eg "4(a,b)")
//   paperNum  1, 2 or 3
//   paper     the filter group: Paper 1 (arithmetic) or Papers 2 & 3 (reasoning)
//   sitting   year of the test
//   strand    content domain strand (from the letter in the reference)
//   subtopic  sub-strand (or a list of them)
//   marks     total marks for the whole question
//   ref       content domain reference(s) from the test's own coverage table (eg 6C7b)
//   intro, text   typed copy of the question, used only if its image is missing
//   answer, markscheme, ansImg (optional image of a drawn answer)
const QUESTIONS = [
{"qimg":{"src":"2016-P1-Q1","w":1043,"h":441},"n":"1","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Number and place value","subtopic":"Place value","marks":1,"ref":"3N2b","text":"987 + 100 =","answer":"1,087","markscheme":""},
{"qimg":{"src":"2016-P1-Q2","w":1043,"h":442},"n":"2","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"3C2","text":"46 + 304 =","answer":"350","markscheme":""},
{"qimg":{"src":"2016-P1-Q3","w":1043,"h":441},"n":"3","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"4C6b","text":"326 ÷ 1 =","answer":"326","markscheme":""},
{"qimg":{"src":"2016-P1-Q4","w":1042,"h":441},"n":"4","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Mental addition and subtraction","marks":1,"ref":"3C1","text":"468 − 9 =","answer":"459","markscheme":""},
{"qimg":{"src":"2016-P1-Q5","w":1042,"h":442},"n":"5","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"3C2","text":"☐ = 936 + 285","answer":"1,221","markscheme":""},
{"qimg":{"src":"2016-P1-Q6","w":1042,"h":441},"n":"6","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"3C7","text":"95 ÷ 5 =","answer":"19","markscheme":""},
{"qimg":{"src":"2016-P1-Q7","w":1043,"h":441},"n":"7","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"5C2","text":"89,994 + 7,643 =","answer":"97,637","markscheme":""},
{"qimg":{"src":"2016-P1-Q8","w":1043,"h":442},"n":"8","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Mental addition and subtraction","marks":1,"ref":"3C1","text":"☐ = 435 − 30","answer":"405","markscheme":""},
{"qimg":{"src":"2016-P1-Q9","w":1043,"h":441},"n":"9","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"3C7","text":"96 ÷ 4 =","answer":"24","markscheme":""},
{"qimg":{"src":"2016-P1-Q10","w":1042,"h":441},"n":"10","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written multiplication","marks":1,"ref":"4C7","text":"879 × 3 =","answer":"2,637","markscheme":""},
{"qimg":{"src":"2016-P1-Q11","w":1042,"h":442},"n":"11","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written multiplication","marks":1,"ref":"3C7","text":"71 × 8 =","answer":"568","markscheme":""},
{"qimg":{"src":"2016-P1-Q12","w":1042,"h":441},"n":"12","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"5C6a","text":"50 × 70 =","answer":"3,500","markscheme":""},
{"qimg":{"src":"2016-P1-Q13","w":1043,"h":441},"n":"13","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Multiplying and dividing by 10, 100 and 1000","marks":1,"ref":"5C6b","text":"100 × 412 =","answer":"41,200","markscheme":""},
{"qimg":{"src":"2016-P1-Q14","w":1043,"h":442},"n":"14","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"5F8","text":"3.005 + 6.12 =","answer":"9.125","markscheme":""},
{"qimg":{"src":"2016-P1-Q15","w":1043,"h":441},"n":"15","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written division","marks":1,"ref":"5C7b","text":"486 ÷ 3 =","answer":"162","markscheme":""},
{"qimg":{"src":"2016-P1-Q16","w":1042,"h":441},"n":"16","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"5F8","text":"15.98 + 26.314 =","answer":"42.294","markscheme":""},
{"qimg":{"src":"2016-P1-Q17","w":1042,"h":442},"n":"17","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"5F8","text":"125.48 − 72.3 =","answer":"53.18","markscheme":""},
{"qimg":{"src":"2016-P1-Q18","w":1042,"h":441},"n":"18","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"5C2","text":"122,456 − 11,999 =","answer":"110,457","markscheme":""},
{"qimg":{"src":"2016-P1-Q19","w":1043,"h":441},"n":"19","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Order of operations","marks":1,"ref":"6C9","text":"3² + 10 =","answer":"19","markscheme":""},
{"qimg":{"src":"2016-P1-Q20","w":1043,"h":442},"n":"20","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing decimals","marks":1,"ref":"6F9a","text":"0.9 ÷ 10 =","answer":"0.09","markscheme":""},
{"qimg":{"src":"2016-P1-Q21","w":1043,"h":441},"n":"21","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"4F8","text":"4 − 1.15 =","answer":"2.85","markscheme":""},
{"qimg":{"src":"2016-P1-Q22","w":1042,"h":441},"n":"22","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"4C6b","text":"1,320 ÷ 12 =","answer":"110","markscheme":""},
{"qimg":{"src":"2016-P1-Q23","w":1043,"h":482},"n":"23","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written multiplication","marks":2,"ref":"5C7a","text":"71 × 46 =\n(Use long multiplication and show your method.)","answer":"Award TWO marks for the correct answer of 3,266","markscheme":"If the answer is incorrect, award ONE mark for the formal method of long multiplication with no more than ONE arithmetical error, e.g.\n• [[img:2016-P1-Q23-a:168]]\nOR\n• [[img:2016-P1-Q23-b:168]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nDo not award any marks if the error is in the place value, e.g. the omission of the zero when multiplying by tens:\n[[img:2016-P1-Q23-c:256]]"},
{"qimg":{"src":"2016-P1-Q24","w":1043,"h":441},"n":"24","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"4F4","text":"4/7 + 5/7 =","answer":"1 2/7 or 9/7","markscheme":"Accept equivalent fractions or the exact decimal equivalent, e.g. 1.28̅5̅7̅1̅4̅ (accept any unambiguous indication of the recurring digits).\nDo not accept rounded or truncated decimals."},
{"qimg":{"src":"2016-P1-Q25","w":1043,"h":442},"n":"25","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Ratio and proportion","subtopic":"Percentages of amounts","marks":1,"ref":"6R2","text":"20% of 1,800 =","answer":"360","markscheme":"Do not accept 360%"},
{"qimg":{"src":"2016-P1-Q26","w":1043,"h":441},"n":"26","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing decimals","marks":1,"ref":"6F9b","text":"15 × 6.1 =","answer":"91.5","markscheme":""},
{"qimg":{"src":"2016-P1-Q27","w":1042,"h":441},"n":"27","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"5F4","text":"3/10 − 1/20 =","answer":"1/4","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 0.25"},
{"qimg":{"src":"2016-P1-Q28","w":1042,"h":481},"n":"28","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written division","marks":2,"ref":"6C7b","text":"725 ÷ 29 =\n(Use long division and show your method.)","answer":"Award TWO marks for the correct answer of 25","markscheme":"If the answer is incorrect, award ONE mark for the formal methods of division with no more than ONE arithmetical error, i.e.\n• long division algorithm, e.g.\n[[img:2016-P1-Q28-a:304]]\nOR\n[[img:2016-P1-Q28-b:304]]\n• short division algorithm, e.g.\n[[img:2016-P1-Q28-c:188]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nShort division methods must be supported by evidence of appropriate carrying figures to indicate the use of a division algorithm, and be a complete method. The carrying figure must be less than the divisor."},
{"qimg":{"src":"2016-P1-Q29","w":1043,"h":441},"n":"29","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Ratio and proportion","subtopic":"Percentages of amounts","marks":1,"ref":"6R2","text":"15% × 440 =","answer":"66","markscheme":"Do not accept 66%"},
{"qimg":{"src":"2016-P1-Q30","w":1043,"h":481},"n":"30","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written multiplication","marks":2,"ref":"6C7a","text":"6574 × 31 =\n(Use long multiplication and show your method.)","answer":"Award TWO marks for the correct answer of 203,794","markscheme":"If the answer is incorrect, award ONE mark for the formal method of long multiplication with no more than ONE arithmetical error, e.g.\n• [[img:2016-P1-Q30-a:184]]\nOR\n• [[img:2016-P1-Q30-b:184]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nDo not award any marks if the error is in the place value, e.g. the omission of the zero when multiplying by tens:\n[[img:2016-P1-Q30-c:280]]"},
{"qimg":{"src":"2016-P1-Q31","w":1042,"h":441},"n":"31","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"6F4","text":"1 4/5 + 3/10 =","answer":"2 1/10 or 21/10","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 2.1\nDo not accept 1 11/10"},
{"qimg":{"src":"2016-P1-Q32","w":1042,"h":482},"n":"32","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Written division","marks":2,"ref":"6C7b","text":"1,118 ÷ 43 =\n(Use long division and show your method.)","answer":"Award TWO marks for the correct answer of 26","markscheme":"If the answer is incorrect, award ONE mark for the formal methods of division with no more than ONE arithmetical error, i.e.\n• long division algorithm, e.g.\n[[img:2016-P1-Q32-a:300]]\nOR\n[[img:2016-P1-Q32-b:300]]\n• short division algorithm, e.g.\n[[img:2016-P1-Q32-c:188]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nShort division methods must be supported by evidence of appropriate carrying figures to indicate the use of a division algorithm, and be a complete method. The carrying figure must be less than the divisor."},
{"qimg":{"src":"2016-P1-Q33","w":1043,"h":441},"n":"33","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing fractions","marks":1,"ref":"6F5b","text":"3/5 ÷ 3 =","answer":"1/5","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 0.2"},
{"qimg":{"src":"2016-P1-Q34","w":1043,"h":442},"n":"34","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing fractions","marks":1,"ref":"5F5","text":"2/5 × 140 =","answer":"56","markscheme":""},
{"qimg":{"src":"2016-P1-Q35","w":1042,"h":441},"n":"35","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"6F4","text":"1 1/4 − 1/3 =","answer":"11/12","markscheme":"Accept equivalent fractions or the exact decimal equivalent e.g. 0.916̅ (accept any unambiguous indication of the recurring digit).\nDo not accept rounded or truncated decimals."},
{"qimg":{"src":"2016-P1-Q36","w":1042,"h":442},"n":"36","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2016","strand":"Calculation","subtopic":"Order of operations","marks":1,"ref":"6C9","text":"60 − 42 ÷ 6 =","answer":"53","markscheme":""},
{"qimg":{"src":"2016-P2-Q1","w":1069,"h":602},"n":"1","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Number and place value","subtopic":"Comparing and ordering numbers","marks":2,"ref":"3N2a","intro":"Ali puts these five numbers in their correct places on a number line.\n511   499   502   555   455","text":"(a) Write the number closest to 500\n(b) Write the number furthest from 500","answer":"(a) 499&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 555","markscheme":""},
{"qimg":{"src":"2016-P2-Q2","w":1070,"h":892},"n":"2","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Number and place value","subtopic":"Comparing and ordering numbers","marks":1,"ref":"5N2","intro":"Five houses are for sale.\nA £135,300   B £119,125   C £130,500   D £131,500   E £91,500","text":"Put these houses in order of price starting with the lowest price.\nOne has been done for you: B is second.","answer":"Award ONE mark for the correct answer as shown:","markscheme":"Accept:\n• <u><strong>£91,500</strong></u> <u style=\"color:#9a9a9a\">B</u> <u><strong>£130,500</strong></u> <u><strong>£131,500</strong></u> <u><strong>£135,300</strong></u>","ansImg":{"src":"2016-P2-Q2-order","w":252,"h":52}},
{"qimg":{"src":"2016-P2-Q3","w":1074,"h":434},"n":"3","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Written addition and subtraction","marks":2,"ref":"3C2","text":"Write the three missing digits to make this addition correct.\n1 5 ☐\n+ 4 ☐ 4\n☐ 1 5","answer":"Award TWO marks for:","markscheme":"If the answer is incorrect, award ONE mark for two digits correct.","ansImg":{"src":"2016-P2-Q3-add","w":124,"h":116}},
{"qimg":{"src":"2016-P2-Q4","w":1070,"h":1213},"n":"4","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Statistics","subtopic":"Tables","marks":2,"ref":"4S1, 5S1","intro":"This table shows the number of people living in various towns in England.\nBedford: 82,448\nCarlton: 48,493\nDover: 34,087\nFormby: 24,478\nTelford: 166,640","text":"(a) What is the total of the numbers of people living in Formby and in Telford?\n(b) What is the difference between the numbers of people living in Bedford and in Dover?","answer":"(a) 191,118&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 48,361","markscheme":""},
{"qimg":{"src":"2016-P2-Q5","w":1074,"h":714},"n":"5","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":["Prime numbers","Square numbers"],"marks":2,"ref":"5C5c","text":"Write each number in its correct place on the diagram.\n16   17   18   19\n(The diagram has three overlapping sets: prime numbers, even numbers and square numbers.)","answer":"Award TWO marks for all four numbers placed correctly as shown:","markscheme":"If the answer is incorrect, award ONE mark for three numbers placed correctly.\nAdditional guidance:\nAccept alternative unambiguous indications, e.g. lines drawn from the numbers to the appropriate regions of the diagram.\nDo not accept numbers written in more than one region, e.g.\n[[img:2016-P2-Q5-wrong1:306]]\nOR\n[[img:2016-P2-Q5-wrong2:306]]","ansImg":{"src":"2016-P2-Q5-answer","w":458,"h":298}},
{"qimg":{"src":"2016-P2-Q6","w":1070,"h":868},"n":"6","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Properties of shapes","subtopic":"Reflection","marks":1,"ref":"4G2c","intro":"This diagram shows a shaded shape inside a border of squares.","text":"Draw the reflection of the shape in the mirror line.\nUse a ruler.","answer":"Diagram completed correctly as shown:","markscheme":"Accept inaccurate drawing, provided the intention is clear.\nDiagram need not be shaded.\nDiagram need not include edges drawn along the gridlines, e.g.\n[[img:2016-P2-Q6-guidance:436]]","ansImg":{"src":"2016-P2-Q6-answer","w":456,"h":444}},
{"qimg":{"src":"2016-P2-Q7","w":1069,"h":301},"n":"7","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Equivalent fractions","marks":2,"ref":"6F2","text":"Write the two missing values to make these equivalent fractions correct.\n☐/3 = 8/12 = 4/☐","answer":"","markscheme":"","ansImg":{"src":"2016-P2-Q7-frac","w":310,"h":98}},
{"qimg":{"src":"2016-P2-Q8","w":1069,"h":196},"n":"8","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Fraction and decimal equivalents","marks":1,"ref":"5F10","text":"Circle two numbers that add together to equal 0.25\n0.05   0.23   0.2   0.5","answer":"Numbers circled as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. numbers ticked or underlined.","ansImg":{"src":"2016-P2-Q8-circled","w":344,"h":56}},
{"qimg":{"src":"2016-P2-Q9","w":1074,"h":1020},"n":"9","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Money problems","marks":2,"ref":"3M9a","intro":"6 pencils cost £1.68\n3 pencils and 1 rubber cost £1.09","text":"What is the cost of 1 rubber?","answer":"Award TWO marks for the correct answer of 25p","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 168 ÷ 2 = 84\n109 − 84\nOR\n• 168 ÷ 6 = 28\n3 × 28 = 84\n109 − 84\nAdditional guidance:\nAccept for TWO marks, an answer given in the acceptable notation.\nAnswer need not be obtained for the award of ONE mark.\nAccept for ONE mark an answer of 0.25p OR £25p OR £25 as evidence of an appropriate method."},
{"qimg":{"src":"2016-P2-Q10","w":1074,"h":435},"n":"10","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Fractions of shapes","marks":2,"ref":"3F2","intro":"Each diagram below is divided into equal sections.\n(The diagrams are a square split into 4 triangles, a stepped shape made from 12 triangles and a circle split into 8 sectors.)","text":"Shade three-quarters of each diagram.","answer":"Award TWO marks for all three diagrams completed to show three-quarters shaded, e.g.","markscheme":"If the answer is incorrect, award ONE mark for two diagrams correct.\nAdditional guidance:\nAccept alternative unambiguous indications of parts shaded.","ansImg":{"src":"2016-P2-Q10-answer","w":464,"h":152}},
{"qimg":{"src":"2016-P2-Q11","w":1074,"h":815},"n":"11","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Converting units","marks":2,"ref":"5M9c","intro":"A packet contains 1.5 kg of oats.\nEvery day Maria uses 50 g of oats to make porridge.","text":"How many days does the packet of oats last?","answer":"Award TWO marks for the correct answer of 30","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 1.5 kg = 1,500 g\n1,500 ÷ 50\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark.\nUnits must be converted correctly for the award of ONE mark."},
{"qimg":{"src":"2016-P2-Q12","w":1069,"h":682},"n":"12","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Algebra","subtopic":"Substitution and simple equations","marks":2,"ref":"6A2","intro":"<em>n</em> = 22","text":"(a) What is 2<em>n</em> + 9?\n2<em>q</em> + 4 = 100\n(b) Work out the value of <em>q</em>.","answer":"(a) 53&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) <em>q</em> = 48","markscheme":""},
{"qimg":{"src":"2016-P2-Q13","w":1074,"h":987},"n":"13","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Ratio and proportion","subtopic":"Proportion problems","marks":2,"ref":"6R1","intro":"A stack of 20 identical boxes is 140 cm tall.\nStefan takes three boxes off the top.\n(Not actual size.)","text":"How tall is the stack now?","answer":"Award TWO marks for the correct answer of 119","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 140 ÷ 20 = 7\n3 × 7 = 21\n140 – 21\nOR\n• 140 ÷ 20 = 7\n20 – 3 = 17\n17 × 7\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2016-P2-Q14","w":1069,"h":191},"n":"14","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Multiples","marks":1,"ref":"6C5","text":"Write all the common multiples of 3 and 8 that are less than 50","answer":"24 and 48","markscheme":"Numbers may be given in either order."},
{"qimg":{"src":"2016-P2-Q15","w":1074,"h":1180},"n":"15","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Reading scales","marks":2,"ref":"5M5","intro":"This thermometer shows temperatures in both °C and °F.\n(Marked points: 40 °C = 104 °F, 30 °C = 86 °F, 20 °C = 68 °F, 10 °C = 50 °F, 0 °C = 32 °F and −10 °C = 14 °F.)","text":"Work out what 25 °C is in °F.","answer":"Award TWO marks for the correct answer of 77 °F","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 86 − 68 = 18\n18 ÷ 2 = 9\n9 + 68\nOR\n• 86 − 68 = 18\n18 ÷ 2 = 9\n86 − 9\nOR\n• 86 + 68 = 154\n154 ÷ 2\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2016-P2-Q16","w":1069,"h":450},"n":"16","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Number and place value","subtopic":"Place value","marks":2,"ref":"6N2","text":"(a) Write the number that is five less than ten million.\n(b) Write the number that is one hundred thousand less than six million.","answer":"(a) 9,999,995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 5,900,000","markscheme":""},
{"qimg":{"src":"2016-P2-Q17","w":1070,"h":763},"n":"17","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Properties of shapes","subtopic":"Angles","marks":2,"ref":"6G4b, 6G4a","intro":"(Diagram, not to scale: two straight lines cross. The angle on the left of the crossing point is 160°. Angle <em>a</em> is on the right of the crossing point, inside a shape with two right angles. Angle <em>b</em> is at the far vertex of that shape.)","text":"Calculate the size of angles <em>a</em> and <em>b</em> in this diagram.","answer":"(a) <em>a</em> = 160°&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) <em>b</em> = 20°","markscheme":"17b: If the answers to a and b are incorrect, award ONE mark if a + b = 180° unless b is between 33° and 37° inclusive, or 90°"},
{"qimg":{"src":"2016-P2-Q18","w":1070,"h":208},"n":"18","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Missing number problems","marks":1,"ref":"6C8","text":"Write the missing number.\n70 ÷ ☐ = 3.5","answer":"20","markscheme":""},
{"qimg":{"src":"2016-P2-Q19","w":1074,"h":996},"n":"19","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Money problems","marks":3,"ref":"6C8","intro":"Miss Mills is making jam to sell at the school fair.\nStrawberries cost £7.50 per kg.\nSugar costs 79p per kg.\n10 glass jars cost £6.90\nShe uses 12 kg of strawberries and 10 kg of sugar to make 20 jars full of jam.","text":"Calculate the total cost to make 20 jars full of jam.","answer":"Award THREE marks for the correct answer of £111.70","markscheme":"If the answer is incorrect, award TWO marks for:\n• sight of £90 AND £7.90 AND £13.80 as all multiplication steps completed correctly\nOR\n• evidence of an appropriate complete method with no more than one arithmetic error, e.g.\n[[img:2016-P2-Q19-example:372]]\nAward ONE mark for evidence of an appropriate complete method.\nAdditional guidance:\nAccept for TWO marks, sight of 9,000p AND 790p AND 1,380p as all multiplication steps completed correctly.\nAnswer need not be obtained for the award of ONE mark.\nA misread of a number may affect the award of marks. No marks are awarded if there is more than one misread or if the mathematics is simplified.\nTWO marks will be awarded if an appropriate complete method with the misread number is followed through correctly.\nONE mark will be awarded for:\n• all multiplication steps completed correctly with the misread number\nOR\n• evidence of an appropriate complete method with the misread number followed through correctly with no more than one arithmetic error."},
{"qimg":{"src":"2016-P2-Q20","w":1070,"h":1129},"n":"20","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Position and direction","subtopic":"Reflection","marks":1,"ref":"6P2","intro":"Here are two triangles drawn on coordinate axes.\nTriangle A has vertices (−10, 40), (20, 30) and (10, 10).\nTriangle B is a reflection of triangle A in the <em>x</em>-axis.\nTwo of the new vertices of triangle B are (10, −10) and (20, −30).","text":"What are the coordinates of the third vertex of triangle B?","answer":"(−10, −40)","markscheme":""},
{"qimg":{"src":"2016-P3-Q1","w":1074,"h":302},"n":"1","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Number sequences","marks":2,"ref":"3C1","intro":"The numbers in this sequence increase by 14 each time.","text":"Write the missing numbers.\n☐   82   96   ☐   124   138   ☐","answer":"Award TWO marks for numbers in order as shown:\n<strong>68</strong>&nbsp;&nbsp;&nbsp;<span style=\"color:#9a9a9a\">82</span>&nbsp;&nbsp;&nbsp;<span style=\"color:#9a9a9a\">96</span>&nbsp;&nbsp;&nbsp;<strong>110</strong>&nbsp;&nbsp;&nbsp;<span style=\"color:#9a9a9a\">124</span>&nbsp;&nbsp;&nbsp;<span style=\"color:#9a9a9a\">138</span>&nbsp;&nbsp;&nbsp;<strong>152</strong>","markscheme":"If the answer is incorrect, award ONE mark for two numbers correct."},
{"qimg":{"src":"2016-P3-Q2","w":1070,"h":866},"n":"2","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Number and place value","subtopic":"Negative numbers","marks":2,"ref":"6N5","intro":"This table shows the temperature at 9am on three days in January.\n1st January: +5 °C\n8th January: −4 °C\n15th January: +1 °C","text":"(a) What is the difference between the temperature on 1st January and the temperature on 8th January?\nOn 22nd January the temperature was 7 degrees lower than on 15th January.\n(b) What was the temperature on 22nd January?","answer":"(a) 9 °C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) −6 °C","markscheme":"2a: Do not accept −9 or 9−\n2b: Do not accept 6−"},
{"qimg":{"src":"2016-P3-Q3","w":1069,"h":811},"n":"3","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Telling the time","marks":1,"ref":"4M4b","intro":"A clock shows this time twice a day.\n(An analogue clock shows quarter to three: the hour hand is just before the 3 and the minute hand points to the 9.)","text":"Tick the two digital clocks that show this time.\n03:45   02:45   09:45\n21:45   14:45","answer":"Both clocks ticked, as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. clocks circled or underlined.","ansImg":{"src":"2016-P3-Q3-clocks","w":416,"h":244}},
{"qimg":{"src":"2016-P3-Q4","w":1070,"h":902},"n":"4","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Algebra","subtopic":"Finding unknown values","marks":2,"ref":"6A2","intro":"Each shape stands for a number.\n(Diagram: a column of three triangles has a total of 96. A row made of a triangle, a circle, a circle and a triangle has a total of 100. One triangle is in both the column and the row.)","text":"Work out the value of each shape.\n(a) triangle = ☐\n(b) circle = ☐","answer":"","markscheme":"If the answers to ● and ▲ are incorrect, award ONE mark if ▲ + ● = 50 unless ● = 25","ansImg":{"src":"2016-P3-Q4-shapes","w":200,"h":92}},
{"qimg":{"src":"2016-P3-Q5","w":1069,"h":353},"n":"5","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Ordering decimals","marks":1,"ref":"5F8","text":"Write these numbers in order, starting with the smallest.\n0.78   0.607   5.6   0.098   4.003","answer":"Numbers in order, as shown:","markscheme":"","ansImg":{"src":"2016-P3-Q5-boxes","w":460,"h":60}},
{"qimg":{"src":"2016-P3-Q6","w":1074,"h":642},"n":"6","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Fraction and decimal problems","marks":2,"ref":"4F10b","intro":"Jacob cuts 4 metres of ribbon into three pieces.\nThe length of the first piece is 1.28 metres.\nThe length of the second piece is 1.65 metres.","text":"Work out the length of the third piece.","answer":"Award TWO marks for the correct answer of 1.07","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 1.28 + 1.65 = 2.93\n4 − 2.93\nOR\n• 4 − 1.28 = 2.72\n2.72 − 1.65\nOR\n• 4 − 1.65 = 2.35\n2.35 − 1.28\nAdditional guidance:\nAccept for ONE mark an answer of 107 metres as evidence of an appropriate method.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2016-P3-Q7","w":1069,"h":1003},"n":"7","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Properties of shapes","subtopic":"Angles","marks":2,"ref":"4G4","intro":"Here are five angles, labelled <em>a</em>, <em>b</em>, <em>c</em>, <em>d</em> and <em>e</em>, marked on a grid of squares.","text":"(a) Write the letters of the angles that are obtuse.\n(b) Write the letters of the angles that are acute.","answer":"(a) <em>c</em> and <em>e</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) <em>a</em> and <em>d</em>","markscheme":"7a: Letters may be given in either order.\n7b: Letters may be given in either order."},
{"qimg":{"src":"2016-P3-Q8","w":1074,"h":1008},"n":"8","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Money problems","marks":2,"ref":"6C8","intro":"Olivia buys three packets of nuts.\nShe pays with a £2 coin.\nThis is her change: 50p, 20p, 10p, 10p and 5p.","text":"What is the cost of one packet of nuts?","answer":"Award TWO marks for the correct answer of 35p OR £0.35","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 50p + 20p + 10p + 10p + 5p = 95p\n£2.00 − 95p = £1.05\n£1.05 ÷ 3\nAdditional guidance:\nAccept for ONE mark an answer of £35 OR £35p OR 0.35p as evidence of an appropriate method.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2016-P3-Q9","w":1069,"h":903},"n":"9","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Statistics","subtopic":"Timetables","marks":2,"ref":"5S1","intro":"Here is part of the bus timetable from Riverdale to Mott Haven.\nRiverdale: 10:02, 10:12, 10:31, 10:48\nKingsbridge: 10:11, 10:21, 10:38, 10:55\nFordham: 10:28, 10:38, 10:54, 11:11\nTremont: 10:36, 10:44, 11:00, 11:17\nMott Haven: 10:53, 11:01, 11:17, 11:34","text":"(a) How many minutes does it take the 10:31 bus from Riverdale to reach Mott Haven?\nMr Evans is at Fordham at 10:30\n(b) What is the earliest time he can reach Tremont on the bus?","answer":"(a) 46 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 10:44","markscheme":"9a: The answer is a time interval.\n9b: The answer is a specific time."},
{"qimg":{"src":"2016-P3-Q10","w":1070,"h":1251},"n":"10","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Volume","marks":1,"ref":"5M8","intro":"Emma makes a cuboid using 12 cubes.\n(Five cuboids, A to E, are also shown.)","text":"Write the letter of the cuboid that has a different volume from Emma's cuboid.","answer":"C","markscheme":"Accept 18"},
{"qimg":{"src":"2016-P3-Q11","w":1074,"h":808},"n":"11","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Written multiplication","marks":2,"ref":"6C7a","intro":"A toy shop orders 11 boxes of marbles.\nEach box contains 6 bags of marbles.\nEach bag contains 45 marbles.","text":"How many marbles does the shop order in total?","answer":"Award TWO marks for the correct answer of 2,970","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method with no more than one arithmetic error, e.g.\n• 11 × 6 = 66\n66 × 45\nAdditional guidance:\nDo not accept sight of a correct multiplication only, e.g. 11 × 6 × 45, for ONE mark.\nMisreads are not allowed."},
{"qimg":{"src":"2016-P3-Q12","w":1070,"h":1146},"n":"12","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Position and direction","subtopic":"Translation","marks":1,"ref":"4P2","intro":"A triangle is translated from position A to position B.","text":"Complete the sentence.\nThe triangle has moved ☐ squares to the right and ☐ squares down.","answer":"","markscheme":"","ansImg":{"src":"2016-P3-Q12-moved","w":468,"h":80}},
{"qimg":{"src":"2016-P3-Q13","w":1074,"h":676},"n":"13","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Fraction and decimal problems","marks":2,"ref":"5F10","intro":"Lara chooses a number less than 20\nShe divides it by 2 and then adds 6\nShe then divides this result by 3\nHer answer is 4.5","text":"What was the number she started with?","answer":"Award TWO marks for the correct answer of 15","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 4.5 × 3 = 13.5\n13.5 − 6 = 7.5\n7.5 × 2\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark.\nMisreads are not allowed."},
{"qimg":{"src":"2016-P3-Q14","w":1070,"h":467},"n":"14","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Converting units","marks":2,"ref":"6M5","text":"Complete each sentence using a number from the list below.\n120   240   600   1,440   3,600   6,000\n(a) There are ☐ seconds in an hour.\n(b) There are ☐ minutes in a day.","answer":"(a) 3,600&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 1,440","markscheme":"14a: Misreads and transcription errors are not allowed."},
{"qimg":{"src":"2016-P3-Q15","w":1074,"h":513},"n":"15","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Number and place value","subtopic":"Rounding","marks":2,"ref":"5N4","text":"Complete this table by rounding the numbers to the nearest hundred.\n20,906 rounds to ☐\n2,090.6 rounds to ☐\n209.06 rounds to ☐","answer":"Award TWO marks for three boxes completed correctly as shown:","markscheme":"If the answer is incorrect, award ONE mark for two boxes correct.","ansImg":{"src":"2016-P3-Q15-table","w":430,"h":224}},
{"qimg":{"src":"2016-P3-Q16","w":1074,"h":877},"n":"16","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Ratio and proportion","subtopic":"Proportion problems","marks":2,"ref":"6R4","intro":"6 small bricks have the same mass as 5 large bricks.\nThe mass of one small brick is 2.5 kg.","text":"What is the mass of one large brick?","answer":"Award TWO marks for the correct answer of 3","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 2.5 × 6 = 15\n15 ÷ 5\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark.\nMisreads are not allowed."},
{"qimg":{"src":"2016-P3-Q17","w":1070,"h":902},"n":"17","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Measurement","subtopic":"Area","marks":1,"ref":"6M7b","intro":"Here are five triangles, A to E, on a square grid.\nFour of the triangles have the same area.","text":"Which triangle has a different area?","answer":"A","markscheme":"Accept alternative unambiguous positive indications of the correct triangle, e.g. 2 1/2 or 2.5"},
{"qimg":{"src":"2016-P3-Q18","w":1074,"h":1200},"n":"18","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Properties of shapes","subtopic":"Quadrilaterals","marks":2,"ref":"6G2a","intro":"The diagonals of this quadrilateral cross at right angles.\n(A rhombus is shown with its diagonals drawn.)","text":"Tick all the quadrilaterals that have diagonals which cross at right angles.\n(A kite, a rectangle, a square and a parallelogram are shown.)","answer":"Award TWO marks for both kite AND square ticked as shown.","markscheme":"If the answer is incorrect, award ONE mark for:\n• kite AND square and not more than one incorrect shape ticked\nOR\n• one correct shape only ticked.\nAdditional guidance:\nAccept alternative unambiguous positive indications, e.g. shapes circled.","ansImg":{"src":"2016-P3-Q18-answer","w":332,"h":296}},
{"qimg":{"src":"2016-P3-Q19","w":1070,"h":197},"n":"19","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Number and place value","subtopic":"Place value","marks":1,"ref":"6N6","text":"Circle two numbers that multiply together to equal 1 million.\n200   2,000   5,000   50,000","answer":"Numbers circled as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. numbers ticked or underlined.","ansImg":{"src":"2016-P3-Q19-circled","w":444,"h":52}},
{"qimg":{"src":"2016-P3-Q20","w":1074,"h":674},"n":"20","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Fractions, decimals and percentages","subtopic":"Fraction and decimal problems","marks":2,"ref":"5F10","intro":"Lara had some money.\nShe spent £1.25 on a drink.\nShe spent £1.60 on a sandwich.\nShe has three-quarters of her money left.","text":"How much money did Lara have to start with?","answer":"Award TWO marks for the correct answer of £11.40","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• £1.25 + £1.60 = £2.85\n£2.85 × 4\nAdditional guidance:\nAccept for ONE mark an answer of £1,140 OR £1,140p OR £11.4 as evidence of an appropriate method.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2016-P3-Q21","w":1069,"h":569},"n":"21","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2016","strand":"Calculation","subtopic":"Explaining calculations","marks":1,"ref":"6C8","intro":"5,542 ÷ 17 = 326","text":"Explain how you can use this fact to find the answer to 18 × 326","answer":"Add 326 to 5,542, because 18 × 326 is one more lot of 326 than 17 × 326.\n5,542 + 326 = 5,868","markscheme":"An explanation that shows that 5,868 can be made by adding 326 to 17 × 326, e.g.\n• ‘5542 + 326 = 18 × 326’\n• ‘18 × 326 is 326 more than 5,542’\n• ‘Because this is the same as 17 × 326 = 5542 so add one more 326 to get the answer’\n• ‘You add 326 to 5,542 and your answer will be correct’\n• ‘Because you can add 326 to the answer of 17 × 326’\n• ‘5542 + 326’.\nAdditional guidance:\nDo not accept an explanation that simply calculates 326 × 18 = 5,868\nDo not accept vague or incomplete, or incorrect explanations, e.g.\n• ‘You could add another 326’\n• ‘The difference between 17 and 18 is 1 so you add 326 and that is one more’\n• ‘Because if you turn the question around you would see that 17 × 326 = 5542 so all you need to do is times the number one more time'\n• ‘5,542 + 326 because it is one more’.\n• 5868 − 326 = 5542"},
{"qimg":{"src":"2017-P1-Q1","w":1039,"h":439},"n":"1","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Number and place value","subtopic":"Place value","marks":1,"ref":"4N2b","text":"40 + 1,000 =","answer":"1,040","markscheme":""},
{"qimg":{"src":"2017-P1-Q2","w":1039,"h":441},"n":"2","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"4C2","text":"707 + 1,818 =","answer":"2,525","markscheme":""},
{"qimg":{"src":"2017-P1-Q3","w":1039,"h":439},"n":"3","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"4F4","text":"4/6 + 3/6 =","answer":"1 1/6 or 7/6","markscheme":"Accept equivalent mixed numbers, fractions or an exact decimal equivalent, e.g. 1.16̅ (accept any unambiguous indication of the recurring digit).\nDo not accept rounded or truncated decimals."},
{"qimg":{"src":"2017-P1-Q4","w":1038,"h":439},"n":"4","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"4C6b","text":"505 ÷ 1 =","answer":"505","markscheme":""},
{"qimg":{"src":"2017-P1-Q5","w":1038,"h":441},"n":"5","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Mental addition and subtraction","marks":1,"ref":"3C1","text":"345 − 60 =","answer":"285","markscheme":""},
{"qimg":{"src":"2017-P1-Q6","w":1038,"h":439},"n":"6","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"5F8","text":"2.7 + 3.014 =","answer":"5.714","markscheme":""},
{"qimg":{"src":"2017-P1-Q7","w":1039,"h":439},"n":"7","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"4C2","text":"☐ = 4,500 + 600","answer":"5,100","markscheme":""},
{"qimg":{"src":"2017-P1-Q8","w":1039,"h":441},"n":"8","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written multiplication","marks":1,"ref":"3C7","text":"8 × 33 =","answer":"264","markscheme":""},
{"qimg":{"src":"2017-P1-Q9","w":1039,"h":439},"n":"9","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"4C6a","text":"72 ÷ 9 =","answer":"8","markscheme":""},
{"qimg":{"src":"2017-P1-Q10","w":1038,"h":439},"n":"10","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written multiplication","marks":1,"ref":"4C7","text":"167 × 4 =","answer":"668","markscheme":""},
{"qimg":{"src":"2017-P1-Q11","w":1038,"h":441},"n":"11","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written addition and subtraction","marks":1,"ref":"4C2","text":"4,912 − 824 =","answer":"4,088","markscheme":""},
{"qimg":{"src":"2017-P1-Q12","w":1038,"h":439},"n":"12","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"4F4","text":"62/100 − 38/100 =","answer":"6/25","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 24/100 or 0.24"},
{"qimg":{"src":"2017-P1-Q13","w":1039,"h":439},"n":"13","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Number and place value","subtopic":"Place value","marks":1,"ref":"3N2b","text":"☐ − 100 = 1,059","answer":"1,159","markscheme":""},
{"qimg":{"src":"2017-P1-Q14","w":1039,"h":441},"n":"14","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Order of operations","marks":1,"ref":"6C9","text":"50 + (36 ÷ 6) =","answer":"56","markscheme":""},
{"qimg":{"src":"2017-P1-Q15","w":1039,"h":439},"n":"15","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing fractions","marks":1,"ref":"6F5a","text":"4/6 × 3/5 =","answer":"2/5","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 12/30 or 0.4"},
{"qimg":{"src":"2017-P1-Q16","w":1038,"h":439},"n":"16","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"5C6a","text":"30 × 40 =","answer":"1,200","markscheme":""},
{"qimg":{"src":"2017-P1-Q17","w":1038,"h":441},"n":"17","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written division","marks":1,"ref":"5C7b","text":"581 ÷ 7 =","answer":"83","markscheme":""},
{"qimg":{"src":"2017-P1-Q18","w":1038,"h":439},"n":"18","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing decimals","marks":1,"ref":"6F9a","text":"0.04 ÷ 10 =","answer":"0.004","markscheme":""},
{"qimg":{"src":"2017-P1-Q19","w":1039,"h":439},"n":"19","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Multiplying and dividing by 10, 100 and 1000","marks":1,"ref":"5C6b","text":"2,345 × 1,000 =","answer":"2,345,000","markscheme":""},
{"qimg":{"src":"2017-P1-Q20","w":1039,"h":479},"n":"20","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written division","marks":2,"ref":"6C7b","text":"17,714 ÷ 17 =\n(Use long division and show your method.)","answer":"Award TWO marks for the correct answer of 42","markscheme":"If the answer is incorrect, award ONE mark for a formal method of division with no more than ONE arithmetic error, i.e.\n• long division algorithm, e.g.\n[[img:2017-P1-Q20-a:168]]\nOR\n[[img:2017-P1-Q20-b:168]]\n• short division algorithm, e.g.\n[[img:2017-P1-Q20-c:200]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nShort division methods must be supported by evidence of appropriate carrying figures to indicate the use of a division algorithm, and be a complete method. The carrying figure must be less than the divisor."},
{"qimg":{"src":"2017-P1-Q21","w":1038,"h":439},"n":"21","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"4F8","text":"9 − 3.45 =","answer":"5.55","markscheme":""},
{"qimg":{"src":"2017-P1-Q22","w":1038,"h":479},"n":"22","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written multiplication","marks":2,"ref":"6C7a","text":"4781 × 23 =\n(Use long multiplication and show your method.)","answer":"Award TWO marks for the correct answer of 109,963","markscheme":"If the answer is incorrect, award ONE mark for a formal method of long multiplication with no more than ONE arithmetic error, e.g.\n• [[img:2017-P1-Q22-a:168]]\nOR\n• [[img:2017-P1-Q22-b:168]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nDo not award any marks if the error is in the place value, e.g. the omission of the zero when multiplying by tens:\n[[img:2017-P1-Q22-c:256]]"},
{"qimg":{"src":"2017-P1-Q23","w":1039,"h":439},"n":"23","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"5F4","text":"3/4 − 3/8 =","answer":"3/8","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 0.375"},
{"qimg":{"src":"2017-P1-Q24","w":1039,"h":479},"n":"24","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written multiplication","marks":2,"ref":"6C7a","text":"418 × 46 =\n(Use long multiplication and show your method.)","answer":"Award TWO marks for the correct answer of 19,228","markscheme":"If the answer is incorrect, award ONE mark for a formal method of long multiplication with no more than ONE arithmetic error, e.g.\n• [[img:2017-P1-Q24-a:168]]\nOR\n• [[img:2017-P1-Q24-b:168]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nDo not award any marks if the error is in the place value, e.g. the omission of the zero when multiplying by tens:\n[[img:2017-P1-Q24-c:256]]"},
{"qimg":{"src":"2017-P1-Q25","w":1038,"h":439},"n":"25","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting decimals","marks":1,"ref":"5F8","text":"37.8 − 14.671 =","answer":"23.129","markscheme":""},
{"qimg":{"src":"2017-P1-Q26","w":1038,"h":441},"n":"26","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"6F4","text":"1/4 + 1/5 + 1/10 =","answer":"11/20","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 0.55"},
{"qimg":{"src":"2017-P1-Q27","w":1038,"h":439},"n":"27","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing fractions","marks":1,"ref":"6F5b","text":"4/5 ÷ 4 =","answer":"1/5","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 4/20 or 0.2"},
{"qimg":{"src":"2017-P1-Q28","w":1039,"h":439},"n":"28","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing fractions","marks":1,"ref":"6F5b","text":"5/8 ÷ 2 =","answer":"5/16","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 0.3125"},
{"qimg":{"src":"2017-P1-Q29","w":1039,"h":441},"n":"29","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Percentages of amounts","marks":1,"ref":"6R2","text":"45% of 460 =","answer":"207","markscheme":"Do not accept 207%"},
{"qimg":{"src":"2017-P1-Q30","w":1039,"h":439},"n":"30","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"6F4","text":"2 1/3 + 5/6 =","answer":"3 1/6 or 19/6","markscheme":"Accept equivalent mixed numbers, fractions or an exact decimal equivalent, e.g. 3.16̅ (accept any unambiguous indication of the recurring digit).\nDo not accept rounded or truncated decimals.\nDo not accept 2 7/6"},
{"qimg":{"src":"2017-P1-Q31","w":1038,"h":439},"n":"31","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Percentages of amounts","marks":1,"ref":"6R2","text":"7% of 500 =","answer":"35","markscheme":"Do not accept 35%"},
{"qimg":{"src":"2017-P1-Q32","w":1038,"h":441},"n":"32","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":1,"ref":"6F4","text":"2/6 − 1/8 =","answer":"5/24","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 10/48 or 0.2083̅ (accept any unambiguous indication of the recurring digit).\nDo not accept rounded or truncated decimals."},
{"qimg":{"src":"2017-P1-Q33","w":1039,"h":439},"n":"33","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing decimals","marks":1,"ref":"6F9b","text":"0.9 × 200 =","answer":"180","markscheme":""},
{"qimg":{"src":"2017-P1-Q34","w":1039,"h":441},"n":"34","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Percentages of amounts","marks":1,"ref":"6R2","text":"15% × 1,000 =","answer":"150","markscheme":"Do not accept 150%"},
{"qimg":{"src":"2017-P1-Q35","w":1038,"h":439},"n":"35","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Multiplying and dividing fractions","marks":1,"ref":"5F5","text":"1 1/2 × 57 =","answer":"85 1/2","markscheme":"Accept equivalent fractions or an exact decimal equivalent e.g. 171/2 or 85.5"},
{"qimg":{"src":"2017-P1-Q36","w":1038,"h":479},"n":"36","paperNum":"1","paper":"Paper 1 (arithmetic)","sitting":"2017","strand":"Calculation","subtopic":"Written division","marks":2,"ref":"6C7b","text":"59) 2242 ÷ 59 =\n(Use long division and show your method.)","answer":"Award TWO marks for the correct answer of 38","markscheme":"If the answer is incorrect, award ONE mark for a formal method of division with no more than ONE arithmetic error, i.e.\n• long division algorithm, e.g.\n[[img:2017-P1-Q36-a:168]]\nOR\n[[img:2017-P1-Q36-b:168]]\n• short division algorithm, e.g.\n[[img:2017-P1-Q36-c:200]]\nAdditional guidance:\nWorking must be carried through to reach a final answer for the award of ONE mark.\nShort division methods must be supported by evidence of appropriate carrying figures to indicate the use of a division algorithm, and be a complete method. The carrying figure must be less than the divisor."},
{"qimg":{"src":"2017-P2-Q1","w":1106,"h":1268},"n":"1","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Statistics","subtopic":"Bar charts","marks":2,"intro":"William asks the children in Year 2 and Year 6 if they walk to school.\nThis graph shows the results.\n(Bar chart: 'walk to school' and 'don't walk to school', Year 2 and Year 6.)","ref":"4S2","text":"(a) Altogether, how many children don't walk to school?\n(b) How many more Year 6 children than Year 2 children walk to school?","answer":"(a) 200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 50","markscheme":""},
{"qimg":{"src":"2017-P2-Q2","w":1106,"h":269},"n":"2","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Multiplying and dividing by 10, 100 and 1000","marks":1,"ref":"5C6b","text":"Circle the number that is 10 times greater than nine hundred and seven.\n9,700   907   9,007   970   9,070","answer":"The correct number circled as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. number ticked.","ansImg":{"src":"2017-P2-Q2-circled","w":585,"h":75}},
{"qimg":{"src":"2017-P2-Q3","w":1106,"h":451},"n":"3","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Multiplication and division facts","marks":1,"ref":"4C6a","text":"Write the missing numbers to make this multiplication grid correct.","answer":"Three boxes completed correctly as shown:","markscheme":"","ansImg":{"src":"2017-P2-Q3-grid","w":288,"h":282}},
{"qimg":{"src":"2017-P2-Q4","w":1106,"h":912},"n":"4","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Statistics","subtopic":"Tables","marks":2,"intro":"This table shows the heights of three mountains.\nMount Everest: 8,848 m\nMount Kilimanjaro: 5,895 m\nBen Nevis: 1,344 m","ref":"4C4/4S2","text":"How much higher is Mount Everest than the combined height of the other two mountains?","answer":"Award TWO marks for the correct answer of 1,609","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 5,895 + 1,344 = 7,239\n8,848 – 7,239\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2017-P2-Q5","w":1106,"h":561},"n":"5","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Number and place value","subtopic":"Place value","marks":2,"ref":"4N2b","text":"Complete this table with the missing numbers.\nOne row has been done for you.","answer":"Award TWO marks for three boxes completed correctly as shown:","markscheme":"If the answer is incorrect, award ONE mark for two boxes completed correctly.","ansImg":{"src":"2017-P2-Q5-table","w":465,"h":339}},
{"qimg":{"src":"2017-P2-Q6","w":1106,"h":465},"n":"6","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Ordering decimals","marks":1,"ref":"5F8","text":"Write these numbers in order of size, starting with the smallest.\n1.9   0.96   1.253   0.328","answer":"Numbers in order as shown:","markscheme":"","ansImg":{"src":"2017-P2-Q6-order","w":621,"h":69}},
{"qimg":{"src":"2017-P2-Q7","w":1106,"h":559},"n":"7","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Converting units","marks":2,"ref":"4M4c","text":"Write the missing numbers.\n60 months = ☐ years\n72 hours = ☐ days\n84 days = ☐ weeks","answer":"Award TWO marks for three boxes completed correctly as shown:","markscheme":"If the answer is incorrect, award ONE mark for two boxes completed correctly.","ansImg":{"src":"2017-P2-Q7-boxes","w":525,"h":342}},
{"qimg":{"src":"2017-P2-Q8","w":1106,"h":701},"n":"8","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Written addition and subtraction","marks":2,"intro":"At the start of June, there were 1,793 toy cars in the shop.\nDuring June,\n• 8,728 more toy cars were delivered\n• 9,473 toy cars were sold.","ref":"5C4","text":"How many toy cars were left in the shop at the end of June?","answer":"Award TWO marks for the correct answer of 1,048","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 1,793 + 8,728 = 10,521\n10,521 – 9,473\nOR\n• 9,473 – 8,728 = 745\n1,793 – 745\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2017-P2-Q9","w":1106,"h":780},"n":"9","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Fractions of shapes","marks":1,"ref":"4F2","text":"Tick two shapes that have 3/4 shaded.","answer":"Both shapes ticked as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. shapes circled.","ansImg":{"src":"2017-P2-Q9-shapes","w":570,"h":492}},
{"qimg":{"src":"2017-P2-Q10","w":1106,"h":536},"n":"10","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Number and place value","subtopic":"Rounding","marks":2,"ref":"5N4","text":"Round 84,516\nto the nearest 10\nto the nearest 100\nto the nearest 1,000","answer":"Award TWO marks for three boxes completed correctly as shown:","markscheme":"If the answer is incorrect, award ONE mark for two boxes completed correctly.","ansImg":{"src":"2017-P2-Q10-table","w":570,"h":291}},
{"qimg":{"src":"2017-P2-Q11","w":1106,"h":907},"n":"11","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Algebra","subtopic":"Finding unknown values","marks":2,"intro":"Here is a rule for the time it takes to cook a chicken.\nCooking time = 20 minutes plus an extra 40 minutes for each kilogram","ref":"6A2","text":"(a) How many minutes will it take to cook a 3 kg chicken?\n(b) What is the mass of a chicken that takes 100 minutes to cook?","answer":"(a) 140&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 2","markscheme":"11a: The answer is a time interval."},
{"qimg":{"src":"2017-P2-Q12","w":1106,"h":804},"n":"12","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Properties of shapes","subtopic":"3-D shapes","marks":2,"intro":"Here are diagrams of some 3-D shapes.","ref":"6G2b","text":"Tick each shape that has the same number of faces as vertices.\n(Cube, square-based pyramid, triangular prism, triangular-based pyramid.)","answer":"Award TWO marks for both pyramids ticked as shown:","markscheme":"If the answer is incorrect, award ONE mark for:\n• the two pyramids and not more than one incorrect shape ticked\nOR\n• only one correct shape ticked and no incorrect shape ticked.\nAdditional guidance:\nAccept alternative unambiguous positive indications, e.g. Y.","ansImg":{"src":"2017-P2-Q12-shapes","w":606,"h":663}},
{"qimg":{"src":"2017-P2-Q13","w":1106,"h":1111},"n":"13","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Money problems","marks":2,"intro":"Ally and Jack buy some stickers.\nPack of 12 stickers: £10.49\n12 stickers, 99p each","ref":"5M9a","text":"Ally buys a pack of 12 stickers for £10.49\nJack buys 12 single stickers for 99p each.\nHow much more does Jack pay than Ally?","answer":"Award TWO marks for the correct answer of £1.39","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 12 × 99p = £11.88\n£11.88 – £10.49\nAdditional guidance:\nAccept for ONE mark an answer of £139 OR £139p as evidence of an appropriate method.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2017-P2-Q14","w":1106,"h":393},"n":"14","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Proportion problems","marks":1,"intro":"Amina planted some seeds.\nFor every 3 seeds Amina planted, only 2 seeds grew.\nAltogether, 12 seeds grew.","ref":"6R4","text":"How many seeds did Amina plant?","answer":"18","markscheme":"Accept 18:12 OR 12:18"},
{"qimg":{"src":"2017-P2-Q15","w":1106,"h":542},"n":"15","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Number and place value","subtopic":"Roman numerals","marks":1,"intro":"At the end of a film, the year is given in Roman numerals.\nMMVI","ref":"5N3b","text":"Write the year MMVI in figures.","answer":"2006","markscheme":"Do not accept 'two thousand and six' in words."},
{"qimg":{"src":"2017-P2-Q16","w":1106,"h":909},"n":"16","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Properties of shapes","subtopic":"Angles","marks":1,"intro":"Layla completes one-and-a-half somersaults in a dive.","ref":"5G4b","text":"How many degrees does Layla turn through in her dive?","answer":"540","markscheme":""},
{"qimg":{"src":"2017-P2-Q17","w":1106,"h":1217},"n":"17","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Position and direction","subtopic":"Coordinates","marks":1,"intro":"The vertices of a quadrilateral have these coordinates.\n(1, 5)   (5, 4)   (1, −3)   (−3, 4)\nOne side of the quadrilateral has been drawn on the grid.","ref":"6P3","text":"Complete the quadrilateral.\nUse a ruler.","answer":"Quadrilateral completed as shown:","markscheme":"Accept slight inaccuracies in drawing.","ansImg":{"src":"2017-P2-Q17-graph","w":630,"h":570}},
{"qimg":{"src":"2017-P2-Q18","w":1106,"h":506},"n":"18","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Percentages of amounts","marks":1,"intro":"A cat sleeps for 12 hours each day.\n50% of its life is spent asleep.","ref":"6R2","text":"Write the missing percentage.\nA koala sleeps for 18 hours each day.\n☐% of its life is spent asleep.","answer":"75","markscheme":""},
{"qimg":{"src":"2017-P2-Q19","w":1106,"h":688},"n":"19","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Money problems","marks":2,"intro":"Amina posts three large letters.\nThe postage costs the same for each letter.\nShe pays with a £20 note.\nHer change is £14.96","ref":"6C8/5M9a","text":"What is the cost of posting one letter?","answer":"Award TWO marks for the correct answer of £1.68","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 20 – 14.96 = 5.04\n5.04 ÷ 3\nAdditional guidance:\nAccept for ONE mark an answer of £168 OR £168p as evidence of an appropriate method.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2017-P2-Q20","w":1106,"h":1052},"n":"20","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Fraction and decimal equivalents","marks":1,"intro":"Adam says,\n'0.25 is smaller than 2/5'","ref":"6F11","text":"Explain why he is correct.","answer":"An explanation showing that 0.25 is less than 2/5, e.g.\n• 2/5 is 0.4 > 0.25\n• 0.25 is 5/20 < 8/20\n• 0.25 is 25% and 2/5 is 40% and 25% is smaller than 40%\n• 0.25 is a quarter. You need 8 quarters to make 2, but only 5 lots of 2/5 to make 2\n• 2/5 = 0.4\n• 1/4 is 1/4 smaller than a half, but 2/5 is only 1/10 smaller, so 1/4 is smaller than 2/5","markscheme":"Do not accept vague, incomplete or incorrect explanations, e.g.\n• Because 1/4 is bigger than 2/5\n• Because 1/4 comes first on a number line\n• Because 0.25 is 1/4\nAccept 2.5/10 as an equivalent to 1/4 in an explanation when comparing to 4/10"},
{"qimg":{"src":"2017-P2-Q21","w":1106,"h":822},"n":"21","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Converting units","marks":2,"intro":"On a map, 1cm represents 20 km.\nThe distance between two cities is 250 km.","ref":"5M9b/6R3","text":"On the map, what is the distance between the two cities?","answer":"Award TWO marks for the correct answer of 12.5","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 250 ÷ 20\nOR\n• 20 km is 1cm\n100 km is 5 cm\n50 km is 2.5 cm\n5 cm + 5 cm + 2.5 cm\nAdditional guidance:\nDo not accept incorrect proportions in any step without evidence of the calculation performed."},
{"qimg":{"src":"2017-P2-Q22","w":1106,"h":711},"n":"22","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Proportion problems","marks":1,"intro":"Here are two similar right-angled triangles.","ref":"6R3","text":"Write the ratio of side a to side b.","answer":"1:4","markscheme":"Accept other equivalent ratios, e.g. 2:8 or 0.5:2\nDo not accept reversed ratios, e.g. 4:1 or 8:2"},
{"qimg":{"src":"2017-P2-Q23","w":1106,"h":1055},"n":"23","paperNum":"2","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Adding and subtracting fractions","marks":2,"intro":"In this circle, 1/4 and 1/6 are shaded.","ref":"6F4","text":"What fraction of the whole circle is not shaded?","answer":"Award TWO marks for the correct answer of 7/12","markscheme":"Accept equivalent fractions or an exact decimal equivalent, e.g. 0.583̅\nIf the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 1/4 + 1/6 =\n3/12 + 2/12 = 5/12\n1 – 5/12\nOR\n• 1/4 + 1/6 + 1/6\nOR\n• 1 – 1/4 – 1/6\nOR\n• [[img:2017-P2-Q23-pie1:180]]\n3/12 + 4/12\nOR\n• [[img:2017-P2-Q23-pie2:180]]\n90° + 60° = 150°\n1 – 150/360\nAdditional guidance:\nAccept for ONE mark an answer between 0.58 and 0.59 inclusive.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2017-P3-Q1","w":1106,"h":206},"n":"1","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Multiplying and dividing by 10, 100 and 1000","marks":1,"ref":"5C6b","text":"Write the missing number to make this division correct.\n75 ÷ ☐ = 7.5","answer":"10","markscheme":""},
{"qimg":{"src":"2017-P3-Q2","w":1106,"h":389},"n":"2","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Missing number problems","marks":1,"intro":"A group of friends earns £80 by washing cars.\nThey share the money equally.\nThey get £16 each.","ref":"3C8","text":"How many friends are in the group?","answer":"5","markscheme":""},
{"qimg":{"src":"2017-P3-Q3","w":1106,"h":797},"n":"3","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Missing number problems","marks":1,"intro":"Chen uses these digit cards.\n5   6   9\nShe makes a 2-digit number and a 1-digit number.\nShe multiplies them together.\nHer answer is a multiple of 10","ref":"4C8","text":"What could Chen's multiplication be?","answer":"95 × 6 OR 96 × 5","markscheme":""},
{"qimg":{"src":"2017-P3-Q4","w":1106,"h":1303},"n":"4","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Number and place value","subtopic":"Negative numbers","marks":2,"intro":"This graph shows the temperature in °C from 2am to 3pm on a cold day.","ref":"6N5/6S1","text":"(a) How many degrees warmer was it at 3pm than at 3am?\nAt 6pm the temperature was 4 degrees lower than at 3pm.\n(b) What was the temperature at 6pm?","answer":"(a) 7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) −2","markscheme":"4a: Do not accept –7 or 7–\n4b: Do not accept 2–"},
{"qimg":{"src":"2017-P3-Q5","w":1106,"h":386},"n":"5","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Money problems","marks":1,"intro":"The children at Farmfield School are collecting money for charity.\nTheir target is to collect £360\nSo far they have collected £57.73","ref":"3M9a/4F10b","text":"How much more money do they need to reach their target?","answer":"£302.27","markscheme":""},
{"qimg":{"src":"2017-P3-Q6","w":1106,"h":806},"n":"6","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Statistics","subtopic":"Timetables","marks":1,"intro":"William wants to travel to Paris by train.\nHe needs to arrive in Paris by 5:30pm.","ref":"5S1","text":"Circle the latest time that William can leave London.","answer":"The correct time circled as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. 14:01 ticked or underlined.\nAccept 17:26 circled in addition to 14:01, provided no other time is circled.\nDo not accept only the arrival time 17:26 circled.","ansImg":{"src":"2017-P3-Q6-table","w":576,"h":597}},
{"qimg":{"src":"2017-P3-Q7","w":1106,"h":1093},"n":"7","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Position and direction","subtopic":"Translation","marks":1,"intro":"Here is a triangle drawn on a coordinate grid.\nThe triangle is translated 7 right and 5 up.","ref":"6P2","text":"Draw the triangle in its new position.","answer":"Triangle with vertices at (2,1) AND (2,4) AND (5,1) drawn on the grid as shown:","markscheme":"Accept slight inaccuracies in drawing.","ansImg":{"src":"2017-P3-Q7-graph","w":609,"h":600}},
{"qimg":{"src":"2017-P3-Q8","w":1106,"h":265},"n":"8","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Multiples","marks":2,"ref":"6C5","text":"Write three factors of 30 that are not factors of 15","answer":"Award TWO marks for any three of the following numbers written in any order:\n• 2\n• 6\n• 10\n• 30","markscheme":"If the answer is incorrect, award ONE mark for two numbers correct."},
{"qimg":{"src":"2017-P3-Q9","w":1106,"h":671},"n":"9","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Statistics","subtopic":"Timetables","marks":1,"intro":"Here is the morning timetable for Chen's class this week.\n(Table showing Maths, English, Science and Break slots, Monday to Friday.)","ref":"5S1/4S2","text":"What is the total number of hours for English on this timetable?","answer":"5","markscheme":"Do not accept 300 (minutes)."},
{"qimg":{"src":"2017-P3-Q10","w":1106,"h":738},"n":"10","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Converting units","marks":1,"intro":"A bottle contains 568 millilitres of milk.\nJack pours out half a litre.","ref":"4M5","text":"How much milk is left?","answer":"68 (ml) OR 0.068 (l)","markscheme":"Do not accept incorrect units, e.g. 68 l OR 0.068 ml."},
{"qimg":{"src":"2017-P3-Q11","w":1106,"h":298},"n":"11","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Properties of shapes","subtopic":"Circles","marks":1,"intro":"A bicycle wheel has a diameter of 64cm.","ref":"6G5","text":"What is the radius of the bicycle wheel?","answer":"32","markscheme":""},
{"qimg":{"src":"2017-P3-Q12","w":1106,"h":1281},"n":"12","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Explaining calculations","marks":1,"intro":"24 white balloons: 24 in a bag\n12 red balloons: 12 in a bag\nAdam buys 6 bags of white balloons.\nChen buys 3 bags of red balloons.\nAdam says,\n'I have four times as many balloons as Chen.'","ref":"4C8","text":"Explain why Adam is correct.","answer":"An explanation that shows Adam has four times as many balloons as Chen, e.g.\n• 24 × 6 is 4 times as many as 12 × 3\n• 144 is four times 36\n• 144 ÷ 4 = 36\n• 144 ÷ 36 = 4\n• 36 × 4 = 144\n• Adam buys twice as many bags of twice as many balloons, so it's doubled twice\n• 24 is double 12 and 6 is double 3, so it's doubled twice\n• Chen buys half the amount of bags and each bag has half the number of balloons, so he has 1/4 of the amount.","markscheme":"Do not accept vague or incomplete explanations, e.g.\n• Adam buys more bags and there are more balloons in each bag\n• Adam buys twice as many bags of twice as many balloons\n• 24 is double 12 and 6 is double 3."},
{"qimg":{"src":"2017-P3-Q13","w":1106,"h":954},"n":"13","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Properties of shapes","subtopic":"Angles","marks":1,"ref":"6G2a/4G4","text":"Circle the pentagon with exactly four acute angles.","answer":"The correct shape circled as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. shape ticked.","ansImg":{"src":"2017-P3-Q13-shapes","w":540,"h":705}},
{"qimg":{"src":"2017-P3-Q14","w":1106,"h":845},"n":"14","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Ratio and proportion","subtopic":"Proportion problems","marks":2,"intro":"3 pineapples cost the same as 2 mangoes.\nOne mango costs £1.35","ref":"6R1/5M9a","text":"How much does one pineapple cost?","answer":"Award TWO marks for the correct answer of £0.90","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• £1.35 × 2 = £2.70\n£2.70 ÷ 3\nAdditional guidance:\nAccept for ONE mark an answer of £90p OR £0.9 as evidence of an appropriate method.\nAnswer need not be obtained for the award of ONE mark."},
{"qimg":{"src":"2017-P3-Q15","w":1106,"h":346},"n":"15","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Properties of shapes","subtopic":"Parallel and perpendicular lines","marks":1,"ref":"3G2","text":"Look at the letters below.\nCircle the letter below that has both parallel and perpendicular lines.\nA   C   E   L   Z","answer":"The correct letter circled as shown:","markscheme":"Accept alternative unambiguous positive indications, e.g. letter ticked.","ansImg":{"src":"2017-P3-Q15-letters","w":675,"h":126}},
{"qimg":{"src":"2017-P3-Q16","w":1106,"h":923},"n":"16","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Missing number problems","marks":2,"intro":"There are 2,400 leaflets in a box.\nWilliam and Ally take 450 leaflets each.\nAdam and Chen share the rest of the leaflets equally.","ref":"5C8b","text":"How many leaflets does Adam get?","answer":"Award TWO marks for the correct answer of 750","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 450 × 2 = 900\n2,400 – 900 = 1,500\n1,500 ÷ 2"},
{"qimg":{"src":"2017-P3-Q17","w":1106,"h":1224},"n":"17","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Fractions, decimals and percentages","subtopic":"Fraction and decimal equivalents","marks":2,"ref":"6F11/6F3","text":"In each box, circle the number that is greater.\n1 1/2   1.2\n1 1/4   1.3\n1 5/100   1.4\n1 3/5   1.5","answer":"Award TWO marks for all four rows completed correctly as shown:","markscheme":"If the answer is incorrect, award ONE mark for three rows completed correctly.\nAdditional guidance:\nAccept alternative unambiguous positive indications of the correct numbers, e.g numbers ticked.","ansImg":{"src":"2017-P3-Q17-table","w":525,"h":765}},
{"qimg":{"src":"2017-P3-Q18","w":1106,"h":426},"n":"18","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":["Prime numbers","Square numbers"],"marks":1,"ref":"5C5c/5C5d","text":"A square number and a prime number have a total of 22\nWhat are the two numbers?\n☐ + ☐ = 22 (square number, prime number)","answer":"Both numbers correct as shown:","markscheme":"Numbers must be in the correct order.\nDo not accept:\n[[img:2017-P3-Q18-wrong:180]]","ansImg":{"src":"2017-P3-Q18-correct","w":474,"h":168}},
{"qimg":{"src":"2017-P3-Q19","w":1106,"h":416},"n":"19","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Number and place value","subtopic":"Rounding","marks":2,"intro":"Dev thinks of a whole number.\nHe multiplies it by 4\nHe rounds his answer to the nearest 10\nThe result is 50","ref":"4N6","text":"Write all the possible numbers that Dev could have started with.","answer":"Award TWO marks for 12 AND 13","markscheme":"If the answer is incorrect, award ONE mark for:\n• only one correct number and no incorrect number\nOR\n• 12 AND 13 AND not more than one incorrect number.\nAdditional guidance:\nAccept for ONE mark an answer of 48 AND 52 AND no more than one incorrect number."},
{"qimg":{"src":"2017-P3-Q20","w":1106,"h":1136},"n":"20","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Area","marks":3,"intro":"A square tile measures 20cm by 20cm.\nA rectangular tile is 3cm longer and 2cm narrower than the square tile.","ref":"5M7b/5C7a","text":"What is the difference in area between the two tiles?","answer":"Award THREE marks for the correct answer of 14","markscheme":"If the answer is incorrect, award TWO marks for:\n• sight of 414 as evidence of 23 × 18 completed correctly\nOR\n• evidence of an appropriate method with no more than one arithmetic error, e.g.\n20 × 20 = 400\n[[img:2017-P3-Q20-mult:150]]\n400 – 314 = 86\nAward ONE mark for evidence of an appropriate method.\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark.\nA misread of a number may affect the award of marks. No marks are awarded if there is more than one misread or if the mathematics is simplified.\nTWO marks will be awarded for an appropriate method using the misread number followed through correctly to a final answer.\nONE mark will be awarded for evidence of an appropriate method using the misread number followed through correctly with no more than one arithmetic error."},
{"qimg":{"src":"2017-P3-Q21","w":1106,"h":360},"n":"21","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Calculation","subtopic":"Number sequences","marks":2,"ref":"6F4/6A3","text":"The numbers in this sequence increase by the same amount each time.\nWrite the missing numbers.\n☐   1   1 5/8   2 1/4   ☐","answer":"(a) 3/8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) 2 7/8 or 23/8","markscheme":"21a: 3/8 accept equivalent fractions or an exact decimal equivalent, e.g. 0.375\n21b: 2 7/8 OR 23/8 accept equivalent fractions or an exact decimal equivalent, e.g. 2.875"},
{"qimg":{"src":"2017-P3-Q22","w":1106,"h":1020},"n":"22","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Algebra","subtopic":"Finding unknown values","marks":2,"intro":"In this diagram, the shaded rectangles are all of equal width (w).\n(One rectangle is 34cm wide with a shaded strip of width w; below it, lengths of 18cm, w, 9cm and w make up the same total width.)","ref":"6A1","text":"Calculate the width (w) of one shaded rectangle.","answer":"Award TWO marks for the correct answer of 7","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 18 + 9 + 2 widths = 34 + 1 width\n27 + 2 widths = 34 + 1 width\n27 + 1 width = 34\n34 – 27\nOR\n• 34 – (18 + 9)\nAdditional guidance:\nAnswer need not be obtained for the award of ONE mark.\nAward ONE mark for a method which uses algebraic representation correctly, e.g.\n• 34 + w = 18 + w + 9 + w\n34 + w = 27 + w + w"},
{"qimg":{"src":"2017-P3-Q23","w":1106,"h":670},"n":"23","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Algebra","subtopic":"Finding unknown values","marks":1,"intro":"Here is a pattern of number pairs.\na: 1,2,3,4  b: 9,19,29,39","ref":"6A4","text":"Complete the rule for the number pattern.\nb = ☐ × a − ☐","answer":"Both numbers correct as shown:\nb = 10 × a − 1","markscheme":""},
{"qimg":{"src":"2017-P3-Q24","w":1106,"h":867},"n":"24","paperNum":"3","paper":"Papers 2 & 3 (reasoning)","sitting":"2017","strand":"Measurement","subtopic":"Volume","marks":2,"intro":"Cube A and cuboid B have the same volume.\nCube A: 6cm sides.\nCuboid B: 6cm by 4cm by an unknown length.","ref":"6M8b/6R1","text":"Calculate the missing length on cuboid B.","answer":"Award TWO marks for the correct answer of 9","markscheme":"If the answer is incorrect, award ONE mark for evidence of an appropriate method, e.g.\n• 6 × 6 × 6 = 216\n216 ÷ 6 = 36\n36 ÷ 4\nOR\n• 216 ÷ 24"}
];

QUESTIONS.forEach((q,i)=>{
  q.id = "q"+i;
  // A question can sit under more than one sub-strand (eg prime and square numbers).
  q.subtopics = [].concat(q.subtopic);
  // The digit at the start of a reference is the curriculum year (eg 4S1 is year 4).
  q.years = [...new Set((q.ref.match(/\d(?=[A-Z])/g) || []).map(Number))];
  q.series = `${q.sitting} · Paper ${q.paperNum}`;
});

const state = {year:"all", paper:"all", marks:"all", strands:new Set(), subtopic:"all", selected:new Set(), visibleCount:40};
let modalIndex = -1;
let currentList = [];
let lastFilterSignature = null;
const INITIAL_PAGE_SIZE = 40;
const LOAD_MORE_SIZE = 20;

document.getElementById("yearToggle").addEventListener('click',e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  state.year = btn.dataset.year;
  [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

document.getElementById("paperToggle").addEventListener('click',e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  state.paper = btn.dataset.paper;
  [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

document.getElementById("marksToggle").addEventListener('click',e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  state.marks = btn.dataset.marks;
  [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

function buildStrandChips(){
  const el = document.getElementById("strandChips");
  el.innerHTML = '<button class="chip" data-strand="all" style="--chip-color:var(--navy);">All</button>' +
    Object.keys(STRANDS).map(s=>`<button class="chip" data-strand="${s}" style="--chip-color:${STRANDS[s]};">${s}</button>`).join('');
  refreshStrandChipStates();
  el.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.dataset.strand === "all"){
      state.strands.clear();
    }else{
      if(state.strands.has(btn.dataset.strand)) state.strands.delete(btn.dataset.strand);
      else state.strands.add(btn.dataset.strand);
    }
    refreshStrandChipStates();
    buildSubtopicOptions();
    render();
  }));
}

function refreshStrandChipStates(){
  const el = document.getElementById("strandChips");
  el.querySelectorAll('.chip').forEach(b=>{
    const isAll = b.dataset.strand === "all";
    const active = isAll ? state.strands.size === 0 : state.strands.has(b.dataset.strand);
    b.classList.toggle('active', active);
  });
}

function buildSubtopicOptions(){
  // No <select> to populate: the combobox below reads the pool live each time
  // it opens. This just resets the current selection whenever the strand
  // filter changes underneath it.
  state.subtopic = "all";
  const input = document.getElementById("substrandInput");
  input.value = "";
  input.readOnly = false;
  document.getElementById("substrandClear")?.classList.add('hidden');
}

// Sub-strand combobox: type to filter the list, or click the arrow to see
// every available sub-strand at once. Some sub-strands can be combined into
// a wider option here without removing the specific ones.
const SUBTOPIC_GROUPS = {
};

let searchHighlight = -1;
function currentSubstrandPool(){
  const pool = state.strands.size === 0 ? QUESTIONS : QUESTIONS.filter(q=>state.strands.has(q.strand));
  const subtopics = new Set(pool.flatMap(q=>q.subtopics));
  const names = new Set(subtopics);
  for(const [groupName, members] of Object.entries(SUBTOPIC_GROUPS)){
    if(members.some(m=>subtopics.has(m))) names.add(groupName);
  }
  return [...names].sort();
}
function renderSuggestions(query){
  const box = document.getElementById("searchSuggestions");
  const q = query.trim().toLowerCase();
  const pool = currentSubstrandPool();
  const matches = q ? pool.filter(s=>s.toLowerCase().includes(q)) : pool;
  if(matches.length === 0){ box.classList.add('hidden'); box.innerHTML = ''; searchHighlight = -1; return; }
  searchHighlight = 0;
  box.innerHTML = matches.map((s,i)=>`<div class="search-suggestion${i===0?' highlighted':''}" data-value="${s}">${s}</div>`).join('');
  box.classList.remove('hidden');
  box.querySelectorAll('.search-suggestion').forEach(el=>{
    el.addEventListener('mousedown', e=>{ e.preventDefault(); selectSuggestion(el.dataset.value); });
  });
}
function updateClearButton(){
  document.getElementById("substrandClear").classList.toggle('hidden', state.subtopic === 'all');
}
function selectSuggestion(value){
  state.subtopic = value;
  const input = document.getElementById("substrandInput");
  input.value = value === "all" ? "" : value;
  document.getElementById("searchSuggestions").classList.add('hidden');
  input.blur(); // avoids a lingering blinking caret in a field that is now "chosen" rather than typed into
  // Once a sub-strand is picked, the field becomes a display of that choice
  // rather than free text, so it is read-only and clicking it re-opens the list.
  input.readOnly = (value !== "all");
  updateClearButton();
  render();
}
document.getElementById("substrandInput").addEventListener('input',e=>{
  renderSuggestions(e.target.value);
  if(e.target.value.trim() === ""){ state.subtopic = "all"; updateClearButton(); render(); }
});
document.getElementById("substrandInput").addEventListener('mousedown',e=>{
  // Stops a read-only field gaining focus, which would flash the focus ring
  // before the click handler blurs it again.
  if(e.target.readOnly) e.preventDefault();
});
document.getElementById("substrandInput").addEventListener('focus',e=>{
  if(e.target.readOnly) return; // handled by the click listener instead, to avoid showing a caret
  renderSuggestions(e.target.value);
});
document.getElementById("substrandInput").addEventListener('click',e=>{
  if(!e.target.readOnly) return;
  renderSuggestions('');
});
document.getElementById("substrandClear").addEventListener('click',()=>{
  selectSuggestion("all");
});
document.getElementById("substrandInput").addEventListener('keydown',e=>{
  const box = document.getElementById("searchSuggestions");
  const items = [...box.querySelectorAll('.search-suggestion')];
  if(box.classList.contains('hidden') || items.length === 0) return;
  if(e.key === "ArrowDown"){ e.preventDefault(); searchHighlight = Math.min(searchHighlight+1, items.length-1); }
  else if(e.key === "ArrowUp"){ e.preventDefault(); searchHighlight = Math.max(searchHighlight-1, 0); }
  else if(e.key === "Enter"){ e.preventDefault(); selectSuggestion(items[searchHighlight].dataset.value); return; }
  else if(e.key === "Escape"){ box.classList.add('hidden'); return; }
  else return;
  items.forEach((el,i)=>el.classList.toggle('highlighted', i === searchHighlight));
});
document.getElementById("substrandInput").addEventListener('blur',()=>{
  setTimeout(()=>document.getElementById("searchSuggestions").classList.add('hidden'), 150);
});
document.getElementById("substrandArrow").addEventListener('click',()=>{
  const box = document.getElementById("searchSuggestions");
  if(!box.classList.contains('hidden')){ box.classList.add('hidden'); return; }
  // Always show the complete sub-strand list here, whatever text is in the
  // box. This is the "browse everything" path, separate from typing to filter.
  renderSuggestions('');
});

function matches(q){
  if(state.year !== "all" && !q.years.includes(Number(state.year))) return false;
  if(state.paper !== "all" && q.paper !== state.paper) return false;
  if(state.marks !== "all"){
    if(state.marks === "4+"){ if(q.marks < 4) return false; }
    else if(q.marks !== Number(state.marks)) return false;
  }
  if(state.strands.size > 0 && !state.strands.has(q.strand)) return false;
  if(state.subtopic !== "all"){
    const group = SUBTOPIC_GROUPS[state.subtopic];
    if(group){ if(!q.subtopics.some(t=>group.includes(t))) return false; }
    else if(!q.subtopics.includes(state.subtopic)) return false;
  }
  return true;
}

// Fractions typed as 3/10 or 1 4/5 are drawn as stacked fractions, the way
// they are printed on the papers.
const VULGAR_FRACTIONS = {
  '½':[1,2],'¼':[1,4],'¾':[3,4],'⅓':[1,3],'⅔':[2,3],
  '⅕':[1,5],'⅖':[2,5],'⅗':[3,5],'⅘':[4,5],
  '⅙':[1,6],'⅚':[5,6],'⅛':[1,8],'⅜':[3,8],'⅝':[5,8],'⅞':[7,8]
};
function stackFraction(text){
  // Applied per line: a fraction sitting alone in a short expression reads
  // better full-size, but the same full-size fraction inside a long, wordy
  // line pushes that line taller than its neighbours, so lines over about 40
  // characters get the compact fraction style instead.
  return String(text).split('\n').map(line=>{
    const visibleLength = line.replace(/<[^>]+>/g,'').length;
    const cls = visibleLength > 40 ? 'frac-sm' : 'frac';
    let str = line;
    str = str.replace(/([0-9]*)([½¼¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])/g, (m, whole, frac)=>{
      const [n,d] = VULGAR_FRACTIONS[frac];
      return (whole||'') + `<span class="${cls}"><span class="num">${n}</span><span class="den">${d}</span></span>`;
    });
    // A mixed number such as 1 4/5 keeps its fraction tight against the whole number.
    str = str.replace(/\b(\d+) (\d+)\/(\d+)\b/g, (m, whole, num, den)=>
      `${whole}<span class="${cls} mixed"><span class="num">${num}</span><span class="den">${den}</span></span>`);
    // At least one side must contain a digit, so word/word patterns that use
    // "/" to mean "or" are not mistaken for a fraction.
    str = str.replace(/\b([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\b/g, (m, num, den)=>{
      if(!/\d/.test(num) && !/\d/.test(den)) return m;
      return `<span class="${cls}"><span class="num">${num}</span><span class="den">${den}</span></span>`;
    });
    return str;
  }).join('\n');
}
function mathText(text){ return stackFraction(text); }

function sourceTag(q){ return `${q.series} · Q${q.n}`; }
// The full content domain reference (q.ref, eg 4M4b) stays in the data but is
// not shown; the popup only displays the year group.
function refTag(q){
  return `${q.years.length > 1 ? 'Years' : 'Year'} ${q.years.join(' and ')}`;
}

function paperRank(q){ return parseInt(q.paperNum,10); }
function questionNumber(q){ const m = q.n.match(/^\d+/); return m ? parseInt(m[0],10) : 0; }
// Higher rank = more recent sitting.
function sittingRank(sitting){
  const m = String(sitting || '').match(/(\d{4})/);
  return m ? parseInt(m[1],10) : 0;
}

// Arithmetic (Paper 1) comes first, then the reasoning papers. Within each
// group, questions run in number order (all the reasoning Q1s together, then
// every Q2, and so on), with the most recent sitting first within that.
function sortQuestions(list){
  return list.slice().sort((a,b)=>{
    const ga = paperRank(a) === 1 ? 0 : 1, gb = paperRank(b) === 1 ? 0 : 1;
    if(ga !== gb) return ga - gb;
    const an = questionNumber(a), bn = questionNumber(b);
    if(an !== bn) return an - bn;
    const sa = sittingRank(a.sitting), sb = sittingRank(b.sitting);
    if(sa !== sb) return sb - sa;
    return paperRank(a) - paperRank(b);
  });
}

function filterSignature(){
  return JSON.stringify([state.year, state.paper, [...state.strands].sort(), state.subtopic]);
}

// One question card. The printed worksheet uses the same markup (without the
// tick box and buttons) so a printed card looks exactly like the on-screen one.
function cardHTML(q, idx, forPrint){
  return `
    <div class="card" style="--strand:${STRANDS[q.strand]}"${forPrint ? '' : ` onclick="openModal(${idx})"`}>
      <div class="card-top">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-width:0;">
          ${q.subtopics.map(t=>`<span class="subtopic-pill">${t}</span>`).join('')}
          <span class="source-tag">${sourceTag(q)}</span>
        </div>
        <div class="card-top-right">
          <span class="marks-badge">${q.marks} mark${q.marks>1?'s':''}</span>
        </div>
      </div>
      <div class="card-body">
        ${qBodyHTML(q)}
      </div>
      ${forPrint ? '' : `<div class="card-actions">
        <label class="add-label" onclick="event.stopPropagation()">
          <input type="checkbox" data-id="${q.id}" ${state.selected.has(q.id)?'checked':''} onchange="toggleSelect('${q.id}')">
          Add to worksheet
        </label>
        <button class="print-one" onclick="event.stopPropagation();printOne('${q.id}')">Print this question →</button>
      </div>`}
    </div>`;
}

function render(){
  const sig = filterSignature();
  if(sig !== lastFilterSignature){
    state.visibleCount = INITIAL_PAGE_SIZE;
    lastFilterSignature = sig;
  }
  let list = QUESTIONS.filter(matches);
  list = sortQuestions(list);
  currentList = list;
  const shown = Math.min(state.visibleCount, list.length);
  document.getElementById("resultsMeta").textContent = list.length === 0
    ? '0 questions found'
    : (shown < list.length
        ? `Showing ${shown} of ${list.length} questions`
        : `${list.length} question${list.length===1?'':'s'} found`);
  const grid = document.getElementById("grid");
  const loadMoreWrap = document.getElementById("loadMoreWrap");
  if(list.length === 0){
    grid.innerHTML = '<div class="no-results">No questions match those filters yet.</div>';
    loadMoreWrap.innerHTML = '';
    return;
  }
  const visible = list.slice(0, shown);
  grid.innerHTML = visible.map((q,idx)=>cardHTML(q, idx, false)).join('');
  loadMoreWrap.innerHTML = shown < list.length
    ? `<button class="btn btn-loadmore" id="loadMoreBtn">Show more questions (${list.length - shown} remaining)</button>`
    : '';
  if(shown < list.length){
    document.getElementById("loadMoreBtn").addEventListener('click', ()=>{
      state.visibleCount += LOAD_MORE_SIZE;
      render();
    });
  }
}

function questionHeaderHTML(q){
  return `
    <div class="modal-header-top">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        ${q.subtopics.map(t=>`<span class="subtopic-pill">${t}</span>`).join('')}
        <span class="source-tag">${sourceTag(q)}</span>
        <span class="source-tag">${refTag(q)}</span>
      </div>
      <div class="card-top-right">
        <span class="marks-badge">${q.marks} mark${q.marks>1?'s':''}</span>
      </div>
    </div>
  `;
}

// The typed copy of a question. It is only shown if the image cannot be
// loaded, so the page still reads properly before the images are uploaded.
function textBodyHTML(q){
  return `
    ${q.intro?`<div class="q-text">${mathText(q.intro)}</div>`:''}
    ${q.text?`<div class="q-text">${mathText(q.text)}</div>`:''}
  `;
}
function imgFallback(img, id){
  const q = QUESTIONS.find(x=>x.id === id);
  const wrap = img.closest('.q-diagram');
  if(!q || !wrap) return;
  wrap.outerHTML = `<div class="q-fallback"><h4 class="q-heading">Question ${q.n}</h4>${textBodyHTML(q)}</div>`;
}

// Each question is shown as an image cropped straight from the original test
// paper, at a fixed multiple of its native size (0.5x in the grid card, a
// larger 0.75x in the popup, which has more room). It is never stretched to
// fill the container, so every question's printed text renders at the same
// on-screen size whatever the shape of its crop.
function qBodyHTML(q, modal){
  const K = modal ? MODAL_CROP_SCALE : GRID_CROP_SCALE;
  const cls = modal ? 'q-diagram q-crop q-crop-modal' : 'q-diagram q-crop';
  const w = Math.round(q.qimg.w * K);
  const img = `<img src="${imgUrl(q.qimg.src)}" alt="Question ${q.n}, cropped directly from the ${q.sitting} key stage 2 mathematics test paper ${q.paperNum}" style="width:${w}px;max-width:100%;" decoding="async" onerror="imgFallback(this,'${q.id}')">`;
  return `<div class="${cls}">${img}</div>`;
}

function imgUrl(name){ return QIMG_BASE_PATH + name + '.png'; }
// Mark scheme text can hold [[img:name:width]] markers for example diagrams taken from the mark scheme.
function msInline(text){
  return mathText(text).replace(/\[\[img:([^:\]]+):(\d+)\]\]/g, (m, name, w)=>
    `<div class="answer-img"><img src="${imgUrl(name)}" alt="Example diagram from the mark scheme" style="width:${Math.round(Number(w)*ANSWER_IMG_SCALE)}px;max-width:100%;" decoding="async"></div>`);
}
// A bullet keeps everything that belongs to it (working lines, example images)
// indented in line with the bullet's own text, as on the printed mark scheme.
// A line belongs to the bullet above if it starts with a digit, £, a bracket,
// a minus or times sign, or an image marker.
function isBulletContinuation(line){ return /^(\d|£|\(|−|–|×|\[\[img)/.test(line); }
function markschemeHTML(text){
  const lines = text.split('\n');
  let out = '', plain = [];
  const flush = ()=>{ if(plain.length){ out += msInline(plain.join('\n')) + '\n'; plain = []; } };
  for(let i=0; i<lines.length; i++){
    if(lines[i].startsWith('• ')){
      flush();
      const body = [lines[i].slice(2)];
      while(i+1 < lines.length && isBulletContinuation(lines[i+1])){ body.push(lines[++i]); }
      out += `<div class="ms-bullet${body[0].startsWith('[[img') ? ' ms-bullet-img' : ''}"><span class="ms-dot">•</span><div class="ms-bcontent">${body.map(msInline).join('<br>')}</div></div>`;
    }else{
      plain.push(lines[i]);
    }
  }
  flush();
  return out.replace(/\n$/, '');
}
// The answer is shown first. The mark scheme section only appears when there
// is something in it beyond the answer itself.
function answerHTML(q){
  const ansImg = q.ansImg
    ? `<div class="answer-img"><img src="${imgUrl(q.ansImg.src)}" alt="Correct answer to question ${q.n}, taken from the mark scheme" style="width:${Math.round(q.ansImg.w*ANSWER_IMG_SCALE)}px;max-width:100%;" decoding="async"></div>`
    : '';
  const hasMS = q.markscheme && q.markscheme.trim();
  const ms = hasMS
    ? `<hr style="border:none;border-top:1px solid var(--card-border);margin:10px 0;"><strong>Mark scheme:</strong><br>${markschemeHTML(q.markscheme)}`
    : '';
  return `<div class="answer-box"><strong>Answer:</strong> ${q.answer ? mathText(q.answer) : ''}${ansImg}${ms}</div>`;
}

function questionCardHTML(q, showAnswer){
  return `
    ${qBodyHTML(q, true)}
    ${showAnswer ? answerHTML(q) : ''}
  `;
}

let answerVisible = false;

function openModal(idx){
  modalIndex = idx;
  answerVisible = false;
  document.getElementById("modalOverlay").classList.remove('hidden');
  renderModal();
}
function renderModal(){
  const q = currentList[modalIndex];
  if(!q) return;
  document.getElementById("modalBox").style.setProperty('--strand', STRANDS[q.strand]);
  document.getElementById("modalHeader").innerHTML = questionHeaderHTML(q);
  document.getElementById("modalContent").innerHTML = questionCardHTML(q, answerVisible);
  document.getElementById("modalCount").textContent = `Question ${modalIndex+1} of ${currentList.length}`;
  document.getElementById("modalPrev").disabled = modalIndex <= 0;
  document.getElementById("modalNext").disabled = modalIndex >= currentList.length-1;
  const cb = document.getElementById("modalCheckbox");
  cb.checked = state.selected.has(q.id);
  cb.onchange = ()=>{ toggleSelect(q.id); };
  document.getElementById("modalAnswerToggle").textContent = answerVisible ? 'Hide answer' : 'Show answer';
  document.getElementById("modalAnswerToggle").onclick = ()=>{ answerVisible = !answerVisible; renderModal(); };
  document.getElementById("modalPrintBtn").onclick = ()=>{ printOne(q.id); };
}
document.getElementById("modalClose").addEventListener('click',()=>{document.getElementById("modalOverlay").classList.add('hidden');render();});
document.getElementById("modalOverlay").addEventListener('click',e=>{if(e.target.id === "modalOverlay"){document.getElementById("modalOverlay").classList.add('hidden');render();}});
document.getElementById("modalPrev").addEventListener('click',()=>{if(modalIndex>0){modalIndex--;answerVisible=false;renderModal();}});
document.getElementById("modalNext").addEventListener('click',()=>{if(modalIndex<currentList.length-1){modalIndex++;answerVisible=false;renderModal();}});
document.addEventListener('keydown',e=>{
  if(document.getElementById("modalOverlay").classList.contains('hidden')) return;
  if(e.key === "Escape"){ document.getElementById("modalOverlay").classList.add('hidden'); render(); }
  if(e.key === "ArrowLeft" && modalIndex>0){ modalIndex--; answerVisible=false; renderModal(); }
  if(e.key === "ArrowRight" && modalIndex<currentList.length-1){ modalIndex++; answerVisible=false; renderModal(); }
});

function toggleSelect(id){
  if(state.selected.has(id)) state.selected.delete(id); else state.selected.add(id);
  updateBuilderBar();
}
function updateBuilderBar(){
  const bar = document.getElementById("builderBar");
  const items = [...state.selected].map(id=>QUESTIONS.find(q=>q.id === id));
  document.getElementById("selCount").textContent = items.length;
  document.getElementById("selMarks").textContent = items.reduce((s,q)=>s+q.marks,0);
  const show = items.length > 0;
  bar.classList.toggle('show', show);
  // The bar is position:fixed, so it never pushes page content up on its own.
  // Reserving its own height as page padding (measured live, since it can
  // wrap to two lines on narrow screens) makes room for it instead.
  document.body.style.paddingBottom = show ? bar.offsetHeight+'px' : '';
}
document.getElementById("clearBtn").addEventListener('click',()=>{state.selected.clear();render();updateBuilderBar();});

// Builds the "Answers" section that gets appended after the printed
// questions. For a worksheet (printSelected) this respects the "Include
// answers" toggle (unchecked by default), because a worksheet is aimed at
// handing blank copies to children, so answers must be an active choice. For
// a single question (printOne), force=true always includes the mark scheme,
// since printing one question is normally for the tutor's own reference.
function buildPrintAnswers(ids, force){
  const box = document.getElementById('printAnswers');
  const toggle = document.getElementById('includeAnswersToggle');
  if((!force && !toggle.checked) || ids.length === 0){
    box.classList.remove('has-content');
    box.innerHTML = '';
    return;
  }
  const items = ids.map(id=>QUESTIONS.find(q=>q.id === id)).filter(Boolean);
  box.innerHTML = '<h2>Answers</h2>' + items.map(q=>`
    <div class="answer-item">
      <span class="answer-source">${sourceTag(q)}</span>
      ${answerHTML(q)}
    </div>
  `).join('');
  box.classList.add('has-content');
}
function resetPrintAnswers(){
  document.getElementById('printAnswers').classList.remove('has-content');
  document.getElementById('printAnswers').innerHTML = '';
}

// Printing builds its own list of cards from the ticked questions, so a
// worksheet always includes everything that was ticked, whatever filters are
// set and however many cards the page is currently showing. Every image is
// forced to load first, so nothing prints as a blank card.
function waitForImages(root){
  const imgs = [...root.querySelectorAll('img')];
  imgs.forEach(i=>{ i.loading = 'eager'; });
  const loaded = Promise.all(imgs.map(i=>new Promise(res=>{
    if(i.complete) return res();
    i.addEventListener('load', res, {once:true});
    i.addEventListener('error', res, {once:true});
  })));
  return Promise.race([loaded, new Promise(res=>setTimeout(res, 8000))]);
}
async function printQuestions(ids, forceAnswers){
  const list = sortQuestions(ids.map(id=>QUESTIONS.find(q=>q.id === id)).filter(Boolean));
  if(list.length === 0) return;
  const area = document.getElementById('printCards');
  area.innerHTML = list.map(q=>cardHTML(q, 0, true)).join('');
  buildPrintAnswers(list.map(q=>q.id), forceAnswers);
  document.body.classList.add('printing-selection');
  await waitForImages(document.getElementById('sqb-page'));
  const cleanup = ()=>{
    document.body.classList.remove('printing-selection');
    area.innerHTML = '';
    resetPrintAnswers();
  };
  window.addEventListener('afterprint', cleanup, {once:true});
  window.print();
}
document.getElementById("printSelected").addEventListener('click',()=>{ printQuestions([...state.selected], false); });
function printOne(id){ printQuestions([id], true); }

buildStrandChips();
buildSubtopicOptions();
render();

</script>
</div>
