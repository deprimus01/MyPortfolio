// ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // ── TYPING CURSOR ──
  const tag = document.querySelector('.hero-tag');
  setInterval(() => {
    tag.style.borderRight = tag.style.borderRight ? '' : '2px solid var(--accent)';
  }, 600);

  // ── DARK / LIGHT MODE TOGGLE ──
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const saved  = localStorage.getItem('theme');
  if (saved === 'light') { document.body.classList.add('light'); icon.textContent = '☀️'; }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    icon.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // ── CV DOWNLOAD ──
  document.getElementById('cvBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const cvContent = `PRIMUS — CURRICULUM VITAE\n================================\n\nCONTACT\n-------\nEmail   : primus@email.com\nGitHub  : github.com/primus\nLinkedIn: linkedin.com/in/primus\n\nEDUCATION\n---------\nB.Sc. Computer Science — Current Student\n\nCourses:\n  • Introduction to Web Development (HTML, CSS, JS)\n  • CSC 202 — Computer Science Fundamentals\n  • CSC 207 — Java Programming\n  • CSC 212 — Data Structures & Algorithms\n  • CSC 214 — Advanced Programming (Java)\n\nSKILLS\n------\nLanguages  : Java, Python, JavaScript, HTML5, CSS3, PHP, SQL\nWeb Dev    : Responsive Design, DOM Manipulation, REST APIs, MySQL, Node.js, React\nCS Concepts: Data Structures, Algorithms, OOP, Sorting, Recursion, Networking\nTools      : Git, GitHub, VS Code, IntelliJ IDEA, Linux, IP Addressing\n\nPROJECTS\n--------\n1. New Generation Computer\n   E-commerce website for laptops and accessories.\n   Tech: HTML, CSS, JavaScript, PHP, MySQL\n\n2. Java Algorithm Suite\n   Collection of Java programs: prime numbers, factorials,\n   Fibonacci series, sorting algorithms, grade calculators.\n   Tech: Java, OOP, Algorithms (CSC 207)\n\n3. SIWES Technical Report\n   Industrial training report covering web development,\n   networking, IP addressing, and Python scripting.\n   Tech: Python, Networking, IP Addressing, Web Dev\n\n4. CSC 212 Assignment\n   Advanced data structures and algorithms implementation.\n   Tech: Java, Data Structures (CSC 212)\n\n5. Personal Portfolio Website\n   Responsive portfolio with animations and dark/light mode.\n   Tech: HTML, CSS, JavaScript\n\n================================\nGenerated from primus-portfolio.html\n`;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'Primus_CV.txt';
    a.click(); URL.revokeObjectURL(url);
  });

  // ── CONTACT FORM ──
  document.getElementById('formSubmitBtn').addEventListener('click', function() {
    const name    = document.getElementById('fname').value.trim();
    const email   = document.getElementById('femail').value.trim();
    const subject = document.getElementById('fsubject').value.trim();
    const message = document.getElementById('fmessage').value.trim();
    const status  = document.getElementById('formStatus');

    if (!name || !email || !subject || !message) {
      status.textContent = '⚠ Please fill in all fields.';
      status.className   = 'form-status error';
      return;
    }
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
      status.textContent = '⚠ Please enter a valid email address.';
      status.className   = 'form-status error';
      return;
    }

    const btn = document.getElementById('formSubmitBtn');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
      status.textContent = "✓ Message sent! I'll get back to you soon.";
      status.className   = 'form-status success';
      btn.textContent    = 'Send Message';
      btn.style.opacity  = '1';
      document.getElementById('fname').value    = '';
      document.getElementById('femail').value   = '';
      document.getElementById('fsubject').value = '';
      document.getElementById('fmessage').value = '';
    }, 1200);
  });
  console.log("js don connect")