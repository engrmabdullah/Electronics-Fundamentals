/* ============================================================
   مكتبة رسوم العناصر الإلكترونية — SVG
   الاستعمال في الدرس:
     <div class="part" data-part="resistor"></div>          ← الشكل الحقيقي + الرمز
     <div class="part" data-part="led" data-only="symbol"></div>
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  /* خطوط التوصيل على الجانبين */
  const legs = (y) => `<line class="wire" x1="0" y1="${y}" x2="30" y2="${y}"/>
                       <line class="wire" x1="90" y1="${y}" x2="120" y2="${y}"/>`;

  const PARTS = {

    /* ─────────── البطارية ─────────── */
    battery: {
      ar: 'البطارية', en: 'Battery',
      job: 'تدفع الكهرباء في الدائرة، مثل مضخّة تدفع الماء في الأنابيب.',
      real: S(`<rect x="26" y="16" width="62" height="38" rx="6" fill="#2E3D6B"/>
        <rect x="26" y="16" width="62" height="12" rx="6" fill="#4356A0"/>
        <rect x="88" y="28" width="8" height="14" rx="2" fill="#C9CEE0"/>
        <text x="57" y="42" class="lbl-in" text-anchor="middle">1.5V</text>
        <text x="36" y="52" class="sign">+</text><text x="76" y="52" class="sign">−</text>`),
      sym: S(`${legs(35)}
        <line class="sym" x1="45" y1="14" x2="45" y2="56"/>
        <line class="sym" x1="58" y1="24" x2="58" y2="46"/>
        <line class="sym" x1="70" y1="14" x2="70" y2="56"/>
        <line class="sym" x1="83" y1="24" x2="83" y2="46"/>
        <text x="40" y="12" class="sign">+</text><text x="80" y="12" class="sign">−</text>`)
    },

    /* ─────────── المقاومة ─────────── */
    resistor: {
      ar: 'المقاومة', en: 'Resistor',
      job: 'تُبطئ مرور الكهرباء وتحمي العناصر الحسّاسة من الاحتراق.',
      real: S(`<line class="wire" x1="0" y1="35" x2="30" y2="35"/>
        <line class="wire" x1="90" y1="35" x2="120" y2="35"/>
        <rect x="30" y="22" width="60" height="26" rx="13" fill="#D6B48A"/>
        <rect x="40" y="22" width="7" height="26" fill="#8B4513"/>
        <rect x="52" y="22" width="7" height="26" fill="#111"/>
        <rect x="64" y="22" width="7" height="26" fill="#C62828"/>
        <rect x="78" y="22" width="5" height="26" fill="#C9A227"/>`),
      sym: S(`${legs(35)}
        <polyline class="sym" points="30,35 38,22 50,48 62,22 74,48 84,35 90,35" fill="none"/>`)
    },

    /* ─────────── LED ─────────── */
    led: {
      ar: 'الليد — الثنائي الباعث للضوء', en: 'Light Emitting Diode (LED)',
      job: 'يضيء عند مرور الكهرباء — لكن في اتجاه واحد فقط.',
      real: S(`<path d="M40 40 a20 20 0 0 1 40 0 v6 h-40 z" fill="#E53935" opacity=".85"/>
        <rect x="40" y="46" width="40" height="6" rx="2" fill="#B71C1C"/>
        <line class="wire" x1="50" y1="52" x2="50" y2="70"/>
        <line class="wire" x1="70" y1="52" x2="70" y2="64"/>
        <text x="46" y="20" class="sign">طويلة = +</text>`, 120, 74),
      sym: S(`${legs(35)}
        <polygon class="sym-f" points="42,20 42,50 76,35"/>
        <line class="sym" x1="76" y1="20" x2="76" y2="50"/>
        <line class="ray" x1="60" y1="16" x2="70" y2="6"/>
        <line class="ray" x1="72" y1="18" x2="82" y2="8"/>`)
    },

    /* ─────────── المفتاح ─────────── */
    switch: {
      ar: 'المفتاح', en: 'Switch',
      job: 'يفتح الطريق أمام الكهرباء أو يقطعه — مثل مفتاح النور.',
      real: S(`<rect x="34" y="24" width="52" height="28" rx="5" fill="#37474F"/>
        <rect x="42" y="18" width="16" height="22" rx="3" fill="#ECEFF1"/>
        <line class="wire" x1="0" y1="52" x2="34" y2="52"/>
        <line class="wire" x1="86" y1="52" x2="120" y2="52"/>`),
      sym: S(`${legs(35)}
        <circle class="dot" cx="34" cy="35" r="4"/><circle class="dot" cx="86" cy="35" r="4"/>
        <line class="sym" x1="34" y1="35" x2="80" y2="16"/>`)
    },

    /* ─────────── المكثّف ─────────── */
    capacitor: {
      ar: 'المكثّف', en: 'Capacitor',
      job: 'يخزّن شحنة كهربائية صغيرة ويطلقها بسرعة عند الحاجة.',
      real: S(`<rect x="42" y="10" width="36" height="40" rx="4" fill="#1E3A5F"/>
        <rect x="42" y="10" width="10" height="40" fill="#3E6EA8"/>
        <line class="wire" x1="52" y1="50" x2="52" y2="70"/>
        <line class="wire" x1="68" y1="50" x2="68" y2="70"/>
        <text x="60" y="34" class="lbl-in" text-anchor="middle">100µF</text>`, 120, 74),
      sym: S(`${legs(35)}
        <line class="sym" x1="52" y1="16" x2="52" y2="54"/>
        <path class="sym" d="M72 16 a26 26 0 0 0 0 38" fill="none"/>
        <text x="40" y="12" class="sign">+</text>`)
    },

    /* ─────────── الدايود ─────────── */
    diode: {
      ar: 'الدايود — الثنائي', en: 'Diode',
      job: 'يسمح للكهرباء بالمرور في اتجاه واحد فقط — مثل باب دوّار.',
      real: S(`<line class="wire" x1="0" y1="35" x2="34" y2="35"/>
        <line class="wire" x1="86" y1="35" x2="120" y2="35"/>
        <rect x="34" y="24" width="52" height="22" rx="4" fill="#212121"/>
        <rect x="76" y="24" width="7" height="22" fill="#E0E0E0"/>`),
      sym: S(`${legs(35)}
        <polygon class="sym-f" points="42,20 42,50 76,35"/>
        <line class="sym" x1="76" y1="20" x2="76" y2="50"/>`)
    },

    /* ─────────── الترانزستور ─────────── */
    transistor: {
      ar: 'الترانزستور', en: 'Transistor',
      job: 'مفتاح إلكتروني بلا أجزاء متحرّكة — تيّار صغير يتحكّم في تيّار كبير.',
      real: S(`<path d="M38 18 h44 a4 4 0 0 1 4 4 v22 a4 4 0 0 1 -4 4 h-44 a4 4 0 0 1 -4 -4 v-22 a4 4 0 0 1 4 -4z" fill="#263238"/>
        <rect x="34" y="18" width="52" height="6" fill="#455A64"/>
        <line class="wire" x1="46" y1="48" x2="46" y2="70"/>
        <line class="wire" x1="60" y1="48" x2="60" y2="70"/>
        <line class="wire" x1="74" y1="48" x2="74" y2="70"/>`, 120, 74),
      sym: S(`<circle class="sym" cx="60" cy="35" r="26" fill="none"/>
        <line class="wire" x1="10" y1="35" x2="46" y2="35"/>
        <line class="sym" x1="46" y1="18" x2="46" y2="52"/>
        <line class="sym" x1="46" y1="26" x2="76" y2="12"/>
        <line class="sym" x1="46" y1="44" x2="76" y2="58"/>
        <line class="wire" x1="76" y1="12" x2="76" y2="2"/>
        <line class="wire" x1="76" y1="58" x2="76" y2="68"/>
        <polygon class="sym-f" points="66,50 74,54 68,58"/>`, 120, 70)
    },

    /* ─────────── المحرّك ─────────── */
    motor: {
      ar: 'المحرّك', en: 'Motor',
      job: 'يحوّل الكهرباء إلى حركة دوران — قلب كل روبوت.',
      real: S(`<rect x="30" y="16" width="54" height="38" rx="6" fill="#546E7A"/>
        <circle cx="57" cy="35" r="12" fill="#37474F"/>
        <rect x="84" y="30" width="18" height="10" rx="3" fill="#B0BEC5"/>
        <line class="wire" x1="30" y1="24" x2="6" y2="24"/>
        <line class="wire" x1="30" y1="46" x2="6" y2="46"/>`),
      sym: S(`${legs(35)}
        <circle class="sym" cx="60" cy="35" r="24" fill="none"/>
        <text x="60" y="42" class="sym-t" text-anchor="middle">M</text>`)
    },

    /* ─────────── الطنّان ─────────── */
    buzzer: {
      ar: 'الطنّان', en: 'Buzzer',
      job: 'يصدر صوتًا عند مرور الكهرباء — للتنبيه والإنذار.',
      real: S(`<circle cx="60" cy="34" r="24" fill="#212121"/>
        <circle cx="60" cy="34" r="5" fill="#616161"/>
        <line class="wire" x1="52" y1="58" x2="52" y2="70"/>
        <line class="wire" x1="68" y1="58" x2="68" y2="70"/>`, 120, 74),
      sym: S(`${legs(35)}
        <path class="sym" d="M40 20 h14 l14 -12 v54 l-14 -12 h-14 z" fill="none"/>
        <path class="ray" d="M76 24 a16 16 0 0 1 0 22" fill="none"/>
        <path class="ray" d="M84 18 a26 26 0 0 1 0 34" fill="none"/>`)
    },

    /* ─────────── المقاومة الضوئية ─────────── */
    ldr: {
      ar: 'المقاومة الضوئية', en: 'Light Dependent Resistor (LDR)',
      job: 'مقاومته تتغيّر مع الضوء — يعرف إن كان المكان مضيئًا أم مظلمًا.',
      real: S(`<circle cx="60" cy="34" r="22" fill="#FFE082"/>
        <path d="M42 34 q6 -10 12 0 t12 0 t12 0" stroke="#5D4037" stroke-width="3" fill="none"/>
        <path d="M42 42 q6 -10 12 0 t12 0 t12 0" stroke="#5D4037" stroke-width="3" fill="none"/>
        <line class="wire" x1="52" y1="56" x2="52" y2="70"/>
        <line class="wire" x1="68" y1="56" x2="68" y2="70"/>`, 120, 74),
      sym: S(`${legs(35)}
        <rect class="sym" x="38" y="24" width="44" height="22" rx="3" fill="none"/>
        <line class="ray" x1="46" y1="8" x2="54" y2="20"/>
        <line class="ray" x1="62" y1="8" x2="70" y2="20"/>`)
    },

    /* ─────────── حسّاس المسافة ─────────── */
    ultrasonic: {
      ar: 'حسّاس الموجات فوق الصوتية', en: 'Ultrasonic Sensor',
      job: 'يرسل صوتًا لا نسمعه ويحسب زمن ارتداده ليعرف بُعد الأشياء.',
      real: S(`<rect x="18" y="14" width="84" height="42" rx="5" fill="#1B5E20"/>
        <circle cx="42" cy="32" r="15" fill="#37474F"/><circle cx="42" cy="32" r="10" fill="#607D8B"/>
        <circle cx="78" cy="32" r="15" fill="#37474F"/><circle cx="78" cy="32" r="10" fill="#607D8B"/>
        <rect x="46" y="56" width="28" height="8" fill="#212121"/>`, 120, 70)
    },

    /* ─────────── لوحة التجارب ─────────── */
    breadboard: {
      ar: 'لوحة التجارب', en: 'Breadboard',
      job: 'تركّب عليها الدائرة دون لحام — تدخل الأرجل وتخرجها بحرّية.',
      real: S(`<rect x="6" y="8" width="108" height="56" rx="5" fill="#F5F5F5" stroke="#BDBDBD" stroke-width="2"/>
        <line x1="6" y1="36" x2="114" y2="36" stroke="#E0E0E0" stroke-width="2"/>
        ${(() => { let d = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 18; c++)
          d += `<rect x="${11 + c * 6}" y="${14 + r * 6 + (r > 1 ? 12 : 0)}" width="3" height="3" fill="#9E9E9E"/>`;
          return d; })()}
        <rect x="6" y="8" width="108" height="4" fill="#E53935" opacity=".5"/>
        <rect x="6" y="60" width="108" height="4" fill="#1E88E5" opacity=".5"/>`, 120, 72)
    },

    /* ─────────── المتحكّم ─────────── */
    arduino: {
      ar: 'لوحة أردوينو', en: 'Arduino Board',
      job: 'عقل الروبوت — يقرأ الحسّاسات وينفّذ البرنامج ويحرّك الأجزاء.',
      real: S(`<rect x="8" y="10" width="104" height="52" rx="5" fill="#00838F"/>
        <rect x="14" y="4" width="26" height="14" rx="2" fill="#9E9E9E"/>
        <rect x="46" y="26" width="30" height="22" rx="2" fill="#212121"/>
        ${(() => { let d = ''; for (let c = 0; c < 14; c++)
          d += `<rect x="${16 + c * 7}" y="12" width="4" height="7" fill="#263238"/>` +
               `<rect x="${16 + c * 7}" y="53" width="4" height="7" fill="#263238"/>`;
          return d; })()}
        <circle cx="94" cy="24" r="4" fill="#8BC34A"/>`, 120, 68)
    },

    /* ─────────── المرحّل ─────────── */
    relay: {
      ar: 'المرحّل', en: 'Relay',
      job: 'مفتاح تُشغّله الكهرباء — تيّار صغير يفتح طريقًا لتيّار كبير.',
      real: S(`<rect x="26" y="12" width="68" height="44" rx="4" fill="#1565C0"/>
        <rect x="34" y="20" width="52" height="18" rx="2" fill="#0D47A1"/>
        <line class="wire" x1="40" y1="56" x2="40" y2="70"/>
        <line class="wire" x1="60" y1="56" x2="60" y2="70"/>
        <line class="wire" x1="80" y1="56" x2="80" y2="70"/>`, 120, 74)
    },

    /* ─────────── الأسلاك ─────────── */
    wire: {
      ar: 'السلك', en: 'Wire',
      job: 'الطريق الذي تسير فيه الكهرباء بين العناصر.',
      real: S(`<path d="M6 46 q30 -34 54 0 t54 -8" stroke="#E53935" stroke-width="7"
        fill="none" stroke-linecap="round"/>
        <rect x="2" y="40" width="10" height="12" rx="2" fill="#B0BEC5"/>
        <rect x="108" y="30" width="10" height="12" rx="2" fill="#B0BEC5"/>`, 120, 70)
    }
  };

  /* ---------- الرسم ---------- */
  function render() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      const p = PARTS[box.dataset.part];
      if (!p) { box.innerHTML = '<span class="part__miss">؟</span>'; return; }
      const only = box.dataset.only;               // real | symbol | (فارغ = الاثنان)
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();

  window.PARTS = PARTS;
})();

/* ============================================================
   إضافات دروس 02 – 06 — عناصر جديدة، إضافة فقط
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const legs = (y) => `<line class="wire" x1="0" y1="${y}" x2="30" y2="${y}"/>
                       <line class="wire" x1="90" y1="${y}" x2="120" y2="${y}"/>`;

  const MORE = {

    /* ─────────── المصباح ─────────── */
    lamp: {
      ar: 'المصباح', en: 'Lamp',
      job: 'يحوّل الكهرباء إلى ضوء — وهو «الحمل» الذي تعمل الدائرة من أجله.',
      real: S(`<circle cx="60" cy="28" r="19" fill="#FFF3C4" stroke="#F9A825" stroke-width="2"/>
        <path d="M52 33 q4 -11 8 0 t8 0" stroke="#F9A825" stroke-width="2.5" fill="none"/>
        <rect x="51" y="44" width="18" height="7" rx="2" fill="#CFD8DC"/>
        <rect x="52" y="51" width="16" height="14" rx="2" fill="#9E9E9E"/>
        <line x1="52" y1="56" x2="68" y2="56" stroke="#78909C" stroke-width="2"/>
        <line x1="52" y1="61" x2="68" y2="61" stroke="#78909C" stroke-width="2"/>`),
      sym: S(`${legs(35)}
        <circle class="sym" cx="60" cy="35" r="24"/>
        <line class="sym" x1="43" y1="18" x2="77" y2="52"/>
        <line class="sym" x1="77" y1="18" x2="43" y2="52"/>`)
    },

    /* ─────────── عنصر التسخين ─────────── */
    heater: {
      ar: 'عنصر التسخين', en: 'Heating Element',
      job: 'سلك عالي المقاومة يسخن حتى يتوهّج — قلب المحمصة ومجفّف الشعر.',
      real: S(`<line class="wire" x1="0" y1="46" x2="20" y2="46"/>
        <line class="wire" x1="100" y1="46" x2="120" y2="46"/>
        <path d="M20 46 a8 8 0 1 1 16 0 a8 8 0 1 1 16 0 a8 8 0 1 1 16 0 a8 8 0 1 1 16 0 a8 8 0 1 1 16 0"
              stroke="#E53935" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path class="ray" d="M46 24 q6 -8 12 0 t12 0" fill="none"/>
        <path class="ray" d="M46 12 q6 -8 12 0 t12 0" fill="none"/>`),
      sym: S(`${legs(35)}
        <rect class="sym" x="34" y="24" width="52" height="22" rx="2"/>
        <line class="ray" x1="48" y1="20" x2="48" y2="8"/>
        <line class="ray" x1="60" y1="20" x2="60" y2="8"/>
        <line class="ray" x1="72" y1="20" x2="72" y2="8"/>`)
    }
  };

  /* تسجيل العناصر الجديدة دون المساس بالقديمة */
  window.PARTS = window.PARTS || {};
  Object.keys(MORE).forEach((k) => { if (!window.PARTS[k]) window.PARTS[k] = MORE[k]; });

  /* رسم احتياطي — إن كان المحرّك قد رسم قبل هذه الإضافة */
  function renderMore() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      const p = MORE[box.dataset.part];
      if (!p) return;
      const only = box.dataset.only;
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderMore);
  else renderMore();
})();

/* ============================================================
   إضافات دروس 24 – 29 — أدوات القياس والعمل وعناصر التحكّم
   (إضافة فقط: لا تعديل على أي عنصر سابق)
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const legs = (y) => `<line class="wire" x1="0" y1="${y}" x2="30" y2="${y}"/>
                       <line class="wire" x1="90" y1="${y}" x2="120" y2="${y}"/>`;

  const TOOLS = {

    /* ─────────── الملتيميتر ─────────── */
    multimeter: {
      ar: 'المقياس المتعدّد', en: 'Multimeter',
      job: 'يقيس الجهد والمقاومة والتيّار، ويكشف السلك المقطوع بصفير قصير.',
      real: S(`<rect x="28" y="2" width="62" height="54" rx="8" fill="#F9A825"/>
        <rect x="34" y="8" width="50" height="16" rx="3" fill="#12291F"/>
        <text x="59" y="21" class="lbl-in" text-anchor="middle">4.98</text>
        <circle cx="59" cy="40" r="12" fill="#263238"/>
        <line x1="59" y1="40" x2="59" y2="31" stroke="#FFFFFF" stroke-width="3"/>
        <circle cx="59" cy="40" r="3" fill="#B0BEC5"/>
        <path d="M44 56 q-16 6 -32 14" stroke="#E53935" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M74 56 q16 6 32 14" stroke="#212121" stroke-width="4" fill="none" stroke-linecap="round"/>`, 120, 74),
      sym: S(`${legs(35)}
        <circle class="sym" cx="60" cy="35" r="24" fill="none"/>
        <text x="60" y="43" class="sym-t" text-anchor="middle">V</text>`)
    },

    /* ─────────── قاطع الأسلاك ─────────── */
    cutter: {
      ar: 'قاطع الأسلاك', en: 'Wire Cutter',
      job: 'يقصّ السلك قصّة نظيفة — أفضل كثيرًا من شدّه باليد أو بالأسنان.',
      real: S(`<path d="M58 28 L16 10" stroke="#D32F2F" stroke-width="10" stroke-linecap="round"/>
        <path d="M58 44 L16 62" stroke="#D32F2F" stroke-width="10" stroke-linecap="round"/>
        <path d="M58 28 L102 20" stroke="#90A4AE" stroke-width="7" stroke-linecap="round"/>
        <path d="M58 44 L102 52" stroke="#90A4AE" stroke-width="7" stroke-linecap="round"/>
        <circle cx="58" cy="36" r="5" fill="#37474F"/>`)
    },

    /* ─────────── كاشطة العزل ─────────── */
    stripper: {
      ar: 'كاشطة العزل', en: 'Wire Stripper',
      job: 'تنزع الغلاف البلاستيكي وتترك النحاس في الداخل سليمًا.',
      real: S(`<path d="M60 26 L18 10" stroke="#1565C0" stroke-width="10" stroke-linecap="round"/>
        <path d="M60 46 L18 62" stroke="#1565C0" stroke-width="10" stroke-linecap="round"/>
        <path d="M60 26 L104 22" stroke="#90A4AE" stroke-width="6" stroke-linecap="round"/>
        <path d="M60 46 L104 50" stroke="#90A4AE" stroke-width="6" stroke-linecap="round"/>
        <polygon points="76,29 84,29 80,35" fill="#FBFDFF"/>
        <polygon points="76,43 84,43 80,37" fill="#FBFDFF"/>
        <circle cx="60" cy="36" r="5" fill="#37474F"/>`)
    },

    /* ─────────── المفكّ ─────────── */
    screwdriver: {
      ar: 'المفكّ', en: 'Screwdriver',
      job: 'يفتح البراغي ويغلقها، ومقبضه البلاستيكي عازل يحمي يدك.',
      real: S(`<rect x="8" y="24" width="48" height="22" rx="9" fill="#C62828"/>
        <line x1="20" y1="28" x2="20" y2="42" stroke="#8E1F1F" stroke-width="3"/>
        <line x1="30" y1="28" x2="30" y2="42" stroke="#8E1F1F" stroke-width="3"/>
        <line x1="40" y1="28" x2="40" y2="42" stroke="#8E1F1F" stroke-width="3"/>
        <rect x="56" y="31" width="44" height="8" rx="2" fill="#B0BEC5"/>
        <rect x="100" y="28" width="14" height="14" rx="2" fill="#78909C"/>`)
    },

    /* ─────────── الملقط ─────────── */
    tweezers: {
      ar: 'الملقط', en: 'Tweezers',
      job: 'يمسك القطع الصغيرة جدًا التي لا تستطيع أصابعك الإمساك بها.',
      real: S(`<path d="M12 24 L104 34" stroke="#90A4AE" stroke-width="8" stroke-linecap="round"/>
        <path d="M12 46 L104 36" stroke="#90A4AE" stroke-width="8" stroke-linecap="round"/>
        <rect x="6" y="26" width="16" height="18" rx="6" fill="#546E7A"/>
        <circle cx="110" cy="35" r="3" fill="#455A64"/>`)
    },

    /* ─────────── كاوي اللحام ─────────── */
    'soldering-iron': {
      ar: 'كاوية اللحام', en: 'Soldering Iron',
      job: 'يذيب معدن اللحام ليثبّت القطع — حارّ جدًا، ولا يُستعمل إلا بإشراف كبير.',
      real: S(`<rect x="2" y="32" width="22" height="10" rx="4" fill="#263238"/>
        <rect x="24" y="26" width="46" height="22" rx="8" fill="#EF6C00"/>
        <line x1="36" y1="30" x2="36" y2="44" stroke="#B34E00" stroke-width="3"/>
        <line x1="46" y1="30" x2="46" y2="44" stroke="#B34E00" stroke-width="3"/>
        <rect x="70" y="33" width="26" height="8" rx="2" fill="#B0BEC5"/>
        <polygon points="96,32 116,37 96,42" fill="#E53935"/>
        <path class="ray" d="M98 24 q7 -7 0 -14" fill="none"/>
        <path class="ray" d="M108 26 q7 -7 0 -14" fill="none"/>`)
    },

    /* ─────────── الدائرة المتكاملة ─────────── */
    ic: {
      ar: 'الدائرة المتكاملة', en: 'Integrated Circuit (IC)',
      job: 'حبّة صغيرة بداخلها ملايين الترانزستورات — عقل الأجهزة الحديثة.',
      real: S(`<rect x="28" y="14" width="64" height="42" rx="4" fill="#212121"/>
        <circle cx="38" cy="24" r="4" fill="#424242"/>
        <text x="64" y="42" class="lbl-in" text-anchor="middle">IC</text>
        ${(() => { let d = ''; for (let c = 0; c < 4; c++)
          d += `<rect x="${36 + c * 15}" y="6" width="6" height="8" fill="#B0BEC5"/>` +
               `<rect x="${36 + c * 15}" y="56" width="6" height="8" fill="#B0BEC5"/>`;
          return d; })()}`, 120, 70),
      sym: S(`<rect class="sym" x="30" y="16" width="60" height="38" rx="3" fill="none"/>
        <text x="60" y="42" class="sym-t" text-anchor="middle">IC</text>
        <line class="wire" x1="44" y1="16" x2="44" y2="4"/>
        <line class="wire" x1="76" y1="16" x2="76" y2="4"/>
        <line class="wire" x1="44" y1="54" x2="44" y2="66"/>
        <line class="wire" x1="76" y1="54" x2="76" y2="66"/>`)
    },

    /* ─────────── الزرّ اللحظي ─────────── */
    button: {
      ar: 'الزرّ اللحظي', en: 'Push Button',
      job: 'يوصّل الطريق ما دام إصبعك عليه، ويقطعه فور أن ترفعه.',
      real: S(`<rect x="36" y="20" width="48" height="30" rx="4" fill="#455A64"/>
        <circle cx="60" cy="28" r="11" fill="#E53935"/>
        <circle cx="60" cy="28" r="6" fill="#FF8A80"/>
        <line class="wire" x1="42" y1="50" x2="42" y2="68"/>
        <line class="wire" x1="78" y1="50" x2="78" y2="68"/>`, 120, 72),
      sym: S(`<line class="wire" x1="0" y1="46" x2="34" y2="46"/>
        <line class="wire" x1="86" y1="46" x2="120" y2="46"/>
        <line class="wire" x1="34" y1="46" x2="34" y2="36"/>
        <line class="wire" x1="86" y1="46" x2="86" y2="36"/>
        <circle class="dot" cx="34" cy="36" r="4"/><circle class="dot" cx="86" cy="36" r="4"/>
        <line class="sym" x1="34" y1="26" x2="86" y2="26"/>
        <line class="sym" x1="60" y1="26" x2="60" y2="12"/>
        <line class="sym" x1="46" y1="8" x2="74" y2="8"/>`)
    },

    /* ─────────── المقاومة المتغيّرة ─────────── */
    potentiometer: {
      ar: 'المقاومة المتغيّرة', en: 'Potentiometer',
      job: 'مقاومة تتغيّر قيمتها بلفّ مقبض — بها يتدرّج صوت الراديو.',
      real: S(`<circle cx="60" cy="34" r="20" fill="#1E88E5"/>
        <circle cx="60" cy="34" r="13" fill="#0D47A1"/>
        <line x1="60" y1="34" x2="60" y2="18" stroke="#FFFFFF" stroke-width="3"/>
        <line class="wire" x1="44" y1="52" x2="44" y2="70"/>
        <line class="wire" x1="60" y1="54" x2="60" y2="70"/>
        <line class="wire" x1="76" y1="52" x2="76" y2="70"/>`, 120, 74),
      sym: S(`<line class="wire" x1="0" y1="45" x2="30" y2="45"/>
        <line class="wire" x1="90" y1="45" x2="120" y2="45"/>
        <polyline class="sym" points="30,45 38,32 50,58 62,32 74,58 84,45 90,45" fill="none"/>
        <line class="sym" x1="60" y1="6" x2="60" y2="24"/>
        <polygon class="sym-f" points="54,20 66,20 60,32"/>`)
    }
  };

  /* تسجيل العناصر الجديدة دون المساس بالقديمة */
  window.PARTS = window.PARTS || {};
  Object.keys(TOOLS).forEach((k) => { if (!window.PARTS[k]) window.PARTS[k] = TOOLS[k]; });

  /* رسم تكميلي — لكل صندوق لم ترسمه المكتبة الأصلية */
  function renderTools() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      const p = TOOLS[box.dataset.part];
      if (!p) return;
      const only = box.dataset.only;
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderTools);
  else renderTools();
})();

/* ============================================================
   إضافات القسم الخامس — عضلات الروبوت وحواسّه (الدروس 30 → 37)
   إضافة فقط — لا تعديل على ما سبق
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const legs = (y) => `<line class="wire" x1="0" y1="${y}" x2="30" y2="${y}"/>
                       <line class="wire" x1="90" y1="${y}" x2="120" y2="${y}"/>`;

  const ROBOT = {

    /* ─────────── محرّك السيرفو ─────────── */
    servo: {
      ar: 'محرّك السيرفو', en: 'Servo Motor',
      job: 'تأمره بزاوية فيذهب إليها ويثبت عندها — عضلة الذراع والمقود.',
      real: S(`<rect x="30" y="22" width="46" height="40" rx="3" fill="#1565C0"/>
        <rect x="18" y="28" width="13" height="10" rx="2" fill="#1976D2"/>
        <rect x="75" y="28" width="13" height="10" rx="2" fill="#1976D2"/>
        <circle cx="53" cy="20" r="10" fill="#37474F"/>
        <circle cx="53" cy="20" r="4" fill="#CFD8DC"/>
        <rect x="49" y="2" width="8" height="18" rx="3" fill="#ECEFF1" stroke="#90A4AE"/>
        <line class="wire" x1="76" y1="44" x2="114" y2="44"/>
        <line class="wire" x1="76" y1="51" x2="114" y2="51"/>
        <line class="wire" x1="76" y1="58" x2="114" y2="58"/>`, 120, 70),
      sym: S(`${legs(35)}
        <circle class="sym" cx="60" cy="35" r="24" fill="none"/>
        <text x="60" y="42" class="sym-t" text-anchor="middle">S</text>
        <path class="ray" d="M60 6 a29 29 0 0 1 24 14" fill="none"/>
        <polygon class="sym-f" points="80,12 88,22 76,24"/>`)
    },

    /* ─────────── المحرّك الخطوي ─────────── */
    stepper: {
      ar: 'المحرّك الخطوي', en: 'Stepper Motor',
      job: 'يدور خطوة صغيرة محسوبة في كل مرّة — فتعرف كم دار بالضبط.',
      real: S(`<rect x="26" y="12" width="54" height="46" rx="7" fill="#78909C"/>
        <rect x="26" y="12" width="54" height="9" rx="4" fill="#546E7A"/>
        <circle cx="53" cy="36" r="14" fill="#455A64"/>
        <circle cx="53" cy="36" r="5" fill="#CFD8DC"/>
        <rect x="80" y="31" width="18" height="9" rx="2" fill="#B0BEC5"/>
        <line class="wire" x1="26" y1="26" x2="4" y2="26"/>
        <line class="wire" x1="26" y1="33" x2="4" y2="33"/>
        <line class="wire" x1="26" y1="40" x2="4" y2="40"/>
        <line class="wire" x1="26" y1="47" x2="4" y2="47"/>`, 120, 70),
      sym: S(`${legs(35)}
        <circle class="sym" cx="60" cy="35" r="24" fill="none"/>
        <text x="60" y="42" class="sym-t" text-anchor="middle">M</text>
        <line class="ray" x1="60" y1="4" x2="60" y2="11"/>
        <line class="ray" x1="79" y1="12" x2="75" y2="18"/>
        <line class="ray" x1="41" y1="12" x2="45" y2="18"/>
        <line class="ray" x1="60" y1="59" x2="60" y2="66"/>`)
    },

    /* ─────────── سائق المحرّك ─────────── */
    driver: {
      ar: 'دارة قيادة المحرّك', en: 'Motor Driver',
      job: 'يأخذ إشارة ضعيفة من اللوحة ويفتح للمحرّك تيّارًا قويًّا من البطارية.',
      real: S(`<rect x="10" y="14" width="100" height="42" rx="4" fill="#B71C1C"/>
        <rect x="44" y="24" width="32" height="24" rx="3" fill="#212121"/>
        <rect x="44" y="10" width="32" height="14" rx="2" fill="#90A4AE"/>
        <rect x="14" y="24" width="24" height="18" rx="2" fill="#1B5E20"/>
        <rect x="82" y="24" width="24" height="18" rx="2" fill="#1B5E20"/>
        <circle cx="20" cy="33" r="3" fill="#FAFAFA"/><circle cx="32" cy="33" r="3" fill="#FAFAFA"/>
        <circle cx="88" cy="33" r="3" fill="#FAFAFA"/><circle cx="100" cy="33" r="3" fill="#FAFAFA"/>
        <rect x="46" y="56" width="5" height="10" fill="#263238"/>
        <rect x="56" y="56" width="5" height="10" fill="#263238"/>
        <rect x="66" y="56" width="5" height="10" fill="#263238"/>`, 120, 70)
    },

    /* ─────────── حسّاس تتبّع الخط ─────────── */
    'ir-sensor': {
      ar: 'حسّاس تتبّع الخط', en: 'IR Line Sensor',
      job: 'يرسل ضوءًا لا نراه نحو الأرض ويقيس ما ارتدّ — فيميّز الأبيض من الأسود.',
      real: S(`<rect x="16" y="8" width="88" height="26" rx="4" fill="#1B5E20"/>
        <rect x="34" y="1" width="6" height="8" fill="#263238"/>
        <rect x="57" y="1" width="6" height="8" fill="#263238"/>
        <rect x="80" y="1" width="6" height="8" fill="#263238"/>
        <circle cx="46" cy="42" r="9" fill="#212121"/>
        <circle cx="76" cy="42" r="9" fill="#B3E5FC" stroke="#546E7A"/>
        <line class="ray" x1="46" y1="52" x2="46" y2="62"/>
        <line class="ray" x1="76" y1="62" x2="76" y2="52"/>
        <line x1="8" y1="66" x2="112" y2="66" stroke="#9E9E9E" stroke-width="4"/>
        <line x1="46" y1="66" x2="88" y2="66" stroke="#212121" stroke-width="6"/>`, 120, 70)
    },

    /* ─────────── العجلة ─────────── */
    wheel: {
      ar: 'العجلة', en: 'Wheel',
      job: 'تحوّل دوران المحرّك إلى تقدّم على الأرض — قدم الروبوت.',
      real: S(`<circle cx="60" cy="35" r="31" fill="#212121"/>
        <circle cx="60" cy="35" r="20" fill="#FBC02D"/>
        <circle cx="60" cy="35" r="6" fill="#455A64"/>
        <line x1="60" y1="15" x2="60" y2="55" stroke="#F9A825" stroke-width="3"/>
        <line x1="40" y1="35" x2="80" y2="35" stroke="#F9A825" stroke-width="3"/>
        <line x1="60" y1="2" x2="60" y2="10" stroke="#616161" stroke-width="3"/>
        <line x1="60" y1="60" x2="60" y2="68" stroke="#616161" stroke-width="3"/>
        <line x1="27" y1="35" x2="35" y2="35" stroke="#616161" stroke-width="3"/>
        <line x1="85" y1="35" x2="93" y2="35" stroke="#616161" stroke-width="3"/>`, 120, 70)
    },

    /* ─────────── الروبوت المتحرّك ─────────── */
    'robot-car': {
      ar: 'الروبوت المتحرّك', en: 'Robot Car',
      job: 'هيكل ومحرّكان وحسّاس ولوحة تحكّم وبطارية — كل ما تعلّمته في جسم واحد.',
      real: S(`<rect x="16" y="26" width="88" height="22" rx="5" fill="#37474F"/>
        <rect x="42" y="12" width="40" height="15" rx="3" fill="#00838F"/>
        <rect x="48" y="16" width="12" height="7" rx="1" fill="#004D40"/>
        <circle cx="34" cy="52" r="13" fill="#212121"/><circle cx="34" cy="52" r="5" fill="#FBC02D"/>
        <circle cx="88" cy="52" r="13" fill="#212121"/><circle cx="88" cy="52" r="5" fill="#FBC02D"/>
        <circle cx="61" cy="55" r="5" fill="#78909C"/>
        <rect x="6" y="30" width="12" height="12" rx="2" fill="#1B5E20"/>
        <line class="ray" x1="6" y1="36" x2="0" y2="30"/>
        <line class="ray" x1="6" y1="40" x2="0" y2="46"/>`, 120, 70)
    },

    /* ─────────── سلك الرفع ─────────── */
    usb: {
      ar: 'سلك USB', en: 'USB Cable',
      job: 'يحمل برنامجك من الحاسوب إلى اللوحة، ويغذّيها بالطاقة أثناء التجربة.',
      real: S(`<rect x="4" y="24" width="32" height="20" rx="3" fill="#B0BEC5"/>
        <rect x="10" y="29" width="20" height="10" rx="1" fill="#37474F"/>
        <path d="M36 34 q28 -26 52 0" stroke="#263238" stroke-width="8" fill="none" stroke-linecap="round"/>
        <rect x="86" y="24" width="30" height="20" rx="3" fill="#78909C"/>
        <rect x="92" y="29" width="18" height="10" rx="1" fill="#263238"/>`, 120, 70)
    }
  };

  /* تسجيل دون المساس بما سبق */
  window.PARTS = window.PARTS || {};
  Object.keys(ROBOT).forEach((k) => { if (!window.PARTS[k]) window.PARTS[k] = ROBOT[k]; });

  function renderRobot() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      const p = ROBOT[box.dataset.part];
      if (!p) return;
      const only = box.dataset.only;
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderRobot);
  else renderRobot();
})();

/* ============================================================
   إضافة — رسوم عناصر القسم الثاني (الدروس 13 إلى 17)
   إضافة فقط — لا يُعدَّل ما سبق.
   العناصر الجديدة: chip · speaker · relay-inside · capacitor-cer
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  /* أرجل الرقاقة: صفّان علوي وسفلي */
  const dipPins = (() => {
    let d = '';
    for (let c = 0; c < 4; c++) {
      const x = 36 + c * 16;
      d += `<rect x="${x}" y="3" width="6" height="9" rx="1" fill="#B0BEC5"/>`;
      d += `<rect x="${x}" y="58" width="6" height="9" rx="1" fill="#B0BEC5"/>`;
    }
    return d;
  })();

  const EXTRA = {

    /* ─────────── الرقاقة ─────────── */
    chip: {
      ar: 'الرقاقة', en: 'Chip',
      job: 'حبّة صغيرة سوداء. وفيها مدينة من المفاتيح! 🏙️',
      real: S(`<path d="M28 10 H96 V60 H28 V47 A7 7 0 0 0 28 33 Z" fill="#1B1B1B"/>
        ${dipPins}
        <circle cx="39" cy="52" r="3.2" fill="#9E9E9E"/>
        <text x="16" y="72" class="sign">الحزّ</text>`, 120, 76),
      sym: S(`<rect class="sym" x="34" y="12" width="52" height="46" rx="3"/>
        <path class="sym" d="M34 26 a8 8 0 0 1 0 18"/>
        <line class="wire" x1="10" y1="22" x2="34" y2="22"/>
        <line class="wire" x1="10" y1="35" x2="34" y2="35"/>
        <line class="wire" x1="10" y1="48" x2="34" y2="48"/>
        <line class="wire" x1="86" y1="22" x2="110" y2="22"/>
        <line class="wire" x1="86" y1="35" x2="110" y2="35"/>
        <line class="wire" x1="86" y1="48" x2="110" y2="48"/>
        <text x="63" y="40" class="sym-t" text-anchor="middle">IC</text>`)
    },

    /* ─────────── السمّاعة ─────────── */
    speaker: {
      ar: 'مكبّر الصوت', en: 'Loudspeaker',
      job: 'مخروط يدفع الهواء بسرعة. فيخرج الصوت! 🎵',
      real: S(`<path d="M46 12 L88 2 V68 L46 58 Z" fill="#8D6E63"/>
        <path d="M46 12 L88 2 V8 L46 18 Z" fill="#A1887F"/>
        <rect x="24" y="24" width="24" height="22" rx="3" fill="#37474F"/>
        <circle cx="36" cy="35" r="6" fill="#90A4AE"/>
        <line class="wire" x1="24" y1="29" x2="4" y2="29"/>
        <line class="wire" x1="24" y1="41" x2="4" y2="41"/>`, 120, 70),
      sym: S(`<line class="wire" x1="0" y1="26" x2="30" y2="26"/>
        <line class="wire" x1="0" y1="44" x2="30" y2="44"/>
        <rect class="sym" x="30" y="24" width="14" height="22"/>
        <path class="sym" d="M44 24 L66 8 V62 L44 46 Z"/>
        <path class="ray" d="M76 20 a20 20 0 0 1 0 30" fill="none"/>
        <path class="ray" d="M88 12 a30 30 0 0 1 0 46" fill="none"/>`)
    },

    /* ─────────── داخل المرحّل ─────────── */
    'relay-inside': {
      ar: 'داخل المرحّل', en: 'Inside a Relay',
      job: 'مغناطيس صغير يسحب الذراع. فيلتقي الطرفان ويمرّ التيّار 🧲',
      real: S(`<line x1="10" y1="14" x2="86" y2="24" stroke="#263238" stroke-width="6" stroke-linecap="round"/>
        <circle cx="10" cy="14" r="5" fill="#455A64"/>
        <rect x="12" y="32" width="30" height="30" rx="4" fill="#37474F"/>
        <path d="M16 38 h22 M16 45 h22 M16 52 h22 M16 59 h22" stroke="#90A4AE" stroke-width="3"/>
        <path class="ray" d="M27 30 v-8" stroke-width="3"/>
        <circle cx="78" cy="36" r="5" fill="#C62828"/>
        <circle cx="100" cy="36" r="5" fill="#C62828"/>
        <line x1="78" y1="41" x2="78" y2="70" stroke="#C62828" stroke-width="3"/>
        <line x1="100" y1="41" x2="100" y2="70" stroke="#C62828" stroke-width="3"/>
        <line class="wire" x1="19" y1="62" x2="19" y2="74"/>
        <line class="wire" x1="35" y1="62" x2="35" y2="74"/>`, 120, 78),
      sym: S(`<line class="wire" x1="0" y1="52" x2="16" y2="52"/>
        <rect class="sym" x="16" y="42" width="34" height="20"/>
        <line class="wire" x1="50" y1="52" x2="66" y2="52"/>
        <line class="sym" x1="33" y1="42" x2="33" y2="26" stroke-dasharray="4 3"/>
        <line class="sym" x1="33" y1="26" x2="80" y2="26" stroke-dasharray="4 3"/>
        <circle class="dot" cx="80" cy="26" r="4"/>
        <circle class="dot" cx="112" cy="26" r="4"/>
        <line class="sym" x1="80" y1="26" x2="112" y2="10"/>
        <line class="wire" x1="80" y1="26" x2="80" y2="66"/>
        <line class="wire" x1="112" y1="26" x2="112" y2="66"/>`)
    },

    /* ─────────── مكثّف خزفي بلا قطبية ─────────── */
    'capacitor-cer': {
      ar: 'المكثّف الخزفي', en: 'Ceramic Capacitor',
      job: 'صغير جدًا وبلا اتجاه. ركّبه كيف شئت! 🙂',
      real: S(`<ellipse cx="60" cy="28" rx="23" ry="19" fill="#D89B4A"/>
        <line class="wire" x1="52" y1="45" x2="52" y2="72"/>
        <line class="wire" x1="68" y1="45" x2="68" y2="72"/>`, 120, 76),
      sym: S(`<line class="wire" x1="0" y1="35" x2="54" y2="35"/>
        <line class="wire" x1="66" y1="35" x2="120" y2="35"/>
        <line class="sym" x1="54" y1="15" x2="54" y2="55"/>
        <line class="sym" x1="66" y1="15" x2="66" y2="55"/>`)
    }
  };

  /* ---------- التسجيل ---------- */
  const REG = (window.PARTS = window.PARTS || {});
  Object.keys(EXTRA).forEach((k) => { if (!REG[k]) REG[k] = EXTRA[k]; });

  /* ---------- رسم احتياطي: للصناديق التي لم تُرسَم بعد فقط ---------- */
  function draw() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      if (box.children.length && !box.querySelector('.part__miss')) return;
      const p = EXTRA[box.dataset.part];
      if (!p) return;
      const only = box.dataset.only;
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', draw);
  else draw();
})();

/* ============================================================
   إضافة — رسوم قسم الحسّاسات (الدروس 18 إلى 23)
   إضافة فقط: لا شيء ممّا سبق تغيّر.
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const legs = (y) => `<line class="wire" x1="0" y1="${y}" x2="30" y2="${y}"/>
                       <line class="wire" x1="90" y1="${y}" x2="120" y2="${y}"/>`;

  const SENSORS = {

    /* ─────────── الحسّاس بوجه عام ─────────── */
    sensor: {
      ar: 'الحسّاس', en: 'Sensor',
      job: 'يشعر بشيء في العالم — ضوء أو حرارة أو صوت — ويحوّله إلى إشارة كهربائية.',
      real: S(`<rect x="24" y="12" width="72" height="36" rx="5" fill="#1565C0"/>
        <rect x="30" y="17" width="14" height="9" rx="2" fill="#0D47A1"/>
        <circle cx="64" cy="30" r="12" fill="#0D47A1"/>
        <circle cx="64" cy="30" r="6" fill="#90CAF9"/>
        <line class="wire" x1="42" y1="48" x2="42" y2="72"/>
        <line class="wire" x1="60" y1="48" x2="60" y2="72"/>
        <line class="wire" x1="78" y1="48" x2="78" y2="72"/>`, 120, 74),
      sym: S(`<rect class="sym" x="40" y="20" width="44" height="30" rx="4"/>
        <text x="62" y="42" class="sym-t" text-anchor="middle">S</text>
        <line class="ray" x1="4" y1="17" x2="34" y2="27"/>
        <line class="ray" x1="4" y1="35" x2="34" y2="35"/>
        <line class="ray" x1="4" y1="53" x2="34" y2="43"/>
        <line class="wire" x1="84" y1="35" x2="120" y2="35"/>`)
    },

    /* ─────────── مقسّم الجهد ─────────── */
    divider: {
      ar: 'مقسّم الجهد', en: 'Voltage Divider',
      job: 'مقاومتان تتقاسمان دفع البطارية، والنقطة بينهما تخبرنا بنصيب كلٍّ منهما.',
      real: S(`<rect x="24" y="6" width="70" height="24" rx="4" fill="#2563EB"/>
        <text x="59" y="22" class="lbl-in" text-anchor="middle">R1</text>
        <rect x="24" y="40" width="70" height="24" rx="4" fill="#F59E0B"/>
        <text x="59" y="56" class="lbl-in" text-anchor="middle">R2</text>
        <circle class="dot" cx="94" cy="35" r="4"/>
        <line class="wire" x1="94" y1="35" x2="118" y2="35"/>
        <text x="2" y="39" class="sign">OUT</text>`),
      sym: S(`<line class="wire" x1="58" y1="2" x2="58" y2="10"/>
        <polyline class="sym" points="58,10 48,15 68,21 48,27 68,33 58,36"/>
        <circle class="dot" cx="58" cy="36" r="4"/>
        <line class="wire" x1="58" y1="36" x2="112" y2="36"/>
        <polyline class="sym" points="58,36 48,41 68,47 48,53 68,59 58,64"/>
        <line class="wire" x1="58" y1="64" x2="58" y2="70"/>
        <text x="70" y="12" class="sign">+</text>`)
    },

    /* ─────────── المقاومة الحرارية ─────────── */
    thermistor: {
      ar: 'الثرمستور — المقاومة الحرارية', en: 'Thermistor',
      job: 'مقاومته تتغيّر مع الحرارة — به يعرف المكيّف والثلاجة متى يعملان.',
      real: S(`<circle cx="60" cy="26" r="18" fill="#37474F"/>
        <circle cx="60" cy="26" r="12" fill="#607D8B"/>
        <text x="60" y="30" class="lbl-in" text-anchor="middle">10k</text>
        <line class="wire" x1="50" y1="41" x2="50" y2="72"/>
        <line class="wire" x1="70" y1="41" x2="70" y2="72"/>`, 120, 74),
      sym: S(`${legs(35)}
        <rect class="sym" x="36" y="24" width="48" height="22" rx="3"/>
        <line class="sym" x1="30" y1="56" x2="90" y2="16"/>
        <text x="92" y="18" class="sign">t°</text>`)
    },

    /* ─────────── حسّاس حرارة ورطوبة رقمي ─────────── */
    dht11: {
      ar: 'حسّاس الحرارة والرطوبة الرقمي', en: 'DHT11 Temperature & Humidity Sensor',
      job: 'يقيس الحرارة والرطوبة ثم يرسل الرقم جاهزًا إلى لوحة التحكّم.',
      real: S(`<rect x="34" y="4" width="52" height="44" rx="4" fill="#1E88E5"/>
        ${(() => { let d = ''; for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++)
          d += `<rect x="${40 + c * 9}" y="${10 + r * 7}" width="5" height="4" rx="1" fill="#0D47A1"/>`;
          return d; })()}
        <line class="wire" x1="46" y1="48" x2="46" y2="72"/>
        <line class="wire" x1="56" y1="48" x2="56" y2="72"/>
        <line class="wire" x1="66" y1="48" x2="66" y2="72"/>
        <line class="wire" x1="76" y1="48" x2="76" y2="72"/>`, 120, 74)
    },

    /* ─────────── حسّاس الحركة ─────────── */
    pir: {
      ar: 'حسّاس الأشعّة تحت الحمراء السلبي', en: 'Passive Infrared Sensor (PIR)',
      job: 'يلتقط حرارة الأجسام الدافئة، فيعرف أن أحدًا تحرّك أمامه.',
      real: S(`<rect x="24" y="36" width="72" height="18" rx="3" fill="#1B5E20"/>
        <path d="M30 36 a30 26 0 0 1 60 0 z" fill="#F2F4F6" stroke="#B0BEC5" stroke-width="2"/>
        <path d="M60 11 v25 M43 16 l9 20 M77 16 l-9 20" stroke="#CFD8DC" stroke-width="2" fill="none"/>
        <line class="wire" x1="40" y1="54" x2="40" y2="72"/>
        <line class="wire" x1="60" y1="54" x2="60" y2="72"/>
        <line class="wire" x1="80" y1="54" x2="80" y2="72"/>`, 120, 74),
      sym: S(`<rect class="sym" x="44" y="20" width="40" height="30" rx="4"/>
        <text x="64" y="41" class="sign" text-anchor="middle">PIR</text>
        <path class="ray" d="M18 21 q11 14 0 28" fill="none"/>
        <path class="ray" d="M30 26 q7 9 0 18" fill="none"/>
        <line class="wire" x1="84" y1="35" x2="120" y2="35"/>`)
    },

    /* ─────────── حسّاس اللمس ─────────── */
    touch: {
      ar: 'حسّاس اللمس', en: 'Touch Sensor',
      job: 'يشعر بلمسة إصبعك دون زرّ يتحرّك — تكفي لمسة خفيفة.',
      real: S(`<rect x="24" y="12" width="72" height="36" rx="4" fill="#1B5E20"/>
        <rect x="36" y="18" width="48" height="24" rx="3" fill="#C9A227"/>
        <circle cx="60" cy="30" r="9" fill="#8D6E63" opacity=".55"/>
        <line class="wire" x1="42" y1="48" x2="42" y2="72"/>
        <line class="wire" x1="60" y1="48" x2="60" y2="72"/>
        <line class="wire" x1="78" y1="48" x2="78" y2="72"/>`, 120, 74)
    },

    /* ─────────── الميكروفون ─────────── */
    mic: {
      ar: 'الميكروفون', en: 'Microphone',
      job: 'يحوّل اهتزاز الهواء — أي الصوت — إلى إشارة كهربائية.',
      real: S(`<circle cx="62" cy="24" r="16" fill="#455A64"/>
        <circle cx="62" cy="24" r="10" fill="#263238"/>
        <circle cx="62" cy="24" r="3" fill="#90A4AE"/>
        <rect x="26" y="38" width="68" height="14" rx="3" fill="#1B5E20"/>
        <path class="ray" d="M24 13 q9 11 0 22" fill="none"/>
        <path class="ray" d="M13 6 q14 18 0 36" fill="none"/>
        <line class="wire" x1="42" y1="52" x2="42" y2="72"/>
        <line class="wire" x1="60" y1="52" x2="60" y2="72"/>
        <line class="wire" x1="78" y1="52" x2="78" y2="72"/>`, 120, 74)
    },

    /* ─────────── حسّاس رطوبة التربة ─────────── */
    soil: {
      ar: 'حسّاس رطوبة التربة', en: 'Soil Moisture Sensor',
      job: 'يقيس كمية الماء في التربة، فيعرف الجهاز متى تحتاج النبتة إلى سقاية.',
      real: S(`<rect x="6" y="54" width="108" height="18" fill="#8D6E63"/>
        <rect x="42" y="8" width="36" height="16" rx="3" fill="#1B5E20"/>
        <rect x="48" y="24" width="8" height="42" rx="2" fill="#C9A227"/>
        <rect x="64" y="24" width="8" height="42" rx="2" fill="#C9A227"/>
        <line class="wire" x1="52" y1="8" x2="52" y2="0"/>
        <line class="wire" x1="60" y1="8" x2="60" y2="0"/>
        <line class="wire" x1="68" y1="8" x2="68" y2="0"/>
        <circle cx="24" cy="62" r="3.5" fill="#4FC3F7"/>
        <circle cx="94" cy="66" r="3.5" fill="#4FC3F7"/>
        <circle cx="88" cy="58" r="3" fill="#4FC3F7"/>`, 120, 74)
    },

    /* ─────────── حسّاس الغاز والدخان ─────────── */
    gas: {
      ar: 'حسّاس الغاز والدخان', en: 'Gas & Smoke Sensor',
      job: 'يشمّ الدخان أو الغاز في الهواء وينبّه قبل وقوع الكارثة.',
      real: S(`<rect x="26" y="46" width="68" height="14" rx="3" fill="#1565C0"/>
        <rect x="38" y="10" width="44" height="36" rx="10" fill="#B0BEC5" stroke="#78909C" stroke-width="2"/>
        ${(() => { let d = ''; for (let c = 0; c < 5; c++)
          d += `<line x1="${44 + c * 8}" y1="12" x2="${44 + c * 8}" y2="44" stroke="#78909C" stroke-width="1.5"/>`;
          for (let r = 0; r < 3; r++)
          d += `<line x1="40" y1="${18 + r * 10}" x2="80" y2="${18 + r * 10}" stroke="#78909C" stroke-width="1.5"/>`;
          return d; })()}
        <path d="M22 34 q-8 -10 0 -20" stroke="#90A4AE" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M100 36 q8 -11 0 -22" stroke="#90A4AE" stroke-width="3" fill="none" stroke-linecap="round"/>
        <line class="wire" x1="42" y1="60" x2="42" y2="72"/>
        <line class="wire" x1="60" y1="60" x2="60" y2="72"/>
        <line class="wire" x1="78" y1="60" x2="78" y2="72"/>`, 120, 74)
    },

    /* ─────────── حسّاس الميل ─────────── */
    tilt: {
      ar: 'حسّاس الميل', en: 'Tilt Sensor',
      job: 'يعرف أن الجهاز مال أو انقلب — بكرة صغيرة تتدحرج في داخله.',
      real: S(`<g transform="rotate(-20 60 30)">
          <rect x="32" y="18" width="56" height="24" rx="12" fill="#CFD8DC" stroke="#78909C" stroke-width="2"/>
          <circle cx="46" cy="30" r="8" fill="#37474F"/>
          <line x1="80" y1="22" x2="80" y2="38" stroke="#78909C" stroke-width="3"/>
        </g>
        <line class="wire" x1="52" y1="48" x2="52" y2="72"/>
        <line class="wire" x1="70" y1="48" x2="70" y2="72"/>`, 120, 74)
    },

    /* ─────────── حسّاس تتبّع الخط ─────────── */
    'ir-line': {
      ar: 'حسّاس تتبّع الخط', en: 'IR Line Sensor',
      job: 'يرسل ضوءًا تحت أحمر إلى الأرض ويقيس المرتدّ — فيميّز الأبيض من الأسود.',
      real: S(`<rect x="22" y="8" width="76" height="22" rx="4" fill="#1B5E20"/>
        <rect x="38" y="30" width="14" height="16" rx="4" fill="#1976D2"/>
        <rect x="68" y="30" width="14" height="16" rx="4" fill="#212121"/>
        <rect x="6" y="60" width="108" height="12" fill="#ECEFF1"/>
        <rect x="44" y="60" width="32" height="12" fill="#212121"/>
        <line class="ray" x1="45" y1="46" x2="55" y2="60"/>
        <line class="ray" x1="65" y1="60" x2="75" y2="46"/>
        <line class="wire" x1="40" y1="8" x2="40" y2="0"/>
        <line class="wire" x1="60" y1="8" x2="60" y2="0"/>
        <line class="wire" x1="80" y1="8" x2="80" y2="0"/>`, 120, 74),
      sym: S(`<polygon class="sym-f" points="28,20 28,44 50,32"/>
        <line class="sym" x1="50" y1="20" x2="50" y2="44"/>
        <line class="ray" x1="56" y1="25" x2="70" y2="19"/>
        <line class="ray" x1="56" y1="39" x2="70" y2="45"/>
        <rect class="sym" x="76" y="18" width="26" height="28" rx="4"/>
        <line class="wire" x1="8" y1="32" x2="28" y2="32"/>
        <line class="wire" x1="102" y1="32" x2="118" y2="32"/>`)
    }
  };

  if (!window.PARTS) window.PARTS = {};
  Object.assign(window.PARTS, SENSORS);

  function renderSensors() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      const p = SENSORS[box.dataset.part];
      if (!p) return;
      const only = box.dataset.only;
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderSensors);
  else renderSensors();
})();

/* ============================================================
   إضافات دروس 07 – 12 — أنواع البطاريات وأدوات التوصيل
   (إضافة فقط: لا تعديل على أي عنصر سابق)
   ============================================================ */
(function () {
  'use strict';

  const S = (inner, w, h) =>
    `<svg viewBox="0 0 ${w || 120} ${h || 70}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const legs = (y) => `<line class="wire" x1="0" y1="${y}" x2="30" y2="${y}"/>
                       <line class="wire" x1="90" y1="${y}" x2="120" y2="${y}"/>`;

  /* رمز الخليّة الواحدة — لوح طويل موجب ولوح قصير سالب */
  const cell1 = S(`${legs(35)}
      <line class="sym" x1="52" y1="14" x2="52" y2="56"/>
      <line class="sym" x1="68" y1="24" x2="68" y2="46"/>
      <text x="44" y="12" class="sign">+</text><text x="72" y="12" class="sign">−</text>`);

  /* رمز عدّة خلايا متتالية */
  const cellN = S(`${legs(35)}
      <line class="sym" x1="45" y1="14" x2="45" y2="56"/>
      <line class="sym" x1="58" y1="24" x2="58" y2="46"/>
      <line class="sym" x1="70" y1="14" x2="70" y2="56"/>
      <line class="sym" x1="83" y1="24" x2="83" y2="46"/>
      <text x="40" y="12" class="sign">+</text><text x="80" y="12" class="sign">−</text>`);

  const MORE = {

    /* ─────────── بطارية 9 فولت ─────────── */
    battery9v: {
      ar: 'بطارية 9 فولت', en: '9V Battery',
      job: 'أقوى دفعًا من بطارية القلم، وطرفاها الاثنان في أعلاها معًا.',
      real: S(`<rect x="36" y="18" width="48" height="46" rx="4" fill="#263238"/>
        <rect x="36" y="18" width="48" height="11" rx="4" fill="#455A64"/>
        <circle cx="52" cy="12" r="7" fill="#C9A227"/>
        <circle cx="52" cy="12" r="3" fill="#7A5F14"/>
        <circle cx="70" cy="12" r="7" fill="#C9A227"/>
        <text x="60" y="48" class="lbl-in" text-anchor="middle">9V</text>`),
      sym: cellN
    },

    /* ─────────── بطارية القرص ─────────── */
    coincell: {
      ar: 'بطارية القرص', en: 'Coin Cell Battery',
      job: 'قرص صغير مسطّح يعيش سنوات في ساعة اليد ولوحة الحاسوب.',
      real: S(`<circle cx="60" cy="35" r="28" fill="#C9CEE0" stroke="#98A2B5" stroke-width="2"/>
        <circle cx="60" cy="35" r="19" fill="#ECEFF4"/>
        <text x="60" y="31" class="sign" text-anchor="middle">+</text>
        <text x="60" y="46" class="sign" text-anchor="middle" style="font-size:9px">CR2032</text>`),
      sym: cell1
    },

    /* ─────────── بطارية الهاتف ─────────── */
    lipo: {
      ar: 'بطارية الليثيوم', en: 'Lithium Battery',
      job: 'بطارية ليثيوم مسطّحة تُشحن مئات المرّات — قلب كل هاتف.',
      real: S(`<rect x="16" y="14" width="80" height="42" rx="6" fill="#37474F"/>
        <rect x="16" y="14" width="80" height="12" rx="6" fill="#546E7A"/>
        <rect x="92" y="24" width="14" height="22" rx="3" fill="#B0BEC5"/>
        <line class="wire" x1="100" y1="30" x2="116" y2="30"/>
        <line class="wire" x1="100" y1="40" x2="116" y2="40"/>
        <text x="54" y="42" class="lbl-in" text-anchor="middle">3.7V</text>`),
      sym: cell1
    },

    /* ─────────── بطارية السيّارة ─────────── */
    carbattery: {
      ar: 'بطارية السيّارة', en: 'Car Battery',
      job: 'بطارية ثقيلة تعطي دفعة قويّة جدًا لتدوير محرّك السيّارة.',
      real: S(`<rect x="14" y="20" width="92" height="40" rx="5" fill="#1B3A5C"/>
        <rect x="14" y="20" width="92" height="9" rx="4" fill="#2C5580"/>
        <rect x="26" y="12" width="13" height="10" rx="2" fill="#C0392B"/>
        <rect x="81" y="12" width="13" height="10" rx="2" fill="#37474F"/>
        <text x="32" y="11" class="sign" text-anchor="middle">+</text>
        <text x="88" y="11" class="sign" text-anchor="middle">−</text>
        <text x="60" y="48" class="lbl-in" text-anchor="middle">12V</text>`),
      sym: cellN
    },

    /* ─────────── المفتاح الانزلاقي ─────────── */
    slideswitch: {
      ar: 'المفتاح الانزلاقي', en: 'Slide Switch',
      job: 'تُزلق زرّه فيبقى مكانه: مفتوح أو مغلق حتى تحرّكه مرّة أخرى.',
      real: S(`<rect x="32" y="22" width="56" height="26" rx="4" fill="#455A64"/>
        <rect x="37" y="26" width="46" height="18" rx="3" fill="#28353D"/>
        <rect x="41" y="23" width="15" height="24" rx="3" fill="#ECEFF1"/>
        <line class="wire" x1="44" y1="48" x2="44" y2="66"/>
        <line class="wire" x1="60" y1="48" x2="60" y2="66"/>
        <line class="wire" x1="76" y1="48" x2="76" y2="66"/>`, 120, 70),
      sym: S(`<line class="wire" x1="0" y1="35" x2="28" y2="35"/>
        <line class="wire" x1="92" y1="18" x2="120" y2="18"/>
        <line class="wire" x1="92" y1="52" x2="120" y2="52"/>
        <circle class="dot" cx="28" cy="35" r="4"/>
        <circle class="dot" cx="92" cy="18" r="4"/><circle class="dot" cx="92" cy="52" r="4"/>
        <line class="sym" x1="28" y1="35" x2="90" y2="19"/>`)
    },

    /* ─────────── أسلاك التوصيل ─────────── */
    jumper: {
      ar: 'أسلاك التوصيل', en: 'Jumper Wires',
      job: 'أسلاك قصيرة بأطراف معدنية تدخل ثقوب اللوحة وتربط بين القطع.',
      real: S(`<path d="M14 18 q26 -12 52 0 t40 0" stroke="#E53935" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M14 35 q26 12 52 0 t40 0" stroke="#263238" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M14 54 q26 -12 52 0 t40 0" stroke="#1E88E5" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="3" y="13" width="12" height="10" rx="2" fill="#B0BEC5"/>
        <rect x="105" y="13" width="12" height="10" rx="2" fill="#B0BEC5"/>
        <rect x="3" y="30" width="12" height="10" rx="2" fill="#B0BEC5"/>
        <rect x="105" y="30" width="12" height="10" rx="2" fill="#B0BEC5"/>
        <rect x="3" y="49" width="12" height="10" rx="2" fill="#B0BEC5"/>
        <rect x="105" y="49" width="12" height="10" rx="2" fill="#B0BEC5"/>`, 120, 70)
    }
  };

  /* تسجيل العناصر الجديدة دون المساس بالقديمة */
  window.PARTS = window.PARTS || {};
  Object.keys(MORE).forEach((k) => { if (!window.PARTS[k]) window.PARTS[k] = MORE[k]; });

  /* رسم تكميلي — لكل صندوق يخصّ هذه الإضافة */
  function renderMore() {
    document.querySelectorAll('.part[data-part]').forEach((box) => {
      const p = MORE[box.dataset.part];
      if (!p) return;
      const only = box.dataset.only;
      const showReal = only !== 'symbol';
      const showSym  = only !== 'real' && p.sym;

      box.innerHTML =
        '<div class="part__head">' +
          '<span class="part__ar">' + p.ar + '</span>' +
          '<span class="part__en">' + p.en + '</span>' +
        '</div>' +
        '<div class="part__figs">' +
          (showReal ? '<figure class="part__fig"><div class="part__svg">' + p.real +
                      '</div><figcaption>شكله الحقيقي</figcaption></figure>' : '') +
          (showSym  ? '<figure class="part__fig"><div class="part__svg part__svg--sym">' + p.sym +
                      '</div><figcaption>رمزه في الدائرة</figcaption></figure>' : '') +
        '</div>' +
        (box.dataset.job === 'off' ? '' : '<p class="part__job">' + p.job + '</p>');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderMore);
  else renderMore();
})();
