/* ============================================================
   معرض التطبيقات — أين نرى هذا العنصر في حياتنا؟
   الاستعمال في الدرس:
     <div class="uses" data-uses="motor"></div>

   قاعدة مُلزمة (STYLE.md §٣):
     • ٥ تطبيقات على الأقلّ لكل عنصر
     • لكل تطبيق رسمه الخاصّ — لا إيموجي مكان الرسم
     • لا رسم مشترك بين تطبيقين
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

  const USES = {

    /* ══════════════ المحرّك ══════════════ */
    motor: {
      ar: 'المحرّك', en: 'Motor',
      items: [
        { ar: 'مروحة السقف', en: 'Ceiling Fan',
          line: 'يُدير الريش، فيتحرّك الهواء ويبرد الغرفة.',
          svg: V(`<line x1="60" y1="6" x2="60" y2="24" stroke="${C.metal}" stroke-width="5"/>
            <ellipse cx="60" cy="30" rx="12" ry="9" fill="${C.body}"/>
            <ellipse cx="30" cy="34" rx="24" ry="6" fill="${C.cool}" opacity=".85"/>
            <ellipse cx="90" cy="34" rx="24" ry="6" fill="${C.cool}" opacity=".85"/>
            <ellipse cx="60" cy="52" rx="6" ry="20" fill="${C.cool}" opacity=".7"/>
            <circle cx="60" cy="30" r="4" fill="${C.glow}"/>
            <path d="M22 62 q8 8 16 0" stroke="${C.cool}" stroke-width="2.5" fill="none" opacity=".6"/>
            <path d="M46 66 q8 8 16 0" stroke="${C.cool}" stroke-width="2.5" fill="none" opacity=".6"/>
            <path d="M70 62 q8 8 16 0" stroke="${C.cool}" stroke-width="2.5" fill="none" opacity=".6"/>`) },

        { ar: 'السيارة اللعبة', en: 'Toy Car',
          line: 'يُدير العجلات، فتسير السيارة على الأرض.',
          svg: V(`<path d="M16 50 h88 v10 a4 4 0 0 1-4 4 H20 a4 4 0 0 1-4-4 z" fill="${C.hot}"/>
            <path d="M30 50 l10-16 h34 l12 16 z" fill="${C.hot}" opacity=".8"/>
            <path d="M42 48 l6-10 h20 l7 10 z" fill="${C.glass}"/>
            <circle cx="36" cy="64" r="11" fill="${C.body}"/><circle cx="36" cy="64" r="4.5" fill="${C.metal}"/>
            <circle cx="86" cy="64" r="11" fill="${C.body}"/><circle cx="86" cy="64" r="4.5" fill="${C.metal}"/>
            <path d="M8 40 h14 M6 48 h12" stroke="${C.metal}" stroke-width="3" stroke-linecap="round" opacity=".7"/>`) },

        { ar: 'الغسّالة', en: 'Washing Machine',
          line: 'يُدير الحلّة الداخلية، فتدور الثياب وتُغسل.',
          svg: V(`<rect x="24" y="10" width="72" height="62" rx="7" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="24" y="10" width="72" height="14" rx="7" fill="${C.metal}" opacity=".55"/>
            <circle cx="76" cy="17" r="3.5" fill="${C.green}"/><circle cx="87" cy="17" r="3.5" fill="${C.warm}"/>
            <circle cx="60" cy="46" r="20" fill="${C.body}"/>
            <circle cx="60" cy="46" r="15" fill="${C.glass}"/>
            <path d="M50 42 q10 8 20 0 q-10 10 -20 0" fill="#fff" opacity=".8"/>
            <circle cx="54" cy="50" r="3" fill="#fff" opacity=".9"/>
            <circle cx="66" cy="52" r="2.4" fill="#fff" opacity=".8"/>
            <path d="M60 30 a16 16 0 0 1 14 9" stroke="${C.glow}" stroke-width="3" fill="none" stroke-linecap="round"/>`) },

        { ar: 'باب المحلّ', en: 'Automatic Door',
          line: 'يسحب مِصراعَي الباب، فينفتحان أمامك.',
          svg: V(`<rect x="8" y="8" width="104" height="64" rx="3" fill="none" stroke="${C.metal}" stroke-width="3"/>
            <rect x="12" y="12" width="34" height="56" fill="${C.glass}" opacity=".75"/>
            <rect x="74" y="12" width="34" height="56" fill="${C.glass}" opacity=".75"/>
            <line x1="10" y1="12" x2="110" y2="12" stroke="${C.body}" stroke-width="5"/>
            <path d="M46 40 h-13 m0 0 l5-5 m-5 5 l5 5" stroke="${C.hot}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M74 40 h13 m0 0 l-5-5 m5 5 l-5 5" stroke="${C.hot}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="60" cy="20" r="4" fill="${C.green}"/>`) },

        { ar: 'مضخّة الماء', en: 'Water Pump',
          line: 'يدفع الماء من البئر إلى خزّان السطح.',
          svg: V(`<rect x="18" y="34" width="40" height="28" rx="6" fill="${C.body}"/>
            <circle cx="38" cy="48" r="9" fill="${C.metal}"/>
            <path d="M38 41 a7 7 0 0 1 6 4" stroke="${C.glow}" stroke-width="2.5" fill="none"/>
            <path d="M58 44 h20 v-30 h18" stroke="${C.cool}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="102" cy="14" r="4" fill="${C.cool}"/>
            <circle cx="104" cy="26" r="3.2" fill="${C.cool}" opacity=".8"/>
            <circle cx="100" cy="36" r="2.6" fill="${C.cool}" opacity=".6"/>
            <rect x="14" y="62" width="48" height="6" rx="2" fill="${C.metal}"/>`) },

        { ar: 'الطائرة المسيّرة', en: 'Drone',
          line: 'أربعة محرّكات تُدير المراوح، فترتفع في الهواء.',
          svg: V(`<rect x="48" y="34" width="24" height="16" rx="4" fill="${C.body}"/>
            <line x1="34" y1="26" x2="52" y2="38" stroke="${C.body}" stroke-width="4"/>
            <line x1="86" y1="26" x2="68" y2="38" stroke="${C.body}" stroke-width="4"/>
            <line x1="34" y1="58" x2="52" y2="46" stroke="${C.body}" stroke-width="4"/>
            <line x1="86" y1="58" x2="68" y2="46" stroke="${C.body}" stroke-width="4"/>
            <ellipse cx="32" cy="24" rx="15" ry="3.5" fill="${C.cool}" opacity=".85"/>
            <ellipse cx="88" cy="24" rx="15" ry="3.5" fill="${C.cool}" opacity=".85"/>
            <ellipse cx="32" cy="60" rx="15" ry="3.5" fill="${C.cool}" opacity=".85"/>
            <ellipse cx="88" cy="60" rx="15" ry="3.5" fill="${C.cool}" opacity=".85"/>
            <circle cx="32" cy="24" r="3" fill="${C.metal}"/><circle cx="88" cy="24" r="3" fill="${C.metal}"/>
            <circle cx="32" cy="60" r="3" fill="${C.metal}"/><circle cx="88" cy="60" r="3" fill="${C.metal}"/>
            <circle cx="60" cy="42" r="3.5" fill="${C.hot}"/>`) }
      ]
    },

    /* ══════════════ الليد ══════════════ */
    led: {
      ar: 'الليد', en: 'LED',
      items: [
        { ar: 'لوحة الإعلانات', en: 'LED Display',
          line: 'آلاف الليدات الصغيرة تُكوّن الحروف والصور.',
          svg: V(`<rect x="10" y="12" width="100" height="52" rx="5" fill="${C.body}"/>
            ${(() => { let d = ''; const on = new Set([1,2,3,8,11,15,18,22,25,26,27]);
              for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) {
                const i = r * 7 + c;
                d += `<circle cx="${22 + c * 13}" cy="${22 + r * 11}" r="3.6" fill="${on.has(i) ? C.hot : '#455A64'}"/>`;
              } return d; })()}
            <rect x="52" y="64" width="16" height="8" fill="${C.metal}"/>`) },

        { ar: 'مصباح الغرفة', en: 'LED Bulb',
          line: 'يُضيء الغرفة، ويستهلك كهرباء أقلّ من المصباح القديم.',
          svg: V(`<path d="M60 8 a24 24 0 0 1 17 41 v7 H43 v-7 A24 24 0 0 1 60 8 z" fill="${C.glow}" opacity=".9"/>
            <rect x="44" y="56" width="32" height="7" fill="${C.light}"/>
            <rect x="46" y="63" width="28" height="9" rx="2" fill="${C.metal}"/>
            <line x1="47" y1="66" x2="73" y2="66" stroke="${C.body}" stroke-width="1.6" opacity=".5"/>
            <line x1="47" y1="70" x2="73" y2="70" stroke="${C.body}" stroke-width="1.6" opacity=".5"/>
            <path d="M60 4 v-3 M84 14 l3-3 M36 14 l-3-3 M92 34 h4 M24 34 h-4"
                  stroke="${C.warm}" stroke-width="3" stroke-linecap="round"/>`) },

        { ar: 'إشارة المرور', en: 'Traffic Light',
          line: 'ثلاث مجموعات ليد تُنظّم سير السيارات.',
          svg: V(`<rect x="42" y="4" width="36" height="62" rx="7" fill="${C.body}"/>
            <circle cx="60" cy="18" r="9" fill="${C.hot}"/>
            <circle cx="60" cy="35" r="9" fill="#5D4037" opacity=".55"/>
            <circle cx="60" cy="52" r="9" fill="#1B5E20" opacity=".45"/>
            <path d="M78 18 h8 M78 13 h6 M78 23 h6" stroke="${C.hot}" stroke-width="2.5" stroke-linecap="round"/>
            <rect x="55" y="66" width="10" height="12" fill="${C.metal}"/>`) },

        { ar: 'ريموت التلفاز', en: 'TV Remote',
          line: 'ليد يُرسل ضوءًا لا تراه العين، فيفهمه التلفاز.',
          svg: V(`<rect x="40" y="6" width="30" height="68" rx="8" fill="${C.body}"/>
            <circle cx="55" cy="16" r="4.5" fill="${C.hot}"/>
            ${(() => { let d = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++)
              d += `<rect x="${45 + c * 12}" y="${28 + r * 10}" width="9" height="6" rx="2" fill="${C.metal}"/>`;
              return d; })()}
            <path d="M74 14 q10 4 0 10" stroke="${C.warm}" stroke-width="2.6" fill="none" opacity=".9"/>
            <path d="M82 10 q16 8 0 18" stroke="${C.warm}" stroke-width="2.6" fill="none" opacity=".6"/>
            <path d="M90 6 q22 12 0 26" stroke="${C.warm}" stroke-width="2.6" fill="none" opacity=".35"/>`) },

        { ar: 'ضوء الدرّاجة', en: 'Bicycle Light',
          line: 'ليد قويّ يجعل الدرّاجة مرئية في الليل.',
          svg: V(`<circle cx="34" cy="40" r="18" fill="${C.body}"/>
            <circle cx="34" cy="40" r="12" fill="${C.glow}"/>
            <circle cx="34" cy="40" r="6" fill="#fff" opacity=".9"/>
            <rect x="20" y="56" width="26" height="8" rx="3" fill="${C.metal}"/>
            <path d="M54 26 L104 12 M54 40 h52 M54 54 L104 68"
                  stroke="${C.glow}" stroke-width="3.5" stroke-linecap="round" opacity=".75"/>
            <path d="M54 33 L100 24 M54 47 L100 56" stroke="${C.glow}" stroke-width="2.4"
                  stroke-linecap="round" opacity=".45"/>`) },

        { ar: 'لمبة الشاحن', en: 'Charging Light',
          line: 'ليد صغير يخبرك أنّ الجهاز يشحن الآن.',
          svg: V(`<rect x="18" y="20" width="84" height="44" rx="8" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <rect x="26" y="30" width="46" height="24" rx="4" fill="${C.body}" opacity=".2"/>
            <path d="M46 34 l-8 12 h7 l-3 8 10 -12 h-7 z" fill="${C.warm}"/>
            <circle cx="88" cy="42" r="6" fill="${C.green}"/>
            <circle cx="88" cy="42" r="10" fill="${C.green}" opacity=".28"/>
            <circle cx="88" cy="42" r="14" fill="${C.green}" opacity=".13"/>
            <rect x="52" y="64" width="16" height="9" rx="2" fill="${C.metal}"/>`) }
      ]
    },

    /* ══════════════ المقاومة ══════════════ */
    resistor: {
      ar: 'المقاومة', en: 'Resistor',
      items: [
        { ar: 'حماية الليد', en: 'Protecting an LED',
          line: 'تُقلّل التيّار الداخل إلى الليد، فلا يحترق.',
          svg: V(`<line x1="6" y1="40" x2="30" y2="40" stroke="${C.wire}" stroke-width="3"/>
            <rect x="30" y="30" width="34" height="20" rx="9" fill="#D6B48A"/>
            <rect x="37" y="30" width="5" height="20" fill="#5D4037"/>
            <rect x="46" y="30" width="5" height="20" fill="${C.hot}"/>
            <rect x="55" y="30" width="5" height="20" fill="${C.warm}"/>
            <line x1="64" y1="40" x2="82" y2="40" stroke="${C.wire}" stroke-width="3"/>
            <path d="M82 30 a11 11 0 0 1 0 20 z" fill="${C.hot}"/>
            <line x1="82" y1="26" x2="82" y2="54" stroke="${C.hot}" stroke-width="3"/>
            <line x1="93" y1="40" x2="112" y2="40" stroke="${C.wire}" stroke-width="3"/>
            <path d="M96 22 l4-6 M104 24 l6-5" stroke="${C.glow}" stroke-width="2.6" stroke-linecap="round"/>
            <text x="60" y="68" font-size="11" text-anchor="middle" fill="${C.green}">✓ آمن</text>`) },

        { ar: 'مِخفِّت الإضاءة', en: 'Dimmer',
          line: 'تُدير القرص فتزيد المقاومة، فيخفت الضوء.',
          svg: V(`<circle cx="38" cy="40" r="22" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <circle cx="38" cy="40" r="15" fill="${C.body}"/>
            <line x1="38" y1="40" x2="27" y2="30" stroke="${C.glow}" stroke-width="4" stroke-linecap="round"/>
            <path d="M20 22 a24 24 0 0 1 36 0" stroke="${C.warm}" stroke-width="2.5" fill="none" stroke-dasharray="3 3"/>
            <path d="M74 26 a16 16 0 0 1 24 0 v22 H74 z" fill="${C.glow}" opacity=".35"/>
            <path d="M74 40 a16 16 0 0 1 24 0 v8 H74 z" fill="${C.glow}" opacity=".9"/>
            <rect x="76" y="48" width="20" height="6" fill="${C.metal}"/>
            <text x="86" y="68" font-size="10" text-anchor="middle" fill="${C.wire}">خافت</text>`) },

        { ar: 'مجفّف الشعر', en: 'Hair Dryer',
          line: 'سلك مقاوم يسخن بمرور الكهرباء، فيخرج هواء دافئ.',
          svg: V(`<path d="M14 26 h46 l22 12 -22 12 H14 a6 6 0 0 1-6-6 V32 a6 6 0 0 1 6-6 z" fill="${C.body}"/>
            <rect x="26" y="50" width="14" height="22" rx="4" fill="${C.body}" transform="rotate(14 33 60)"/>
            <path d="M60 30 h10 M60 38 h10 M60 46 h10" stroke="${C.hot}" stroke-width="3" stroke-linecap="round"/>
            <path d="M86 30 q10 4 0 8 M86 42 q10 4 0 8" stroke="${C.warm}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M98 28 q12 6 0 12 M98 44 q12 6 0 12" stroke="${C.warm}" stroke-width="2.6" fill="none" opacity=".6"/>
            <circle cx="18" cy="38" r="3" fill="${C.metal}"/>`) },

        { ar: 'زرّ الصوت', en: 'Volume Knob',
          line: 'مقاومة متغيّرة تُحدّد قوّة الصوت الخارج.',
          svg: V(`<rect x="8" y="16" width="104" height="48" rx="7" fill="${C.body}"/>
            <circle cx="34" cy="40" r="17" fill="${C.light}"/>
            <circle cx="34" cy="40" r="12" fill="${C.metal}"/>
            <line x1="34" y1="40" x2="43" y2="31" stroke="${C.hot}" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M68 32 l10-8 v32 l-10-8 h-6 v-16 z" fill="${C.light}"/>
            <path d="M84 32 q6 8 0 16" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <path d="M92 26 q11 14 0 28" stroke="${C.glow}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".65"/>
            <path d="M100 20 q16 20 0 40" stroke="${C.glow}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".35"/>`) },

        { ar: 'سخّان الماء', en: 'Water Heater',
          line: 'ملفّ مقاوم كبير يُحوّل الكهرباء إلى حرارة.',
          svg: V(`<rect x="26" y="8" width="68" height="64" rx="8" fill="${C.light}" stroke="${C.metal}" stroke-width="2.5"/>
            <path d="M30 40 h60 v26 a6 6 0 0 1-6 6 H36 a6 6 0 0 1-6-6 z" fill="${C.cool}" opacity=".45"/>
            <path d="M38 56 q6-8 12 0 t12 0 t12 0 t8 0" stroke="${C.hot}" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M46 34 q3-7 0-12 M60 32 q3-8 0-14 M74 34 q3-7 0-12"
                  stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <circle cx="84" cy="18" r="4" fill="${C.hot}"/>`) },

        { ar: 'سخّان زجاج السيارة', en: 'Rear Defogger',
          line: 'خطوط مقاومة رفيعة تُدفئ الزجاج فيزول الضباب.',
          svg: V(`<path d="M18 18 h84 l-8 46 H26 z" fill="${C.glass}" opacity=".7" stroke="${C.metal}" stroke-width="2.5"/>
            ${(() => { let d = ''; for (let i = 0; i < 5; i++)
              d += `<line x1="${24 + i * .8}" y1="${26 + i * 8}" x2="${96 - i * .8}" y2="${26 + i * 8}" stroke="${C.hot}" stroke-width="2.2" opacity=".85"/>`;
              return d; })()}
            <path d="M34 12 q3-6 0-9 M60 10 q3-6 0-9 M86 12 q3-6 0-9"
                  stroke="${C.metal}" stroke-width="2.2" fill="none" opacity=".55"/>`) }
      ]
    },

    /* ══════════════ البطارية ══════════════ */
    battery: {
      ar: 'البطارية', en: 'Battery',
      items: [
        { ar: 'ساعة الحائط', en: 'Wall Clock',
          line: 'بطارية واحدة تكفيها سنة كاملة.',
          svg: V(`<circle cx="60" cy="40" r="30" fill="${C.light}" stroke="${C.body}" stroke-width="3"/>
            <circle cx="60" cy="40" r="3" fill="${C.body}"/>
            <line x1="60" y1="40" x2="60" y2="22" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
            <line x1="60" y1="40" x2="75" y2="46" stroke="${C.hot}" stroke-width="2.6" stroke-linecap="round"/>
            <line x1="60" y1="14" x2="60" y2="19" stroke="${C.body}" stroke-width="2.4"/>
            <line x1="86" y1="40" x2="81" y2="40" stroke="${C.body}" stroke-width="2.4"/>
            <line x1="60" y1="66" x2="60" y2="61" stroke="${C.body}" stroke-width="2.4"/>
            <line x1="34" y1="40" x2="39" y2="40" stroke="${C.body}" stroke-width="2.4"/>
            <rect x="8" y="34" width="18" height="10" rx="2" fill="${C.green}"/>
            <rect x="26" y="37" width="3" height="4" fill="${C.metal}"/>`) },

        { ar: 'ريموت المكيّف', en: 'AC Remote',
          line: 'بطاريتان صغيرتان تُشغّلانه شهورًا.',
          svg: V(`<rect x="38" y="4" width="34" height="72" rx="7" fill="${C.light}" stroke="${C.metal}" stroke-width="2"/>
            <rect x="44" y="12" width="22" height="14" rx="3" fill="#B2DFDB"/>
            <text x="55" y="23" font-size="9" text-anchor="middle" fill="${C.body}">24°</text>
            ${(() => { let d = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++)
              d += `<circle cx="${48 + c * 14}" cy="${38 + r * 12}" r="4.4" fill="${C.metal}"/>`;
              return d; })()}
            <rect x="80" y="26" width="12" height="26" rx="2" fill="${C.green}"/>
            <rect x="83" y="22" width="6" height="4" fill="${C.metal}"/>
            <rect x="96" y="26" width="12" height="26" rx="2" fill="${C.green}"/>
            <rect x="99" y="22" width="6" height="4" fill="${C.metal}"/>`) },

        { ar: 'المصباح اليدوي', en: 'Flashlight',
          line: 'تُخزّن الكهرباء، فتُضيء أينما ذهبت.',
          svg: V(`<rect x="30" y="30" width="56" height="20" rx="5" fill="${C.body}"/>
            <path d="M86 24 l16 -6 v44 l-16 -6 z" fill="${C.metal}"/>
            <rect x="20" y="33" width="12" height="14" rx="3" fill="${C.hot}"/>
            <path d="M102 26 L118 20 M102 40 h16 M102 54 L118 60"
                  stroke="${C.glow}" stroke-width="3.4" stroke-linecap="round" opacity=".8"/>
            <rect x="40" y="35" width="30" height="10" rx="2" fill="${C.green}" opacity=".9"/>
            <text x="55" y="43" font-size="8" text-anchor="middle" fill="#fff">+   −</text>`) },

        { ar: 'الهاتف', en: 'Phone',
          line: 'بطارية تُعاد شحنها كل يوم.',
          svg: V(`<rect x="40" y="4" width="40" height="72" rx="8" fill="${C.body}"/>
            <rect x="45" y="12" width="30" height="54" rx="3" fill="${C.glass}"/>
            <rect x="54" y="7" width="12" height="3" rx="1.5" fill="${C.metal}"/>
            <circle cx="60" cy="71" r="3.4" fill="${C.metal}"/>
            <rect x="86" y="30" width="22" height="12" rx="3" fill="none" stroke="${C.green}" stroke-width="2.4"/>
            <rect x="108" y="33" width="4" height="6" rx="1" fill="${C.green}"/>
            <rect x="88" y="32" width="14" height="8" fill="${C.green}"/>
            <path d="M20 30 l-8 12 h7 l-3 10 10 -14 h-7 z" fill="${C.warm}"/>`) },

        { ar: 'السيارة', en: 'Car Battery',
          line: 'بطارية كبيرة تُدير المحرّك عند التشغيل.',
          svg: V(`<rect x="26" y="26" width="68" height="40" rx="5" fill="#263238"/>
            <rect x="26" y="26" width="68" height="10" rx="5" fill="#37474F"/>
            <rect x="36" y="18" width="12" height="10" rx="2" fill="${C.hot}"/>
            <rect x="72" y="18" width="12" height="10" rx="2" fill="${C.metal}"/>
            <text x="42" y="16" font-size="12" fill="${C.hot}" text-anchor="middle">+</text>
            <text x="78" y="16" font-size="12" fill="${C.cool}" text-anchor="middle">−</text>
            <text x="60" y="52" font-size="12" fill="${C.glow}" text-anchor="middle">12V</text>
            <path d="M100 40 h12 M104 34 l-4 6 4 6" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`) },

        { ar: 'لوح الشمس', en: 'Solar Power Bank',
          line: 'تُخزّن ما جمعه اللوح من ضوء الشمس نهارًا.',
          svg: V(`<rect x="14" y="20" width="46" height="34" rx="3" fill="#1A237E"/>
            ${(() => { let d = ''; for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++)
              d += `<rect x="${18 + c * 15}" y="${24 + r * 16}" width="12" height="13" fill="#3949AB"/>`;
              return d; })()}
            <path d="M22 12 v-6 M36 10 l4-5 M10 18 l-5-3" stroke="${C.glow}" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M60 37 h12 m0 0 l-5-4 m5 4 l-5 4" stroke="${C.warm}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
            <rect x="76" y="24" width="30" height="30" rx="5" fill="${C.green}"/>
            <rect x="82" y="32" width="18" height="6" rx="1.5" fill="#fff" opacity=".85"/>
            <rect x="82" y="42" width="11" height="6" rx="1.5" fill="#fff" opacity=".6"/>`) }
      ]
    }
  };

  /* ملفّات التوسعة (uses-*.js) تُسجّل عناصرها في window.USES قبل الرسم */
  window.USES = Object.assign(window.USES || {}, USES);

  /* ─────────── الرسم ─────────── */
  function render() {
    document.querySelectorAll('.uses[data-uses]').forEach((box) => {
      const u = window.USES[box.dataset.uses];
      if (!u) return;
      const cells = u.items.map((it) =>
        '<figure class="use">' +
          '<div class="use__svg">' + it.svg + '</div>' +
          '<figcaption class="use__cap">' +
            '<span class="use__ar">' + it.ar + '</span>' +
            '<span class="use__en">' + it.en + '</span>' +
            '<span class="use__line">' + it.line + '</span>' +
          '</figcaption>' +
        '</figure>').join('');

      box.innerHTML =
        '<div class="uses__head">أين نراه؟ <span class="uses__en">' + u.en + ' in Real Life</span></div>' +
        '<div class="uses__grid">' + cells + '</div>';
    });
  }

  window.renderUses = render;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
