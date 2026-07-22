/* ============================================================
   السبّورة — طبقة رسم فوق الشريحة للشرح المباشر
   أدوات: قلم · قلم تمييز · ممحاة · خط · مستطيل · دائرة · سهم
   تراجع · مسح الكل · ألوان · سماكات · حفظ الرسم لكل شريحة
   اختصارات: B فتح/إغلاق · P قلم · E ممحاة · L خط · R مستطيل
              O دائرة · A سهم · Ctrl+Z تراجع · Delete مسح
   ============================================================ */
(function () {
  'use strict';

  const COLORS = ['#EF4444', '#2563EB', '#16A34A', '#F59E0B', '#7C3AED', '#111827', '#FFFFFF'];
  const SIZES  = [3, 6, 12, 22];

  const TOOLS = [
    { id: 'pen',    ico: '✏️', name: 'قلم',        key: 'P' },
    { id: 'mark',   ico: '🖍️', name: 'تمييز',      key: 'H' },
    { id: 'erase',  ico: '🧽', name: 'ممحاة',      key: 'E' },
    { id: 'line',   ico: '╱',  name: 'خط',         key: 'L' },
    { id: 'rect',   ico: '▭',  name: 'مستطيل',     key: 'R' },
    { id: 'ellipse',ico: '◯',  name: 'دائرة',      key: 'O' },
    { id: 'arrow',  ico: '↗',  name: 'سهم',        key: 'A' }
  ];

  let open = false, tool = 'pen', color = COLORS[0], size = SIZES[1];
  let drawing = false, startX = 0, startY = 0, snapshot = null;
  const undoStack = [];
  const perSlide = {};              // رسم محفوظ لكل شريحة
  let currentSlide = -1;

  /* ---------- البناء ---------- */
  const root = document.createElement('div');
  root.className = 'board';
  root.innerHTML = `
    <canvas class="board__cv"></canvas>
    <div class="board__bar">
      <div class="board__grp board__tools">
        ${TOOLS.map(t => `<button class="board__b" data-tool="${t.id}" title="${t.name} (${t.key})">${t.ico}</button>`).join('')}
      </div>
      <div class="board__sep"></div>
      <div class="board__grp board__colors">
        ${COLORS.map(c => `<button class="board__c" data-color="${c}" style="--c:${c}" title="لون"></button>`).join('')}
      </div>
      <div class="board__sep"></div>
      <div class="board__grp board__sizes">
        ${SIZES.map(s => `<button class="board__s" data-size="${s}" title="سماكة ${s}"><i style="width:${s}px;height:${s}px"></i></button>`).join('')}
      </div>
      <div class="board__sep"></div>
      <div class="board__grp">
        <button class="board__b" data-act="undo"  title="تراجع (Ctrl+Z)">↶</button>
        <button class="board__b" data-act="clear" title="مسح الكل (Delete)">🗑️</button>
        <button class="board__b board__b--x" data-act="close" title="إغلاق السبّورة (B)">✕</button>
      </div>
    </div>`;

  const openBtn = document.createElement('button');
  openBtn.className = 'board-open';
  openBtn.title = 'السبّورة (B)';
  openBtn.innerHTML = '🖊️';

  document.addEventListener('DOMContentLoaded', () => {
    document.body.append(root, openBtn);
    init();
  });

  const cv = root.querySelector('.board__cv');
  const ctx = cv.getContext('2d');

  /* ---------- الحجم ---------- */
  function fit() {
    const keep = cv.width ? cv.toDataURL() : null;
    const dpr = window.devicePixelRatio || 1;
    cv.width  = Math.floor(innerWidth  * dpr);
    cv.height = Math.floor(innerHeight * dpr);
    cv.style.width = innerWidth + 'px';
    cv.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (keep) { const i = new Image(); i.onload = () => ctx.drawImage(i, 0, 0, innerWidth, innerHeight); i.src = keep; }
  }

  /* ---------- أدوات مساعدة ---------- */
  const pos = (e) => ({ x: e.clientX, y: e.clientY });

  function pushUndo() {
    try { undoStack.push(cv.toDataURL()); } catch (e) { /* noop */ }
    if (undoStack.length > 25) undoStack.shift();
  }

  function restore(url) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (!url) return;
    const i = new Image();
    i.onload = () => ctx.drawImage(i, 0, 0, innerWidth, innerHeight);
    i.src = url;
  }

  function style() {
    ctx.globalCompositeOperation = tool === 'erase' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.globalAlpha = tool === 'mark' ? 0.35 : 1;
    ctx.lineWidth = tool === 'erase' ? size * 3 : (tool === 'mark' ? size * 2.5 : size);
  }

  function arrow(x1, y1, x2, y2) {
    const head = Math.max(12, size * 3);
    const a = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - head * Math.cos(a - Math.PI / 7), y2 - head * Math.sin(a - Math.PI / 7));
    ctx.lineTo(x2 - head * Math.cos(a + Math.PI / 7), y2 - head * Math.sin(a + Math.PI / 7));
    ctx.closePath(); ctx.fill();
  }

  /* ---------- الرسم ---------- */
  function down(e) {
    if (!open) return;
    if (e.target.closest('.board__bar')) return;
    e.preventDefault();
    drawing = true;
    const p = pos(e);
    startX = p.x; startY = p.y;
    pushUndo();
    style();

    if (tool === 'pen' || tool === 'mark' || tool === 'erase') {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + 0.1, p.y);   // نقطة عند النقر
      ctx.stroke();
    } else {
      snapshot = cv.toDataURL();     // للأشكال: معاينة حيّة
    }
    cv.setPointerCapture(e.pointerId);
  }

  function move(e) {
    if (!drawing) return;
    const p = pos(e);
    style();

    if (tool === 'pen' || tool === 'mark' || tool === 'erase') {
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      return;
    }

    // شكل: نمسح ونعيد الرسم من اللقطة
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.drawImage(img, 0, 0, innerWidth, innerHeight);
      style();
      if (tool === 'line') { ctx.beginPath(); ctx.moveTo(startX, startY); ctx.lineTo(p.x, p.y); ctx.stroke(); }
      else if (tool === 'rect') { ctx.strokeRect(startX, startY, p.x - startX, p.y - startY); }
      else if (tool === 'ellipse') {
        ctx.beginPath();
        ctx.ellipse((startX + p.x) / 2, (startY + p.y) / 2,
                    Math.abs(p.x - startX) / 2, Math.abs(p.y - startY) / 2, 0, 0, 7);
        ctx.stroke();
      }
      else if (tool === 'arrow') arrow(startX, startY, p.x, p.y);
    };
    img.src = snapshot;
  }

  function up() { drawing = false; snapshot = null; save(); }

  function save() { if (currentSlide >= 0) { try { perSlide[currentSlide] = cv.toDataURL(); } catch (e) {} } }

  /* ---------- الواجهة ---------- */
  function setTool(id) {
    tool = id;
    root.querySelectorAll('[data-tool]').forEach(b => b.classList.toggle('is-on', b.dataset.tool === id));
    cv.style.cursor = id === 'erase' ? 'cell' : 'crosshair';
  }
  function setColor(c) {
    color = c;
    root.querySelectorAll('[data-color]').forEach(b => b.classList.toggle('is-on', b.dataset.color === c));
  }
  function setSize(s) {
    size = +s;
    root.querySelectorAll('[data-size]').forEach(b => b.classList.toggle('is-on', +b.dataset.size === +s));
  }

  function toggle(force) {
    open = force === undefined ? !open : force;
    root.classList.toggle('is-on', open);
    openBtn.classList.toggle('is-hidden', open);
    document.body.classList.toggle('board-active', open);
  }

  function undo() {
    const last = undoStack.pop();
    restore(last || null);
    if (!last) ctx.clearRect(0, 0, innerWidth, innerHeight);
    save();
  }

  function clearAll() {
    pushUndo();
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    save();
  }

  /* ---------- التهيئة ---------- */
  function init() {
    fit();
    setTool('pen'); setColor(COLORS[0]); setSize(SIZES[1]);

    addEventListener('resize', fit);

    cv.addEventListener('pointerdown', down);
    cv.addEventListener('pointermove', move);
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);

    root.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.tool)  setTool(b.dataset.tool);
      if (b.dataset.color) setColor(b.dataset.color);
      if (b.dataset.size)  setSize(b.dataset.size);
      const a = b.dataset.act;
      if (a === 'undo')  undo();
      if (a === 'clear') clearAll();
      if (a === 'close') toggle(false);
    });

    openBtn.addEventListener('click', () => toggle(true));

    addEventListener('keydown', (e) => {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); return; }
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      const k = e.key.toLowerCase();
      if (k === 'b' || k === 'ل') { e.preventDefault(); toggle(); return; }
      if (!open) return;
      const t = TOOLS.find(x => x.key.toLowerCase() === k);
      if (t) { e.preventDefault(); setTool(t.id); }
      if (e.key === 'Delete') { e.preventDefault(); clearAll(); }
      if (e.key === 'Escape') { e.preventDefault(); toggle(false); }
    });

    /* حفظ الرسم لكل شريحة واستعادته */
    const deck = document.querySelector('.deck');
    if (deck) {
      const sync = () => {
        const slides = Array.from(deck.querySelectorAll('.slide'));
        const idx = slides.findIndex(s => s.classList.contains('is-active'));
        if (idx === currentSlide) return;
        if (currentSlide >= 0) save();
        currentSlide = idx;
        undoStack.length = 0;
        restore(perSlide[idx] || null);
      };
      new MutationObserver(sync).observe(deck, { subtree: true, attributes: true, attributeFilter: ['class'] });
      sync();
    }
  }

  window.Board = { toggle, clear: clearAll };
})();
