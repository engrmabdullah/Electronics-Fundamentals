/* ============================================================
   محرك الدرس — تنقّل + تقدّم + نطق الكلمات الإنجليزية
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };

  /* ══════════ النطق ══════════ */
  const Speak = (function () {
    const ok = 'speechSynthesis' in window;
    let voice = null;
    const MALE = /\b(david|mark|guy|george|ryan|christopher|eric|brian|james|alex|daniel|male)\b/i;
    const FEM  = /\b(zira|hazel|susan|aria|jenny|samantha|karen|female)\b/i;

    function pick() {
      if (!ok) return;
      const en = speechSynthesis.getVoices().filter(v => /^en(-|_)/i.test(v.lang));
      if (!en.length) return;
      voice = en.slice().sort((a, b) => score(b) - score(a))[0];
    }
    function score(v) {
      let s = 0;
      if (MALE.test(v.name)) s += 80;
      if (FEM.test(v.name)) s -= 100;
      if (/natural|neural|premium/i.test(v.name)) s += 25;
      if (/^en-US/i.test(v.lang)) s += 20;
      return s;
    }
    if (ok) { pick(); speechSynthesis.onvoiceschanged = pick; }

    return function say(text) {
      if (!ok) return;
      const t = String(text).replace(/[؀-ۿ]+/g, ' ').replace(/[()🔊]/g, ' ').replace(/\s+/g, ' ').trim();
      if (!t) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(t);
      if (voice) u.voice = voice;
      u.lang = (voice && voice.lang) || 'en-US';
      u.rate = 0.62;      // بطيء عشان الطفل يسمع كويس
      u.pitch = 1;
      speechSynthesis.speak(u);
    };
  })();

  /* ══════════ بطاقة معنى الكلمة ══════════ */
  const Pop = (function () {
    let box = null, key = null;
    function make() {
      if (box) return box;
      box = el('div', 'pop',
        '<div class="pop__head">' +
          '<button class="pop__say" title="اسمع الكلمة">🔊</button>' +
          '<div class="pop__en"></div>' +
          '<button class="pop__x" title="إغلاق">✕</button>' +
        '</div><div class="pop__body"></div>');
      document.body.appendChild(box);
      $('.pop__x', box).addEventListener('click', hide);
      $('.pop__say', box).addEventListener('click', () => Speak(key));
      return box;
    }
    function hide() { if (box) box.classList.remove('is-on'); }
    function show(word, anchor) {
      make();
      key = word;
      const G = window.WORDS || {};
      const e = G[word.toLowerCase().trim()];
      $('.pop__en', box).textContent = word;
      $('.pop__body', box).innerHTML = e
        ? '<p class="pop__ar">' + e.ar + '</p><p class="pop__desc">' + e.desc + '</p>'
        : '<p class="pop__desc">دوس على 🔊 عشان تسمع نطق الكلمة.</p>';

      box.classList.add('is-on');
      const r = anchor.getBoundingClientRect();
      let left = r.left + r.width / 2 - box.offsetWidth / 2;
      left = Math.max(10, Math.min(innerWidth - box.offsetWidth - 10, left));
      let top = r.bottom + 10;
      if (top + box.offsetHeight > innerHeight - 10) top = Math.max(10, r.top - box.offsetHeight - 10);
      box.style.left = left + 'px';
      box.style.top = top + 'px';
    }
    return { show, hide };
  })();

  document.addEventListener('click', (e) => {
    const t = e.target.closest('.term, .word__en');
    if (!t) { if (!e.target.closest('.pop')) Pop.hide(); return; }
    e.preventDefault();
    const w = (t.dataset.say || t.textContent).replace('🔊', '').trim();
    Speak(w);
    Pop.show(w, t);
  });
  addEventListener('resize', Pop.hide);

  /* ══════════ التنقّل ══════════ */
  const deck = $('.deck');
  if (!deck) return;

  const slides = $$('.slide', deck);
  const total = slides.length;
  const id = 'el:at:' + (document.body.dataset.lesson || location.pathname.split('/').pop());
  let i = 0;

  const top = el('div', 'bar-top',
    '<div class="bar-top__name"><span>⚡</span>' + (document.body.dataset.title || 'الإلكترونيات') + '</div>' +
    '<div class="progress"><div class="progress__fill"></div></div>' +
    '<div class="bar-top__count"><b class="js-i">1</b> / ' + total + '</div>');

  const bot = el('div', 'bar-bot',
    '<button class="btn btn--ghost" data-go="home">🏠 كل الدروس</button>' +
    '<button class="btn btn--ghost" data-go="prev">▶ السابق</button>' +
    '<button class="btn" data-go="next">التالي ◀</button>' +
    '<button class="btn btn--ghost" data-go="help">؟</button>');

  const help = el('div', 'modal',
    '<div class="modal__box">' +
      '<h3 style="margin-top:0">إزاي تستخدم الدرس؟ 🎮</h3>' +
      '<div class="modal__row"><span>الصفحة اللي بعدها</span><kbd>←</kbd></div>' +
      '<div class="modal__row"><span>الصفحة اللي قبلها</span><kbd>→</kbd></div>' +
      '<div class="modal__row"><span>شغّل الكود</span><kbd>Ctrl + Enter</kbd></div>' +
      '<div class="modal__row"><span>إغلاق</span><kbd>Esc</kbd></div>' +
      '<div class="note note--fun" style="margin-top:16px"><div class="note__ico">🔊</div><div class="note__body">' +
      'أي كلمة إنجليزي زي <span class="term">print</span> — دوس عليها تسمع نطقها وتعرف معناها!</div></div>' +
      '<button class="btn" data-go="help" style="width:100%;margin-top:18px">فهمت! 👍</button>' +
    '</div>');

  document.body.append(top, bot, help);

  function draw() {
    slides.forEach((s, n) => s.classList.toggle('is-active', n === i));
    $('.progress__fill', top).style.width = (total > 1 ? (i / (total - 1)) * 100 : 100) + '%';
    $('.js-i', top).textContent = i + 1;
    $('[data-go="prev"]', bot).disabled = i === 0;
    const nx = $('[data-go="next"]', bot);
    nx.disabled = i === total - 1;
    nx.innerHTML = i === total - 1 ? '🎉 خلصت الدرس' : 'التالي ◀';
    slides[i].scrollTop = 0;
    Pop.hide();
    try { localStorage.setItem(id, i); } catch (e) { /* noop */ }
    if (history.replaceState) history.replaceState(null, '', '#' + (i + 1));
  }

  const go = (n) => { i = Math.max(0, Math.min(total - 1, n)); draw(); };

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-go]');
    if (!b) { if (e.target === help) help.classList.remove('is-on'); return; }
    const a = b.dataset.go;
    if (a === 'next') go(i + 1);
    else if (a === 'prev') go(i - 1);
    else if (a === 'home') location.href = '../index.html';
    else if (a === 'help') help.classList.toggle('is-on');
  });

  document.addEventListener('keydown', (e) => {
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(i + 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i - 1); }
    if (e.key === 'Escape') { help.classList.remove('is-on'); Pop.hide(); }
    if (e.key === '?') help.classList.toggle('is-on');
  });

  /* لمس */
  let x0 = 0, y0 = 0;
  deck.addEventListener('touchstart', e => { x0 = e.changedTouches[0].clientX; y0 = e.changedTouches[0].clientY; }, { passive: true });
  deck.addEventListener('touchend', e => {
    if (e.target.closest('.lab')) return;         // ما نمنعش السحب جوّه المحرر
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx > 0 ? i - 1 : i + 1);
  }, { passive: true });

  const h = parseInt(location.hash.replace('#', ''), 10);
  if (h >= 1 && h <= total) i = h - 1;
  else { try { const s = parseInt(localStorage.getItem(id), 10); if (s > 0 && s < total) i = s; } catch (e) { /* noop */ } }
  draw();
})();
