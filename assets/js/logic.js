/* ============================================================
   بوّابات المنطق — Logic Gates
   الاستعمال في الدرس:
     <div class="gate" data-gate="and"></div>     ← بوّابة تفاعلية + جدول الحقيقة
     <div class="gate" data-gate="not"></div>
     <div class="chip" data-chip="7408"></div>    ← الرقاقة الحقيقية بأرجلها

   الفكرة للطفل: البوّابة تنظر إلى مدخلها، ثم تقرّر: أُضيء أم لا؟
   ============================================================ */
(function () {
  'use strict';

  const G = (inner) =>
    `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  /* أسلاك الدخل والخرج */
  const wires2 = `<line class="lw" x1="6"  y1="42" x2="64" y2="42"/>
                  <line class="lw" x1="6"  y1="78" x2="64" y2="78"/>
                  <line class="lw" x1="150" y1="60" x2="194" y2="60"/>
                  <text x="16" y="34" class="lp">A</text>
                  <text x="16" y="98" class="lp">B</text>
                  <text x="176" y="52" class="lp">Y</text>`;
  const wires1 = `<line class="lw" x1="6"  y1="60" x2="64" y2="60"/>
                  <line class="lw" x1="150" y1="60" x2="194" y2="60"/>
                  <text x="16" y="50" class="lp">A</text>
                  <text x="176" y="52" class="lp">Y</text>`;

  const AND_BODY = `<path class="lg" d="M64 24 h40 a36 36 0 0 1 0 72 h-40 z"/>`;
  const OR_BODY  = `<path class="lg" d="M60 24 q30 36 0 72 q54 6 88 -36 q-34 -42 -88 -36 z"/>`;
  const bubble   = (x) => `<circle class="lg" cx="${x}" cy="60" r="9"/>`;

  const GATES = {
    and: {
      ar: 'بوّابة «و»', en: 'AND', ins: 2,
      rule: 'يضيء المصباح إذا كان المفتاحان مضغوطَين معًا. لو تُرك أحدهما — لا يضيء.',
      life: 'مثل باب الخزنة: يحتاج مفتاحين في وقت واحد.',
      f: (a, b) => a && b,
      svg: G(`${wires2}${AND_BODY}<text x="92" y="66" class="lt">&amp;</text>`)
    },
    or: {
      ar: 'بوّابة «أو»', en: 'OR', ins: 2,
      rule: 'يضيء المصباح إذا ضغطتَ أحد المفتاحين، أو ضغطتهما معًا.',
      life: 'مثل مصباح السلّم: زرّ في الأسفل وزرّ في الأعلى — أيّهما يكفي.',
      f: (a, b) => a || b,
      svg: G(`${wires2}${OR_BODY}<text x="96" y="67" class="lt">≥1</text>`)
    },
    not: {
      ar: 'بوّابة «ليس»', en: 'NOT', ins: 1,
      rule: 'تعكس ما يصلها: إن ضغطتَ انطفأ، وإن تركتَ أضاء.',
      life: 'مثل ضوء الثلّاجة: يُضيء حين يُفتح الباب — أي حين لا يُضغط الزرّ.',
      f: (a) => !a,
      svg: G(`${wires1}<path class="lg" d="M64 24 L138 60 L64 96 z"/>${bubble(147)}
              <line class="lw" x1="156" y1="60" x2="194" y2="60"/>`)
    },
    nand: {
      ar: 'بوّابة «ليس‑و»', en: 'NAND', ins: 2,
      rule: 'عكس AND تمامًا: ينطفئ فقط حين يُضغط المفتاحان معًا.',
      life: 'مثل جرس إنذار: يصمت فقط إذا أُغلق البابان.',
      f: (a, b) => !(a && b),
      svg: G(`${wires2}${AND_BODY}<text x="92" y="66" class="lt">&amp;</text>${bubble(149)}
              <line class="lw" x1="158" y1="60" x2="194" y2="60"/>`)
    },
    nor: {
      ar: 'بوّابة «ليس‑أو»', en: 'NOR', ins: 2,
      rule: 'عكس OR: يضيء فقط إذا لم تضغط أيّ مفتاح.',
      life: 'مثل ضوء «كل شيء هادئ»: ينطفئ بمجرّد أن يتحرّك شيء.',
      f: (a, b) => !(a || b),
      svg: G(`${wires2}${OR_BODY}<text x="96" y="67" class="lt">≥1</text>${bubble(157)}
              <line class="lw" x1="166" y1="60" x2="194" y2="60"/>`)
    },
    xor: {
      ar: 'بوّابة «إمّا»', en: 'XOR', ins: 2,
      rule: 'يضيء إذا ضغطتَ مفتاحًا واحدًا فقط. لو ضغطت الاثنين — ينطفئ.',
      life: 'مثل مصباح غرفة له مفتاحان: أيّهما يقلب الحالة.',
      f: (a, b) => a !== b,
      svg: G(`${wires2}<path class="lg" d="M48 24 q30 36 0 72" fill="none"/>${OR_BODY}
              <text x="96" y="67" class="lt">=1</text>`)
    }
  };

  /* ─────────── الرقائق الحقيقية (DIP‑14) ─────────── */
  const chipSVG = (label, note) => {
    let pins = '';
    for (let i = 0; i < 7; i++) {
      const x = 26 + i * 22;
      pins += `<rect x="${x}" y="12"  width="9" height="12" rx="2" fill="#B0BEC5"/>
               <rect x="${x}" y="76"  width="9" height="12" rx="2" fill="#B0BEC5"/>`;
    }
    return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      ${pins}
      <rect x="18" y="24" width="164" height="52" rx="5" fill="#263238"/>
      <path d="M18 44 a10 10 0 0 0 0 12 z" fill="#455A64"/>
      <circle cx="32" cy="68" r="3" fill="#455A64"/>
      <text x="104" y="47" fill="#ECEFF1" font-size="17" font-family="monospace"
            text-anchor="middle" font-weight="bold">${label}</text>
      <text x="104" y="65" fill="#90A4AE" font-size="10" font-family="monospace"
            text-anchor="middle">${note}</text>
    </svg>`;
  };

  const CHIPS = {
    7408: { ar: 'رقاقة أربع بوّابات «و»',      en: '7408', note: 'QUAD 2-IN AND',
            line: 'داخلها أربع بوّابات AND جاهزة للاستعمال.' },
    7432: { ar: 'رقاقة أربع بوّابات «أو»',     en: '7432', note: 'QUAD 2-IN OR',
            line: 'داخلها أربع بوّابات OR.' },
    7404: { ar: 'رقاقة ستّ بوّابات «ليس»',     en: '7404', note: 'HEX INVERTER',
            line: 'داخلها ستّ بوّابات NOT تعكس الإشارة.' },
    7400: { ar: 'رقاقة أربع بوّابات «ليس‑و»', en: '7400', note: 'QUAD 2-IN NAND',
            line: 'أشهر رقاقة منطق في التاريخ.' },
    7402: { ar: 'رقاقة أربع بوّابات «ليس‑أو»', en: '7402', note: 'QUAD 2-IN NOR',
            line: 'داخلها أربع بوّابات NOR.' },
    7486: { ar: 'رقاقة أربع بوّابات «إمّا»',   en: '7486', note: 'QUAD 2-IN XOR',
            line: 'تُستعمل في الجمع داخل الحاسوب.' }
  };

  /* ─────────── بناء بوّابة تفاعلية ─────────── */
  function buildGate(box) {
    const g = GATES[box.dataset.gate];
    if (!g) return;
    const st = [false, false];

    const swHTML = (i, name) =>
      `<button class="gate__sw" data-i="${i}" data-on="0" type="button">
         <span class="gate__bulb"></span><span>${name}</span></button>`;

    const rows = [];
    if (g.ins === 2) {
      for (const a of [0, 1]) for (const b of [0, 1])
        rows.push([a, b, g.f(!!a, !!b) ? 1 : 0]);
    } else {
      for (const a of [0, 1]) rows.push([a, null, g.f(!!a) ? 1 : 0]);
    }

    const head = g.ins === 2 ? '<th>A</th><th>B</th><th>Y</th>' : '<th>A</th><th>Y</th>';
    const body = rows.map((r) =>
      `<tr data-key="${r[0]}${r[1] === null ? '' : r[1]}" data-live="0">` +
      (g.ins === 2 ? `<td>${r[0]}</td><td>${r[1]}</td>` : `<td>${r[0]}</td>`) +
      `<td>${r[2]}</td></tr>`).join('');

    box.innerHTML =
      `<div class="gate__head"><span>${g.ar}</span>
         <span class="gate__en term">${g.en}</span></div>
       <div class="gate__stage">
         <div class="gate__ins">${swHTML(0, 'A')}${g.ins === 2 ? swHTML(1, 'B') : ''}</div>
         <div class="gate__svg">${g.svg}</div>
         <div class="gate__out">
           <div class="gate__lamp" data-on="0">💡</div><span>Y</span>
         </div>
       </div>
       <div class="gate__rule">${g.rule}<br><b>في حياتنا:</b> ${g.life}</div>
       <div style="padding:0 18px 18px">
         <table class="gate__truth"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>
       </div>`;

    const lamp = box.querySelector('.gate__lamp');
    const trs  = box.querySelectorAll('.gate__truth tbody tr');

    function update() {
      const on = g.ins === 2 ? g.f(st[0], st[1]) : g.f(st[0]);
      lamp.dataset.on = on ? '1' : '0';
      const key = g.ins === 2 ? `${+st[0]}${+st[1]}` : `${+st[0]}`;
      trs.forEach((tr) => { tr.dataset.live = tr.dataset.key === key ? '1' : '0'; });
    }

    box.querySelectorAll('.gate__sw').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = +btn.dataset.i;
        st[i] = !st[i];
        btn.dataset.on = st[i] ? '1' : '0';
        update();
      });
    });
    update();
  }

  function buildChip(box) {
    const c = CHIPS[box.dataset.chip];
    if (!c) return;
    box.classList.add('part');
    box.innerHTML =
      `<div class="part__head"><span class="part__ar">${c.ar}</span>
         <span class="part__en term">${c.en}</span></div>
       <div class="part__figs" style="grid-template-columns:1fr">
         <figure class="part__fig"><div class="part__svg">${chipSVG(c.en, c.note)}</div>
           <figcaption>الرقاقة كما تراها</figcaption></figure>
       </div>
       <p class="part__job">${c.line}</p>`;
  }

  function render() {
    document.querySelectorAll('.gate[data-gate]').forEach(buildGate);
    document.querySelectorAll('.chip[data-chip]').forEach(buildChip);
  }

  window.GATES = GATES;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
