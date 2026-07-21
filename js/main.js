/* ============================================================
   main.js  -  スキルの星描画 & 作品クリックの処理
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- SKILLS の星（data-score をもとに★を生成） ---- */
  document.querySelectorAll(".skills__stars").forEach((el) => {
    const score = parseFloat(el.dataset.score) || 0;
    const full = Math.floor(score);
    const hasHalf = score - full >= 0.5;
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      if (i <= full) star.classList.add("on");
      else if (i === full + 1 && hasHalf) star.classList.add("half");
      el.appendChild(star);
    }
  });

  /* ---- 作品クリック ----
     いまは詳細ページが未作成なので、クリックすると案内を出すだけ。
     今後 works/picapon.html などを作ったら、下の href を
     data-work ごとのパスに変えるか、この分岐を消してください。 */
  const workPages = {
     "01": "works/picapon.html",
     "02": "works/daijobu.html",
     "03": "works/putica.html",
     "04": "works/patacle.html",
     "05": "works/kamikke.html",
     "06": "works/others.html",
  };

  document.querySelectorAll(".work__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.dataset.work;
      if (workPages[id]) {
        // 詳細ページができたらそちらへ遷移
        return; // href をそのまま使う場合
      }
      e.preventDefault();
      const name = link.querySelector(".work__name").textContent;
      alert(`「${name}」の詳細ページは準備中です。\n（js/main.js の workPages にパスを追加すると遷移できます）`);
    });
  });

});