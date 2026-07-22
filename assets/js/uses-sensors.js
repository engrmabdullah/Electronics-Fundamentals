/* ============================================================
   معرض تطبيقات الحسّاسات — توسعة لـ uses.js
   الاستعمال في الدرس:
     <div class="uses" data-uses="ldr"></div>

   قاعدة مُلزمة (STYLE.md §٣):
     • ٦ تطبيقات لكل عنصر، لكل تطبيق رسمه الخاصّ
     • لا رسم مشترك بين تطبيقين ولا بين عنصرين
     • السطر تحت الرسم يقول: الحسّاس يقيس *ماذا* هنا تحديدًا
     • الحسّاس يستقبل، والمصباح يُصدر — لا خلط بينهما
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

    /* ══════════════ المقاومة الضوئية ══════════════ */
    ldr: {
      ar: 'المقاومة الضوئية', en: 'Light Dependent Resistor (LDR)',
      items: [
        { ar: 'مصباح الشارع', en: 'Street Light',
          line: 'يقيس ضوء السماء، فيُشعل المصباح وحده عند الغروب.',
          svg: V(`<circle cx="16" cy="13" r="2" fill="${C.light}" opacity=".85"/>
            <circle cx="29" cy="23" r="1.6" fill="${C.light}" opacity=".6"/>
            <circle cx="11" cy="33" r="1.5" fill="${C.light}" opacity=".45"/>
            <rect x="88" y="16" width="7" height="58" rx="2" fill="${C.metal}"/>
            <path d="M91 18 h-26 a10 10 0 0 0-10 10" stroke="${C.metal}" stroke-width="5" fill="none"/>
            <path d="M42 28 h26 l-5 9 H47 z" fill="${C.body}"/>
            <path d="M47 37 L33 72 h44 L63 37 z" fill="${C.glow}" opacity=".4"/>
            <rect x="48" y="9" width="15" height="10" rx="3" fill="${C.body}"/>
            <path d="M51 14 h3 l1.4-3 1.6 6 1.4-3 h2" stroke="${C.glow}" stroke-width="1.7" fill="none"/>
            <line x1="6" y1="74" x2="114" y2="74" stroke="${C.wire}" stroke-width="3"/>`) },

        { ar: 'سطوع شاشة الهاتف', en: 'Screen Auto-Brightness',
          line: 'يقيس ضوء الغرفة، فتخفت الشاشة إذا صارت مظلمة.',
          svg: V(`<path d="M110 20 a11 11 0 1 1-9-11 a9 9 0 0 0 9 11 z" fill="${C.light}" opacity=".75"/>
            <rect x="34" y="5" width="52" height="70" rx="9" fill="${C.body}"/>
            <rect x="39" y="16" width="42" height="46" rx="3" fill="${C.glass}" opacity=".3"/>
            <rect x="45" y="8" width="12" height="5" rx="2.5" fill="${C.glow}"/>
            <path d="M47 10.5 h2 l1-2 1.2 4 1-2 h1.6" stroke="${C.body}" stroke-width="1.2" fill="none"/>
            <circle cx="70" cy="10.5" r="2.4" fill="${C.metal}"/>
            <circle cx="60" cy="34" r="7" fill="${C.glow}" opacity=".45"/>
            <path d="M60 22 v-4 M60 46 v4 M48 34 h-4 M72 34 h4" stroke="${C.glow}"
                  stroke-width="2.2" stroke-linecap="round" opacity=".45"/>
            <rect x="42" y="66" width="36" height="5" rx="2.5" fill="${C.light}" opacity=".3"/>
            <rect x="42" y="66" width="11" height="5" rx="2.5" fill="${C.glow}"/>
            <path d="M18 28 v16 m0 0 l-4-5 m4 5 l4-5" stroke="${C.cool}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'إنارة الحديقة الشمسية', en: 'Solar Garden Light',
          line: 'يقيس ضوء النهار، فيمنع الإنارة حتى يحلّ الليل.',
          svg: V(`<rect x="55" y="40" width="9" height="34" fill="${C.body}"/>
            <path d="M38 22 h44 l5 9 H33 z" fill="${C.cool}"/>
            <path d="M44 24 l-3 5 M54 24 l-3 5 M64 24 l-3 5 M74 24 l-3 5"
                  stroke="${C.body}" stroke-width="1.6" opacity=".55"/>
            <rect x="46" y="31" width="28" height="12" rx="3" fill="${C.glow}"/>
            <circle cx="60" cy="37" r="3.4" fill="${C.light}" opacity=".9"/>
            <rect x="86" y="30" width="12" height="9" rx="2.5" fill="${C.body}"/>
            <path d="M88.5 34.5 h2.4 l1.2-2.6 1.4 5 1.2-2.4 h1.6" stroke="${C.glow}" stroke-width="1.5" fill="none"/>
            <path d="M46 46 l-8 12 M60 47 v13 M74 46 l8 12" stroke="${C.glow}"
                  stroke-width="2.4" stroke-linecap="round" opacity=".5"/>
            <path d="M20 74 q3-11 6 0 M28 74 q4-14 8 0 M86 74 q4-13 8 0 M96 74 q3-10 6 0"
                  fill="none" stroke="${C.green}" stroke-width="2.4" stroke-linecap="round"/>`) },

        { ar: 'عدّاد بشعاع ضوئي', en: 'Photo Counter',
          line: 'كلّ صندوق يقطع الشعاع عن الحسّاس، فيزيد العدد واحدًا.',
          svg: V(`<rect x="44" y="3" width="32" height="17" rx="3" fill="${C.body}"/>
            <path d="M54 8 v10 M62 8 v10 M62 8 h6 M62 13 h6 M68 8 v10" stroke="${C.glow}"
                  stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <rect x="4" y="30" width="15" height="22" rx="3" fill="${C.body}"/>
            <rect x="101" y="30" width="15" height="22" rx="3" fill="${C.wire}"/>
            <path d="M104 41 h2.6 l1.4-3 1.6 6 1.4-3 h2" stroke="${C.glow}" stroke-width="1.7" fill="none"/>
            <line x1="19" y1="41" x2="50" y2="41" stroke="${C.glow}" stroke-width="3"
                  stroke-dasharray="5 4" stroke-linecap="round"/>
            <line x1="80" y1="41" x2="101" y2="41" stroke="${C.glow}" stroke-width="3"
                  stroke-dasharray="5 4" stroke-linecap="round" opacity=".2"/>
            <rect x="50" y="26" width="30" height="30" rx="2" fill="${C.warm}"/>
            <path d="M50 38 h30 M65 26 v30" stroke="${C.body}" stroke-width="1.6" opacity=".35"/>
            <rect x="6" y="60" width="108" height="8" rx="4" fill="${C.wire}"/>
            <circle cx="24" cy="72" r="5" fill="${C.metal}"/><circle cx="60" cy="72" r="5" fill="${C.metal}"/>
            <circle cx="96" cy="72" r="5" fill="${C.metal}"/>`) },

        { ar: 'مقياس ضوء الكاميرا', en: 'Camera Light Meter',
          line: 'يقيس ضوء المشهد، فتقرّر الكاميرا تشغيل الفلاش.',
          svg: V(`<path d="M8 12 l10 10 M22 6 l5 12 M38 4 l1 12" stroke="${C.glow}"
                  stroke-width="2.6" stroke-linecap="round" opacity=".55"/>
            <rect x="12" y="26" width="96" height="46" rx="8" fill="${C.body}"/>
            <rect x="36" y="17" width="28" height="10" rx="3" fill="${C.body}"/>
            <circle cx="60" cy="50" r="18" fill="${C.metal}"/>
            <circle cx="60" cy="50" r="12" fill="${C.wire}"/>
            <circle cx="60" cy="50" r="5.5" fill="${C.glass}"/>
            <circle cx="56" cy="46" r="2.2" fill="${C.light}" opacity=".9"/>
            <rect x="19" y="33" width="16" height="11" rx="2.5" fill="${C.light}"/>
            <path d="M28 35 l-5 6 h4 l-2 5 6 -7 h-4 z" fill="${C.warm}"/>
            <rect x="87" y="33" width="14" height="10" rx="2.5" fill="${C.glow}"/>
            <path d="M89.5 38 h2.4 l1.2-2.6 1.4 5 1.2-2.4 h1.6" stroke="${C.body}" stroke-width="1.4" fill="none"/>
            <rect x="86" y="56" width="16" height="5" rx="2" fill="${C.green}"/>`) },

        { ar: 'لعبة تعمل بالضوء', en: 'Light-Activated Toy',
          line: 'ينقطع الضوء عن الحسّاس، فتتوقّف اللعبة عن السير.',
          svg: V(`<path d="M6 12 q10-8 20 0 q12-6 20 4 q-4 8-14 7 H14 q-10-3-8-11 z"
                  fill="${C.wire}" opacity=".55"/>
            <rect x="38" y="24" width="42" height="28" rx="6" fill="${C.warm}"/>
            <rect x="46" y="8" width="26" height="16" rx="4" fill="${C.body}"/>
            <rect x="53" y="12" width="12" height="8" rx="2" fill="${C.glow}"/>
            <path d="M55.5 16 h2 l1.2-2.6 1.4 5 1.2-2.4 h2" stroke="${C.body}" stroke-width="1.3" fill="none"/>
            <rect x="26" y="30" width="12" height="7" rx="3" fill="${C.body}"/>
            <rect x="80" y="30" width="12" height="7" rx="3" fill="${C.body}"/>
            <circle cx="48" cy="58" r="9" fill="${C.body}"/><circle cx="48" cy="58" r="3.4" fill="${C.metal}"/>
            <circle cx="72" cy="58" r="9" fill="${C.body}"/><circle cx="72" cy="58" r="3.4" fill="${C.metal}"/>
            <circle cx="102" cy="20" r="10" fill="${C.hot}"/>
            <rect x="95" y="17.5" width="14" height="5" rx="2" fill="${C.light}"/>
            <line x1="6" y1="70" x2="114" y2="70" stroke="${C.wire}" stroke-width="3"/>`) }
      ]
    },

    /* ══════════════ حسّاس الموجات فوق الصوتية ══════════════ */
    ultrasonic: {
      ar: 'حسّاس الموجات فوق الصوتية', en: 'Ultrasonic Sensor',
      items: [
        { ar: 'روبوت يتجنّب العائق', en: 'Obstacle-Avoiding Robot',
          line: 'يقيس بُعد الجدار، فيتوقّف الروبوت قبل أن يصطدم.',
          svg: V(`<rect x="10" y="30" width="46" height="26" rx="5" fill="${C.green}"/>
            <rect x="40" y="34" width="16" height="18" rx="3" fill="${C.body}"/>
            <circle cx="45" cy="43" r="4.6" fill="${C.metal}"/><circle cx="53" cy="43" r="4.6" fill="${C.metal}"/>
            <circle cx="22" cy="60" r="8" fill="${C.body}"/><circle cx="22" cy="60" r="3" fill="${C.metal}"/>
            <circle cx="44" cy="60" r="8" fill="${C.body}"/><circle cx="44" cy="60" r="3" fill="${C.metal}"/>
            <path d="M62 34 a12 12 0 0 1 0 18" stroke="${C.cool}" stroke-width="2.6" fill="none"/>
            <path d="M70 28 a20 20 0 0 1 0 30" stroke="${C.cool}" stroke-width="2.6" fill="none" opacity=".6"/>
            <path d="M78 22 a28 28 0 0 1 0 42" stroke="${C.cool}" stroke-width="2.6" fill="none" opacity=".35"/>
            <rect x="96" y="6" width="20" height="68" fill="${C.skin}"/>
            <path d="M96 20 h20 M96 34 h20 M96 48 h20 M96 62 h20 M106 6 v14 M101 20 v14 M111 34 v14 M104 48 v14"
                  stroke="${C.light}" stroke-width="1.6" opacity=".5"/>`) },

        { ar: 'حسّاس ركن السيارة', en: 'Parking Sensor',
          line: 'يقيس بُعد العمود خلف السيارة، فيصفر كلّما اقتربتَ.',
          svg: V(`<path d="M14 44 h64 l14 12 v10 a4 4 0 0 1-4 4 H18 a4 4 0 0 1-4-4 z" fill="${C.cool}"/>
            <path d="M26 44 l8-14 h30 l10 14 z" fill="${C.cool}" opacity=".75"/>
            <path d="M34 42 l5-9 h22 l7 9 z" fill="${C.glass}"/>
            <circle cx="32" cy="68" r="9" fill="${C.body}"/><circle cx="32" cy="68" r="3.4" fill="${C.metal}"/>
            <circle cx="76" cy="68" r="9" fill="${C.body}"/><circle cx="76" cy="68" r="3.4" fill="${C.metal}"/>
            <circle cx="17" cy="56" r="3.4" fill="${C.metal}"/>
            <path d="M8 48 a12 12 0 0 0 0 18" stroke="${C.warm}" stroke-width="2.6" fill="none"/>
            <path d="M2 44 a20 20 0 0 0 0 26" stroke="${C.warm}" stroke-width="2.6" fill="none" opacity=".55"/>
            <rect x="100" y="16" width="14" height="58" rx="3" fill="${C.metal}"/>
            <rect x="40" y="8" width="34" height="20" rx="4" fill="${C.body}"/>
            <rect x="45" y="14" width="5" height="9" rx="2" fill="${C.green}"/>
            <rect x="53" y="14" width="5" height="9" rx="2" fill="${C.warm}"/>
            <rect x="61" y="14" width="5" height="9" rx="2" fill="${C.hot}"/>`) },

        { ar: 'صنبور بلا لمس', en: 'Touchless Faucet',
          line: 'يقيس قُرب اليد تحت الفوّهة، فينفتح الماء وحده.',
          svg: V(`<path d="M18 22 h10 v-8 a10 10 0 0 1 10-10 h30 a10 10 0 0 1 10 10 v10 h-10 v-8 a2 2 0 0 0-2-2 H40 a2 2 0 0 0-2 2 v8 z"
                  fill="${C.metal}"/>
            <rect x="66" y="24" width="10" height="6" rx="2" fill="${C.body}"/>
            <path d="M69 32 a8 8 0 0 0 4 0" stroke="${C.cool}" stroke-width="2.4" fill="none"/>
            <path d="M67 38 a12 12 0 0 0 8 0" stroke="${C.cool}" stroke-width="2.4" fill="none" opacity=".6"/>
            <rect x="22" y="24" width="4" height="22" fill="${C.glass}" opacity=".85"/>
            <circle cx="24" cy="50" r="3" fill="${C.cool}"/><circle cx="24" cy="58" r="2.4" fill="${C.cool}" opacity=".8"/>
            <path d="M44 50 q-8 2-9 9 q-1 8 8 9 h22 q10-1 9-9 q-1-8-10-9 z" fill="${C.skin}"/>
            <path d="M48 50 v-6 M56 49 v-8 M64 50 v-6" stroke="${C.skin}" stroke-width="6" stroke-linecap="round"/>
            <path d="M8 60 h104 v10 H8 z" fill="${C.light}" opacity=".5"/>
            <path d="M8 60 h104" stroke="${C.metal}" stroke-width="2.6"/>`) },

        { ar: 'مقياس ماء الخزّان', en: 'Tank Level Meter',
          line: 'يقيس بُعد سطح الماء، فيعرف كم بقي في الخزّان.',
          svg: V(`<rect x="26" y="10" width="68" height="64" rx="6" fill="none"
                  stroke="${C.metal}" stroke-width="3"/>
            <path d="M29 44 h62 v26 a3 3 0 0 1-3 3 H32 a3 3 0 0 1-3-3 z" fill="${C.cool}" opacity=".55"/>
            <path d="M29 44 q8-4 16 0 t16 0 t16 0 t14 0" stroke="${C.cool}" stroke-width="2.6" fill="none"/>
            <rect x="50" y="4" width="20" height="9" rx="2.5" fill="${C.body}"/>
            <circle cx="56" cy="15" r="2.6" fill="${C.metal}"/><circle cx="64" cy="15" r="2.6" fill="${C.metal}"/>
            <path d="M50 22 a12 12 0 0 0 20 0" stroke="${C.warm}" stroke-width="2.4" fill="none"/>
            <path d="M45 30 a20 20 0 0 0 30 0" stroke="${C.warm}" stroke-width="2.4" fill="none" opacity=".55"/>
            <path d="M60 20 v20 m0 0 l-4-5 m4 5 l4-5" stroke="${C.light}" stroke-width="2"
                  fill="none" stroke-linecap="round" opacity=".8"/>
            <path d="M100 14 h8 M100 30 h8 M100 44 h12 M100 58 h8 M100 72 h8"
                  stroke="${C.wire}" stroke-width="2.4" stroke-linecap="round"/>
            <rect x="6" y="34" width="14" height="20" rx="3" fill="${C.green}"/>
            <path d="M9 44 h2.4 l1.4-3 1.6 6 1.4-3 h2" stroke="${C.light}" stroke-width="1.6" fill="none"/>`) },

        { ar: 'مسطرة المسافة', en: 'Ultrasonic Tape Measure',
          line: 'يقيس بُعد الجدار المقابل، فيظهر طول الغرفة رقمًا.',
          svg: V(`<rect x="6" y="26" width="34" height="34" rx="5" fill="${C.warm}"/>
            <rect x="11" y="31" width="24" height="12" rx="2.5" fill="${C.body}"/>
            <path d="M15 40 v-6 M20 40 v-6 M20 34 h5 M20 40 h5 M25 40 v-6 M30 40 v-6"
                  stroke="${C.glow}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="19" cy="52" r="4" fill="${C.body}"/><circle cx="30" cy="52" r="4" fill="${C.body}"/>
            <path d="M46 34 a14 14 0 0 1 0 20" stroke="${C.cool}" stroke-width="2.6" fill="none"/>
            <path d="M56 28 a22 22 0 0 1 0 32" stroke="${C.cool}" stroke-width="2.6" fill="none" opacity=".6"/>
            <path d="M66 22 a30 30 0 0 1 0 44" stroke="${C.cool}" stroke-width="2.6" fill="none" opacity=".35"/>
            <rect x="94" y="4" width="22" height="72" fill="${C.light}"/>
            <path d="M94 4 v72" stroke="${C.metal}" stroke-width="3"/>
            <path d="M44 72 h48 m0 0 l-6-4 m6 4 l-6 4 M44 72 l6-4 m-6 4 l6 4"
                  stroke="${C.hot}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`) },

        { ar: 'عصا المكفوف الإلكترونية', en: 'Smart White Cane',
          line: 'يقيس بُعد العائق أمام العصا، فتهتزّ في اليد تحذيرًا.',
          svg: V(`<path d="M30 6 l16 62" stroke="${C.light}" stroke-width="7" stroke-linecap="round"/>
            <path d="M34 22 l4 14" stroke="${C.hot}" stroke-width="7"/>
            <path d="M40 52 l4 14" stroke="${C.hot}" stroke-width="7"/>
            <path d="M24 4 q10-4 12 6" stroke="${C.body}" stroke-width="6" fill="none" stroke-linecap="round"/>
            <rect x="38" y="30" width="14" height="12" rx="3" fill="${C.body}" transform="rotate(14 45 36)"/>
            <circle cx="42" cy="34" r="2.6" fill="${C.metal}"/><circle cx="48" cy="36" r="2.6" fill="${C.metal}"/>
            <path d="M60 26 a16 16 0 0 1 0 24" stroke="${C.warm}" stroke-width="2.6" fill="none"/>
            <path d="M70 20 a24 24 0 0 1 0 36" stroke="${C.warm}" stroke-width="2.6" fill="none" opacity=".55"/>
            <rect x="88" y="30" width="26" height="26" rx="3" fill="${C.wire}"/>
            <path d="M88 43 h26 M101 30 v26" stroke="${C.light}" stroke-width="1.8" opacity=".45"/>
            <path d="M14 20 q-5 4 0 8 M18 16 q-9 8 0 16" stroke="${C.green}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>
            <line x1="6" y1="72" x2="114" y2="72" stroke="${C.wire}" stroke-width="3"/>`) }
      ]
    },

    /* ══════════════ المقاومة الحرارية ══════════════ */
    thermistor: {
      ar: 'الثرمستور — المقاومة الحرارية', en: 'Thermistor',
      items: [
        { ar: 'مقياس حرارة الطفل', en: 'Digital Thermometer',
          line: 'يقيس حرارة الجسم، فيظهر الرقم على الشاشة الصغيرة.',
          svg: V(`<path d="M20 34 h58 a10 10 0 0 1 0 20 H20 a10 10 0 0 1 0-20 z" fill="${C.light}"
                  stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M78 36 h26 a8 8 0 0 1 0 16 H78 z" fill="${C.metal}"/>
            <circle cx="102" cy="44" r="5" fill="${C.hot}"/>
            <rect x="26" y="38" width="34" height="12" rx="2.5" fill="${C.body}"/>
            <path d="M31 47 v-6 M36 47 v-6 M31 44 h5 M42 41 h4 M42 47 h4 M42 41 v6
                     M52 41 h4 M52 41 v6 M52 44 h4 M52 47 h4" stroke="${C.glow}"
                  stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <circle cx="66" cy="44" r="3.4" fill="${C.green}"/>
            <path d="M96 30 q4-8 0-14 M102 28 q4-7 0-12" stroke="${C.warm}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>
            <path d="M14 20 q-6 6-4 14 q2 8 10 10" stroke="${C.skin}" stroke-width="7"
                  fill="none" stroke-linecap="round"/>
            <path d="M22 62 q-6 4-4 10" stroke="${C.skin}" stroke-width="6" fill="none" stroke-linecap="round"/>`) },

        { ar: 'الثلّاجة', en: 'Refrigerator Thermostat',
          line: 'يقيس برودة الداخل، فيُشغّل التبريد إن ارتفعت الحرارة.',
          svg: V(`<rect x="28" y="4" width="64" height="72" rx="6" fill="${C.light}"
                  stroke="${C.metal}" stroke-width="2.6"/>
            <line x1="28" y1="30" x2="92" y2="30" stroke="${C.metal}" stroke-width="2.6"/>
            <rect x="82" y="12" width="4" height="14" rx="2" fill="${C.body}"/>
            <rect x="82" y="36" width="4" height="20" rx="2" fill="${C.body}"/>
            <rect x="36" y="10" width="30" height="14" rx="2" fill="${C.glass}" opacity=".7"/>
            <rect x="36" y="38" width="22" height="6" rx="2" fill="${C.cool}" opacity=".55"/>
            <rect x="36" y="50" width="30" height="6" rx="2" fill="${C.green}" opacity=".55"/>
            <rect x="36" y="62" width="18" height="6" rx="2" fill="${C.warm}" opacity=".55"/>
            <rect x="60" y="60" width="12" height="10" rx="2" fill="${C.body}"/>
            <path d="M62.5 65 h2.4 l1.2-2.6 1.4 5 1.2-2.4 h1.8" stroke="${C.glow}" stroke-width="1.4" fill="none"/>
            <path d="M12 20 v14 M6 24 l6 4 6-4 M6 30 l6 4 6-4" stroke="${C.cool}"
                  stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M104 20 v14 M98 24 l6 4 6-4 M98 30 l6 4 6-4" stroke="${C.cool}"
                  stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".6"/>`) },

        { ar: 'المكواة', en: 'Clothes Iron',
          line: 'يقيس حرارة القاعدة، فيقطع التسخين عند الدرجة المطلوبة.',
          svg: V(`<path d="M16 52 h84 a6 6 0 0 1 0 12 H30 q-14 0-14-12 z" fill="${C.metal}"/>
            <path d="M28 30 h56 a12 12 0 0 1 12 12 v10 H24 v-10 a12 12 0 0 1 4-12 z" fill="${C.cool}"/>
            <path d="M34 30 q6-16 24-16 q22 0 24 16" stroke="${C.body}" stroke-width="7"
                  fill="none" stroke-linecap="round"/>
            <circle cx="86" cy="42" r="6" fill="${C.light}"/>
            <path d="M86 42 l4-4" stroke="${C.hot}" stroke-width="2.4" stroke-linecap="round"/>
            <rect x="44" y="56" width="14" height="5" rx="2" fill="${C.body}"/>
            <path d="M46 58.5 h2.2 l1.2-2.4 1.4 4.6 1.2-2.2 h2" stroke="${C.glow}" stroke-width="1.3" fill="none"/>
            <path d="M30 24 q4-8 0-14 M44 20 q4-7 0-12" stroke="${C.warm}" stroke-width="2.4"
                  fill="none" stroke-linecap="round" opacity=".8"/>
            <path d="M10 70 h100" stroke="${C.light}" stroke-width="6"/>
            <path d="M10 70 h100" stroke="${C.wire}" stroke-width="1.6" opacity=".4"/>`) },

        { ar: 'مروحة الحاسوب', en: 'CPU Fan Control',
          line: 'يقيس حرارة المعالج، فتزيد سرعة المروحة حين يسخن.',
          svg: V(`<rect x="8" y="24" width="44" height="44" rx="5" fill="${C.body}"/>
            <rect x="14" y="30" width="32" height="32" rx="16" fill="${C.wire}"/>
            <path d="M30 46 l-14-8 a16 16 0 0 1 14-8 z" fill="${C.cool}"/>
            <path d="M30 46 l14 8 a16 16 0 0 1-14 8 z" fill="${C.cool}"/>
            <path d="M30 46 l0-16 a16 16 0 0 1 14 8 z" fill="${C.cool}" opacity=".75"/>
            <path d="M30 46 l0 16 a16 16 0 0 1-14-8 z" fill="${C.cool}" opacity=".75"/>
            <circle cx="30" cy="46" r="4" fill="${C.metal}"/>
            <rect x="72" y="30" width="40" height="34" rx="4" fill="${C.green}"/>
            <rect x="80" y="38" width="24" height="18" rx="2" fill="${C.metal}"/>
            <path d="M84 42 h16 M84 47 h16 M84 52 h16" stroke="${C.body}" stroke-width="1.6" opacity=".5"/>
            <rect x="88" y="66" width="12" height="9" rx="2.5" fill="${C.body}"/>
            <path d="M90.5 70.5 h2.2 l1.2-2.6 1.4 5 1.2-2.4 h1.8" stroke="${C.glow}" stroke-width="1.4" fill="none"/>
            <path d="M78 24 q4-8 0-14 M92 22 q4-8 0-14 M106 24 q4-8 0-14"
                  stroke="${C.hot}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <path d="M56 40 h12 M56 54 h12" stroke="${C.metal}" stroke-width="2.6" stroke-linecap="round"/>`) },

        { ar: 'سخّان الحمّام', en: 'Water Heater Thermostat',
          line: 'يقيس حرارة الماء، فيُطفئ الملفّ قبل أن يغلي.',
          svg: V(`<rect x="34" y="6" width="54" height="68" rx="10" fill="${C.light}"
                  stroke="${C.metal}" stroke-width="2.6"/>
            <path d="M37 34 h48 v34 a6 6 0 0 1-6 6 H43 a6 6 0 0 1-6-6 z" fill="${C.cool}" opacity=".45"/>
            <path d="M42 60 q7-9 14 0 t14 0 t9 0" stroke="${C.hot}" stroke-width="4"
                  fill="none" stroke-linecap="round"/>
            <rect x="52" y="42" width="18" height="8" rx="2.5" fill="${C.body}"/>
            <path d="M55 46 h2.4 l1.2-2.6 1.4 5 1.2-2.4 h2" stroke="${C.glow}" stroke-width="1.5" fill="none"/>
            <path d="M78 44 v6" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="61" cy="20" r="11" fill="${C.light}" stroke="${C.body}" stroke-width="2.2"/>
            <path d="M61 20 l7-6" stroke="${C.hot}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M53 13 l-2-2 M69 13 l2-2 M61 10 v-3" stroke="${C.wire}" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M14 30 v18 a8 8 0 0 0 8 8 h8" stroke="${C.cool}" stroke-width="5"
                  fill="none" stroke-linecap="round"/>
            <path d="M100 20 q4-8 0-14 M108 24 q4-7 0-12" stroke="${C.warm}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'إنذار الحريق الحراري', en: 'Heat Alarm',
          line: 'يقيس ارتفاع حرارة السقف، فيُطلق صافرة الإنذار.',
          svg: V(`<line x1="4" y1="8" x2="116" y2="8" stroke="${C.wire}" stroke-width="4"/>
            <path d="M36 10 h48 a6 6 0 0 1 6 6 v6 a20 20 0 0 1-30 17 a20 20 0 0 1-30-17 v-6 a6 6 0 0 1 6-6 z"
                  fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="60" cy="26" r="6" fill="${C.body}"/>
            <path d="M56.5 26 h2.4 l1.2-2.6 1.4 5 1.2-2.4 h2" stroke="${C.glow}" stroke-width="1.4" fill="none"/>
            <circle cx="44" cy="22" r="2.6" fill="${C.hot}"/>
            <path d="M74 20 q6 6 0 12 M84 16 q10 10 0 20" stroke="${C.hot}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>
            <path d="M46 20 q-6 6 0 12 M36 16 q-10 10 0 20" stroke="${C.hot}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>
            <path d="M60 74 q-14-8-10-20 q3-8 10-10 q-3 10 4 12 q8 3 6 12 q-1 5-10 6 z" fill="${C.warm}"/>
            <path d="M60 74 q-7-5-5-12 q2-5 5-6 q-1 6 3 8 q4 3 2 7 q-1 3-5 3 z" fill="${C.glow}"/>
            <path d="M20 74 q4-10 8-16 M100 74 q-4-10-8-16" stroke="${C.hot}" stroke-width="2.4"
                  fill="none" stroke-linecap="round" opacity=".45"/>`) }
      ]
    },

    /* ══════════════ حسّاس تتبّع الخط ══════════════ */
    'ir-line': {
      ar: 'حسّاس تتبّع الخط', en: 'IR Line Sensor',
      items: [
        { ar: 'روبوت يتبع الخطّ', en: 'Line Following Robot',
          line: 'يقيس الضوء المرتدّ من الأرض، فيميّز الأسود من الأبيض.',
          svg: V(`<path d="M4 66 q26-22 56 0 q26 22 56 0" stroke="${C.body}" stroke-width="7" fill="none"/>
            <rect x="34" y="20" width="52" height="26" rx="6" fill="${C.hot}"/>
            <rect x="44" y="12" width="32" height="10" rx="3" fill="${C.body}"/>
            <circle cx="46" cy="52" r="8" fill="${C.body}"/><circle cx="46" cy="52" r="3" fill="${C.metal}"/>
            <circle cx="74" cy="52" r="8" fill="${C.body}"/><circle cx="74" cy="52" r="3" fill="${C.metal}"/>
            <rect x="52" y="46" width="16" height="7" rx="2" fill="${C.green}"/>
            <path d="M56 53 v8 M64 53 v8" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="2 2"/>
            <path d="M56 63 l-2 3 M56 63 l2 3 M64 63 l-2 3 M64 63 l2 3"
                  stroke="${C.warm}" stroke-width="1.8" opacity=".7"/>
            <circle cx="60" cy="17" r="3" fill="${C.glow}"/>`) },

        { ar: 'مكنسة عند حافّة الدرج', en: 'Cliff Sensor',
          line: 'ينقطع الضوء المرتدّ عند الحافّة، فترتدّ المكنسة للخلف.',
          svg: V(`<path d="M4 40 h60 v36 H4 z" fill="${C.skin}" opacity=".45"/>
            <path d="M64 40 v36 h52" stroke="${C.body}" stroke-width="3" fill="none"/>
            <path d="M64 76 h52 v-4 H64 z" fill="${C.skin}" opacity=".3"/>
            <ellipse cx="38" cy="26" rx="30" ry="12" fill="${C.wire}"/>
            <ellipse cx="38" cy="22" rx="30" ry="12" fill="${C.metal}"/>
            <circle cx="38" cy="22" r="7" fill="${C.body}"/>
            <circle cx="20" cy="20" r="3" fill="${C.green}"/>
            <rect x="54" y="32" width="12" height="7" rx="2" fill="${C.body}"/>
            <path d="M60 39 l4 10" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 3"/>
            <path d="M68 52 l3 4 M68 52 l-4 2" stroke="${C.warm}" stroke-width="1.8" opacity=".45"/>
            <path d="M28 8 h-16 m0 0 l5-5 m-5 5 l5 5" stroke="${C.hot}" stroke-width="3"
                  fill="none" stroke-linecap="round"/>
            <circle cx="86" cy="26" r="10" fill="${C.hot}"/>
            <rect x="79" y="23.5" width="14" height="5" rx="2" fill="${C.light}"/>`) },

        { ar: 'حسّاس الورق في الطابعة', en: 'Paper Edge Sensor',
          line: 'يقيس ارتداد الضوء عن الورقة، فيعرف أنّ الورق نفد.',
          svg: V(`<rect x="12" y="30" width="96" height="34" rx="6" fill="${C.body}"/>
            <rect x="20" y="36" width="80" height="6" rx="3" fill="${C.wire}"/>
            <path d="M30 30 v-20 h34 l10 10 v10 z" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <path d="M64 10 v10 h10" fill="none" stroke="${C.metal}" stroke-width="2"/>
            <path d="M38 18 h20 M38 24 h26" stroke="${C.wire}" stroke-width="2" stroke-linecap="round"/>
            <rect x="80" y="18" width="12" height="9" rx="2.5" fill="${C.green}"/>
            <path d="M84 27 l-8 4" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 2"/>
            <path d="M76 31 l6 3" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 2" opacity=".55"/>
            <rect x="26" y="64" width="68" height="10" rx="3" fill="${C.metal}"/>
            <circle cx="98" cy="52" r="4" fill="${C.hot}"/>
            <circle cx="86" cy="52" r="4" fill="${C.green}"/>`) },

        { ar: 'قطار لعبة على مسار', en: 'Track-Following Toy Train',
          line: 'يقيس عرض الشريط الأسود، فيبقى القطار فوق مساره.',
          svg: V(`<rect x="6" y="60" width="108" height="10" fill="${C.body}"/>
            <path d="M14 60 v10 M30 60 v10 M46 60 v10 M62 60 v10 M78 60 v10 M94 60 v10 M110 60 v10"
                  stroke="${C.light}" stroke-width="2" opacity=".35"/>
            <path d="M22 44 h34 v-14 h10 l6 14 h14 v16 H22 z" fill="${C.cool}"/>
            <rect x="66" y="18" width="10" height="14" rx="2" fill="${C.body}"/>
            <path d="M68 16 q-4-8 2-10 q6 4 2 10 z" fill="${C.light}" opacity=".6"/>
            <rect x="28" y="34" width="16" height="10" rx="2" fill="${C.glass}"/>
            <circle cx="34" cy="62" r="7" fill="${C.body}"/><circle cx="34" cy="62" r="2.6" fill="${C.metal}"/>
            <circle cx="58" cy="62" r="7" fill="${C.body}"/><circle cx="58" cy="62" r="2.6" fill="${C.metal}"/>
            <circle cx="80" cy="62" r="7" fill="${C.body}"/><circle cx="80" cy="62" r="2.6" fill="${C.metal}"/>
            <rect x="48" y="52" width="14" height="7" rx="2" fill="${C.green}"/>
            <path d="M52 59 v4 M58 59 v4" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="2 2"/>
            <path d="M96 40 h14 M96 48 h10" stroke="${C.metal}" stroke-width="2.4"
                  stroke-linecap="round" opacity=".6"/>`) },

        { ar: 'عدّاد لفّات العجلة', en: 'Wheel Encoder',
          line: 'يعدّ الشقوق السوداء المارّة، فتُعرف لفّات العجلة.',
          svg: V(`<circle cx="46" cy="40" r="30" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <path d="M46 40 l0-30 a30 30 0 0 1 15 4 z" fill="${C.body}"/>
            <path d="M46 40 l26 15 a30 30 0 0 1-11 11 z" fill="${C.body}"/>
            <path d="M46 40 l-26 15 a30 30 0 0 1-4-15 z" fill="${C.body}"/>
            <path d="M46 40 l22-20 a30 30 0 0 1 8 20 z" fill="${C.body}" opacity=".55"/>
            <path d="M46 40 l-22 20 a30 30 0 0 1-8-20 z" fill="${C.body}" opacity=".55"/>
            <circle cx="46" cy="40" r="7" fill="${C.wire}"/>
            <circle cx="46" cy="40" r="3" fill="${C.metal}"/>
            <rect x="82" y="32" width="14" height="18" rx="3" fill="${C.green}"/>
            <path d="M82 38 l-8-2" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 2"/>
            <path d="M74 46 l8 -2" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 2" opacity=".55"/>
            <rect x="100" y="26" width="16" height="28" rx="3" fill="${C.body}"/>
            <path d="M104 34 v12 M104 34 h4 M104 40 h4 M104 46 h4 M112 34 v12"
                  stroke="${C.glow}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`) },

        { ar: 'فرز الأغراض على السير', en: 'Conveyor Sorter',
          line: 'يقيس لون كلّ قطعة مارّة، فتُدفع الداكنة إلى صندوقها.',
          svg: V(`<rect x="4" y="48" width="112" height="9" rx="4" fill="${C.wire}"/>
            <circle cx="14" cy="62" r="6" fill="${C.metal}"/><circle cx="60" cy="62" r="6" fill="${C.metal}"/>
            <circle cx="106" cy="62" r="6" fill="${C.metal}"/>
            <rect x="18" y="34" width="16" height="14" rx="2" fill="${C.light}" stroke="${C.metal}" stroke-width="1.8"/>
            <rect x="48" y="34" width="16" height="14" rx="2" fill="${C.body}"/>
            <rect x="78" y="34" width="16" height="14" rx="2" fill="${C.light}" stroke="${C.metal}" stroke-width="1.8"/>
            <rect x="46" y="8" width="20" height="12" rx="3" fill="${C.green}"/>
            <path d="M52 20 v12" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 2"/>
            <path d="M60 32 v-12" stroke="${C.warm}" stroke-width="2.2" stroke-dasharray="3 2" opacity=".5"/>
            <rect x="84" y="8" width="8" height="16" rx="2" fill="${C.hot}"/>
            <path d="M88 24 v8 m0 0 l-4-4 m4 4 l4-4" stroke="${C.hot}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>
            <path d="M96 66 h22 v12 H96 z" fill="${C.body}" opacity=".35"/>
            <path d="M4 66 h22 v12 H4 z" fill="${C.metal}" opacity=".35"/>`) }
      ]
    },

    /* ══════════════ الزرّ اللحظي ══════════════ */
    button: {
      ar: 'الزرّ اللحظي', en: 'Push Button',
      items: [
        { ar: 'زرّ المصعد', en: 'Elevator Button',
          line: 'يُغلق الطريق لحظة الضغط، فيُسجَّل طلب الطابق.',
          svg: V(`<rect x="30" y="4" width="60" height="72" rx="7" fill="${C.metal}"/>
            <rect x="38" y="10" width="44" height="14" rx="3" fill="${C.body}"/>
            <path d="M52 21 v-8 M52 13 l-4 4 M52 13 l4 4 M66 13 v8 M66 21 l-4-4 M66 21 l4-4"
                  stroke="${C.glow}" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="48" cy="38" r="9" fill="${C.light}" stroke="${C.wire}" stroke-width="2"/>
            <path d="M48 43 v-9 M44 38 l4-4 4 4" stroke="${C.wire}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <circle cx="72" cy="38" r="9" fill="${C.warm}" stroke="${C.wire}" stroke-width="2"/>
            <path d="M72 33 v9 M68 38 l4 4 4-4" stroke="${C.light}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <circle cx="48" cy="58" r="7" fill="${C.light}" stroke="${C.wire}" stroke-width="2"/>
            <circle cx="72" cy="58" r="7" fill="${C.light}" stroke="${C.wire}" stroke-width="2"/>
            <path d="M14 34 q-8 6-4 14 q3 6 10 6" stroke="${C.skin}" stroke-width="7"
                  fill="none" stroke-linecap="round"/>
            <path d="M20 40 h18" stroke="${C.skin}" stroke-width="7" stroke-linecap="round"/>`) },

        { ar: 'جرس الباب', en: 'Doorbell',
          line: 'يوصّل الكهرباء ما دام مضغوطًا، فيرنّ الجرس داخل البيت.',
          svg: V(`<rect x="6" y="6" width="34" height="68" rx="4" fill="${C.skin}" opacity=".55"/>
            <rect x="40" y="6" width="4" height="68" fill="${C.wire}"/>
            <circle cx="22" cy="40" r="12" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="22" cy="40" r="7" fill="${C.warm}"/>
            <circle cx="22" cy="40" r="3" fill="${C.hot}"/>
            <path d="M44 40 h14" stroke="${C.wire}" stroke-width="2.6"/>
            <path d="M58 30 h6 v20 h-6 z" fill="${C.wire}" opacity=".4"/>
            <path d="M84 46 a18 18 0 0 1-36 0 a18 18 0 0 1 18-18 a18 18 0 0 1 18 18 z" fill="${C.metal}"/>
            <path d="M48 46 h36" stroke="${C.body}" stroke-width="2.4"/>
            <circle cx="66" cy="52" r="4" fill="${C.body}"/>
            <rect x="63" y="20" width="6" height="9" rx="2" fill="${C.body}"/>
            <path d="M92 30 q7 6 0 12 M100 24 q13 12 0 24" stroke="${C.glow}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>
            <path d="M92 58 q7-4 0-8" stroke="${C.glow}" stroke-width="2.4" fill="none"
                  stroke-linecap="round" opacity=".5"/>`) },

        { ar: 'مفتاح لوحة المفاتيح', en: 'Keyboard Key',
          line: 'تحت الزرّ صفيحتان، الضغط يُلامسهما فيظهر الحرف.',
          svg: V(`<rect x="10" y="52" width="100" height="22" rx="4" fill="${C.body}"/>
            <rect x="16" y="56" width="12" height="10" rx="2" fill="${C.metal}"/>
            <rect x="32" y="56" width="12" height="10" rx="2" fill="${C.metal}"/>
            <rect x="76" y="56" width="12" height="10" rx="2" fill="${C.metal}"/>
            <rect x="92" y="56" width="12" height="10" rx="2" fill="${C.metal}"/>
            <rect x="48" y="44" width="24" height="22" rx="3" fill="${C.light}"
                  stroke="${C.metal}" stroke-width="2"/>
            <rect x="52" y="30" width="16" height="16" rx="2.5" fill="${C.wire}"/>
            <path d="M56 42 v-8 l4 6 4-6 v8" stroke="${C.glow}" stroke-width="1.8"
                  fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M60 30 v-10 m0 0 l-4 5 m4-5 l4 5" stroke="${C.hot}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>
            <path d="M40 66 h10 M70 66 h10" stroke="${C.green}" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M18 24 q-8 6-5 14" stroke="${C.skin}" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M92 24 q8 6 5 14" stroke="${C.skin}" stroke-width="6" fill="none" stroke-linecap="round"/>`) },

        { ar: 'زرّ مسابقة الأسئلة', en: 'Quiz Buzzer',
          line: 'أوّل من يضغط يُغلق دائرته، فيضيء مصباحه قبل غيره.',
          svg: V(`<rect x="8" y="52" width="44" height="20" rx="5" fill="${C.body}"/>
            <path d="M14 52 a16 16 0 0 1 32 0 z" fill="${C.hot}"/>
            <ellipse cx="30" cy="52" rx="16" ry="4" fill="${C.hot}" opacity=".7"/>
            <circle cx="30" cy="20" r="10" fill="${C.glow}"/>
            <circle cx="30" cy="20" r="5" fill="${C.light}" opacity=".85"/>
            <path d="M30 6 v-4 M18 10 l-3-3 M42 10 l3-3" stroke="${C.glow}" stroke-width="2.4"
                  stroke-linecap="round"/>
            <rect x="26" y="30" width="8" height="14" fill="${C.metal}"/>
            <rect x="68" y="52" width="44" height="20" rx="5" fill="${C.body}"/>
            <path d="M74 52 a16 16 0 0 1 32 0 z" fill="${C.cool}"/>
            <ellipse cx="90" cy="52" rx="16" ry="4" fill="${C.cool}" opacity=".7"/>
            <circle cx="90" cy="20" r="10" fill="${C.wire}" opacity=".5"/>
            <rect x="86" y="30" width="8" height="14" fill="${C.metal}"/>
            <path d="M56 40 v26" stroke="${C.wire}" stroke-width="2.4" stroke-dasharray="4 3"/>`) },

        { ar: 'زرّ عبور المشاة', en: 'Pedestrian Crossing Button',
          line: 'ضغطة واحدة تُسجّل طلب العبور، فتتغيّر الإشارة بعد قليل.',
          svg: V(`<rect x="52" y="10" width="10" height="64" fill="${C.metal}"/>
            <rect x="28" y="14" width="34" height="34" rx="5" fill="${C.body}"/>
            <circle cx="45" cy="26" r="8" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <circle cx="45" cy="26" r="4" fill="${C.warm}"/>
            <rect x="34" y="38" width="22" height="6" rx="2" fill="${C.wire}"/>
            <rect x="70" y="8" width="26" height="42" rx="5" fill="${C.body}"/>
            <circle cx="83" cy="20" r="8" fill="${C.hot}"/>
            <path d="M83 14 a3 3 0 0 1 0 6 a3 3 0 0 1 0-6 z" fill="${C.light}" opacity=".85"/>
            <path d="M80 22 h6 v6 l-3 -2 -3 2 z" fill="${C.light}" opacity=".85"/>
            <circle cx="83" cy="38" r="8" fill="${C.green}" opacity=".35"/>
            <path d="M14 30 q-9 6-6 14 q3 6 12 5" stroke="${C.skin}" stroke-width="7"
                  fill="none" stroke-linecap="round"/>
            <path d="M20 34 h10" stroke="${C.skin}" stroke-width="7" stroke-linecap="round"/>
            <line x1="4" y1="74" x2="116" y2="74" stroke="${C.wire}" stroke-width="4"/>
            <path d="M14 68 h14 M40 68 h14 M76 68 h14 M100 68 h14"
                  stroke="${C.light}" stroke-width="4" opacity=".7"/>`) },

        { ar: 'يد التحكّم في الألعاب', en: 'Game Controller Buttons',
          line: 'كلّ زرّ يُغلق دائرته الخاصّة، فتقفز الشخصية أو تركض.',
          svg: V(`<path d="M20 26 h80 a16 16 0 0 1 12 22 q-4 16-16 14 q-10-2-14-10 H38 q-4 8-14 10 q-12 2-16-14 a16 16 0 0 1 12-22 z"
                  fill="${C.body}"/>
            <rect x="26" y="34" width="7" height="20" rx="2" fill="${C.metal}"/>
            <rect x="16" y="41" width="27" height="7" rx="2" fill="${C.metal}"/>
            <circle cx="86" cy="34" r="6" fill="${C.green}"/>
            <circle cx="98" cy="44" r="6" fill="${C.hot}"/>
            <circle cx="86" cy="54" r="6" fill="${C.cool}"/>
            <circle cx="74" cy="44" r="6" fill="${C.glow}"/>
            <circle cx="52" cy="52" r="7" fill="${C.wire}"/>
            <circle cx="68" cy="18" r="5" fill="${C.metal}" opacity=".55"/>
            <rect x="48" y="34" width="8" height="5" rx="2" fill="${C.metal}"/>
            <rect x="60" y="34" width="8" height="5" rx="2" fill="${C.metal}"/>
            <path d="M92 8 h18 v6 h-18 z" fill="${C.light}" opacity=".35"/>
            <path d="M98 20 v-6" stroke="${C.glow}" stroke-width="2.4" stroke-linecap="round"/>`) }
      ]
    },

    /* ══════════════ المقاومة المتغيّرة ══════════════ */
    pot: {
      ar: 'المقاومة المتغيّرة', en: 'Potentiometer',
      items: [
        { ar: 'ذراع التحكّم', en: 'Joystick',
          line: 'يقيس ميل الذراع في اتجاهين، فتتحرّك الشخصية بقدره.',
          svg: V(`<path d="M22 58 h76 a8 8 0 0 1 8 8 v6 H14 v-6 a8 8 0 0 1 8-8 z" fill="${C.body}"/>
            <ellipse cx="60" cy="58" rx="20" ry="7" fill="${C.wire}"/>
            <path d="M60 56 l10-30" stroke="${C.metal}" stroke-width="7" stroke-linecap="round"/>
            <circle cx="72" cy="20" r="11" fill="${C.hot}"/>
            <circle cx="68" cy="16" r="3.4" fill="${C.light}" opacity=".7"/>
            <path d="M34 40 a30 30 0 0 1 12-16" stroke="${C.glow}" stroke-width="2.4"
                  fill="none" stroke-dasharray="3 3"/>
            <path d="M96 30 h10 M96 40 h10 M96 50 h10" stroke="${C.metal}" stroke-width="2.2"
                  stroke-linecap="round" opacity=".55"/>
            <rect x="14" y="20" width="16" height="24" rx="3" fill="${C.green}"/>
            <path d="M18 42 v6 M26 42 v6" stroke="${C.wire}" stroke-width="2.2"/>
            <path d="M18 32 h8" stroke="${C.light}" stroke-width="2.2"/>
            <path d="M22 26 l4 6-4 6-4-6 z" fill="${C.light}" opacity=".6"/>`) },

        { ar: 'مِزلاق طاولة الصوت', en: 'Mixer Fader',
          line: 'يُحرّك المِزلاق فتتغيّر المقاومة، فيعلو مسار واحد وحده.',
          svg: V(`<rect x="6" y="8" width="108" height="64" rx="6" fill="${C.body}"/>
            <rect x="18" y="16" width="8" height="44" rx="4" fill="${C.wire}"/>
            <rect x="42" y="16" width="8" height="44" rx="4" fill="${C.wire}"/>
            <rect x="66" y="16" width="8" height="44" rx="4" fill="${C.wire}"/>
            <rect x="90" y="16" width="8" height="44" rx="4" fill="${C.wire}"/>
            <rect x="12" y="42" width="20" height="9" rx="2.5" fill="${C.metal}"/>
            <rect x="36" y="22" width="20" height="9" rx="2.5" fill="${C.glow}"/>
            <rect x="60" y="50" width="20" height="9" rx="2.5" fill="${C.metal}"/>
            <rect x="84" y="36" width="20" height="9" rx="2.5" fill="${C.metal}"/>
            <rect x="16" y="64" width="12" height="4" rx="2" fill="${C.green}" opacity=".6"/>
            <rect x="40" y="64" width="12" height="4" rx="2" fill="${C.green}"/>
            <rect x="64" y="64" width="12" height="4" rx="2" fill="${C.green}" opacity=".35"/>
            <rect x="88" y="64" width="12" height="4" rx="2" fill="${C.green}" opacity=".5"/>
            <path d="M46 10 v-6 m0 0 l-3 4 m3-4 l3 4" stroke="${C.glow}" stroke-width="2"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'مقبض سرعة الخلّاط', en: 'Blender Speed Dial',
          line: 'يُدير المقبض فتقلّ المقاومة، فتزيد سرعة الشفرة.',
          svg: V(`<path d="M36 6 h34 v34 q0 8-8 8 H44 q-8 0-8-8 z" fill="${C.glass}" opacity=".8"
                  stroke="${C.metal}" stroke-width="2"/>
            <path d="M48 40 l5-12 5 12 z" fill="${C.metal}"/>
            <path d="M42 30 h22" stroke="${C.metal}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M40 16 q12 6 26 0" stroke="${C.green}" stroke-width="2.6" fill="none" opacity=".7"/>
            <path d="M30 48 h46 v10 a8 8 0 0 1-8 8 H38 a8 8 0 0 1-8-8 z" fill="${C.body}"/>
            <circle cx="94" cy="46" r="16" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="94" cy="46" r="10" fill="${C.body}"/>
            <line x1="94" y1="46" x2="102" y2="38" stroke="${C.hot}" stroke-width="3" stroke-linecap="round"/>
            <path d="M80 34 a20 20 0 0 1 28 0" stroke="${C.warm}" stroke-width="2.4"
                  fill="none" stroke-dasharray="3 3"/>
            <circle cx="80" cy="60" r="2.4" fill="${C.wire}"/>
            <circle cx="94" cy="64" r="2.4" fill="${C.wire}"/>
            <circle cx="108" cy="60" r="2.4" fill="${C.wire}"/>
            <path d="M12 34 q6 8 0 16 M4 30 q10 12 0 24" stroke="${C.wire}" stroke-width="2.4"
                  fill="none" stroke-linecap="round" opacity=".5"/>`) },

        { ar: 'مقود لعبة السباق', en: 'Racing Wheel',
          line: 'يقيس زاوية دوران المقود، فتنعطف السيارة بالقدر نفسه.',
          svg: V(`<circle cx="44" cy="40" r="30" fill="none" stroke="${C.body}" stroke-width="9"/>
            <circle cx="44" cy="40" r="9" fill="${C.body}"/>
            <path d="M44 40 l-24 12 M44 40 l24 12 M44 40 v-25" stroke="${C.body}" stroke-width="6"
                  stroke-linecap="round"/>
            <circle cx="44" cy="40" r="4" fill="${C.hot}"/>
            <path d="M22 14 a30 30 0 0 1 20-8" stroke="${C.glow}" stroke-width="2.6"
                  fill="none" stroke-dasharray="3 3"/>
            <path d="M18 20 l-6-4 m6 4 l1-7" stroke="${C.glow}" stroke-width="2.2"
                  fill="none" stroke-linecap="round"/>
            <rect x="82" y="16" width="34" height="48" rx="4" fill="${C.wire}"/>
            <path d="M86 60 q14-30 26-40" stroke="${C.light}" stroke-width="3" fill="none" opacity=".6"/>
            <path d="M112 60 q-6-24 0-40" stroke="${C.light}" stroke-width="3" fill="none" opacity=".6"/>
            <path d="M92 56 h12 v6 H92 z" fill="${C.hot}"/>
            <path d="M94 50 h8 l3 6 H91 z" fill="${C.hot}" opacity=".7"/>`) },

        { ar: 'مقبض القطار الكهربائي', en: 'Model Train Throttle',
          line: 'كلّما نقصت المقاومة زاد الجهد، فيُسرع القطار.',
          svg: V(`<rect x="6" y="30" width="46" height="40" rx="6" fill="${C.body}"/>
            <circle cx="29" cy="48" r="14" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="29" cy="48" r="8" fill="${C.wire}"/>
            <line x1="29" y1="48" x2="38" y2="42" stroke="${C.glow}" stroke-width="3" stroke-linecap="round"/>
            <path d="M15 36 h4 M43 36 h4 M12 48 h5 M41 60 h5" stroke="${C.metal}" stroke-width="2" stroke-linecap="round"/>
            <rect x="12" y="66" width="34" height="4" rx="2" fill="${C.green}"/>
            <path d="M52 44 h10" stroke="${C.hot}" stroke-width="2.6"/>
            <path d="M52 56 h10" stroke="${C.body}" stroke-width="2.6"/>
            <rect x="62" y="24" width="52" height="26" rx="4" fill="${C.hot}"/>
            <rect x="70" y="14" width="14" height="12" rx="2" fill="${C.body}"/>
            <rect x="92" y="30" width="16" height="10" rx="2" fill="${C.glass}"/>
            <circle cx="74" cy="52" r="6" fill="${C.body}"/><circle cx="74" cy="52" r="2.2" fill="${C.metal}"/>
            <circle cx="102" cy="52" r="6" fill="${C.body}"/><circle cx="102" cy="52" r="2.2" fill="${C.metal}"/>
            <rect x="56" y="60" width="60" height="5" fill="${C.metal}"/>
            <path d="M62 65 v6 M78 65 v6 M94 65 v6 M110 65 v6" stroke="${C.wire}" stroke-width="2.4"/>`) },

        { ar: 'مقبض زاوية الذراع الآلية', en: 'Servo Angle Dial',
          line: 'يقيس دوران المقبض، فتقف الذراع الآلية عند الزاوية نفسها.',
          svg: V(`<circle cx="28" cy="42" r="18" fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="28" cy="42" r="11" fill="${C.body}"/>
            <line x1="28" y1="42" x2="40" y2="34" stroke="${C.cool}" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M28 42 h18" stroke="${C.wire}" stroke-width="1.8" stroke-dasharray="2 3"/>
            <path d="M40 34 a15 15 0 0 0-3-6" stroke="${C.cool}" stroke-width="2" fill="none"/>
            <path d="M12 62 h32" stroke="${C.wire}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M46 40 h14 m0 0 l-5-4 m5 4 l-5 4" stroke="${C.green}" stroke-width="2.4"
                  fill="none" stroke-linecap="round"/>
            <rect x="66" y="56" width="34" height="16" rx="4" fill="${C.body}"/>
            <circle cx="83" cy="56" r="7" fill="${C.metal}"/>
            <path d="M83 56 l20-16" stroke="${C.warm}" stroke-width="8" stroke-linecap="round"/>
            <circle cx="103" cy="40" r="5" fill="${C.metal}"/>
            <path d="M103 40 l-6-14" stroke="${C.warm}" stroke-width="7" stroke-linecap="round"/>
            <path d="M97 26 l-8 -4 M97 26 l-2 -9" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
            <path d="M76 42 a20 20 0 0 1 8-10" stroke="${C.cool}" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`) }
      ]
    },

    /* ══════════════ الحسّاس عمومًا ══════════════ */
    sensor: {
      ar: 'الحسّاس', en: 'Sensor',
      items: [
        { ar: 'حسّاس رطوبة التربة', en: 'Soil Moisture Sensor',
          line: 'يقيس رطوبة التربة، فيُشغّل الريّ حين تجفّ حول الجذر.',
          svg: V(`<path d="M0 44 h120 v36 H0 z" fill="${C.skin}" opacity=".55"/>
            <rect x="24" y="30" width="12" height="42" rx="2" fill="${C.green}"/>
            <path d="M27 44 v24 M33 44 v24" stroke="${C.body}" stroke-width="1.8" opacity=".45"/>
            <rect x="22" y="20" width="16" height="12" rx="3" fill="${C.body}"/>
            <path d="M30 20 v-8 h16" stroke="${C.wire}" stroke-width="2.4" fill="none"/>
            <path d="M74 44 q-4-14 0-24 q6 8 0 24 z" fill="${C.green}"/>
            <path d="M74 34 q10-8 18-4 q-8 10-18 4 z" fill="${C.green}" opacity=".8"/>
            <path d="M74 38 q-10-8-18-4 q8 10 18 4 z" fill="${C.green}" opacity=".8"/>
            <path d="M74 44 v20" stroke="${C.skin}" stroke-width="3"/>
            <path d="M74 64 q-8 6-10 12 M74 64 q8 6 10 12" stroke="${C.skin}" stroke-width="2.4" fill="none"/>
            <circle cx="52" cy="56" r="3" fill="${C.cool}" opacity=".8"/>
            <circle cx="62" cy="66" r="2.4" fill="${C.cool}" opacity=".6"/>
            <circle cx="92" cy="58" r="2.6" fill="${C.cool}" opacity=".7"/>
            <path d="M100 12 q-6 8 0 12 q6-4 0-12 z" fill="${C.cool}"/>
            <path d="M108 24 q-5 7 0 10 q5-3 0-10 z" fill="${C.cool}" opacity=".75"/>`) },

        { ar: 'حسّاس الحركة في الممرّ', en: 'PIR Motion Sensor',
          line: 'يستقبل حرارة الجسم المتحرّك، فيُشعل مصباح الممرّ.',
          svg: V(`<line x1="4" y1="6" x2="116" y2="6" stroke="${C.wire}" stroke-width="4"/>
            <rect x="46" y="6" width="28" height="10" rx="3" fill="${C.metal}"/>
            <path d="M48 16 h24 l-4 10 H52 z" fill="${C.light}" stroke="${C.metal}" stroke-width="1.8"/>
            <path d="M52 20 h16 M54 24 h12" stroke="${C.wire}" stroke-width="1.4" opacity=".6"/>
            <path d="M52 26 L34 52 h52 L68 26 z" fill="${C.glow}" opacity=".28"/>
            <rect x="80" y="16" width="16" height="10" rx="3" fill="${C.body}"/>
            <path d="M80 26 q-8 10-4 18" stroke="${C.warm}" stroke-width="2.2"
                  fill="none" stroke-dasharray="3 3"/>
            <path d="M88 26 q0 12 -2 18" stroke="${C.warm}" stroke-width="2.2"
                  fill="none" stroke-dasharray="3 3" opacity=".6"/>
            <circle cx="80" cy="52" r="7" fill="${C.skin}"/>
            <path d="M80 59 q-9 3-9 12 v7 h18 v-7 q0-9-9-12 z" fill="${C.cool}"/>
            <path d="M71 66 l-8 8 M89 66 l8 8" stroke="${C.cool}" stroke-width="4" stroke-linecap="round"/>
            <line x1="4" y1="78" x2="116" y2="78" stroke="${C.wire}" stroke-width="2.6"/>`) },

        { ar: 'حسّاس الدخان', en: 'Smoke Detector',
          line: 'يقيس ما يحجبه الدخان من الضوء، فيُطلق صافرة الإنذار.',
          svg: V(`<line x1="4" y1="10" x2="116" y2="10" stroke="${C.wire}" stroke-width="4"/>
            <path d="M34 12 h52 a4 4 0 0 1 4 4 a24 24 0 0 1-30 22 a24 24 0 0 1-30-22 a4 4 0 0 1 4-4 z"
                  fill="${C.light}" stroke="${C.metal}" stroke-width="2.4"/>
            <circle cx="60" cy="26" r="7" fill="${C.body}"/>
            <path d="M56 26 h8" stroke="${C.glow}" stroke-width="2" stroke-linecap="round"/>
            <path d="M60 22 v8" stroke="${C.glow}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
            <circle cx="44" cy="22" r="2.6" fill="${C.hot}"/>
            <path d="M40 30 h6 M74 30 h6 M42 34 h4 M74 34 h4" stroke="${C.wire}" stroke-width="1.6"/>
            <path d="M28 46 q10-6 4-14 M20 56 q14-10 6-20 M14 66 q18-14 8-26"
                  stroke="${C.wire}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>
            <path d="M92 46 q-10-6-4-14 M100 56 q-14-10-6-20"
                  stroke="${C.wire}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".4"/>
            <path d="M60 76 q-10-6-8-16 q2-6 8-8 q-2 8 3 10 q6 3 4 9 q-1 4-7 5 z" fill="${C.warm}"/>
            <path d="M98 16 q7 5 0 10 M106 12 q13 9 0 18" stroke="${C.hot}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>`) },

        { ar: 'حسّاس المطر في السيارة', en: 'Rain Sensor',
          line: 'يقيس قطرات الماء على الزجاج، فتعمل المسّاحات وحدها.',
          svg: V(`<path d="M14 20 h92 l-10 44 H24 z" fill="${C.glass}" opacity=".7"
                  stroke="${C.metal}" stroke-width="2.4"/>
            <rect x="52" y="26" width="18" height="12" rx="3" fill="${C.body}"/>
            <path d="M56 32 h3 l1.4-3 1.6 6 1.4-3 h2.6" stroke="${C.glow}" stroke-width="1.5" fill="none"/>
            <path d="M28 64 L74 34" stroke="${C.wire}" stroke-width="3" stroke-linecap="round"/>
            <path d="M32 62 L76 32" stroke="${C.body}" stroke-width="5" stroke-linecap="round" opacity=".35"/>
            <circle cx="28" cy="64" r="4" fill="${C.body}"/>
            <path d="M40 22 a26 26 0 0 1 30 2" stroke="${C.light}" stroke-width="2.4"
                  fill="none" stroke-dasharray="3 4" opacity=".7"/>
            <path d="M24 8 q-4 6 0 8 q4-4 0-8 z" fill="${C.cool}"/>
            <path d="M44 6 q-4 6 0 8 q4-4 0-8 z" fill="${C.cool}" opacity=".8"/>
            <path d="M76 8 q-4 6 0 8 q4-4 0-8 z" fill="${C.cool}"/>
            <path d="M96 6 q-4 6 0 8 q4-4 0-8 z" fill="${C.cool}" opacity=".8"/>
            <path d="M86 44 q-3 5 0 7 q3-3 0-7 z" fill="${C.cool}" opacity=".7"/>
            <path d="M40 46 q-3 5 0 7 q3-3 0-7 z" fill="${C.cool}" opacity=".55"/>
            <line x1="6" y1="70" x2="114" y2="70" stroke="${C.wire}" stroke-width="4"/>`) },

        { ar: 'حسّاس الصوت', en: 'Sound Sensor',
          line: 'يقيس شدّة الصوت، فيُضيء المصباح عند التصفيق.',
          svg: V(`<circle cx="30" cy="42" r="18" fill="${C.body}"/>
            <circle cx="30" cy="42" r="12" fill="${C.wire}"/>
            <path d="M22 36 h16 M22 42 h16 M22 48 h16" stroke="${C.metal}" stroke-width="2" opacity=".8"/>
            <rect x="26" y="60" width="8" height="14" rx="2" fill="${C.metal}"/>
            <path d="M4 32 q-6 10 0 20" stroke="${C.cool}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M12 28 q-8 14 0 28" stroke="${C.cool}" stroke-width="2.6" fill="none"
                  stroke-linecap="round" opacity=".6"/>
            <path d="M54 30 h8 v24 h-8 z" fill="${C.green}" opacity=".45"/>
            <path d="M54 54 h8 v-10 h-8 z" fill="${C.green}"/>
            <path d="M66 22 h8 v32 h-8 z" fill="${C.green}" opacity=".45"/>
            <path d="M66 54 h8 v-22 h-8 z" fill="${C.green}"/>
            <path d="M78 34 h8 v20 h-8 z" fill="${C.green}" opacity=".45"/>
            <path d="M78 54 h8 v-8 h-8 z" fill="${C.green}"/>
            <line x1="50" y1="54" x2="92" y2="54" stroke="${C.wire}" stroke-width="2.4"/>
            <circle cx="104" cy="30" r="10" fill="${C.glow}"/>
            <circle cx="104" cy="30" r="5" fill="${C.light}" opacity=".85"/>
            <path d="M104 14 v-5 M92 18 l-4-4 M116 18 l4-4" stroke="${C.glow}"
                  stroke-width="2.4" stroke-linecap="round"/>
            <rect x="100" y="40" width="8" height="10" rx="2" fill="${C.metal}"/>`) },

        { ar: 'حسّاس الميل في الهاتف', en: 'Tilt Sensor',
          line: 'يقيس ميل الجهاز، فتدور الصورة مع دوران اليد.',
          svg: V(`<rect x="8" y="14" width="34" height="54" rx="6" fill="${C.body}"/>
            <rect x="12" y="20" width="26" height="42" rx="2" fill="${C.glass}"/>
            <path d="M16 54 l7-10 5 6 4-6 6 10 z" fill="${C.green}"/>
            <circle cx="20" cy="28" r="3" fill="${C.glow}"/>
            <path d="M50 40 a14 14 0 0 1 20-14" stroke="${C.warm}" stroke-width="2.6" fill="none"/>
            <path d="M70 26 l-6 0 M70 26 l0 6" stroke="${C.warm}" stroke-width="2.6"
                  fill="none" stroke-linecap="round"/>
            <rect x="76" y="22" width="40" height="34" rx="6" fill="${C.body}"/>
            <rect x="80" y="26" width="32" height="26" rx="2" fill="${C.glass}"/>
            <path d="M84 48 l8-12 6 7 5-7 7 12 z" fill="${C.green}"/>
            <circle cx="88" cy="32" r="3" fill="${C.glow}"/>
            <rect x="46" y="62" width="26" height="12" rx="3" fill="${C.wire}"/>
            <circle cx="53" cy="68" r="3" fill="${C.metal}"/>
            <path d="M60 68 h9" stroke="${C.metal}" stroke-width="2.2" stroke-linecap="round"/>`) }
      ]
    }

  };

  window.USES = Object.assign(window.USES || {}, MORE);
  if (window.renderUses) window.renderUses();
})();
