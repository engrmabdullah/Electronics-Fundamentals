/* ============================================================
   معرض التطبيقات — توسعة العناصر الأساسية
   المفتاح · المكثّف · الدايود · الترانزستور · الطنّان · المصباح · السلك

   الاستعمال في الدرس:
     <div class="uses" data-uses="switch"></div>

   قاعدة مُلزمة (STYLE.md §٣):
     • ٦ تطبيقات لكل عنصر
     • لكل تطبيق رسمه الخاصّ — لا إيموجي مكان الرسم
     • لا رسم مشترك بين تطبيقين، ولا بين عنصرين
     • السطر تحت الرسم يقول: العنصر يفعل *ماذا* هنا تحديدًا
   ============================================================ */
(function () {
  'use strict';

  const V = (inner) =>
    `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;

  /* ألوان موحّدة عبر كل الرسوم */
  const C = {
    body: '#37474F', metal: '#B0BEC5', light: '#ECEFF1',
    wire: '#546E7A', hot: '#E53935', warm: '#FB8C00',
    cool: '#1E88E5', glow: '#FDD835', green: '#43A047',
    skin: '#8D6E63', glass: '#B3E5FC'
  };

  const MORE = {

    /* ══════════════ المفتاح ══════════════ */
    switch: {
      ar: 'المفتاح', en: 'Switch',
      items: [
        { ar: 'مفتاح النور في الحائط', en: 'Wall Light Switch',
          line: 'يصل الكهرباء إلى مصباح السقف حين ترفعه.',
          svg: V(`<rect x="34" y="8" width="52" height="64" rx="7" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="46" y="20" width="28" height="40" rx="5" fill="${C.metal}"/>
            <rect x="46" y="20" width="28" height="20" rx="5" fill="${C.body}" opacity=".85"/>
            <line x1="60" y1="26" x2="60" y2="34" stroke="${C.light}" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="60" cy="50" r="4.5" fill="none" stroke="${C.light}" stroke-width="2.2"/>
            <path d="M118 34 h-32 a9 9 0 0 0 0 18 h32 z" fill="${C.skin}"/>
            <rect x="110" y="38" width="6" height="10" rx="2.5" fill="${C.light}" opacity=".55"/>
            <path d="M26 14 l-8 -6 M24 30 h-12 M26 48 l-8 6"
                  stroke="${C.glow}" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 22 l-9 -2 M22 40 l-10 2" stroke="${C.glow}" stroke-width="2.4"
                  stroke-linecap="round" opacity=".55"/>`) },

        { ar: 'زرّ المصعد', en: 'Elevator Button',
          line: 'يُغلق الدائرة، فتصل إشارتك إلى محرّك المصعد.',
          svg: V(`<rect x="6" y="10" width="24" height="60" fill="${C.glass}" opacity=".55"/>
            <line x1="18" y1="10" x2="18" y2="70" stroke="${C.metal}" stroke-width="2.4"/>
            <rect x="6" y="10" width="24" height="60" fill="none" stroke="${C.metal}" stroke-width="2.4"/>
            <rect x="40" y="6" width="52" height="68" rx="8" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="48" y="12" width="36" height="14" rx="3" fill="${C.body}"/>
            <path d="M60 22 l6 -7 6 7 z" fill="${C.glow}"/>
            <circle cx="66" cy="42" r="15" fill="${C.glow}" opacity=".22"/>
            <circle cx="66" cy="42" r="11" fill="${C.metal}"/>
            <circle cx="66" cy="42" r="8" fill="${C.glow}"/>
            <path d="M61 45 l5 -6 5 6 z" fill="${C.body}"/>
            <circle cx="66" cy="64" r="11" fill="${C.metal}"/>
            <circle cx="66" cy="64" r="8" fill="${C.light}"/>
            <path d="M61 61 l5 6 5 -6 z" fill="${C.body}"/>
            <circle cx="104" cy="42" r="4" fill="${C.green}"/>`) },

        { ar: 'مفتاح اللعبة', en: 'Toy Power Switch',
          line: 'يفصل البطارية عن اللعبة، فتتوقّف تمامًا.',
          svg: V(`<line x1="60" y1="10" x2="60" y2="4" stroke="${C.body}" stroke-width="2.5"/>
            <circle cx="60" cy="3" r="2.6" fill="${C.hot}"/>
            <rect x="42" y="10" width="36" height="24" rx="6" fill="${C.metal}"/>
            <circle cx="52" cy="21" r="4" fill="${C.cool}"/><circle cx="68" cy="21" r="4" fill="${C.cool}"/>
            <rect x="36" y="36" width="48" height="34" rx="6" fill="${C.body}"/>
            <rect x="22" y="40" width="14" height="8" rx="4" fill="${C.metal}"/>
            <rect x="84" y="40" width="14" height="8" rx="4" fill="${C.metal}"/>
            <rect x="46" y="45" width="28" height="12" rx="6" fill="${C.light}"/>
            <circle cx="52" cy="51" r="2" fill="${C.wire}" opacity=".55"/>
            <circle cx="67" cy="51" r="5" fill="${C.hot}"/>
            <circle cx="60" cy="64" r="3.4" fill="${C.green}"/>
            <rect x="42" y="70" width="11" height="7" rx="2" fill="${C.metal}"/>
            <rect x="67" y="70" width="11" height="7" rx="2" fill="${C.metal}"/>`) },

        { ar: 'مفتاح باب الثلّاجة', en: 'Fridge Door Switch',
          line: 'عند فتح الباب يصل التيّار إلى مصباح الثلّاجة.',
          svg: V(`<rect x="18" y="6" width="52" height="68" rx="6" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <line x1="18" y1="28" x2="70" y2="28" stroke="${C.metal}" stroke-width="2.2"/>
            <rect x="24" y="34" width="40" height="34" fill="${C.glow}" opacity=".3"/>
            <circle cx="44" cy="40" r="4.5" fill="${C.glow}"/>
            <circle cx="44" cy="40" r="8" fill="${C.glow}" opacity=".3"/>
            <line x1="24" y1="54" x2="64" y2="54" stroke="${C.metal}" stroke-width="2.2" opacity=".8"/>
            <line x1="24" y1="16" x2="52" y2="16" stroke="${C.metal}" stroke-width="2.2" opacity=".8"/>
            <path d="M70 10 l30 8 v48 l-30 -10 z" fill="${C.glass}" opacity=".6" stroke="${C.metal}" stroke-width="2"/>
            <rect x="64" y="42" width="7" height="9" rx="2" fill="${C.hot}"/>
            <path d="M76 34 h12 m0 0 l-5 -4 m5 4 l-5 4" stroke="${C.warm}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'مفتاح إشعال السيارة', en: 'Car Ignition Switch',
          line: 'تدير المفتاح فيصل التيّار إلى دائرة تشغيل السيارة.',
          svg: V(`<circle cx="40" cy="42" r="21" fill="${C.body}"/>
            <circle cx="40" cy="42" r="13" fill="${C.metal}"/>
            <circle cx="40" cy="38" r="4" fill="${C.body}"/>
            <path d="M37 40 h6 l-1.5 9 h-3 z" fill="${C.body}"/>
            <rect x="53" y="38" width="34" height="8" rx="2" fill="${C.metal}"/>
            <path d="M58 46 v6 h4 v-6 M68 46 v6 h4 v-6" stroke="${C.metal}" stroke-width="2.4" fill="none"/>
            <circle cx="97" cy="42" r="10" fill="none" stroke="${C.metal}" stroke-width="4.5"/>
            <path d="M22 22 a24 24 0 0 1 20 -8 m0 0 l-6 -4 m6 4 l-5 5"
                  stroke="${C.warm}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <circle cx="18" cy="66" r="5" fill="${C.green}"/>
            <path d="M28 62 h10 M28 70 h14" stroke="${C.green}" stroke-width="2.4"
                  stroke-linecap="round" opacity=".7"/>`) },

        { ar: 'زرّ لوحة المفاتيح', en: 'Keyboard Key',
          line: 'كل زرّ مفتاح صغير يُغلق الدائرة عند الضغط.',
          svg: V(`<rect x="8" y="24" width="104" height="44" rx="7" fill="${C.body}"/>
            ${(() => { let d = ''; for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++) {
              if (r === 0 && c === 2) continue;
              d += `<rect x="${14 + c * 20}" y="${30 + r * 16}" width="16" height="12" rx="3" fill="${C.light}"/>`;
            } return d; })()}
            <rect x="54" y="33" width="16" height="9" rx="3" fill="${C.metal}"/>
            <path d="M62 8 v12 m0 0 l-4 -4 m4 4 l4 -4" stroke="${C.hot}" stroke-width="2.8"
                  fill="none" stroke-linecap="round"/>
            <circle cx="62" cy="46" r="2.6" fill="${C.green}"/>
            <line x1="8" y1="62" x2="112" y2="62" stroke="${C.wire}" stroke-width="2" opacity=".5"/>`) }
      ]
    },

    /* ══════════════ المكثّف ══════════════ */
    capacitor: {
      ar: 'المكثّف', en: 'Capacitor',
      items: [
        { ar: 'فلاش الكاميرا', en: 'Camera Flash',
          line: 'يخزّن الكهرباء ببطء، ثم يُفرغها دفعة واحدة قويّة.',
          svg: V(`<rect x="14" y="26" width="76" height="40" rx="7" fill="${C.body}"/>
            <rect x="30" y="18" width="22" height="9" rx="3" fill="${C.body}"/>
            <circle cx="52" cy="46" r="15" fill="${C.metal}"/>
            <circle cx="52" cy="46" r="9" fill="${C.glass}"/>
            <circle cx="48" cy="42" r="3" fill="#fff" opacity=".8"/>
            <rect x="72" y="32" width="14" height="10" rx="2" fill="${C.glow}"/>
            <path d="M96 28 l10 -8 M98 38 h14 M96 48 l10 8" stroke="${C.glow}"
                  stroke-width="3.2" stroke-linecap="round"/>
            <circle cx="22" cy="34" r="3.4" fill="${C.hot}"/>
            <line x1="20" y1="52" x2="20" y2="62" stroke="${C.metal}" stroke-width="3"/>
            <line x1="27" y1="52" x2="27" y2="62" stroke="${C.metal}" stroke-width="3"/>
            <line x1="23.5" y1="52" x2="23.5" y2="47" stroke="${C.glow}" stroke-width="2"/>`) },

        { ar: 'مذياع السيارة', en: 'Radio Tuner',
          line: 'يتغيّر مع القرص، فيلتقط المذياع محطّة واحدة.',
          svg: V(`<line x1="26" y1="20" x2="10" y2="6" stroke="${C.metal}" stroke-width="3"/>
            <circle cx="10" cy="6" r="2.8" fill="${C.metal}"/>
            <path d="M16 16 a12 12 0 0 1 6 -10" stroke="${C.warm}" stroke-width="2.4" fill="none"/>
            <path d="M10 22 a20 20 0 0 1 10 -18" stroke="${C.warm}" stroke-width="2.2" fill="none" opacity=".55"/>
            <rect x="14" y="20" width="94" height="48" rx="8" fill="${C.body}"/>
            <rect x="22" y="28" width="48" height="22" rx="3" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 8; i++)
              d += `<line x1="${27 + i * 6}" y1="${28}" x2="${27 + i * 6}" y2="${i % 2 ? 34 : 38}" stroke="${C.wire}" stroke-width="1.6"/>`;
              return d; })()}
            <line x1="45" y1="26" x2="45" y2="52" stroke="${C.hot}" stroke-width="2.6"/>
            <circle cx="90" cy="44" r="14" fill="${C.metal}"/>
            <circle cx="90" cy="44" r="9" fill="${C.light}"/>
            <line x1="90" y1="44" x2="97" y2="37" stroke="${C.hot}" stroke-width="3" stroke-linecap="round"/>
            <line x1="16" y1="61" x2="26" y2="61" stroke="${C.wire}" stroke-width="2.2"/>
            <line x1="26" y1="55" x2="26" y2="67" stroke="${C.metal}" stroke-width="3"/>
            <line x1="33" y1="55" x2="33" y2="67" stroke="${C.metal}" stroke-width="3"/>
            <line x1="33" y1="61" x2="46" y2="61" stroke="${C.wire}" stroke-width="2.2"/>
            <path d="M20 68 l20 -14 m0 0 l-6 0 m6 0 l0 6" stroke="${C.glow}" stroke-width="2"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'شاشة اللمس', en: 'Touch Screen',
          line: 'يستشعر لمسة إصبعك بتغيّر الشحنة على الزجاج.',
          svg: V(`<rect x="18" y="4" width="84" height="72" rx="9" fill="${C.body}"/>
            <rect x="24" y="12" width="72" height="56" rx="4" fill="${C.glass}"/>
            ${(() => { let d = ''; for (let i = 1; i < 6; i++)
              d += `<line x1="${24 + i * 12}" y1="12" x2="${24 + i * 12}" y2="68" stroke="${C.cool}" stroke-width="1.2" opacity=".35"/>`;
              for (let j = 1; j < 5; j++)
              d += `<line x1="24" y1="${12 + j * 11}" x2="96" y2="${12 + j * 11}" stroke="${C.cool}" stroke-width="1.2" opacity=".35"/>`;
              return d; })()}
            <circle cx="72" cy="45" r="17" fill="${C.cool}" opacity=".16"/>
            <circle cx="72" cy="45" r="11" fill="${C.cool}" opacity=".3"/>
            <circle cx="72" cy="45" r="6" fill="${C.cool}" opacity=".65"/>
            <rect x="46" y="6" width="14" height="3" rx="1.5" fill="${C.metal}"/>
            <circle cx="36" cy="34" r="3.4" fill="${C.hot}" opacity=".8"/>`) },

        { ar: 'صورة التلفاز', en: 'TV Picture',
          line: 'يملأ فجوات الكهرباء، فتثبت الصورة بلا اهتزاز.',
          svg: V(`<rect x="10" y="6" width="100" height="56" rx="6" fill="${C.body}"/>
            <rect x="16" y="12" width="88" height="44" rx="3" fill="${C.glass}"/>
            <circle cx="38" cy="26" r="7" fill="${C.glow}"/>
            <path d="M16 50 q16 -18 32 -2 q12 -14 26 0 q10 -8 30 2 v6 H16 z" fill="${C.green}" opacity=".8"/>
            <rect x="52" y="62" width="16" height="7" rx="2" fill="${C.metal}"/>
            <rect x="40" y="69" width="40" height="5" rx="2.5" fill="${C.metal}"/>
            <path d="M6 70 q3 -6 6 0 t6 0" stroke="${C.hot}" stroke-width="2.2" fill="none"/>
            <path d="M22 70 h6 m0 0 l-3 -3 m3 3 l-3 3" stroke="${C.wire}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <line x1="32" y1="70" x2="46" y2="70" stroke="${C.green}" stroke-width="2.8" stroke-linecap="round"/>`) },

        { ar: 'مكبّر الصوت', en: 'Loudspeaker',
          line: 'يمرّر الأصوات الحادّة إلى السمّاعة الصغيرة فقط.',
          svg: V(`<rect x="24" y="4" width="60" height="72" rx="6" fill="${C.body}"/>
            <circle cx="54" cy="20" r="9" fill="${C.metal}"/>
            <circle cx="54" cy="20" r="4.5" fill="${C.light}"/>
            <circle cx="54" cy="52" r="17" fill="${C.metal}"/>
            <circle cx="54" cy="52" r="10" fill="${C.wire}"/>
            <circle cx="54" cy="52" r="4" fill="${C.light}"/>
            <path d="M16 44 q-6 8 0 16" stroke="${C.cool}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M8 38 q-8 14 0 28" stroke="${C.cool}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/>
            <path d="M92 14 q5 6 0 12" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <line x1="84" y1="20" x2="98" y2="20" stroke="${C.wire}" stroke-width="2.4"/>
            <line x1="102" y1="12" x2="102" y2="28" stroke="${C.metal}" stroke-width="3"/>
            <line x1="108" y1="12" x2="108" y2="28" stroke="${C.metal}" stroke-width="3"/>
            <line x1="108" y1="20" x2="116" y2="20" stroke="${C.wire}" stroke-width="2.4"/>`) },

        { ar: 'لعبة الضوء الوامض', en: 'Blinking Toy Light',
          line: 'يمتلئ ثم يفرغ، فيومض الضوء مرّة بعد مرّة.',
          svg: V(`<path d="M46 6 l7 16 18 2 -13 12 3 18 -15 -9 -15 9 3 -18 -13 -12 18 -2 z" fill="${C.warm}"/>
            <circle cx="46" cy="34" r="12" fill="${C.glow}" opacity=".3"/>
            <circle cx="46" cy="34" r="7" fill="${C.glow}"/>
            <path d="M18 12 l-6 -6 M76 12 l6 -6 M12 40 h-8" stroke="${C.glow}"
                  stroke-width="2.6" stroke-linecap="round"/>
            <rect x="40" y="58" width="12" height="16" rx="3" fill="${C.body}"/>
            <circle cx="46" cy="62" r="2.4" fill="${C.metal}"/>
            <path d="M68 74 l9 -16 v16 l9 -16 v16 l9 -16 v16 l9 -16"
                  stroke="${C.cool}" stroke-width="2.6" fill="none" stroke-linejoin="round"/>
            <line x1="66" y1="74" x2="112" y2="74" stroke="${C.wire}" stroke-width="1.8" opacity=".6"/>`) }
      ]
    },

    /* ══════════════ الدايود ══════════════ */
    diode: {
      ar: 'الدايود', en: 'Diode',
      items: [
        { ar: 'حماية البطارية المقلوبة', en: 'Reverse Battery Protection',
          line: 'يمنع مرور التيّار إن ركّبت البطارية بالمقلوب.',
          svg: V(`<rect x="10" y="28" width="46" height="22" rx="4" fill="${C.green}"/>
            <rect x="56" y="33" width="6" height="12" rx="1.5" fill="${C.metal}"/>
            <path d="M18 39 h10 M23 34 v10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M42 39 h10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
            <line x1="62" y1="39" x2="74" y2="39" stroke="${C.wire}" stroke-width="3"/>
            <path d="M74 29 l16 10 -16 10 z" fill="${C.body}"/>
            <line x1="90" y1="27" x2="90" y2="51" stroke="${C.body}" stroke-width="3.4"/>
            <line x1="90" y1="39" x2="96" y2="39" stroke="${C.wire}" stroke-width="3"/>
            <path d="M100 33 l12 12 M112 33 l-12 12" stroke="${C.hot}" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M14 62 l7 7 14 -16" stroke="${C.green}" stroke-width="3.4" fill="none"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="60" cy="66" r="3" fill="${C.wire}" opacity=".5"/>`) },

        { ar: 'شاحن الهاتف', en: 'Phone Charger',
          line: 'يجعل الكهرباء تسير في اتجاه واحد داخل الشاحن.',
          svg: V(`<path d="M4 14 q4 -8 8 0 t8 0 t8 0" stroke="${C.hot}" stroke-width="2.4" fill="none"/>
            <rect x="14" y="28" width="16" height="6" rx="2" fill="${C.metal}"/>
            <rect x="14" y="46" width="16" height="6" rx="2" fill="${C.metal}"/>
            <rect x="30" y="18" width="46" height="44" rx="8" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <path d="M44 30 l14 10 -14 10 z" fill="${C.cool}"/>
            <line x1="58" y1="28" x2="58" y2="52" stroke="${C.cool}" stroke-width="3.4"/>
            <line x1="36" y1="40" x2="44" y2="40" stroke="${C.wire}" stroke-width="2.6"/>
            <line x1="58" y1="40" x2="70" y2="40" stroke="${C.wire}" stroke-width="2.6"/>
            <path d="M76 40 q10 10 20 0" stroke="${C.body}" stroke-width="4" fill="none" stroke-linecap="round"/>
            <rect x="94" y="34" width="16" height="12" rx="3" fill="${C.body}"/>
            <rect x="98" y="37" width="8" height="6" rx="1.5" fill="${C.metal}"/>
            <line x1="84" y1="66" x2="108" y2="66" stroke="${C.green}" stroke-width="3" stroke-linecap="round"/>
            <path d="M108 66 l-5 -4 m5 4 l-5 4" stroke="${C.green}" stroke-width="3"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'مصباح الحديقة الشمسي', en: 'Solar Garden Light',
          line: 'يمنع رجوع التيّار من البطارية إلى اللوح ليلًا.',
          svg: V(`<path d="M108 6 a11 11 0 1 0 4 18 a9 9 0 0 1 -4 -18 z" fill="${C.glow}"/>
            <rect x="32" y="12" width="34" height="7" rx="2" fill="${C.cool}"/>
            <line x1="43" y1="12" x2="43" y2="19" stroke="${C.body}" stroke-width="1.6" opacity=".6"/>
            <line x1="55" y1="12" x2="55" y2="19" stroke="${C.body}" stroke-width="1.6" opacity=".6"/>
            <path d="M34 21 h30 l-4 6 H38 z" fill="${C.body}"/>
            <rect x="38" y="27" width="22" height="16" fill="${C.glass}" opacity=".7"/>
            <circle cx="49" cy="35" r="5.5" fill="${C.glow}"/>
            <circle cx="49" cy="35" r="10" fill="${C.glow}" opacity=".25"/>
            <rect x="45" y="43" width="8" height="24" fill="${C.metal}"/>
            <path d="M45 67 l4 8 4 -8 z" fill="${C.metal}"/>
            <path d="M6 70 q26 -8 52 0 q28 -8 56 0" stroke="${C.green}" stroke-width="4" fill="none"/>
            <path d="M14 70 v-8 M22 70 v-6 M84 70 v-7 M94 70 v-5" stroke="${C.green}" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M70 40 l12 8 -12 8 z" fill="${C.body}"/>
            <line x1="82" y1="38" x2="82" y2="58" stroke="${C.body}" stroke-width="3"/>
            <path d="M88 48 h14 m0 0 l-5 -4 m5 4 l-5 4" stroke="${C.hot}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'حماية ملفّ المحرّك', en: 'Motor Coil Protection',
          line: 'يصرّف نبضة الملفّ عند التوقّف، فلا تتلف الدائرة.',
          svg: V(`<line x1="6" y1="20" x2="24" y2="20" stroke="${C.wire}" stroke-width="3"/>
            <path d="M24 20 a7 7 0 0 1 14 0 a7 7 0 0 1 14 0 a7 7 0 0 1 14 0 a7 7 0 0 1 14 0"
                  fill="none" stroke="${C.body}" stroke-width="3.4"/>
            <line x1="80" y1="20" x2="98" y2="20" stroke="${C.wire}" stroke-width="3"/>
            <line x1="98" y1="20" x2="98" y2="66" stroke="${C.wire}" stroke-width="3"/>
            <line x1="98" y1="66" x2="14" y2="66" stroke="${C.wire}" stroke-width="3"/>
            <line x1="14" y1="66" x2="14" y2="20" stroke="${C.wire}" stroke-width="3"/>
            <path d="M6 54 h16 l-8 -14 z" fill="${C.cool}" transform="translate(0 -6)"/>
            <line x1="6" y1="34" x2="22" y2="34" stroke="${C.cool}" stroke-width="3.4"/>
            <path d="M54 36 l-8 14 h7 l-5 12 14 -18 h-7 z" fill="${C.warm}"/>
            <path d="M42 34 l24 24 M66 34 l-24 24" stroke="${C.hot}" stroke-width="3" stroke-linecap="round"/>
            <circle cx="98" cy="20" r="3" fill="${C.wire}"/>
            <circle cx="14" cy="66" r="3" fill="${C.wire}"/>`) },

        { ar: 'مولّد السيارة', en: 'Car Alternator',
          line: 'يحوّل كهرباء المولّد إلى اتجاه واحد لشحن البطارية.',
          svg: V(`<circle cx="30" cy="40" r="20" fill="${C.body}"/>
            <circle cx="30" cy="40" r="12" fill="${C.metal}"/>
            <circle cx="30" cy="40" r="4" fill="${C.body}"/>
            <path d="M30 20 a20 20 0 0 1 17 10" stroke="${C.warm}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M10 26 h-6 M10 54 h-6" stroke="${C.wire}" stroke-width="4" stroke-linecap="round"/>
            <line x1="50" y1="40" x2="62" y2="40" stroke="${C.wire}" stroke-width="3"/>
            <path d="M62 30 l14 10 -14 10 z" fill="${C.cool}"/>
            <line x1="76" y1="28" x2="76" y2="52" stroke="${C.cool}" stroke-width="3.4"/>
            <line x1="76" y1="40" x2="86" y2="40" stroke="${C.wire}" stroke-width="3"/>
            <rect x="86" y="26" width="24" height="30" rx="4" fill="${C.green}"/>
            <rect x="90" y="21" width="6" height="5" rx="1.5" fill="${C.hot}"/>
            <rect x="100" y="21" width="6" height="5" rx="1.5" fill="${C.metal}"/>
            <path d="M94 40 h10 M99 35 v10" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M56 66 h30 m0 0 l-5 -4 m5 4 l-5 4" stroke="${C.green}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'القطار اللعبة', en: 'Toy Train',
          line: 'يمرّر التيّار في اتجاه واحد، فيسير القطار للأمام.',
          svg: V(`<rect x="14" y="34" width="48" height="22" rx="4" fill="${C.hot}"/>
            <rect x="50" y="22" width="26" height="34" rx="4" fill="${C.hot}"/>
            <rect x="56" y="28" width="14" height="12" rx="2" fill="${C.glass}"/>
            <rect x="22" y="22" width="10" height="12" rx="2" fill="${C.body}"/>
            <path d="M20 20 q7 -10 14 0 z" fill="${C.metal}" opacity=".7"/>
            <circle cx="26" cy="60" r="8" fill="${C.body}"/><circle cx="26" cy="60" r="3" fill="${C.metal}"/>
            <circle cx="48" cy="60" r="8" fill="${C.body}"/><circle cx="48" cy="60" r="3" fill="${C.metal}"/>
            <circle cx="68" cy="60" r="6" fill="${C.body}"/><circle cx="68" cy="60" r="2.4" fill="${C.metal}"/>
            <line x1="4" y1="70" x2="116" y2="70" stroke="${C.metal}" stroke-width="4"/>
            ${(() => { let d = ''; for (let i = 0; i < 8; i++)
              d += `<line x1="${8 + i * 15}" y1="72" x2="${8 + i * 15}" y2="78" stroke="${C.skin}" stroke-width="3"/>`;
              return d; })()}
            <path d="M84 16 h26 m0 0 l-6 -5 m6 5 l-6 5" stroke="${C.green}" stroke-width="2.8"
                  fill="none" stroke-linecap="round"/>
            <path d="M110 44 h-22" stroke="${C.hot}" stroke-width="2.8" stroke-linecap="round" opacity=".8"/>
            <path d="M92 38 l12 12 M104 38 l-12 12" stroke="${C.hot}" stroke-width="2.8" stroke-linecap="round"/>`) }
      ]
    },

    /* ══════════════ الترانزستور ══════════════ */
    transistor: {
      ar: 'الترانزستور', en: 'Transistor',
      items: [
        { ar: 'مكبّر الميكروفون', en: 'Microphone Amplifier',
          line: 'يُكبّر إشارة الميكروفون الضعيفة حتى تُسمع من بعيد.',
          svg: V(`<rect x="14" y="12" width="20" height="32" rx="10" fill="${C.metal}"/>
            <line x1="18" y1="20" x2="30" y2="20" stroke="${C.wire}" stroke-width="1.8"/>
            <line x1="18" y1="26" x2="30" y2="26" stroke="${C.wire}" stroke-width="1.8"/>
            <line x1="18" y1="32" x2="30" y2="32" stroke="${C.wire}" stroke-width="1.8"/>
            <line x1="24" y1="44" x2="24" y2="64" stroke="${C.body}" stroke-width="3.4"/>
            <ellipse cx="24" cy="66" rx="14" ry="4" fill="${C.body}"/>
            <path d="M40 32 q3 -6 6 0 t6 0" stroke="${C.cool}" stroke-width="2.2" fill="none"/>
            <path d="M56 32 h6 m0 0 l-3 -3 m3 3 l-3 3" stroke="${C.wire}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M68 18 h10 a14 14 0 0 1 0 28 h-10 z" fill="${C.body}"/>
            <line x1="71" y1="46" x2="71" y2="60" stroke="${C.metal}" stroke-width="2.6"/>
            <line x1="76" y1="46" x2="76" y2="64" stroke="${C.metal}" stroke-width="2.6"/>
            <line x1="81" y1="46" x2="81" y2="60" stroke="${C.metal}" stroke-width="2.6"/>
            <path d="M96 32 q4 -16 8 0 t8 0" stroke="${C.hot}" stroke-width="3" fill="none"/>`) },

        { ar: 'المصباح الليلي', en: 'Night Light',
          line: 'إشارة الحسّاس الصغيرة تفتح الطريق، فيضيء في الظلام.',
          svg: V(`<path d="M16 12 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" fill="${C.metal}" opacity=".7"/>
            <path d="M104 18 l2.4 5 5 2.4 -5 2.4 -2.4 5 -2.4 -5 -5 -2.4 5 -2.4 z" fill="${C.metal}" opacity=".6"/>
            <path d="M96 58 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 z" fill="${C.metal}" opacity=".5"/>
            <rect x="14" y="24" width="10" height="6" rx="2" fill="${C.metal}"/>
            <rect x="14" y="46" width="10" height="6" rx="2" fill="${C.metal}"/>
            <rect x="24" y="16" width="44" height="46" rx="8" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <circle cx="46" cy="26" r="4" fill="${C.body}"/>
            <circle cx="46" cy="26" r="7" fill="${C.body}" opacity=".2"/>
            <circle cx="46" cy="46" r="9" fill="${C.glow}"/>
            <circle cx="46" cy="46" r="15" fill="${C.glow}" opacity=".22"/>
            <path d="M74 46 h10 m0 0 l-4 -4 m4 4 l-4 4" stroke="${C.warm}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>
            <path d="M90 34 h8 a11 11 0 0 1 0 22 h-8 z" fill="${C.body}"/>
            <line x1="93" y1="56" x2="93" y2="66" stroke="${C.metal}" stroke-width="2.4"/>
            <line x1="98" y1="56" x2="98" y2="70" stroke="${C.metal}" stroke-width="2.4"/>
            <line x1="103" y1="56" x2="103" y2="66" stroke="${C.metal}" stroke-width="2.4"/>`) },

        { ar: 'معالج الحاسوب', en: 'Computer Processor',
          line: 'ملايين الترانزستورات تفتح الطريق وتغلقه لتنفيذ الحساب.',
          svg: V(`${(() => { let d = ''; for (let i = 0; i < 7; i++) {
              d += `<rect x="${20 + i * 12}" y="6" width="6" height="10" rx="2" fill="${C.metal}"/>`;
              d += `<rect x="${20 + i * 12}" y="64" width="6" height="10" rx="2" fill="${C.metal}"/>`;
            } for (let j = 0; j < 4; j++) {
              d += `<rect x="6" y="${22 + j * 12}" width="10" height="6" rx="2" fill="${C.metal}"/>`;
              d += `<rect x="104" y="${22 + j * 12}" width="10" height="6" rx="2" fill="${C.metal}"/>`;
            } return d; })()}
            <rect x="16" y="16" width="88" height="48" rx="6" fill="${C.body}"/>
            <rect x="34" y="26" width="52" height="28" rx="3" fill="${C.wire}"/>
            ${(() => { let d = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++)
              d += `<rect x="${38 + c * 8}" y="${30 + r * 8}" width="5" height="5" rx="1" fill="${C.cool}" opacity="${0.4 + ((r + c) % 3) * 0.25}"/>`;
              return d; })()}
            <circle cx="24" cy="24" r="3.4" fill="${C.metal}"/>
            <line x1="34" y1="40" x2="26" y2="40" stroke="${C.metal}" stroke-width="2" opacity=".7"/>
            <line x1="86" y1="40" x2="94" y2="40" stroke="${C.metal}" stroke-width="2" opacity=".7"/>`) },

        { ar: 'بطاقة الذاكرة', en: 'Memory Card',
          line: 'كل خليّة فيها ترانزستور يحفظ جزءًا من الصورة.',
          svg: V(`<path d="M42 6 h36 a4 4 0 0 1 4 4 v60 a4 4 0 0 1 -4 4 H42 a4 4 0 0 1 -4 -4 V20 z" fill="${C.cool}"/>
            <path d="M42 6 l-4 14 h14 z" fill="${C.body}" opacity=".35"/>
            ${(() => { let d = ''; for (let i = 0; i < 5; i++)
              d += `<rect x="${46 + i * 7}" y="24" width="5" height="12" rx="1.5" fill="${C.glow}"/>`;
              return d; })()}
            <rect x="44" y="42" width="32" height="26" rx="3" fill="${C.light}"/>
            ${(() => { let d = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++)
              d += `<rect x="${47 + c * 6}" y="${45 + r * 6}" width="4" height="4" rx="1" fill="${C.body}" opacity="${(r * 5 + c) % 3 ? 0.25 : 0.75}"/>`;
              return d; })()}
            <path d="M92 30 h8 a10 10 0 0 1 0 20 h-8 z" fill="${C.body}"/>
            <line x1="95" y1="50" x2="95" y2="60" stroke="${C.metal}" stroke-width="2.4"/>
            <line x1="100" y1="50" x2="100" y2="64" stroke="${C.metal}" stroke-width="2.4"/>
            <line x1="105" y1="50" x2="105" y2="60" stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M84 40 h6" stroke="${C.wire}" stroke-width="2.4"/>
            <circle cx="22" cy="40" r="12" fill="none" stroke="${C.metal}" stroke-width="3"/>
            <path d="M16 40 l5 5 9 -11" stroke="${C.green}" stroke-width="3" fill="none"
                  stroke-linecap="round" stroke-linejoin="round"/>`) },

        { ar: 'مقياس الحرارة الرقمي', en: 'Digital Thermometer',
          line: 'يُكبّر إشارة الحسّاس الضعيفة، فتظهر الحرارة على الشاشة.',
          svg: V(`<rect x="34" y="4" width="38" height="68" rx="9" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="40" y="12" width="26" height="18" rx="3" fill="${C.body}"/>
            <text x="53" y="26" font-size="12" text-anchor="middle" fill="${C.glow}">37°</text>
            <circle cx="53" cy="40" r="5" fill="${C.metal}"/>
            <circle cx="53" cy="40" r="2" fill="${C.hot}"/>
            <rect x="44" y="50" width="18" height="6" rx="3" fill="${C.metal}" opacity=".7"/>
            <rect x="48" y="72" width="10" height="7" rx="3.5" fill="${C.metal}"/>
            <path d="M53 72 v-10" stroke="${C.hot}" stroke-width="2.4"/>
            <path d="M20 62 q2 -5 4 0 t4 0" stroke="${C.cool}" stroke-width="2" fill="none"/>
            <path d="M14 40 h8 m0 0 l-4 -4 m4 4 l-4 4" stroke="${C.wire}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M84 26 h8 a11 11 0 0 1 0 22 h-8 z" fill="${C.body}"/>
            <line x1="87" y1="48" x2="87" y2="58" stroke="${C.metal}" stroke-width="2.4"/>
            <line x1="92" y1="48" x2="92" y2="62" stroke="${C.metal}" stroke-width="2.4"/>
            <line x1="97" y1="48" x2="97" y2="58" stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M76 37 h6" stroke="${C.wire}" stroke-width="2.4"/>
            <path d="M108 28 q5 -12 10 0" stroke="${C.hot}" stroke-width="2.6" fill="none"/>`) },

        { ar: 'الروبوت المتتبّع', en: 'Line-Following Robot',
          line: 'يُكبّر إشارة الحسّاس، فتدور عجلات الروبوت فوق الخطّ.',
          svg: V(`<path d="M6 66 q28 -14 56 -2 q26 12 52 -4" stroke="${C.body}" stroke-width="7" fill="none" stroke-linecap="round"/>
            <rect x="34" y="20" width="52" height="26" rx="7" fill="${C.warm}"/>
            <rect x="42" y="26" width="20" height="12" rx="3" fill="${C.glass}"/>
            <circle cx="74" cy="32" r="5" fill="${C.body}"/>
            <circle cx="74" cy="32" r="2" fill="${C.glow}"/>
            <line x1="60" y1="20" x2="60" y2="10" stroke="${C.metal}" stroke-width="2.6"/>
            <circle cx="60" cy="9" r="3" fill="${C.hot}"/>
            <circle cx="44" cy="52" r="9" fill="${C.body}"/><circle cx="44" cy="52" r="3.4" fill="${C.metal}"/>
            <circle cx="78" cy="52" r="9" fill="${C.body}"/><circle cx="78" cy="52" r="3.4" fill="${C.metal}"/>
            <rect x="56" y="46" width="10" height="7" rx="2" fill="${C.light}"/>
            <path d="M61 53 v6" stroke="${C.cool}" stroke-width="2.2" stroke-dasharray="2 2"/>
            <path d="M92 30 q6 6 0 12" stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <path d="M100 26 q10 10 0 20" stroke="${C.green}" stroke-width="2.2" fill="none"
                  stroke-linecap="round" opacity=".55"/>`) }
      ]
    },

    /* ══════════════ الطنّان ══════════════ */
    buzzer: {
      ar: 'الطنّان', en: 'Buzzer',
      items: [
        { ar: 'منبّه الساعة', en: 'Alarm Clock',
          line: 'يُصدر نغمة متكرّرة في الوقت الذي ضبطته.',
          svg: V(`<rect x="16" y="20" width="86" height="42" rx="8" fill="${C.body}"/>
            <rect x="24" y="28" width="48" height="26" rx="3" fill="${C.wire}"/>
            <text x="48" y="48" font-size="16" text-anchor="middle" fill="${C.glow}">7:00</text>
            <circle cx="88" cy="41" r="10" fill="${C.metal}"/>
            <circle cx="88" cy="41" r="6" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 6; i++) {
              const a = (i * Math.PI) / 3;
              d += `<circle cx="${(88 + 8 * Math.cos(a)).toFixed(1)}" cy="${(41 + 8 * Math.sin(a)).toFixed(1)}" r="1.6" fill="${C.body}"/>`;
            } return d; })()}
            <rect x="24" y="62" width="10" height="8" rx="2" fill="${C.metal}"/>
            <rect x="84" y="62" width="10" height="8" rx="2" fill="${C.metal}"/>
            <rect x="46" y="12" width="26" height="8" rx="4" fill="${C.hot}"/>
            <path d="M106 30 q7 11 0 22" stroke="${C.warm}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <path d="M114 22 q11 19 0 38" stroke="${C.warm}" stroke-width="2.6" fill="none"
                  stroke-linecap="round" opacity=".55"/>
            <path d="M12 30 q-7 11 0 22" stroke="${C.warm}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`) },

        { ar: 'جرس الباب', en: 'Doorbell',
          line: 'يُصدر صوتًا داخل البيت حين يُضغط الزرّ بالخارج.',
          svg: V(`<rect x="8" y="4" width="54" height="72" rx="3" fill="${C.skin}"/>
            <rect x="14" y="10" width="18" height="26" rx="2" fill="${C.body}" opacity=".25"/>
            <rect x="38" y="10" width="18" height="26" rx="2" fill="${C.body}" opacity=".25"/>
            <rect x="14" y="44" width="42" height="26" rx="2" fill="${C.body}" opacity=".25"/>
            <circle cx="54" cy="40" r="3.4" fill="${C.metal}"/>
            <rect x="74" y="24" width="24" height="34" rx="6" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="86" cy="41" r="7" fill="${C.hot}"/>
            <circle cx="86" cy="41" r="10.5" fill="${C.hot}" opacity=".22"/>
            <rect x="79" y="28" width="14" height="4" rx="2" fill="${C.metal}" opacity=".7"/>
            <path d="M104 32 q6 9 0 18" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M112 26 q10 15 0 30" stroke="${C.warm}" stroke-width="2.4" fill="none"
                  stroke-linecap="round" opacity=".55"/>
            <path d="M68 32 q-6 9 0 18" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`) },

        { ar: 'تنبيه حزام الأمان', en: 'Seat Belt Reminder',
          line: 'يُطلق نغمة متقطّعة حتى يُربط حزام الأمان.',
          svg: V(`<path d="M18 68 h46 a5 5 0 0 0 5 -5 v-7 H23 a5 5 0 0 0 -5 5 z" fill="${C.body}"/>
            <path d="M58 56 v-34 a8 8 0 0 1 8 -8 h6 a8 8 0 0 1 8 8 v34 z" fill="${C.body}"/>
            <rect x="60" y="4" width="20" height="10" rx="4" fill="${C.body}"/>
            <path d="M64 24 L32 58" stroke="${C.hot}" stroke-width="5" stroke-linecap="round"/>
            <path d="M62 30 L36 60" stroke="${C.hot}" stroke-width="2" stroke-linecap="round" opacity=".45"/>
            <rect x="26" y="55" width="11" height="9" rx="2" fill="${C.metal}" transform="rotate(-40 31 59)"/>
            <rect x="8" y="60" width="13" height="11" rx="3" fill="${C.metal}"/>
            <rect x="11" y="63" width="7" height="5" rx="1.5" fill="${C.body}"/>
            <path d="M22 60 l4 -4 m-4 4 l4 4" stroke="${C.hot}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="98" cy="60" r="7" fill="${C.hot}"/>
            <path d="M95 56 l5 8" stroke="${C.light}" stroke-width="2" stroke-linecap="round"/>
            <path d="M88 24 q7 9 0 18" stroke="${C.warm}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <path d="M98 18 q11 15 0 30" stroke="${C.warm}" stroke-width="2.6" fill="none"
                  stroke-linecap="round" opacity=".7"/>
            <path d="M108 12 q14 21 0 42" stroke="${C.warm}" stroke-width="2.4" fill="none"
                  stroke-linecap="round" opacity=".45"/>`) },

        { ar: 'كاشف الدخان', en: 'Smoke Alarm',
          line: 'يُطلق صفيرًا حادًّا حين يكشف الجهاز دخانًا.',
          svg: V(`<rect x="0" y="2" width="120" height="7" fill="${C.metal}" opacity=".7"/>
            <path d="M34 9 h52 v5 a26 15 0 0 1 -52 0 z" fill="${C.light}" stroke="${C.metal}" stroke-width="2.2"/>
            ${(() => { let d = ''; for (let i = 0; i < 5; i++)
              d += `<circle cx="${42 + i * 9}" cy="${24 - Math.abs(i - 2) * 2}" r="2" fill="${C.wire}" opacity=".6"/>`;
              return d; })()}
            <circle cx="60" cy="17" r="3.4" fill="${C.hot}"/>
            <path d="M24 76 q10 -12 2 -20 q-8 -8 2 -16" stroke="${C.wire}" stroke-width="3.4"
                  fill="none" opacity=".55" stroke-linecap="round"/>
            <path d="M40 78 q12 -14 4 -22" stroke="${C.wire}" stroke-width="3"
                  fill="none" opacity=".4" stroke-linecap="round"/>
            <path d="M92 24 q8 8 0 16" stroke="${C.hot}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <path d="M102 18 q12 14 0 28" stroke="${C.hot}" stroke-width="2.6" fill="none"
                  stroke-linecap="round" opacity=".6"/>
            <path d="M112 12 q16 20 0 40" stroke="${C.hot}" stroke-width="2.4" fill="none"
                  stroke-linecap="round" opacity=".35"/>
            <path d="M28 24 q-8 8 0 16" stroke="${C.hot}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`) },

        { ar: 'تنبيه رجوع السيارة', en: 'Reverse Beeper',
          line: 'يزيد تكرار الصفير كلّما اقتربت السيارة من الحاجز.',
          svg: V(`<path d="M6 44 h58 v14 a4 4 0 0 1 -4 4 H10 a4 4 0 0 1 -4 -4 z" fill="${C.cool}"/>
            <path d="M14 44 l8 -13 h30 v13 z" fill="${C.cool}" opacity=".8"/>
            <path d="M20 42 l5 -8 h25 v8 z" fill="${C.glass}"/>
            <circle cx="22" cy="62" r="8" fill="${C.body}"/><circle cx="22" cy="62" r="3" fill="${C.metal}"/>
            <circle cx="52" cy="62" r="8" fill="${C.body}"/><circle cx="52" cy="62" r="3" fill="${C.metal}"/>
            <rect x="60" y="46" width="6" height="9" rx="2" fill="${C.light}"/>
            <path d="M72 40 q7 10 0 20" stroke="${C.warm}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <path d="M82 34 q10 16 0 32" stroke="${C.warm}" stroke-width="2.6" fill="none"
                  stroke-linecap="round" opacity=".7"/>
            <path d="M92 28 q13 22 0 44" stroke="${C.warm}" stroke-width="2.4" fill="none"
                  stroke-linecap="round" opacity=".45"/>
            <rect x="104" y="10" width="12" height="60" fill="${C.metal}"/>
            <line x1="104" y1="26" x2="116" y2="26" stroke="${C.light}" stroke-width="1.8"/>
            <line x1="104" y1="42" x2="116" y2="42" stroke="${C.light}" stroke-width="1.8"/>
            <line x1="104" y1="58" x2="116" y2="58" stroke="${C.light}" stroke-width="1.8"/>
            <line x1="0" y1="72" x2="120" y2="72" stroke="${C.wire}" stroke-width="3" opacity=".5"/>`) },

        { ar: 'اللعبة الإلكترونية', en: 'Handheld Game',
          line: 'يُصدر نغمة قصيرة عند كل ضغطة أو فوز.',
          svg: V(`<rect x="26" y="4" width="60" height="72" rx="9" fill="${C.green}"/>
            <rect x="33" y="11" width="46" height="28" rx="3" fill="${C.body}"/>
            ${(() => { let d = ''; const on = [[1, 1], [2, 1], [3, 1], [2, 2], [1, 0], [3, 0]];
              on.forEach(([c, r]) => { d += `<rect x="${39 + c * 9}" y="${16 + r * 8}" width="7" height="6" rx="1" fill="${C.glow}"/>`; });
              return d; })()}
            <path d="M40 50 h8 v-8 h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 z" fill="${C.body}"/>
            <circle cx="74" cy="48" r="5" fill="${C.hot}"/>
            <circle cx="74" cy="62" r="5" fill="${C.warm}"/>
            ${(() => { let d = ''; for (let i = 0; i < 4; i++)
              d += `<circle cx="${36 + i * 6}" cy="70" r="2" fill="${C.body}" opacity=".65"/>`;
              return d; })()}
            <circle cx="98" cy="24" r="4.5" fill="${C.body}"/>
            <line x1="102" y1="24" x2="102" y2="8" stroke="${C.body}" stroke-width="2.6"/>
            <circle cx="110" cy="40" r="3.6" fill="${C.body}"/>
            <line x1="113" y1="40" x2="113" y2="26" stroke="${C.body}" stroke-width="2.2"/>
            <path d="M102 8 q6 2 8 6" stroke="${C.body}" stroke-width="2.4" fill="none"/>
            <path d="M16 34 q-6 8 0 16" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`) }
      ]
    },

    /* ══════════════ المصباح ══════════════ */
    lamp: {
      ar: 'المصباح', en: 'Lamp',
      items: [
        { ar: 'مصباح السقف', en: 'Ceiling Light',
          line: 'يحوّل الكهرباء إلى ضوء يملأ الغرفة من السقف.',
          svg: V(`<rect x="0" y="0" width="120" height="5" fill="${C.metal}" opacity=".6"/>
            <line x1="60" y1="5" x2="60" y2="20" stroke="${C.wire}" stroke-width="3"/>
            <path d="M36 44 l10 -24 h28 l10 24 z" fill="${C.body}"/>
            <path d="M36 44 L20 76 h80 L84 44 z" fill="${C.glow}" opacity=".22"/>
            <ellipse cx="60" cy="44" rx="24" ry="5" fill="${C.glow}" opacity=".55"/>
            <circle cx="60" cy="46" r="7" fill="${C.glow}"/>
            <rect x="24" y="70" width="30" height="6" rx="2" fill="${C.skin}"/>
            <rect x="28" y="76" width="4" height="4" fill="${C.skin}"/>
            <rect x="46" y="76" width="4" height="4" fill="${C.skin}"/>
            <rect x="76" y="66" width="18" height="10" rx="3" fill="${C.skin}" opacity=".6"/>`) },

        { ar: 'مصباح الشارع', en: 'Street Lamp',
          line: 'يُنير جزءًا من الشارع أمام السيارات والمارّة.',
          svg: V(`<rect x="18" y="18" width="7" height="50" fill="${C.metal}"/>
            <path d="M21 20 q0 -14 18 -14 h14" stroke="${C.metal}" stroke-width="5" fill="none"/>
            <path d="M52 4 h24 l7 11 H45 z" fill="${C.body}"/>
            <ellipse cx="64" cy="16" rx="12" ry="4" fill="${C.glow}"/>
            <path d="M50 18 L32 68 h64 L78 18 z" fill="${C.glow}" opacity=".2"/>
            <rect x="12" y="66" width="19" height="5" rx="2" fill="${C.body}"/>
            <rect x="0" y="70" width="120" height="10" fill="${C.wire}" opacity=".55"/>
            <line x1="6" y1="75" x2="20" y2="75" stroke="${C.light}" stroke-width="2.4"/>
            <line x1="34" y1="75" x2="48" y2="75" stroke="${C.light}" stroke-width="2.4"/>
            <line x1="62" y1="75" x2="76" y2="75" stroke="${C.light}" stroke-width="2.4"/>
            <line x1="90" y1="75" x2="104" y2="75" stroke="${C.light}" stroke-width="2.4"/>`) },

        { ar: 'المصباح الأمامي للسيارة', en: 'Car Headlight',
          line: 'يرمي ضوءًا قويًّا أمام السيارة في الطريق المظلم.',
          svg: V(`<path d="M6 58 h56 a6 6 0 0 0 6 -6 v-8 l-16 -16 H20 a14 14 0 0 0 -14 14 z" fill="${C.warm}"/>
            <path d="M26 32 h22 l12 12 H26 z" fill="${C.glass}"/>
            <circle cx="26" cy="60" r="10" fill="${C.body}"/><circle cx="26" cy="60" r="4" fill="${C.metal}"/>
            <ellipse cx="66" cy="46" rx="6" ry="7" fill="${C.glow}"/>
            <path d="M72 38 L116 22 v42 L72 54 z" fill="${C.glow}" opacity=".28"/>
            <path d="M74 42 L110 32 M74 50 L110 54" stroke="${C.glow}" stroke-width="2.4"
                  stroke-linecap="round" opacity=".7"/>
            <line x1="0" y1="70" x2="120" y2="70" stroke="${C.wire}" stroke-width="3.4"/>
            <line x1="8" y1="76" x2="34" y2="76" stroke="${C.light}" stroke-width="2.4" opacity=".7"/>
            <line x1="52" y1="76" x2="78" y2="76" stroke="${C.light}" stroke-width="2.4" opacity=".7"/>`) },

        { ar: 'مصباح الفرن', en: 'Oven Light',
          line: 'يُضيء داخل الفرن لترى الطعام دون فتح الباب.',
          svg: V(`<rect x="12" y="8" width="96" height="64" rx="6" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="12" y="8" width="96" height="13" rx="6" fill="${C.metal}" opacity=".5"/>
            <circle cx="26" cy="15" r="4" fill="${C.body}"/>
            <circle cx="40" cy="15" r="4" fill="${C.body}"/>
            <circle cx="96" cy="15" r="4" fill="${C.hot}"/>
            <rect x="18" y="24" width="84" height="5" rx="2.5" fill="${C.metal}"/>
            <rect x="22" y="34" width="76" height="32" rx="4" fill="${C.body}"/>
            <rect x="26" y="38" width="68" height="24" rx="2" fill="${C.glow}" opacity=".4"/>
            <circle cx="86" cy="44" r="4" fill="${C.glow}"/>
            <path d="M86 36 v-3 M92 40 l3 -2 M80 40 l-3 -2" stroke="${C.glow}" stroke-width="2" stroke-linecap="round"/>
            <rect x="36" y="54" width="40" height="4" rx="1.5" fill="${C.metal}"/>
            <ellipse cx="56" cy="48" rx="12" ry="6" fill="${C.warm}"/>`) },

        { ar: 'مصباح المكتب', en: 'Desk Lamp',
          line: 'يجمع الضوء على الكتاب وحده أثناء المذاكرة.',
          svg: V(`<ellipse cx="24" cy="70" rx="18" ry="5" fill="${C.body}"/>
            <path d="M24 68 L38 40 L58 28" stroke="${C.body}" stroke-width="4.5" fill="none" stroke-linejoin="round"/>
            <circle cx="38" cy="40" r="4" fill="${C.metal}"/>
            <path d="M52 24 l24 -10 14 22 -24 10 z" fill="${C.hot}"/>
            <ellipse cx="78" cy="38" rx="9" ry="6" fill="${C.glow}" transform="rotate(-22 78 38)"/>
            <path d="M70 44 L58 70 h50 L92 42 z" fill="${C.glow}" opacity=".24"/>
            <rect x="60" y="70" width="46" height="5" rx="1.5" fill="${C.cool}"/>
            <line x1="66" y1="72.5" x2="100" y2="72.5" stroke="${C.light}" stroke-width="1.6"/>
            <path d="M83 70 v-4" stroke="${C.cool}" stroke-width="2"/>`) },

        { ar: 'فانوس الرحلة', en: 'Camping Lantern',
          line: 'يُضيء الخيمة كلّها من موضع واحد معلّق.',
          svg: V(`<path d="M44 14 a16 11 0 0 1 32 0" stroke="${C.metal}" stroke-width="3" fill="none"/>
            <rect x="40" y="14" width="40" height="9" rx="3" fill="${C.body}"/>
            <rect x="44" y="23" width="32" height="34" rx="4" fill="${C.glass}" opacity=".8"/>
            <circle cx="60" cy="38" r="7" fill="${C.glow}"/>
            <path d="M56 40 q4 -7 8 0" stroke="${C.warm}" stroke-width="2" fill="none"/>
            <rect x="38" y="57" width="44" height="11" rx="3" fill="${C.body}"/>
            <rect x="66" y="60" width="9" height="5" rx="2" fill="${C.hot}"/>
            <path d="M36 26 h-10 M34 40 h-12 M36 54 h-10" stroke="${C.glow}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M84 26 h10 M86 40 h12 M84 54 h10" stroke="${C.glow}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M6 72 l12 -22 12 22 z" fill="${C.wire}" opacity=".45"/>
            <path d="M100 72 l10 -18 10 18 z" fill="${C.wire}" opacity=".3"/>
            <line x1="0" y1="72" x2="120" y2="72" stroke="${C.green}" stroke-width="3" opacity=".6"/>`) }
      ]
    },

    /* ══════════════ السلك ══════════════ */
    wire: {
      ar: 'السلك', en: 'Wire',
      items: [
        { ar: 'سلك الشاحن', en: 'Charging Cable',
          line: 'ينقل كهرباء الشاحن إلى بطارية الجهاز.',
          svg: V(`<rect x="4" y="30" width="18" height="12" rx="4" fill="${C.metal}"/>
            <rect x="8" y="33" width="10" height="6" rx="2" fill="${C.body}"/>
            <path d="M22 36 q22 -24 46 -4 q14 12 32 2" stroke="${C.warm}" stroke-width="6"
                  fill="none" stroke-linecap="round"/>
            <rect x="98" y="26" width="16" height="20" rx="3" fill="${C.body}"/>
            <rect x="102" y="30" width="8" height="8" rx="1.5" fill="${C.metal}"/>
            <circle cx="52" cy="60" r="14" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="52" cy="60" r="9" fill="${C.warm}" opacity=".45"/>
            ${(() => { let d = ''; const p = [[0, 0], [5, 0], [-5, 0], [2.5, 4.5], [-2.5, 4.5], [2.5, -4.5], [-2.5, -4.5]];
              p.forEach(([x, y]) => { d += `<circle cx="${52 + x}" cy="${60 + y}" r="2" fill="${C.hot}"/>`; });
              return d; })()}
            <line x1="66" y1="60" x2="78" y2="60" stroke="${C.wire}" stroke-width="1.8" stroke-dasharray="3 2"/>
            <circle cx="40" cy="22" r="2.4" fill="${C.glow}"/>
            <circle cx="70" cy="26" r="2.4" fill="${C.glow}" opacity=".7"/>`) },

        { ar: 'أسلاك الشارع', en: 'Power Lines',
          line: 'تحمل الكهرباء من المحطّة إلى بيوت الحيّ.',
          svg: V(`<rect x="22" y="16" width="7" height="56" fill="${C.skin}"/>
            <rect x="10" y="20" width="31" height="5" rx="2" fill="${C.skin}"/>
            <rect x="14" y="32" width="23" height="4.5" rx="2" fill="${C.skin}"/>
            <rect x="92" y="16" width="7" height="56" fill="${C.skin}"/>
            <rect x="80" y="20" width="31" height="5" rx="2" fill="${C.skin}"/>
            <rect x="84" y="32" width="23" height="4.5" rx="2" fill="${C.skin}"/>
            <circle cx="13" cy="19" r="2.6" fill="${C.metal}"/><circle cx="38" cy="19" r="2.6" fill="${C.metal}"/>
            <circle cx="83" cy="19" r="2.6" fill="${C.metal}"/><circle cx="108" cy="19" r="2.6" fill="${C.metal}"/>
            <path d="M13 19 q47 22 70 0" stroke="${C.wire}" stroke-width="2.6" fill="none"/>
            <path d="M38 19 q47 22 70 0" stroke="${C.wire}" stroke-width="2.6" fill="none"/>
            <path d="M16 34 q42 20 68 0" stroke="${C.wire}" stroke-width="2.4" fill="none" opacity=".8"/>
            <path d="M0 19 q8 4 13 0" stroke="${C.wire}" stroke-width="2.6" fill="none"/>
            <path d="M108 19 q6 4 12 0" stroke="${C.wire}" stroke-width="2.6" fill="none"/>
            <line x1="0" y1="72" x2="120" y2="72" stroke="${C.green}" stroke-width="4" opacity=".55"/>
            <path d="M52 72 v-10 h18 v10" stroke="${C.metal}" stroke-width="2.4" fill="none" opacity=".6"/>`) },

        { ar: 'سمّاعات الأذن', en: 'Earphones',
          line: 'ينقل إشارة الصوت من الجهاز إلى السمّاعتين.',
          svg: V(`<circle cx="26" cy="18" r="10" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="26" cy="18" r="4" fill="${C.wire}"/>
            <circle cx="70" cy="14" r="10" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="70" cy="14" r="4" fill="${C.wire}"/>
            <path d="M26 28 q2 20 20 26" stroke="${C.body}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <path d="M70 24 q-6 22 -24 30" stroke="${C.body}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <rect x="42" y="52" width="8" height="7" rx="2" fill="${C.metal}"/>
            <path d="M46 59 v9" stroke="${C.body}" stroke-width="3.4" stroke-linecap="round"/>
            <rect x="41" y="68" width="10" height="10" rx="2" fill="${C.body}"/>
            <line x1="41" y1="72" x2="51" y2="72" stroke="${C.metal}" stroke-width="1.8"/>
            <line x1="41" y1="76" x2="51" y2="76" stroke="${C.metal}" stroke-width="1.8"/>
            <path d="M88 20 q6 8 0 16" stroke="${C.cool}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M98 14 q11 14 0 28" stroke="${C.cool}" stroke-width="2.4" fill="none"
                  stroke-linecap="round" opacity=".55"/>
            <path d="M8 24 q-5 6 0 12" stroke="${C.cool}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".7"/>`) },

        { ar: 'أسلاك الحائط', en: 'House Wiring',
          line: 'أسلاك داخل الحائط توصل الكهرباء إلى كل مقبس.',
          svg: V(`<rect x="4" y="4" width="112" height="72" rx="3" fill="${C.skin}" opacity=".22"/>
            ${(() => { let d = ''; for (let r = 0; r < 5; r++) {
              d += `<line x1="4" y1="${16 + r * 14}" x2="116" y2="${16 + r * 14}" stroke="${C.skin}" stroke-width="1.4" opacity=".5"/>`;
              for (let c = 0; c < 4; c++)
                d += `<line x1="${12 + c * 30 + (r % 2) * 15}" y1="${16 + r * 14}" x2="${12 + c * 30 + (r % 2) * 15}" y2="${2 + r * 14}" stroke="${C.skin}" stroke-width="1.4" opacity=".5"/>`;
            } return d; })()}
            <path d="M18 74 V38 H62 V18 h34" stroke="${C.hot}" stroke-width="4" fill="none"
                  stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M25 74 V44 H68 V24 h28" stroke="${C.cool}" stroke-width="4" fill="none"
                  stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="96" cy="21" r="7" fill="${C.light}" stroke="${C.metal}" stroke-width="2.2"/>
            <rect x="62" y="44" width="28" height="26" rx="5" fill="${C.light}" stroke="${C.metal}" stroke-width="2.2"/>
            <circle cx="71" cy="55" r="3" fill="${C.body}"/>
            <circle cx="81" cy="55" r="3" fill="${C.body}"/>
            <rect x="69" y="62" width="14" height="3" rx="1.5" fill="${C.body}" opacity=".6"/>`) },

        { ar: 'سلك لوحة التجارب', en: 'Jumper Wire',
          line: 'يصل بين ثقبين في اللوحة، فتكتمل الدائرة.',
          svg: V(`<rect x="6" y="14" width="108" height="52" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2.2"/>
            <rect x="6" y="37" width="108" height="6" fill="${C.metal}" opacity=".35"/>
            ${(() => { let d = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) {
              const y = r < 2 ? 20 + r * 8 : 46 + (r - 2) * 8;
              d += `<rect x="${12 + c * 10}" y="${y}" width="4" height="4" rx="1" fill="${C.wire}" opacity=".45"/>`;
            } return d; })()}
            <path d="M24 22 q12 -16 24 0" stroke="${C.hot}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <path d="M62 48 q14 18 30 0" stroke="${C.green}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <path d="M34 54 q20 -6 42 -28" stroke="${C.cool}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <circle cx="24" cy="22" r="2.6" fill="${C.metal}"/><circle cx="48" cy="22" r="2.6" fill="${C.metal}"/>
            <circle cx="62" cy="48" r="2.6" fill="${C.metal}"/><circle cx="92" cy="48" r="2.6" fill="${C.metal}"/>
            <circle cx="34" cy="54" r="2.6" fill="${C.metal}"/><circle cx="76" cy="26" r="2.6" fill="${C.metal}"/>
            <line x1="6" y1="70" x2="114" y2="70" stroke="${C.metal}" stroke-width="2" opacity=".5"/>`) },

        { ar: 'كابل الإنترنت', en: 'Ethernet Cable',
          line: 'ينقل بيانات الإنترنت بين الراوتر والحاسوب.',
          svg: V(`<rect x="8" y="42" width="48" height="20" rx="5" fill="${C.body}"/>
            <line x1="20" y1="42" x2="14" y2="24" stroke="${C.body}" stroke-width="3.4" stroke-linecap="round"/>
            <line x1="44" y1="42" x2="50" y2="24" stroke="${C.body}" stroke-width="3.4" stroke-linecap="round"/>
            <circle cx="14" cy="23" r="2.6" fill="${C.metal}"/><circle cx="50" cy="23" r="2.6" fill="${C.metal}"/>
            <circle cx="18" cy="52" r="2.6" fill="${C.green}"/>
            <circle cx="28" cy="52" r="2.6" fill="${C.green}"/>
            <circle cx="38" cy="52" r="2.6" fill="${C.warm}"/>
            <path d="M56 52 q18 16 34 2 q8 -6 12 -14" stroke="${C.cool}" stroke-width="5"
                  fill="none" stroke-linecap="round"/>
            <path d="M96 32 h16 v-14 h-5 v-5 h-6 v5 h-5 z" fill="${C.metal}"/>
            <line x1="100" y1="20" x2="100" y2="30" stroke="${C.glow}" stroke-width="1.6"/>
            <line x1="104" y1="20" x2="104" y2="30" stroke="${C.glow}" stroke-width="1.6"/>
            <line x1="108" y1="20" x2="108" y2="30" stroke="${C.glow}" stroke-width="1.6"/>
            <circle cx="70" cy="60" r="2.4" fill="${C.glow}"/>
            <circle cx="82" cy="58" r="2.4" fill="${C.glow}" opacity=".7"/>
            <circle cx="90" cy="48" r="2.4" fill="${C.glow}" opacity=".45"/>`) }
      ]
    }
  };

  window.USES = Object.assign(window.USES || {}, MORE);
  if (window.renderUses) window.renderUses();
})();
