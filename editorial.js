(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s) => document.querySelector(s);
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = $('.mobile-menu-toggle');
  const mobileNav = $('#mobile-nav');
  if (menuButton && mobileNav) {
    const closeMenu = () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      menuButton.querySelector('span').textContent = '+';
    };
    menuButton.addEventListener('click', () => {
      const open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menuButton.querySelector('span').textContent = open ? '×' : '+';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -25px 0px', threshold: .06 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.hidden = false;
  const status = document.querySelector('#contact-status');
  const message = document.querySelector('#contact-message');
  message.addEventListener('input', () => {
    document.querySelector('#message-count').textContent = message.value.length.toLocaleString('en-AU');
    status.textContent = '';
  });
  const draft = () => {
    const data = new FormData(form);
    return {subject: String(data.get('topic')), body: `Hi Kathy,\n\n${String(data.get('message')).trim()}\n\n${String(data.get('name')).trim()}\nReply to: ${String(data.get('email')).trim()}`};
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const {subject, body} = draft();
    status.textContent = 'Your draft is ready in your email app. If it did not open, use Copy message and email me directly.';
    window.location.href = `mailto:karthikapillai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    if (!form.reportValidity()) return;
    const {subject, body} = draft();
    try {
      await navigator.clipboard.writeText(`To: karthikapillai@gmail.com\nSubject: ${subject}\n\n${body}`);
      status.textContent = 'Copied. Paste into your email app and send when ready.';
    } catch {
      status.textContent = 'Clipboard access is unavailable. You can select your message and copy it manually, or open an email draft.';
    }
  });
})();
