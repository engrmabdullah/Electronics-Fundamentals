/* ============================================================
   مشاهد متحرّكة تشرح الفكرة بلا كلام — لطفل السادسة
   الاستعمال:  <div class="anim" data-anim="electrons"></div>
   ============================================================ */
(function () {
  'use strict';

  const A = {

    /* ⚡ إلكترونات تجري داخل سلك */
    electrons: {
      cap: 'الكهرباء تجري داخل السلك ⚡',
      svg: `
        <rect x="20" y="52" width="320" height="36" rx="18" fill="#CBD5E1"/>
        <rect x="26" y="58" width="308" height="24" rx="12" fill="#F1F5F9"/>
        ${[0,1,2,3,4,5].map(i => `
          <circle class="a-el" cx="40" cy="70" r="9" fill="#F59E0B"
                  style="animation-delay:${i * 0.35}s"/>
          <text class="a-elt" x="40" y="74" style="animation-delay:${i * 0.35}s">−</text>`).join('')}
        <text x="180" y="34" class="a-t">داخل السلك</text>`
    },

    /* 💧 ماء يجري في أنبوب — التشبيه */
    water: {
      cap: 'الكهرباء مثل الماء في الأنبوب 💧',
      svg: `
        <rect x="20" y="50" width="320" height="42" rx="21" fill="#BAE6FD"/>
        <rect x="20" y="50" width="320" height="42" rx="21" fill="none" stroke="#0EA5E9" stroke-width="3"/>
        ${[0,1,2,3,4,5,6].map(i => `
          <circle class="a-drop" cx="40" cy="71" r="10" fill="#0EA5E9"
                  style="animation-delay:${i * 0.3}s"/>`).join('')}
        <text x="180" y="32" class="a-t">أنبوب ماء</text>`
    },

    /* 🔋 البطارية تدفع */
    'battery-push': {
      cap: 'البطارية تدفع الكهرباء 🔋',
      svg: `
        <rect x="18" y="46" width="76" height="50" rx="8" fill="#2E3D6B"/>
        <rect x="18" y="46" width="76" height="14" rx="7" fill="#4356A0"/>
        <text x="56" y="80" class="a-bt">🔋</text>
        <rect x="100" y="60" width="240" height="22" rx="11" fill="#E2E8F0"/>
        ${[0,1,2,3,4].map(i => `
          <circle class="a-push" cx="110" cy="71" r="9" fill="#F59E0B"
                  style="animation-delay:${i * 0.4}s"/>`).join('')}
        <g class="a-arrow"><path d="M100 30 h60 l-12 -10 M160 30 l-12 10" stroke="#16A34A"
           stroke-width="4" fill="none" stroke-linecap="round"/></g>
        <text x="200" y="26" class="a-t">تدفع بقوّة!</text>`
    },

    /* 🚧 أنبوب ضيّق يُبطئ — المقاومة */
    narrow: {
      cap: 'الطريق الضيّق يُبطئ الجريان 🚧',
      svg: `
        <path d="M20 50 H150 L185 62 H195 L230 50 H340 V92 H230 L195 80 H185 L150 92 H20 Z"
              fill="#BAE6FD" stroke="#0EA5E9" stroke-width="3"/>
        ${[0,1,2,3].map(i => `
          <circle class="a-slow" cx="35" cy="71" r="9" fill="#0EA5E9"
                  style="animation-delay:${i * 0.55}s"/>`).join('')}
        <text x="190" y="112" class="a-t">هنا يبطئ</text>
        <text x="190" y="30" class="a-t">ضيّق!</text>`
    },

    /* 💡 مصباح يضيء ثم ينطفئ */
    lamp: {
      cap: 'المصباح يضيء عندما تصل الكهرباء 💡',
      svg: `
        <rect x="20" y="64" width="130" height="14" rx="7" fill="#CBD5E1"/>
        <rect x="250" y="64" width="130" height="14" rx="7" fill="#CBD5E1"/>
        ${[0,1,2,3].map(i => `
          <circle class="a-el" cx="30" cy="71" r="8" fill="#F59E0B"
                  style="animation-delay:${i * 0.4}s"/>`).join('')}
        <g transform="translate(200,71)">
          <circle class="a-bulb" r="42" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
            <line x1="0" y1="-54" x2="0" y2="-70"/><line x1="54" y1="0" x2="70" y2="0"/>
            <line x1="-54" y1="0" x2="-70" y2="0"/>
            <line x1="38" y1="-38" x2="50" y2="-50"/><line x1="-38" y1="-38" x2="-50" y2="-50"/>
          </g>
          <text y="12" class="a-bt">💡</text>
        </g>`,
      h: 150
    },

    /* ✂️ سلك مقطوع — لا شيء يمرّ */
    broken: {
      cap: 'السلك المقطوع لا تمرّ فيه كهرباء ⛔',
      svg: `
        <rect x="20" y="60" width="150" height="22" rx="11" fill="#CBD5E1"/>
        <rect x="230" y="60" width="150" height="22" rx="11" fill="#CBD5E1"/>
        ${[0,1,2].map(i => `
          <circle class="a-stop" cx="35" cy="71" r="9" fill="#F59E0B"
                  style="animation-delay:${i * 0.6}s"/>`).join('')}
        <text x="200" y="82" class="a-x">✂️</text>
        <text x="200" y="126" class="a-t">مقطوع!</text>`,
      h: 145
    },

    /* 🎈 البالون والشعر — الكهرباء الساكنة */
    balloon: {
      cap: 'البالون يجذب الشعر 🎈',
      svg: `
        <!-- الرأس -->
        <circle cx="90" cy="86" r="40" fill="#FCD9B6"/>
        <circle cx="78" cy="80" r="4" fill="#334155"/><circle cx="102" cy="80" r="4" fill="#334155"/>
        <path d="M78 98 q12 10 24 0" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- الشعر: ينجذب نحو البالون -->
        <g class="a-hair" stroke="#4B2E17" stroke-width="5" stroke-linecap="round">
          <path d="M62 54 q4 -22 10 -26"/>
          <path d="M78 46 q2 -24 8 -28"/>
          <path d="M96 46 q0 -24 6 -28"/>
          <path d="M112 54 q-2 -22 2 -26"/>
        </g>
        <!-- البالون -->
        <g class="a-balloon">
          <ellipse cx="250" cy="70" rx="34" ry="42" fill="#EF4444"/>
          <ellipse cx="238" cy="56" rx="9" ry="13" fill="#FCA5A5" opacity=".7"/>
          <path d="M250 112 q6 12 -4 22" stroke="#EF4444" stroke-width="3" fill="none"/>
        </g>
        <!-- شرارات -->
        <g class="a-spark">
          <text x="170" y="60" class="a-s">✨</text>
          <text x="190" y="96" class="a-s">✨</text>
        </g>`,
      h: 150
    },

    /* 🔀 التوالي مقابل التوازي */
    'series-vs-parallel': {
      cap: 'على التوالي: طريق واحد · على التوازي: طريقان 🔀',
      svg: `
        <text x="95" y="24" class="a-t">توالي</text>
        <rect x="24" y="44" width="150" height="10" rx="5" fill="#CBD5E1"/>
        <circle class="a-el" cx="34" cy="49" r="7" fill="#F59E0B"/>
        <circle cx="80"  cy="49" r="13" fill="#FDE68A" stroke="#334155" stroke-width="3"/>
        <circle cx="130" cy="49" r="13" fill="#FDE68A" stroke="#334155" stroke-width="3"/>
        <text x="95" y="80" class="a-tsm">ضوء ضعيف</text>

        <text x="285" y="24" class="a-t">توازي</text>
        <rect x="216" y="38" width="150" height="9" rx="5" fill="#CBD5E1"/>
        <rect x="216" y="72" width="150" height="9" rx="5" fill="#CBD5E1"/>
        <circle class="a-el" cx="226" cy="43" r="7" fill="#F59E0B" style="animation-delay:.2s"/>
        <circle class="a-el" cx="226" cy="77" r="7" fill="#F59E0B" style="animation-delay:.5s"/>
        <circle cx="290" cy="43" r="13" fill="#FCD34D" stroke="#334155" stroke-width="3"/>
        <circle cx="290" cy="77" r="13" fill="#FCD34D" stroke="#334155" stroke-width="3"/>
        <text x="285" y="104" class="a-tsm">ضوء قويّ</text>`,
      h: 120
    },

    /* 🤖 حسّ ← فكّر ← تحرّك */
    'robot-loop': {
      cap: 'الروبوت: يحسّ ← يفكّر ← يتحرّك 🤖',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="65" cy="70" r="42" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="65" y="82" class="a-bt">👁️</text>
          <text x="65" y="128" class="a-t">يحسّ</text>
        </g>
        <text x="130" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:.8s">
          <circle cx="200" cy="70" r="42" fill="#EDE9FE" stroke="#7C3AED" stroke-width="4"/>
          <text x="200" y="82" class="a-bt">🧠</text>
          <text x="200" y="128" class="a-t">يفكّر</text>
        </g>
        <text x="265" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:1.6s">
          <circle cx="335" cy="70" r="42" fill="#DCFCE7" stroke="#16A34A" stroke-width="4"/>
          <text x="335" y="82" class="a-bt">🦾</text>
          <text x="335" y="128" class="a-t">يتحرّك</text>
        </g>`,
      h: 150
    }
  };

  function build(box) {
    const a = A[box.dataset.anim];
    if (!a) { box.innerHTML = '<p style="padding:20px;text-align:center">؟</p>'; return; }
    box.innerHTML =
      `<svg class="anim__svg" viewBox="0 0 400 ${a.h || 130}">${a.svg}</svg>` +
      `<div class="anim__bar">
         <span class="anim__cap">${a.cap}</span>
         <button class="anim__btn" type="button">🔁 مرّة أخرى</button>
       </div>`;
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      const clone = svg.cloneNode(true);
      svg.replaceWith(clone);            // إعادة تشغيل كل الحركات
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   مشاهد إضافية لدروس 02 – 06 — إضافة فقط، لا تعديل على ما سبق
   hot-wire · push-weak-strong
   ============================================================ */
(function () {
  'use strict';

  const A2 = {

    /* 🔥 السلك الرفيع يسخن ويحمرّ — المقاومة */
    'hot-wire': {
      cap: 'الطريق الضيّق يسخن ويحمرّ 🔥',
      svg: `
        <rect x="20" y="58" width="130" height="26" rx="13" fill="#CBD5E1"/>
        <rect x="230" y="58" width="150" height="26" rx="13" fill="#CBD5E1"/>
        <rect x="150" y="66" width="80" height="10" rx="5" fill="#94A3B8"/>
        <rect class="a-rays" x="150" y="66" width="80" height="10" rx="5" fill="#EF4444"/>
        <g class="a-rays" stroke="#EF4444" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M160 46 q7 -9 14 0"/>
          <path d="M183 40 q7 -9 14 0"/>
          <path d="M206 46 q7 -9 14 0"/>
        </g>
        <g class="a-rays"><text x="310" y="44" class="a-bt">🔥</text></g>
        ${[0,1,2,3].map(i => `
          <circle class="a-slow" cx="32" cy="71" r="8" fill="#F59E0B"
                  style="animation-delay:${i * 0.55}s"/>`).join('')}
        <text x="72" y="34" class="a-tsm">سلك سميك</text>
        <text x="190" y="26" class="a-tsm">سلك رفيع</text>
        <text x="190" y="112" class="a-t">هنا يسخن!</text>`,
      h: 130
    },

    /* 🐢🐇 دفع خفيف مقابل دفع قويّ — فكرة الجهد */
    'push-weak-strong': {
      cap: 'كلما دفعت البطارية أقوى… جرت أسرع 🐇',
      svg: `
        <text x="210" y="18" class="a-tsm">🐢 دفع خفيف — جري بطيء</text>
        <rect x="14" y="26" width="40" height="28" rx="6" fill="#94A3B8"/>
        <text x="34" y="47" class="a-s">🔋</text>
        <rect x="58" y="34" width="322" height="13" rx="7" fill="#E2E8F0"/>
        ${[0,1,2].map(i => `
          <circle class="a-el" cx="68" cy="40" r="7" fill="#F59E0B"
                  style="animation-duration:4.2s;animation-delay:${i * 1.4}s"/>`).join('')}

        <text x="210" y="86" class="a-tsm">🐇 دفع قويّ — جري سريع</text>
        <rect x="10" y="94" width="52" height="40" rx="7" fill="#2E3D6B"/>
        <text x="36" y="122" class="a-bt">🔋</text>
        <rect x="66" y="107" width="314" height="16" rx="8" fill="#E2E8F0"/>
        ${[0,1,2,3,4].map(i => `
          <circle class="a-el" cx="78" cy="115" r="8" fill="#F59E0B"
                  style="animation-duration:1.5s;animation-delay:${i * 0.3}s"/>`).join('')}`,
      h: 145
    }
  };

  function build(box) {
    const a = A2[box.dataset.anim];
    if (!a) return;
    box.innerHTML =
      `<svg class="anim__svg" viewBox="0 0 400 ${a.h || 130}">${a.svg}</svg>` +
      `<div class="anim__bar">
         <span class="anim__cap">${a.cap}</span>
         <button class="anim__btn" type="button">🔁 مرّة أخرى</button>
       </div>`;
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافة — مشاهد قسم الحسّاسات (الدروس 18 إلى 23)
   إضافة فقط: لا شيء ممّا سبق تغيّر.
   الجديد: sense-map · day-night · hot-cold · echo-shout · bat-echo ·
           warm-walk · line-follow
   ============================================================ */
(function () {
  'use strict';

  const SCENES = {

    /* 👁️👂✋ حواسّك… وحواسّ الروبوت */
    'sense-map': {
      /* ⚠️ تصحيح: العين تقابل الكاميرا لا المصباح.
         الكاميرا تستقبل الضوء، والمصباح يُصدره — عكس تامّ (STYLE.md §١). */
      cap: 'لك حواسّ… وللروبوت ما يقابلها 👁️👂✋',
      h: 172,
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="70" cy="46" r="33" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="70" y="58" class="a-bt">👁️</text>
          <text x="70" y="102" class="a-ar">↓</text>
          <circle cx="70" cy="136" r="27" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="70" y="145" class="a-bt">📷</text>
        </g>
        <g class="a-step" style="animation-delay:.7s">
          <circle cx="200" cy="46" r="33" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="200" y="58" class="a-bt">👂</text>
          <text x="200" y="102" class="a-ar">↓</text>
          <circle cx="200" cy="136" r="27" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="200" y="145" class="a-bt">🎤</text>
        </g>
        <g class="a-step" style="animation-delay:1.4s">
          <circle cx="330" cy="46" r="33" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="330" y="58" class="a-bt">✋</text>
          <text x="330" y="102" class="a-ar">↓</text>
          <circle cx="330" cy="136" r="27" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="330" y="145" class="a-bt">🌡️</text>
        </g>`
    },

    /* ☀️🌙 نهار وليل — المصباح يعمل في الظلام */
    'day-night': {
      cap: 'في الظلام… يعمل المصباح 🌙💡',
      h: 152,
      svg: `
        <text x="100" y="22" class="a-t">نهار</text>
        <rect x="14" y="32" width="174" height="106" rx="14" fill="#FEF9C3" stroke="#F59E0B" stroke-width="3"/>
        <text x="58" y="88" class="a-bt">☀️</text>
        <circle cx="140" cy="76" r="24" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <text x="140" y="86" class="a-s">⚫</text>
        <text x="100" y="130" class="a-tsm">المصباح مطفأ</text>

        <text x="300" y="22" class="a-t">ليل</text>
        <rect x="212" y="32" width="174" height="106" rx="14" fill="#E0E7FF" stroke="#6366F1" stroke-width="3"/>
        <text x="256" y="88" class="a-bt">🌙</text>
        <g transform="translate(336,76)">
          <circle class="a-bulb" r="24" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="4" stroke-linecap="round">
            <line x1="0" y1="-32" x2="0" y2="-42"/>
            <line x1="32" y1="0" x2="42" y2="0"/>
            <line x1="-32" y1="0" x2="-42" y2="0"/>
            <line x1="23" y1="-23" x2="30" y2="-30"/>
          </g>
        </g>
        <text x="300" y="130" class="a-tsm">المصباح يضيء!</text>`
    },

    /* ❄️🔥 بارد وحارّ — المروحة تدور مع السخونة */
    'hot-cold': {
      cap: 'إذا سخن الجوّ… دارت المروحة 🔥🌀',
      h: 152,
      svg: `
        <text x="100" y="22" class="a-t">بارد</text>
        <rect x="14" y="32" width="174" height="106" rx="14" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="3"/>
        <text x="58" y="88" class="a-bt">❄️</text>
        <text x="140" y="88" class="a-bt" opacity=".45">🌀</text>
        <text x="100" y="130" class="a-tsm">المروحة متوقّفة</text>

        <text x="300" y="22" class="a-t">حارّ</text>
        <rect x="212" y="32" width="174" height="106" rx="14" fill="#FEE2E2" stroke="#EF4444" stroke-width="3"/>
        <text x="256" y="88" class="a-bt">🔥</text>
        <g class="a-step">
          <text x="338" y="88" class="a-bt">🌀</text>
          <g stroke="#0EA5E9" stroke-width="3" fill="none" stroke-linecap="round">
            <path d="M300 68 q-12 10 0 20"/>
            <path d="M290 62 q-16 14 0 32"/>
          </g>
        </g>
        <text x="300" y="130" class="a-tsm">المروحة تدور!</text>`
    },

    /* 🧒🏔️ نادِ في الوادي… يعود صوتك */
    'echo-shout': {
      cap: 'تنادي في الجبل… فيعود صوتك 🧒🏔️',
      h: 158,
      svg: `
        <text x="46" y="112" style="font-size:44px" text-anchor="middle">🧒</text>
        <text x="352" y="116" style="font-size:56px" text-anchor="middle">🏔️</text>
        ${[0,1,2].map(i => `
          <circle class="a-el" cx="82" cy="58" r="8" fill="#F59E0B"
                  style="animation-delay:${i * 0.4}s"/>`).join('')}
        <g transform="translate(400,0) scale(-1,1)">
          ${[0,1,2].map(i => `
            <circle class="a-drop" cx="58" cy="100" r="8" fill="#7C3AED"
                    style="animation-delay:${i * 0.4}s"/>`).join('')}
        </g>
        <text x="200" y="34" class="a-t">صوتك يذهب</text>
        <text x="200" y="146" class="a-t">وصداه يعود</text>`
    },

    /* 🦇 الخفّاش يصرخ ويسمع الصدى */
    'bat-echo': {
      cap: 'الخفّاش يصرخ… ويسمع الصدى 🦇',
      h: 158,
      svg: `
        <text x="48" y="106" style="font-size:44px" text-anchor="middle">🦇</text>
        <rect x="344" y="24" width="36" height="112" rx="4" fill="#94A3B8"/>
        <path d="M344 60 h36 M344 96 h36" stroke="#64748B" stroke-width="3"/>
        ${[0,1,2].map(i => `
          <circle class="a-el" cx="84" cy="56" r="8" fill="#F59E0B"
                  style="animation-delay:${i * 0.4}s"/>`).join('')}
        <g transform="translate(400,0) scale(-1,1)">
          ${[0,1,2].map(i => `
            <circle class="a-drop" cx="56" cy="102" r="8" fill="#7C3AED"
                    style="animation-delay:${i * 0.4}s"/>`).join('')}
        </g>
        <text x="200" y="32" class="a-t">الصوت يذهب</text>
        <text x="200" y="146" class="a-t">والصدى يعود</text>`
    },

    /* 🚶 جسم دافئ يمرّ أمام الحسّاس فيضيء النور */
    'warm-walk': {
      cap: 'يمرّ الدافئ… فيضيء النور 🚶💡',
      h: 172,
      svg: `
        <rect x="10" y="140" width="380" height="8" rx="4" fill="#CBD5E1"/>
        <g transform="translate(344,34)">
          <circle class="a-bulb" r="19" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="4" stroke-linecap="round">
            <line x1="0" y1="-26" x2="0" y2="-34"/>
            <line x1="26" y1="0" x2="34" y2="0"/>
            <line x1="-26" y1="0" x2="-34" y2="0"/>
          </g>
        </g>
        <rect x="306" y="70" width="76" height="46" rx="9" fill="#EDE9FE" stroke="#7C3AED" stroke-width="4"/>
        <text x="344" y="104" class="a-bt">📡</text>
        <g class="a-rays" stroke="#EF4444" stroke-width="3" fill="none" stroke-linecap="round">
          <path d="M288 82 q-13 11 0 22"/>
          <path d="M276 74 q-18 16 0 36"/>
        </g>
        <text class="a-bt a-el" x="30" y="136">🚶</text>
        <text x="150" y="34" class="a-t">جسمك دافئ 🔥</text>`
    },

    /* 🤖 روبوت يمشي فوق الخطّ الأسود */
    'line-follow': {
      cap: 'الروبوت يمشي فوق الخطّ الأسود 🤖',
      h: 150,
      svg: `
        <rect x="10" y="66" width="380" height="64" rx="8" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="3"/>
        <rect x="10" y="92" width="380" height="14" fill="#111827"/>
        <text class="a-bt a-el" x="40" y="84">🤖</text>
        <text x="200" y="34" class="a-t">حسّاس صغير يرى الخطّ</text>
        <text x="200" y="144" class="a-tsm">أبيض… أسود… أبيض</text>`
    }
  };

  function buildScene(box) {
    const a = SCENES[box.dataset.anim];
    if (!a) return;
    box.innerHTML =
      `<svg class="anim__svg" viewBox="0 0 400 ${a.h || 130}">${a.svg}</svg>` +
      `<div class="anim__bar">
         <span class="anim__cap">${a.cap}</span>
         <button class="anim__btn" type="button">🔁 مرّة أخرى</button>
       </div>`;
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      const clone = svg.cloneNode(true);
      svg.replaceWith(clone);
    });
  }

  function initScenes() { document.querySelectorAll('.anim[data-anim]').forEach(buildScene); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initScenes);
  else initScenes();
})();

/* ============================================================
   مشاهد إضافية لدروس 07 – 12 — لطفل السادسة
   (إضافة فقط: لا تعديل على أي مشهد سابق)
   ============================================================ */
(function () {
  'use strict';

  const MORE = {

    /* 🔗 الثقوب الخمسة متّصلة تحت اللوحة */
    'board-link': {
      cap: 'تحت الثقوب شريط يوصّلها 🔗',
      svg: `
        <text x="200" y="18" class="a-t">لوحة فيها ثقوب</text>
        <rect x="20" y="26" width="360" height="86" rx="12" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="3"/>
        <rect x="40" y="60" width="310" height="18" rx="9" fill="#FBBF24"/>
        <circle cx="70"  cy="69" r="9" fill="#475569"/>
        <circle cx="130" cy="69" r="9" fill="#475569"/>
        <circle cx="190" cy="69" r="9" fill="#475569"/>
        <circle cx="250" cy="69" r="9" fill="#475569"/>
        <circle cx="310" cy="69" r="9" fill="#475569"/>
        ${[0,1,2,3].map(i => `
          <circle class="a-el" cx="45" cy="69" r="7" fill="#F59E0B"
                  style="animation-delay:${i * 0.4}s"/>`).join('')}
        <text x="200" y="132" class="a-tsm">الخمسة صديقة… متّصلة معًا 🔗</text>`,
      h: 142
    },

    /* ➡️ بوّابة تفتح في اتجاه واحد فقط */
    'one-way': {
      cap: 'يمرّ في اتجاه واحد فقط ➡️',
      svg: `
        <text x="200" y="18" class="a-tsm">من هنا… يمرّ ✅</text>
        <rect x="20" y="34" width="360" height="20" rx="10" fill="#CBD5E1"/>
        <polygon points="188,26 188,62 216,44" fill="#334155"/>
        <line x1="220" y1="24" x2="220" y2="64" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
        ${[0,1,2,3].map(i => `
          <circle class="a-el" cx="30" cy="44" r="8" fill="#F59E0B"
                  style="animation-delay:${i * 0.4}s"/>`).join('')}
        <text x="358" y="24" class="a-s">🎉</text>

        <text x="150" y="92" class="a-s">🚫</text>
        <rect x="20" y="102" width="360" height="20" rx="10" fill="#CBD5E1"/>
        <polygon points="216,94 216,130 188,112" fill="#334155"/>
        <line x1="184" y1="92" x2="184" y2="132" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
        ${[0,1,2].map(i => `
          <circle class="a-stop" cx="50" cy="112" r="8" fill="#F59E0B"
                  style="animation-delay:${i * 0.5}s"/>`).join('')}
        <text x="200" y="156" class="a-tsm">ومن هنا… ممنوع ⛔</text>`,
      h: 168
    },

    /* 👆 تضغط ← تجري ← يضيء */
    'press-light': {
      cap: 'تضغط الزرّ… فيضيء المصباح 💡',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="335" cy="70" r="42" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="335" y="82" class="a-bt">👆</text>
          <text x="335" y="128" class="a-t">تضغط</text>
        </g>
        <text x="265" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:.8s">
          <circle cx="200" cy="70" r="42" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="200" y="82" class="a-bt">⚡</text>
          <text x="200" y="128" class="a-t">تجري</text>
        </g>
        <text x="130" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:1.6s">
          <circle cx="65" cy="70" r="42" fill="#DCFCE7" stroke="#16A34A" stroke-width="4"/>
          <text x="65" y="82" class="a-bt">💡</text>
          <text x="65" y="128" class="a-t">يضيء</text>
        </g>`,
      h: 150
    },

    /* 🔋 بطارية تُفرَغ شيئًا فشيئًا */
    'battery-empty': {
      cap: 'شحنة البطارية تنقص… ثم تنفد ⚠️',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <rect x="286" y="40" width="88" height="58" rx="10" fill="#2E3D6B"/>
          <rect x="292" y="46" width="76" height="46" rx="6" fill="#22C55E"/>
          <text x="330" y="126" class="a-t">ممتلئة</text>
        </g>
        <text x="258" y="76" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:.9s">
          <rect x="156" y="40" width="88" height="58" rx="10" fill="#2E3D6B"/>
          <rect x="162" y="46" width="38" height="46" rx="6" fill="#F59E0B"/>
          <text x="200" y="126" class="a-t">نصف</text>
        </g>
        <text x="128" y="76" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:1.8s">
          <rect x="26" y="40" width="88" height="58" rx="10" fill="#2E3D6B"/>
          <text x="70" y="82" class="a-bt">⛔</text>
          <text x="70" y="126" class="a-t">فارغة</text>
        </g>`,
      h: 140
    }
  };

  function build(box) {
    const a = MORE[box.dataset.anim];
    if (!a) return;
    box.innerHTML =
      `<svg class="anim__svg" viewBox="0 0 400 ${a.h || 130}">${a.svg}</svg>` +
      `<div class="anim__bar">
         <span class="anim__cap">${a.cap}</span>
         <button class="anim__btn" type="button">🔁 مرّة أخرى</button>
       </div>`;
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      const clone = svg.cloneNode(true);
      svg.replaceWith(clone);
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   مشاهد إضافية لدروس 30 – 37 (البرمجة والروبوت) — إضافة فقط
   blink-led · blink-steps · button-press · press-steps · night-sensor ·
   wheel-turn · motor-help · robot-vs-toy · robot-senses ·
   line-follow · line-turn · robot-wall · avoid-steps · robot-done
   ============================================================ */
(function () {
  'use strict';

  const A3 = {

    /* 💡 المصباح يومض: يضيء ثم ينطفئ */
    'blink-led': {
      cap: 'يضيء… ثم ينطفئ… ثم يضيء 💡',
      svg: `
        <rect x="26" y="66" width="120" height="14" rx="7" fill="#CBD5E1"/>
        <rect x="254" y="66" width="120" height="14" rx="7" fill="#CBD5E1"/>
        <g transform="translate(200,73)">
          <circle class="a-bulb" r="40" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
            <line x1="0" y1="-52" x2="0" y2="-68"/><line x1="52" y1="0" x2="68" y2="0"/>
            <line x1="-52" y1="0" x2="-68" y2="0"/>
            <line x1="37" y1="-37" x2="48" y2="-48"/><line x1="-37" y1="-37" x2="-48" y2="-48"/>
          </g>
          <text y="12" class="a-bt">💡</text>
        </g>
        <text x="200" y="146" class="a-t">وميض! ✨</text>`,
      h: 160
    },

    /* 1️⃣2️⃣3️⃣ خطوات الوميض الثلاث */
    'blink-steps': {
      cap: 'أضئ ← انتظر ← أطفئ 🔁',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="65" cy="70" r="42" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="65" y="82" class="a-bt">💡</text>
          <text x="65" y="128" class="a-t">أضئ</text>
        </g>
        <text x="130" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:.8s">
          <circle cx="200" cy="70" r="42" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="200" y="82" class="a-bt">⏳</text>
          <text x="200" y="128" class="a-t">انتظر</text>
        </g>
        <text x="265" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:1.6s">
          <circle cx="335" cy="70" r="42" fill="#E2E8F0" stroke="#64748B" stroke-width="4"/>
          <text x="335" y="82" class="a-bt">🌑</text>
          <text x="335" y="128" class="a-t">أطفئ</text>
        </g>`,
      h: 150
    },

    /* 👆 إصبع يضغط زرًّا فيردّ المصباح */
    'button-press': {
      cap: 'تضغط الزرّ… فيضيء المصباح 👆',
      svg: `
        <g style="animation: bob 1.3s ease-in-out infinite; transform-origin: 80px 40px">
          <text x="80" y="44" class="a-x">👇</text>
        </g>
        <rect x="46" y="62" width="70" height="28" rx="7" fill="#455A64"/>
        <circle cx="81" cy="62" r="14" fill="#E53935"/>
        <text x="81" y="112" class="a-t">زرّ</text>
        <rect x="116" y="70" width="130" height="12" rx="6" fill="#CBD5E1"/>
        <g class="a-arrow"><text x="180" y="60" class="a-s">⚡</text></g>
        <g transform="translate(300,76)">
          <circle class="a-bulb" r="34" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
            <line x1="0" y1="-44" x2="0" y2="-58"/><line x1="44" y1="0" x2="58" y2="0"/>
            <line x1="32" y1="-32" x2="42" y2="-42"/>
          </g>
          <text y="11" class="a-bt">💡</text>
        </g>`,
      h: 150
    },

    /* 👆 → 🧠 → 💡 اللوحة تسمع الزرّ */
    'press-steps': {
      cap: 'تضغط ← اللوحة تسمع ← المصباح يضيء 👂',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="65" cy="70" r="42" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="65" y="82" class="a-bt">👆</text>
          <text x="65" y="128" class="a-t">تضغط</text>
        </g>
        <text x="130" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:.8s">
          <circle cx="200" cy="70" r="42" fill="#EDE9FE" stroke="#7C3AED" stroke-width="4"/>
          <text x="200" y="82" class="a-bt">🧠</text>
          <text x="200" y="128" class="a-t">تسمع</text>
        </g>
        <text x="265" y="80" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:1.6s">
          <circle cx="335" cy="70" r="42" fill="#DCFCE7" stroke="#16A34A" stroke-width="4"/>
          <text x="335" y="82" class="a-bt">💡</text>
          <text x="335" y="128" class="a-t">يضيء</text>
        </g>`,
      h: 150
    },

    /* 🌙 أظلمت الدنيا فأضاء المصباح وحده */
    'night-sensor': {
      cap: 'أظلمت الدنيا… فأضاء المصباح وحده 🌙',
      svg: `
        <g style="animation: a-rays 3s ease-in-out infinite reverse">
          <text x="60" y="52" class="a-x">☀️</text>
        </g>
        <g class="a-rays"><text x="60" y="52" class="a-x">🌙</text></g>
        <text x="60" y="116" class="a-t">الجوّ</text>
        <circle cx="200" cy="70" r="36" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
        <text x="200" y="82" class="a-bt">👁️</text>
        <text x="200" y="126" class="a-t">الحسّاس ينظر</text>
        <g transform="translate(330,70)">
          <circle class="a-bulb" r="34" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
            <line x1="0" y1="-44" x2="0" y2="-58"/><line x1="44" y1="0" x2="58" y2="0"/>
            <line x1="32" y1="-32" x2="42" y2="-42"/>
          </g>
          <text y="11" class="a-bt">💡</text>
        </g>`,
      h: 145
    },

    /* 🔄 العجلة تدور أمامًا ثم خلفًا */
    'wheel-turn': {
      cap: 'العجلة تدور… وتستطيع أن ترجع 🔄',
      svg: `
        <g style="transform-origin: 120px 72px; animation: spin 1.6s linear infinite">
          <circle cx="120" cy="72" r="44" fill="#212121"/>
          <circle cx="120" cy="72" r="28" fill="#FBC02D"/>
          <line x1="120" y1="44" x2="120" y2="100" stroke="#F9A825" stroke-width="5"/>
          <line x1="92" y1="72" x2="148" y2="72" stroke="#F9A825" stroke-width="5"/>
          <circle cx="120" cy="72" r="8" fill="#455A64"/>
        </g>
        <text x="120" y="136" class="a-t">أمام ▶</text>
        <g style="transform-origin: 285px 72px; animation: spin 1.6s linear infinite reverse">
          <circle cx="285" cy="72" r="44" fill="#212121"/>
          <circle cx="285" cy="72" r="28" fill="#FBC02D"/>
          <line x1="285" y1="44" x2="285" y2="100" stroke="#F9A825" stroke-width="5"/>
          <line x1="257" y1="72" x2="313" y2="72" stroke="#F9A825" stroke-width="5"/>
          <circle cx="285" cy="72" r="8" fill="#455A64"/>
        </g>
        <text x="285" y="136" class="a-t">خلف ◀</text>`,
      h: 150
    },

    /* ⚠️ المحرّك يأخذ قوّته من البطارية لا من اللوحة */
    'motor-help': {
      cap: 'قوّة المحرّك من البطارية 🔋 لا من اللوحة',
      svg: `
        <text x="52" y="40" class="a-x">🤖</text>
        <text x="120" y="36" class="a-ar">←</text>
        <text x="185" y="40" class="a-x">⚙️</text>
        <g class="a-spark"><text x="250" y="40" class="a-x">💥</text></g>
        <text x="330" y="36" class="a-t">✕ خطأ</text>
        <line x1="20" y1="60" x2="380" y2="60" stroke="#DCE5F0" stroke-width="3"/>
        <g class="a-step" style="animation-delay:0s"><text x="52" y="112" class="a-x">🔋</text></g>
        <text x="120" y="108" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:.7s"><text x="185" y="112" class="a-x">🧰</text></g>
        <text x="250" y="108" class="a-ar">←</text>
        <g class="a-step" style="animation-delay:1.4s"><text x="310" y="112" class="a-x">⚙️</text></g>
        <text x="360" y="108" class="a-t">✓</text>`,
      h: 130
    },

    /* 🎮 لعبة أم 🤖 روبوت؟ */
    'robot-vs-toy': {
      cap: 'اللعبة تقودها أنت… والروبوت يقرّر وحده 🤖',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <text x="60" y="52" class="a-x">🎮</text>
          <text x="140" y="52" class="a-x">🚗</text>
          <text x="100" y="96" class="a-t">أنت تقرّر</text>
          <text x="100" y="122" class="a-tsm">لعبة — ليست روبوتًا</text>
        </g>
        <line x1="205" y1="16" x2="205" y2="128" stroke="#DCE5F0" stroke-width="3"/>
        <g class="a-step" style="animation-delay:1.1s">
          <text x="270" y="46" class="a-s">🧠</text>
          <text x="310" y="56" class="a-x">🤖</text>
          <text x="300" y="96" class="a-t">هو يقرّر</text>
          <text x="300" y="122" class="a-tsm">روبوت</text>
        </g>`,
      h: 140
    },

    /* 👁️ حواسّ الروبوت */
    'robot-senses': {
      cap: 'للروبوت حواسّ مثلك تمامًا 👁️',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="70" cy="62" r="40" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="70" y="74" class="a-bt">👁️</text>
          <text x="70" y="120" class="a-t">يرى الضوء</text>
        </g>
        <g class="a-step" style="animation-delay:.8s">
          <circle cx="200" cy="62" r="40" fill="#EDE9FE" stroke="#7C3AED" stroke-width="4"/>
          <text x="200" y="74" class="a-bt">📏</text>
          <text x="200" y="120" class="a-t">يقيس البعد</text>
        </g>
        <g class="a-step" style="animation-delay:1.6s">
          <circle cx="330" cy="62" r="40" fill="#DCFCE7" stroke="#16A34A" stroke-width="4"/>
          <text x="330" y="74" class="a-bt">🌡️</text>
          <text x="330" y="120" class="a-t">يشعر بالحرّ</text>
        </g>`,
      h: 138
    },

    /* ⬛ روبوت يمشي فوق خط أسود */
    'line-follow': {
      cap: 'الروبوت يمشي فوق الخط الأسود ⬛',
      svg: `
        <rect x="10" y="92" width="380" height="18" rx="9" fill="#111827"/>
        <text x="200" y="132" class="a-t">يتبع الخط</text>
        <g class="a-el">
          <text x="46" y="70" class="a-x">🤖</text>
          <circle cx="34" cy="86" r="6" fill="#2563EB"/>
          <circle cx="58" cy="86" r="6" fill="#2563EB"/>
        </g>`,
      h: 145
    },

    /* ↩️ مال عن الخط فرجع إليه */
    'line-turn': {
      cap: 'مال عن الخط… فرجع إليه ↩️',
      svg: `
        <path d="M10 100 H150 Q200 100 210 74 Q220 48 270 48 H390" stroke="#111827"
              stroke-width="17" fill="none" stroke-linecap="round"/>
        <g class="a-slow"><text x="46" y="90" class="a-x">🤖</text></g>
        <g class="a-spark"><text x="215" y="34" class="a-s">↩️</text></g>
        <text x="200" y="128" class="a-t">لفّ يسارًا! ↩️</text>`,
      h: 140
    },

    /* 🧱 يرى الجدار فيقف */
    'robot-wall': {
      cap: 'يرى الجدار… فيقف قبل أن يصطدم ⛔',
      svg: `
        <rect x="10" y="102" width="380" height="10" rx="5" fill="#CBD5E1"/>
        <text x="330" y="96" class="a-x">🧱</text>
        <g class="a-stop">
          <text x="46" y="90" class="a-x">🤖</text>
          <text x="86" y="66" class="a-s">📏</text>
        </g>
        <text x="200" y="136" class="a-t">قف! ⛔</text>`,
      h: 150
    },

    /* 🔄 خمس خطوات لتجنّب العائق */
    'avoid-steps': {
      cap: 'يرى ← يقف ← يرجع ← يلتفّ ← يكمل 🔄',
      svg: `
        <g class="a-step" style="animation-delay:0s">
          <circle cx="45" cy="56" r="34" fill="#FEE2E2" stroke="#DC2626" stroke-width="4"/>
          <text x="45" y="68" class="a-bt">🧱</text><text x="45" y="112" class="a-tsm">يرى</text>
        </g>
        <g class="a-step" style="animation-delay:.5s">
          <circle cx="127" cy="56" r="34" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="127" y="68" class="a-bt">⛔</text><text x="127" y="112" class="a-tsm">يقف</text>
        </g>
        <g class="a-step" style="animation-delay:1s">
          <circle cx="209" cy="56" r="34" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="209" y="68" class="a-bt">↩️</text><text x="209" y="112" class="a-tsm">يرجع</text>
        </g>
        <g class="a-step" style="animation-delay:1.5s">
          <circle cx="291" cy="56" r="34" fill="#EDE9FE" stroke="#7C3AED" stroke-width="4"/>
          <text x="291" y="68" class="a-bt">🔄</text><text x="291" y="112" class="a-tsm">يلتفّ</text>
        </g>
        <g class="a-step" style="animation-delay:2s">
          <circle cx="365" cy="56" r="34" fill="#DCFCE7" stroke="#16A34A" stroke-width="4"/>
          <text x="365" y="68" class="a-bt">➡️</text><text x="365" y="112" class="a-tsm">يكمل</text>
        </g>`,
      h: 128
    },

    /* 🎉 الروبوت جاهز ويتحرّك */
    'robot-done': {
      cap: 'روبوتك جاهز… ويتحرّك وحده! 🎉',
      svg: `
        <rect x="10" y="100" width="380" height="10" rx="5" fill="#CBD5E1"/>
        <g class="a-spark"><text x="120" y="42" class="a-s">✨</text></g>
        <g class="a-spark"><text x="250" y="34" class="a-s">🎉</text></g>
        <g class="a-el"><text x="50" y="94" class="a-x">🤖</text></g>
        <text x="200" y="134" class="a-t">أحسنت! 🏅</text>`,
      h: 150
    }
  };

  function build(box) {
    const a = A3[box.dataset.anim];
    if (!a) return;
    box.innerHTML =
      `<svg class="anim__svg" viewBox="0 0 400 ${a.h || 130}">${a.svg}</svg>` +
      `<div class="anim__bar">
         <span class="anim__cap">${a.cap}</span>
         <button class="anim__btn" type="button">🔁 مرّة أخرى</button>
       </div>`;
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافة — مشاهد متحرّكة للدروس 13 إلى 17 (طفل السادسة)
   إضافة فقط — لا يُعدَّل ما سبق.
   ============================================================ */
(function () {
  'use strict';

  const D = 4.5;                       /* طول المشهد بالثواني */

  /* شعاع مصباح */
  const rays = `<line x1="0" y1="-44" x2="0" y2="-58"/>
                <line x1="44" y1="0" x2="58" y2="0"/>
                <line x1="31" y1="-31" x2="41" y2="-41"/>
                <line x1="31" y1="31" x2="41" y2="41"/>`;

  const A2 = {

    /* 🪣 خزّان يمتلئ ببطء… ويفرغ فجأة */
    'cap-fill': {
      cap: 'يمتلئ ببطء… ثم يفرغ فجأة! 🪣',
      h: 152,
      svg: `
        <text x="34" y="84" style="font-size:34px;text-anchor:middle">🔋</text>
        <rect x="58" y="66" width="96" height="12" rx="6" fill="#CBD5E1"/>
        ${[0, 0.37, 0.74].map(b => `
          <circle cx="68" cy="72" r="7" fill="#F59E0B">
            <animate attributeName="cx" values="68;150" dur="1.1s" begin="${b}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;1;0;0;1"
                     keyTimes="0;0.60;0.63;0.95;1" dur="${D}s" repeatCount="indefinite"/>
          </circle>`).join('')}

        <rect x="152" y="26" width="96" height="94" rx="10" fill="#EFF6FF" stroke="#2563EB" stroke-width="4"/>
        <rect x="157" y="115" width="86" height="0" fill="#60A5FA">
          <animate attributeName="height" values="0;84;84;0;0"
                   keyTimes="0;0.60;0.64;0.68;1" dur="${D}s" repeatCount="indefinite"/>
          <animate attributeName="y" values="115;31;31;115;115"
                   keyTimes="0;0.60;0.64;0.68;1" dur="${D}s" repeatCount="indefinite"/>
        </rect>
        <text x="200" y="142" class="a-t">خزّان صغير</text>

        <rect x="248" y="66" width="48" height="12" rx="6" fill="#CBD5E1"/>
        <g transform="translate(332,72)">
          <circle r="32" fill="#E8EDF5" stroke="#334155" stroke-width="4">
            <animate attributeName="fill" values="#E8EDF5;#E8EDF5;#FDE047;#FDE047;#E8EDF5;#E8EDF5"
                     keyTimes="0;0.62;0.66;0.74;0.80;1" dur="${D}s" repeatCount="indefinite"/>
          </circle>
          <g stroke="#F59E0B" stroke-width="5" stroke-linecap="round" opacity="0">
            ${rays}
            <animate attributeName="opacity" values="0;0;1;1;0;0"
                     keyTimes="0;0.62;0.66;0.74;0.80;1" dur="${D}s" repeatCount="indefinite"/>
          </g>
          <text y="11" class="a-bt">💡</text>
        </g>`
    },

    /* 📸 الفلاش يجمع ثم يومض */
    'cap-flash': {
      cap: 'الفلاش يجمع… ثم يومض! 📸',
      h: 148,
      svg: `
        <text x="50" y="94" style="font-size:50px;text-anchor:middle">📷</text>
        <rect x="110" y="58" width="172" height="30" rx="15" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3"/>
        <rect x="114" y="62" width="0" height="22" rx="11" fill="#F59E0B">
          <animate attributeName="width" values="0;164;164;0;0"
                   keyTimes="0;0.64;0.70;0.74;1" dur="${D}s" repeatCount="indefinite"/>
        </rect>
        <text x="196" y="42" class="a-t">يمتلئ…</text>
        <g opacity="0">
          <text x="346" y="92" style="font-size:54px;text-anchor:middle">💥</text>
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.66;0.70;0.80;0.88;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <text x="346" y="128" class="a-t">ومض!</text>`
    },

    /* 👆 لمسة صغيرة تفتح بابًا كبيرًا */
    'small-big': {
      cap: 'لمسة صغيرة تفتح بابًا كبيرًا! 👆',
      h: 152,
      svg: `
        <g>
          <text x="46" y="62" style="font-size:34px;text-anchor:middle">👆</text>
          <animateTransform attributeName="transform" type="translate"
                            values="0 -12;0 -12;0 8;0 8;0 -12"
                            keyTimes="0;0.20;0.32;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <rect x="28" y="80" width="38" height="14" rx="7" fill="#94A3B8"/>
        <text x="46" y="116" class="a-tsm">لمسة صغيرة</text>
        <line x1="70" y1="87" x2="118" y2="87" stroke="#7C3AED" stroke-width="4" stroke-dasharray="7 6"/>

        <g>
          <rect x="124" y="24" width="22" height="106" rx="7" fill="#EF4444"/>
          <animateTransform attributeName="transform" type="translate"
                            values="0 0;0 0;0 -112;0 -112;0 0"
                            keyTimes="0;0.28;0.42;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </g>

        <rect x="152" y="62" width="238" height="44" rx="22" fill="#E2E8F0"/>
        <g opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.40;0.48;0.84;0.90;1" dur="${D}s" repeatCount="indefinite"/>
          ${[0, 0.43, 0.86].map(b => `
            <circle cx="172" cy="84" r="15" fill="#F59E0B">
              <animate attributeName="cx" values="172;374" dur="1.3s" begin="${b}s" repeatCount="indefinite"/>
            </circle>`).join('')}
        </g>
        <text x="272" y="136" class="a-t">تيّار كبير! 💪</text>`
    },

    /* 🤏 كان كبيرًا فصار صغيرًا */
    'tube-to-chip': {
      cap: 'كان كبيرًا جدًا… فصار صغيرًا! 🤏',
      h: 162,
      svg: `
        <g>
          <ellipse cx="78" cy="66" rx="38" ry="50" fill="#E0F2FE" stroke="#0284C7" stroke-width="4"/>
          <rect x="60" y="110" width="36" height="18" rx="4" fill="#94A3B8"/>
          <path d="M66 44 v42 M90 44 v42" stroke="#F97316" stroke-width="5" stroke-linecap="round"/>
          <animate attributeName="opacity" values="1;1;0.15;0.15;1"
                   keyTimes="0;0.32;0.48;0.90;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <text x="78" y="150" class="a-t">قديمًا: كبير</text>

        <text x="180" y="80" class="a-ar">←</text>

        <g>
          <path d="M282 46 h44 a5 5 0 0 1 5 5 v32 a5 5 0 0 1 -5 5 h-44 a5 5 0 0 1 -5 -5 v-32 a5 5 0 0 1 5 -5z"
                fill="#263238"/>
          <rect x="277" y="46" width="54" height="8" fill="#455A64"/>
          <path d="M292 88 v20 M304 88 v20 M316 88 v20" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          <text x="352" y="60" class="a-s">✨</text>
          <animate attributeName="opacity" values="0.15;0.15;1;1;0.15"
                   keyTimes="0;0.32;0.48;0.90;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <text x="304" y="150" class="a-t">اليوم: صغير جدًا</text>`
    },

    /* 🏙️ حبّة صغيرة وفيها مدينة */
    'chip-city': {
      cap: 'حبّة صغيرة… وفيها مدينة! 🏙️',
      h: 160,
      svg: `
        <rect x="30" y="52" width="78" height="52" rx="5" fill="#1B1B1B"/>
        ${(() => { let d = ''; for (let c = 0; c < 4; c++) {
            d += `<rect x="${38 + c * 17}" y="45" width="7" height="9" rx="1" fill="#B0BEC5"/>` +
                 `<rect x="${38 + c * 17}" y="102" width="7" height="9" rx="1" fill="#B0BEC5"/>`;
          } return d; })()}
        <text x="69" y="134" class="a-t">حبّة صغيرة</text>

        <text x="140" y="86" class="a-ar">←</text>

        <rect x="178" y="28" width="198" height="98" rx="12" fill="#0F172A" stroke="#38BDF8" stroke-width="4"/>
        ${(() => { let d = '', i = 0;
            for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++, i++) {
              d += `<rect x="${192 + c * 20}" y="${40 + r * 21}" width="12" height="11" rx="2" fill="#38BDF8" opacity="0">
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.8;1"
                               dur="2.6s" begin="${(i % 12) * 0.18}s" repeatCount="indefinite"/>
                    </rect>`;
            } return d; })()}
        <text x="277" y="150" class="a-t">مدينة كاملة! 🏙️</text>`
    },

    /* ✨ قطع كثيرة صارت حبّة واحدة */
    'many-to-one': {
      cap: 'قطع كثيرة… صارت حبّة واحدة! ✨',
      h: 158,
      svg: `
        ${(() => {
          const pts = [[38,34],[86,26],[34,80],[92,74],[46,120],[96,118]];
          const col = ['#F59E0B','#DC2626','#16A34A','#2563EB','#7C3AED','#EA580C'];
          return pts.map((p, i) => `
            <circle cx="${p[0]}" cy="${p[1]}" r="11" fill="${col[i]}">
              <animate attributeName="cx" values="${p[0]};${p[0]};300;300"
                       keyTimes="0;0.30;0.62;1" dur="${D}s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="${p[1]};${p[1]};78;78"
                       keyTimes="0;0.30;0.62;1" dur="${D}s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;1;1;0;0"
                       keyTimes="0;0.30;0.58;0.64;1" dur="${D}s" repeatCount="indefinite"/>
            </circle>`).join('');
        })()}
        <text x="66" y="150" class="a-t">قطع كثيرة</text>

        <text x="180" y="86" class="a-ar">←</text>

        <g>
          <rect x="262" y="52" width="78" height="52" rx="5" fill="#1B1B1B"/>
          ${(() => { let d = ''; for (let c = 0; c < 4; c++) {
              d += `<rect x="${270 + c * 17}" y="45" width="7" height="9" rx="1" fill="#B0BEC5"/>` +
                   `<rect x="${270 + c * 17}" y="102" width="7" height="9" rx="1" fill="#B0BEC5"/>`;
            } return d; })()}
          <text x="352" y="48" class="a-s">✨</text>
          <animate attributeName="opacity" values="0.2;0.2;1;1;0.2"
                   keyTimes="0;0.55;0.7;0.92;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <text x="301" y="150" class="a-t">حبّة واحدة</text>`
    },

    /* 🧲 المغناطيس يسحب الذراع فيضيء المصباح */
    'relay-pull': {
      cap: 'المغناطيس يسحب الذراع… فيضيء! 🧲',
      h: 166,
      svg: `
        <g>
          <rect x="36" y="40" width="178" height="13" rx="6" fill="#334155"/>
          <animateTransform attributeName="transform" type="rotate"
                            values="0 42 46;0 42 46;13 42 46;13 42 46;0 42 46"
                            keyTimes="0;0.24;0.36;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <circle cx="42" cy="46" r="8" fill="#0F172A"/>

        <rect x="96" y="78" width="68" height="54" rx="6" fill="#37474F"/>
        <path d="M102 90 h56 M102 102 h56 M102 114 h56 M102 125 h56"
              stroke="#90A4AE" stroke-width="4" stroke-linecap="round"/>
        <rect x="96" y="78" width="68" height="54" rx="6" fill="#DC2626" opacity="0">
          <animate attributeName="opacity" values="0;0;0.55;0.55;0"
                   keyTimes="0;0.20;0.34;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </rect>
        <text x="130" y="154" class="a-t">🧲 مغناطيس</text>

        <rect x="206" y="86" width="14" height="28" rx="3" fill="#DC2626"/>
        <rect x="214" y="106" width="88" height="12" rx="6" fill="#CBD5E1"/>

        <g transform="translate(344,96)">
          <circle r="32" fill="#E8EDF5" stroke="#334155" stroke-width="4">
            <animate attributeName="fill" values="#E8EDF5;#E8EDF5;#FDE047;#FDE047;#E8EDF5"
                     keyTimes="0;0.34;0.40;0.86;1" dur="${D}s" repeatCount="indefinite"/>
          </circle>
          <text y="11" class="a-bt">💡</text>
        </g>`
    },

    /* 🧱 جانبان لا يتلامسان */
    'two-sides': {
      cap: 'جانبان… لا يتلامسان أبدًا! 🧱',
      h: 160,
      svg: `
        <path d="M40 42 H158 V118 H40 Z" fill="none" stroke="#CBD5E1" stroke-width="10" stroke-linejoin="round"/>
        ${[0, 0.9, 1.8].map(b => `
          <circle r="8" fill="#F59E0B">
            <animateMotion dur="2.7s" begin="${b}s" repeatCount="indefinite" path="M40 42 H158 V118 H40 Z"/>
          </circle>`).join('')}
        <text x="99" y="150" class="a-t">🔋 صغيرة وآمنة</text>

        <line x1="200" y1="22" x2="200" y2="132" stroke="#7C3AED" stroke-width="5" stroke-dasharray="9 8"/>
        <text x="200" y="16" class="a-tsm">لا يتلامسان</text>

        <path d="M242 42 H360 V118 H242 Z" fill="none" stroke="#CBD5E1" stroke-width="10" stroke-linejoin="round"/>
        ${[0, 0.9, 1.8].map(b => `
          <circle r="8" fill="#EF4444">
            <animateMotion dur="2.7s" begin="${b}s" repeatCount="indefinite" path="M242 42 H360 V118 H242 Z"/>
          </circle>`).join('')}
        <text x="301" y="150" class="a-t">⚡ كبيرة وقويّة</text>`
    },

    /* 🔊 الغشاء يهتزّ فيخرج الصوت */
    'buzzer-shake': {
      cap: 'يهتزّ بسرعة… فيخرج الصوت! 🔊',
      h: 156,
      svg: `
        <g>
          <circle cx="104" cy="76" r="46" fill="#263238"/>
          <circle cx="104" cy="76" r="10" fill="#78909C"/>
          <animateTransform attributeName="transform" type="translate"
                            values="-4 0;4 0;-4 0" dur="0.14s" repeatCount="indefinite"/>
        </g>
        <text x="104" y="146" class="a-t">🔔 يهتزّ</text>
        ${[[168, 46, 110, 40, 0], [200, 30, 126, 60, 0.5], [232, 14, 142, 80, 1]].map(w => `
          <path d="M${w[0]} ${w[1]} a${w[3]} ${w[3]} 0 0 1 0 ${w[2] - w[1]}"
                fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="${w[4]}s" repeatCount="indefinite"/>
          </path>`).join('')}
        <text x="336" y="92" style="font-size:44px;text-anchor:middle">👂</text>`
    },

    /* 🎵 المخروط يدفع الهواء */
    'speaker-cone': {
      cap: 'المخروط يدفع الهواء ذهابًا وإيابًا 🎵',
      h: 158,
      svg: `
        <rect x="26" y="54" width="42" height="46" rx="5" fill="#37474F"/>
        <circle cx="47" cy="77" r="11" fill="#90A4AE"/>
        <text x="47" y="130" class="a-tsm">🧲 مغناطيس</text>
        <g>
          <path d="M68 42 L134 20 V134 L68 112 Z" fill="#8D6E63"/>
          <path d="M68 42 L134 20 V30 L68 52 Z" fill="#A1887F"/>
          <animateTransform attributeName="transform" type="translate"
                            values="0 0;18 0;0 0" dur="0.55s" repeatCount="indefinite"/>
        </g>
        ${[0, 0.4, 0.8, 1.2].map(b => `
          <circle cx="164" cy="77" r="9" fill="#93C5FD">
            <animate attributeName="cx" values="164;330" dur="1.6s" begin="${b}s" repeatCount="indefinite"/>
          </circle>`).join('')}
        <text x="230" y="146" class="a-t">هواء يهتزّ</text>
        <text x="362" y="90" style="font-size:40px;text-anchor:middle">🎵</text>`
    },

    /* 🐘🐭 سريع وبطيء */
    'fast-slow': {
      cap: 'سريع = حادّ · بطيء = غليظ 🎵',
      h: 160,
      svg: `
        <text x="36" y="46" style="font-size:32px;text-anchor:middle">🐘</text>
        <rect x="72" y="28" width="232" height="12" rx="6" fill="#E2E8F0"/>
        <circle cx="86" cy="34" r="12" fill="#2563EB">
          <animate attributeName="cx" values="86;288;86" dur="2.6s" repeatCount="indefinite"/>
        </circle>
        <text x="350" y="42" class="a-tsm">غليظ</text>

        <text x="36" y="120" style="font-size:32px;text-anchor:middle">🐭</text>
        <rect x="72" y="102" width="232" height="12" rx="6" fill="#E2E8F0"/>
        <circle cx="86" cy="108" r="12" fill="#DC2626">
          <animate attributeName="cx" values="86;288;86" dur="0.5s" repeatCount="indefinite"/>
        </circle>
        <text x="350" y="116" class="a-tsm">حادّ</text>

        <text x="200" y="150" class="a-t">بطيء = غليظ · سريع = حادّ</text>`
    }
  };

  function build(box) {
    const a = A2[box.dataset.anim];
    if (!a) return;
    box.innerHTML =
      `<svg class="anim__svg" viewBox="0 0 400 ${a.h || 130}">${a.svg}</svg>` +
      `<div class="anim__bar">
         <span class="anim__cap">${a.cap}</span>
         <button class="anim__btn" type="button">🔁 مرّة أخرى</button>
       </div>`;
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));      // إعادة تشغيل المشهد
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   مشاهد متحرّكة إضافية — دروس 24 إلى 29 (لطفل السادسة)
   (إضافة فقط: لا تعديل على أي مشهد سابق)
   ============================================================ */
(function () {
  'use strict';

  const MORE = {

    /* 🔎 الجهاز يخبرنا بما لا نراه */
    'meter-look': {
      cap: 'الجهاز يخبرنا بما لا نراه 🔎',
      h: 155,
      svg: `
        <rect x="18" y="32" width="150" height="104" rx="16" fill="#F9A825" stroke="#8D6E63" stroke-width="3"/>
        <rect x="34" y="46" width="118" height="44" rx="7" fill="#12291F"/>
        <text x="93" y="80" class="a-bt">🔎
          <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.45;0.5;1"
                   dur="3s" repeatCount="indefinite"/></text>
        <text x="93" y="80" class="a-bt" opacity="0">⚡
          <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.45;0.5;1"
                   dur="3s" repeatCount="indefinite"/></text>
        <circle cx="93" cy="112" r="14" fill="#263238"/>
        <line x1="93" y1="112" x2="93" y2="101" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M168 60 H206" stroke="#E53935" stroke-width="6" stroke-linecap="round"/>
        <path d="M168 108 H206" stroke="#1F2937" stroke-width="6" stroke-linecap="round"/>
        <circle cx="210" cy="60" r="8" fill="#E53935"/>
        <circle cx="210" cy="108" r="8" fill="#1F2937"/>
        <rect x="226" y="42" width="152" height="84" rx="14" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3"/>
        <text x="302" y="98" class="a-x">🔌</text>`
    },

    /* 🔔 اختبار السلك بالصفير */
    'beep-test': {
      cap: 'صفير! السلك سليم 🔔',
      h: 150,
      svg: `
        <rect x="60" y="68" width="280" height="22" rx="11" fill="#CBD5E1"/>
        <circle cx="60" cy="79" r="12" fill="#E53935"/>
        <circle cx="340" cy="79" r="12" fill="#1F2937"/>
        <g class="a-spark">
          <text x="200" y="44" class="a-x">🔔</text>
          <text x="146" y="44" class="a-s">✨</text>
          <text x="254" y="44" class="a-s">✨</text>
        </g>
        <text x="200" y="126" class="a-t">السلك سليم ✅</text>`
    },

    /* ⛔ لا نلمس المقبس */
    'no-touch': {
      cap: 'المقبس خطر ⛔ والبطارية آمنة ✅',
      h: 160,
      svg: `
        <rect x="136" y="34" width="92" height="92" rx="16" fill="#F1F5F9" stroke="#94A3B8" stroke-width="4"/>
        <circle cx="162" cy="70" r="9" fill="#334155"/>
        <circle cx="202" cy="70" r="9" fill="#334155"/>
        <path d="M162 100 h40" stroke="#334155" stroke-width="7" stroke-linecap="round"/>
        <g>
          <animateTransform attributeName="transform" type="translate"
                            values="0 0;36 0;36 0;0 0;0 0" keyTimes="0;0.35;0.45;0.7;1"
                            dur="3s" repeatCount="indefinite"/>
          <text x="70" y="92" class="a-x">🤚</text>
        </g>
        <text x="182" y="26" class="a-x" opacity="0">⛔
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.35;0.45;0.85;1"
                   dur="3s" repeatCount="indefinite"/></text>
        <line x1="262" y1="26" x2="262" y2="134" stroke="#E2E8F0" stroke-width="4"/>
        <text x="330" y="88" class="a-x">🔋</text>
        <text x="330" y="126" class="a-t">آمنة ✅</text>`
    },

    /* 🧰 أدواتنا */
    'tools-row': {
      cap: 'أدواتنا الصغيرة 🧰',
      h: 140,
      svg: `
        ${[['✂️', 'نقصّ'], ['🔧', 'نكشط'], ['🪛', 'نفكّ'], ['🤏', 'نمسك']].map((t, i) => `
        <g class="a-step" style="animation-delay:${i * 0.5}s">
          <circle cx="${56 + i * 78}" cy="58" r="30" fill="#EEF2FF" stroke="#6366F1" stroke-width="3"/>
          <text x="${56 + i * 78}" y="70" class="a-bt">${t[0]}</text>
          <text x="${56 + i * 78}" y="112" class="a-tsm">${t[1]}</text>
        </g>`).join('')}
        <g class="a-step" style="animation-delay:2s">
          <circle cx="358" cy="58" r="30" fill="#FEE2E2" stroke="#EF4444" stroke-width="3"/>
          <text x="358" y="70" class="a-bt">🔥</text>
          <text x="358" y="112" class="a-tsm">للكبار</text>
        </g>`
    },

    /* 🔁 العلامة تتحوّل إلى القطعة الحقيقية */
    'symbol-morph': {
      cap: 'العلامة… والقطعة الحقيقية 🔁',
      h: 150,
      svg: `
        <text x="70" y="92" class="a-x">🔁</text>
        <g>
          <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.4;0.5;0.9;1"
                   dur="4.5s" repeatCount="indefinite"/>
          <line x1="170" y1="42" x2="170" y2="106" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
          <line x1="198" y1="58" x2="198" y2="90" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
          <line x1="226" y1="42" x2="226" y2="106" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
          <line x1="254" y1="58" x2="254" y2="90" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
          <line x1="140" y1="74" x2="170" y2="74" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
          <line x1="254" y1="74" x2="284" y2="74" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
        </g>
        <g opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.4;0.5;0.9;1"
                   dur="4.5s" repeatCount="indefinite"/>
          <rect x="156" y="42" width="106" height="64" rx="12" fill="#2E3D6B"/>
          <rect x="156" y="42" width="106" height="20" rx="10" fill="#4356A0"/>
          <rect x="262" y="62" width="14" height="22" rx="4" fill="#C9CEE0"/>
          <text x="209" y="92" class="a-bt">🔋</text>
        </g>
        <text x="209" y="136" class="a-t">هذه هي نفسها!</text>`
    },

    /* 👆 امشِ على الطريق */
    'trace-path': {
      cap: 'امشِ بإصبعك على الطريق 👆',
      h: 150,
      svg: `
        <path d="M70 40 H330 V110 H70 Z" fill="none" stroke="#CBD5E1" stroke-width="11" stroke-linejoin="round"/>
        <line x1="58" y1="58" x2="58" y2="92" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
        <line x1="82" y1="66" x2="82" y2="84" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
        <circle cx="330" cy="75" r="22" fill="#FDE047" stroke="#334155" stroke-width="4"/>
        <text x="330" y="85" class="a-s">💡</text>
        <text class="a-bt">👆
          <animateMotion dur="5s" repeatCount="indefinite" path="M70 40 H330 V110 H70 Z"/></text>
        <text x="200" y="136" class="a-t">من البطارية… إلى المصباح</text>`
    },

    /* 🧠 اللوحة تقول مرحبًا */
    'board-hello': {
      cap: 'لوحة صغيرة… عقل الروبوت 🧠',
      h: 150,
      svg: `
        <text x="200" y="26" class="a-t">مرحبًا! أنا العقل 🧠</text>
        <rect x="70" y="42" width="210" height="90" rx="14" fill="#00838F"/>
        <rect x="112" y="66" width="76" height="46" rx="8" fill="#212121"/>
        <text x="150" y="99" class="a-s">🧠</text>
        <rect x="52" y="60" width="20" height="26" rx="4" fill="#9E9E9E"/>
        <circle class="a-bulb" cx="332" cy="86" r="26" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <g class="a-rays" stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
          <line x1="332" y1="46" x2="332" y2="34"/>
          <line x1="370" y1="86" x2="384" y2="86"/>
          <line x1="360" y1="58" x2="370" y2="48"/>
        </g>
        <path d="M282 86 H300" stroke="#CBD5E1" stroke-width="8" stroke-linecap="round"/>`
    },

    /* 🏠 عقول تختبئ في البيت */
    'hidden-brains': {
      cap: 'عقول صغيرة تختبئ في بيتك 🏠',
      h: 150,
      svg: `
        ${[['🍿', 'ميكروويف'], ['🌀', 'غسّالة'], ['🚗', 'سيارة'], ['🧸', 'لعبة']].map((t, i) => `
        <g class="a-step" style="animation-delay:${i * 0.6}s">
          <rect x="${26 + i * 94}" y="34" width="78" height="68" rx="14"
                fill="#F1F5F9" stroke="#94A3B8" stroke-width="3"/>
          <text x="${65 + i * 94}" y="82" class="a-bt">${t[0]}</text>
          <text x="${65 + i * 94}" y="124" class="a-tsm">${t[1]}</text>
          <text x="${98 + i * 94}" y="40" class="a-s">🧠</text>
        </g>`).join('')}`
    },

    /* 💡 مرتفع ومنخفض */
    'high-low': {
      cap: 'مرتفع = مضاء 💡 · منخفض = مطفأ 🌑',
      h: 165,
      svg: `
        <g transform="translate(200,72)">
          <circle class="a-bulb" r="44" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
          <g class="a-rays" stroke="#F59E0B" stroke-width="5" stroke-linecap="round">
            <line x1="0" y1="-56" x2="0" y2="-74"/><line x1="56" y1="0" x2="74" y2="0"/>
            <line x1="-56" y1="0" x2="-74" y2="0"/>
            <line x1="40" y1="-40" x2="52" y2="-52"/><line x1="-40" y1="-40" x2="-52" y2="-52"/>
          </g>
          <text y="12" class="a-bt">💡</text>
        </g>
        <text x="200" y="146" class="a-t">منخفض = مطفأ 🌑
          <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.35;0.5;1"
                   dur="3s" repeatCount="indefinite"/></text>
        <text x="200" y="146" class="a-t" opacity="0">مرتفع = مضاء 💡
          <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.35;0.5;1"
                   dur="3s" repeatCount="indefinite"/></text>`
    },

    /* 👂 يسمع و 💡 يتكلّم */
    'ear-mouth': {
      cap: 'طرف يسمع 👂 وطرف يتكلّم 💡',
      h: 148,
      svg: `
        <g class="a-step">
          <circle cx="56" cy="70" r="34" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
          <text x="56" y="82" class="a-bt">👂</text>
          <text x="56" y="126" class="a-tsm">يسمع</text>
        </g>
        <g class="a-arrow">
          <path d="M100 70 h46 l-12 -10 M146 70 l-12 10" stroke="#16A34A" stroke-width="4"
                fill="none" stroke-linecap="round"/>
        </g>
        <rect x="158" y="36" width="88" height="68" rx="12" fill="#00838F"/>
        <text x="202" y="80" class="a-bt">🧠</text>
        <g class="a-arrow" style="animation-delay:.5s">
          <path d="M256 70 h46 l-12 -10 M302 70 l-12 10" stroke="#16A34A" stroke-width="4"
                fill="none" stroke-linecap="round"/>
        </g>
        <g class="a-step" style="animation-delay:.8s">
          <circle cx="352" cy="70" r="34" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
          <text x="352" y="82" class="a-bt">💡</text>
          <text x="352" y="126" class="a-tsm">يتكلّم</text>
        </g>`
    },

    /* 🎚️ مفتاح مقابل مقبض */
    'switch-vs-dimmer': {
      cap: 'مفتاح: مضاء أو مطفأ · مقبض: قليل… أكثر… أكثر! 🔆',
      h: 165,
      svg: `
        <text x="105" y="28" class="a-t">مفتاح 🔘</text>
        <circle class="a-bulb" cx="105" cy="84" r="38" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <text x="105" y="95" class="a-bt">💡</text>
        <text x="105" y="148" class="a-tsm">مضاء… أو مطفأ</text>
        <line x1="200" y1="30" x2="200" y2="130" stroke="#E2E8F0" stroke-width="4"/>
        <text x="295" y="28" class="a-t">مقبض 🎚️</text>
        <circle cx="295" cy="84" r="38" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <circle cx="295" cy="84" r="38" fill="#FDE047" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="3.4s" repeatCount="indefinite"/>
        </circle>
        <text x="295" y="95" class="a-bt">🔆</text>
        <text x="295" y="148" class="a-tsm">قليل… أكثر… أكثر!</text>`
    },

    /* ⚡ وميض سريع جدًا */
    'blink-fast': {
      cap: 'يومض بسرعة… فتراه هادئًا 👁️',
      h: 155,
      svg: `
        <circle cx="130" cy="76" r="42" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <circle cx="130" cy="76" r="42" fill="#FDE047">
          <animate attributeName="opacity" values="1;0;1" dur="0.18s" repeatCount="indefinite"/>
        </circle>
        <text x="130" y="88" class="a-bt">💡</text>
        <text x="130" y="136" class="a-tsm">يومض بسرعة!</text>
        <text x="222" y="86" class="a-ar">←</text>
        <text x="300" y="88" class="a-x">👁️</text>
        <text x="300" y="136" class="a-tsm">العين تراه هادئًا</text>`
    },

    /* 🌇 الشمس تغيب ببطء */
    'sun-fade': {
      cap: 'الشمس تغيب ببطء 🌇',
      h: 150,
      svg: `
        <rect x="14" y="108" width="372" height="30" rx="8" fill="#86EFAC"/>
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 44"
                            dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.3" dur="4s" repeatCount="indefinite"/>
          <circle cx="200" cy="66" r="34" fill="#FDE047" stroke="#F59E0B" stroke-width="4"/>
          <text x="200" y="78" class="a-bt">☀️</text>
        </g>
        <text x="200" y="28" class="a-t">قليلًا… قليلًا… ثم تنفد ⚠️</text>`
    }
  };

  function build(box) {
    const a = MORE[box.dataset.anim];
    if (!a) return;
    if (box.querySelector('.anim__svg')) return;        // بناه محرّك آخر
    box.innerHTML =
      '<svg class="anim__svg" viewBox="0 0 400 ' + (a.h || 130) + '">' + a.svg + '</svg>' +
      '<div class="anim__bar">' +
        '<span class="anim__cap">' + a.cap + '</span>' +
        '<button class="anim__btn" type="button">🔁 مرّة أخرى</button>' +
      '</div>';
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   مشاهد إضافية لدروس 26 · 28 · 29 (طفل السادسة) — إضافة فقط
   real-to-symbol · listen-speak · snap-vs-fade
   ============================================================ */
(function () {
  'use strict';

  const KID = {

    /* 🖊️ القطعة الحقيقية تذوب في رمزها… ثم تعود */
    'real-to-symbol': {
      cap: 'القطعة… ورمزها الصغير 🖊️',
      h: 158,
      svg: `
        <text x="200" y="20" class="a-t">انظر! صارت رسمًا صغيرًا</text>

        <g>
          <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.4;0.5;0.9;1"
                   dur="4.5s" repeatCount="indefinite"/>
          <circle cx="108" cy="82" r="34" fill="#FDE047" stroke="#334155" stroke-width="4"/>
          <text x="108" y="94" class="a-bt">💡</text>
        </g>
        <g opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.4;0.5;0.9;1"
                   dur="4.5s" repeatCount="indefinite"/>
          <circle cx="108" cy="82" r="32" fill="none" stroke="#0F172A" stroke-width="5"/>
          <line x1="86" y1="60" x2="130" y2="104" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
          <line x1="130" y1="60" x2="86" y2="104" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>
          <line x1="48" y1="82" x2="76" y2="82" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
          <line x1="140" y1="82" x2="168" y2="82" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
        </g>
        <text x="108" y="140" class="a-tsm">مصباح 💡</text>

        <line x1="200" y1="34" x2="200" y2="126" stroke="#E2E8F0" stroke-width="4"/>

        <g>
          <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.4;0.5;0.9;1"
                   dur="4.5s" repeatCount="indefinite"/>
          <rect x="250" y="54" width="96" height="56" rx="10" fill="#2E3D6B"/>
          <rect x="250" y="54" width="96" height="18" rx="9" fill="#4356A0"/>
          <rect x="346" y="72" width="12" height="20" rx="4" fill="#C9CEE0"/>
          <text x="298" y="100" class="a-bt">🔋</text>
        </g>
        <g opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.4;0.5;0.9;1"
                   dur="4.5s" repeatCount="indefinite"/>
          <line x1="282" y1="54" x2="282" y2="110" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <line x1="302" y1="68" x2="302" y2="96" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <line x1="322" y1="54" x2="322" y2="110" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
          <line x1="250" y1="82" x2="282" y2="82" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
          <line x1="322" y1="82" x2="356" y2="82" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
        </g>
        <text x="298" y="140" class="a-tsm">بطارية 🔋</text>`
    },

    /* 👂🗣️ مرّة يسمع… ومرّة يتكلّم */
    'listen-speak': {
      cap: 'طرف يسمع 👂… وطرف يتكلّم 🗣️',
      h: 152,
      svg: `
        <text x="200" y="20" class="a-t">مرّة يسمع… ومرّة يتكلّم</text>

        <circle cx="62" cy="78" r="36" fill="#DBEAFE" stroke="#2563EB" stroke-width="4"/>
        <text x="62" y="90" class="a-bt">👂</text>
        <circle cx="62" cy="78" r="45" fill="none" stroke="#2563EB" stroke-width="5" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.08;0.42;0.5;1"
                   dur="4s" repeatCount="indefinite"/>
        </circle>
        <text x="62" y="140" class="a-tsm">يسمع الزرّ 👆</text>

        <g opacity="0">
          <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.1;0.42;0.48;1"
                   dur="4s" repeatCount="indefinite"/>
          <path d="M114 78 h38 l-12 -10 M152 78 l-12 10" stroke="#2563EB" stroke-width="5"
                fill="none" stroke-linecap="round"/>
        </g>

        <rect x="160" y="44" width="80" height="70" rx="13" fill="#00838F"/>
        <text x="200" y="92" class="a-bt">🧠</text>

        <g opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.5;0.58;0.92;1"
                   dur="4s" repeatCount="indefinite"/>
          <path d="M248 78 h38 l-12 -10 M286 78 l-12 10" stroke="#16A34A" stroke-width="5"
                fill="none" stroke-linecap="round"/>
        </g>

        <circle cx="336" cy="78" r="36" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4"/>
        <text x="336" y="90" class="a-bt">🗣️</text>
        <circle cx="336" cy="78" r="45" fill="none" stroke="#F59E0B" stroke-width="5" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.5;0.58;0.92;1"
                   dur="4s" repeatCount="indefinite"/>
        </circle>
        <text x="336" y="140" class="a-tsm">يقول للمصباح 💡</text>`
    },

    /* 💡🔆 مصباح يقفز… ومصباح يتدرّج */
    'snap-vs-fade': {
      cap: 'مفتاح يقفز 💡 · ومقبض يتدرّج 🔆',
      h: 166,
      svg: `
        <text x="104" y="22" class="a-t">مفتاح 🔘</text>
        <circle cx="104" cy="80" r="38" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <circle cx="104" cy="80" r="38" fill="#FDE047" opacity="0">
          <animate attributeName="opacity" values="0;1;0;1" keyTimes="0;0.25;0.5;0.75"
                   calcMode="discrete" dur="3.2s" repeatCount="indefinite"/>
        </circle>
        <text x="104" y="92" class="a-bt">💡</text>
        <rect x="54" y="126" width="100" height="9" rx="5" fill="#E2E8F0"/>
        <rect x="54" y="126" width="0" height="9" rx="5" fill="#F59E0B">
          <animate attributeName="width" values="0;100;0;100" keyTimes="0;0.25;0.5;0.75"
                   calcMode="discrete" dur="3.2s" repeatCount="indefinite"/>
        </rect>
        <text x="104" y="154" class="a-tsm">مضاء… أو مطفأ</text>

        <line x1="200" y1="32" x2="200" y2="132" stroke="#E2E8F0" stroke-width="4"/>

        <text x="298" y="22" class="a-t">مقبض 🎚️</text>
        <circle cx="298" cy="80" r="38" fill="#E8EDF5" stroke="#334155" stroke-width="4"/>
        <circle cx="298" cy="80" r="38" fill="#FDE047" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite"/>
        </circle>
        <text x="298" y="92" class="a-bt">🔆</text>
        <rect x="248" y="126" width="100" height="9" rx="5" fill="#E2E8F0"/>
        <rect x="248" y="126" width="0" height="9" rx="5" fill="#F59E0B">
          <animate attributeName="width" values="0;100;0" dur="3.2s" repeatCount="indefinite"/>
        </rect>
        <text x="298" y="154" class="a-tsm">قليل… أكثر… أكثر!</text>`
    }
  };

  function build(box) {
    const a = KID[box.dataset.anim];
    if (!a) return;
    if (box.querySelector('.anim__svg')) return;        // بناه محرّك آخر
    box.innerHTML =
      '<svg class="anim__svg" viewBox="0 0 400 ' + (a.h || 130) + '">' + a.svg + '</svg>' +
      '<div class="anim__bar">' +
        '<span class="anim__cap">' + a.cap + '</span>' +
        '<button class="anim__btn" type="button">🔁 مرّة أخرى</button>' +
      '</div>';
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   مشاهد متحرّكة إضافية — دروس 13 إلى 17 (لطفل السادسة)
   (إضافة فقط: لا تعديل على أي مشهد سابق)
   ============================================================ */
(function () {
  'use strict';

  const D = 5;                         /* طول المشهد بالثواني */

  const KID = {

    /* 🪣 دلو يمتلئ نقطة نقطة… ثم يفرغ دفعة واحدة */
    'cap-bucket': {
      cap: 'يمتلئ نقطة نقطة… ثم يفرغ دفعة واحدة! 🪣',
      h: 166,
      svg: `
        <text x="306" y="34" style="font-size:26px;text-anchor:middle">🚰</text>
        ${[0, 0.55, 1.1, 1.65, 2.2].map(b => `
          <circle cx="306" cy="44" r="7" fill="#38BDF8">
            <animate attributeName="cy" values="44;78" dur="0.9s" begin="${b}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;1;0;0;1"
                     keyTimes="0;0.56;0.60;0.94;1" dur="${D}s" repeatCount="indefinite"/>
          </circle>`).join('')}

        <rect x="268" y="56" width="76" height="86" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="4"/>
        <rect x="273" y="137" width="66" height="0" fill="#60A5FA">
          <animate attributeName="height" values="0;76;76;0;0"
                   keyTimes="0;0.58;0.62;0.66;1" dur="${D}s" repeatCount="indefinite"/>
          <animate attributeName="y" values="137;61;61;137;137"
                   keyTimes="0;0.58;0.62;0.66;1" dur="${D}s" repeatCount="indefinite"/>
        </rect>
        <text x="306" y="160" class="a-t">يمتلئ بهدوء</text>

        <text x="212" y="106" class="a-ar">←</text>

        <g opacity="0">
          <text x="112" y="118" style="font-size:56px;text-anchor:middle">💥</text>
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.62;0.66;0.78;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <text x="112" y="160" class="a-t">دفعة واحدة!</text>`
    },

    /* 👆 إصبع صغير… يحرّك بابًا ثقيلًا */
    'finger-door': {
      cap: 'إصبع صغير… يحرّك بابًا ثقيلًا! 💪',
      h: 172,
      svg: `
        <g>
          <text x="346" y="52" style="font-size:32px;text-anchor:middle">👇</text>
          <animateTransform attributeName="transform" type="translate"
                            values="0 -12;0 -12;0 10;0 10;0 -12"
                            keyTimes="0;0.20;0.32;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <rect x="320" y="74" width="52" height="16" rx="8" fill="#94A3B8"/>
        <text x="346" y="116" class="a-tsm">لمسة صغيرة</text>

        <line x1="314" y1="82" x2="266" y2="82" stroke="#7C3AED" stroke-width="5"
              stroke-dasharray="8 6" stroke-linecap="round"/>

        <rect x="46" y="34" width="104" height="104" rx="10" fill="none"
              stroke="#CBD5E1" stroke-width="3" stroke-dasharray="7 6"/>
        <g>
          <rect x="150" y="34" width="104" height="104" rx="10" fill="#B45309"/>
          <rect x="150" y="34" width="104" height="18" rx="9" fill="#D97706"/>
          <text x="202" y="104" style="font-size:40px;text-anchor:middle">🚪</text>
          <animateTransform attributeName="transform" type="translate"
                            values="0 0;0 0;-104 0;-104 0;0 0"
                            keyTimes="0;0.28;0.46;0.86;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <text x="150" y="164" class="a-t">شيء كبير… تحرّك! 💪</text>`
    },

    /* 🧲 الملفّ يصير مغناطيسًا فيسحب الذراع */
    'coil-arm': {
      cap: 'الملفّ يصير مغناطيسًا… فيسحب الذراع! 🧲',
      h: 178,
      svg: `
        <text x="372" y="34" style="font-size:26px;text-anchor:middle">🔋</text>
        <g>
          <rect x="118" y="42" width="196" height="14" rx="7" fill="#334155"/>
          <animateTransform attributeName="transform" type="rotate"
                            values="0 308 49;0 308 49;-13 308 49;-13 308 49;0 308 49"
                            keyTimes="0;0.24;0.36;0.84;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <circle cx="308" cy="49" r="8" fill="#0F172A"/>

        <rect x="104" y="98" width="88" height="58" rx="7" fill="#37474F"/>
        <path d="M112 110 h72 M112 124 h72 M112 138 h72"
              stroke="#90A4AE" stroke-width="5" stroke-linecap="round"/>
        <rect x="104" y="98" width="88" height="58" rx="7" fill="#DC2626" opacity="0">
          <animate attributeName="opacity" values="0;0;0.6;0.6;0"
                   keyTimes="0;0.20;0.34;0.84;1" dur="${D}s" repeatCount="indefinite"/>
        </rect>
        <text x="148" y="174" class="a-t">🧲 صار مغناطيسًا</text>

        <g opacity="0">
          <text x="252" y="116" class="a-t" style="fill:#DC2626">يسحب ⬇</text>
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.24;0.32;0.82;0.88;1" dur="${D}s" repeatCount="indefinite"/>
        </g>
        <g opacity="0">
          <text x="58" y="42" class="a-t" style="fill:#DC2626">تك! 👂</text>
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.34;0.38;0.54;0.62;1" dur="${D}s" repeatCount="indefinite"/>
        </g>`
    },

    /* 🐝 جناح يهتزّ بسرعة… فيخرج صوت */
    'bee-buzz': {
      cap: 'الجناح يهتزّ بسرعة… فيخرج صوت! 🐝',
      h: 164,
      svg: `
        <g>
          <text x="326" y="98" style="font-size:54px;text-anchor:middle">🐝</text>
          <animateTransform attributeName="transform" type="translate"
                            values="0 -4;0 4;0 -4" dur="0.13s" repeatCount="indefinite"/>
        </g>
        <text x="326" y="148" class="a-t">يهتزّ بسرعة</text>
        ${[[262, 44, 112, 42, 0], [228, 30, 128, 60, 0.5], [194, 16, 144, 80, 1]].map(w => `
          <path d="M${w[0]} ${w[1]} a${w[3]} ${w[3]} 0 0 0 0 ${w[2] - w[1]}"
                fill="none" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s"
                     begin="${w[4]}s" repeatCount="indefinite"/>
          </path>`).join('')}
        <text x="94" y="112" style="font-size:48px;text-anchor:middle">👂</text>
        <text x="94" y="152" class="a-t">فتسمع صوتًا!</text>`
    }
  };

  function build(box) {
    const a = KID[box.dataset.anim];
    if (!a) return;
    if (box.querySelector('.anim__svg')) return;      /* بناه محرّك آخر */
    box.innerHTML =
      '<svg class="anim__svg" viewBox="0 0 400 ' + (a.h || 130) + '">' + a.svg + '</svg>' +
      '<div class="anim__bar">' +
        '<span class="anim__cap">' + a.cap + '</span>' +
        '<button class="anim__btn" type="button">🔁 مرّة أخرى</button>' +
      '</div>';
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافة — مشهد الدرس 36 (طفل السادسة): قصّة تجنّب الجدار
   إضافة فقط: لا تعديل على أي مشهد سابق.
   الجديد: wall-avoid
   (مشهد النهاية robot-done موجود سابقًا ويُستعمل في الدرس 37)
   ============================================================ */
(function () {
  'use strict';

  const T = '7s';                       /* طول القصّة كلها */
  const KT = '0;0.30;0.40;0.52;0.62;0.74;0.96;1';

  const A4 = {

    /* 🧱 يمشي ← يرى الجدار ← يقف ← يرجع ← يلتفّ ← يكمل */
    'wall-avoid': {
      cap: 'يمشي ← يقف ← يرجع ← يلتفّ ← يكمل 🔄',
      h: 168,
      svg: `
        <rect x="10" y="130" width="380" height="9" rx="4" fill="#CBD5E1"/>

        <rect x="322" y="70" width="54" height="60" rx="5" fill="#C2703C"/>
        <path d="M322 90 h54 M322 110 h54" stroke="#8B4513" stroke-width="3"/>
        <path d="M349 70 v20 M336 90 v20 M362 90 v20 M349 110 v20" stroke="#8B4513" stroke-width="3"/>
        <text x="349" y="156" class="a-tsm">جدار 🧱</text>

        <text x="200" y="24" class="a-t">يمشي ➡️
          <animate attributeName="opacity" values="1;1;0;0"
                   keyTimes="0;0.28;0.32;1" dur="${T}" repeatCount="indefinite"/></text>
        <text x="200" y="24" class="a-t" opacity="0">رأى الجدار… يقف ⛔
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.30;0.34;0.48;0.52;1" dur="${T}" repeatCount="indefinite"/></text>
        <text x="200" y="24" class="a-t" opacity="0">يرجع قليلًا ↩️
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.50;0.54;0.60;0.64;1" dur="${T}" repeatCount="indefinite"/></text>
        <text x="200" y="24" class="a-t" opacity="0">يلتفّ 🔄
          <animate attributeName="opacity" values="0;0;1;1;0;0"
                   keyTimes="0;0.62;0.66;0.72;0.76;1" dur="${T}" repeatCount="indefinite"/></text>
        <text x="200" y="24" class="a-t" opacity="0">ثم يكمل طريقه ➡️
          <animate attributeName="opacity" values="0;0;1;1"
                   keyTimes="0;0.76;0.80;1" dur="${T}" repeatCount="indefinite"/></text>

        <g>
          <animateTransform attributeName="transform" type="translate"
                            values="0 0; 236 0; 236 0; 190 0; 190 0; 190 -56; 320 -56; 320 -56"
                            keyTimes="${KT}" dur="${T}" repeatCount="indefinite"/>
          <text x="46" y="122" class="a-x">🤖</text>
          <g class="a-arrow" stroke="#7C3AED" stroke-width="3" fill="none" stroke-linecap="round">
            <path d="M68 104 q10 9 0 18"/>
            <path d="M78 98 q15 15 0 30"/>
          </g>
          <text x="46" y="74" class="a-s" opacity="0">⛔
            <animate attributeName="opacity" values="0;0;1;1;0;0"
                     keyTimes="0;0.32;0.36;0.48;0.52;1" dur="${T}" repeatCount="indefinite"/></text>
          <text x="46" y="74" class="a-s" opacity="0">↩️
            <animate attributeName="opacity" values="0;0;1;1;0;0"
                     keyTimes="0;0.50;0.54;0.60;0.64;1" dur="${T}" repeatCount="indefinite"/></text>
          <text x="46" y="74" class="a-s" opacity="0">🔄
            <animate attributeName="opacity" values="0;0;1;1;0;0"
                     keyTimes="0;0.62;0.66;0.74;0.78;1" dur="${T}" repeatCount="indefinite"/></text>
        </g>`
    }
  };

  function build(box) {
    const a = A4[box.dataset.anim];
    if (!a) return;
    box.innerHTML =
      '<svg class="anim__svg" viewBox="0 0 400 ' + (a.h || 130) + '">' + a.svg + '</svg>' +
      '<div class="anim__bar">' +
        '<span class="anim__cap">' + a.cap + '</span>' +
        '<button class="anim__btn" type="button">🔁 مرّة أخرى</button>' +
      '</div>';
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ============================================================
   إضافة — مشاهد الحسّاسات لطفل السادسة (الدروس 20 إلى 23)
   إضافة فقط: لا يُعدَّل أي مشهد سابق.
   الجديد: thermo-rise · sun-moon-lamp · bat-ping · robot-ping ·
           warm-pass · door-open
   ============================================================ */
(function () {
  'use strict';

  const D = '4.4s';                       /* طول المشهد */
  const KT = '0;0.42;0.5;0.92;1';         /* لحظات التبدّل */

  /* جدار على اليمين — لمشهدي الصدى */
  const wall = `
    <rect x="342" y="18" width="42" height="142" rx="5" fill="#94A3B8"/>
    <path d="M342 60 h42 M342 102 h42 M342 144 h42" stroke="#64748B" stroke-width="3"/>
    <text x="363" y="178" class="a-tsm">جدار</text>`;

  /* صوت يذهب… وصدى يعود */
  const ping = `
    ${[0, 1, 2].map(i => `
      <circle class="a-el" cx="88" cy="56" r="9" fill="#F59E0B"
              style="animation-delay:${i * 0.4}s"/>`).join('')}
    <g transform="translate(400,0) scale(-1,1)">
      ${[0, 1, 2].map(i => `
        <circle class="a-drop" cx="58" cy="114" r="9" fill="#7C3AED"
                style="animation-delay:${1.2 + i * 0.4}s"/>`).join('')}
    </g>`;

  const KIDS = {

    /* 🌡️ ميزان الحرارة يصعد… ثم ينزل */
    'thermo-rise': {
      cap: 'يسخن فيصعد… ويبرد فينزل 🌡️',
      h: 168,
      svg: `
        <text x="72" y="60" class="a-x">🔥</text>
        <text x="72" y="140" class="a-x">❄️</text>

        <rect x="186" y="16" width="34" height="106" rx="17" fill="#F1F5F9"
              stroke="#64748B" stroke-width="4"/>
        <circle cx="203" cy="134" r="25" fill="#EF4444" stroke="#B91C1C" stroke-width="4"/>
        <rect x="195" y="100" width="16" height="24" rx="8" fill="#EF4444">
          <animate attributeName="y" values="100;30;30;100;100"
                   keyTimes="0;0.4;0.62;0.95;1" dur="${D}" repeatCount="indefinite"/>
          <animate attributeName="height" values="24;94;94;24;24"
                   keyTimes="0;0.4;0.62;0.95;1" dur="${D}" repeatCount="indefinite"/>
        </rect>
        <g stroke="#94A3B8" stroke-width="3" stroke-linecap="round">
          <line x1="224" y1="40" x2="238" y2="40"/>
          <line x1="224" y1="62" x2="238" y2="62"/>
          <line x1="224" y1="84" x2="238" y2="84"/>
          <line x1="224" y1="106" x2="238" y2="106"/>
        </g>

        <text x="322" y="60" class="a-t">حارّ ⬆️</text>
        <text x="322" y="140" class="a-t">بارد ⬇️</text>`
    },

    /* ☀️🌙 الشمس والقمر يتناوبان… والمصباح يجيب */
    'sun-moon-lamp': {
      cap: 'شمس… ثم قمر… فيجيب المصباح ☀️🌙',
      h: 162,
      svg: `
        <rect x="228" y="24" width="156" height="108" rx="16" fill="#FEF9C3"
              stroke="#F59E0B" stroke-width="3">
          <animate attributeName="fill" values="#FEF9C3;#FEF9C3;#E0E7FF;#E0E7FF;#FEF9C3"
                   keyTimes="${KT}" dur="${D}" repeatCount="indefinite"/>
        </rect>
        <text x="306" y="94" class="a-x">☀️<animate attributeName="opacity" values="1;1;0;0;1" keyTimes="${KT}" dur="${D}" repeatCount="indefinite"/></text>
        <text x="306" y="94" class="a-x" opacity="0">🌙<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="${KT}" dur="${D}" repeatCount="indefinite"/></text>
        <text x="306" y="152" class="a-tsm">شمس… ثم قمر</text>

        <text x="196" y="88" class="a-ar">←</text>

        <g transform="translate(92,78)">
          <circle r="30" fill="#E8EDF5" stroke="#334155" stroke-width="4">
            <animate attributeName="fill" values="#E8EDF5;#E8EDF5;#FDE047;#FDE047;#E8EDF5"
                     keyTimes="${KT}" dur="${D}" repeatCount="indefinite"/>
          </circle>
          <g stroke="#F59E0B" stroke-width="5" stroke-linecap="round" opacity="0">
            <line x1="0" y1="-40" x2="0" y2="-52"/>
            <line x1="40" y1="0" x2="52" y2="0"/>
            <line x1="-40" y1="0" x2="-52" y2="0"/>
            <line x1="28" y1="-28" x2="37" y2="-37"/>
            <animate attributeName="opacity" values="0;0;1;1;0"
                     keyTimes="${KT}" dur="${D}" repeatCount="indefinite"/>
          </g>
          <text y="11" class="a-bt">💡</text>
        </g>
        <text x="92" y="152" class="a-tsm">المصباح يجيب</text>`
    },

    /* 🦇 الخفّاش يصرخ… والصدى يعود فيعرف أين الجدار */
    'bat-ping': {
      cap: 'يصرخ… يسمع الصدى… فيعرف أين الجدار 🦇',
      h: 192,
      svg: `
        ${wall}
        <text x="48" y="118" style="font-size:46px" text-anchor="middle">🦇</text>
        ${ping}
        <g class="a-spark"><text x="48" y="58" class="a-x">❗</text></g>
        <text x="205" y="34" class="a-t">صوت يذهب 🔊</text>
        <text x="205" y="156" class="a-t">وصدى يعود 👂</text>
        <text x="205" y="182" class="a-tsm">فيعرف أين الجدار! 🎉</text>`
    },

    /* 🤖 الروبوت يفعل مثل الخفّاش تمامًا */
    'robot-ping': {
      cap: 'الروبوت يفعل مثل الخفّاش تمامًا 🤖',
      h: 192,
      svg: `
        ${wall}
        <text x="48" y="122" style="font-size:44px" text-anchor="middle">🤖</text>
        <text x="86" y="88" class="a-s">📡</text>
        ${ping}
        <text x="205" y="34" class="a-t">يصرخ… ولا نسمعه 🔊</text>
        <text x="205" y="156" class="a-t">ثم يسمع الصدى 👂</text>
        <text x="205" y="182" class="a-tsm">مثل الخفّاش تمامًا 🦇</text>`
    },

    /* 🚶 يمرّ الدافئ أمام الحسّاس… فيشتعل النور */
    'warm-pass': {
      cap: 'يمرّ الدافئ… فيشتعل النور 🚶💡',
      h: 182,
      svg: `
        <rect x="10" y="158" width="380" height="8" rx="4" fill="#CBD5E1"/>

        <g transform="translate(338,34)">
          <circle r="21" fill="#E8EDF5" stroke="#334155" stroke-width="4">
            <animate attributeName="fill" values="#E8EDF5;#E8EDF5;#FDE047;#FDE047;#E8EDF5"
                     keyTimes="0;0.44;0.52;0.9;1" dur="${D}" repeatCount="indefinite"/>
          </circle>
          <g stroke="#F59E0B" stroke-width="4" stroke-linecap="round" opacity="0">
            <line x1="0" y1="-30" x2="0" y2="-40"/>
            <line x1="30" y1="0" x2="40" y2="0"/>
            <line x1="-30" y1="0" x2="-40" y2="0"/>
            <line x1="21" y1="-21" x2="28" y2="-28"/>
            <animate attributeName="opacity" values="0;0;1;1;0"
                     keyTimes="0;0.44;0.52;0.9;1" dur="${D}" repeatCount="indefinite"/>
          </g>
        </g>

        <rect x="300" y="72" width="76" height="46" rx="9" fill="#EDE9FE"
              stroke="#7C3AED" stroke-width="4"/>
        <text x="338" y="106" class="a-bt">📡</text>

        <g stroke="#EF4444" stroke-width="3" fill="none" stroke-linecap="round" opacity="0">
          <path d="M284 84 q-13 11 0 22"/>
          <path d="M272 76 q-18 16 0 36"/>
          <animate attributeName="opacity" values="0;0;1;1;0"
                   keyTimes="0;0.4;0.5;0.88;1" dur="${D}" repeatCount="indefinite"/>
        </g>

        <text x="34" y="152" class="a-x">🚶<animate attributeName="x" values="34;252;252;34;34" keyTimes="0;0.44;0.9;0.95;1" dur="${D}" repeatCount="indefinite"/></text>
        <text x="130" y="40" class="a-t">جسمك دافئ 🔥</text>`
    },

    /* 🚪 تقترب من الباب… فيفتح وحده */
    'door-open': {
      cap: 'تقترب… فيفتح الباب وحده 🚪',
      h: 180,
      svg: `
        <rect x="10" y="150" width="380" height="8" rx="4" fill="#CBD5E1"/>
        <rect x="116" y="14" width="208" height="136" rx="8" fill="#DBEAFE"
              stroke="#2563EB" stroke-width="4"/>
        <rect x="176" y="0" width="88" height="18" rx="6" fill="#7C3AED"/>
        <text x="220" y="15" class="a-s">📡</text>

        <rect x="122" y="20" width="94" height="124" rx="4" fill="#93C5FD"
              stroke="#1D4ED8" stroke-width="3">
          <animate attributeName="width" values="94;12;12;94;94"
                   keyTimes="0;0.42;0.85;0.95;1" dur="${D}" repeatCount="indefinite"/>
        </rect>
        <rect x="224" y="20" width="94" height="124" rx="4" fill="#93C5FD"
              stroke="#1D4ED8" stroke-width="3">
          <animate attributeName="x" values="224;306;306;224;224"
                   keyTimes="0;0.42;0.85;0.95;1" dur="${D}" repeatCount="indefinite"/>
          <animate attributeName="width" values="94;12;12;94;94"
                   keyTimes="0;0.42;0.85;0.95;1" dur="${D}" repeatCount="indefinite"/>
        </rect>

        <text x="48" y="140" class="a-x">🚶<animate attributeName="x" values="48;178;178;48;48" keyTimes="0;0.42;0.85;0.95;1" dur="${D}" repeatCount="indefinite"/></text>
        <text x="220" y="174" class="a-t">الباب يفتح وحده! 🎉</text>`
    }
  };

  function build(box) {
    const a = KIDS[box.dataset.anim];
    if (!a) return;
    if (box.querySelector('.anim__svg')) return;        // بناه محرّك آخر
    box.innerHTML =
      '<svg class="anim__svg" viewBox="0 0 400 ' + (a.h || 130) + '">' + a.svg + '</svg>' +
      '<div class="anim__bar">' +
        '<span class="anim__cap">' + a.cap + '</span>' +
        '<button class="anim__btn" type="button">🔁 مرّة أخرى</button>' +
      '</div>';
    box.querySelector('.anim__btn').addEventListener('click', () => {
      const svg = box.querySelector('.anim__svg');
      svg.replaceWith(svg.cloneNode(true));
    });
  }

  function init() { document.querySelectorAll('.anim[data-anim]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
