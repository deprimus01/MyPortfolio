// ── AOS INIT ──
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });

// ── PARTICLES ──
particlesJS('particles-js', {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: ['#6ee7f7', '#a78bfa', '#f472b6'] },
    shape: { type: 'circle' },
    opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.05 } },
    size: { value: 2, random: true },
    line_linked: { enable: true, distance: 130, color: '#1e1e32', opacity: 0.3, width: 1 },
    move: { enable: true, speed: 1.2, direction: 'none', random: true, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
    modes: { grab: { distance: 140, line_linked: { opacity: 0.6 } }, push: { particles_nb: 3 } }
  },
  retina_detect: true
});

// ── TYPED.JS ──
new Typed('#typed-el', {
  strings: [
    'Java Developer',
    'Web Developer',
    'Problem Solver',
    'CS Student',
    'Python Enthusiast',
    'Full-Stack Builder'
  ],
  typeSpeed: 60, backSpeed: 35, backDelay: 1800,
  loop: true, showCursor: true, cursorChar: '|'
});

// ── SWIPER ──
new Swiper('.projects-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    640: { slidesPerView: 1.4 },
    900: { slidesPerView: 2.2 },
    1200: { slidesPerView: 3 }
  }
});

// ── CUSTOM CURSOR ──
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, .skill-tag, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform     = 'translate(-50%,-50%) scale(2)';
    cursorRing.style.transform = 'translate(-50%,-50%) scale(1.5)';
    cursorRing.style.opacity   = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform     = 'translate(-50%,-50%) scale(1)';
    cursorRing.style.transform = 'translate(-50%,-50%) scale(1)';
    cursorRing.style.opacity   = '0.55';
  });
});

// ── SCROLL PROGRESS BAR ──
const bar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const max      = document.body.scrollHeight - window.innerHeight;
  bar.style.width = (scrolled / max * 100) + '%';

  // Back to top
  document.getElementById('back-top').classList.toggle('show', scrolled > 400);
});
document.getElementById('back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── DARK / LIGHT MODE ──
const themeBtn  = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeIcon.className = 'fas fa-sun';
}
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ── CV DOWNLOAD ──
document.getElementById('cvBtn').addEventListener('click', e => {
  e.preventDefault();
  const cv = `PRIMUS — CURRICULUM VITAE\n${'='.repeat(40)}\n\nCONTACT\n${'-'.repeat(20)}\nEmail   : primus@email.com\nGitHub  : github.com/primus\nLinkedIn: linkedin.com/in/primus\n\nEDUCATION\n${'-'.repeat(20)}\nB.Sc. Computer Science — Current Student\n\nCourses:\n  • Introduction to Web Development (HTML, CSS, JS)\n  • CSC 202 — Computer Science Fundamentals\n  • CSC 207 — Java Programming\n  • CSC 212 — Data Structures & Algorithms\n  • CSC 214 — Advanced Programming (Java)\n\nSKILLS\n${'-'.repeat(20)}\nLanguages  : Java, Python, JavaScript, HTML5, CSS3, PHP, SQL\nWeb Dev    : Responsive Design, REST APIs, MySQL, Node.js, React\nCS Concepts: Data Structures, Algorithms, OOP, Sorting, Recursion\nTools      : Git, GitHub, VS Code, IntelliJ IDEA, Linux\n\nPROJECTS\n${'-'.repeat(20)}\n1. New Generation Computer — E-commerce site (HTML,CSS,JS,PHP,MySQL)\n2. Java Algorithm Suite    — Algorithms & OOP programs (Java, CSC 207)\n3. SIWES Technical Report  — Web dev, Networking, Python\n4. CSC 212 Assignment      — Data Structures (Java)\n5. Personal Portfolio      — Full portfolio site (HTML,CSS,JS)\n\n${'='.repeat(40)}\nGenerated ${new Date().toLocaleDateString()}\n`;
  const blob = new Blob([cv], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: 'Primus_CV.txt' });
  a.click(); URL.revokeObjectURL(url);
});

// ── CONTACT FORM ──
document.getElementById('formSubmitBtn').addEventListener('click', () => {
  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const subject = document.getElementById('fsubject').value.trim();
  const message = document.getElementById('fmessage').value.trim();
  const status  = document.getElementById('formStatus');
  const btn     = document.getElementById('formSubmitBtn');

  if (!name || !email || !subject || !message) {
    status.textContent = '⚠ Please fill in all fields.';
    status.className   = 'form-status error'; return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = '⚠ Please enter a valid email address.';
    status.className   = 'form-status error'; return;
  }
  btn.innerHTML  = '<i class="fas fa-spinner fa-spin" style="margin-right:0.5rem"></i> Sending...';
  btn.style.opacity = '0.75';
  setTimeout(() => {
    status.textContent = "✓ Message sent! I'll get back to you soon.";
    status.className   = 'form-status success';
    btn.innerHTML      = '<i class="fas fa-paper-plane" style="margin-right:0.5rem"></i> Send Message';
    btn.style.opacity  = '1';
    ['fname','femail','fsubject','fmessage'].forEach(id => document.getElementById(id).value = '');
  }, 1400);
});
