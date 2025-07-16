// script.js
// ——— Matrix + Logo + Typewriter Intro ————————————————————————

const canvas   = document.getElementById('matrix');
const ctx      = canvas.getContext('2d');
const logo     = document.querySelector('.logo');
const fontSize = 16;
const DURATION = 4000;
let columns, drops, gradient, rafId;

// 1) Resize & init
function resize() {
  const dpr   = Math.min(window.devicePixelRatio || 1, 1);
  canvas.style.width  = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  canvas.width  = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  columns = Math.floor(innerWidth / fontSize);
  drops   = Array(columns).fill(1);

  gradient = ctx.createLinearGradient(0, 0, 0, innerHeight);
  gradient.addColorStop(0,   '#3399FF');
  gradient.addColorStop(0.5, '#66FFFF');
  gradient.addColorStop(1,   '#99FFFF');
}
window.addEventListener('resize', resize);
resize();

// 2) Draw matrix
function drawMatrix() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  ctx.fillStyle = gradient;
  ctx.font      = `${fontSize}px monospace`;

  for (let i = 0; i < columns; i++) {
    const char = String.fromCharCode(0x30A0 + Math.random() * 96);
    const x    = i * fontSize;
    const y    = drops[i] * fontSize;
    ctx.fillText(char, x, y);
    if (y > innerHeight && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }

  rafId = requestAnimationFrame(drawMatrix);
}
rafId = requestAnimationFrame(drawMatrix);

// 3) Typewriter
function typeWithCursor(text, el, speed = 50, cb) {
  let i = 0;
  function step() {
    if (i < text.length) {
      el.textContent = text.slice(0, i + 1) + '_';
      i++;
      setTimeout(step, speed);
    } else {
      el.textContent = text;
      if (cb) cb();
    }
  }
  step();
}

// 4) Show main content
function showMain() {
  const main = document.getElementById('mainContent');
  main.style.display       = 'block';
  main.style.pointerEvents = 'auto';
  setTimeout(() => {
    main.style.opacity = 1;
    typeWithCursor(
      'Human, please scroll down to see our products made from AI for humans.',
      document.getElementById('typewriter'),
      50
    );
  }, 50);
}

// 5) Intro sequence
function start() {
  cancelAnimationFrame(rafId);
  canvas.style.transition = 'opacity .5s';
  canvas.style.opacity    = 0;

  setTimeout(() => {
    logo.style.opacity = 1;
    setTimeout(() => {
      logo.style.opacity = 0;
      setTimeout(showMain, 300);
    }, 2000);
  }, 500);
}

// Kick off
if (document.readyState === 'complete') {
  setTimeout(start, DURATION);
} else {
  window.addEventListener('load', () => setTimeout(start, DURATION));
}

// 6) Smooth wheel → scroll mainContent
document.addEventListener('wheel', e => {
  const main = document.getElementById('mainContent');
  if (getComputedStyle(main).display !== 'none') {
    e.preventDefault();
    main.scrollBy({ top: e.deltaY, left: 0, behavior: 'smooth' });
  }
}, { passive: false });
