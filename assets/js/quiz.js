/* ============================================================
   النشاط التفاعلي بدون كود — للدروس التمهيدية (01 إلى 04)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- سؤال باختيارات ----------
     <div class="quiz">
       <div class="quiz__head">سؤال سريع<span class="quiz__badge">1</span></div>
       <div class="quiz__body">
         <p class="quiz__q">…السؤال…</p>
         <div class="quiz__opts">
           <button class="quiz__opt" data-right>الإجابة الصحيحة</button>
           <button class="quiz__opt">إجابة أخرى</button>
         </div>
         <div class="quiz__why">…الشرح…</div>
       </div>
     </div>
  ------------------------------------------- */
  document.querySelectorAll('.quiz').forEach((quiz) => {
    const opts = Array.from(quiz.querySelectorAll('.quiz__opt'));
    const why  = quiz.querySelector('.quiz__why');
    if (!opts.length) return;

    opts.forEach((opt) => {
      opt.addEventListener('click', () => {
        if (opts.some(o => o.disabled)) return;      // أُجيب من قبل
        const right = opt.hasAttribute('data-right');

        opts.forEach((o) => {
          o.disabled = true;
          if (o.hasAttribute('data-right')) o.classList.add('is-right');
        });
        if (!right) opt.classList.add('is-wrong');

        if (why) why.classList.add('is-on');
        if (right && window.PyLab && window.PyLab.celebrate) window.PyLab.celebrate();
      });
    });
  });

  /* ---------- نشاط التصنيف ----------
     <div class="sortq">
       <div class="sortq__item" data-answer="hardware">
         <span class="sortq__label">الشاشة</span>
         <span class="sortq__pick">
           <button class="sortq__btn" data-val="hardware">Hardware</button>
           <button class="sortq__btn" data-val="software">Software</button>
         </span>
       </div>
     </div>
  ------------------------------------------- */
  document.querySelectorAll('.sortq__item').forEach((item) => {
    const answer = item.dataset.answer;
    const btns = Array.from(item.querySelectorAll('.sortq__btn'));
    const why = item.querySelector('.sortq__why');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btns.some(b => b.disabled)) return;
        btns.forEach(b => { b.disabled = true; });
        item.classList.add('is-done');

        const correct = btn.dataset.val === answer;
        // نلوّن الزرّ الذي اختاره فقط — حتى يعرف ماذا اختار
        btn.classList.add(correct ? 'picked-right' : 'picked-wrong');
        if (!correct) {
          const good = btns.find(b => b.dataset.val === answer);
          if (good) good.classList.add('answer');   // إطار متقطّع، لا تعبئة
        }

        if (why) why.classList.add('is-on');        // اشرح السبب دائمًا

        // احتفال عند إتمام كل البنود دون خطأ
        const group = item.closest('.sortq');
        if (!group) return;
        const all = Array.from(group.querySelectorAll('.sortq__item'));
        const done = all.every(i => i.classList.contains('is-done'));
        const perfect = all.every(i => !i.querySelector('.picked-wrong'));
        if (done && perfect && window.PyLab && window.PyLab.celebrate) window.PyLab.celebrate();
      });
    });
  });
})();
