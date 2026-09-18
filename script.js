/* =========================================================
   Kişisel Portfolyo — JavaScript
   0) Dil sistemi (TR/EN)   1) Mobil menü   2) Aktif menü bağlantısı
   2b) Terminal daktilo   2c) Yetenekler daktilosu
   2d) İlerleme çubuğu + paralaks   3) Belirme + sayaç + kart ışığı
   5) Portfolyo filtresi   6) Form
   ========================================================= */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var STORAGE_KEY = "portfolio-lang";
  var curLang = "tr";

  try {
    curLang = localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "tr";
  } catch (e) {
    /* localStorage kapalıysa varsayılan Türkçe */
  }

  /* ---------- 0) DİL SÖZLÜKLERİ ---------- */
  var DICTS = {
    tr: {
      metaTitle: "Burak Arabacı — Developer & Digital Creator",
      metaDescription: "Bilgisayar programcılığı öğrencisi, web geliştirici ve dijital tasarımcı. Web tasarım, grafik tasarım, Photoshop ve DaVinci Resolve ile video kurgu.",
      skip: "İçeriğe geç",
      "nav.about": "Hakkımda",
      "nav.skills": "Yetenekler",
      "nav.work": "Portfolyo",
      "nav.contact": "İletişim",
      navOpen: "Menüyü aç",
      navClose: "Menüyü kapat",
      "lang.switch": "Dil seçimi",
      "hero.kicker": "Sakarya Uygulamalı Bilimler Üniversitesi, Bilgisayar Programcılığı",
      "hero.role": "Developer & Digital Creator",
      "hero.lead": "Kod yazıyorum, tasarlıyorum, kurguluyorum. Bir arayüzün mantığıyla bir karenin rengini aynı özenle ele alıyor; fikirleri ekranda çalışan ve iyi görünen işlere dönüştürüyorum.",
      "hero.cta1": "Projelerimi incele",
      "hero.cta2": "Benimle çalış",
      "terminal.reader": "Frontend Developer, Video Editor & Colorist, UI/UX Designer, Bilgisayar Programcılığı Öğrencisi",
      "terminal.status": "yeni projelere açık, çalışma alanı temiz",
      "social.aria": "Sosyal medya hesaplarım",
      "about.title": "Hakkımda",
      "about.p1": "Sakarya Uygulamalı Bilimler Üniversitesi'nde Bilgisayar Programcılığı okuyorum. Yazılıma algoritmalarla başladım, ama işin beni asıl yakalayan tarafı ekranda görünen kısmı oldu: bir düğmenin nasıl hissettirdiği, bir sayfanın nasıl nefes aldığı, bir sahnenin renginin izleyiciye ne anlattığı.",
      "about.p2": "Bugün iki tarafı birlikte götürüyorum. Web projelerinde temiz, okunabilir ve mobilde de düzgün çalışan arayüzler kuruyorum. Tasarım tarafında Photoshop ile görsel işleri, DaVinci Resolve ile kurgu ve renk düzenlemeyi üstleniyorum. Bir projeyi baştan sona tek başıma taşıyabilmek, kodla tasarımı aynı masada tutmayı öğretti.",
      "about.p3": "Öğrenmeye devam ediyorum; her yeni proje, bir önceki işte eksik bıraktığım bir şeyi düzeltme fırsatı oluyor.",
      "fact.eduDt": "Eğitim",
      "fact.eduDd": "Bilgisayar Programcılığı, SUBÜ",
      "fact.focusDt": "Odak",
      "fact.focusDd": "Web geliştirme ve arayüz tasarımı",
      "fact.creativeDt": "Yaratıcı taraf",
      "fact.creativeDd": "Grafik tasarım, video kurgu, renk düzenleme",
      "fact.toolsDt": "Araçlar",
      "fact.toolsDd": "VS Code, Photoshop, DaVinci Resolve, MS Office",
      "skills.title": "Yetenekler",
      "skills.reader": "Sistemleri kodluyor, sahneleri kurguluyor ve fikirleri tasarıma döküyorum. Sürekli öğreniyor ve üretiyorum. Araçlar vizyonumu gerçeğe dönüştürmek için var. Asıl hikaye ise ortaya çıkan işlerde gizli.",
      "skill.softTitle": "Yazılım & Web",
      "skill.softDesc": "Arayüzü kuran ve çalıştıran taraf: yapı, stil ve etkileşim.",
      "skill.softM1": "Web tasarım (HTML, CSS)",
      "skill.softM3": "Bilgisayar programcılığı",
      "skill.desTitle": "Tasarım & Kurgu",
      "skill.desDesc": "Görselin ve hareketin dili: kompozisyon, ritim ve renk.",
      "skill.desM3": "Grafik tasarım",
      "skill.flowTitle": "İş Akışı",
      "skill.flowDesc": "Dosyayı, raporu ve sunumu teslim edilebilir hale getiren taraf.",
      "tag.edit": "Video kurgu",
      "tag.grade": "Renk düzenleme",
      "tag.social": "Sosyal medya",
      "tag.report": "Raporlama",
      "tag.pres": "Sunum tasarımı",
      "tag.doc": "Dokümantasyon",
      "tag.typography": "Tipografi",
      "tag.identity": "Kimlik",
      "tag.color": "Renk",
      "tag.editing": "Kurgu",
      "tag.sound": "Ses",
      "work.title": "Portfolyo",
      "work.lead": "Yazılım işleriyle görsel işler aynı yerde duruyor; ikisi de aynı işin parçası.",
      "work.1t": "Kişisel portfolyo arayüzü",
      "work.1d": "HTML, CSS ve JavaScript ile sıfırdan kurulan, mobil öncelikli tek sayfa tasarım.",
      "work.link1": "Kişisel portfolyo arayüzü projesini gör",
      "work.2t": "Kafe menü sitesi",
      "work.2d": "Ürünleri kategoriye göre süzen, telefonda tek elle kullanılabilen küçük bir vitrin.",
      "work.link2": "Kafe menü sitesi projesini gör",
      "work.3t": "Etkinlik afiş serisi",
      "work.3d": "Photoshop'ta hazırlanan, baskı ve sosyal medya ölçülerine uyarlanmış afiş ailesi.",
      "work.link3": "Etkinlik afiş serisi projesini gör",
      "work.4t": "Marka kimliği çalışması",
      "work.4d": "Logo, renk ve tipografi kararlarının tek bir kullanım kılavuzunda toplanması.",
      "work.link4": "Marka kimliği çalışmasını gör",
      "work.5t": "Kısa film renk düzenlemesi",
      "work.5d": "DaVinci Resolve'da sahne bazlı denge, ten tonu düzeltmesi ve final look.",
      "work.link5": "Kısa film renk düzenlemesi projesini gör",
      "work.6t": "Tanıtım videosu kurgusu",
      "work.6d": "Çekim seçimi, ritim, altyazı ve ses dengesiyle bir dakikalık tanıtım kurgusu.",
      "work.link6": "Tanıtım videosu kurgusunu gör",
      "cat.web": "Web",
      "cat.design": "Grafik",
      "cat.video": "Video",
      "f.all": "Tümü",
      "f.design": "Grafik",
      "work.empty": "Bu kategoride henüz proje yok.",
      "contact.title": "İletişim",
      "contact.lead": "Bir projeniz, bir fikriniz ya da sadece bir sorunuz varsa yazın. Genellikle aynı gün dönüyorum.",
      "form.name": "Adınız",
      "form.email": "E-posta",
      "form.subject": "Konu",
      "form.message": "Mesaj",
      "form.nameErr": "Adınızı yazın.",
      "form.emailErr": "Geçerli bir e-posta adresi yazın.",
      "form.messageErr": "Birkaç satır da olsa bir şeyler yazın.",
      "form.submit": "Mesajı gönder",
      formInvalid: "Formda eksik alanlar var.",
      formMailtoSubject: "Portfolyo sitesinden mesaj",
      formOk: "Mesajınız e-posta uygulamanızda açıldı. Göndermek için son tıklama sizde.",
      "footer.tagline": "Konya'dan, kod ve renkle.",
      heroTitles: [
        "Frontend Developer",
        "Video Editor & Colorist",
        "UI/UX Designer",
        "Bilgisayar Programcılığı Öğrencisi"
      ],
      skillsSentences: [
        "Sistemleri kodluyor, sahneleri kurguluyor ve fikirleri tasarıma döküyorum. Sürekli öğreniyor ve üretiyorum.",
        "Araçlar vizyonumu gerçeğe dönüştürmek için var. Asıl hikaye ise ortaya çıkan işlerde gizli."
      ]
    },

    en: {
      metaTitle: "Burak Arabacı — Developer & Digital Creator",
      metaDescription: "Computer programming student, web developer and digital creator. Web design, graphic design, and video editing with Photoshop and DaVinci Resolve.",
      skip: "Skip to content",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.work": "Portfolio",
      "nav.contact": "Contact",
      navOpen: "Open menu",
      navClose: "Close menu",
      "lang.switch": "Language",
      "hero.kicker": "Sakarya University of Applied Sciences, Computer Programming",
      "hero.role": "Developer & Digital Creator",
      "hero.lead": "I write code, design, and edit. I treat the logic of an interface and the color of a frame with the same care, turning ideas into work that runs and looks good on screen.",
      "hero.cta1": "View my projects",
      "hero.cta2": "Work with me",
      "terminal.reader": "Frontend Developer, Video Editor & Colorist, UI/UX Designer, Computer Programming Student",
      "terminal.status": "open to new projects, workspace clean",
      "social.aria": "My social media accounts",
      "about.title": "About Me",
      "about.p1": "I study Computer Programming at Sakarya University of Applied Sciences. I started with algorithms, but what really caught me was the visible part of the work: how a button feels, how a page breathes, what the color of a frame tells the viewer.",
      "about.p2": "Today I carry both sides together. In web projects I build clean, readable interfaces that also work well on mobile. On the design side, I handle visual work with Photoshop and editing and color grading with DaVinci Resolve. Being able to take a project from start to finish on my own taught me to keep code and design at the same table.",
      "about.p3": "I keep learning; every new project is a chance to fix something I left unfinished in the previous one.",
      "fact.eduDt": "Education",
      "fact.eduDd": "Computer Programming, SUBÜ",
      "fact.focusDt": "Focus",
      "fact.focusDd": "Web development and UI design",
      "fact.creativeDt": "Creative side",
      "fact.creativeDd": "Graphic design, video editing, color grading",
      "fact.toolsDt": "Tools",
      "fact.toolsDd": "VS Code, Photoshop, DaVinci Resolve, MS Office",
      "skills.title": "Skills",
      "skills.reader": "I code systems, edit scenes, and turn ideas into design. I keep learning and creating. Tools exist to turn my vision into reality. The real story lives in the finished work.",
      "skill.softTitle": "Software & Web",
      "skill.softDesc": "The side that builds and runs the interface: structure, style, and interaction.",
      "skill.softM1": "Web design (HTML, CSS)",
      "skill.softM3": "Computer programming",
      "skill.desTitle": "Design & Editing",
      "skill.desDesc": "The language of visuals and motion: composition, rhythm, and color.",
      "skill.desM3": "Graphic design",
      "skill.flowTitle": "Workflow",
      "skill.flowDesc": "The side that makes files, reports, and presentations deliverable.",
      "tag.edit": "Video editing",
      "tag.grade": "Color grading",
      "tag.social": "Social media",
      "tag.report": "Reporting",
      "tag.pres": "Presentation design",
      "tag.doc": "Documentation",
      "tag.typography": "Typography",
      "tag.identity": "Identity",
      "tag.color": "Color",
      "tag.editing": "Editing",
      "tag.sound": "Sound",
      "work.title": "Portfolio",
      "work.lead": "Software work and visual work stand in the same place; both are part of the same craft.",
      "work.1t": "Personal portfolio interface",
      "work.1d": "A mobile-first one-page design built from scratch with HTML, CSS, and JavaScript.",
      "work.link1": "View the personal portfolio interface project",
      "work.2t": "Café menu website",
      "work.2d": "A small storefront that filters products by category and works one-handed on a phone.",
      "work.link2": "View the café menu website project",
      "work.3t": "Event poster series",
      "work.3d": "A family of posters made in Photoshop, adapted to print and social media sizes.",
      "work.link3": "View the event poster series project",
      "work.4t": "Brand identity project",
      "work.4d": "A single usage guide bringing together logo, color, and typography decisions.",
      "work.link4": "View the brand identity project",
      "work.5t": "Short film color grading",
      "work.5d": "Scene-based balance, skin-tone correction, and final grade in DaVinci Resolve.",
      "work.link5": "View the short film color grading project",
      "work.6t": "Promo video edit",
      "work.6d": "A one-minute promo edit built on shot selection, pacing, subtitles, and sound balance.",
      "work.link6": "View the promo video edit",
      "cat.web": "Web",
      "cat.design": "Design",
      "cat.video": "Video",
      "f.all": "All",
      "f.design": "Design",
      "work.empty": "No projects in this category yet.",
      "contact.title": "Contact",
      "contact.lead": "If you have a project, an idea, or just a question, write to me. I usually reply the same day.",
      "form.name": "Your name",
      "form.email": "Email",
      "form.subject": "Subject",
      "form.message": "Message",
      "form.nameErr": "Please enter your name.",
      "form.emailErr": "Please enter a valid email address.",
      "form.messageErr": "Please write something, even a few lines.",
      "form.submit": "Send message",
      formInvalid: "Some required fields are incomplete.",
      formMailtoSubject: "Message from portfolio website",
      formOk: "Your message was opened in your email app. The final click is yours.",
      "footer.tagline": "From Konya, with code and color.",
      heroTitles: [
        "Frontend Developer",
        "Video Editor & Colorist",
        "UI/UX Designer",
        "Computer Programming Student"
      ],
      skillsSentences: [
        "I code systems, edit scenes, and turn ideas into design. I keep learning and creating.",
        "Tools exist to turn my vision into reality. The real story lives in the finished work."
      ]
    }
  };

  /* ---------- DAKTİLO MOTORU ----------
     Aynı fonksiyon hem hero terminalindeki unvanlar hem de yetenekler
     bölümündeki cümleler için kullanılır. Dil değişince timer temizlenir
     ve liste yeniden en baştan yazılır. */
  function runTypewriter(el, items, o) {
    if (!el) return;
    if (el._twTimer) {
      clearTimeout(el._twTimer);
      el._twTimer = null;
    }
    if (reduceMotion) {
      el.textContent = items[0];
      return;
    }

    var i = 0;
    var ci = 0;
    var erasing = false;

    (function tick() {
      var current = items[i];
      var delay;

      if (!erasing) {
        ci++;
        el.textContent = current.slice(0, ci);

        if (ci === current.length) {
          erasing = true;
          delay = o.hold;
        } else {
          delay = o.type;
        }
      } else {
        ci--;
        el.textContent = current.slice(0, ci);

        if (ci === 0) {
          erasing = false;
          i = (i + 1) % items.length;   // sonsuz döngü
          delay = o.holdEmpty;
        } else {
          delay = o.erase;
        }
      }

      el._twTimer = setTimeout(tick, delay);
    })();
  }

  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var typeTargetEl = document.getElementById("typeTarget");
  var skillsTextEl = document.getElementById("skillsTypewriterText");

  /* ---------- DİL UYGULAMA ---------- */
  function setLang(lang, restartTw) {
    curLang = lang === "en" ? "en" : "tr";
    var d = DICTS[curLang];

    document.documentElement.lang = curLang;

    var pageTitle = document.getElementById("pageTitle");
    if (pageTitle) pageTitle.textContent = d.metaTitle;

    var metaDesc = document.getElementById("metaDesc");
    if (metaDesc) metaDesc.setAttribute("content", d.metaDescription);

    // data-i18n olan metin öğeleri (data-i18n-attr içerenler hariç, çünkü onlar
    // sadece nitelik değiştirir ve içinde alt öğeler barındırabilir)
    var textNodes = document.querySelectorAll("[data-i18n]:not([data-i18n-attr])");
    Array.prototype.forEach.call(textNodes, function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && d[key]) el.textContent = d[key];
    });

    // data-i18n-attr olan öğelerde yalnızca nitelik güncellenir
    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    Array.prototype.forEach.call(attrNodes, function (el) {
      var key = el.getAttribute("data-i18n");
      var attr = el.getAttribute("data-i18n-attr");
      if (key && d[key]) el.setAttribute(attr, d[key]);
    });

    // Dil düğmelerinin aktif hali
    var langBtns = document.querySelectorAll(".lang-btn");
    Array.prototype.forEach.call(langBtns, function (btn) {
      var active = btn.getAttribute("data-lang") === curLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    if (navToggle) {
      navToggle.setAttribute("aria-label", nav.classList.contains("is-open") ? d.navClose : d.navOpen);
    }

    var fStatus = document.getElementById("formStatus");
    if (fStatus) {
      fStatus.textContent = "";
      fStatus.classList.remove("is-ok");
    }

    // Dil değişince daktilo animasyonları yeni sözlükle yeniden başlar
    if (restartTw) {
      runTypewriter(typeTargetEl, d.heroTitles, { type: 75, erase: 38, hold: 1500, holdEmpty: 320 });
      runTypewriter(skillsTextEl, d.skillsSentences, { type: 32, erase: 18, hold: 2200, holdEmpty: 400 });
    }

    try {
      localStorage.setItem(STORAGE_KEY, curLang);
    } catch (e) { /* sessizce geç */ }
  }

  // İlk yük: kayıtlı dili uygula
  setLang(curLang);

  /* ---------- DİL DÜĞMESİ ---------- */
  var langBtns = document.querySelectorAll(".lang-btn");
  Array.prototype.forEach.call(langBtns, function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-lang") === "tr" ? "tr" : "en";
      if (target !== curLang) setLang(target, true);
    });
  });

  // Hero daktilo animasyonunu başlat
  if (typeTargetEl) {
    runTypewriter(typeTargetEl, DICTS[curLang].heroTitles, { type: 75, erase: 38, hold: 1500, holdEmpty: 320 });
  }

  /* ---------- 1) MOBİL MENÜ ---------- */
  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", DICTS[curLang].navOpen);
  }

  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? DICTS[curLang].navClose : DICTS[curLang].navOpen);
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

  /* ---------- 2d) KAYDIRMA İLERLEMESİ + HERO PARALAKSI ----------
     rAF ile sınırlanır; paralaks hareketi azalt tercihinde çalışmaz. */
  var progressEl = document.getElementById("scrollProgress");
  var terminalEl = document.querySelector(".terminal");
  var motionQueued = false;

  function updateMotion() {
    motionQueued = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progressEl) progressEl.style.transform = "scaleX(" + p.toFixed(4) + ")";
    if (terminalEl && !reduceMotion) {
      terminalEl.style.setProperty("--py", (-Math.min(window.scrollY, 600) * 0.05).toFixed(1) + "px");
    }
  }
  function queueMotion() {
    if (motionQueued) return;
    motionQueued = true;
    window.requestAnimationFrame(updateMotion);
  }
  window.addEventListener("scroll", queueMotion, { passive: true });
  window.addEventListener("resize", queueMotion);
  updateMotion();

  /* ---------- 2c) YETENEKLER — DAKTİLO (TYPEWRITER) METNİ ----------
     Hero'daki daktilo efektinden tamamen bağımsız: kendi fonksiyon kapsamı,
     kendi elementi (#skillsTypewriterText) ve kendi gözlemcisi var; hero'nun
     animasyonuyla hiç kesişmiyor. Dil değişiminde setLang() yeniden çalıştırır. */
  (function skillsTypewriterModule() {
    if (!skillsTextEl) return;

    if (reduceMotion) {
      skillsTextEl.textContent = DICTS[curLang].skillsSentences[0];
      return;
    }

    var started = false;

    function start() {
      if (started) return;
      started = true;
      runTypewriter(skillsTextEl, DICTS[curLang].skillsSentences, { type: 32, erase: 18, hold: 2200, holdEmpty: 400 });
    }

    // Sadece kullanıcı bölüme yaklaştığında başlat
    if ("IntersectionObserver" in window) {
      var typewriterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          typewriterObserver.disconnect();
          start();
        });
      }, { threshold: 0.3 });

      typewriterObserver.observe(document.getElementById("skillsTypewriter"));
    } else {
      start();
    }
  })();

  var reveals = document.querySelectorAll(".reveal");
  var meters = document.querySelectorAll(".meter-fill");

  function fillMeter(el) {
    var level = parseInt(el.dataset.level, 10) || 0;
    el.style.width = level + "%";
    if (reduceMotion) return;

    // Yüzde, bar dolarken 0'dan hedefe sayar
    var meter = el.closest(".meter");
    var valEl = meter && meter.querySelector(".meter-val");
    if (!valEl) return;
    var t0 = null;
    valEl.textContent = "0%";
    function step(ts) {
      if (t0 === null) t0 = ts;
      var t = Math.min(1, (ts - t0) / 900);
      var eased = 1 - Math.pow(1 - t, 3);
      valEl.textContent = Math.round(level * eased) + "%";
      if (t < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  // Kartlar/liste öğeleri için sıra numarası (CSS'te gecikmeyi belirler)
  var STAGGER = ".fact, .skill-card, .work-card, .socials > li, .field";
  Array.prototype.forEach.call(reveals, function (sec) {
    var lastParent = null, n = 0;
    Array.prototype.forEach.call(sec.querySelectorAll(STAGGER), function (item) {
      if (item.parentElement !== lastParent) { lastParent = item.parentElement; n = 0; }
      item.style.setProperty("--i", n++);
    });
  });

  /* ---------- 3b) KART IŞIĞI (imleci izler) ---------- */
  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    Array.prototype.forEach.call(document.querySelectorAll(".skill-card, .work-card"), function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
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
        if (match) {
          card.style.setProperty("--i", shown); // yeniden beliren kartlar sırayla gelir
          shown++;
        }
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
    var d = DICTS[curLang];

    var firstInvalid = null;
    rules.forEach(function (rule) {
      var ok = validateField(rule);
      if (!ok && !firstInvalid) firstInvalid = document.getElementById(rule.id);
    });

    if (firstInvalid) {
      status.textContent = d.formInvalid;
      status.classList.remove("is-ok");
      firstInvalid.focus();
      return;
    }

    /* Form bir sunucuya bağlı değil; gönderim e-posta uygulamasında açılır.
       Formspree / Netlify Forms gibi bir servise bağlamak isterseniz
       aşağıdaki bloğu fetch() çağrısıyla değiştirin. */
    var subject = document.getElementById("subject").value.trim() || d.formMailtoSubject;
    var body =
      document.getElementById("message").value +
      "\n\n— " + document.getElementById("name").value +
      " (" + document.getElementById("email").value + ")";

    window.location.href =
      "mailto:mail@ornek.com?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    status.textContent = d.formOk;
    status.classList.add("is-ok");
    form.reset();
  });

  /* ---------- Footer yılı ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();