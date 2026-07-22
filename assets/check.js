#!/usr/bin/env node
/* ============================================================
   مدقّق كورس الإلكترونيات
   يفرض قواعد STYLE.md ميكانيكيًّا — لا اعتماد على المراجعة اليدوية.

   التشغيل:  node assets/check.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LESSONS = path.join(ROOT, 'lessons');

const errors = [];
const warns = [];
const err = (f, m) => errors.push(`✖ ${f} — ${m}`);
const warn = (f, m) => warns.push(`⚠ ${f} — ${m}`);

/* ───────────────── ١) الأنسنة والعبارات المرفوضة ───────────────── */
const BANNED = [
  [/\bجائع|جوعان\b/, 'أنسنة: «جائع» — قل «يحتاج تيّارًا أكبر»'],
  [/(المحرّك|المصباح|البطارية|الليد|المروحة|الدائرة)[^.،\n]{0,20}يشرب/, 'أنسنة: «يشرب» — قل «يسحب تيّارًا»'],
  [/(المروحة|المحرّك|البطارية|المصباح)[^.،\n]{0,14}(نائم|نائمة)/, 'أنسنة: «نائم» — قل «متوقّف» أو «فرغت»'],
  [/(مصباح|محرّك|دائرة|بطارية)\s+(سعيد|سعيدة|حزين|حزينة|غاضب)/, 'أنسنة: مشاعر لعنصر إلكتروني'],
  [/(الكهرباء|التيّار|الإلكترونات)\s+(تحبّ|يحبّ|تكره|يكره)/, 'أنسنة: «تحبّ/تكره» — قل «تمرّ» أو «لا تمرّ»'],
  [/(الترانزستور|الرقاقة|اللوحة|الحسّاس)\s+(ذكيّ|ذكية|شاطر)/, 'أنسنة: «ذكيّ» — صف ما يفعله'],
  [/عين\s+الروبوت[^.\n]{0,24}مصباح/, 'خطأ علمي: عين الروبوت كاميرا/حسّاس — المصباح يُصدر الضوء لا يستقبله'],
  [/الكهرباء\s+تجري\s+بسرعة\s+الضوء/, 'خطأ علمي: الإشارة سريعة، أمّا الإلكترونات فبطيئة'],
  /* مصطلحات مخترعة — التبسيط في الشرح لا في التسمية (STYLE.md §١) */
  [/\bالدافع\b/,   'مصطلح مخترع: «الدافع» — قل «البطارية» أو «مصدر الكهرباء»'],
  [/\bالمُبطئ\b|\bالمبطئ\b/, 'مصطلح مخترع — قل «المقاومة»'],
  [/\bالحافظ\b/,   'مصطلح مخترع — قل «المكثّف»'],
  /* «مقبض» وصف عامّي. مسموح فقط ليد المفكّ («مقبض عازل»، «أمسك المقبض»). */
  [/(?:ال)?مقبض\s+(?:الصوت|يعطي|تعطي|يتدرّج|يغيّر|يتحكّم|لم\s+يفعل|نفسه)/,
   'وصف عامّي مكان المصطلح: «مقبض» — قل «المقاومة المتغيّرة» (أو «القرص» للجزء الذي تلفّه)'],
  [/حرّك\s+المقبض|لفّ\s+المقبض(?!\s+العازل)/,
   'وصف عامّي: سمِّ العنصر «المقاومة المتغيّرة»، والجزء الذي يُلفّ «القرص»'],
];

/* عبارات أُبلغ عنها كمُملّة من كثرة التكرار */
const OVERUSED = [
  'المصباح يضيء عندما تصل الكهرباء',
  'أحسنت! انتهى الدرس',
  'جرّب بنفسك',
  'اضغط ← لنعرف',
];

/* ───────────────── جمع البيانات ───────────────── */
if (!fs.existsSync(LESSONS)) { console.error('لا يوجد مجلّد lessons'); process.exit(1); }
const files = fs.readdirSync(LESSONS).filter((f) => f.endsWith('.html')).sort();

const h2Map = new Map();      // عنوان → [ملفات]
const sentMap = new Map();    // جملة → Set(ملفات)
const animMap = new Map();    // مشهد → Set(ملفات)
const usesSeen = new Set();

const strip = (s) => s.replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}️]/gu, '')
  .replace(/\s+/g, ' ').trim();

for (const f of files) {
  const html = fs.readFileSync(path.join(LESSONS, f), 'utf8');
  const text = strip(html);

  /* الأنسنة */
  for (const [re, msg] of BANNED) if (re.test(text)) err(f, msg);

  /* العبارات المستهلكة */
  for (const p of OVERUSED) {
    const n = text.split(p).length - 1;
    if (n) (sentMap.get('§' + p) || sentMap.set('§' + p, new Set()).get('§' + p)).add(f);
  }

  /* وسوم متوازنة */
  const open = (html.match(/<section\b/g) || []).length;
  const close = (html.match(/<\/section>/g) || []).length;
  if (open !== close) err(f, `<section> غير متوازن (${open} فتح / ${close} إغلاق)`);
  if ((html.match(/<div\b/g) || []).length !== (html.match(/<\/div>/g) || []).length)
    err(f, '<div> غير متوازن');

  /* العناوين */
  for (const m of html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)) {
    const t = strip(m[1]);
    if (t) { if (!h2Map.has(t)) h2Map.set(t, []); h2Map.get(t).push(f); }
  }

  /* المشاهد */
  for (const m of html.matchAll(/data-anim="([^"]+)"/g)) {
    if (!animMap.has(m[1])) animMap.set(m[1], new Set());
    animMap.get(m[1]).add(f);
  }

  /* معارض التطبيقات */
  for (const m of html.matchAll(/data-uses="([^"]+)"/g)) usesSeen.add(m[1]);

  /* الشرائح */
  const slides = html.split(/<section class="slide/).slice(1);
  if (slides.length < 9) warn(f, `${slides.length} شريحة فقط — المطلوب ١٠–١٣`);
  if (slides.length > 15) warn(f, `${slides.length} شريحة — أطول من اللازم`);

  slides.forEach((s, i) => {
    const hasVisual = /data-anim=|data-part=|data-circ=|data-uses=|data-gate=|data-chip=|<svg|font-size:\s*(clamp|[2-9]\d*(\.\d+)?rem)/.test(s);
    if (!hasVisual) err(f, `الشريحة ${i + 1} بلا أي رسم — كل شاشة يجب أن يكون فيها شيء يُرى`);

    const words = strip(s).split(/\s+/).filter(Boolean).length;
    if (words > 80) warn(f, `الشريحة ${i + 1}: ${words} كلمة — أكثر من الحدّ (٥٥)`);

    /* جمل مكرّرة عبر الكورس */
    for (let sent of strip(s).split(/[.!؟?]+/)) {
      sent = sent.trim();
      if (sent.length > 22 && /[؀-ۿ]/.test(sent)) {
        if (!sentMap.has(sent)) sentMap.set(sent, new Set());
        sentMap.get(sent).add(f);
      }
    }
  });

  /* فولت لا يزيد عن مرّتين */
  const volt = (html.match(/class="guide"/g) || []).length;
  if (volt > 2) err(f, `فولت ⚡ يظهر ${volt} مرّات — الحدّ مرّتان (STYLE.md §٢‑٦)`);

  /* روابط داخلية */
  for (const m of html.matchAll(/href="((?!http|#|mailto)[^"]+)"/g)) {
    const t = path.resolve(LESSONS, m[1].split('#')[0]);
    if (!fs.existsSync(t)) err(f, `رابط مكسور: ${m[1]}`);
  }

  /* السكربتات المطلوبة */
  for (const need of ['uses.js', 'board.js', 'deck.js'])
    if (!html.includes(need)) err(f, `ينقصه <script> لـ ${need}`);
}

/* ───────────────── ٢) التكرار عبر الكورس ───────────────── */
for (const [t, fs_] of h2Map)
  if (fs_.length > 1) err('التكرار', `عنوان «${t}» مكرّر في ${fs_.length} درس: ${fs_.slice(0, 4).join(', ')}`);

for (const [s, set] of sentMap) {
  if (set.size > 2) {
    const label = s.startsWith('§') ? s.slice(1) : s;
    err('التكرار', `«${label.slice(0, 52)}…» في ${set.size} دروس — الحدّ درسان`);
  }
}

for (const [a, set] of animMap)
  if (set.size > 2)
    err('التكرار', `مشهد «${a}» مستعمل في ${set.size} دروس — الحدّ درسان. ارسم مشهدًا جديدًا.`);

/* ───────────────── ٣) تنوّع الافتتاحيات ───────────────── */
const opens = files.map((f) => {
  const html = fs.readFileSync(path.join(LESSONS, f), 'utf8');
  const first = html.split(/<section class="slide/)[1] || '';
  return strip(first).slice(0, 40);
});
const dupOpens = opens.filter((o, i) => opens.indexOf(o) !== i).length;
if (dupOpens > 3) warn('التنوّع', `${dupOpens} افتتاحية متطابقة — نوّع المداخل (STYLE.md §٢‑٤)`);

/* ───────────────── ٤) كل رسم مطلوب موجود فعلًا ───────────────── */
const JS = path.join(ROOT, 'assets', 'js');
const readJs = (f) => fs.existsSync(path.join(JS, f)) ? fs.readFileSync(path.join(JS, f), 'utf8') : '';

/* مفاتيح معرّفة في ملف/ملفات مصدر */
function keysIn(files, depth) {
  const out = new Set();
  const re = new RegExp(`^\\s{${depth}}'?([a-z0-9_-]+)'?:\\s*\\{`, 'gm');
  for (const f of files) for (const m of readJs(f).matchAll(re)) out.add(m[1]);
  return out;
}

const usesJs = fs.readdirSync(JS).filter((f) => /^uses.*\.js$/.test(f));
const defUses  = keysIn(usesJs, 4);
const defParts = keysIn(['parts.js'], 4);
const defAnim  = keysIn(['anim.js'], 4);
const defCirc  = keysIn(['circuit.js'], 4);
const defGate  = keysIn(['logic.js'], 4);
/* أسماء الرقائق أرقام — تُلتقط بنمط خاصّ */
const defChip = new Set([...readJs('logic.js').matchAll(/^\s{4}(\d{4}):\s*\{/gm)].map((m) => m[1]));

const REFS = [
  ['data-uses',  defUses,  'معرض تطبيقات', 'uses*.js'],
  ['data-part',  defParts, 'رسم عنصر',     'parts.js'],
  ['data-anim',  defAnim,  'مشهد متحرّك',   'anim.js'],
  ['data-circ',  defCirc,  'دائرة',         'circuit.js'],
  ['data-gate',  defGate,  'بوّابة منطق',   'logic.js'],
  ['data-chip',  defChip,  'رقاقة',         'logic.js'],
];

for (const f of files) {
  const html = fs.readFileSync(path.join(LESSONS, f), 'utf8');
  for (const [attr, set, label, src] of REFS) {
    if (!set.size) continue;                       // الملف لم يُبنَ بعد — تخطَّ
    const re = new RegExp(`${attr}="([^"]+)"`, 'g');
    for (const m of html.matchAll(re))
      if (!set.has(m[1]))
        err(f, `يطلب ${label} «${m[1]}» وهو غير معرّف في ${src}`);
  }
}

if (usesSeen.size < 12)
  warn('التطبيقات', `${usesSeen.size} معرض تطبيقات فقط في كل الكورس — كل درس عنصر يحتاج واحدًا`);

/* ───────────────── ٤‑ب) الأنسنة داخل ملفّات الرسوم نفسها ───────────────── */
/* ثغرة رُصدت: النصّ المكتوب داخل SVG يظهر للطفل، وكان يفلت من الفحص. */
const JS_BANNED = [
  [/نائم|نائمة|تنام|ينام|😴/, 'أنسنة داخل الرسم: «نائم» — قل «متوقّف» أو «مطفأ»'],
  [/يستيقظ|تستيقظ/,           'أنسنة داخل الرسم: «يستيقظ» — قل «يعمل»'],
  [/يشرب|تشرب|جائع|جوعان/,    'أنسنة داخل الرسم: قل «يسحب تيّارًا»'],
  [/(الكهرباء|التيّار)\s+(تحبّ|يحبّ)/, 'أنسنة داخل الرسم: قل «تمرّ»'],
  [/سعيد|سعيدة|حزين|حزينة/,   'أنسنة داخل الرسم: مشاعر لعنصر إلكتروني'],
  [/👁️[^<]{0,40}💡|👁️\s*←\s*💡/, 'خطأ علمي في الرسم: العين تقابل الكاميرا 📷 لا المصباح 💡'],
];
for (const jf of fs.readdirSync(JS).filter((f) => f.endsWith('.js'))) {
  const src = readJs(jf);
  for (const [re, msg] of JS_BANNED) if (re.test(src)) err(`assets/js/${jf}`, msg);
}

/* ───────────────── ٥) لا رسم مكرّر ───────────────── */
/* «وكمان متكرّرشي الرسومات» — نستخرج نصّ كل SVG ونقارن بصماته */
const fpSeen = new Map();
let drawCount = 0;

function scanDrawings(file, re, label) {
  const src = readJs(file);
  if (!src) return;
  for (const m of src.matchAll(re)) {
    const body = m[1].replace(/\s+/g, ' ').trim();
    if (body.length < 40) continue;                 // تجاهل القصاصات التافهة
    drawCount++;
    const where = `${label}:${m.index}`;
    if (fpSeen.has(body)) {
      err('الرسوم', `رسم مكرّر في ${file} — يطابق ${fpSeen.get(body).split(':')[0]}`);
    } else fpSeen.set(body, where);
  }
}

for (const uf of usesJs) scanDrawings(uf, /svg:\s*V\(`([\s\S]*?)`\)/g, uf);
scanDrawings('parts.js', /(?:real|sym):\s*S\(`([\s\S]*?)`(?:,[^)]*)?\)/g, 'parts.js');

/* ───────────────── التقرير ───────────────── */
console.log(`\n📘 دروس: ${files.length}   │   معارض مستعملة: ${usesSeen.size}   │   مشاهد: ${animMap.size}   │   رسوم مفحوصة: ${drawCount}\n`);
if (warns.length) { console.log('── تنبيهات ──'); warns.forEach((w) => console.log('  ' + w)); console.log(); }
if (errors.length) {
  console.log('── أخطاء ──');
  errors.forEach((e) => console.log('  ' + e));
  console.log(`\n❌ ${errors.length} خطأ. أصلحها قبل النشر.\n`);
  process.exit(1);
}
console.log('✅ كل الدروس تمرّ.\n');
