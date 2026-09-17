/* =========================================================
   Kişisel Portfolyo — JavaScript
   1) Mobil menü   2) Aktif menü bağlantısı   3) Bölüm animasyonu
   4) Yetkinlik göstergeleri   5) Portfolyo filtresi   6) Form
   ========================================================= */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1) MOBİL MENÜ ---------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");

  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Menüyü aç");
  }

  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
  });

  // Bir bağlantıya tıklanınca menü kapansın
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeNav();
  });

  // Escape ile kapat
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  /* ---------- 2) ÜST MENÜ DURUMU + AKTİF BAĞLANTI ---------- */
  var header = document.getElementById("siteHeader");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  function onScroll() {
    header.classList.toggle("is-stuck", window.scrollY > 8);

    // Ekranın üst üçte birine en yakın bölümü aktif say
    var pos = window.scrollY + window.innerHeight * 0.3;
    var current = sections.filter(function (s) { return s.offsetTop <= pos; }).pop();

    navLinks.forEach(function (link) {
      var match = current && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("is-active", Boolean(match));
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2b) TERMİNAL DAKTİLO EFEKTİ ---------- */
  var typeTarget = document.getElementById("typeTarget");

  if (typeTarget) {
    var titles = [
      "Frontend Developer",
      "Video Editor & Colorist",
      "UI/UX Designer",
      "Bilgisayar Programcılığı Öğrencisi"
    ];

    var TYPE_SPEED = 75;     // harf yazma hızı (ms)
    var ERASE_SPEED = 38;    // harf silme hızı (ms)
    var HOLD_FULL = 1500;    // tamamlanan yazının ekranda kalma süresi
    var HOLD_EMPTY = 320;    // sonraki unvana geçmeden önceki bekleme

    if (reduceMotion) {
      // Hareketi azalt tercihinde animasyon yok: ilk unvan sabit durur
      typeTarget.textContent = titles[0];
    } else {
      var titleIndex = 0;
      var charIndex = 0;
      var erasing = false;

      (function tick() {
        var current = titles[titleIndex];
        var delay;

        if (!erasing) {
          charIndex++;
          typeTarget.textContent = current.slice(0, charIndex);

          if (charIndex === current.length) {
            erasing = true;
            delay = HOLD_FULL;
          } else {
            delay = TYPE_SPEED;
          }
        } else {
          charIndex--;
          typeTarget.textContent = current.slice(0, charIndex);

          if (charIndex === 0) {
            erasing = false;
            titleIndex = (titleIndex + 1) % titles.length;   // sonsuz döngü
            delay = HOLD_EMPTY;
          } else {
            delay = ERASE_SPEED;
          }
        }

        setTimeout(tick, delay);
      })();
    }
  }

  /* ---------- 3) BÖLÜM ANİMASYONU + 4) YETKİNLİK GÖSTERGELERİ ---------- */
  var reveals = document.querySelectorAll(".reveal");
  var meters = document.querySelectorAll(".meter-fill");

  function fillMeter(el) {
    el.style.width = (parseInt(el.dataset.level, 10) || 0) + "%";
  }

  if (!("IntersectionObserver" in window) || reduceMotion) {
    // Destek yoksa ya da kullanıcı hareketi azaltmışsa her şey doğrudan görünür
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    meters.forEach(fillMeter);
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        // Bölüm göründüğünde içindeki göstergeler dolar
        entry.target.querySelectorAll(".meter-fill").forEach(fillMeter);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 5) PORTFOLYO FİLTRESİ ---------- */
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".work-card"));
  var emptyNote = document.getElementById("workEmpty");

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.dataset.filter;

      filters.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      var shown = 0;
      cards.forEach(function (card) {
        var match = value === "all" || card.dataset.cat === value;
        card.hidden = !match;
        if (match) shown++;
      });

      emptyNote.hidden = shown > 0;
    });
  });

  /* ---------- 6) İLETİŞİM FORMU ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  var rules = [
    { id: "name",    error: "nameError",    test: function (v) { return v.trim().length > 1; } },
    { id: "email",   error: "emailError",   test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); } },
    { id: "message", error: "messageError", test: function (v) { return v.trim().length > 9; } }
  ];

  function validateField(rule) {
    var input = document.getElementById(rule.id);
    var error = document.getElementById(rule.error);
    var ok = rule.test(input.value);

    error.hidden = ok;
    input.setAttribute("aria-invalid", String(!ok));
    return ok;
  }

  // Alandan çıkınca anında geri bildirim
  rules.forEach(function (rule) {
    document.getElementById(rule.id).addEventListener("blur", function () { validateField(rule); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var firstInvalid = null;
    rules.forEach(function (rule) {
      var ok = validateField(rule);
      if (!ok && !firstInvalid) firstInvalid = document.getElementById(rule.id);
    });

    if (firstInvalid) {
      status.textContent = "Formda eksik alanlar var.";
      status.classList.remove("is-ok");
      firstInvalid.focus();
      return;
    }

    /* Form bir sunucuya bağlı değil; gönderim e-posta uygulamasında açılır.
       Formspree / Netlify Forms gibi bir servise bağlamak isterseniz
       aşağıdaki bloğu fetch() çağrısıyla değiştirin. */
    var subject = document.getElementById("subject").value.trim() || "Portfolyo sitesinden mesaj";
    var body =
      document.getElementById("message").value +
      "\n\n— " + document.getElementById("name").value +
      " (" + document.getElementById("email").value + ")";

    window.location.href =
      "mailto:mail@ornek.com?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    status.textContent = "Mesajınız e-posta uygulamanızda açıldı. Göndermek için son tıklama sizde.";
    status.classList.add("is-ok");
    form.reset();
  });

  /* ---------- Footer yılı ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
