---
layout: default
title: GCSE maths question bank
description: Search real Edexcel GCSE maths past paper questions by tier, paper, strand and sub-strand. View them on screen or print them straight into a worksheet.
permalink: /gcse-question-bank/
body_class: page-gcse-question-bank has-bottom-bar
---

<div id="gqb-page">
<style>
  :root{
    --blue:#1c75bc;      /* Number */
    --green:#009444;     /* Algebra */
    --purple:#800080;    /* Statistics */
    --orange:#f7941e;    /* Geometry and measures */
    --amber:#a15c1f;      /* Ratio, proportion and rates of change */
    --rose:#c43d6b;      /* Probability */
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

  /* Filter rail — scrolls with the page, no sticky positioning */
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

  .chip-row{display:flex;flex-wrap:nowrap;justify-content:space-between;gap:8px;overflow-x:auto;padding-bottom:4px;flex:1;}
  .chip-row::-webkit-scrollbar{height:5px;}
  .chip-row::-webkit-scrollbar-thumb{background:var(--card-border);border-radius:3px;}
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
  /* Bare icon, no pill - kept deliberately quiet since it only needs to
     flag the minority "calculator allowed" case (Papers 2 & 3); Paper 1
     questions show no icon at all, matching how the real exam papers only
     print a calculator symbol on the calculator paper's own cover. */
  .calc-icon{color:var(--muted);flex:0 0 auto;display:flex;align-items:center;}
  .calc-icon svg{display:block;width:20px;height:20px;}
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
  /* A part without its own baked-in number (e.g. part (b) onwards) gets
     just the bare question number ("8", not "8(b)") to its left, in the
     exam paper's own bold serif style, matching the numerals that ARE
     baked into the crop images. */
  .q-part-row{display:flex;align-items:flex-start;gap:8px;}
  .q-part-number{flex:0 0 auto;font-family:'Times New Roman',Georgia,serif;font-weight:700;line-height:1.3;font-variant-numeric:lining-nums;font-feature-settings:"lnum" 1;}
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
  /* Every previous attempt at raising the exponent relied on vertical-align
     or baseline-alignment behaviour (native <sup>, position:relative on an
     inline-flex box, vertical-align on an inline-block) - all of which
     depend on how a browser computes an element's baseline, which is
     exactly the part that's been unreliable across attempts. transform is
     different in kind: it's a plain geometric shift applied after layout
     is resolved, with no baseline computation involved at all, so there's
     nothing left for a browser to interpret differently.
  */
  .exp{
    display:inline-block;font-size:.68em;line-height:1;
    font-family:'Times New Roman',Times,'Liberation Serif',serif;
    transform:translateY(-1.1em);
  }
  .exp .frac{top:0;}
  /* Vector arrows are drawn as a small inline SVG rather than CSS
     pseudo-elements with absolute positioning. Every previous attempt at
     the latter depended on how a browser resolves an absolutely-positioned
     element's containing block inside a nested inline-block, which turned
     out to behave unpredictably. An SVG's internal coordinates are fixed
     and rendered identically everywhere - there's no positioning
     ambiguity left for a browser to get wrong.
  */
  /* The arrow needs to sit above the letters, purely as a decoration, with
     the letters themselves behaving as ordinary inline text so they align
     to the surrounding sentence's baseline exactly like plain text would -
     that ordinary alignment is unambiguous and reliable, unlike flexbox's
     baseline synthesis for a column-direction container (which browsers
     resolve inconsistently: they variously use the first child, the last
     child, or the container's own margin edge, so the letters would end up
     floating off the baseline depending on the browser). Taking the arrow
     out of the flow entirely with absolute positioning sidesteps that: the
     letters are the only thing left participating in normal text flow, so
     there's nothing left for a browser to disagree about.
  */
  .vec{position:relative;display:inline-block;padding-top:9px;margin:0 1px;font-family:'Times New Roman',Times,'Liberation Serif',serif;}
  .vec svg{position:absolute;top:0;left:50%;transform:translateX(-50%);width:1.5em;height:.5em;}
  /* Column vector notation (a numeric pair stacked in round brackets), distinct
     from .vec above which is the arrow-vector notation (eg vector OA with an
     arrow drawn above it) -- these are two different notations, do not merge. */
  .cvec{display:inline-flex;align-items:center;margin:0 3px;}
  .cvec-bracket{font-size:1.6em;font-weight:300;}
  .cvec-col{display:inline-flex;flex-direction:column;align-items:center;padding:0 4px;line-height:1.15;}
  .radicand{border-top:1.5px solid currentColor;padding:0 2px;}
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
    display:none;
    position:sticky;bottom:0;z-index:30;
    background:var(--navy);color:#fff;
    padding:14px 0;
    box-shadow:0 -6px 20px rgba(0,0,0,.15);
  }
  .builder-bar.show{display:block;animation:builderBarIn .25s ease;}
  @keyframes builderBarIn{from{transform:translateY(100%);}to{transform:translateY(0);}}
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
    body > *:not(#gqb-page){display:none !important;}
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
    .card-top .card-top-right{display:inline-block;float:right;}
    .card-top .card-top-right .calc-icon{display:inline-block;vertical-align:middle;margin-right:5px;}
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
</style>

<section class="om-hero" style="min-height:0; padding: 3.5rem 2rem 1.75rem;">
  <h1>GCSE maths <em>question bank</em></h1>
  <p>Search and practise past Edexcel GCSE maths questions by topic, tier and paper. Build your own worksheets, or view and print individual questions.</p>
  <p style="margin-top:0.75rem;font-size:0.85em;opacity:0.75;">Past papers are the copyright of <a href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html" style="color:inherit;">Pearson</a> and are provided here for revision purposes.</p>
</section>

<div class="filters">
  <div class="wrap">
    <div class="filters-grid">
      <div class="filter-group">
        <span class="filter-label">Tier</span>
        <div class="tier-toggle" id="tierToggle">
          <button data-tier="all" class="active">All</button>
          <button data-tier="Foundation">Foundation</button>
          <button data-tier="Crossover">Crossover</button>
          <button data-tier="Higher">Higher</button>
        </div>
      </div>

      <div class="filter-group">
        <span class="filter-label">Paper</span>
        <div class="tier-toggle" id="paperToggle">
          <button data-paper="all" class="active">All</button>
          <button data-paper="Paper 1 (non-calculator)">Paper 1 <span class="paper-bracket">(non-calculator)</span></button>
          <button data-paper="Papers 2 & 3 (calculator)">Papers 2 &amp; 3 <span class="paper-bracket">(calculator)</span></button>
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
          <button data-marks="4+">4+<span class="marks-suffix"> marks</span></button>
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
      <div class="builder-info"><strong id="selCount">0</strong> <span id="selWord">questions</span> selected &nbsp;·&nbsp; <span id="selMarks">0</span> <span id="marksWord">marks</span> total</div>
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

<script src="{{ '/assets/js/gcse-question-core.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
<script>
const state={tier:"all",paper:"all",marks:"all",strands:new Set(),subtopic:"all",selected:new Set(),visibleCount:40};
let modalIndex=-1;
let currentList=[];
let lastFilterSignature=null;
const INITIAL_PAGE_SIZE=40;
const LOAD_MORE_SIZE=20;

document.getElementById("paperToggle").addEventListener('click',e=>{
  const btn=e.target.closest('button');
  if(!btn)return;
  state.paper=btn.dataset.paper;
  [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

document.getElementById("marksToggle").addEventListener('click',e=>{
  const btn=e.target.closest('button');
  if(!btn)return;
  state.marks=btn.dataset.marks;
  [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

function buildStrandChips(){
  const el=document.getElementById("strandChips");
  el.innerHTML='<button class="chip" data-strand="all" style="--chip-color:var(--navy);">All</button>'+
    Object.keys(STRANDS).map(s=>`<button class="chip" data-strand="${s}" style="--chip-color:${STRANDS[s]};">${s}</button>`).join('');
  refreshStrandChipStates();
  el.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.dataset.strand==="all"){
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
  const el=document.getElementById("strandChips");
  el.querySelectorAll('.chip').forEach(b=>{
    const isAll=b.dataset.strand==="all";
    const active=isAll ? state.strands.size===0 : state.strands.has(b.dataset.strand);
    b.classList.toggle('active',active);
  });
}

function buildSubtopicOptions(){
  // No <select> to populate any more — the combobox below reads the pool
  // live each time it opens. This just resets the current selection whenever
  // the strand filter changes underneath it.
  state.subtopic="all";
  const input = document.getElementById("substrandInput");
  input.value="";
  input.readOnly=false;
  document.getElementById("substrandClear")?.classList.add('hidden');
}

document.getElementById("tierToggle").addEventListener('click',e=>{
  if(e.target.tagName!=="BUTTON")return;
  state.tier=e.target.dataset.tier;
  [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
  e.target.classList.add('active');
  render();
});

// Sub-strand combobox: type to filter the list, or click the arrow to see
// every available sub-strand at once — one control instead of a separate
// dropdown and search box.
// Some sub-strands are deliberately split into more specific ones (e.g.
// separate conversion tags) but a combined option that covers
// all of them is also useful when the specific split isn't what's wanted -
// this list defines those combined options without removing the specific
// ones them selves.
const SUBTOPIC_GROUPS = {
};

let searchHighlight = -1;
function currentSubstrandPool(){
  const pool = state.strands.size===0 ? QUESTIONS : QUESTIONS.filter(q=>state.strands.has(q.strand));
  const subtopics = new Set(pool.map(q=>q.subtopic));
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
  if(matches.length===0){ box.classList.add('hidden'); box.innerHTML=''; searchHighlight=-1; return; }
  searchHighlight = 0;
  box.innerHTML = matches.map((s,i)=>`<div class="search-suggestion${i===0?' highlighted':''}" data-value="${s}">${s}</div>`).join('');
  box.classList.remove('hidden');
  box.querySelectorAll('.search-suggestion').forEach(el=>{
    el.addEventListener('mousedown', e=>{ e.preventDefault(); selectSuggestion(el.dataset.value); });
  });
}
function updateClearButton(){
  document.getElementById("substrandClear").classList.toggle('hidden', state.subtopic==='all');
}
function selectSuggestion(value){
  state.subtopic = value;
  const input = document.getElementById("substrandInput");
  input.value = value==="all" ? "" : value;
  document.getElementById("searchSuggestions").classList.add('hidden');
  input.blur(); // avoids a lingering blinking caret in a field that's now "chosen" rather than being typed into
  // Once a sub-strand is picked, the field becomes a display of that choice
  // rather than free text — set it read-only so clicking it re-opens the
  // list instead of dropping a text cursor in for editing.
  input.readOnly = (value !== "all");
  updateClearButton();
  render();
}
document.getElementById("substrandInput").addEventListener('input',e=>{
  renderSuggestions(e.target.value);
  if(e.target.value.trim()===""){ state.subtopic="all"; updateClearButton(); render(); }
});
document.getElementById("substrandInput").addEventListener('mousedown',e=>{
  // Suppress the input actually gaining focus when it's read-only (already
  // has a value chosen) — otherwise it briefly shows the focus ring before
  // our own click handler blurs it again, which looks like a flash.
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
  if(box.classList.contains('hidden') || items.length===0) return;
  if(e.key==="ArrowDown"){ e.preventDefault(); searchHighlight=Math.min(searchHighlight+1, items.length-1); }
  else if(e.key==="ArrowUp"){ e.preventDefault(); searchHighlight=Math.max(searchHighlight-1, 0); }
  else if(e.key==="Enter"){ e.preventDefault(); selectSuggestion(items[searchHighlight].dataset.value); return; }
  else if(e.key==="Escape"){ box.classList.add('hidden'); return; }
  else return;
  items.forEach((el,i)=>el.classList.toggle('highlighted', i===searchHighlight));
});
document.getElementById("substrandInput").addEventListener('blur',()=>{
  setTimeout(()=>document.getElementById("searchSuggestions").classList.add('hidden'), 150);
});
document.getElementById("substrandArrow").addEventListener('click',()=>{
  const box = document.getElementById("searchSuggestions");
  if(!box.classList.contains('hidden')){ box.classList.add('hidden'); return; }
  // Always show the complete sub-strand list here, regardless of whatever
  // text is currently sitting in the box — this is the "browse everything"
  // path, separate from typing to filter.
  renderSuggestions('');
});

function matches(q){
  if(state.tier==="Foundation" && !(q.tier==="Foundation"||q.tier==="Crossover"))return false;
  if(state.tier==="Higher" && !(q.tier==="Higher"||q.tier==="Crossover"))return false;
  if(state.tier==="Crossover" && q.tier!=="Crossover")return false;
  if(state.paper!=="all" && q.paper!==state.paper)return false;
  if(state.marks!=="all"){
    if(state.marks==="4+"){ if(q.marks<4) return false; }
    else if(q.marks!==Number(state.marks)) return false;
  }
  if(state.strands.size>0 && !state.strands.has(q.strand))return false;
  if(state.subtopic!=="all"){
    const group = SUBTOPIC_GROUPS[state.subtopic];
    if(group){ if(!group.includes(q.subtopic)) return false; }
    else if(q.subtopic!==state.subtopic) return false;
  }
  return true;
}

// Higher rank = more recent. Only "Summer" and "November" occur in the
// bank today, but this is written to extend to any season name.
function sittingRank(sitting){
  const s = sitting || 'Summer 2017';
  const m = s.match(/(\d{4})/);
  const year = m ? parseInt(m[1],10) : 0;
  const season = s.replace(/\d{4}/,'').trim().toLowerCase();
  const seasonOrder = {'november':2, 'summer':1, 'june':1, 'may':1, 'january':0}[season];
  return year * 10 + (seasonOrder===undefined ? 1 : seasonOrder);
}

// Crossover questions display under their Foundation number except when
// the Higher tier is isolated (see displayN), so for ordering purposes
// they belong with the Foundation/Crossover block rather than the Higher
// block, matching how the paper-order grouping below already reads them.
function paperTierGroup(q){
  return q.tier==="Higher" ? 1 : 0;
}

function filterSignature(){
  return JSON.stringify([state.tier, state.paper, [...state.strands].sort(), state.subtopic]);
}

function render(){
  const sig = filterSignature();
  if(sig !== lastFilterSignature){
    state.visibleCount = INITIAL_PAGE_SIZE;
    lastFilterSignature = sig;
  }
  let list=QUESTIONS.filter(matches);
  // Order of results.
  // With NO filter on: group by question number first (so every paper's Q1s
  // sit together, then every Q2, and so on), with paper number as the
  // tiebreaker within that (Paper 1 before Paper 2 before Paper 3),
  // Foundation/Crossover before Higher within that, and most recent sitting
  // first within that - so you get P1 Nov Q1, P1 Sum Q1, P2 Nov Q1, P2 Sum Q1,
  // P3 Nov Q1, P3 Sum Q1, then P1 Nov Q2, and so on.
  // With ANY filter on (tier, paper, marks, strand or sub-strand): the newest
  // sitting comes first, then paper number, then question number, then
  // Foundation/Crossover before Higher, so whoever is searching a topic sees
  // its most recent questions first.
  const anyFilter = state.tier!=="all" || state.paper!=="all" || state.marks!=="all" || state.strands.size>0 || state.subtopic!=="all";
  list = list.slice().sort((a,b)=>{
    const [an,araw]=sortKey(a), [bn,braw]=sortKey(b);
    const paperA = parseInt(a.paperNum || (a.paper && a.paper.match(/Paper (\d)/) ? a.paper.match(/Paper (\d)/)[1] : '1'), 10);
    const paperB = parseInt(b.paperNum || (b.paper && b.paper.match(/Paper (\d)/) ? b.paper.match(/Paper (\d)/)[1] : '1'), 10);
    const groupA = paperTierGroup(a), groupB = paperTierGroup(b);
    const sitA = sittingRank(a.sitting), sitB = sittingRank(b.sitting);
    if(anyFilter){
      if(sitA !== sitB) return sitB - sitA;
      if(paperA !== paperB) return paperA - paperB;
      if(an !== bn) return an - bn;
      if(groupA !== groupB) return groupA - groupB;
      return araw.localeCompare(braw);
    }
    if(an !== bn) return an - bn;
    if(paperA !== paperB) return paperA - paperB;
    if(groupA !== groupB) return groupA - groupB;
    if(sitA !== sitB) return sitB - sitA;
    return araw.localeCompare(braw);
  });
  currentList=list;
  const shown = Math.min(state.visibleCount, list.length);
  document.getElementById("resultsMeta").textContent = list.length===0
    ? '0 questions found'
    : (shown < list.length
        ? `Showing ${shown} of ${list.length} questions`
        : `${list.length} question${list.length===1?'':'s'} found`);
  const grid=document.getElementById("grid");
  const loadMoreWrap=document.getElementById("loadMoreWrap");
  if(list.length===0){
    grid.innerHTML='<div class="no-results">No questions match those filters yet.</div>';
    loadMoreWrap.innerHTML='';
    return;
  }
  const visible = list.slice(0, shown);
  grid.innerHTML=visible.map((q,idx)=>`
    <div class="card" style="--strand:${STRANDS[q.strand]}" onclick="openModal(${idx})">
      <div class="card-top">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-width:0;">
          <span class="subtopic-pill">${q.subtopic}</span>
          <span class="source-tag">${sourceTag(q)}</span>
        </div>
        <div class="card-top-right">
          ${calcIconHTML(q)}
          <span class="marks-badge">${q.marks} mark${q.marks>1?'s':''}</span>
        </div>
      </div>
      ${qHeadingHTML(q)}
      <div class="card-body">
        ${qBodyHTML(q)}
      </div>
      <div class="card-actions">
        <label class="add-label" onclick="event.stopPropagation()">
          <input type="checkbox" data-id="${q.id}" ${state.selected.has(q.id)?'checked':''} onchange="toggleSelect('${q.id}')">
          Add to worksheet
        </label>
        <button class="print-one" onclick="event.stopPropagation();printOne('${q.id}')">Print this question →</button>
      </div>
    </div>
  `).join('');
  loadMoreWrap.innerHTML = shown < list.length
    ? `<button class="btn btn-loadmore" id="loadMoreBtn">Show more questions (${list.length - shown} remaining)</button>`
    : '';
  fixExpClipping();
  if(shown < list.length){
    document.getElementById("loadMoreBtn").addEventListener('click', ()=>{
      state.visibleCount += LOAD_MORE_SIZE;
      render();
    });
  }
}

// Fixes the same problem the old flat padding-top hack tried to solve, but
// per-card instead of for every card: .exp lifts a superscript/fraction up
// via transform, which moves paint position without moving the layout box,
// so a card whose first line happens to contain one can have it clipped by
// this container's own overflow:hidden top edge. A blanket CSS padding-top
// large enough to cover the worst case visibly pushed every card's text
// away from its heading, including the vast majority of cards with no
// exponent anywhere near the top. Measuring the actual overflow per card
// and only compensating where it's real keeps every other card exactly as
// tight as it was before this ever became an issue.
function fixExpClipping(){
  document.querySelectorAll('.card-body').forEach(cb=>{
    cb.style.paddingTop='';
    const exp=cb.querySelector('.exp');
    if(!exp)return;
    const overflow=cb.getBoundingClientRect().top - exp.getBoundingClientRect().top;
    if(overflow>0)cb.style.paddingTop=Math.ceil(overflow)+'px';
  });
}

let answerVisible=false;

function openModal(idx){
  modalIndex=idx;
  answerVisible=false;
  document.getElementById("modalOverlay").classList.remove('hidden');
  renderModal();
}
function renderModal(){
  const q=currentList[modalIndex];
  if(!q)return;
  document.getElementById("modalBox").style.setProperty('--strand',STRANDS[q.strand]);
  document.getElementById("modalHeader").innerHTML=questionHeaderHTML(q);
  document.getElementById("modalContent").innerHTML=questionCardHTML(q, answerVisible);
  document.getElementById("modalCount").textContent=`Question ${modalIndex+1} of ${currentList.length}`;
  document.getElementById("modalPrev").disabled=modalIndex<=0;
  document.getElementById("modalNext").disabled=modalIndex>=currentList.length-1;
  const cb=document.getElementById("modalCheckbox");
  cb.checked=state.selected.has(q.id);
  cb.onchange=()=>{toggleSelect(q.id);};
  document.getElementById("modalAnswerToggle").textContent=answerVisible?'Hide answer':'Show answer';
  document.getElementById("modalAnswerToggle").onclick=()=>{answerVisible=!answerVisible;renderModal();};
  document.getElementById("modalPrintBtn").onclick=()=>{printOne(q.id);};
}
document.getElementById("modalClose").addEventListener('click',()=>{document.getElementById("modalOverlay").classList.add('hidden');render();});
document.getElementById("modalOverlay").addEventListener('click',e=>{if(e.target.id==="modalOverlay"){document.getElementById("modalOverlay").classList.add('hidden');render();}});
document.getElementById("modalPrev").addEventListener('click',()=>{if(modalIndex>0){modalIndex--;answerVisible=false;renderModal();}});
document.getElementById("modalNext").addEventListener('click',()=>{if(modalIndex<currentList.length-1){modalIndex++;answerVisible=false;renderModal();}});
document.addEventListener('keydown',e=>{
  if(document.getElementById("modalOverlay").classList.contains('hidden'))return;
  if(e.key==="Escape"){document.getElementById("modalOverlay").classList.add('hidden');render();}
  if(e.key==="ArrowLeft" && modalIndex>0){modalIndex--;answerVisible=false;renderModal();}
  if(e.key==="ArrowRight" && modalIndex<currentList.length-1){modalIndex++;answerVisible=false;renderModal();}
});

function toggleSelect(id){
  if(state.selected.has(id))state.selected.delete(id);else state.selected.add(id);
  updateBuilderBar();
}
function updateBuilderBar(){
  const bar=document.getElementById("builderBar");
  const items=[...state.selected].map(id=>QUESTIONS.find(q=>q.id===id));
  const totalMarks=items.reduce((s,q)=>s+q.marks,0);
  document.getElementById("selCount").textContent=items.length;
  document.getElementById("selWord").textContent=items.length===1?"question":"questions";
  document.getElementById("selMarks").textContent=totalMarks;
  document.getElementById("marksWord").textContent=totalMarks===1?"mark":"marks";
  const show=items.length>0;
  bar.classList.toggle('show',show);
  // The bar is position:sticky, so it follows the bottom of the screen while
  // scrolling and settles above the footer at the end of the page. It needs
  // no padding on the page.
}
document.getElementById("clearBtn").addEventListener('click',()=>{state.selected.clear();render();updateBuilderBar();});

// Builds the "Answers" section that gets appended after the printed
// questions. For a worksheet (printSelected), this respects the "Include
// answers" toggle (unchecked by default) - it's aimed at handing blank
// copies to students, so answers must be an active choice. For a single
// question (printOne), force=true always includes the mark scheme
// regardless of the toggle, since printing one question is normally for
// the tutor's own reference rather than a student worksheet.
function buildPrintAnswers(ids, force){
  const box = document.getElementById('printAnswers');
  const toggle = document.getElementById('includeAnswersToggle');
  if((!force && !toggle.checked) || ids.length===0){
    box.classList.remove('has-content');
    box.innerHTML='';
    return;
  }
  const items = ids.map(id=>QUESTIONS.find(q=>q.id===id)).filter(Boolean);
  box.innerHTML = '<h2>Answers</h2>' + items.map(q=>`
    <div class="answer-item">
      <span class="answer-source">${sourceTag(q)}</span>
      <div class="answer-box"><strong>Answer:</strong> ${mathText(q.answer)}<hr style="border:none;border-top:1px solid var(--card-border);margin:10px 0;"><strong>Mark scheme:</strong><br>${mathMarkscheme(q.markscheme)}</div>
    </div>
  `).join('');
  box.classList.add('has-content');
}
function resetPrintAnswers(){
  document.getElementById('printAnswers').classList.remove('has-content');
  document.getElementById('printAnswers').innerHTML='';
}

document.getElementById("printSelected").addEventListener('click',()=>{
  const ids=[];
  document.querySelectorAll('.card').forEach(c=>{
    const cb=c.querySelector('input[type=checkbox]');
    const show = cb.checked;
    c.classList.toggle('print-hide', !show);
    if(show) ids.push(cb.dataset.id);
  });
  buildPrintAnswers(ids);
  window.print();
  setTimeout(()=>{document.querySelectorAll('.card').forEach(c=>c.classList.remove('print-hide'));resetPrintAnswers();},500);
});
function printOne(id){
  document.querySelectorAll('.card').forEach(c=>{
    const cb=c.querySelector('input[type=checkbox]');
    c.classList.toggle('print-hide', cb.dataset.id!==id);
  });
  buildPrintAnswers([id], true);
  window.print();
  setTimeout(()=>{document.querySelectorAll('.card').forEach(c=>c.classList.remove('print-hide'));resetPrintAnswers();},500);
}

buildStrandChips();
buildSubtopicOptions();
render();
</script>
</div>
