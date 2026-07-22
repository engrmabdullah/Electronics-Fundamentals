# دليل بناء دروس الإلكترونيات

اقرأ هذا الملف + `CURRICULUM.md` + الدرس المرجعي `lessons/01-what-is-electricity.html`
قبل أن تكتب حرفًا واحدًا.

---

## 1. الأسلوب — إلزامي

**فصحى مبسّطة ودودة** — لغة كتاب أطفال جيّد. لا عامّية، ولا جفاف أكاديمي.

### ممنوع تمامًا
عايز · إزاي · دلوقتي · كده · يلا · بتاعك · عشان · دوس · كتير · شوية · لسه · أوي ·
كمان · بردو · إيه · فين · ليه · مش · حاجة · ده/دي · بيعمل · تاني

### المطلوب
تريد · كيف · الآن · هكذا · هيا · لكي · اضغط · كثير · قليلًا · ما زال · جدًا ·
أيضًا · ما · أين · لماذا · ليس · شيء · هذا/هذه · يفعل · مرة أخرى

خاطب المتعلّم بـ **أنت** مباشرة، بودّ واحترام. الجملة ≤ 12 كلمة. الفقرة ≤ سطرين.

---

## 2. ★ ترتيب شرح أي عنصر — خمس خطوات لا تُخالَف

الطفل لا يفهم عنصرًا يُقدَّم له باسمه أولًا. اتبع هذا الترتيب حرفيًا:

1. **المشكلة أولًا** — مشهد من حياته يجعله يشعر بالحاجة.
   «وصّلنا الليد بالبطارية مباشرة… فاحترق في ثانية! لماذا؟»
2. **الشكل** — رسم `part` (الشكل الحقيقي + الرمز).
3. **الوظيفة بتشبيه محسوس** — «المقاومة أنبوب ضيّق يُبطئ الماء».
4. **أين نراه في حياتنا** — ثلاثة أمثلة على الأقل من أجهزة يعرفها.
5. **جرّبه** — دائرة تفاعلية `circ` أو نشاط.

ثم: خطأ شائع · «هل تعلم؟» · أسئلة · مشروع اختياري.

**العناوين أسئلة أو تعجّب، لا تراكيب اسمية:**
- ❌ «خصائص المقاومة ووظيفتها» → ✅ «لماذا يحترق الليد بدون المقاومة؟»
- ❌ «مفهوم الجهد الكهربائي» → ✅ «ما الذي يدفع الكهرباء في السلك؟»

---

## 3. بنية الملف

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>الدرس N — العنوان | English Title</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/deck.css">
</head>
<body data-lesson="eNN" data-title="الدرس N — العنوان · English Title">
<div class="deck">
  <section class="slide"><div class="wrap"> … </div></section>
</div>
<script src="../assets/js/words.js"></script>
<script src="../assets/js/parts.js"></script>
<script src="../assets/js/circuit.js"></script>
<script src="../assets/js/quiz.js"></script>
<script src="../assets/js/board.js"></script>
<script src="../assets/js/deck.js"></script>
</body>
</html>
```
الستّة سكريبتات **بهذا الترتيب**. المحرّك يبني شريط التقدّم والتنقّل والسبّورة تلقائيًا.

**10 إلى 14 شاشة لكل درس.**

---

## 4. المكوّنات

### رسم عنصر
```html
<div class="part" data-part="resistor"></div>          <!-- الشكل + الرمز + الوظيفة -->
<div class="part" data-part="led" data-only="symbol"></div>
<div class="parts-grid">                                <!-- شبكة مختصرة -->
  <div class="part" data-part="battery" data-job="off"></div>
  <div class="part" data-part="switch"  data-job="off"></div>
</div>
```
المتاح: `battery` `resistor` `led` `switch` `capacitor` `diode` `transistor` `motor`
`buzzer` `ldr` `ultrasonic` `breadboard` `arduino` `relay` `wire`

**إن احتجت عنصرًا غير موجود، أضفه إلى `assets/js/parts.js`** بنفس النمط
(إضافة فقط، لا تعدّل الموجود). ارسمه بـ SVG داخل `viewBox="0 0 120 70"`،
واستعمل الأصناف: `wire` `sym` `sym-f` `dot` `ray` `lbl-in` `sign`.

### دائرة تفاعلية
```html
<div class="circ" data-circ="basic"></div>
```
المتاح: `basic` · `resistor` · `two-lamps-series` · `motor`
دوائر جديدة تُضاف في `assets/js/circuit.js` (إضافة فقط).

### الشخصية المرشدة «فولت ⚡» — ثلاث مرّات في الدرس
```html
<div class="guide">
  <div class="guide__face">⚡</div>
  <div class="guide__bubble"><p class="mb0">كلام فولت.</p></div>
</div>
```

### سؤال
```html
<div class="quiz">
  <div class="quiz__head">العنوان<span class="quiz__badge">1</span></div>
  <div class="quiz__body">
    <p class="quiz__q">السؤال؟</p>
    <div class="quiz__opts">
      <button class="quiz__opt" data-right>الإجابة الصحيحة</button>
      <button class="quiz__opt">إجابة أخرى</button>
    </div>
    <div class="quiz__why">الشرح — يظهر تلقائيًا بعد الاختيار.</div>
  </div>
</div>
```

### تصنيف (٤ بنود كحدّ أقصى)
```html
<div class="sortq">
  <div class="sortq__item" data-answer="yes">
    <div class="sortq__row">
      <span class="sortq__label">🪙 قطعة نحاس</span>
      <span class="sortq__pick">
        <button class="sortq__btn" data-val="yes">تمرّ</button>
        <button class="sortq__btn" data-val="no">لا تمرّ</button>
      </span>
    </div>
    <div class="sortq__why">السبب — يظهر بعد الاختيار.</div>
  </div>
</div>
```

### تحذير سلامة
```html
<div class="danger">
  <div class="danger__title">العنوان</div>
  <ul><li>القاعدة الأولى</li></ul>
</div>
```

### قائمة قطع المشروع
```html
<div class="bom">
  <div class="bom__head">قطع المشروع · Bill of Materials</div>
  <table>
    <tr><th>القطعة</th><th>العدد</th><th>السعر التقريبي</th></tr>
    <tr><td>مقاومة 220Ω</td><td>1</td><td>أقل من ريال</td></tr>
  </table>
</div>
```

### كود Arduino (الأقسام الأخيرة)
```html
<div class="code">
  <div class="code__bar"><span class="code__dots"><i></i><i></i><i></i></span><span>blink.ino</span></div>
<pre><code><span class="k">void</span> <span class="f">setup</span>() {
  <span class="f">pinMode</span>(<span class="n">13</span>, OUTPUT);
}</code></pre>
</div>
```
الأصناف: `k` كلمة محجوزة · `t` نوع · `s` نص · `n` رقم · `c` تعليق · `f` دالة · `o` رموز.
**اعمل escape لـ `<` كـ `&lt;` و `&` كـ `&amp;`.**

### بطاقات · ملاحظات · خطوات
```html
<div class="grid g3">
  <div class="card card--v"><div class="card__icon">⚡</div>
    <h3 class="card__title">العنوان</h3><p class="card__body">النص</p></div>
</div>
<div class="note note--tip"><div class="note__ico">💡</div><div class="note__body">النص</div></div>
<ol class="steps" style="--acc:var(--curr)"><li><h4>الخطوة</h4><p>الشرح</p></li></ol>
```
ألوان البطاقات: `card--v` أزرق · `card--c` كهرماني · `card--r` أحمر · `card--o` أخضر · `card--b` بنفسجي
أنواع الملاحظات: `note--tip` · `note--warn` · `note--danger` · `note--fun`

### المصطلح الإنجليزي
`<span class="term">resistor</span>` — قابل للضغط: يُنطق ويعرض معناه.
كل مصطلح يجب أن يكون في `assets/js/words.js`؛ إن لم يكن، **أضفه** (إضافة فقط).

### ثنائي اللغة
- `<title>` و `data-title`: عربي · إنجليزي
- الغلاف: `<h1 class="title">…</h1>` ثم `<p class="en-title">English</p>`
- عناوين الشاشات: `<h2>العنوان <span class="en-sub">English</span></h2>`

---

## 5. المتطلّبات لكل درس

- [ ] 10–14 شاشة، كل شاشة لها هدف واحد
- [ ] **رسم `part` واحد على الأقل** لكل عنصر يشرحه الدرس
- [ ] **دائرة `circ` تفاعلية** حيثما أمكن
- [ ] **4 أنشطة على الأقل** (`quiz` أو `sortq`) مع شرح لكل إجابة
- [ ] «فولت ⚡» ثلاث مرّات
- [ ] «هل تعلم؟» مرّة على الأقل
- [ ] 8 مصطلحات إنجليزية في `<span class="term">`
- [ ] عناوين ثنائية اللغة
- [ ] صفر ألفاظ عامّية
- [ ] الستّة سكريبتات بالترتيب الصحيح
- [ ] رابط الدرس التالي صحيح

## 6. المشروع في آخر كل قسم
شاشتان أو ثلاث: قائمة القطع `bom` · خطوات التركيب `steps` · تحذير `danger` ·
«ماذا لو لم يعمل؟» بأسباب شائعة. ويُذكر بوضوح أن المشروع **اختياري**،
وأن من لا يملك القطع يكتفي بالمحاكاة.
