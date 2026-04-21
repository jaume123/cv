/* ================================================
   JAIME FERRER — Portfolio Main Script
   ================================================ */

// ---- PARTICLE CANVAS ----
(function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -999, y: -999 };
  const N = 70, DIST = 130;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Dot {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : (Math.random() < .5 ? -10 : H + 10);
      this.vx = (Math.random() - .5) * .55;
      this.vy = (Math.random() - .5) * .55;
      this.r = Math.random() * 1.8 + .8;
      this.a = Math.random() * .5 + .15;
    }
    update() {
      // subtle attraction to mouse
      const dx = mouse.x - this.x, dy = mouse.y - this.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 160) {
        this.vx += dx / d * .012;
        this.vy += dy / d * .012;
      }
      this.vx *= .995; this.vy *= .995;
      this.x += this.vx; this.y += this.vy;
      if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${this.a})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: N }, () => new Dot());
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const a = (1 - d / DIST) * .25;
          ctx.strokeStyle = `rgba(99,102,241,${a})`;
          ctx.lineWidth = .8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', () => { resize(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  init();
  frame();
})();

// ---- TYPED ANIMATION ----
(function () {
  const el = document.getElementById('typed');
  if (!el) return;
  const phrases = [
    'Junior DAM & SMR Fullstack Developer',
    'Angular & React Dev',
    'Backend con NestJS & Java',
    'Cloud: Azure · Vercel · Render',
  ];
  let pi = 0, ci = 0, del = false;

  function tick() {
    const phrase = phrases[pi];
    el.textContent = del
      ? phrase.substring(0, --ci)
      : phrase.substring(0, ++ci);

    if (!del && ci === phrase.length) {
      setTimeout(() => { del = true; }, 2200);
      setTimeout(tick, 2400);
    } else if (del && ci === 0) {
      del = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(tick, 300);
    } else {
      setTimeout(tick, del ? 45 : 75);
    }
  }
  setTimeout(tick, 600);
})();

// ---- NAVBAR ----
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', onScroll, { passive: true });
function onScroll() {
  navbar.classList.toggle('solid', window.scrollY > 16);
  updateActiveNav();
  document.getElementById('btt').classList.toggle('show', window.scrollY > 400);
}

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nl').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const pos = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nl[href="#${sec.id}"]`);
    if (!link) return;
    const active = pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle('active', active);
  });
}

// ---- BACK TO TOP ----
document.getElementById('btt').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- REVEAL ON SCROLL ----
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

// stagger siblings in grids
document.querySelectorAll('.tech-grid, .about-cards, .edu-grid, .contact-grid, .tl-tags').forEach(grid => {
  [...grid.children].forEach((child, i) => {
    child.style.transitionDelay = `${i * 60}ms`;
  });
});

// ---- SKILL BARS ----
const barsObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.w + '%';
        }, i * 120);
      });
      barsObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

const barsWrap = document.querySelector('.bars-wrap');
if (barsWrap) barsObs.observe(barsWrap);

// ---- COUNTER ANIMATION ----
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.hstat-n').forEach(el => {
        const target = +el.dataset.to;
        let n = 0, step = target / 50;
        const t = setInterval(() => {
          n = Math.min(n + step, target);
          el.textContent = Math.floor(n);
          if (n >= target) clearInterval(t);
        }, 28);
      });
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

const stats = document.querySelector('.hero-stats');
if (stats) counterObs.observe(stats);

// ---- TCARD STAGGER ----
document.querySelectorAll('.skill-cat').forEach(cat => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.tcard').forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, i * 55);
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cat.querySelectorAll('.tcard').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(20px) scale(.95)';
    c.style.transition = 'opacity .4s ease, transform .4s ease';
  });
  obs.observe(cat);
});

// ---- TIMELINE DOT GLOW ON VIEW ----
document.querySelectorAll('.tl-item').forEach(item => {
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      item.querySelector('.tl-dot')?.classList.add('active-dot');
    }
  }, { threshold: 0.5 });
  obs.observe(item);
});

// initial call
onScroll();
