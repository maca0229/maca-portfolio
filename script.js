/* ─── MOSAIC TITLE ─── */
function initMosaicTitle() {
  const wrapper = document.querySelector('.hero-title-wrapper');
  const canvas  = document.getElementById('mosaic-canvas');
  const ctx     = canvas.getContext('2d');

  const COLORS = ['#68007F','#CA4CE5','#004727','#1F9907','#61A94D','#CC9F01','#FADC00'];
  const CELL   = 15;   // 基础格子大小，用于分层布局
  const RADIUS = 130;
  const FORCE  = 230;
  const SPRING = 0.052;
  const DAMP   = 0.68;

  let tiles = [];
  let mouse = { x: -9999, y: -9999 };

  const rnd = (a, b) => a + Math.random() * (b - a);

  function setup() {
    const rect = wrapper.getBoundingClientRect();
    const W = Math.ceil(rect.width)  + 48;
    const H = Math.ceil(rect.height) + 28;
    canvas.width  = W;
    canvas.height = H;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';

    tiles = [];
    for (let cy = 0; cy * CELL < H + CELL; cy++) {
      for (let cx = 0; cx * CELL < W + CELL; cx++) {
        if (Math.random() < 0.10) continue;  // 10% 空隙，让文字自然透出

        // 格子内随机偏移 → 打破规整感
        const ox  = cx * CELL + rnd(-CELL * 0.6, CELL * 0.6);
        const oy  = cy * CELL + rnd(-CELL * 0.6, CELL * 0.6);
        const w   = rnd(7, 20);
        const h   = rnd(6, 20);
        const rot = rnd(-0.38, 0.38);           // ±22° 随机旋转
        const alpha = rnd(0.52, 0.96);

        // 入场：从四面八方飞入
        const ang  = Math.random() * Math.PI * 2;
        const dist = rnd(280, 480);

        tiles.push({
          ox, oy, w, h, rot, alpha,
          x: ox + Math.cos(ang) * dist,
          y: oy + Math.sin(ang) * dist,
          vx: 0, vy: 0,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    }
  }

  document.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function tick() {
    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const t of tiles) {
      const cx   = t.ox + t.w / 2;
      const cy   = t.oy + t.h / 2;
      const dx   = cx - mouse.x;
      const dy   = cy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let tx = t.ox, ty = t.oy;
      if (dist < RADIUS && dist > 0.5) {
        const push  = (1 - dist / RADIUS) * FORCE;
        const angle = Math.atan2(dy, dx);
        tx = t.ox + Math.cos(angle) * push;
        ty = t.oy + Math.sin(angle) * push;
      }

      t.vx += (tx - t.x) * SPRING;
      t.vy += (ty - t.y) * SPRING;
      t.vx *= DAMP;
      t.vy *= DAMP;
      t.x  += t.vx;
      t.y  += t.vy;

      ctx.save();
      ctx.globalAlpha = t.alpha;
      ctx.fillStyle   = t.color;
      ctx.translate(t.x + t.w / 2, t.y + t.h / 2);
      ctx.rotate(t.rot);
      ctx.fillRect(-t.w / 2, -t.h / 2, t.w, t.h);
      ctx.restore();
    }
  }

  setup();
  tick();
  window.addEventListener('resize', setup);
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

/* ─── HERO THREE.JS — FABRIC MESH ─── */
(function initHero() {
  const canvas   = document.getElementById('hero-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 6);

  /* Wireframe cloth */
  const geo = new THREE.PlaneGeometry(14, 9, 70, 45);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xFADC00, wireframe: true, transparent: true, opacity: 0.12
  });
  const cloth = new THREE.Mesh(geo, mat);
  scene.add(cloth);

  /* Particles */
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(600 * 3);
  for (let i = 0; i < pPos.length; i++) pPos[i] = (Math.random() - 0.5) * 22;
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({ color: 0xCA4CE5, size: 0.025, transparent: true, opacity: 0.4 });
  scene.add(new THREE.Points(pGeo, pMat));

  const clock = new THREE.Clock();
  const origZ = Array.from({ length: geo.attributes.position.count }, (_, i) =>
    geo.attributes.position.getZ(i)
  );

  (function loop() {
    requestAnimationFrame(loop);
    const t   = clock.getElapsedTime();
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      pos.setZ(i,
        Math.sin(x * 0.45 + t * 0.55) * 0.35 +
        Math.sin(y * 0.45 + t * 0.35) * 0.35 +
        Math.sin((x + y) * 0.28 + t * 0.42) * 0.22
      );
    }
    pos.needsUpdate = true;
    cloth.rotation.z = Math.sin(t * 0.08) * 0.04;
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
})();

/* ─── PROJECT CANVAS ANIMATIONS ─── */
function initProjectCanvas(canvas, shape, accentHex) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const W = canvas.offsetWidth || 600, H = canvas.offsetHeight || 440;
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.z = 5;

  const color = new THREE.Color(accentHex);
  const clock = new THREE.Clock();
  let mesh;

  if (shape === 'fabric') {
    const geo = new THREE.PlaneGeometry(8, 6, 40, 26);
    mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.2 }));
  } else if (shape === 'sphere') {
    const geo = new THREE.SphereGeometry(2, 32, 20);
    mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.2 }));
  } else if (shape === 'grid') {
    const geo = new THREE.TorusGeometry(2, 0.6, 16, 60);
    mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.2 }));
  } else if (shape === 'waves') {
    const geo = new THREE.PlaneGeometry(9, 7, 50, 32);
    mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.2 }));
  } else {
    // particles
    const pGeo = new THREE.BufferGeometry();
    const pp = new Float32Array(400 * 3);
    for (let i = 0; i < pp.length; i++) pp[i] = (Math.random() - 0.5) * 8;
    pGeo.setAttribute('position', new THREE.BufferAttribute(pp, 3));
    mesh = new THREE.Points(pGeo, new THREE.PointsMaterial({ color, size: 0.05, transparent: true, opacity: 0.6 }));
  }
  scene.add(mesh);

  (function loop() {
    requestAnimationFrame(loop);
    const t = clock.getElapsedTime();

    if (shape === 'fabric' || shape === 'waves') {
      const pos = mesh.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i);
        pos.setZ(i,
          Math.sin(x * 0.6 + t * 0.6) * 0.4 +
          Math.sin(y * 0.5 + t * 0.4) * 0.3
        );
      }
      pos.needsUpdate = true;
    } else if (shape === 'sphere') {
      mesh.rotation.y = t * 0.3;
      mesh.rotation.x = Math.sin(t * 0.2) * 0.2;
    } else if (shape === 'grid') {
      mesh.rotation.x = t * 0.25;
      mesh.rotation.y = t * 0.18;
    } else {
      mesh.rotation.y = t * 0.12;
    }
    renderer.render(scene, camera);
  })();

  // Resize observer
  new ResizeObserver(() => {
    const W2 = canvas.offsetWidth, H2 = canvas.offsetHeight;
    camera.aspect = W2 / H2;
    camera.updateProjectionMatrix();
    renderer.setSize(W2, H2);
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
  const shape   = canvas.dataset.shape;
  const accent  = getComputedStyle(card).getPropertyValue('--accent').trim();
  setTimeout(() => initProjectCanvas(canvas, shape, accent), 300 + i * 100);
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
