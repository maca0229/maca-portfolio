/* ─── MOSAIC TITLE ─── */
function initMosaicTitle() {
  const wrapper = document.querySelector('.hero-title-wrapper');
  const canvas  = document.getElementById('mosaic-canvas');
  const ctx     = canvas.getContext('2d');

  const COLORS  = ['#68007F','#CA4CE5','#004727','#1F9907','#61A94D','#CC9F01','#FADC00'];
  const TILE    = 13;
  const RADIUS  = 120;
  const FORCE   = 200;
  const SPRING  = 0.055;
  const DAMP    = 0.70;

  let tiles = [];
  let mouse = { x: -9999, y: -9999 };

  function setup() {
    const rect = wrapper.getBoundingClientRect();
    const W = Math.ceil(rect.width)  + 32;
    const H = Math.ceil(rect.height) + 20;
    canvas.width  = W;
    canvas.height = H;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';

    tiles = [];
    for (let row = 0; row * TILE < H; row++) {
      for (let col = 0; col * TILE < W; col++) {
        const ox = col * TILE;
        const oy = row * TILE;
        // Scatter entrance: start off-screen
        const angle = Math.random() * Math.PI * 2;
        const dist  = 300 + Math.random() * 400;
        tiles.push({
          ox, oy,
          x:  ox + Math.cos(angle) * dist,
          y:  oy + Math.sin(angle) * dist,
          vx: 0, vy: 0,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    }
  }

  // Track global mouse, translate to canvas coords
  document.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  let rafId;
  function tick() {
    rafId = requestAnimationFrame(tick);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let anyMoving = false;
    for (const t of tiles) {
      // Repulsion from cursor
      const dx   = t.ox + TILE / 2 - mouse.x;
      const dy   = t.oy + TILE / 2 - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let tx = t.ox, ty = t.oy;
      if (dist < RADIUS && dist > 0.5) {
        const push  = (1 - dist / RADIUS) * FORCE;
        const angle = Math.atan2(dy, dx);
        tx = t.ox + Math.cos(angle) * push;
        ty = t.oy + Math.sin(angle) * push;
      }

      // Spring physics
      t.vx += (tx - t.x) * SPRING;
      t.vy += (ty - t.y) * SPRING;
      t.vx *= DAMP;
      t.vy *= DAMP;
      t.x  += t.vx;
      t.y  += t.vy;

      if (Math.abs(t.vx) > 0.05 || Math.abs(t.vy) > 0.05) anyMoving = true;

      ctx.fillStyle = t.color;
      ctx.fillRect(Math.round(t.x) + 1, Math.round(t.y) + 1, TILE - 2, TILE - 2);
    }
  }

  setup();
  tick();
  window.addEventListener('resize', () => { setup(); });
}

/* ─── CUSTOM CURSOR ─── */
const cursor     = document.createElement('div'); cursor.className     = 'cursor';     cursor.style.background = '#FADC00';
const cursorRing = document.createElement('div'); cursorRing.className = 'cursor-ring'; cursorRing.style.borderColor = 'rgba(250,220,0,0.4)';
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
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── B&W CIRCLE REVEAL TOGGLE ─── */
const bwBtn   = document.getElementById('bw-toggle');
const bwLayer = document.getElementById('bw-layer');
let bwActive  = false;
let bwBusy    = false;

function bwOrigin() {
  const r = bwBtn.getBoundingClientRect();
  return `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
}

function enterBW() {
  if (bwBusy) return;
  bwBusy = true;
  const o = bwOrigin();

  // 1. 重置：小圆、不透明白色
  bwLayer.style.transition = 'none';
  bwLayer.style.opacity    = '1';
  bwLayer.style.clipPath   = `circle(0% at ${o})`;
  void bwLayer.offsetWidth;

  // 2. 白圆扩散到全屏
  bwLayer.style.transition = 'clip-path 0.75s cubic-bezier(0.4, 0, 0.2, 1)';
  bwLayer.style.clipPath   = `circle(150% at ${o})`;

  bwLayer.addEventListener('transitionend', () => {
    // 3. 应用黑白反转滤镜（白底黑字）
    document.documentElement.classList.add('bw');
    // 4. 白圆淡出，露出白底页面
    bwLayer.style.transition = 'opacity 0.3s ease';
    bwLayer.style.opacity    = '0';
    bwLayer.addEventListener('transitionend', () => { bwBusy = false; }, { once: true });
  }, { once: true });
}

function exitBW() {
  if (bwBusy) return;
  bwBusy = true;
  const o = bwOrigin();

  // 1. 白圆淡入覆盖页面
  bwLayer.style.transition = 'opacity 0.3s ease';
  bwLayer.style.opacity    = '1';

  bwLayer.addEventListener('transitionend', () => {
    // 2. 移除滤镜（页面回彩色，被白圆遮住）
    document.documentElement.classList.remove('bw');
    // 3. 白圆收缩回按钮
    bwLayer.style.transition = 'clip-path 0.75s cubic-bezier(0.4, 0, 0.2, 1)';
    bwLayer.style.clipPath   = `circle(0% at ${o})`;
    bwLayer.addEventListener('transitionend', () => { bwBusy = false; }, { once: true });
  }, { once: true });
}

bwBtn.addEventListener('click', () => {
  bwActive = !bwActive;
  bwBtn.textContent = bwActive ? '◐' : '◑';
  if (bwActive) enterBW(); else exitBW();
});

/* ─── SHARED TEXTURE DRAWING FUNCTIONS ─── */

function clipToShape(ctx, shape, x, y, r) {
  ctx.beginPath();
  if (shape === 'circle') {
    ctx.arc(x, y, r, 0, Math.PI * 2);
  } else if (shape === 'square') {
    ctx.rect(x - r * 0.9, y - r * 0.9, r * 1.8, r * 1.8);
  } else { // triangle
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r * 0.9, y + r * 0.75);
    ctx.lineTo(x - r * 0.9, y + r * 0.75);
    ctx.closePath();
  }
  ctx.clip();
}

function strokeShape(ctx, shape, x, y, r, color) {
  ctx.beginPath();
  if (shape === 'circle') {
    ctx.arc(x, y, r, 0, Math.PI * 2);
  } else if (shape === 'square') {
    ctx.rect(x - r * 0.9, y - r * 0.9, r * 1.8, r * 1.8);
  } else {
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r * 0.9, y + r * 0.75);
    ctx.lineTo(x - r * 0.9, y + r * 0.75);
    ctx.closePath();
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.9;
  ctx.stroke();
}

function drawStripes(ctx, x, y, r, color) {
  const count = 5;
  const spacing = r * 2 / count;
  for (let i = 0; i < count; i++) {
    const ly = y - r + spacing * i + spacing / 2;
    ctx.beginPath();
    ctx.moveTo(x - r, ly);
    ctx.lineTo(x + r, ly);
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
}

function drawWavy(ctx, x, y, r, color, t, phase) {
  const count = 4;
  const spacing = r * 2 / count;
  for (let i = 0; i < count; i++) {
    const ly = y - r + spacing * i + spacing / 2;
    ctx.beginPath();
    let first = true;
    for (let px = x - r; px <= x + r; px += 2) {
      const wy = ly + Math.sin((px - x) * 0.28 + t * 0.8 + phase) * r * 0.2;
      if (first) { ctx.moveTo(px, wy); first = false; }
      else ctx.lineTo(px, wy);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
}

function drawAnnual(ctx, x, y, r, color) {
  const rings = 4;
  for (let i = 1; i <= rings; i++) {
    ctx.beginPath();
    ctx.arc(x, y, r * i / rings, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
}

function drawDots(ctx, x, y, r, color) {
  const grid = 4;
  const step = (r * 1.6) / (grid - 1);
  for (let row = 0; row < grid; row++) {
    for (let col = 0; col < grid; col++) {
      const dx = x - r * 0.8 + col * step;
      const dy = y - r * 0.8 + row * step;
      ctx.beginPath();
      ctx.arc(dx, dy, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }
}

function drawThread(ctx, x, y, r, color) {
  const ty = y - r;
  ctx.beginPath();
  ctx.moveTo(x, ty);
  ctx.lineTo(x, ty - r * 0.42);
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, ty - r * 0.42, 2, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8;
  ctx.stroke();
}

function drawTexture(ctx, texture, x, y, r, color, t, phase) {
  if (texture === 'stripes') drawStripes(ctx, x, y, r, color);
  else if (texture === 'wavy') drawWavy(ctx, x, y, r, color, t, phase);
  else if (texture === 'annual') drawAnnual(ctx, x, y, r, color);
  else drawDots(ctx, x, y, r, color);
}

/* ─── HERO — SEQUIN TEXTURE GRID ─── */
(function initHero() {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');

  const COLORS   = ['#68007F','#CA4CE5','#004727','#1F9907','#61A94D','#CC9F01','#FADC00'];
  const SHAPES   = ['circle','circle','circle','square','triangle'];
  const TEXTURES = ['stripes','wavy','annual','dots'];
  const R      = 26;
  const COL_W  = R * 1.72;
  const ROW_H  = R * 1.52;

  let cells = [];
  let mouse = { x: -999, y: -999 };

  function setup() {
    canvas.width  = innerWidth;
    canvas.height = innerHeight;
    cells = [];
    const rows = Math.ceil(canvas.height / ROW_H) + 3;
    const cols = Math.ceil(canvas.width  / COL_W) + 3;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offset = (row % 2) * (COL_W / 2);
        cells.push({
          x:       col * COL_W + offset - COL_W,
          y:       row * ROW_H,
          r:       R * (0.82 + Math.random() * 0.36),
          shape:   SHAPES[Math.floor(Math.random() * SHAPES.length)],
          texture: TEXTURES[Math.floor(Math.random() * TEXTURES.length)],
          color:   COLORS[Math.floor(Math.random() * COLORS.length)],
          phase:   Math.random() * Math.PI * 2,
          pulse:   0.25 + Math.random() * 0.35,
        });
      }
    }
    cells.sort((a, b) => b.y - a.y); // bottom rows first so top rows overlap
  }

  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  let t = 0;
  (function tick() {
    requestAnimationFrame(tick);
    t += 0.016;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const c of cells) {
      const dx    = c.x - mouse.x;
      const dy    = c.y - mouse.y;
      const dist  = Math.sqrt(dx * dx + dy * dy);
      const hover = dist < 110 ? (1 - dist / 110) : 0;
      const r     = c.r * (1 + Math.sin(c.phase + t * c.pulse) * 0.04) * (1 + hover * 0.18);
      const alpha = 0.2 + hover * 0.45;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Outline shape
      strokeShape(ctx, c.shape, c.x, c.y, r, c.color);

      // Texture inside (clipped)
      ctx.save();
      clipToShape(ctx, c.shape, c.x, c.y, r - 1);
      drawTexture(ctx, c.texture, c.x, c.y, r, c.color, t, c.phase);
      ctx.restore();

      // Thread detail
      drawThread(ctx, c.x, c.y, r, c.color);

      ctx.restore();
    }
  })();

  window.addEventListener('resize', setup);
  setup();
})();

/* ─── PROJECT CANVAS — TEXTURE PATTERNS ─── */
function initProjectCanvas(canvas, texture, accentHex) {
  const ctx = canvas.getContext('2d');
  let W = canvas.offsetWidth || 600;
  let H = canvas.offsetHeight || 440;
  canvas.width  = W;
  canvas.height = H;

  const TEXTURES_ALL = ['stripes','wavy','annual','dots'];
  const R   = Math.min(W, H) * 0.11;

  // Build a grid of sequin cells for the card
  function buildCells(w, h) {
    const cells = [];
    const rows = Math.ceil(h / (R * 1.5)) + 2;
    const cols = Math.ceil(w / (R * 1.7)) + 2;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offset = (row % 2) * (R * 0.85);
        const tex = texture === 'mixed'
          ? TEXTURES_ALL[Math.floor(Math.random() * 4)]
          : texture;
        cells.push({
          x:     col * R * 1.7 + offset,
          y:     row * R * 1.5,
          r:     R * (0.8 + Math.random() * 0.4),
          shape: Math.random() < 0.75 ? 'circle' : (Math.random() < 0.5 ? 'square' : 'triangle'),
          tex,
          phase: Math.random() * Math.PI * 2,
          pulse: 0.2 + Math.random() * 0.3,
        });
      }
    }
    cells.sort((a, b) => b.y - a.y);
    return cells;
  }

  let cells = buildCells(W, H);
  let t = 0;

  (function tick() {
    requestAnimationFrame(tick);
    t += 0.016;
    ctx.clearRect(0, 0, W, H);

    for (const c of cells) {
      const r = c.r * (1 + Math.sin(c.phase + t * c.pulse) * 0.05);
      ctx.save();
      ctx.globalAlpha = 0.55;
      strokeShape(ctx, c.shape, c.x, c.y, r, accentHex);
      ctx.save();
      clipToShape(ctx, c.shape, c.x, c.y, r - 1);
      drawTexture(ctx, c.tex, c.x, c.y, r, accentHex, t, c.phase);
      ctx.restore();
      drawThread(ctx, c.x, c.y, r, accentHex);
      ctx.restore();
    }
  })();

  new ResizeObserver(() => {
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;
    cells = buildCells(W, H);
  }).observe(canvas);
}

/* ─── GSAP ANIMATIONS ─── */
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
gsap.set(['.hero-tag', '.hero-title', '.hero-subtitle', '.hero-cta'], { opacity: 0, y: 30 });
gsap.set('.hero-scroll-indicator', { opacity: 0 });

const heroTl = gsap.timeline({ delay: 0.5 });
heroTl
  .to('.hero-tag',              { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
  .to('.hero-title',            { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, '-=0.5')
  .to('.hero-subtitle',         { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
  .to('.hero-cta',              { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
  .to('.hero-scroll-indicator', { opacity: 1,        duration: 0.8, ease: 'power3.out' }, '-=0.3')
  .call(() => initMosaicTitle()); // 马赛克在标题出现后初始化，方块从四周飞入

// Project cards
document.querySelectorAll('.project-card').forEach((card, i) => {
  gsap.to(card, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: card, start: 'top 82%', toggleActions: 'play none none none' },
    delay: i * 0.08,
  });

  // Init canvas after card is in DOM
  const canvas  = card.querySelector('.project-canvas');
  const texture = canvas.dataset.texture;
  const accent  = getComputedStyle(card).getPropertyValue('--accent').trim();
  setTimeout(() => initProjectCanvas(canvas, texture, accent), 300 + i * 100);
});

// Section header
gsap.utils.toArray('.section-header').forEach(el => {
  gsap.from(el, {
    opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

// Contact
gsap.from('.contact-content', {
  opacity: 0, y: 40, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: '#contact', start: 'top 70%' }
});
