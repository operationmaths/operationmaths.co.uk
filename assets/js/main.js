/* ─────────────────────────────────────────
   Operation Maths — main.js
   Mobile hamburger / drawer behaviour
───────────────────────────────────────── */

(function () {
  'use strict';

  const hamburger = document.querySelector('.hamburger');
  const drawer    = document.getElementById('mobile-drawer');
  const overlay   = document.getElementById('drawer-overlay');

  if (!hamburger || !drawer) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
  }

  hamburger.addEventListener('click', function () {
    if (drawer.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      hamburger.focus();
    }
  });

  // Netlify Identity redirect after login
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', function (user) {
      if (!user) {
        window.netlifyIdentity.on('login', function () {
          document.location.href = '/admin/';
        });
      }
    });
  }
}());
