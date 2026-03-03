document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Active link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 80);
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => io.observe(el));

  // Quote form
  const qf = document.getElementById('quoteForm');
  if (qf) {
    qf.addEventListener('submit', e => {
      e.preventDefault();
      const name = qf.querySelector('input[type=text]');
      alert('Thanks ' + (name ? name.value : '') + '. We will send your quote within the hour.');
      qf.reset();
    });
  }

  // Track form
  const tf = document.getElementById('trackForm');
  if (tf) {
    tf.addEventListener('submit', e => {
      e.preventDefault();
      const val = document.getElementById('trackingInput').value.trim();
      if (val.length < 3) { alert('Please enter a valid tracking number.'); return; }
      document.getElementById('resultId').textContent = val.toUpperCase();
      document.getElementById('resultStatus').textContent = 'In Transit';
      document.getElementById('resultDest').textContent = 'London, UK';
      document.getElementById('resultEta').textContent = '3 days';
      const result = document.getElementById('trackResult');
      result.classList.add('active');
      result.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

});
