/* ============================================================
   معرض التطبيقات — توسعة الروبوت والتحكّم
   الاستعمال في الدرس:
     <div class="uses" data-uses="microcontroller"></div>

   قاعدة مُلزمة (STYLE.md §٣):
     • ٦ تطبيقات لكل عنصر — لكل تطبيق رسمه الخاصّ
     • لا رسم مشترك بين تطبيقين، ولا إيموجي مكان الرسم
     • السطر تحت الرسم يقول: العنصر يفعل *ماذا* هنا تحديدًا
     • الكاميرا تستقبل الضوء، والمصباح يُصدره — لا خلط بينهما
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

    /* ══════════════ لوحة التحكّم ══════════════ */
    microcontroller: {
      ar: 'لوحة التحكّم', en: 'Microcontroller',
      items: [
        { ar: 'إشارة المرور المصغّرة', en: 'Model Traffic Light',
          line: 'يُشعل الأضواء الثلاثة بالترتيب، ويحسب ثواني كل لون.',
          svg: V(`<rect x="6" y="22" width="46" height="38" rx="4" fill="${C.cool}" opacity=".85"/>
            <rect x="6" y="22" width="46" height="6" rx="2" fill="${C.body}"/>
            <rect x="6" y="54" width="46" height="6" rx="2" fill="${C.body}"/>
            <rect x="17" y="34" width="24" height="14" rx="2" fill="${C.body}"/>
            <line x1="20" y1="38" x2="38" y2="38" stroke="${C.metal}" stroke-width="1.4" opacity=".6"/>
            <line x1="20" y1="44" x2="38" y2="44" stroke="${C.metal}" stroke-width="1.4" opacity=".6"/>
            <circle cx="47" cy="33" r="2.4" fill="${C.green}"/>
            <path d="M52 32 h14 M52 40 h14 M52 48 h14" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <rect x="66" y="6" width="32" height="58" rx="7" fill="${C.body}"/>
            <circle cx="82" cy="19" r="9" fill="${C.hot}"/>
            <circle cx="82" cy="35" r="9" fill="${C.warm}" opacity=".3"/>
            <circle cx="82" cy="51" r="9" fill="${C.green}" opacity=".28"/>
            <rect x="76" y="64" width="12" height="14" fill="${C.metal}"/>
            <path d="M100 15 h8 M100 20 h6" stroke="${C.hot}" stroke-width="2.2" stroke-linecap="round"/>`) },

        { ar: 'مروحة الحرارة', en: 'Thermostat Fan',
          line: 'يقرأ حرارة الغرفة، فيُشغّل المروحة عند ارتفاعها.',
          svg: V(`<rect x="7" y="12" width="11" height="42" rx="5.5" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="10" y="30" width="5" height="26" fill="${C.hot}"/>
            <circle cx="12.5" cy="58" r="8" fill="${C.hot}"/>
            <path d="M20 18 h5 M20 26 h5 M20 34 h5" stroke="${C.metal}" stroke-width="1.6"/>
            <path d="M21 46 h9" stroke="${C.wire}" stroke-width="2"/>
            <rect x="30" y="24" width="34" height="34" rx="4" fill="${C.cool}" opacity=".85"/>
            <rect x="30" y="24" width="34" height="5" fill="${C.body}"/>
            <rect x="30" y="53" width="34" height="5" fill="${C.body}"/>
            <rect x="38" y="34" width="18" height="14" rx="2" fill="${C.body}"/>
            <circle cx="60" cy="31" r="2.2" fill="${C.glow}"/>
            <path d="M64 42 h8" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="92" cy="42" r="19" fill="none" stroke="${C.metal}" stroke-width="2.5"/>
            <path d="M92 42 q11-15 17-4 q-6 11-17 4z" fill="${C.cool}" opacity=".85"/>
            <path d="M92 42 q11-15 17-4 q-6 11-17 4z" fill="${C.cool}" opacity=".85" transform="rotate(120 92 42)"/>
            <path d="M92 42 q11-15 17-4 q-6 11-17 4z" fill="${C.cool}" opacity=".85" transform="rotate(240 92 42)"/>
            <circle cx="92" cy="42" r="4" fill="${C.body}"/>`) },

        { ar: 'ريّ النبات', en: 'Plant Watering',
          line: 'يقيس رطوبة التربة، ويفتح المضخّة حين تجفّ.',
          svg: V(`<rect x="6" y="16" width="36" height="30" rx="4" fill="${C.cool}" opacity=".85"/>
            <rect x="6" y="16" width="36" height="5" fill="${C.body}"/>
            <rect x="6" y="41" width="36" height="5" fill="${C.body}"/>
            <rect x="14" y="26" width="20" height="12" rx="2" fill="${C.body}"/>
            <circle cx="38" cy="24" r="2.2" fill="${C.green}"/>
            <path d="M42 40 q14 2 20 14" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <path d="M60 50 h42 l-6 26 h-30 z" fill="${C.skin}"/>
            <rect x="60" y="50" width="42" height="5" fill="${C.body}" opacity=".55"/>
            <rect x="65" y="54" width="3.4" height="16" rx="1.5" fill="${C.metal}"/>
            <path d="M84 52 v-20" stroke="${C.green}" stroke-width="3"/>
            <path d="M84 40 q-13-2-15-12 q13 0 15 10z" fill="${C.green}"/>
            <path d="M84 34 q13-2 15-12 q-13 0-15 10z" fill="${C.green}" opacity=".78"/>
            <path d="M114 4 v10 h-24" stroke="${C.cool}" stroke-width="4" fill="none" stroke-linecap="round"/>
            <circle cx="90" cy="21" r="3.2" fill="${C.cool}"/>
            <circle cx="88" cy="29" r="2.6" fill="${C.cool}" opacity=".75"/>
            <circle cx="91" cy="36" r="2.1" fill="${C.cool}" opacity=".5"/>`) },

        { ar: 'لوحة النتيجة', en: 'Scoreboard',
          line: 'يعدّ الأهداف، ويعرض الرقم على الشاشة الرقمية.',
          svg: V(`<rect x="6" y="22" width="34" height="30" rx="4" fill="${C.cool}" opacity=".85"/>
            <rect x="6" y="22" width="34" height="5" fill="${C.body}"/>
            <rect x="13" y="32" width="20" height="12" rx="2" fill="${C.body}"/>
            <rect x="8" y="58" width="14" height="10" rx="3" fill="${C.hot}"/>
            <rect x="26" y="58" width="14" height="10" rx="3" fill="${C.green}"/>
            <path d="M15 58 v-6 M33 58 v-6" stroke="${C.wire}" stroke-width="1.8"/>
            <path d="M40 38 h10" stroke="${C.wire}" stroke-width="2"/>
            <rect x="50" y="14" width="64" height="46" rx="5" fill="${C.body}"/>
            <rect x="61" y="24" width="8" height="3.5" fill="${C.glow}"/>
            <rect x="68.5" y="27" width="3.5" height="9" fill="${C.glow}"/>
            <rect x="61" y="35.5" width="8" height="3.5" fill="${C.glow}"/>
            <rect x="68.5" y="38" width="3.5" height="9" fill="${C.glow}"/>
            <rect x="61" y="46.5" width="8" height="3.5" fill="${C.glow}"/>
            <rect x="58" y="27" width="3.5" height="9" fill="${C.glow}" opacity=".15"/>
            <rect x="58" y="38" width="3.5" height="9" fill="${C.glow}" opacity=".15"/>
            <circle cx="82" cy="31" r="2.2" fill="${C.glow}" opacity=".7"/>
            <circle cx="82" cy="43" r="2.2" fill="${C.glow}" opacity=".7"/>
            <rect x="100" y="27" width="3.5" height="9" fill="${C.glow}"/>
            <rect x="100" y="38" width="3.5" height="9" fill="${C.glow}"/>
            <rect x="92" y="24" width="8" height="3.5" fill="${C.glow}" opacity=".15"/>
            <rect x="92" y="46.5" width="8" height="3.5" fill="${C.glow}" opacity=".15"/>
            <rect x="89" y="27" width="3.5" height="9" fill="${C.glow}" opacity=".15"/>
            <rect x="70" y="60" width="24" height="16" fill="${C.metal}"/>`) },

        { ar: 'قفل الرقم السرّي', en: 'Keypad Lock',
          line: 'يقارن الأرقام المضغوطة بالرقم المحفوظ، ثم يفتح القفل.',
          svg: V(`<rect x="6" y="8" width="44" height="64" rx="6" fill="${C.body}"/>
            ${(() => { let d = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++)
              d += `<rect x="${12 + c * 13}" y="${14 + r * 14}" width="10" height="10" rx="2" fill="${C.metal}"/>`;
              return d; })()}
            <rect x="12" y="42" width="10" height="10" rx="2" fill="${C.glow}"/>
            <path d="M50 40 h8" stroke="${C.wire}" stroke-width="2"/>
            <rect x="58" y="28" width="26" height="24" rx="3" fill="${C.cool}" opacity=".85"/>
            <rect x="58" y="28" width="26" height="4" fill="${C.body}"/>
            <rect x="64" y="35" width="14" height="11" rx="2" fill="${C.body}"/>
            <path d="M84 40 h6" stroke="${C.wire}" stroke-width="2"/>
            <rect x="90" y="42" width="26" height="24" rx="4" fill="${C.warm}"/>
            <path d="M96 42 v-9 a7 7 0 0 1 14 0 v3" stroke="${C.metal}" stroke-width="4" fill="none" stroke-linecap="round"/>
            <circle cx="103" cy="52" r="4" fill="${C.body}"/>
            <rect x="101.6" y="52" width="2.8" height="8" fill="${C.body}"/>
            <circle cx="103" cy="24" r="3" fill="${C.green}"/>`) },

        { ar: 'المصعد المصغّر', en: 'Model Elevator',
          line: 'يوقف المحرّك عند الطابق المطلوب بعدّ الطوابق.',
          svg: V(`<rect x="28" y="6" width="46" height="70" rx="3" fill="none" stroke="${C.metal}" stroke-width="2.5"/>
            <circle cx="51" cy="10" r="6" fill="${C.body}"/>
            <circle cx="51" cy="10" r="2.4" fill="${C.metal}"/>
            <line x1="51" y1="16" x2="51" y2="36" stroke="${C.metal}" stroke-width="2"/>
            <rect x="33" y="36" width="36" height="28" rx="2" fill="${C.light}" stroke="${C.body}" stroke-width="2"/>
            <line x1="51" y1="36" x2="51" y2="64" stroke="${C.body}" stroke-width="1.6" opacity=".6"/>
            <path d="M74 20 h8 M74 44 h8 M74 68 h8" stroke="${C.metal}" stroke-width="2"/>
            <circle cx="18" cy="20" r="5" fill="${C.metal}"/>
            <circle cx="18" cy="36" r="5" fill="${C.glow}"/>
            <circle cx="18" cy="52" r="5" fill="${C.metal}"/>
            <path d="M23 36 h5" stroke="${C.wire}" stroke-width="1.8"/>
            <rect x="86" y="28" width="30" height="26" rx="4" fill="${C.cool}" opacity=".85"/>
            <rect x="86" y="28" width="30" height="4.5" fill="${C.body}"/>
            <rect x="93" y="36" width="16" height="12" rx="2" fill="${C.body}"/>
            <path d="M86 34 q-18-6-30-22" stroke="${C.wire}" stroke-width="2" fill="none"/>`) }
      ]
    },

    /* ══════════════ المرحّل ══════════════ */
    relay: {
      ar: 'المرحّل', en: 'Relay',
      items: [
        { ar: 'مفتاح المكيّف', en: 'Air Conditioner Switch',
          line: 'زرّ صغير يُغلق المرحّل، فيمرّ تيّار المكيّف الكبير.',
          svg: V(`<circle cx="13" cy="46" r="10" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <circle cx="13" cy="46" r="5.5" fill="${C.hot}"/>
            <path d="M23 46 h9" stroke="${C.wire}" stroke-width="1.6"/>
            <rect x="32" y="30" width="30" height="34" rx="4" fill="${C.body}"/>
            <path d="M38 38 q7 3.5 0 7 q7 3.5 0 7 q7 3.5 0 7" stroke="${C.warm}" stroke-width="2.2" fill="none"/>
            <line x1="38" y1="38" x2="38" y2="59" stroke="${C.metal}" stroke-width="1.4" opacity=".5"/>
            <line x1="50" y1="52" x2="58" y2="40" stroke="${C.metal}" stroke-width="3" stroke-linecap="round"/>
            <circle cx="50" cy="52" r="2.4" fill="${C.metal}"/>
            <circle cx="58" cy="39" r="2.4" fill="${C.metal}"/>
            <path d="M62 40 h8" stroke="${C.hot}" stroke-width="4.5" stroke-linecap="round"/>
            <rect x="70" y="10" width="46" height="26" rx="5" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <path d="M76 30 h34 M79 34 h30" stroke="${C.cool}" stroke-width="2" opacity=".7"/>
            <circle cx="110" cy="16" r="2.6" fill="${C.green}"/>
            <path d="M80 44 q7 8 14 0 M96 44 q7 8 14 0" stroke="${C.cool}" stroke-width="2.6" fill="none" opacity=".7"/>
            <path d="M80 56 q7 8 14 0 M96 56 q7 8 14 0" stroke="${C.cool}" stroke-width="2.4" fill="none" opacity=".45"/>`) },

        { ar: 'مصباح البيت', en: 'House Lamp',
          line: 'تُرسل اللوحة إشارة ضعيفة، فيوصل المرحّل تيّار المصباح.',
          svg: V(`<rect x="4" y="34" width="30" height="26" rx="4" fill="${C.cool}" opacity=".85"/>
            <rect x="4" y="34" width="30" height="4.5" fill="${C.body}"/>
            <rect x="11" y="42" width="16" height="11" rx="2" fill="${C.body}"/>
            <path d="M34 46 h8" stroke="${C.wire}" stroke-width="1.6"/>
            <rect x="42" y="34" width="26" height="30" rx="3" fill="${C.wire}"/>
            <circle cx="50" cy="49" r="6" fill="none" stroke="${C.warm}" stroke-width="2.4"/>
            <circle cx="50" cy="49" r="2" fill="${C.warm}"/>
            <line x1="58" y1="58" x2="64" y2="43" stroke="${C.metal}" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="58" cy="58" r="2.2" fill="${C.metal}"/>
            <path d="M68 42 h6 v-14" stroke="${C.hot}" stroke-width="4" fill="none" stroke-linejoin="round"/>
            <line x1="94" y1="4" x2="94" y2="18" stroke="${C.wire}" stroke-width="2.4"/>
            <path d="M76 34 l18-16 18 16 z" fill="${C.metal}"/>
            <circle cx="94" cy="40" r="7.5" fill="${C.glow}"/>
            <path d="M94 52 v6 M82 46 l-5 5 M106 46 l5 5" stroke="${C.glow}" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>`) },

        { ar: 'مضخّة الخزّان', en: 'Tank Pump',
          line: 'يوصل كهرباء المضخّة حين ينخفض العوّام في الخزّان.',
          svg: V(`<rect x="6" y="6" width="46" height="46" rx="4" fill="none" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="8" y="34" width="42" height="16" fill="${C.cool}" opacity=".45"/>
            <circle cx="28" cy="33" r="5.5" fill="${C.warm}"/>
            <line x1="28" y1="28" x2="28" y2="12" stroke="${C.metal}" stroke-width="2"/>
            <circle cx="28" cy="10" r="2.4" fill="${C.metal}"/>
            <path d="M30 10 h12 v22" stroke="${C.wire}" stroke-width="1.6" fill="none"/>
            <rect x="34" y="56" width="26" height="22" rx="3" fill="${C.body}"/>
            <path d="M39 61 q6 3 0 6 q6 3 0 6" stroke="${C.warm}" stroke-width="2" fill="none"/>
            <line x1="50" y1="72" x2="56" y2="61" stroke="${C.metal}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M42 32 v24" stroke="${C.wire}" stroke-width="1.6"/>
            <path d="M60 64 h8" stroke="${C.hot}" stroke-width="4.5" stroke-linecap="round"/>
            <rect x="68" y="52" width="32" height="24" rx="5" fill="${C.body}"/>
            <circle cx="84" cy="64" r="8" fill="${C.metal}"/>
            <circle cx="84" cy="64" r="3" fill="${C.body}"/>
            <path d="M100 60 h8 v-40" stroke="${C.cool}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="108" cy="14" r="3.4" fill="${C.cool}"/>
            <circle cx="112" cy="24" r="2.6" fill="${C.cool}" opacity=".65"/>`) },

        { ar: 'بوّابة المرآب', en: 'Garage Door',
          line: 'يوصل تيّار محرّك البوّابة عند إشارة الريموت.',
          svg: V(`<path d="M22 28 L64 6 L106 28" stroke="${C.body}" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
            <rect x="28" y="28" width="72" height="48" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="34" y="30" width="60" height="8" fill="${C.body}" opacity=".55"/>
            <rect x="34" y="46" width="60" height="30" fill="${C.metal}"/>
            <line x1="34" y1="56" x2="94" y2="56" stroke="${C.light}" stroke-width="2"/>
            <line x1="34" y1="66" x2="94" y2="66" stroke="${C.light}" stroke-width="2"/>
            <path d="M64 44 v-6 m0 0 l-5 5 m5-5 l5 5" stroke="${C.green}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <rect x="86" y="16" width="18" height="10" rx="2" fill="${C.body}"/>
            <circle cx="95" cy="21" r="2.6" fill="${C.metal}"/>
            <rect x="4" y="30" width="20" height="26" rx="3" fill="${C.wire}"/>
            <path d="M9 36 q6 3 0 6 q6 3 0 6" stroke="${C.warm}" stroke-width="2" fill="none"/>
            <line x1="17" y1="50" x2="21" y2="37" stroke="${C.metal}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M24 34 h10 v-10 h52 v-4" stroke="${C.hot}" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
            <rect x="6" y="60" width="12" height="18" rx="3" fill="${C.body}"/>
            <circle cx="12" cy="65" r="2.2" fill="${C.hot}"/>
            <path d="M20 62 q5 5 0 10 M26 58 q9 9 0 18" stroke="${C.warm}" stroke-width="2.2" fill="none" opacity=".8"/>`) },

        { ar: 'مدفأة الحائط', en: 'Wall Heater',
          line: 'يفصل بين زرّ التشغيل الصغير وتيّار السخّان الكبير.',
          svg: V(`<rect x="6" y="34" width="16" height="24" rx="3" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="9" y="37" width="10" height="8" rx="2" fill="${C.green}"/>
            <rect x="9" y="47" width="10" height="8" rx="2" fill="${C.metal}"/>
            <path d="M22 46 h8" stroke="${C.wire}" stroke-width="1.6"/>
            <rect x="30" y="32" width="26" height="30" rx="4" fill="${C.body}"/>
            <rect x="34" y="36" width="6" height="22" rx="2" fill="${C.warm}" opacity=".8"/>
            <path d="M34 40 h6 M34 46 h6 M34 52 h6" stroke="${C.body}" stroke-width="1.6"/>
            <line x1="46" y1="56" x2="52" y2="40" stroke="${C.metal}" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="46" cy="56" r="2.2" fill="${C.metal}"/>
            <circle cx="52" cy="38" r="2.2" fill="${C.metal}"/>
            <path d="M56 40 h6" stroke="${C.hot}" stroke-width="5" stroke-linecap="round"/>
            <path d="M62 18 h50 v46 h-50 z" fill="${C.body}" opacity=".18"/>
            <rect x="62" y="18" width="50" height="46" rx="4" fill="none" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="68" y="28" width="38" height="6" rx="3" fill="${C.hot}"/>
            <rect x="68" y="44" width="38" height="6" rx="3" fill="${C.hot}"/>
            <path d="M74 24 q4-6 0-10 M88 24 q4-6 0-10 M102 24 q4-6 0-10"
                  stroke="${C.warm}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M74 40 q4-5 0-8 M88 40 q4-5 0-8 M102 40 q4-5 0-8"
                  stroke="${C.warm}" stroke-width="2" fill="none" opacity=".7"/>`) },

        { ar: 'إنارة الحديقة', en: 'Garden Light',
          line: 'يوصل إنارة الحديقة حين يقلّ الضوء عند الغروب.',
          svg: V(`<path d="M4 40 a16 16 0 0 1 32 0 z" fill="${C.warm}" opacity=".55"/>
            <line x1="2" y1="40" x2="38" y2="40" stroke="${C.warm}" stroke-width="2"/>
            <rect x="14" y="44" width="12" height="10" rx="2" fill="${C.body}"/>
            <path d="M16 47 q4 4 8 0" stroke="${C.glow}" stroke-width="2" fill="none"/>
            <path d="M26 50 h8" stroke="${C.wire}" stroke-width="1.6"/>
            <rect x="34" y="42" width="24" height="28" rx="3" fill="${C.wire}"/>
            <path d="M39 47 q6 3 0 6 q6 3 0 6" stroke="${C.warm}" stroke-width="2" fill="none"/>
            <line x1="49" y1="64" x2="54" y2="50" stroke="${C.metal}" stroke-width="2.6" stroke-linecap="round"/>
            <circle cx="49" cy="64" r="2.2" fill="${C.metal}"/>
            <path d="M58 48 h8 v-8" stroke="${C.hot}" stroke-width="4" fill="none" stroke-linejoin="round"/>
            <rect x="88" y="30" width="6" height="42" fill="${C.metal}"/>
            <path d="M78 30 l13-14 13 14 z" fill="${C.body}"/>
            <circle cx="91" cy="28" r="5" fill="${C.glow}"/>
            <path d="M78 34 L104 34 L112 68 H70 z" fill="${C.glow}" opacity=".22"/>
            <path d="M66 40 h8 v-10 h14" stroke="${C.hot}" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
            <path d="M62 72 q6-10 12 0z" fill="${C.green}"/>
            <path d="M104 72 q7-12 14 0z" fill="${C.green}" opacity=".8"/>`) }
      ]
    },

    /* ══════════════ لوحة التجارب ══════════════ */
    breadboard: {
      ar: 'لوحة التجارب', en: 'Breadboard',
      items: [
        { ar: 'أوّل دائرة', en: 'First Circuit',
          line: 'ثقوبها الموصولة تجمع البطارية والمقاومة والليد بلا لحام.',
          svg: V(`<rect x="6" y="6" width="108" height="50" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <line x1="12" y1="11" x2="108" y2="11" stroke="${C.hot}" stroke-width="1.4"/>
            <line x1="12" y1="15" x2="108" y2="15" stroke="${C.cool}" stroke-width="1.4"/>
            <line x1="12" y1="52" x2="108" y2="52" stroke="${C.cool}" stroke-width="1.4"/>
            <rect x="6" y="35" width="108" height="3" fill="${C.metal}" opacity=".45"/>
            ${(() => { let d = ''; const ys = [22, 27, 32, 41, 46];
              for (const y of ys) for (let c = 0; c < 16; c++)
                d += `<circle cx="${14 + c * 6.2}" cy="${y}" r="1.3" fill="${C.wire}" opacity=".5"/>`;
              return d; })()}
            <rect x="30" y="24" width="22" height="7" rx="3.5" fill="${C.skin}"/>
            <rect x="35" y="24" width="2.6" height="7" fill="${C.hot}"/>
            <rect x="40" y="24" width="2.6" height="7" fill="${C.warm}"/>
            <rect x="45" y="24" width="2.6" height="7" fill="${C.light}"/>
            <path d="M30 27.5 h-8 M52 27.5 h8" stroke="${C.metal}" stroke-width="1.6"/>
            <circle cx="76" cy="24" r="6" fill="${C.hot}"/>
            <path d="M73.5 30 v11 M78.5 30 v11" stroke="${C.metal}" stroke-width="1.6"/>
            <path d="M76 14 v-4 M86 18 l4-4 M66 18 l-4-4" stroke="${C.glow}" stroke-width="2" stroke-linecap="round"/>
            <rect x="34" y="62" width="44" height="14" rx="3" fill="${C.green}"/>
            <rect x="78" y="66" width="5" height="6" rx="1" fill="${C.metal}"/>
            <path d="M42 62 v-6" stroke="${C.hot}" stroke-width="2.4"/>
            <path d="M70 62 v-6" stroke="${C.cool}" stroke-width="2.4"/>`) },

        { ar: 'تجربة الزرّ', en: 'Push Button Test',
          line: 'تثبّت الزرّ والليد معًا، فتُغلق الدائرة عند الضغط.',
          svg: V(`<rect x="4" y="16" width="112" height="52" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="4" y="40" width="112" height="4" fill="${C.metal}" opacity=".45"/>
            ${(() => { let d = ''; const ys = [24, 32, 50, 58];
              for (const y of ys) for (let c = 0; c < 11; c++)
                d += `<circle cx="${12 + c * 9.6}" cy="${y}" r="2" fill="${C.wire}" opacity=".5"/>`;
              return d; })()}
            <rect x="34" y="32" width="22" height="20" rx="3" fill="${C.body}"/>
            <circle cx="45" cy="42" r="6.5" fill="${C.hot}"/>
            <path d="M36 52 v6 M54 52 v6 M36 32 v-8 M54 32 v-8" stroke="${C.metal}" stroke-width="1.8"/>
            <path d="M45 12 v9 m0 0 l-4-5 m4 5 l4-5" stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <path d="M60 58 q14 8 26 0" stroke="${C.green}" stroke-width="2.4" fill="none"/>
            <path d="M60 24 q14-9 26 0" stroke="${C.warm}" stroke-width="2.4" fill="none"/>
            <circle cx="90" cy="42" r="7" fill="${C.glow}"/>
            <path d="M87.5 49 v9 M92.5 49 v-9" stroke="${C.metal}" stroke-width="1.8"/>
            <path d="M101 36 l6-4 M101 42 h7 M101 48 l6 4" stroke="${C.glow}" stroke-width="2.2" stroke-linecap="round" opacity=".8"/>`) },

        { ar: 'الحزّ الأوسط', en: 'Center Channel',
          line: 'الحزّ الأوسط يفصل صفَّي أرجل الرقاقة فلا تتلامس.',
          svg: V(`<rect x="6" y="8" width="108" height="64" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="6" y="34" width="108" height="12" fill="${C.metal}" opacity=".35"/>
            ${(() => { let d = ''; const ys = [16, 24, 56, 64];
              for (const y of ys) for (let c = 0; c < 13; c++)
                d += `<circle cx="${13 + c * 7.9}" cy="${y}" r="1.9" fill="${C.wire}" opacity=".5"/>`;
              return d; })()}
            <rect x="29" y="30" width="62" height="20" rx="2" fill="${C.body}"/>
            <circle cx="29" cy="40" r="4" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 7; i++) {
                const x = 36 + i * 8;
                d += `<rect x="${x}" y="24" width="3" height="6" fill="${C.metal}"/>`;
                d += `<rect x="${x}" y="50" width="3" height="6" fill="${C.metal}"/>`;
              } return d; })()}
            <text x="60" y="43" font-size="9" text-anchor="middle" fill="${C.light}">7408</text>
            <path d="M100 40 h10 m-5-5 l5 5 -5 5" stroke="${C.hot}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`) },

        { ar: 'دائرة الوميض', en: 'Blinker Circuit',
          line: 'تحمل المؤقّت والمكثّف، فيومض الليد بانتظام.',
          svg: V(`<rect x="4" y="10" width="112" height="56" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="4" y="36" width="112" height="4" fill="${C.metal}" opacity=".45"/>
            ${(() => { let d = ''; const ys = [18, 26, 48, 56];
              for (const y of ys) for (let c = 0; c < 14; c++)
                d += `<circle cx="${11 + c * 7.6}" cy="${y}" r="1.6" fill="${C.wire}" opacity=".5"/>`;
              return d; })()}
            <rect x="20" y="28" width="34" height="20" rx="2" fill="${C.body}"/>
            <text x="37" y="42" font-size="9" text-anchor="middle" fill="${C.light}">555</text>
            ${(() => { let d = ''; for (let i = 0; i < 4; i++) {
                const x = 24 + i * 8;
                d += `<rect x="${x}" y="24" width="2.6" height="4" fill="${C.metal}"/>`;
                d += `<rect x="${x}" y="48" width="2.6" height="4" fill="${C.metal}"/>`;
              } return d; })()}
            <rect x="62" y="22" width="12" height="22" rx="4" fill="${C.cool}"/>
            <rect x="62" y="22" width="12" height="5" rx="2.5" fill="${C.metal}"/>
            <path d="M65 44 v10 M71 44 v10" stroke="${C.metal}" stroke-width="1.6"/>
            <circle cx="96" cy="34" r="6.5" fill="${C.glow}"/>
            <path d="M93.5 40 v14 M98.5 40 v14" stroke="${C.metal}" stroke-width="1.6"/>
            <circle cx="96" cy="34" r="11" fill="${C.glow}" opacity=".3"/>
            <circle cx="96" cy="34" r="15" fill="${C.glow}" opacity=".14"/>
            <path d="M6 72 h10 v-6 h10 v6 h10 v-6 h10 v6 h10" stroke="${C.green}" stroke-width="2" fill="none"/>`) },

        { ar: 'حسّاس الضوء', en: 'Light Sensor Test',
          line: 'تربط حسّاس الضوء بالليد لتجربة الإضاءة التلقائية.',
          svg: V(`<rect x="6" y="18" width="108" height="52" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="6" y="42" width="108" height="4" fill="${C.metal}" opacity=".45"/>
            ${(() => { let d = ''; const ys = [26, 34, 52, 60];
              for (const y of ys) for (let c = 0; c < 12; c++)
                d += `<circle cx="${13 + c * 8.7}" cy="${y}" r="1.8" fill="${C.wire}" opacity=".5"/>`;
              return d; })()}
            <circle cx="34" cy="38" r="10" fill="${C.warm}" opacity=".55"/>
            <circle cx="34" cy="38" r="10" fill="none" stroke="${C.body}" stroke-width="1.8"/>
            <path d="M27 42 q4-8 7 0 q3 8 7 0" stroke="${C.body}" stroke-width="1.8" fill="none"/>
            <path d="M30 48 v10 M38 48 v10" stroke="${C.metal}" stroke-width="1.8"/>
            <path d="M20 14 l8 10 M34 10 v12 M48 14 l-8 10" stroke="${C.glow}" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M46 58 q18 8 32 0" stroke="${C.green}" stroke-width="2.2" fill="none"/>
            <rect x="56" y="30" width="18" height="7" rx="3.5" fill="${C.skin}"/>
            <rect x="60" y="30" width="2.4" height="7" fill="${C.hot}"/>
            <rect x="65" y="30" width="2.4" height="7" fill="${C.cool}"/>
            <path d="M56 33.5 h-6 M74 33.5 h6" stroke="${C.metal}" stroke-width="1.6"/>
            <circle cx="94" cy="34" r="6.5" fill="${C.green}"/>
            <path d="M91.5 40 v12 M96.5 40 v12" stroke="${C.metal}" stroke-width="1.6"/>
            <path d="M104 28 l5-4 M104 34 h6" stroke="${C.green}" stroke-width="2.2" stroke-linecap="round" opacity=".8"/>`) },

        { ar: 'تبديل القطع', en: 'Swapping Parts',
          line: 'تُبدّل الليدات والمقاومات بسرعة دون فكّ الدائرة كلّها.',
          svg: V(`<rect x="6" y="20" width="108" height="50" rx="4" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="6" y="42" width="108" height="4" fill="${C.metal}" opacity=".45"/>
            ${(() => { let d = ''; const ys = [28, 36, 52, 60];
              for (const y of ys) for (let c = 0; c < 14; c++)
                d += `<circle cx="${12 + c * 7.4}" cy="${y}" r="1.5" fill="${C.wire}" opacity=".5"/>`;
              return d; })()}
            ${(() => { const col = [C.hot, C.warm, C.green]; let d = '';
              for (let i = 0; i < 3; i++) {
                const x = 22 + i * 22;
                d += `<circle cx="${x}" cy="32" r="5.5" fill="${col[i]}"/>`;
                d += `<path d="M${x - 2.4} 37 v15 M${x + 2.4} 37 v15" stroke="${C.metal}" stroke-width="1.5"/>`;
                d += `<rect x="${x - 8}" y="56" width="16" height="6" rx="3" fill="${C.skin}"/>`;
              } return d; })()}
            <circle cx="92" cy="14" r="5.5" fill="${C.cool}"/>
            <path d="M89.6 19 v8 M94.4 19 v8" stroke="${C.metal}" stroke-width="1.5"/>
            <path d="M92 34 v-6 m0 0 l-4 5 m4-5 l4 5" stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <circle cx="92" cy="40" r="2.4" fill="${C.wire}" opacity=".5"/>
            <rect x="84" y="56" width="16" height="6" rx="3" fill="${C.skin}" opacity=".5"/>`) }
      ]
    },

    /* ══════════════ السمّاعة ══════════════ */
    speaker: {
      ar: 'السمّاعة', en: 'Speaker',
      items: [
        { ar: 'سمّاعة الهاتف', en: 'Phone Earpiece',
          line: 'تحوّل الإشارة الكهربائية إلى صوت تسمعه في المكالمة.',
          svg: V(`<rect x="30" y="4" width="44" height="72" rx="8" fill="${C.body}"/>
            <rect x="35" y="16" width="34" height="50" rx="3" fill="${C.glass}"/>
            <rect x="44" y="9" width="16" height="3.5" rx="1.75" fill="${C.metal}"/>
            ${(() => { let d = ''; for (let c = 0; c < 6; c++)
              d += `<circle cx="${45 + c * 2.8}" cy="10.75" r="0.9" fill="${C.body}"/>`;
              return d; })()}
            <circle cx="52" cy="70" r="3.4" fill="${C.metal}"/>
            <path d="M78 24 l12-8 v48 l-12-8 z" fill="${C.metal}"/>
            <rect x="74" y="30" width="6" height="20" rx="2" fill="${C.body}"/>
            <circle cx="90" cy="40" r="4" fill="${C.hot}"/>
            <path d="M96 30 q7 10 0 20" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M104 24 q11 16 0 32" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".6"/>
            <path d="M112 18 q14 22 0 44" stroke="${C.warm}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".3"/>`) },

        { ar: 'مذياع السيارة', en: 'Car Radio',
          line: 'تهتزّ فتُخرج الأغنية التي التقطها المذياع.',
          svg: V(`<rect x="6" y="14" width="58" height="34" rx="5" fill="${C.body}"/>
            <rect x="12" y="20" width="34" height="12" rx="2" fill="${C.cool}" opacity=".55"/>
            <path d="M16 26 h4 v-4 h4 v8 h4 v-6 h4 v4 h4" stroke="${C.glow}" stroke-width="1.6" fill="none"/>
            <circle cx="54" cy="26" r="6" fill="${C.metal}"/>
            <line x1="54" y1="26" x2="58" y2="22" stroke="${C.body}" stroke-width="2"/>
            ${(() => { let d = ''; for (let c = 0; c < 5; c++)
              d += `<rect x="${12 + c * 9}" y="38" width="7" height="5" rx="1.5" fill="${C.metal}"/>`;
              return d; })()}
            <path d="M64 30 h10" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="92" cy="42" r="24" fill="${C.body}"/>
            <circle cx="92" cy="42" r="18" fill="${C.wire}"/>
            <circle cx="92" cy="42" r="11" fill="${C.metal}"/>
            <circle cx="92" cy="42" r="5" fill="${C.body}"/>
            ${(() => { let d = ''; for (let i = 0; i < 8; i++) {
                const a = (i * Math.PI) / 4;
                d += `<circle cx="${(92 + 21 * Math.cos(a)).toFixed(1)}" cy="${(42 + 21 * Math.sin(a)).toFixed(1)}" r="1.6" fill="${C.metal}"/>`;
              } return d; })()}
            <path d="M72 12 q-8 6 0 12" stroke="${C.glow}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <path d="M80 6 q-12 10 0 20" stroke="${C.glow}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".6"/>`) },

        { ar: 'جرس المدرسة', en: 'School Bell',
          line: 'تُصدر رنينًا قويًّا يسمعه كل الصفّ.',
          svg: V(`<rect x="8" y="10" width="18" height="60" rx="3" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <circle cx="17" cy="24" r="5.5" fill="${C.hot}"/>
            <rect x="12" y="38" width="10" height="22" rx="2" fill="${C.metal}" opacity=".6"/>
            <path d="M26 24 h8 v20 h8" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <path d="M44 30 a22 22 0 0 1 44 0 v14 H44 z" fill="${C.warm}"/>
            <rect x="40" y="44" width="52" height="6" rx="3" fill="${C.body}"/>
            <circle cx="66" cy="56" r="6" fill="${C.metal}"/>
            <line x1="66" y1="50" x2="66" y2="52" stroke="${C.body}" stroke-width="2"/>
            <rect x="60" y="6" width="12" height="6" rx="2" fill="${C.body}"/>
            <path d="M96 26 q9 14 0 28" stroke="${C.hot}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M105 20 q13 20 0 40" stroke="${C.hot}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".6"/>
            <path d="M36 26 q-9 14 0 28" stroke="${C.hot}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".8"/>
            <path d="M27 68 q13-8 0-16" stroke="${C.hot}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".35"/>`) },

        { ar: 'اللعبة الناطقة', en: 'Talking Toy',
          line: 'تنطق العبارة المسجّلة حين تضغط زرّ اللعبة.',
          svg: V(`<rect x="14" y="18" width="62" height="52" rx="8" fill="${C.cool}"/>
            <rect x="22" y="26" width="20" height="16" rx="3" fill="${C.light}"/>
            <path d="M26 34 h4 M34 34 h4" stroke="${C.body}" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="58" cy="40" r="13" fill="${C.body}"/>
            ${(() => { let d = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++)
              d += `<circle cx="${51 + c * 7}" cy="${33 + r * 7}" r="1.9" fill="${C.metal}"/>`;
              return d; })()}
            <circle cx="32" cy="56" r="8" fill="${C.hot}"/>
            <circle cx="32" cy="56" r="3.4" fill="${C.light}"/>
            <circle cx="32" cy="56" r="11" fill="none" stroke="${C.light}" stroke-width="1.6" opacity=".7"/>
            <path d="M6 56 h9 m-4-4 l4 4 -4 4" stroke="${C.green}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M82 30 q8 10 0 20" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M90 24 q13 16 0 32" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".6"/>
            <circle cx="104" cy="20" r="4" fill="${C.warm}"/>
            <rect x="107" y="8" width="2.6" height="13" fill="${C.warm}"/>
            <circle cx="110" cy="34" r="3.4" fill="${C.warm}" opacity=".7"/>
            <rect x="112.6" y="24" width="2.4" height="11" fill="${C.warm}" opacity=".7"/>`) },

        { ar: 'سمّاعة الحاسوب', en: 'Computer Speaker',
          line: 'صندوقان صغيران يُخرجان صوت الحاسوب في الغرفة.',
          svg: V(`<rect x="10" y="18" width="34" height="52" rx="4" fill="${C.body}"/>
            <circle cx="27" cy="34" r="9" fill="${C.metal}"/>
            <circle cx="27" cy="34" r="4" fill="${C.light}"/>
            <circle cx="27" cy="55" r="6" fill="${C.metal}" opacity=".7"/>
            <rect x="62" y="18" width="34" height="52" rx="4" fill="${C.body}"/>
            <circle cx="79" cy="34" r="9" fill="${C.metal}"/>
            <circle cx="79" cy="34" r="4" fill="${C.light}"/>
            <circle cx="79" cy="55" r="6" fill="${C.metal}" opacity=".7"/>
            <circle cx="79" cy="68" r="2.6" fill="${C.green}"/>
            <path d="M44 40 h18" stroke="${C.wire}" stroke-width="2.6"/>
            <path d="M100 28 q7 12 0 24" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M108 22 q11 18 0 36" stroke="${C.glow}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/>
            <path d="M6 28 q-7 12 0 24" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`) },

        { ar: 'مكبّر الملعب', en: 'Stadium Horn',
          line: 'بوق كبير يوصل الصوت إلى آخر الملعب.',
          svg: V(`<rect x="14" y="14" width="10" height="60" rx="2" fill="${C.metal}"/>
            <path d="M8 74 h22" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
            <rect x="24" y="26" width="14" height="16" rx="3" fill="${C.body}"/>
            <path d="M38 20 l30-10 v42 l-30-10 z" fill="${C.wire}"/>
            <path d="M68 10 l6-3 v54 l-6-3 z" fill="${C.metal}"/>
            <circle cx="31" cy="34" r="3.4" fill="${C.hot}"/>
            <path d="M26 42 v20" stroke="${C.wire}" stroke-width="2"/>
            <path d="M82 18 q10 16 0 32" stroke="${C.glow}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M92 10 q15 24 0 48" stroke="${C.glow}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".65"/>
            <path d="M102 4 q19 30 0 60" stroke="${C.glow}" stroke-width="2.8" fill="none" stroke-linecap="round" opacity=".35"/>
            <path d="M112 0 q22 34 0 68" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".18"/>`) }
      ]
    },

    /* ══════════════ محرّك السيرفو ══════════════ */
    servo: {
      ar: 'محرّك السيرفو', en: 'Servo Motor',
      items: [
        { ar: 'ذراع الروبوت', en: 'Robot Arm',
          line: 'يوقف الذراع عند الزاوية المطلوبة بالضبط.',
          svg: V(`<rect x="12" y="66" width="46" height="10" rx="3" fill="${C.body}"/>
            <rect x="24" y="44" width="22" height="22" rx="3" fill="${C.cool}"/>
            <rect x="20" y="48" width="4" height="8" fill="${C.cool}" opacity=".7"/>
            <rect x="46" y="48" width="4" height="8" fill="${C.cool}" opacity=".7"/>
            <circle cx="35" cy="55" r="6" fill="${C.light}"/>
            <circle cx="35" cy="55" r="2" fill="${C.body}"/>
            <rect x="31" y="24" width="8" height="31" fill="${C.metal}"/>
            <rect x="25" y="8" width="20" height="18" rx="3" fill="${C.cool}"/>
            <circle cx="35" cy="17" r="5" fill="${C.light}"/>
            <rect x="35" y="13" width="42" height="8" rx="3" fill="${C.metal}"/>
            <path d="M77 13 l10-4 v8 h6 v6 h-6 v8 z" fill="${C.wire}"/>
            <path d="M50 55 a15 15 0 0 0-4-11" stroke="${C.warm}" stroke-width="2.2" fill="none" stroke-dasharray="3 3"/>
            <path d="M46 44 l-1 5 4-2 z" fill="${C.warm}"/>
            <path d="M48 17 a13 13 0 0 0-6-10" stroke="${C.warm}" stroke-width="2" fill="none" stroke-dasharray="3 3" opacity=".8"/>`) },

        { ar: 'حاجز الموقف', en: 'Parking Barrier',
          line: 'يرفع ذراع الحاجز ربع دورة، ثم يُنزله.',
          svg: V(`<rect x="14" y="30" width="20" height="46" rx="3" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="18" y="34" width="12" height="14" rx="2" fill="${C.cool}"/>
            <circle cx="24" cy="41" r="4" fill="${C.light}"/>
            <circle cx="24" cy="41" r="1.6" fill="${C.body}"/>
            <rect x="20" y="56" width="8" height="6" rx="2" fill="${C.green}"/>
            <g transform="rotate(-52 24 41)">
              <rect x="24" y="37.5" width="62" height="7" rx="3" fill="${C.light}" stroke="${C.metal}" stroke-width="1.4"/>
              <rect x="36" y="37.5" width="10" height="7" fill="${C.hot}"/>
              <rect x="56" y="37.5" width="10" height="7" fill="${C.hot}"/>
              <rect x="76" y="37.5" width="10" height="7" fill="${C.hot}"/>
            </g>
            <path d="M86 41 a62 62 0 0 0-18-43" stroke="${C.warm}" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
            <path d="M86 41 h-6 l4 5 z" fill="${C.warm}"/>
            <path d="M62 70 h44 v-10 l-8-8 H74 l-12 8 z" fill="${C.cool}" opacity=".55"/>
            <circle cx="74" cy="72" r="5" fill="${C.body}"/>
            <circle cx="98" cy="72" r="5" fill="${C.body}"/>`) },

        { ar: 'مِقود سيارة التحكّم', en: 'RC Car Steering',
          line: 'يلفّ العجلتين الأماميتين يمينًا ويسارًا بمقدار محسوب.',
          svg: V(`<rect x="30" y="16" width="66" height="48" rx="7" fill="${C.cool}" opacity=".35" stroke="${C.wire}" stroke-width="1.6"/>
            <rect x="22" y="10" width="20" height="12" rx="4" fill="${C.body}" transform="rotate(-24 32 16)"/>
            <rect x="22" y="58" width="20" height="12" rx="4" fill="${C.body}" transform="rotate(-24 32 64)"/>
            <rect x="84" y="10" width="20" height="12" rx="4" fill="${C.body}"/>
            <rect x="84" y="58" width="20" height="12" rx="4" fill="${C.body}"/>
            <rect x="46" y="30" width="24" height="20" rx="3" fill="${C.cool}"/>
            <rect x="42" y="34" width="4" height="8" fill="${C.cool}" opacity=".7"/>
            <rect x="70" y="34" width="4" height="8" fill="${C.cool}" opacity=".7"/>
            <circle cx="58" cy="40" r="6" fill="${C.light}"/>
            <circle cx="58" cy="40" r="2" fill="${C.body}"/>
            <line x1="58" y1="40" x2="48" y2="34" stroke="${C.hot}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M48 34 L34 20 M48 34 L34 62" stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M34 20 L34 62" stroke="${C.metal}" stroke-width="2" opacity=".6"/>
            <path d="M18 40 q-8-10 0-20" stroke="${C.warm}" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
            <path d="M18 20 l-4 4 5 1z" fill="${C.warm}"/>`) },

        { ar: 'دفّة الطائرة', en: 'Model Plane Rudder',
          line: 'يميل سطح الذيل، فتنعطف الطائرة في الهواء.',
          svg: V(`<path d="M14 44 q22-14 56-12 h30 q8 0 8 6 v6 q0 6-8 6 H30 q-14 0-16-6 z" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <path d="M46 44 l-22 22 h16 l14-20 z" fill="${C.cool}" opacity=".7"/>
            <path d="M52 32 l-6-22 h10 l10 22 z" fill="${C.cool}" opacity=".5"/>
            <path d="M92 32 l10-18 h6 l-4 18 z" fill="${C.wire}"/>
            <circle cx="30" cy="40" r="4" fill="${C.glass}"/>
            <rect x="10" y="34" width="5" height="20" rx="2" fill="${C.metal}"/>
            <rect x="62" y="34" width="18" height="14" rx="3" fill="${C.cool}"/>
            <circle cx="71" cy="41" r="4.4" fill="${C.light}"/>
            <path d="M71 41 h30" stroke="${C.metal}" stroke-width="2"/>
            <rect x="101" y="36" width="15" height="6" rx="2" fill="${C.warm}" transform="rotate(24 101 39)"/>
            <path d="M101 50 a12 12 0 0 0 10-8" stroke="${C.warm}" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`) },

        { ar: 'قاعدة الكاميرا', en: 'Camera Pan Mount',
          line: 'يلفّ الكاميرا ببطء لتمسح الغرفة كلّها.',
          svg: V(`<path d="M44 76 h32 l-6-14 H50 z" fill="${C.body}"/>
            <rect x="46" y="42" width="28" height="22" rx="3" fill="${C.cool}"/>
            <rect x="42" y="46" width="4" height="9" fill="${C.cool}" opacity=".7"/>
            <rect x="74" y="46" width="4" height="9" fill="${C.cool}" opacity=".7"/>
            <circle cx="60" cy="40" r="7" fill="${C.light}"/>
            <circle cx="60" cy="40" r="2.4" fill="${C.body}"/>
            <rect x="38" y="16" width="44" height="20" rx="4" fill="${C.body}" transform="rotate(-14 60 26)"/>
            <circle cx="76" cy="21" r="7" fill="${C.wire}"/>
            <circle cx="76" cy="21" r="4" fill="${C.glass}"/>
            <rect x="40" y="10" width="10" height="5" rx="2" fill="${C.metal}" transform="rotate(-14 45 12)"/>
            <path d="M22 40 a38 38 0 0 1 76 0" stroke="${C.warm}" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
            <path d="M22 40 l5-4 1 6z" fill="${C.warm}"/>
            <path d="M98 40 l-6-4 -1 6z" fill="${C.warm}"/>`) },

        { ar: 'مِلقط الروبوت', en: 'Robot Gripper',
          line: 'يُقرّب فكَّي المِلقط بالتدريج حتى يمسكا الكرة.',
          svg: V(`<rect x="44" y="50" width="30" height="24" rx="3" fill="${C.cool}"/>
            <rect x="40" y="55" width="4" height="10" fill="${C.cool}" opacity=".7"/>
            <rect x="74" y="55" width="4" height="10" fill="${C.cool}" opacity=".7"/>
            <circle cx="59" cy="60" r="7" fill="${C.light}"/>
            <circle cx="59" cy="60" r="2.4" fill="${C.body}"/>
            <line x1="52" y1="56" x2="66" y2="64" stroke="${C.metal}" stroke-width="2.6"/>
            <path d="M52 56 L34 44" stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M66 64 L84 44" stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M34 44 q-6-24 10-30 v8 q-6 6 -2 22 z" fill="${C.wire}"/>
            <path d="M84 44 q6-24-10-30 v8 q6 6 2 22 z" fill="${C.wire}"/>
            <circle cx="59" cy="20" r="13" fill="${C.hot}"/>
            <circle cx="54" cy="15" r="4" fill="${C.light}" opacity=".45"/>
            <path d="M28 34 h8 m-4-4 l4 4 -4 4" stroke="${C.warm}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M92 34 h-8 m4-4 l-4 4 4 4" stroke="${C.warm}" stroke-width="2" fill="none" stroke-linecap="round"/>`) }
      ]
    },

    /* ══════════════ الدائرة المتكاملة ══════════════ */
    ic: {
      ar: 'الدائرة المتكاملة', en: 'Integrated Circuit',
      items: [
        { ar: 'بوّابة AND', en: 'AND Gate 7408',
          line: 'الرقاقة 7408 تُشعل الليد إذا ضُغط المفتاحان معًا.',
          svg: V(`<rect x="4" y="14" width="16" height="7" rx="2" fill="${C.metal}"/>
            <line x1="6" y1="17.5" x2="18" y2="17.5" stroke="${C.hot}" stroke-width="2.4"/>
            <rect x="4" y="58" width="16" height="7" rx="2" fill="${C.metal}"/>
            <line x1="6" y1="61.5" x2="18" y2="61.5" stroke="${C.hot}" stroke-width="2.4"/>
            <path d="M20 17.5 h14 v12" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <path d="M20 61.5 h14 v-12" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <rect x="34" y="26" width="48" height="28" rx="3" fill="${C.body}"/>
            <circle cx="34" cy="40" r="3.5" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 5; i++) {
                const x = 40 + i * 9;
                d += `<rect x="${x}" y="22" width="3" height="4" fill="${C.metal}"/>`;
                d += `<rect x="${x}" y="54" width="3" height="4" fill="${C.metal}"/>`;
              } return d; })()}
            <path d="M48 32 h10 a8 8 0 0 1 0 16 h-10 z" fill="none" stroke="${C.glow}" stroke-width="2"/>
            <text x="60" y="66" font-size="9" text-anchor="middle" fill="${C.wire}">7408</text>
            <path d="M82 40 h12" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="103" cy="40" r="8" fill="${C.glow}"/>
            <path d="M103 28 v-5 M113 32 l4-4 M93 32 l-4-4" stroke="${C.glow}" stroke-width="2.2" stroke-linecap="round"/>`) },

        { ar: 'بوّابة OR', en: 'OR Gate 7432',
          line: 'الرقاقة 7432 تُشعل الليد إذا ضُغط أحد المفتاحين.',
          svg: V(`<rect x="4" y="14" width="16" height="7" rx="2" fill="${C.metal}"/>
            <line x1="6" y1="17.5" x2="18" y2="17.5" stroke="${C.hot}" stroke-width="2.4"/>
            <rect x="4" y="58" width="16" height="7" rx="2" fill="${C.metal}"/>
            <line x1="6" y1="61" x2="16" y2="55" stroke="${C.wire}" stroke-width="2.4"/>
            <path d="M20 17.5 h12 v14" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <path d="M20 61.5 h12 v-12" stroke="${C.wire}" stroke-width="2" fill="none" opacity=".45"/>
            <rect x="32" y="28" width="50" height="24" rx="3" fill="${C.body}"/>
            <circle cx="32" cy="40" r="3.5" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 6; i++) {
                const x = 36 + i * 7.6;
                d += `<rect x="${x}" y="24" width="2.8" height="4" fill="${C.metal}"/>`;
                d += `<rect x="${x}" y="52" width="2.8" height="4" fill="${C.metal}"/>`;
              } return d; })()}
            <path d="M44 32 q10 8 0 16 q14 0 20-8 q-6-8-20-8 z" fill="none" stroke="${C.green}" stroke-width="2"/>
            <text x="57" y="66" font-size="9" text-anchor="middle" fill="${C.wire}">7432</text>
            <path d="M82 40 h10" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="102" cy="40" r="8" fill="${C.green}"/>
            <path d="M102 27 v-5 M113 33 l4-3 M91 33 l-4-3" stroke="${C.green}" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>`) },

        { ar: 'بوّابة NOT', en: 'NOT Gate 7404',
          line: 'الرقاقة 7404 تعكس المدخل: مضغوط فينطفئ، متروك فيضيء.',
          svg: V(`<rect x="6" y="34" width="18" height="8" rx="2" fill="${C.metal}"/>
            <line x1="8" y1="41" x2="20" y2="33" stroke="${C.wire}" stroke-width="2.6"/>
            <circle cx="8" cy="41" r="2" fill="${C.body}"/>
            <path d="M24 38 h10" stroke="${C.wire}" stroke-width="2"/>
            <rect x="34" y="14" width="44" height="48" rx="3" fill="${C.body}"/>
            <circle cx="56" cy="14" r="3.5" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 5; i++) {
                const y = 20 + i * 9;
                d += `<rect x="30" y="${y}" width="4" height="3" fill="${C.metal}"/>`;
                d += `<rect x="78" y="${y}" width="4" height="3" fill="${C.metal}"/>`;
              } return d; })()}
            <path d="M46 28 l18 10 -18 10 z" fill="none" stroke="${C.cool}" stroke-width="2"/>
            <circle cx="67" cy="38" r="3.4" fill="none" stroke="${C.cool}" stroke-width="2"/>
            <text x="56" y="58" font-size="9" text-anchor="middle" fill="${C.metal}">7404</text>
            <path d="M78 38 h10" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="100" cy="38" r="9" fill="${C.glow}"/>
            <circle cx="100" cy="38" r="14" fill="${C.glow}" opacity=".25"/>
            <path d="M92 62 h16" stroke="${C.metal}" stroke-width="2.4"/>`) },

        { ar: 'المؤقّت 555', en: '555 Timer',
          line: 'المؤقّت 555 يُصدر نبضات منتظمة تُوقّت الوميض.',
          svg: V(`<rect x="10" y="22" width="52" height="36" rx="3" fill="${C.body}"/>
            <circle cx="10" cy="40" r="4" fill="${C.light}"/>
            ${(() => { let d = ''; for (let i = 0; i < 4; i++) {
                const x = 18 + i * 11;
                d += `<rect x="${x}" y="16" width="3.4" height="6" fill="${C.metal}"/>`;
                d += `<rect x="${x}" y="58" width="3.4" height="6" fill="${C.metal}"/>`;
              } return d; })()}
            <text x="36" y="44" font-size="13" text-anchor="middle" fill="${C.glow}">555</text>
            <path d="M62 40 h6" stroke="${C.wire}" stroke-width="2"/>
            <path d="M68 52 v-14 h9 v14 h9 v-14 h9 v14 h9 v-14 h4"
                  stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linejoin="round"/>
            <path d="M68 60 h44" stroke="${C.metal}" stroke-width="1.4" opacity=".6"/>
            <circle cx="90" cy="18" r="7" fill="${C.glow}"/>
            <circle cx="90" cy="18" r="11" fill="${C.glow}" opacity=".28"/>
            <path d="M90 30 v6" stroke="${C.wire}" stroke-width="1.8"/>`) },

        { ar: 'رقاقة الذاكرة', en: 'Memory Chip',
          line: 'رقاقة الذاكرة تحفظ الصور بعد إطفاء الجهاز.',
          svg: V(`<path d="M50 8 h34 l14 14 v50 a4 4 0 0 1-4 4 H50 a4 4 0 0 1-4-4 V12 a4 4 0 0 1 4-4 z" fill="${C.warm}"/>
            ${(() => { let d = ''; for (let c = 0; c < 5; c++)
              d += `<rect x="${52 + c * 8}" y="14" width="5" height="14" rx="1.5" fill="${C.metal}"/>`;
              return d; })()}
            <rect x="54" y="36" width="36" height="24" rx="2" fill="${C.body}"/>
            ${(() => { let d = ''; for (let i = 0; i < 4; i++) {
                const y = 40 + i * 6;
                d += `<rect x="50" y="${y}" width="4" height="2.4" fill="${C.metal}"/>`;
                d += `<rect x="90" y="${y}" width="4" height="2.4" fill="${C.metal}"/>`;
              } return d; })()}
            <rect x="60" y="42" width="24" height="12" rx="1.5" fill="${C.wire}" opacity=".55"/>
            <rect x="6" y="20" width="30" height="24" rx="2" fill="${C.light}" stroke="${C.metal}" stroke-width="1.6"/>
            <path d="M9 40 l8-10 6 6 5-5 5 9 z" fill="${C.green}"/>
            <circle cx="14" cy="27" r="3" fill="${C.glow}"/>
            <rect x="10" y="48" width="30" height="24" rx="2" fill="${C.light}" stroke="${C.metal}" stroke-width="1.6"/>
            <path d="M13 68 l7-9 5 5 5-6 6 10 z" fill="${C.cool}"/>
            <path d="M40 34 h8 m-4-4 l4 4 -4 4" stroke="${C.wire}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M42 60 h6 m-3-4 l3 4 -3 4" stroke="${C.wire}" stroke-width="2" fill="none" stroke-linecap="round"/>`) },

        { ar: 'المعالج', en: 'Processor',
          line: 'المعالج ينفّذ ملايين الأوامر في كل ثانية.',
          svg: V(`<rect x="4" y="8" width="112" height="64" rx="4" fill="${C.green}" opacity=".3"/>
            <path d="M10 20 h20 v-8 h18 M10 60 h16 v10 h24 M110 24 h-18 v-12 h-14 M110 58 h-22 v12 h-12"
                  stroke="${C.green}" stroke-width="1.6" fill="none" opacity=".8"/>
            <circle cx="10" cy="20" r="2" fill="${C.green}"/><circle cx="110" cy="24" r="2" fill="${C.green}"/>
            <circle cx="10" cy="60" r="2" fill="${C.green}"/><circle cx="110" cy="58" r="2" fill="${C.green}"/>
            ${(() => { let d = ''; for (let i = 0; i < 7; i++) {
                const p = 39 + i * 7;
                d += `<rect x="${p}" y="20" width="3.4" height="6" fill="${C.metal}"/>`;
                d += `<rect x="${p}" y="54" width="3.4" height="6" fill="${C.metal}"/>`;
                d += `<rect x="34" y="${p - 13}" width="6" height="3.4" fill="${C.metal}"/>`;
                d += `<rect x="80" y="${p - 13}" width="6" height="3.4" fill="${C.metal}"/>`;
              } return d; })()}
            <rect x="40" y="26" width="40" height="28" rx="2" fill="${C.body}"/>
            <rect x="46" y="31" width="28" height="18" rx="1.5" fill="${C.wire}"/>
            ${(() => { let d = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++)
              d += `<rect x="${49 + c * 6.6}" y="${34 + r * 5.4}" width="4.4" height="3.4" fill="${C.glow}" opacity="${0.35 + r * 0.2}"/>`;
              return d; })()}`) }
      ]
    },

    /* ══════════════ الكاميرا ══════════════ */
    camera: {
      ar: 'الكاميرا', en: 'Camera',
      items: [
        { ar: 'عين الروبوت', en: 'Robot Eye',
          line: 'تستقبل الضوء القادم من الطريق، فيرى الروبوت أمامه.',
          svg: V(`<path d="M4 74 h46 l-8-22 H16 z" fill="${C.wire}" opacity=".3"/>
            <path d="M20 46 l10 24 h-8 l-8-24z" fill="${C.warm}"/>
            <rect x="12" y="70" width="24" height="4" rx="2" fill="${C.warm}" opacity=".8"/>
            <rect x="58" y="14" width="56" height="50" rx="8" fill="${C.body}"/>
            <rect x="82" y="4" width="4" height="12" fill="${C.metal}"/>
            <circle cx="84" cy="4" r="3.4" fill="${C.hot}"/>
            <circle cx="72" cy="38" r="15" fill="${C.metal}"/>
            <circle cx="72" cy="38" r="10" fill="${C.wire}"/>
            <circle cx="72" cy="38" r="5.5" fill="${C.glass}"/>
            <circle cx="69" cy="35" r="2" fill="${C.light}"/>
            <rect x="94" y="28" width="14" height="20" rx="3" fill="${C.wire}"/>
            <circle cx="101" cy="34" r="2.4" fill="${C.green}"/>
            <line x1="30" y1="40" x2="55" y2="34" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M57 34 l-8-2 1 5z" fill="${C.glow}"/>
            <line x1="28" y1="50" x2="55" y2="42" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M57 41 l-8-1 1 5z" fill="${C.glow}"/>
            <line x1="26" y1="60" x2="55" y2="50" stroke="${C.glow}" stroke-width="2.2" opacity=".8"/>
            <path d="M57 49 l-8 0 1 5z" fill="${C.glow}" opacity=".8"/>`) },

        { ar: 'كاميرا الباب', en: 'Door Camera',
          line: 'تستقبل صورة الطارق، فتظهر على شاشة الداخل.',
          svg: V(`<rect x="40" y="4" width="34" height="72" fill="${C.skin}"/>
            <rect x="44" y="8" width="26" height="64" rx="2" fill="none" stroke="${C.body}" stroke-width="1.6" opacity=".5"/>
            <circle cx="68" cy="42" r="3" fill="${C.metal}"/>
            <rect x="46" y="12" width="22" height="12" rx="3" fill="${C.body}"/>
            <circle cx="57" cy="18" r="4.4" fill="${C.glass}"/>
            <circle cx="57" cy="18" r="1.8" fill="${C.body}"/>
            <circle cx="22" cy="26" r="9" fill="${C.skin}"/>
            <path d="M8 62 q0-20 14-20 q14 0 14 20 z" fill="${C.cool}"/>
            <line x1="30" y1="26" x2="48" y2="18" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M51 17 l-8-1 1 5z" fill="${C.glow}"/>
            <line x1="32" y1="44" x2="48" y2="22" stroke="${C.glow}" stroke-width="2.2" opacity=".75"/>
            <path d="M50 20 l-7 2 4 4z" fill="${C.glow}" opacity=".75"/>
            <path d="M74 20 h6 v14 h-6" stroke="${C.wire}" stroke-width="2" fill="none"/>
            <rect x="80" y="30" width="34" height="30" rx="3" fill="${C.body}"/>
            <rect x="84" y="34" width="26" height="22" fill="${C.glass}"/>
            <circle cx="97" cy="42" r="4.4" fill="${C.skin}"/>
            <path d="M89 56 q0-9 8-9 q8 0 8 9 z" fill="${C.cool}"/>`) },

        { ar: 'صورة الهاتف', en: 'Phone Photo',
          line: 'تجمع ضوء المشهد على مستشعر، فيصير صورة محفوظة.',
          svg: V(`<path d="M4 66 l14-22 8 10 8-14 14 26z" fill="${C.green}"/>
            <circle cx="14" cy="18" r="7" fill="${C.glow}"/>
            <path d="M14 6 v-4 M25 10 l3-3 M3 10 l-3-3" stroke="${C.glow}" stroke-width="2" stroke-linecap="round"/>
            <rect x="4" y="66" width="46" height="4" fill="${C.skin}"/>
            <rect x="62" y="6" width="50" height="68" rx="8" fill="${C.body}"/>
            <rect x="68" y="30" width="38" height="38" rx="3" fill="${C.glass}"/>
            <path d="M70 66 l10-16 6 7 6-10 12 19z" fill="${C.green}" opacity=".85"/>
            <circle cx="76" cy="38" r="4" fill="${C.glow}" opacity=".85"/>
            <circle cx="74" cy="16" r="8" fill="${C.wire}"/>
            <circle cx="74" cy="16" r="4.4" fill="${C.glass}"/>
            <circle cx="72" cy="14" r="1.6" fill="${C.light}"/>
            <circle cx="94" cy="16" r="4" fill="${C.metal}"/>
            <line x1="40" y1="30" x2="62" y2="18" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M64 17 l-8 0 2 5z" fill="${C.glow}"/>
            <line x1="36" y1="48" x2="62" y2="24" stroke="${C.glow}" stroke-width="2.2" opacity=".7"/>
            <path d="M64 22 l-8 1 3 4z" fill="${C.glow}" opacity=".7"/>`) },

        { ar: 'كاميرا الرجوع', en: 'Reverse Camera',
          line: 'تُري السائق ما خلف السيارة على الشاشة.',
          svg: V(`<path d="M56 20 h52 v34 h-52 z" fill="${C.cool}" opacity=".55"/>
            <path d="M60 24 h44 v14 h-44 z" fill="${C.glass}"/>
            <rect x="70" y="44" width="24" height="8" rx="2" fill="${C.light}"/>
            <circle cx="62" cy="41" r="3.6" fill="${C.wire}"/>
            <circle cx="62" cy="41" r="1.8" fill="${C.glass}"/>
            <rect x="56" y="54" width="52" height="6" rx="2" fill="${C.body}"/>
            <circle cx="68" cy="62" r="7" fill="${C.body}"/>
            <circle cx="98" cy="62" r="7" fill="${C.body}"/>
            <path d="M22 40 l10 26 h-9 l-8-26z" fill="${C.warm}"/>
            <rect x="12" y="66" width="22" height="4" rx="2" fill="${C.warm}" opacity=".8"/>
            <line x1="34" y1="44" x2="56" y2="41" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M58 41 l-8-2 1 5z" fill="${C.glow}"/>
            <line x1="32" y1="56" x2="56" y2="45" stroke="${C.glow}" stroke-width="2.2" opacity=".7"/>
            <path d="M58 44 l-8 0 2 5z" fill="${C.glow}" opacity=".7"/>
            <rect x="4" y="6" width="44" height="30" rx="4" fill="${C.body}"/>
            <rect x="8" y="10" width="36" height="22" fill="${C.wire}"/>
            <path d="M14 32 l6-14 h8 l6 14z" fill="${C.warm}" opacity=".85"/>
            <path d="M10 32 l4-10 M42 32 l-4-10" stroke="${C.green}" stroke-width="1.8"/>`) },

        { ar: 'تمييز اللون', en: 'Colour Tracking',
          line: 'تقرأ لون الكرة من الضوء المنعكس، فيتبعها الروبوت.',
          svg: V(`<circle cx="20" cy="46" r="15" fill="${C.hot}"/>
            <circle cx="15" cy="40" r="4.4" fill="${C.light}" opacity=".45"/>
            <ellipse cx="22" cy="64" rx="14" ry="3.4" fill="${C.body}" opacity=".22"/>
            <rect x="62" y="18" width="40" height="34" rx="4" fill="${C.wire}"/>
            <circle cx="82" cy="35" r="12" fill="${C.body}"/>
            <circle cx="82" cy="35" r="7" fill="${C.glass}"/>
            <circle cx="79" cy="32" r="2.4" fill="${C.light}"/>
            <rect x="66" y="52" width="32" height="6" rx="2" fill="${C.body}"/>
            <rect x="70" y="58" width="6" height="8" fill="${C.metal}"/>
            <rect x="88" y="58" width="6" height="8" fill="${C.metal}"/>
            <line x1="36" y1="38" x2="62" y2="30" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M64 30 l-8-2 1 5z" fill="${C.glow}"/>
            <line x1="36" y1="52" x2="62" y2="42" stroke="${C.glow}" stroke-width="2.2" opacity=".75"/>
            <path d="M64 41 l-8 0 1 5z" fill="${C.glow}" opacity=".75"/>
            <rect x="62" y="66" width="12" height="10" rx="2" fill="${C.hot}"/>
            <rect x="76" y="66" width="12" height="10" rx="2" fill="${C.cool}" opacity=".4"/>
            <rect x="90" y="66" width="12" height="10" rx="2" fill="${C.green}" opacity=".4"/>
            <path d="M68 64 v-4" stroke="${C.hot}" stroke-width="2"/>`) },

        { ar: 'كاميرا المراقبة', en: 'Security Camera',
          line: 'تستقبل ضوء المحلّ طوال الليل وتُسجّله.',
          svg: V(`<rect x="4" y="4" width="8" height="24" rx="2" fill="${C.metal}"/>
            <path d="M12 12 h10" stroke="${C.metal}" stroke-width="4"/>
            <rect x="22" y="6" width="34" height="16" rx="4" fill="${C.body}"/>
            <path d="M56 8 l8-3 v16 l-8-3z" fill="${C.wire}"/>
            <circle cx="60" cy="14" r="4.4" fill="${C.glass}"/>
            <circle cx="58.5" cy="12.5" r="1.6" fill="${C.light}"/>
            <circle cx="27" cy="11" r="2.4" fill="${C.hot}"/>
            <path d="M62 10 L112 34 L96 62 L58 20 z" fill="${C.glow}" opacity=".16"/>
            <line x1="96" y1="46" x2="70" y2="24" stroke="${C.glow}" stroke-width="2"/>
            <path d="M68 22 l2 7 4-3z" fill="${C.glow}"/>
            <line x1="104" y1="36" x2="72" y2="18" stroke="${C.glow}" stroke-width="2" opacity=".7"/>
            <path d="M70 17 l1 7 4-4z" fill="${C.glow}" opacity=".7"/>
            <rect x="70" y="52" width="46" height="6" rx="2" fill="${C.skin}"/>
            <rect x="70" y="68" width="46" height="6" rx="2" fill="${C.skin}"/>
            <rect x="76" y="42" width="9" height="10" rx="1.5" fill="${C.cool}"/>
            <rect x="89" y="44" width="9" height="8" rx="1.5" fill="${C.green}"/>
            <rect x="102" y="40" width="9" height="12" rx="1.5" fill="${C.warm}"/>
            <rect x="80" y="60" width="9" height="8" rx="1.5" fill="${C.hot}"/>
            <rect x="94" y="58" width="9" height="10" rx="1.5" fill="${C.cool}" opacity=".7"/>`) }
      ]
    },

    /* ══════════════ الروبوت المتحرّك ══════════════ */
    'robot-car': {
      ar: 'الروبوت المتحرّك', en: 'Robot Car',
      items: [
        { ar: 'متتبّع الخطّ', en: 'Line Follower',
          line: 'حسّاس أسفله يقرأ الخطّ الأسود، فيصحّح مساره.',
          svg: V(`<path d="M2 72 q30-10 58 0 q28 10 58 0" stroke="${C.body}" stroke-width="7" fill="none"/>
            <rect x="26" y="26" width="68" height="24" rx="5" fill="${C.cool}" opacity=".85"/>
            <rect x="36" y="14" width="40" height="14" rx="4" fill="${C.wire}"/>
            <rect x="44" y="30" width="26" height="14" rx="2" fill="${C.body}"/>
            <circle cx="86" cy="32" r="3" fill="${C.green}"/>
            <circle cx="40" cy="56" r="10" fill="${C.body}"/>
            <circle cx="40" cy="56" r="4" fill="${C.metal}"/>
            <circle cx="82" cy="56" r="10" fill="${C.body}"/>
            <circle cx="82" cy="56" r="4" fill="${C.metal}"/>
            <rect x="52" y="50" width="18" height="8" rx="2" fill="${C.metal}"/>
            <path d="M56 58 v6 M66 58 v6" stroke="${C.hot}" stroke-width="2.4"/>
            <circle cx="56" cy="66" r="2" fill="${C.hot}"/>
            <circle cx="66" cy="66" r="2" fill="${C.hot}"/>
            <path d="M100 40 h12 m-5-5 l5 5 -5 5" stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`) },

        { ar: 'تجنّب العوائق', en: 'Obstacle Avoiding',
          line: 'يقيس بُعد الحاجز بموجة صوت، ثم ينحرف.',
          svg: V(`<rect x="10" y="30" width="56" height="22" rx="5" fill="${C.cool}" opacity=".85"/>
            <rect x="22" y="18" width="32" height="14" rx="3" fill="${C.light}" stroke="${C.metal}" stroke-width="1.6"/>
            <circle cx="31" cy="25" r="5" fill="${C.wire}"/>
            <circle cx="45" cy="25" r="5" fill="${C.wire}"/>
            <circle cx="31" cy="25" r="2" fill="${C.body}"/>
            <circle cx="45" cy="25" r="2" fill="${C.body}"/>
            <circle cx="22" cy="56" r="9" fill="${C.body}"/>
            <circle cx="22" cy="56" r="3.4" fill="${C.metal}"/>
            <circle cx="54" cy="56" r="9" fill="${C.body}"/>
            <circle cx="54" cy="56" r="3.4" fill="${C.metal}"/>
            <rect x="96" y="8" width="20" height="64" fill="${C.skin}"/>
            <path d="M96 8 v64" stroke="${C.body}" stroke-width="2" opacity=".4"/>
            <path d="M70 20 q8 8 0 16" stroke="${C.warm}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <path d="M78 14 q12 14 0 28" stroke="${C.warm}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".7"/>
            <path d="M86 8 q16 20 0 40" stroke="${C.warm}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".45"/>
            <path d="M90 56 q-12 6-22 2" stroke="${C.green}" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
            <path d="M68 58 l7-3 1 5z" fill="${C.green}"/>`) },

        { ar: 'الرؤية بالكاميرا', en: 'Camera Vision',
          line: 'كاميرا في مقدّمته تستقبل الضوء، فيرى الطريق.',
          svg: V(`<circle cx="16" cy="12" r="7" fill="${C.glow}"/>
            <path d="M16 2 v-2 M25 6 l3-3 M7 6 l-3-3" stroke="${C.glow}" stroke-width="2" stroke-linecap="round"/>
            <line x1="22" y1="18" x2="40" y2="40" stroke="${C.warm}" stroke-width="2" stroke-dasharray="4 3"/>
            <path d="M42 42 l-7-3 0 5z" fill="${C.warm}"/>
            <path d="M40 44 l10 26 h-10 l-8-26z" fill="${C.hot}" opacity=".85"/>
            <rect x="26" y="70" width="26" height="4" rx="2" fill="${C.hot}" opacity=".6"/>
            <rect x="62" y="34" width="52" height="22" rx="5" fill="${C.cool}" opacity=".85"/>
            <rect x="72" y="22" width="34" height="13" rx="3" fill="${C.body}"/>
            <circle cx="98" cy="30" r="2.6" fill="${C.green}"/>
            <rect x="56" y="36" width="10" height="16" rx="3" fill="${C.wire}"/>
            <circle cx="58" cy="44" r="5" fill="${C.glass}"/>
            <circle cx="57" cy="42" r="1.8" fill="${C.light}"/>
            <circle cx="74" cy="60" r="9" fill="${C.body}"/>
            <circle cx="74" cy="60" r="3.4" fill="${C.metal}"/>
            <circle cx="104" cy="60" r="9" fill="${C.body}"/>
            <circle cx="104" cy="60" r="3.4" fill="${C.metal}"/>
            <line x1="34" y1="50" x2="52" y2="44" stroke="${C.glow}" stroke-width="2.2"/>
            <path d="M54 44 l-8-2 1 5z" fill="${C.glow}"/>
            <line x1="36" y1="62" x2="52" y2="50" stroke="${C.glow}" stroke-width="2.2" opacity=".7"/>
            <path d="M54 48 l-8 1 3 4z" fill="${C.glow}" opacity=".7"/>`) },

        { ar: 'التحكّم بالهاتف', en: 'Phone Control',
          line: 'يستقبل أوامر الهاتف لاسلكيًّا، فيتحرّك حيث تريد.',
          svg: V(`<rect x="6" y="14" width="30" height="52" rx="6" fill="${C.body}"/>
            <rect x="10" y="20" width="22" height="34" rx="2" fill="${C.glass}"/>
            <path d="M21 26 v10 m-5-5 h10" stroke="${C.cool}" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M16 44 h10 M16 49 h10" stroke="${C.cool}" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="21" cy="60" r="3" fill="${C.metal}"/>
            <path d="M40 30 q7 10 0 20" stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <path d="M48 24 q11 16 0 32" stroke="${C.green}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".6"/>
            <rect x="62" y="34" width="50" height="22" rx="5" fill="${C.cool}" opacity=".85"/>
            <rect x="70" y="22" width="34" height="13" rx="3" fill="${C.wire}"/>
            <rect x="76" y="12" width="14" height="10" rx="2" fill="${C.body}"/>
            <circle cx="83" cy="17" r="2.6" fill="${C.green}"/>
            <path d="M64 20 q-6 8 0 16" stroke="${C.green}" stroke-width="2" fill="none" opacity=".7"/>
            <circle cx="74" cy="60" r="9" fill="${C.body}"/>
            <circle cx="74" cy="60" r="3.4" fill="${C.metal}"/>
            <circle cx="102" cy="60" r="9" fill="${C.body}"/>
            <circle cx="102" cy="60" r="3.4" fill="${C.metal}"/>
            <rect x="88" y="40" width="18" height="10" rx="2" fill="${C.body}"/>`) },

        { ar: 'ذراع الرفع', en: 'Lifting Arm',
          line: 'ذراعه ترفع المكعّب وتنقله إلى الصندوق.',
          svg: V(`<rect x="8" y="46" width="52" height="20" rx="5" fill="${C.cool}" opacity=".85"/>
            <circle cx="20" cy="70" r="8" fill="${C.body}"/>
            <circle cx="20" cy="70" r="3" fill="${C.metal}"/>
            <circle cx="48" cy="70" r="8" fill="${C.body}"/>
            <circle cx="48" cy="70" r="3" fill="${C.metal}"/>
            <rect x="26" y="36" width="16" height="12" rx="3" fill="${C.wire}"/>
            <circle cx="34" cy="42" r="4" fill="${C.light}"/>
            <rect x="32" y="14" width="7" height="24" rx="3" fill="${C.metal}" transform="rotate(18 35 26)"/>
            <rect x="42" y="10" width="26" height="7" rx="3" fill="${C.metal}"/>
            <path d="M68 8 l6 5 -6 5" fill="${C.metal}"/>
            <rect x="62" y="18" width="18" height="18" rx="2" fill="${C.warm}"/>
            <path d="M62 27 h18 M71 18 v18" stroke="${C.skin}" stroke-width="1.6" opacity=".7"/>
            <path d="M71 40 v10 m-4-5 l4 5 4-5" stroke="${C.green}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M86 52 h30 v22 h-30 z" fill="${C.skin}"/>
            <path d="M86 52 l10-8 h30 l-10 8 z" fill="${C.skin}" opacity=".7"/>
            <path d="M86 62 h30" stroke="${C.body}" stroke-width="1.6" opacity=".5"/>`) },

        { ar: 'روبوت المستودع', en: 'Warehouse Robot',
          line: 'ينقل الصندوق بين الرفوف على مسار محدَّد.',
          svg: V(`<rect x="6" y="6" width="30" height="60" rx="2" fill="none" stroke="${C.skin}" stroke-width="3"/>
            <line x1="6" y1="26" x2="36" y2="26" stroke="${C.skin}" stroke-width="3"/>
            <line x1="6" y1="46" x2="36" y2="46" stroke="${C.skin}" stroke-width="3"/>
            <rect x="10" y="12" width="10" height="12" fill="${C.warm}" opacity=".8"/>
            <rect x="22" y="32" width="11" height="12" fill="${C.cool}" opacity=".8"/>
            <rect x="10" y="52" width="12" height="12" fill="${C.green}" opacity=".8"/>
            <rect x="84" y="6" width="30" height="60" rx="2" fill="none" stroke="${C.skin}" stroke-width="3"/>
            <line x1="84" y1="26" x2="114" y2="26" stroke="${C.skin}" stroke-width="3"/>
            <line x1="84" y1="46" x2="114" y2="46" stroke="${C.skin}" stroke-width="3"/>
            <rect x="88" y="30" width="11" height="12" fill="${C.hot}" opacity=".7"/>
            <rect x="100" y="50" width="11" height="12" fill="${C.warm}" opacity=".7"/>
            <path d="M42 74 h36" stroke="${C.glow}" stroke-width="3" stroke-dasharray="6 4"/>
            <rect x="46" y="50" width="30" height="14" rx="4" fill="${C.cool}"/>
            <circle cx="53" cy="67" r="6" fill="${C.body}"/>
            <circle cx="69" cy="67" r="6" fill="${C.body}"/>
            <rect x="50" y="34" width="22" height="16" fill="${C.skin}"/>
            <path d="M50 42 h22 M61 34 v16" stroke="${C.body}" stroke-width="1.4" opacity=".45"/>
            <circle cx="61" cy="30" r="2.6" fill="${C.green}"/>`) }
      ]
    }
  };

  window.USES = Object.assign(window.USES || {}, MORE);
  if (window.renderUses) window.renderUses();
})();
