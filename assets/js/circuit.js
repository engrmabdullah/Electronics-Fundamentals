/* ============================================================
   الدائرة التفاعلية — يضغط المتعلّم المفتاح فيرى التيّار يسري
   الاستعمال:
     <div class="circ" data-circ="basic"></div>

   القائمة الكاملة للمفاتيح تُستخرج من الملف نفسه:
     grep -oE "^\s{4}'?[a-z0-9-]+'?:\s*\{" assets/js/circuit.js
   ومنها: basic · resistor · led-resistor · two-lamps-series · two-lamps-parallel ·
   motor · ldr-lamp · night-light · temp-fan · pir-light · sonar · cap-charge ·
   transistor-switch · ic-led · relay-lamp · buzzer-button · pin13 · pwm-dim
   ============================================================ */
(function () {
  'use strict';

  /* مسار التيّار المتحرّك: نقاط تدور حول الدائرة */
  const flow = (d) =>
    `<path class="circ__flow" d="${d}"/>`;

  const CIRCUITS = {

    /* بطارية + مفتاح + لمبة */
    basic: {
      title: 'دائرة بسيطة: بطارية ومفتاح ولمبة',
      hint: 'اضغط المفتاح لتغلق الطريق',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
          <text x="30" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="210" cy="40" r="5"/>
          <circle class="circ__dot" cx="250" cy="40" r="5"/>
          <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
          <rect class="circ__hit" x="196" y="4" width="70" height="52" rx="8"/>
        </g>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="24"/>
          <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
          <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
          <g class="circ__rays">
            <line x1="0" y1="-34" x2="0" y2="-46"/><line x1="34" y1="0" x2="46" y2="0"/>
            <line x1="24" y1="-24" x2="33" y2="-33"/><line x1="24" y1="24" x2="33" y2="33"/>
          </g>
        </g>`,
      on: 'التيّار يسري ✅ اللمبة مضيئة',
      off: 'الطريق مقطوع ⛔ لا شيء يحدث'
    },

    /* مع مقاومة تحمي الليد */
    resistor: {
      title: 'المقاومة تحمي الليد',
      hint: 'اضغط المفتاح',
      svg: `
        <path class="circ__wire" d="M60 40 H150 M190 40 H250 M290 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H150 M190 40 H250 M290 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="150" cy="40" r="5"/>
          <circle class="circ__dot" cx="190" cy="40" r="5"/>
          <line class="circ__blade" x1="150" y1="40" x2="188" y2="18"/>
          <rect class="circ__hit" x="136" y="4" width="70" height="52" rx="8"/>
        </g>
        <polyline class="circ__res" points="250,40 258,26 270,54 282,26 290,40" fill="none"/>
        <text x="252" y="72" class="circ__t">220Ω</text>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/>
          </g>
        </g>`,
      on: 'التيّار يمرّ بأمان — المقاومة تحمي الليد 🛡️',
      off: 'الطريق مقطوع ⛔'
    },

    /* لمبتان على التوالي */
    'two-lamps-series': {
      title: 'لمبتان على التوالي',
      hint: 'اضغط المفتاح ولاحظ الضوء',
      svg: `
        <path class="circ__wire" d="M60 40 H140 M180 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H140 M180 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt"><line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/></g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="140" cy="40" r="5"/><circle class="circ__dot" cx="180" cy="40" r="5"/>
          <line class="circ__blade" x1="140" y1="40" x2="178" y2="18"/>
          <rect class="circ__hit" x="126" y="4" width="70" height="52" rx="8"/>
        </g>
        <g class="circ__lamp circ__lamp--dim" transform="translate(250,40)">
          <circle class="circ__bulb" r="20"/>
          <g class="circ__rays"><line x1="0" y1="-28" x2="0" y2="-40"/><line x1="28" y1="0" x2="40" y2="0"/></g>
        </g>
        <g class="circ__lamp circ__lamp--dim" transform="translate(340,120)">
          <circle class="circ__bulb" r="20"/>
          <g class="circ__rays"><line x1="0" y1="-28" x2="0" y2="-40"/><line x1="28" y1="0" x2="40" y2="0"/></g>
        </g>`,
      on: 'اللمبتان تضيئان — لكن أضعف! الطاقة تُقسَم بينهما',
      off: 'الطريق مقطوع ⛔'
    },

    /* محرّك */
    motor: {
      title: 'تشغيل محرّك',
      hint: 'اضغط المفتاح ليدور المحرّك',
      svg: `
        <path class="circ__wire" d="M60 40 H160 M200 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H160 M200 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt"><line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/></g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="160" cy="40" r="5"/><circle class="circ__dot" cx="200" cy="40" r="5"/>
          <line class="circ__blade" x1="160" y1="40" x2="198" y2="18"/>
          <rect class="circ__hit" x="146" y="4" width="70" height="52" rx="8"/>
        </g>
        <g transform="translate(340,95)">
          <circle class="circ__motor" r="26"/>
          <g class="circ__spin">
            <line x1="-16" y1="0" x2="16" y2="0"/><line x1="0" y1="-16" x2="0" y2="16"/>
          </g>
          <text y="6" class="circ__t" text-anchor="middle">M</text>
        </g>`,
      on: 'المحرّك يدور 🔄 الكهرباء صارت حركة',
      off: 'المحرّك ساكن ⛔'
    }
  };

  function build(box) {
    const c = CIRCUITS[box.dataset.circ];
    if (!c) return;

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">🔘 اضغط المفتاح</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent = on ? '🔴 افصل المفتاح' : '🔘 اضغط المفتاح';
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   دوائر إضافية لدروس 05 و 06 — إضافة فقط، لا تعديل على ما سبق
   الأنواع: two-lamps-parallel · parallel-one-broken ·
            series-one-broken · short-circuit
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  /* البطارية والمفتاح — بالإحداثيات نفسها المستعملة في الدائرة الأساسية */
  const BATT = `<g class="circ__batt">
      <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
      <text x="30" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
    </g>`;

  const SW = `<g class="circ__sw" data-sw>
      <circle class="circ__dot" cx="210" cy="40" r="5"/>
      <circle class="circ__dot" cx="250" cy="40" r="5"/>
      <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
      <rect class="circ__hit" x="196" y="4" width="70" height="52" rx="8"/>
    </g>`;

  /* لمبة مضيئة */
  const lampOn = (x, y, r) => `<g class="circ__lamp" transform="translate(${x},${y})">
      <circle class="circ__bulb" r="${r}"/>
      <line class="circ__x" x1="${-r * .7}" y1="${-r * .7}" x2="${r * .7}" y2="${r * .7}"/>
      <line class="circ__x" x1="${r * .7}" y1="${-r * .7}" x2="${-r * .7}" y2="${r * .7}"/>
      <g class="circ__rays">
        <line x1="0" y1="${-r - 10}" x2="0" y2="${-r - 22}"/>
        <line x1="${r + 10}" y1="0" x2="${r + 22}" y2="0"/>
        <line x1="${r * .72}" y1="${-r * .72}" x2="${r * .72 + 9}" y2="${-r * .72 - 9}"/>
        <line x1="${r * .72}" y1="${r * .72}" x2="${r * .72 + 9}" y2="${r * .72 + 9}"/>
      </g>
    </g>`;

  /* لمبة مطفأة دائمًا — لا تحمل صنف circ__bulb فلا يصلها الضوء */
  const lampDark = (x, y, r, burnt) => `<g transform="translate(${x},${y})">
      <circle r="${r}" fill="#E8EDF5" stroke="#16233D" stroke-width="3"/>
      <line class="circ__x" x1="${-r * .7}" y1="${-r * .7}" x2="${r * .7}" y2="${r * .7}"/>
      <line class="circ__x" x1="${r * .7}" y1="${-r * .7}" x2="${-r * .7}" y2="${r * .7}"/>
      ${burnt ? `<line x1="${-r * .6}" y1="${-r * .6}" x2="${r * .6}" y2="${r * .6}" stroke="#DC2626" stroke-width="5" stroke-linecap="round"/>
        <line x1="${r * .6}" y1="${-r * .6}" x2="${-r * .6}" y2="${r * .6}" stroke="#DC2626" stroke-width="5" stroke-linecap="round"/>` : ''}
    </g>`;

  const MORE = {

    /* لمبتان على التوازي — لكل واحدة طريقها */
    'two-lamps-parallel': {
      title: 'لمبتان على التوازي',
      hint: 'اضغط المفتاح ولاحظ قوّة الضوء',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40 M270 40 V150"/>
        ${flow('M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40 M270 40 V150')}
        ${BATT}
        ${SW}
        ${lampOn(270, 95, 22)}
        ${lampOn(340, 95, 22)}
        <text x="270" y="180" class="circ__t" text-anchor="middle">1</text>
        <text x="340" y="180" class="circ__t" text-anchor="middle">2</text>`,
      on: 'اللمبتان تضيئان بكامل قوّتهما — كل واحدة أخذت الجهد كاملًا 💡💡',
      off: 'الطريق مقطوع ⛔'
    },

    /* توازٍ ولمبة معطوبة — الأخرى تبقى مضيئة */
    'parallel-one-broken': {
      title: 'توازٍ… ولمبة معطوبة',
      hint: 'اضغط المفتاح: هل تنطفئ الثانية أيضًا؟',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40 M270 40 V150"/>
        ${flow('M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        ${BATT}
        ${SW}
        ${lampDark(270, 95, 22, true)}
        ${lampOn(340, 95, 22)}
        <text x="270" y="180" class="circ__t" text-anchor="middle">1</text>
        <text x="340" y="180" class="circ__t" text-anchor="middle">2</text>`,
      on: 'اللمبة 1 معطوبة… واللمبة 2 ما زالت مضيئة ✅ لكل واحدة طريقها',
      off: 'الطريق مقطوع ⛔'
    },

    /* توالٍ ولمبة معطوبة — الكل ينطفئ */
    'series-one-broken': {
      title: 'توالٍ… ولمبة معطوبة',
      hint: 'اضغط المفتاح وراقب ماذا يحدث',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${BATT}
        ${SW}
        ${lampDark(300, 40, 20, true)}
        ${lampDark(200, 150, 20, false)}`,
      on: 'المفتاح مغلق… ولا شيء يضيء ⛔ لمبة واحدة قطعت الطريق على الجميع',
      off: 'الطريق مقطوع ⛔'
    },

    /* القصر الكهربائي — التيّار يعود دون أن يمرّ بالحمل */
    'short-circuit': {
      title: 'القصر الكهربائي — للمشاهدة فقط ⚠️',
      hint: 'اضغط المفتاح وراقب أين يذهب التيّار',
      svg: `
        <!-- المسار الأساسي: بطارية ← مفتاح ← المصباح ← عودة -->
        <path class="circ__wire" d="M60 40 H210 M250 40 H300 M300 40 V150 M300 150 H60 M60 150 V40"/>
        <!-- سلك القصر: سلك عارٍ أحمر يمرّ بجانب المصباح ويتجاوزه (لا شيء فيه) -->
        <path d="M300 40 H352 M352 40 V150 M352 150 H300" fill="none"
              stroke="#DC2626" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="352" y="30" class="circ__t" text-anchor="middle" fill="#DC2626">سلك عارٍ</text>
        <!-- التيّار يعبر السلك الأحمر ويتجاوز المصباح -->
        ${flow('M60 40 H210 M250 40 H352 M352 40 V150 M352 150 H60 M60 150 V40')}
        ${BATT}
        ${SW}
        ${lampDark(300, 95, 22, false)}
        <g class="circ__rays">
          <line x1="362" y1="80" x2="378" y2="70"/>
          <line x1="364" y1="95" x2="382" y2="95"/>
          <line x1="362" y1="110" x2="378" y2="120"/>
        </g>`,
      on: '⚠️ التيّار عبر السلك الأحمر وعاد دون أن يمرّ بالمصباح — السلك يسخن والبطارية تتلف',
      off: 'المفتاح مفصول — لا خطر الآن ✅'
    }
  };

  function build(box) {
    const c = MORE[box.dataset.circ];
    if (!c) return;

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">🔘 اضغط المفتاح</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent = on ? '🔴 افصل المفتاح' : '🔘 اضغط المفتاح';
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافات دروس 24 – 29 — دوائر القياس والمتحكّم
   measure-volt · pin13 · pwm-dim
   (إضافة فقط: لا تعديل على أي دائرة سابقة)
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  const D_MEASURE = 'M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
  const D_PIN = 'M220 60 H280 M320 60 H350 M350 60 V82 M350 122 V165 H250 V116 H220';

  const EXTRA = {

    /* ─────── قياس الجهد على طرفي المصباح ─────── */
    'measure-volt': {
      title: 'الجهاز يخبرنا: هل تجري الكهرباء؟ 🔎',
      svg: `
        <path class="circ__wire" d="${D_MEASURE}"/>
        ${flow(D_MEASURE)}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
          <text x="30" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="210" cy="40" r="5"/>
          <circle class="circ__dot" cx="250" cy="40" r="5"/>
          <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
          <rect class="circ__hit" x="196" y="4" width="70" height="52" rx="8"/>
        </g>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="24"/>
          <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
          <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
          <g class="circ__rays">
            <line x1="0" y1="-34" x2="0" y2="-46"/><line x1="34" y1="0" x2="46" y2="0"/>
            <line x1="24" y1="-24" x2="33" y2="-33"/><line x1="24" y1="24" x2="33" y2="33"/>
          </g>
        </g>
        <path d="M268 82 Q316 66 336 44" stroke="#E53935" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M268 126 Q316 142 336 148" stroke="#1F2937" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="338" cy="42" r="5" fill="#E53935"/>
        <circle cx="338" cy="149" r="5" fill="#1F2937"/>
        <g>
          <rect x="118" y="64" width="152" height="80" rx="12" fill="#F9A825" stroke="#8D6E63" stroke-width="3"/>
          <rect x="132" y="74" width="124" height="32" rx="5" fill="#12291F"/>
          <text x="194" y="100" data-read text-anchor="middle"
                style="font:700 24px monospace;fill:#7CFFB2">؟</text>
          <circle cx="194" cy="126" r="13" fill="#263238"/>
          <line x1="194" y1="126" x2="194" y2="116" stroke="#FFFFFF" stroke-width="3"/>
        </g>`,
      on:  'الجهاز يقول: نعم! الكهرباء تجري ⚡',
      off: 'الجهاز يقول: لا شيء يمرّ ⛔',
      read: { on: '⚡', off: '؟' }
    },

    /* ─────── اللوحة تشغّل ليدًا على الطرف 13 ─────── */
    pin13: {
      title: 'اللوحة تُشعل المصباح 💡',
      svg: `
        <path class="circ__wire" d="${D_PIN}"/>
        ${flow(D_PIN)}
        <rect x="20" y="40" width="200" height="110" rx="10" fill="#00838F"/>
        <rect x="4" y="54" width="22" height="26" rx="3" fill="#9E9E9E"/>
        <rect x="86" y="78" width="66" height="40" rx="4" fill="#212121"/>
        <text x="119" y="106" text-anchor="middle" style="font-size:24px">🧠</text>
        <circle cx="52" cy="126" r="7" fill="#8BC34A"/>
        <rect x="212" y="52" width="10" height="16" rx="2" fill="#263238"/>
        <rect x="212" y="108" width="10" height="16" rx="2" fill="#263238"/>
        <text x="200" y="66" text-anchor="end" style="font-size:16px">💡</text>
        <polyline class="circ__res" points="280,60 288,46 300,74 312,46 320,60" fill="none"/>
        <g class="circ__lamp" transform="translate(350,102)">
          <circle class="circ__bulb" r="20"/>
          <g class="circ__rays">
            <line x1="0" y1="-28" x2="0" y2="-40"/><line x1="28" y1="0" x2="40" y2="0"/>
            <line x1="20" y1="-20" x2="28" y2="-28"/>
          </g>
        </g>`,
      on:  'اللوحة تقول: أشعل! 💡 المصباح يضيء 🎉',
      off: 'اللوحة تقول: أطفئ 🌑 المصباح مطفأ',
      btn: { on: '🌑 أطفئ المصباح', off: '💡 أشعل المصباح' }
    },

    /* ─────── PWM: تخفيت الإضاءة بالتدريج ─────── */
    'pwm-dim': {
      slider: true,
      title: 'حرّك المقبض… وشاهد الضوء يكبر 🔆',
      svg: `
        <path class="circ__wire" d="${D_PIN}"/>
        <rect x="20" y="40" width="200" height="110" rx="10" fill="#00838F"/>
        <rect x="4" y="54" width="22" height="26" rx="3" fill="#9E9E9E"/>
        <rect x="86" y="78" width="66" height="40" rx="4" fill="#212121"/>
        <text x="119" y="106" text-anchor="middle" style="font-size:24px">🧠</text>
        <rect x="212" y="52" width="10" height="16" rx="2" fill="#263238"/>
        <rect x="212" y="108" width="10" height="16" rx="2" fill="#263238"/>
        <text x="200" y="66" text-anchor="end" style="font-size:16px">🔆</text>
        <polyline class="circ__res" points="280,60 288,46 300,74 312,46 320,60" fill="none"/>
        <g transform="translate(350,102)">
          <circle r="22" fill="#E8EDF5" stroke="#0F172A" stroke-width="3"/>
          <circle data-glow r="22" fill="#FACC15" style="opacity:0"/>
          <g data-rays style="opacity:0">
            <line x1="0" y1="-30" x2="0" y2="-42" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
            <line x1="30" y1="0" x2="42" y2="0" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
            <line x1="21" y1="-21" x2="30" y2="-30" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
          </g>
        </g>
        <rect x="60" y="168" width="280" height="12" rx="6" fill="#E2E8F0"/>
        <rect data-bar x="60" y="168" width="0" height="12" rx="6" fill="#F59E0B"/>`,
      off: 'الضوء مطفأ 🌑'
    }
  };

  function build(box) {
    const c = EXTRA[box.dataset.circ];
    if (!c) return;
    if (box.innerHTML.trim() !== '') return;      // بناها محرّك آخر

    /* ---------- دائرة بمؤشّر متدرّج ---------- */
    if (c.slider) {
      box.innerHTML =
        '<div class="circ__head">' + c.title + '</div>' +
        '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
        '<div class="circ__bar">' +
          '<span style="font-size:1.3rem">🌑</span>' +
          '<input type="range" min="0" max="255" value="0" step="1" ' +
                 'aria-label="مقدار الضوء" style="flex:1;min-width:140px;accent-color:#F59E0B">' +
          '<span style="font-size:1.3rem">☀️</span>' +
          '<span class="circ__state">' + c.off + '</span>' +
        '</div>';

      const svg   = box.querySelector('.circ__svg');
      const range = box.querySelector('input[type=range]');
      const state = box.querySelector('.circ__state');
      const glow  = svg.querySelector('[data-glow]');
      const rays  = svg.querySelector('[data-rays]');
      const bar   = svg.querySelector('[data-bar]');

      function paint() {
        const v = Number(range.value);
        const r = v / 255;
        glow.style.opacity = String(r);
        glow.style.filter  = 'drop-shadow(0 0 ' + (r * 16).toFixed(1) + 'px rgba(250,204,21,.9))';
        rays.style.opacity = String(r);
        bar.setAttribute('width', String(Math.round(r * 280)));
        state.textContent =
          v === 0    ? 'الضوء مطفأ 🌑' :
          r < 0.34   ? 'ضوء قليل 🔅' :
          r < 0.7    ? 'ضوء أكثر 🔆' :
                       'ضوء كثير جدًا! ☀️';
      }
      range.addEventListener('input', paint);
      paint();
      return;
    }

    /* ---------- دائرة بمفتاح تشغيل وإطفاء ---------- */
    const bOff = (c.btn && c.btn.off) || '🔘 اضغط المفتاح';
    const bOn  = (c.btn && c.btn.on)  || '🔴 افصل المفتاح';

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">' + bOff + '</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    const read  = svg.querySelector('[data-read]');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent   = on ? bOn : bOff;
      if (read && c.read) read.textContent = on ? c.read.on : c.read.off;
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافات القسم الخامس — دوائر التحكّم (الدروس 30 → 37)
   إضافة فقط — لا تعديل على ما سبق
     <div class="circ" data-circ="button-led"></div>
     <div class="circ" data-circ="night-light"></div>
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  const MORE = {

    /* زرّ يُشعل ليدًا عبر اللوحة */
    'button-led': {
      title: 'زرّ يقرأه المتحكّم فيُشعل الليد',
      on:  'الزرّ مضغوط — الطرف يقرأ LOW فيُشعل البرنامج الليد ✅',
      off: 'الزرّ مرفوع — مقاومة الرفع تجعل الطرف يقرأ HIGH، والليد مطفأ',
      btnOff: '👇 اضغط الزرّ',
      btnOn:  '👆 ارفع إصبعك',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
          <text x="26" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="210" cy="40" r="5"/>
          <circle class="circ__dot" cx="250" cy="40" r="5"/>
          <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
          <circle cx="230" cy="6" r="9" fill="#DC2626"/>
          <rect class="circ__hit" x="196" y="0" width="70" height="56" rx="8"/>
          <text x="196" y="72" class="circ__t">D2</text>
        </g>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/>
          </g>
          <text x="-14" y="46" class="circ__t">LED</text>
        </g>`
    },

    /* إنارة تعمل عند الظلام */
    'night-light': {
      title: 'إنارة تلقائية: حسّاس الضوء يقرّر',
      on:  'المكان مظلم 🌙 قراءة الحسّاس تحت العتبة — فأمر البرنامج الليد بأن يضيء',
      off: 'المكان مضيء ☀️ قراءة الحسّاس فوق العتبة — لا حاجة إلى الإنارة',
      btnOff: '🌙 أطفئ ضوء الغرفة',
      btnOn:  '☀️ أعِد ضوء الغرفة',
      svg: `
        <path class="circ__wire" d="M60 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
        </g>
        <g data-sw>
          <rect x="176" y="22" width="66" height="34" rx="5" fill="#FFFFFF"
                stroke="#16233D" stroke-width="3"/>
          <path d="M186 44 q8 -12 16 0 t16 0 t16 0" stroke="#16233D" stroke-width="3" fill="none"/>
          <line class="circ__ray" x1="190" y1="2" x2="198" y2="16" stroke="#F59E0B" stroke-width="4"/>
          <line class="circ__ray" x1="214" y1="2" x2="222" y2="16" stroke="#F59E0B" stroke-width="4"/>
          <text x="176" y="76" class="circ__t">LDR</text>
          <rect class="circ__hit" x="168" y="0" width="86" height="60" rx="8"/>
        </g>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/>
          </g>
          <text x="-14" y="46" class="circ__t">LED</text>
        </g>`
    }
  };

  function buildMore(box) {
    const c = MORE[box.dataset.circ];
    if (!c) return;

    const labOff = c.btnOff || '🔘 اضغط المفتاح';
    const labOn  = c.btnOn  || '🔴 افصل المفتاح';

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">' + labOff + '</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent = on ? labOn : labOff;
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function initMore() { document.querySelectorAll('.circ[data-circ]').forEach(buildMore); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMore);
  else initMore();
})();

/* ============================================================
   إضافة — دوائر القسم الثاني (الدروس 13 إلى 17)
   إضافة فقط — لا يُعدَّل ما سبق.
   الجديد: cap-charge · transistor-switch · ic-led · relay-lamp · buzzer-button
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  const CIRCUITS2 = {

    /* ─────────── المكثّف: يمتلئ ثم يفرّغ ─────────── */
    'cap-charge': {
      title: 'الخزّان الصغير يمتلئ… ثم يفرغ',
      svg: (() => {
        const d = 'M60 40 H140 M180 40 H210 M260 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
        return `
        <path class="circ__wire" d="${d} M295 40 V88 M295 102 V150"/>
        ${flow(d)}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
          <text x="24" y="132" class="circ__t">9V</text>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="140" cy="40" r="5"/>
          <circle class="circ__dot" cx="180" cy="40" r="5"/>
          <line class="circ__blade" style="transform-origin:140px 40px" x1="140" y1="40" x2="178" y2="18"/>
          <rect class="circ__hit" x="126" y="4" width="70" height="52" rx="8"/>
        </g>
        <polyline class="circ__res" points="210,40 217,26 228,54 239,26 250,54 260,40" fill="none"/>
        <text x="212" y="72" class="circ__t">1kΩ</text>
        <line x1="277" y1="88" x2="313" y2="88" stroke="#2563EB" stroke-width="5" stroke-linecap="round"/>
        <line x1="277" y1="102" x2="313" y2="102" stroke="#2563EB" stroke-width="5" stroke-linecap="round"/>
        <text x="238" y="99" class="circ__t">1000µF</text>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/><line x1="23" y1="23" x2="31" y2="31"/>
          </g>
        </g>`;
      })(),
      on:   'التيّار يسري: المكثّف يمتلئ واللمبة تضيء 💡',
      off:  'فرغ المكثّف تمامًا — كل شيء ساكن ⛔',
      hold: { ms: 1600, text: 'فتحنا المفتاح… واللمبة ما زالت مضيئة! المكثّف يفرّغ ما خزّنه ⚡' }
    },

    /* ─────────── الترانزستور: تيّار صغير يفتح طريق تيّار كبير ─────────── */
    'transistor-switch': {
      title: 'تيّار صغير في القاعدة… يشغّل حِملًا كبيرًا',
      svg: (() => {
        const d = 'M60 40 H350 M350 40 V104 M350 146 V170 M350 170 H60 M60 170 V40 ' +
                  'M150 40 V125 M150 125 H190 M230 125 H258 M300 125 H336';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        <g class="circ__batt">
          <line x1="52" y1="92" x2="52" y2="122"/><line x1="68" y1="100" x2="68" y2="114"/>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="190" cy="125" r="5"/>
          <circle class="circ__dot" cx="230" cy="125" r="5"/>
          <line class="circ__blade" style="transform-origin:190px 125px" x1="190" y1="125" x2="228" y2="103"/>
          <rect class="circ__hit" x="176" y="89" width="70" height="52" rx="8"/>
        </g>
        <polyline class="circ__res" points="300,125 292,112 281,138 270,112 260,138 258,125" fill="none"/>
        <text x="262" y="98" class="circ__t" text-anchor="middle">1kΩ</text>
        <text x="150" y="156" class="circ__t" text-anchor="middle">تيّار صغير</text>
        <g>
          <line x1="336" y1="104" x2="336" y2="146" stroke="#16233D" stroke-width="5" stroke-linecap="round"/>
          <line x1="350" y1="104" x2="336" y2="116" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
          <line x1="336" y1="134" x2="350" y2="146" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
          <polygon points="341,136 350,146 339,145" fill="#16233D"/>
          <text x="358" y="112" class="circ__t">C</text>
          <text x="316" y="122" class="circ__t">B</text>
          <text x="358" y="162" class="circ__t">E</text>
        </g>
        <g class="circ__lamp" transform="translate(350,72)">
          <circle class="circ__bulb" r="20"/>
          <g class="circ__rays">
            <line x1="0" y1="-29" x2="0" y2="-41"/><line x1="29" y1="0" x2="41" y2="0"/>
            <line x1="21" y1="-21" x2="29" y2="-29"/>
          </g>
        </g>`;
      })(),
      on:  'لمسة صغيرة على القاعدة… فسال تيّار كبير وأضاء المصباح 💡',
      off: 'لا تيّار في القاعدة — الترانزستور مغلق ⛔'
    },

    /* ─────────── الرقاقة تشغّل مصباحًا ─────────── */
    'ic-led': {
      title: 'رقاقة صغيرة تشغّل مصباحًا',
      svg: (() => {
        const d = 'M60 40 H140 M180 40 H228 M302 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="140" cy="40" r="5"/>
          <circle class="circ__dot" cx="180" cy="40" r="5"/>
          <line class="circ__blade" style="transform-origin:140px 40px" x1="140" y1="40" x2="178" y2="18"/>
          <rect class="circ__hit" x="126" y="4" width="70" height="52" rx="8"/>
        </g>
        <g>
          <rect x="228" y="16" width="74" height="48" rx="5" fill="#1B1B1B"/>
          <path d="M228 32 a8 8 0 0 1 0 16" fill="#FBFDFF"/>
          <circle cx="240" cy="55" r="3" fill="#9E9E9E"/>
          <text x="268" y="46" text-anchor="middle" fill="#FFFFFF" style="font:800 18px var(--mono)">IC</text>
          <text x="232" y="80" class="circ__t">الحزّ</text>
        </g>
        <g class="circ__lamp" transform="translate(340,95)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/>
          </g>
        </g>`;
      })(),
      on:  'الرقاقة تعمل — وداخلها آلاف الترانزستورات تفعل ذلك من أجلك 💡',
      off: 'لا كهرباء تصل الرقاقة ⛔'
    },

    /* ─────────── المرحّل: جانبان منفصلان ─────────── */
    'relay-lamp': {
      title: 'المرحّل: جانب صغير آمن… وجانب قويّ منفصل',
      svg: (() => {
        const d = 'M44 44 H86 M126 44 H160 M160 44 V86 M160 140 V150 M160 150 H44 M44 150 V44 ' +
                  'M240 44 H280 M320 44 H356 M356 44 V150 M356 150 H240 M240 150 V44';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        <line x1="200" y1="30" x2="200" y2="182" stroke="#8095B3" stroke-width="3" stroke-dasharray="7 6"/>
        <text x="200" y="20" class="circ__t" text-anchor="middle">معزولان</text>
        <g class="circ__batt">
          <line x1="36" y1="84" x2="36" y2="114"/><line x1="52" y1="92" x2="52" y2="106"/>
          <text x="14" y="136" class="circ__t">5V</text>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="86" cy="44" r="5"/>
          <circle class="circ__dot" cx="126" cy="44" r="5"/>
          <line class="circ__blade" style="transform-origin:86px 44px" x1="86" y1="44" x2="124" y2="22"/>
          <rect class="circ__hit" x="72" y="8" width="70" height="52" rx="8"/>
        </g>
        <path d="M160 86 a9 9 0 0 1 0 18 a9 9 0 0 1 0 18 a9 9 0 0 1 0 18"
              fill="none" stroke="#DC2626" stroke-width="4"/>
        <text x="118" y="172" class="circ__t" text-anchor="middle">الملفّ</text>
        <line x1="172" y1="112" x2="286" y2="58" stroke="#7C3AED" stroke-width="2.5" stroke-dasharray="6 5"/>
        <text x="240" y="186" class="circ__t" text-anchor="middle">220V — للكبار فقط</text>
        <circle cx="240" cy="99" r="16" fill="#FBFDFF" stroke="#16233D" stroke-width="3"/>
        <text x="240" y="106" class="circ__t" text-anchor="middle">~</text>
        <g>
          <circle class="circ__dot" cx="280" cy="44" r="5"/>
          <circle class="circ__dot" cx="320" cy="44" r="5"/>
          <line class="circ__blade" style="transform-origin:280px 44px" x1="280" y1="44" x2="318" y2="22"/>
        </g>
        <g class="circ__lamp" transform="translate(356,99)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/>
            <line x1="-23" y1="-23" x2="-31" y2="-31"/>
            <line x1="-23" y1="23" x2="-31" y2="31"/>
          </g>
        </g>`;
      })(),
      on:  'الملفّ صار مغناطيسًا فجذب الذراع… فأُغلق التلامس وأضاء المصباح 💡',
      off: 'لا تيّار في الملفّ — التلامس مفتوح والمصباح مطفأ ⛔'
    },

    /* ─────────── الطنّان والزرّ ─────────── */
    'buzzer-button': {
      title: 'جرس الباب: زرّ وطنّان وبطارية',
      svg: (() => {
        const d = 'M60 40 H160 M200 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        <g class="circ__batt">
          <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
          <text x="24" y="132" class="circ__t">3V</text>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="160" cy="40" r="5"/>
          <circle class="circ__dot" cx="200" cy="40" r="5"/>
          <line class="circ__blade" style="transform-origin:160px 40px" x1="160" y1="40" x2="198" y2="18"/>
          <rect class="circ__hit" x="146" y="4" width="70" height="52" rx="8"/>
          <text x="180" y="76" class="circ__t" text-anchor="middle">الزرّ</text>
        </g>
        <circle cx="340" cy="95" r="26" fill="#263238"/>
        <circle cx="340" cy="95" r="5" fill="#78909C"/>
        <g class="circ__rays">
          <line x1="370" y1="80" x2="377" y2="73"/>
          <line x1="372" y1="95" x2="381" y2="95"/>
          <line x1="370" y1="110" x2="377" y2="117"/>
          <line x1="384" y1="72" x2="390" y2="65"/>
          <line x1="387" y1="95" x2="396" y2="95"/>
          <line x1="384" y1="118" x2="390" y2="125"/>
        </g>`;
      })(),
      on:  'الطنّان يهتزّ… ويصل الصوت إلى الغرفة كلها 🔊',
      off: 'صمت — الزرّ غير مضغوط ⛔'
    }
  };

  function build(box) {
    const c = CIRCUITS2[box.dataset.circ];
    if (!c) return;

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">🔘 اضغط المفتاح</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const btn    = box.querySelector('.circ__btn');
    const state  = box.querySelector('.circ__state');
    const blades = box.querySelectorAll('.circ__blade');
    let on = false, timer = null;

    function toggle() {
      on = !on;
      if (timer) { clearTimeout(timer); timer = null; }
      blades.forEach((b) => { b.style.transform = on ? 'rotate(30deg)' : 'none'; });
      btn.textContent = on ? '🔴 افصل المفتاح' : '🔘 اضغط المفتاح';

      if (on) {
        box.classList.add('is-on');
        state.textContent = c.on;
      } else if (c.hold) {
        state.textContent = c.hold.text;          // الشحنة ما زالت تعمل لحظة
        timer = setTimeout(() => {
          box.classList.remove('is-on');
          state.textContent = c.off;
          timer = null;
        }, c.hold.ms);
      } else {
        box.classList.remove('is-on');
        state.textContent = c.off;
      }
    }

    btn.addEventListener('click', toggle);
    const sw = box.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافات دروس 07 – 12 — البطاريات ولوحة التجارب والليد والدايود
   (إضافة فقط: لا تعديل على أي دائرة سابقة)
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  /* المفتاح — بالإحداثيات نفسها المستعملة في الدائرة الأساسية */
  const SW = `<g class="circ__sw" data-sw>
      <circle class="circ__dot" cx="210" cy="40" r="5"/>
      <circle class="circ__dot" cx="250" cy="40" r="5"/>
      <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
      <rect class="circ__hit" x="196" y="4" width="70" height="52" rx="8"/>
    </g>`;

  const BATT = `<g class="circ__batt">
      <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
      <text x="30" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
    </g>`;

  const LAMP = `<g class="circ__lamp" transform="translate(340,95)">
      <circle class="circ__bulb" r="24"/>
      <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
      <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
      <g class="circ__rays">
        <line x1="0" y1="-34" x2="0" y2="-46"/><line x1="34" y1="0" x2="46" y2="0"/>
        <line x1="24" y1="-24" x2="33" y2="-33"/><line x1="24" y1="24" x2="33" y2="33"/>
      </g>
    </g>`;

  const D_DIODE = 'M60 40 H210 M250 40 H272 M312 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';

  const EXTRA = {

    /* ─────── بطاريتان على التوالي: الجهد يتضاعف ─────── */
    'battery-series': {
      title: 'بطاريتان على التوالي — دفع مضاعف',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        <g class="circ__batt">
          <line x1="52" y1="60" x2="52" y2="88"/><line x1="68" y1="67" x2="68" y2="81"/>
          <line x1="52" y1="104" x2="52" y2="132"/><line x1="68" y1="111" x2="68" y2="125"/>
        </g>
        <text x="80" y="79" class="circ__t">1.5V</text>
        <text x="80" y="123" class="circ__t">1.5V</text>
        <text x="46" y="176" class="circ__t">3V</text>
        ${SW}
        ${LAMP}`,
      on: 'بطاريتان معًا ⚡⚡ الدفع تضاعف والضوء أقوى',
      off: 'الطريق مقطوع ⛔'
    },

    /* ─────── ليد مع مقاومة — التوصيل الصحيح ─────── */
    'led-resistor': {
      title: 'ليد ومقاومة — التوصيل الصحيح',
      svg: `
        <path class="circ__wire" d="M60 40 H210 M250 40 H270 M310 40 H340 M340 40 V150 M340 150 H60 M60 150 V40"/>
        ${flow('M60 40 H210 M250 40 H270 M310 40 H340 M340 40 V150 M340 150 H60 M60 150 V40')}
        ${BATT}
        ${SW}
        <polyline class="circ__res" points="270,40 278,26 290,54 302,26 310,40" fill="none"/>
        <text x="266" y="18" class="circ__t">220Ω</text>
        <polygon class="circ__bulb" points="320,74 360,74 340,106"/>
        <line x1="320" y1="112" x2="360" y2="112" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
        <text x="298" y="80" class="circ__t">+</text>
        <text x="298" y="122" class="circ__t">−</text>
        <g class="circ__rays">
          <line x1="368" y1="70" x2="384" y2="58"/>
          <line x1="372" y1="93" x2="390" y2="93"/>
          <line x1="368" y1="116" x2="384" y2="128"/>
        </g>`,
      on: 'الليد يضيء بأمان 💡 والمقاومة تحرسه',
      off: 'الطريق مقطوع ⛔ الليد مطفأ'
    },

    /* ─────── الدايود في الاتجاه الصحيح ─────── */
    'diode-forward': {
      title: 'الدايود في اتجاهه الصحيح',
      svg: `
        <path class="circ__wire" d="${D_DIODE}"/>
        ${flow(D_DIODE)}
        ${BATT}
        ${SW}
        <polygon class="circ__dot" points="272,24 272,56 306,40"/>
        <line x1="308" y1="22" x2="308" y2="58" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
        ${LAMP}`,
      on: 'الاتجاه صحيح ✅ التيّار يمرّ والمصباح يضيء',
      off: 'الطريق مقطوع ⛔'
    },

    /* ─────── الدايود مقلوبًا — يمنع المرور ─────── */
    'diode-reverse': {
      title: 'والآن اقلب الدايود — ماذا يحدث؟',
      svg: `
        <path class="circ__wire" d="${D_DIODE}"/>
        ${flow('M0 0')}
        ${BATT}
        ${SW}
        <polygon class="circ__dot" points="312,24 312,56 278,40"/>
        <line x1="276" y1="22" x2="276" y2="58" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
        <g transform="translate(340,95)">
          <circle r="24" fill="#E8EDF5" stroke="#16233D" stroke-width="3"/>
          <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
          <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
        </g>`,
      on: 'المفتاح مغلق… ولا شيء يحدث! 🚫 الدايود يسدّ الطريق',
      off: 'الطريق مقطوع ⛔'
    },

    /* ─────── خريطة لوحة التجارب: أي الثقوب متّصلة ─────── */
    'breadboard-map': (function () {
      const N = 16, X0 = 40, DX = 20;
      const TOP = [58, 70, 82, 94, 106];
      const BOT = [130, 142, 154, 166, 178];
      const RA = 20, RB = 34;
      const cx = (i) => X0 + DX * i;
      const A = 'ABCDE', B = 'FGHIJ';

      let holes = '';
      for (let i = 0; i < N; i++) {
        holes += `<circle cx="${cx(i)}" cy="${RA}" r="2.6" fill="#E6A9A9"/>` +
                 `<circle cx="${cx(i)}" cy="${RB}" r="2.6" fill="#A9BCE6"/>`;
        for (let r = 0; r < 5; r++)
          holes += `<circle cx="${cx(i)}" cy="${TOP[r]}" r="2.6" fill="#B7C2D0"/>` +
                   `<circle cx="${cx(i)}" cy="${BOT[r]}" r="2.6" fill="#B7C2D0"/>`;
      }

      let labels = '';
      for (let r = 0; r < 5; r++) {
        labels += `<text x="24" y="${TOP[r] + 3}" class="circ__t" style="font-size:9px">${A[r]}</text>` +
                  `<text x="352" y="${TOP[r] + 3}" class="circ__t" style="font-size:9px">${A[r]}</text>` +
                  `<text x="24" y="${BOT[r] + 3}" class="circ__t" style="font-size:9px">${B[r]}</text>` +
                  `<text x="352" y="${BOT[r] + 3}" class="circ__t" style="font-size:9px">${B[r]}</text>`;
      }

      let d = `M32 ${RA} H348 M32 ${RB} H348`;
      for (let i = 0; i < N; i++)
        d += ` M${cx(i)} ${TOP[0]} V${TOP[4]} M${cx(i)} ${BOT[0]} V${BOT[4]}`;

      return {
        title: 'داخل لوحة التجارب — أي الثقوب متّصلة؟',
        btn: { off: '🔍 أرِني التوصيلات الداخلية', on: '🙈 أخفِ التوصيلات' },
        svg: `
          <rect x="6" y="6" width="388" height="178" rx="10" fill="#FAFCFF" stroke="#C3D2E5" stroke-width="2"/>
          <line x1="22" y1="12" x2="358" y2="12" stroke="#E53935" stroke-width="2"/>
          <line x1="22" y1="42" x2="358" y2="42" stroke="#1E88E5" stroke-width="2"/>
          <text x="11" y="24" class="circ__t" style="font-size:12px;fill:#E53935">+</text>
          <text x="11" y="38" class="circ__t" style="font-size:12px;fill:#1E88E5">−</text>
          <text x="364" y="24" class="circ__t" style="font-size:12px;fill:#E53935">+</text>
          <text x="364" y="38" class="circ__t" style="font-size:12px;fill:#1E88E5">−</text>
          <rect x="14" y="112" width="372" height="12" rx="3" fill="#E1E9F3"/>
          ${holes}${labels}
          ${flow(d)}`,
        on: '⚡ كل خمسة ثقوب رأسيًا متّصلة — والقضيبان يمتدّان بالطول كلّه',
        off: 'من فوق تبدو كل الثقوب منفصلة… فما الحقيقة؟'
      };
    })()
  };

  function build(box) {
    const c = EXTRA[box.dataset.circ];
    if (!c) return;

    const bOff = (c.btn && c.btn.off) || '🔘 اضغط المفتاح';
    const bOn  = (c.btn && c.btn.on)  || '🔴 افصل المفتاح';

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">' + bOff + '</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent   = on ? bOn : bOff;
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافة — دوائر قسم الحسّاسات (الدروس 19 إلى 23)
   إضافة فقط — لا يُعدَّل ما سبق.
   الجديد: ldr-lamp · temp-fan · pir-light · sonar
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  const batt = `<g class="circ__batt">
      <line x1="52" y1="88" x2="52" y2="122"/><line x1="68" y1="96" x2="68" y2="114"/>
      <text x="22" y="140" class="circ__t">3V</text>
    </g>`;

  const SENSOR_CIRCUITS = {

    /* ─────────── حسّاس الضوء يتحكّم في الليد ─────────── */
    'ldr-lamp': {
      title: 'الضوء يفتح الطريق للمصباح 💡',
      off: 'ظلام 🌙 الطريق ضيّق، والمصباح مطفأ',
      on:  'ضوء ☀️ الطريق واسع، والمصباح أضاء! 🎉',
      btnOff: '☀️ سلّط الضوء',
      btnOn:  '🌙 أطفئ الضوء',
      svg: (() => {
        const d = 'M60 55 H150 M250 55 H340 M340 55 V160 M340 160 H210 M150 160 H60 M60 160 V55';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        ${batt}
        <g data-sw>
          <rect x="152" y="34" width="96" height="42" rx="8" fill="#FFFDF2" stroke="#F59E0B" stroke-width="4"/>
          <path d="M164 62 q9 -13 18 0 t18 0 t18 0" stroke="#5D4037" stroke-width="3" fill="none"/>
          <text x="200" y="30" class="circ__t" text-anchor="middle">LDR</text>
          <text data-sky x="200" y="18" font-size="20" text-anchor="middle">🌙</text>
          <g data-day opacity="0">
            <line x1="176" y1="20" x2="170" y2="32" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
            <line x1="200" y1="22" x2="200" y2="32" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
            <line x1="224" y1="20" x2="230" y2="32" stroke="#F59E0B" stroke-width="4" stroke-linecap="round"/>
          </g>
          <rect class="circ__hit" x="146" y="4" width="108" height="78" rx="8"/>
        </g>
        <text data-night x="200" y="106" class="circ__t" text-anchor="middle" opacity="1">الطريق ضيّق ⛔</text>
        <text data-day x="200" y="106" class="circ__t" text-anchor="middle" opacity="0">الطريق واسع ✅</text>
        <polyline class="circ__res" points="150,160 158,146 170,174 182,146 194,174 202,160 210,160" fill="none"/>
        <g class="circ__lamp" transform="translate(340,110)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/>
          </g>
          <text x="-14" y="46" class="circ__t">LED</text>
        </g>`;
      })()
    },

    /* ─────────── حسّاس الحرارة يشغّل المروحة ─────────── */
    'temp-fan': {
      title: 'الحرارة تُشغّل المروحة 🌀',
      off: 'بارد ❄️ المروحة متوقّفة',
      on:  'حارّ 🔥 المروحة تدور! 🎉',
      btnOff: '🔥 سخّن الحسّاس',
      btnOn:  '❄️ برّد الحسّاس',
      svg: (() => {
        const d = 'M60 55 H150 M250 55 H340 M340 55 V160 M340 160 H60 M60 160 V55';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        ${batt}
        <g data-sw>
          <rect x="152" y="34" width="96" height="42" rx="8" fill="#F4F8FF" stroke="#2563EB" stroke-width="4"/>
          <line x1="160" y1="70" x2="240" y2="40" stroke="#16233D" stroke-width="3" stroke-linecap="round"/>
          <text x="200" y="30" class="circ__t" text-anchor="middle">NTC</text>
          <text data-sky x="200" y="18" font-size="20" text-anchor="middle">❄️</text>
          <rect class="circ__hit" x="146" y="4" width="108" height="78" rx="8"/>
        </g>
        <text data-night x="200" y="112" class="circ__t" text-anchor="middle" opacity="1">الطريق ضيّق ⛔</text>
        <text data-day x="200" y="112" class="circ__t" text-anchor="middle" opacity="0">الطريق واسع ✅</text>
        <g transform="translate(340,110)">
          <circle class="circ__motor" r="26"/>
          <g class="circ__spin">
            <line x1="-16" y1="0" x2="16" y2="0"/><line x1="0" y1="-16" x2="0" y2="16"/>
          </g>
          <text y="6" class="circ__t" text-anchor="middle">M</text>
        </g>`;
      })()
    },

    /* ─────────── حسّاس الحركة وإنارة الممرّ ─────────── */
    'pir-light': {
      title: 'تحرّك… فيضيء النور! 🚶',
      off: 'واقف بلا حركة 🧍 لا نور',
      on:  'تحرّك! النور اشتعل 🎉',
      btnOff: '🚶 تحرّك أمام الحسّاس',
      btnOn:  '🧍 قف بلا حركة',
      svg: (() => {
        const d = 'M60 55 H142 M258 55 H340 M340 55 V160 M340 160 H60 M60 160 V55';
        return `
        <path class="circ__wire" d="${d}"/>
        ${flow(d)}
        ${batt}
        <g data-sw>
          <rect x="142" y="30" width="116" height="50" rx="8" fill="#F8F5FF" stroke="#7C3AED" stroke-width="4"/>
          <path d="M176 62 a24 20 0 0 1 48 0 z" fill="#FFFFFF" stroke="#7C3AED" stroke-width="3"/>
          <text x="200" y="24" class="circ__t" text-anchor="middle">PIR</text>
          <rect class="circ__hit" x="136" y="24" width="128" height="62" rx="8"/>
        </g>
        <g data-day opacity="0">
          <path d="M182 104 q18 -13 36 0" stroke="#DC2626" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M174 118 q26 -18 52 0" stroke="#DC2626" stroke-width="3" fill="none" stroke-linecap="round"/>
        </g>
        <text data-night x="200" y="152" font-size="30" text-anchor="middle" opacity="1">🧍</text>
        <text data-day x="200" y="152" font-size="30" text-anchor="middle" opacity="0">🚶</text>
        <g class="circ__lamp" transform="translate(340,110)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-32" x2="0" y2="-44"/><line x1="32" y1="0" x2="44" y2="0"/>
            <line x1="23" y1="-23" x2="31" y2="-31"/>
          </g>
        </g>`;
      })()
    },

    /* ─────────── حسّاس المسافة: النبضة والصدى ─────────── */
    sonar: {
      title: 'الصوت يذهب… والصدى يعود 🦇',
      off: 'اضغط لترسل صوتًا لا نسمعه',
      on:  'ذهب الصوت… وعاد! 🎉',
      btnOff: '📡 أرسل الصوت',
      btnOn:  '⏹️ توقّف',
      svg: `
        <rect x="336" y="26" width="32" height="140" rx="4" fill="#90A4AE"/>
        <path d="M336 66 h32 M336 106 h32 M336 146 h32" stroke="#78909C" stroke-width="3"/>
        <text x="352" y="182" class="circ__t" text-anchor="middle">جدار</text>
        <g data-sw>
          <rect x="30" y="62" width="98" height="66" rx="8" fill="#1B5E20"/>
          <circle cx="60" cy="92" r="19" fill="#37474F"/><circle cx="60" cy="92" r="12" fill="#607D8B"/>
          <circle cx="99" cy="92" r="19" fill="#37474F"/><circle cx="99" cy="92" r="12" fill="#607D8B"/>
          <text x="79" y="150" class="circ__t" text-anchor="middle">الحسّاس 📡</text>
          <rect class="circ__hit" x="24" y="56" width="110" height="78" rx="8"/>
        </g>
        <path d="M138 80 H330" stroke="#C3D2E5" stroke-width="3" fill="none" stroke-dasharray="7 9"/>
        <path d="M330 116 H138" stroke="#C3D2E5" stroke-width="3" fill="none" stroke-dasharray="7 9"/>
        ${flow('M138 80 H330')}
        ${flow('M330 116 H138')}
        <polygon points="332,80 318,73 318,87" fill="#C3D2E5"/>
        <polygon points="136,116 150,109 150,123" fill="#C3D2E5"/>
        <text x="234" y="68" class="circ__t" text-anchor="middle">يذهب ←</text>
        <text x="234" y="140" class="circ__t" text-anchor="middle">→ يعود</text>
        <text data-day x="234" y="176" class="circ__t" text-anchor="middle" opacity="0">وهكذا يعرف أين الجدار! 🎉</text>`
    }
  };

  function buildSensorCirc(box) {
    const c = SENSOR_CIRCUITS[box.dataset.circ];
    if (!c) return;

    const labOff = c.btnOff || '🔘 اضغط المفتاح';
    const labOn  = c.btnOn  || '🔴 أعِد الحالة الأولى';

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">' + labOff + '</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent = on ? labOn : labOff;
      svg.querySelectorAll('[data-day]').forEach(n => n.setAttribute('opacity', on ? '1' : '0'));
      svg.querySelectorAll('[data-night]').forEach(n => n.setAttribute('opacity', on ? '0' : '1'));
      const sky = svg.querySelector('[data-sky]');
      if (sky) sky.textContent = box.dataset.circ === 'temp-fan'
        ? (on ? '🔥' : '❄️')
        : (on ? '☀️' : '🌙');
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function initSensorCirc() {
    document.querySelectorAll('.circ[data-circ]').forEach(buildSensorCirc);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSensorCirc);
  else initSensorCirc();
})();

/* ============================================================
   دوائر دروس 07 – 12 بصياغة طفل السادسة
   (إضافة فقط: لا تعديل على أي دائرة سابقة)
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  const SW = `<g class="circ__sw" data-sw>
      <circle class="circ__dot" cx="210" cy="40" r="5"/>
      <circle class="circ__dot" cx="250" cy="40" r="5"/>
      <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
      <rect class="circ__hit" x="196" y="4" width="70" height="52" rx="8"/>
    </g>`;

  const BATT = `<g class="circ__batt">
      <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
      <text x="30" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
    </g>`;

  const LAMP = `<g class="circ__lamp" transform="translate(340,95)">
      <circle class="circ__bulb" r="24"/>
      <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
      <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
      <g class="circ__rays">
        <line x1="0" y1="-34" x2="0" y2="-46"/><line x1="34" y1="0" x2="46" y2="0"/>
        <line x1="24" y1="-24" x2="33" y2="-33"/><line x1="24" y1="24" x2="33" y2="33"/>
      </g>
    </g>`;

  const D_RING = 'M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
  const D_GATE = 'M60 40 H210 M250 40 H272 M312 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';

  const KID = {

    /* 🔋🔋 بطاريتان تدفعان معًا */
    'two-batteries': {
      title: 'بطاريتان تدفعان معًا! 🔋🔋',
      btn: { off: '👆 اضغط المفتاح', on: '✋ افصل المفتاح' },
      svg: `
        <path class="circ__wire" d="${D_RING}"/>
        ${flow(D_RING)}
        <g class="circ__batt">
          <line x1="52" y1="60" x2="52" y2="88"/><line x1="68" y1="67" x2="68" y2="81"/>
          <line x1="52" y1="104" x2="52" y2="132"/><line x1="68" y1="111" x2="68" y2="125"/>
        </g>
        <text x="82" y="79" class="circ__t">🔋</text>
        <text x="82" y="123" class="circ__t">🔋</text>
        ${SW}
        ${LAMP}`,
      on: 'انظر! الضوء صار أقوى 🎉',
      off: 'الطريق مقطوع… لا شيء يضيء ⛔'
    },

    /* 🔍 ماذا تحت ثقوب اللوحة */
    'board-holes': (function () {
      const N = 16, X0 = 40, DX = 20;
      const TOP = [58, 70, 82, 94, 106];
      const BOT = [130, 142, 154, 166, 178];
      const RA = 20, RB = 34;
      const cx = (i) => X0 + DX * i;

      let holes = '';
      for (let i = 0; i < N; i++) {
        holes += `<circle cx="${cx(i)}" cy="${RA}" r="2.6" fill="#E6A9A9"/>` +
                 `<circle cx="${cx(i)}" cy="${RB}" r="2.6" fill="#A9BCE6"/>`;
        for (let r = 0; r < 5; r++)
          holes += `<circle cx="${cx(i)}" cy="${TOP[r]}" r="2.6" fill="#B7C2D0"/>` +
                   `<circle cx="${cx(i)}" cy="${BOT[r]}" r="2.6" fill="#B7C2D0"/>`;
      }

      let d = `M32 ${RA} H348 M32 ${RB} H348`;
      for (let i = 0; i < N; i++)
        d += ` M${cx(i)} ${TOP[0]} V${TOP[4]} M${cx(i)} ${BOT[0]} V${BOT[4]}`;

      return {
        title: 'ماذا يوجد تحت الثقوب؟ 🔍',
        btn: { off: '🔍 أرِني ما تحتها', on: '🙈 أخفِها' },
        svg: `
          <rect x="6" y="6" width="388" height="178" rx="10" fill="#FAFCFF" stroke="#C3D2E5" stroke-width="2"/>
          <line x1="22" y1="12" x2="358" y2="12" stroke="#E53935" stroke-width="2"/>
          <line x1="22" y1="42" x2="358" y2="42" stroke="#1E88E5" stroke-width="2"/>
          <text x="11" y="24" class="circ__t" style="font-size:12px;fill:#E53935">+</text>
          <text x="11" y="38" class="circ__t" style="font-size:12px;fill:#1E88E5">−</text>
          <text x="364" y="24" class="circ__t" style="font-size:12px;fill:#E53935">+</text>
          <text x="364" y="38" class="circ__t" style="font-size:12px;fill:#1E88E5">−</text>
          <rect x="14" y="112" width="372" height="12" rx="3" fill="#E1E9F3"/>
          ${holes}
          ${flow(d)}`,
        on: 'انظر! خطوط ذهبية تربط الثقوب ✨',
        off: 'ثقوب صغيرة… وكلها تبدو متشابهة 🤔'
      };
    })(),

    /* ✅ البوّابة مفتوحة */
    'gate-open': {
      title: 'البوّابة في اتجاهها الصحيح ✅',
      btn: { off: '👆 اضغط المفتاح', on: '✋ افصل المفتاح' },
      svg: `
        <path class="circ__wire" d="${D_GATE}"/>
        ${flow(D_GATE)}
        ${BATT}
        ${SW}
        <polygon class="circ__dot" points="272,24 272,56 306,40"/>
        <line x1="308" y1="22" x2="308" y2="58" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
        <text x="284" y="76" class="circ__t">✅</text>
        ${LAMP}`,
      on: 'مرّت الكهرباء… وأضاء المصباح! 🎉',
      off: 'الطريق مقطوع ⛔'
    },

    /* ⛔ البوّابة مقلوبة */
    'gate-shut': {
      title: 'والآن اقلب البوّابة… ماذا يحدث؟ 🤔',
      btn: { off: '👆 اضغط المفتاح', on: '✋ افصل المفتاح' },
      svg: `
        <path class="circ__wire" d="${D_GATE}"/>
        ${flow('M0 0')}
        ${BATT}
        ${SW}
        <polygon class="circ__dot" points="312,24 312,56 278,40"/>
        <line x1="276" y1="22" x2="276" y2="58" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
        <text x="284" y="76" class="circ__t">🚫</text>
        <g transform="translate(340,95)">
          <circle r="24" fill="#E8EDF5" stroke="#16233D" stroke-width="3"/>
          <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
          <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
        </g>`,
      on: 'ضغطتَ المفتاح… ولا شيء! 🚫 البوّابة مقفلة',
      off: 'الطريق مقطوع ⛔'
    }
  };

  function build(box) {
    const c = KID[box.dataset.circ];
    if (!c) return;

    const bOff = (c.btn && c.btn.off) || '🔘 اضغط المفتاح';
    const bOn  = (c.btn && c.btn.on)  || '🔴 افصل المفتاح';

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">' + bOff + '</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false;

    function toggle() {
      on = !on;
      box.classList.toggle('is-on', on);
      state.textContent = on ? c.on : c.off;
      btn.textContent   = on ? bOn : bOff;
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   دوائر تفاعلية — دروس 13 إلى 17 (لطفل السادسة: بلا أرقام ولا وحدات)
   (إضافة فقط: لا تعديل على أي دائرة سابقة)
   ============================================================ */
(function () {
  'use strict';

  const flow = (d) => `<path class="circ__flow" d="${d}"/>`;

  const SW = `<g class="circ__sw" data-sw>
      <circle class="circ__dot" cx="210" cy="40" r="5"/>
      <circle class="circ__dot" cx="250" cy="40" r="5"/>
      <line class="circ__blade" x1="210" y1="40" x2="248" y2="18"/>
      <rect class="circ__hit" x="196" y="4" width="70" height="52" rx="8"/>
    </g>`;

  const BATT = `<g class="circ__batt">
      <line x1="52" y1="80" x2="52" y2="110"/><line x1="68" y1="88" x2="68" y2="102"/>
      <text x="30" y="86" class="circ__t">+</text><text x="76" y="86" class="circ__t">−</text>
    </g>`;

  const LAMP = `<g class="circ__lamp" transform="translate(340,95)">
      <circle class="circ__bulb" r="24"/>
      <line class="circ__x" x1="-17" y1="-17" x2="17" y2="17"/>
      <line class="circ__x" x1="17" y1="-17" x2="-17" y2="17"/>
      <g class="circ__rays">
        <line x1="0" y1="-34" x2="0" y2="-46"/><line x1="34" y1="0" x2="46" y2="0"/>
        <line x1="24" y1="-24" x2="33" y2="-33"/><line x1="24" y1="24" x2="33" y2="33"/>
      </g>
    </g>`;

  const D_RING = 'M60 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
  const D_CHIP = 'M60 40 H120 M194 40 H210 M250 40 H340 M340 40 V150 M340 150 H60 M60 150 V40';
  const D_TR   = 'M60 40 H350 M350 40 V104 M350 146 V170 M350 170 H60 M60 170 V40 ' +
                 'M150 40 V125 M150 125 H190 M230 125 H336';
  const D_REL  = 'M240 44 H280 M320 44 H360 M360 44 V150 M360 150 H240 M240 150 V44 ' +
                 'M40 44 H80 M120 44 H160 M160 44 V150 M160 150 H40 M40 150 V44';

  const KID2 = {

    /* 🪣 المكثّف: يمتلئ… وحين تفصل يبقى مضيئًا لحظة */
    'cap-kid': {
      title: 'الخزّان الصغير يمتلئ… ثم يفرغ 🪣',
      btn: { off: '👆 اضغط المفتاح', on: '✋ افصل المفتاح' },
      svg: `
        <path class="circ__wire" d="${D_RING} M295 40 V88 M295 102 V150"/>
        ${flow(D_RING)}
        ${BATT}
        ${SW}
        <line x1="277" y1="88" x2="313" y2="88" stroke="#2563EB" stroke-width="5" stroke-linecap="round"/>
        <line x1="277" y1="102" x2="313" y2="102" stroke="#2563EB" stroke-width="5" stroke-linecap="round"/>
        <text x="295" y="132" class="circ__t" text-anchor="middle">🪣</text>
        ${LAMP}`,
      on:  'الخزّان يمتلئ… والمصباح مضيء 💡',
      off: 'كل شيء هادئ ⛔',
      hold: { ms: 1800, text: 'فصلتَ المفتاح… وما زال يضيء! الخزّان يفرغ ما جمعه ⚡' }
    },

    /* 👆 الترانزستور: لمسة صغيرة تشغّل مصباحًا كبيرًا */
    'tr-kid': {
      title: 'لمسة صغيرة… تشغّل مصباحًا كبيرًا 💪',
      btn: { off: '👆 المس اللمسة الصغيرة', on: '✋ ارفع إصبعك' },
      svg: `
        <path class="circ__wire" d="${D_TR}"/>
        ${flow(D_TR)}
        <g class="circ__batt">
          <line x1="52" y1="92" x2="52" y2="122"/><line x1="68" y1="100" x2="68" y2="114"/>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="190" cy="125" r="5"/>
          <circle class="circ__dot" cx="230" cy="125" r="5"/>
          <line class="circ__blade" style="transform-origin:190px 125px"
                x1="190" y1="125" x2="228" y2="103"/>
          <rect class="circ__hit" x="176" y="89" width="70" height="52" rx="8"/>
        </g>
        <text x="130" y="152" class="circ__t" text-anchor="middle">👆 لمسة صغيرة</text>
        <g>
          <line x1="336" y1="104" x2="336" y2="146" stroke="#16233D" stroke-width="5" stroke-linecap="round"/>
          <line x1="350" y1="104" x2="336" y2="116" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
          <line x1="336" y1="134" x2="350" y2="146" stroke="#16233D" stroke-width="4" stroke-linecap="round"/>
          <polygon points="341,136 350,146 339,145" fill="#16233D"/>
        </g>
        <g class="circ__lamp" transform="translate(350,70)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-30" x2="0" y2="-42"/><line x1="-30" y1="0" x2="-42" y2="0"/>
            <line x1="-21" y1="-21" x2="-30" y2="-30"/>
          </g>
        </g>
        <text x="266" y="34" class="circ__t" text-anchor="middle">💪 مصباح كبير</text>`,
      on:  'لمسة خفيفة… وأضاء المصباح الكبير! 🎉',
      off: 'لا لمسة… فلا ضوء ⛔'
    },

    /* 🏙️ الرقاقة تشغّل مصباحًا */
    'chip-kid': {
      title: 'حبّة صغيرة… تشغّل مصباحًا 🏙️',
      btn: { off: '👆 اضغط المفتاح', on: '✋ افصل المفتاح' },
      svg: `
        <path class="circ__wire" d="${D_CHIP}"/>
        ${flow(D_CHIP)}
        ${BATT}
        ${SW}
        <rect x="120" y="18" width="74" height="46" rx="5" fill="#1B1B1B"/>
        <path d="M120 32 a8 8 0 0 1 0 16" fill="#FBFDFF"/>
        ${(() => { let d = ''; for (let c = 0; c < 4; c++) {
            d += `<rect x="${130 + c * 16}" y="10" width="6" height="9" rx="1" fill="#B0BEC5"/>` +
                 `<rect x="${130 + c * 16}" y="63" width="6" height="9" rx="1" fill="#B0BEC5"/>`;
          } return d; })()}
        <text x="157" y="94" class="circ__t" text-anchor="middle">🏙️ الحبّة</text>
        ${LAMP}`,
      on:  'الحبّة تعمل… والمصباح أضاء! 🎉',
      off: 'لا كهرباء تصل الحبّة ⛔'
    },

    /* 🧲 المرحّل: جانب صغير آمن… وجانب كبير منفصل */
    'relay-kid': {
      title: 'الكهرباء تضغط المفتاح بدلًا منك 🧲',
      btn: { off: '👆 اضغط المفتاح الصغير', on: '✋ افصل المفتاح الصغير' },
      svg: `
        <path class="circ__wire" d="${D_REL}"/>
        ${flow(D_REL)}
        <line x1="200" y1="24" x2="200" y2="176" stroke="#8095B3" stroke-width="3" stroke-dasharray="7 6"/>
        <text x="200" y="18" class="circ__t" text-anchor="middle">لا يتلامسان</text>
        <g class="circ__batt">
          <line x1="352" y1="80" x2="352" y2="110"/><line x1="368" y1="88" x2="368" y2="102"/>
        </g>
        <g class="circ__sw" data-sw>
          <circle class="circ__dot" cx="280" cy="44" r="5"/>
          <circle class="circ__dot" cx="320" cy="44" r="5"/>
          <line class="circ__blade" style="transform-origin:280px 44px"
                x1="280" y1="44" x2="318" y2="22"/>
          <rect class="circ__hit" x="266" y="8" width="70" height="52" rx="8"/>
        </g>
        <path d="M240 86 a9 9 0 0 1 0 18 a9 9 0 0 1 0 18 a9 9 0 0 1 0 18"
              fill="none" stroke="#DC2626" stroke-width="4"/>
        <text x="292" y="172" class="circ__t" text-anchor="middle">🧲 الملفّ</text>
        <line x1="228" y1="112" x2="112" y2="58" stroke="#7C3AED" stroke-width="2.5" stroke-dasharray="6 5"/>
        <g>
          <circle class="circ__dot" cx="80" cy="44" r="5"/>
          <circle class="circ__dot" cx="120" cy="44" r="5"/>
          <line class="circ__blade" style="transform-origin:80px 44px"
                x1="80" y1="44" x2="118" y2="22"/>
        </g>
        <text x="104" y="172" class="circ__t" text-anchor="middle">💪 الجانب الكبير</text>
        <g class="circ__lamp" transform="translate(40,99)">
          <circle class="circ__bulb" r="22"/>
          <g class="circ__rays">
            <line x1="0" y1="-30" x2="0" y2="-42"/>
            <line x1="-21" y1="-21" x2="-30" y2="-30"/>
            <line x1="-21" y1="21" x2="-30" y2="30"/>
          </g>
        </g>`,
      on:  'الملفّ صار مغناطيسًا… فسحب الذراع وأضاء المصباح 💡',
      off: 'الذراع مرفوع — والمصباح مطفأ ⛔'
    },

    /* 🔔 جرس الباب: زرّ وطنّان وبطارية */
    'bell-kid': {
      title: 'جرس الباب: زرّ وطنّان وبطارية 🔔',
      btn: { off: '👆 اضغط الزرّ', on: '✋ ارفع إصبعك' },
      svg: `
        <path class="circ__wire" d="${D_RING}"/>
        ${flow(D_RING)}
        ${BATT}
        ${SW}
        <text x="230" y="76" class="circ__t" text-anchor="middle">👆 الزرّ</text>
        <circle cx="340" cy="95" r="26" fill="#263238"/>
        <circle cx="340" cy="95" r="5" fill="#78909C"/>
        <g class="circ__rays">
          <line x1="370" y1="80" x2="377" y2="73"/>
          <line x1="372" y1="95" x2="381" y2="95"/>
          <line x1="370" y1="110" x2="377" y2="117"/>
          <line x1="384" y1="72" x2="390" y2="65"/>
          <line x1="387" y1="95" x2="396" y2="95"/>
          <line x1="384" y1="118" x2="390" y2="125"/>
        </g>
        <text x="330" y="146" class="circ__t" text-anchor="middle">🔔 الطنّان</text>`,
      on:  'الطنّان يهتزّ… ويصل الصوت إلى الغرفة كلها 🔊',
      off: 'صمت — الزرّ غير مضغوط ⛔'
    }
  };

  function build(box) {
    const c = KID2[box.dataset.circ];
    if (!c) return;

    const bOff = (c.btn && c.btn.off) || '🔘 اضغط المفتاح';
    const bOn  = (c.btn && c.btn.on)  || '🔴 افصل المفتاح';

    box.innerHTML =
      '<div class="circ__head">' + c.title + '</div>' +
      '<svg class="circ__svg" viewBox="0 0 400 190">' + c.svg + '</svg>' +
      '<div class="circ__bar">' +
        '<button class="circ__btn" type="button">' + bOff + '</button>' +
        '<span class="circ__state">' + c.off + '</span>' +
      '</div>';

    const svg   = box.querySelector('.circ__svg');
    const btn   = box.querySelector('.circ__btn');
    const state = box.querySelector('.circ__state');
    let on = false, timer = null;

    function toggle() {
      on = !on;
      if (timer) { clearTimeout(timer); timer = null; }
      btn.textContent = on ? bOn : bOff;

      if (on) {
        box.classList.add('is-on');
        state.textContent = c.on;
      } else if (c.hold) {
        state.textContent = c.hold.text;              /* الخزّان ما زال يفرّغ */
        timer = setTimeout(function () {
          box.classList.remove('is-on');
          state.textContent = c.off;
          timer = null;
        }, c.hold.ms);
      } else {
        box.classList.remove('is-on');
        state.textContent = c.off;
      }
    }

    btn.addEventListener('click', toggle);
    const sw = svg.querySelector('[data-sw]');
    if (sw) sw.addEventListener('click', toggle);
  }

  function init() { document.querySelectorAll('.circ[data-circ]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
