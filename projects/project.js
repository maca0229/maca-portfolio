/* ─── PAGE PEEL DRAG INTERACTION ─── */
(function () {
  const dragBar      = document.getElementById('drag-bar');
  const dragBarRight = document.getElementById('drag-bar-right');
  const pagePeel     = document.getElementById('page-peel');
  const pageEdge     = document.getElementById('page-edge');
  const BAR_W        = 38;
  let isDragging = false;
  let currentX   = 0;

  function setReveal(x, animate) {
    const clamped = Math.max(0, Math.min(x, innerWidth));
    if (animate) {
      pagePeel.style.transition = 'clip-path 0.45s cubic-bezier(0.4,0,0.2,1)';
      pageEdge.style.transition = 'left 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s';
    } else {
      pagePeel.style.transition = 'none';
      pageEdge.style.transition = 'none';
    }
    pagePeel.style.clipPath = `inset(0 ${innerWidth - clamped}px 0 0)`;
    pageEdge.style.left     = clamped + 'px';
    pageEdge.style.opacity  = (clamped > BAR_W + 4 && clamped < innerWidth - 4) ? '1' : '0';
    currentX = clamped;
  }

  function snapTo(target) {
    const bw = target > 0;
    dragBar.classList.toggle('bw-mode', bw);
    dragBar.classList.toggle('hidden', bw);
    dragBarRight.classList.toggle('visible', bw);
    localStorage.setItem('bwMode', bw ? '1' : '0');
    setReveal(target, true);
  }

  // Restore state from previous page (no animation)
  if (localStorage.getItem('bwMode') === '1') {
    dragBar.classList.add('bw-mode', 'hidden');
    dragBarRight.classList.add('visible');
    setReveal(innerWidth, false);
  }

  function startDrag(e) { isDragging = true; pagePeel.style.transition = 'none'; pageEdge.style.transition = 'none'; e.preventDefault(); }

  dragBar.addEventListener('mousedown', startDrag);
  dragBarRight.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', e => { if (isDragging) setReveal(e.clientX); });
  document.addEventListener('mouseup', () => { if (!isDragging) return; isDragging = false; snapTo(currentX > innerWidth * 0.4 ? innerWidth : 0); });

  dragBar.addEventListener('touchstart', e => { isDragging = true; pagePeel.style.transition = 'none'; e.preventDefault(); }, { passive: false });
  dragBarRight.addEventListener('touchstart', e => { isDragging = true; pagePeel.style.transition = 'none'; e.preventDefault(); }, { passive: false });
  document.addEventListener('touchmove', e => { if (isDragging) setReveal(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('touchend', () => { if (!isDragging) return; isDragging = false; snapTo(currentX > innerWidth * 0.4 ? innerWidth : 0); });
})();

/* ─── CUSTOM CURSOR ─── */
const cursor     = document.createElement('div'); cursor.className     = 'cursor';
const cursorRing = document.createElement('div'); cursorRing.className = 'cursor-ring';
document.body.append(cursor, cursorRing);

let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animateCursor() {
  rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
  cursor.style.left     = mx + 'px'; cursor.style.top     = my + 'px';
  cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
})();

/* ─── NAV SCROLL ─── */
const nav = document.querySelector('.proj-back');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── HERO CANVAS (subtle texture background) ─── */
function initHeroBg(accentHex) {
  const canvas = document.querySelector('.proj-hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const SHAPES   = ['circle', 'circle', 'square', 'triangle'];
  const TEXTURES = ['stripes', 'wavy', 'annual', 'dots'];
  let cells = [];

  function buildCells() {
    cells = [];
    const R    = Math.min(canvas.width, canvas.height) * 0.055;
    const COLW = R * 1.7;
    const ROWH = R * 1.5;
    const rows = Math.ceil(canvas.height / ROWH) + 2;
    const cols = Math.ceil(canvas.width  / COLW) + 2;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offset = (row % 2) * (COLW / 2);
        cells.push({
          x: col * COLW + offset,
          y: row * ROWH,
          r: R * (0.75 + Math.random() * 0.5),
          shape:   SHAPES[Math.floor(Math.random() * SHAPES.length)],
          texture: TEXTURES[Math.floor(Math.random() * TEXTURES.length)],
          phase:   Math.random() * Math.PI * 2,
          pulse:   0.2 + Math.random() * 0.3,
        });
      }
    }
  }
  buildCells();
  window.addEventListener('resize', buildCells);

  // Drawing helpers (same as homepage)
  function clipToShape(ctx, shape, x, y, r) {
    ctx.beginPath();
    if (shape === 'circle')       ctx.arc(x, y, r, 0, Math.PI * 2);
    else if (shape === 'square')  ctx.rect(x - r * 0.9, y - r * 0.9, r * 1.8, r * 1.8);
    else { ctx.moveTo(x, y - r); ctx.lineTo(x + r * 0.9, y + r * 0.75); ctx.lineTo(x - r * 0.9, y + r * 0.75); ctx.closePath(); }
    ctx.clip();
  }
  function strokeShape(ctx, shape, x, y, r) {
    ctx.beginPath();
    if (shape === 'circle')       ctx.arc(x, y, r, 0, Math.PI * 2);
    else if (shape === 'square')  ctx.rect(x - r * 0.9, y - r * 0.9, r * 1.8, r * 1.8);
    else { ctx.moveTo(x, y - r); ctx.lineTo(x + r * 0.9, y + r * 0.75); ctx.lineTo(x - r * 0.9, y + r * 0.75); ctx.closePath(); }
    ctx.strokeStyle = accentHex; ctx.lineWidth = 0.7; ctx.stroke();
  }
  function drawTexture(ctx, texture, x, y, r, t, phase) {
    if (texture === 'stripes') {
      for (let i = 0; i < 5; i++) {
        const ly = y - r + (r * 2 / 5) * i + r * 0.2;
        ctx.beginPath(); ctx.moveTo(x - r, ly); ctx.lineTo(x + r, ly);
        ctx.strokeStyle = accentHex; ctx.lineWidth = 0.7; ctx.stroke();
      }
    } else if (texture === 'wavy') {
      for (let i = 0; i < 4; i++) {
        const ly = y - r + (r * 2 / 4) * i + r * 0.25;
        ctx.beginPath();
        let first = true;
        for (let px = x - r; px <= x + r; px += 2) {
          const wy = ly + Math.sin((px - x) * 0.28 + t * 0.8 + phase) * r * 0.2;
          if (first) { ctx.moveTo(px, wy); first = false; } else ctx.lineTo(px, wy);
        }
        ctx.strokeStyle = accentHex; ctx.lineWidth = 0.7; ctx.stroke();
      }
    } else if (texture === 'annual') {
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath(); ctx.arc(x, y, r * i / 4, 0, Math.PI * 2);
        ctx.strokeStyle = accentHex; ctx.lineWidth = 0.7; ctx.stroke();
      }
    } else {
      const step = (r * 1.6) / 3;
      for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
        ctx.beginPath();
        ctx.arc(x - r * 0.8 + col * step, y - r * 0.8 + row * step, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = accentHex; ctx.fill();
      }
    }
  }

  let t = 0;
  (function tick() {
    requestAnimationFrame(tick);
    t += 0.016;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const c of cells) {
      const r = c.r * (1 + Math.sin(c.phase + t * c.pulse) * 0.04);
      ctx.save();
      ctx.globalAlpha = 0.18;
      strokeShape(ctx, c.shape, c.x, c.y, r);
      ctx.save();
      clipToShape(ctx, c.shape, c.x, c.y, r - 1);
      drawTexture(ctx, c.texture, c.x, c.y, r, t, c.phase);
      ctx.restore();
      ctx.restore();
    }
  })();
}

/* ─── GSAP ENTRANCE ─── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.proj-type-badge', { opacity: 0, y: 20, duration: 0.7, delay: 0.3, ease: 'power3.out' });
  gsap.from('.proj-num',        { opacity: 0, y: 16, duration: 0.6, delay: 0.45, ease: 'power3.out' });
  gsap.from('.proj-title',      { opacity: 0, y: 40, duration: 1,   delay: 0.55, ease: 'power3.out' });
  gsap.from('.proj-tagline',    { opacity: 0, y: 24, duration: 0.8, delay: 0.75, ease: 'power3.out' });
  gsap.from('.proj-meta',       { opacity: 0, y: 16, duration: 0.7, delay: 0.9,  ease: 'power3.out' });

  gsap.utils.toArray('.proj-section').forEach(el => {
    gsap.from(el, { opacity: 0, y: 32, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 82%' } });
  });
});
