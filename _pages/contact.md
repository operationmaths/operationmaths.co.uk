---
layout: default
title: Contact
description: Get in touch with Operation Maths about worksheets, papers, books or the online maths tools.
permalink: /contact/
---

<section class="om-hero" style="min-height:0; padding: 4rem 2rem 1rem;">
  <h1>Get in <em>touch</em></h1>
</section>

<main>
  <div class="om-body">
    <div class="contact-card-full">
      <div class="contact-left">
        <h2>Send me a message</h2>
        <p>Feel free to get in touch if you have any questions about the worksheets, papers, books or online tools, if you have spotted a mistake, or if there is anything else I can help with.</p>
        <p>You can fill in the form or email me directly at <a class="email-plain" href="mailto:operationmaths123@gmail.com">operationmaths123@gmail.com</a> and I'll get back to you as soon as possible.</p>
      </div>
      <form id="contact-form" class="contact-form">
        <p class="hidden"><label>Don't fill this in: <input name="bot-field" id="bot-field"></label></p>
        <div class="form-row">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required>
          </div>
        </div>
        <div>
          <label for="subject">What is your enquiry about?</label>
          <select id="subject" name="subject">
            <option value="">Please select</option>
            <option value="worksheets">Worksheets</option>
            <option value="sats-papers">Maths SATs papers</option>
            <option value="gcse-papers">GCSE maths papers</option>
            <option value="online-tests">Online maths tests</option>
            <option value="question-generator">Question generator</option>
            <option value="books">Books</option>
            <option value="mistake">Spotted a mistake</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send message</button>
      </form>
      <div id="contact-success" style="display:none; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
        <p style="color:var(--green); font-weight:700; font-size:1.1rem;">✓ Thank you – your message has been sent!</p>
        <p>I'll get back to you as soon as possible.</p>
      </div>
    </div>
  </div>
</main>

<script>
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (document.getElementById('bot-field').value) return;
    var form = this;
    var data = new FormData(form);
    fetch('https://formspree.io/f/mdajjqyq', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
      if (response.ok) {
        form.style.display = 'none';
        document.getElementById('contact-success').style.display = 'flex';
      } else {
        alert('Something went wrong – please try again or email me directly.');
      }
    })
    .catch(function() {
      alert('Something went wrong – please try again or email me directly.');
    });
  });
</script>
