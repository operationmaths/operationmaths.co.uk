---
layout: default
title: Contact
description: Get in touch with Operation Maths for tuition enquiries or worksheet questions.
permalink: /contact/
---

<main>
  <section class="contact-card">
    <div class="contact-left">
      <h2>Send me a message</h2>
      <p>Feel free to get in touch if you have any questions about the Year 6 maths SATs course, if you have spotted a mistake on one of the worksheets, or if there is anything else I can help with.</p>
      <p>You can fill in the form or email me directly at <a class="email-plain" href="mailto:operationmaths123@gmail.com">operationmaths123@gmail.com</a> and I'll get back to you as soon as possible.</p>
    </div>
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="contact-form">
      <input type="hidden" name="form-name" value="contact">
      <p class="hidden"><label>Don't fill this in: <input name="bot-field"></label></p>
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
          <option value="sats-course">Maths SATs course</option>
          <option value="worksheets">Worksheets</option>
          <option value="books">Books</option>
          <option value="online-tests">Online maths tests</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" required></textarea>
      </div>
      <button type="submit" class="btn-green">Send message</button>
    </form>
  </section>
</main>
