(function () {
  var root = document.documentElement; root.classList.add('js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
  document.querySelectorAll('[data-reveal], .vis').forEach(function (el) { io.observe(el); });
  var links = document.querySelectorAll('.nav li a');
  var no = new IntersectionObserver(function (es) { es.forEach(function (e) { if (!e.isIntersecting) return; links.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id); }); }); }, { rootMargin: '-40% 0px -55% 0px' });
  links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) no.observe(s); });
  if (reduce) return;
  var words = document.querySelectorAll('#h1 .w');
  words.forEach(function (w, i) { w.style.opacity = 0; w.style.transform = 'translateY(.5em)'; w.style.transition = 'opacity .8s var(--ease) ' + (80 + i * 70) + 'ms, transform .8s var(--ease) ' + (80 + i * 70) + 'ms'; });
  requestAnimationFrame(function () { requestAnimationFrame(function () { words.forEach(function (w) { w.style.opacity = 1; w.style.transform = 'none'; }); }); });
  var m = document.getElementById('mosaic'), ticking = false;
  addEventListener('scroll', function () { if (ticking) return; ticking = true; requestAnimationFrame(function () { ticking = false; var y = Math.min(scrollY, 1200); if (m) m.style.transform = 'translateX(calc(-50% - ' + (y * .18).toFixed(1) + 'px)) rotateX(24deg) rotateZ(-3deg)'; }); }, { passive: true });
})();
