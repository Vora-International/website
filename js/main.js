// ============================================================
// VORA INTERNATIONAL — Shared JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ─────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile drawer ─────────────────────────────────────── */
  const drawer     = document.getElementById('mobile-drawer');
  const hamburger  = document.getElementById('hamburger');
  const mobileClose = document.getElementById('mobile-close');

  hamburger?.addEventListener('click', () => {
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  const closeDrawer = () => {
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
  };
  mobileClose?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ── Hero image loaded ─────────────────────────────────── */
  document.querySelectorAll('.hero-img').forEach(el => {
    const style = window.getComputedStyle(el);
    const url = style.backgroundImage.match(/url\(["']?(.+?)["']?\)/)?.[1];
    if (url) {
      const img = new Image();
      img.onload = () => el.classList.add('loaded');
      img.src = url;
    } else {
      el.classList.add('loaded');
    }
  });

  /* ── Scroll reveal ─────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.fade-up, .fade-in');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ── Product tabs ──────────────────────────────────────── */
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + t)?.classList.add('active');
    });
  });

  /* ── Contact form ──────────────────────────────────────── */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }, 1400);
  });

  /* ── Active nav link ───────────────────────────────────── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html') ||
        (href !== 'index.html' && path.includes(href.replace('.html', '')))) {
      a.classList.add('active');
    }
  });

  /* ── Smooth scroll for in-page anchors ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});
