---
layout: default
title: Contact
description: Get in touch with Operation Maths for tuition enquiries or worksheet questions.
permalink: /contact/
<!-- Netlify Forms — name attribute registers form with Netlify on first deploy -->
<section class="contact-section container">
  <h1>Contact</h1>
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <p class="hidden"><label>Don't fill this in: <input name="bot-field"></label></p>
    <div class="form-group">
      <label for="name">Your name</label>
      <input type="text" id="name" name="name" required>
    </div>

    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" id="email" name="email" required>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required></textarea>
    </div>

    <button type="submit" class="btn btn--primary">Send message</button>
</form>
</section>
