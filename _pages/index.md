---
layout: default
title: Maths Worksheets & Tuition
description: Operation Maths provides worksheets, books and tuition to support primary and secondary students in England.
permalink: /
body_class: page-home
---

<main>
  <section class="om-hero" aria-label="Hero">
    <div class="om-hero-content">
      <h1>More practice, <em>better results</em></h1>
      <p>Worksheets, SATs resources and maths books for primary and secondary students. Every worksheet topic includes 7 sheets, so there's always another chance to build confidence and fluency. Worksheet A is always free.</p>
    </div>
    <div class="om-hero-btns">
      <a href="{{ site.baseurl }}/worksheets/" class="om-btn-green">Browse free worksheets</a>
      <a href="{{ site.baseurl }}/sats-course" class="om-btn-dark-outline">SATs course <span class="btn-arrow" style="display:inline-block; transform:rotate(-90deg);">↓</span></a>
    </div>
    <div class="om-hero-ws-row">
      <div class="om-hero-ws"><img src="{{ site.baseurl }}/assets/images/hero-ws-1.jpg" alt="Expand and factorise worksheet"></div>
      <div class="om-hero-ws"><img src="{{ site.baseurl }}/assets/images/hero-ws-2.jpg" alt="Metric conversions worksheet"></div>
      <div class="om-hero-ws om-hero-ws-tall"><img src="{{ site.baseurl }}/assets/images/hero-ws-3.jpg" alt="All operations worksheet"></div>
      <div class="om-hero-ws"><img src="{{ site.baseurl }}/assets/images/hero-ws-4.jpg" alt="Parts of a circle worksheet"></div>
      <div class="om-hero-ws"><img src="{{ site.baseurl }}/assets/images/hero-ws-5.jpg" alt="9 times table worksheet"></div>
    </div>
  </section>

  <section aria-label="What's on Operation Maths">
    <div class="om-strip">
      <a class="om-strip-item" style="--sc:var(--blue)" href="{{ site.baseurl }}/worksheets/">
        <div class="om-strip-title">Worksheets</div>
        <div class="om-strip-sub">Free worksheet A with every set</div>
      </a>
      <a class="om-strip-item" style="--sc:var(--green)" href="{{ site.baseurl }}/maths-sats-papers">
        <div class="om-strip-title">Maths SATs papers</div>
        <div class="om-strip-sub">Key Stage 2 practice papers</div>
      </a>
      <a class="om-strip-item" style="--sc:var(--blue)" href="{{ site.baseurl }}/online-maths-tests">
        <div class="om-strip-title">Online maths tests</div>
        <div class="om-strip-sub">Times tables and more</div>
      </a>
      <a class="om-strip-item" style="--sc:var(--orange)" href="{{ site.baseurl }}/books">
        <div class="om-strip-title">Books</div>
        <div class="om-strip-sub">Available on Amazon</div>
      </a>
      <a class="om-strip-item" style="--sc:var(--purple)" href="{{ site.baseurl }}/sats-course">
        <div class="om-strip-title">SATs course</div>
        <div class="om-strip-sub">Revision for Year 6</div>
      </a>
    </div>
  </section>

  <div class="om-body">

    <section aria-labelledby="latest-worksheets-heading">
      <div class="om-section-hd">
        <h2 id="latest-worksheets-heading">Latest worksheets</h2>
        <a href="{{ site.baseurl }}/worksheets/">Browse all worksheets</a>
      </div>
      <div class="om-latest">
        {% assign dated_worksheets = site.worksheets | where_exp: "ws", "ws.date_added" %}
        {% for ws in dated_worksheets limit: 3 %}
          {% if ws.topic == "number" %}{% assign topic_color = "var(--blue)" %}
          {% elsif ws.topic == "shape" %}{% assign topic_color = "var(--orange)" %}
          {% elsif ws.topic == "algebra" %}{% assign topic_color = "var(--green)" %}
          {% elsif ws.topic == "formulae" %}{% assign topic_color = "var(--purple)" %}
          {% elsif ws.topic == "times-tables" %}{% assign topic_color = "var(--blue)" %}
          {% elsif ws.topic == "support-sheets" %}{% assign topic_color = "var(--orange)" %}
          {% else %}{% assign topic_color = "var(--blue)" %}{% endif %}
          {% assign topic_label = ws.topic | replace: "-", " " | capitalize %}
        <article class="om-latest-card">
          <div class="om-latest-card-top" style="background:{{ topic_color }}"></div>
          <div class="om-ws-img">
            {% if ws.thumbnail %}
              <img src="{{ site.baseurl }}{{ ws.thumbnail }}" alt="{{ ws.title }}" style="width:100%; height:100%; object-fit:contain;">
            {% else %}
              <div class="om-ws-img-inner {{ ws.orientation | default: 'portrait' }}" role="img" aria-label="{{ ws.title }} worksheet preview">
                <div class="om-wsi-title" style="background:{{ topic_color }}"></div>
                <div class="om-wsi-row"><div class="om-wsi-num">1</div><div class="om-wsi-line f"></div><div class="om-wsi-box"></div></div>
                <div class="om-wsi-row"><div class="om-wsi-num">2</div><div class="om-wsi-line m"></div><div class="om-wsi-box"></div></div>
                <div class="om-wsi-row"><div class="om-wsi-num">3</div><div class="om-wsi-line f"></div><div class="om-wsi-box"></div></div>
                <div class="om-wsi-row"><div class="om-wsi-num">4</div><div class="om-wsi-line s"></div><div class="om-wsi-box"></div></div>
                {% if ws.orientation != "landscape" %}
                <div class="om-wsi-row"><div class="om-wsi-num">5</div><div class="om-wsi-line m"></div><div class="om-wsi-box"></div></div>
                {% endif %}
              </div>
            {% endif %}
          </div>
          <div class="om-latest-card-body">
            <div class="om-latest-tag">{{ topic_label }}</div>
            <h3 class="om-latest-title">{{ ws.title }}</h3>
            {% if ws.description %}<p class="om-latest-desc">{{ ws.description }}</p>{% endif %}
            <div class="om-latest-btns">
              {% assign free_pdf_clean = ws.free_pdf | strip %}
              {% if free_pdf_clean.size > 0 %}
                {% if ws.show_a_worksheet == false %}
                  <a class="om-cbtn om-cbtn-ws" href="{{ site.baseurl }}{{ free_pdf_clean }}">Worksheet</a>
                {% else %}
                  <a class="om-cbtn om-cbtn-ws" href="{{ site.baseurl }}{{ free_pdf_clean }}">Worksheet (A)</a>
                {% endif %}
              {% endif %}
              {% assign answers_pdf_clean = ws.answers_pdf | strip %}
              {% if answers_pdf_clean.size > 0 %}
                {% if ws.show_a_answers == false %}
                  <a class="om-cbtn om-cbtn-ans" href="{{ site.baseurl }}{{ answers_pdf_clean }}">Answers</a>
                {% else %}
                  <a class="om-cbtn om-cbtn-ans" href="{{ site.baseurl }}{{ answers_pdf_clean }}">Answers (A)</a>
                {% endif %}
              {% endif %}
              {% assign tes_url_clean = ws.tes_url | strip %}
              {% if tes_url_clean.size > 0 %}
                <a class="om-cbtn om-cbtn-tes" href="{{ tes_url_clean }}" target="_blank" rel="noopener">Full pack on TES <span class="btn-arrow" style="display:inline-block; transform:rotate(-135deg);">↓</span></a>
              {% endif %}
            </div>
          </div>
        </article>
        {% endfor %}
      </div>
    </section>

    <hr class="om-divider">

    <section aria-labelledby="books-heading">
      <div class="om-section-hd">
        <h2 id="books-heading">Books by Operation Maths</h2>
        <a href="{{ site.baseurl }}/books">View all books</a>
      </div>
      <div class="om-books">
        <a class="om-book-card" href="https://www.amazon.co.uk/dp/B09DJ7LQ3S/" target="_blank" rel="noopener">
          <div class="om-book-cover" style="background:#f5f6f8; height:auto; padding:1.25rem 0;">
            <img src="{{ site.baseurl }}/assets/images/6-times-table-book-front.PNG" alt="6 Times Table: 26 Times Table Tests" style="width:auto; max-width:80%; max-height:200px; object-fit:contain; border-radius:4px; box-shadow:3px 3px 12px rgba(0,0,0,0.18); display:block; margin:0 auto;">
          </div>
          <div class="om-book-body">
            <h3 class="om-book-title">6 Times Table: 26 Times Table Tests</h3>
            <p class="om-book-sub">Repeated practice to build times table fluency.</p>
            <span class="om-book-btn">View on Amazon <span class="btn-arrow" style="display:inline-block; transform:rotate(-135deg);">↓</span></span>
          </div>
        </a>
        <a class="om-book-card" href="https://www.amazon.co.uk/dp/B0C87F2ZJ8/" target="_blank" rel="noopener">
          <div class="om-book-cover" style="background:#f5f6f8; height:auto; padding:1.25rem 0;">
            <img src="{{ site.baseurl }}/assets/images/Number-bonds-to-10-front.PNG" alt="Number Bonds to 10: 26 Number Bond Tests" style="width:auto; max-width:80%; max-height:200px; object-fit:contain; border-radius:4px; box-shadow:3px 3px 12px rgba(0,0,0,0.18); display:block; margin:0 auto;">
          </div>
          <div class="om-book-body">
            <h3 class="om-book-title">Number Bonds to 10: 26 Number Bond Tests</h3>
            <p class="om-book-sub">Build number bond confidence through structured testing.</p>
            <span class="om-book-btn">View on Amazon <span class="btn-arrow" style="display:inline-block; transform:rotate(-135deg);">↓</span></span>
          </div>
        </a>
        <a class="om-book-card" href="https://www.amazon.co.uk/dp/B09DMTZGLH/" target="_blank" rel="noopener">
          <div class="om-book-cover" style="background:#f5f6f8; height:auto; padding:1.25rem 0;">
            <img src="{{ site.baseurl }}/assets/images/8-times-table-book-front.PNG" alt="8 Times Table: 26 Times Table Tests" style="width:auto; max-width:80%; max-height:200px; object-fit:contain; border-radius:4px; box-shadow:3px 3px 12px rgba(0,0,0,0.18); display:block; margin:0 auto;">
          </div>
          <div class="om-book-body">
            <h3 class="om-book-title">8 Times Table: 26 Times Table Tests</h3>
            <p class="om-book-sub">Repeated practice to build times table fluency.</p>
            <span class="om-book-btn">View on Amazon <span class="btn-arrow" style="display:inline-block; transform:rotate(-135deg);">↓</span></span>
          </div>
        </a>
      </div>
    </section>

    <section aria-labelledby="sats-course-heading">
      <div class="om-sats">
        <div>
          <h2 id="sats-course-heading">Preparing for SATs?</h2>
          <p>Structured revision course with practice papers and worked examples for Year 6 pupils.</p>
          <a href="{{ site.baseurl }}/sats-course" class="om-btn-blue">View SATs course <span class="btn-arrow" style="display:inline-block; transform:rotate(-90deg);">↓</span></a>
        </div>
        <img src="{{ site.baseurl }}/assets/images/SATs-booklets.png" alt="SATs resource pack booklets" style="width:100%; max-width:380px; border-radius:8px; display:block;">
      </div>
    </section>

  </div>
</main>
