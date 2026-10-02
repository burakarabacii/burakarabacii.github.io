/* =========================================================
   Kişisel Portfolyo — JavaScript
   0) Dil sistemi (TR/EN)   1) Mobil menü   2) Aktif menü bağlantısı
   2b) Terminal daktilo
   2d) İlerleme çubuğu + paralaks   3) Belirme + kart ışığı
   4) Proje detay penceresi   5) Portfolyo filtresi   6) Form
   0b) Tema (açık/koyu)
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
      "hero.cv": "CV indir",
      "theme.toggle": "Koyu tema",
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
      "skills.w1": "Kodluyorum",
      "skills.w2": "Tasarlıyorum",
      "skills.w3": "Kurguluyorum",
      "skills.tag": "Üçü de aynı işin parçası.",
      "skill.softTitle": "Yazılım & Web",
      "skill.softDesc": "Arayüzü kuran ve çalıştıran taraf: yapı, stil ve etkileşim.",
      "skill.softM1": "Web tasarım (HTML, CSS)",
      "skill.softM3": "Bilgisayar programcılığı",
      "skill.desTitle": "Tasarım & Kurgu",
      "skill.desDesc": "Görselin ve hareketin dili: kompozisyon, ritim ve renk.",
      "skill.desM3": "Grafik tasarım",
      "skill.flowTitle": "İş Akışı",
      "skill.flowDesc": "Dosyayı, raporu ve sunumu teslim edilebilir hale getiren taraf.",
      "level.advanced": "İleri",
      "level.intermediate": "Orta",
      "level.beginning": "Başlangıç",
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
      "work.7t": "Müzik işletmesi web sitesi",
      "work.7d": "Müzik işletmeleri için hazırlanan; ders, mağaza, ses sistemi ve organizasyonu tek sayfada toplayan tanıtım sitesi.",
      "work.link7": "Müzik işletmesi web sitesi projesini gör",
      "cat.web": "Web",
      "cat.design": "Grafik",
      "cat.video": "Video",
      "f.all": "Tümü",
      "f.design": "Grafik",
      "work.empty": "Bu kategoride henüz proje yok.",
      "work.more": "Diğer çalışmalar",
      "gh.title": "Kaynak kodlar",
      "gh.lead": "GitHub'daki son çalışmalarım. Liste canlı olarak GitHub'dan gelir.",
      "gh.loading": "repolar yükleniyor…",
      "gh.error": "repolar şu an alınamadı, profili aşağıdan açabilirsiniz.",
      "gh.empty": "henüz herkese açık repo yok.",
      "nav.certs": "Sertifikalar",
      "cert.title": "Sertifikalar",
      "cert.lead": "Aldığım eğitimler ve belgeler. Listeden birini seçince sertifika yanda büyür.",
      "cert.c.web": "Web",
      "cert.c.design": "Grafik",
      "cert.c.other": "Genel",
      "cert.kind": "Başarı sertifikası",
      "cert.issuer": "Veren kurum",
      "cert.year": "Yıl",
      "cert.id": "Belge no",
      "cert.open": "Sertifikayı aç",
      "cert.empty": "Bu kategoride henüz sertifika yok.",
      "tl.title": "Yolculuğum",
      "tl.now": "Bugün",
      "tl.1t": "Makineden yazılıma",
      "tl.1d": "Liseyi Altınküre Teknokent'te Makine ve Tasarım Teknolojileri bölümünde okudum. Ancak bilgisayar dünyasının dinamik yapısı beni daha çok çektiği için rotamı yazılıma çevirdim.",
      "tl.2t": "Tasarımı dijitale taşımak",
      "tl.2d": "Tasarım geçmişimin verdiği bakış açısıyla dijital tarafa yöneldim. Arayüz tasarımı, Photoshop ve DaVinci Resolve ile görsel üretim ve kurgu süreçlerine odaklandım.",
      "tl.3t": "SUBÜ, Bilgisayar Programcılığı",
      "tl.3d": "Bilgisayara olan tutkumu akademik bir temele oturtmak için Sakarya Uygulamalı Bilimler Üniversitesi'nde Bilgisayar Programcılığı bölümünü tercih ettim.",
      "tl.4t": "İki disiplini birleştirmek",
      "tl.4d": "Tasarım gözümü ve yazılım bilgimi tek potada eritiyorum. İnteraktif web projelerini hem kodluyor hem tasarlıyor, bir işi baştan sona tek başıma hayata geçiriyorum.",
      "pd.close": "Pencereyi kapat",
      "pd.prev": "Önceki proje",
      "pd.next": "Sonraki proje",
      "pd.cat": "Kategori",
      "pd.tools": "Araçlar",
      "pd.year": "Yıl",
      "pd.visit": "Projeyi aç",
      "pd.problem": "Sorun",
      "pd.approach": "Yaklaşım",
      "pd.result": "Sonuç",
      "pd.source": "Kaynak kod",
      "pd.image": "Görsel",
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
      "footer.tagline": "Tüm Hakları Saklıdır",
      heroTitles: [
        "Frontend Developer",
        "Video Editor & Colorist",
        "UI/UX Designer",
        "Bilgisayar Programcılığı Öğrencisi"
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
      "hero.cv": "Download CV",
      "theme.toggle": "Dark theme",
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
      "skills.w1": "I code",
      "skills.w2": "I design",
      "skills.w3": "I edit",
      "skills.tag": "All three are part of the same job.",
      "skill.softTitle": "Software & Web",
      "skill.softDesc": "The side that builds and runs the interface: structure, style, and interaction.",
      "skill.softM1": "Web design (HTML, CSS)",
      "skill.softM3": "Computer programming",
      "skill.desTitle": "Design & Editing",
      "skill.desDesc": "The language of visuals and motion: composition, rhythm, and color.",
      "skill.desM3": "Graphic design",
      "skill.flowTitle": "Workflow",
      "skill.flowDesc": "The side that makes files, reports, and presentations deliverable.",
      "level.advanced": "Advanced",
      "level.intermediate": "Intermediate",
      "level.beginning": "Beginning",
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
      "work.7t": "Music business website",
      "work.7d": "A promo site for music businesses that brings lessons, store, sound system rental, and events together on one page.",
      "work.link7": "View the music business website project",
      "cat.web": "Web",
      "cat.design": "Design",
      "cat.video": "Video",
      "f.all": "All",
      "f.design": "Design",
      "work.empty": "No projects in this category yet.",
      "work.more": "More work",
      "gh.title": "Source code",
      "gh.lead": "My latest work on GitHub. The list comes live from GitHub.",
      "gh.loading": "loading repos…",
      "gh.error": "could not load repos right now, open the profile below.",
      "gh.empty": "no public repos yet.",
      "nav.certs": "Certificates",
      "cert.title": "Certificates",
      "cert.lead": "Courses and credentials I have earned. Pick one from the list and it opens large on the side.",
      "cert.c.web": "Web",
      "cert.c.design": "Design",
      "cert.c.other": "General",
      "cert.kind": "Certificate of achievement",
      "cert.issuer": "Issued by",
      "cert.year": "Year",
      "cert.id": "Credential ID",
      "cert.open": "Open certificate",
      "cert.empty": "No certificates in this category yet.",
      "tl.title": "My path",
      "tl.now": "Today",
      "tl.1t": "From machines to software",
      "tl.1d": "I attended high school at Altınküre Teknokent, in the Machinery and Design Technologies department. But the dynamic nature of the computer world pulled me in more, so I changed my course toward software.",
      "tl.2t": "Taking design digital",
      "tl.2d": "With the perspective my design background gave me, I moved toward the digital side. I focused on interface design and on visual production and editing with Photoshop and DaVinci Resolve.",
      "tl.3t": "SUBÜ, Computer Programming",
      "tl.3d": "To give my passion for computers an academic foundation, I chose the Computer Programming program at Sakarya University of Applied Sciences.",
      "tl.4t": "Combining two disciplines",
      "tl.4d": "I fuse my designer's eye and my software knowledge in one pot. I both code and design interactive web projects, and I bring a job to life from start to finish on my own.",
      "pd.close": "Close dialog",
      "pd.prev": "Previous project",
      "pd.next": "Next project",
      "pd.cat": "Category",
      "pd.tools": "Tools",
      "pd.year": "Year",
      "pd.visit": "Open project",
      "pd.problem": "Problem",
      "pd.approach": "Approach",
      "pd.result": "Outcome",
      "pd.source": "Source code",
      "pd.image": "Image",
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
      "footer.tagline": "All rights reserved",
      heroTitles: [
        "Frontend Developer",
        "Video Editor & Colorist",
        "UI/UX Designer",
        "Computer Programming Student"
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

    // CV bağlantısı seçili dile göre (data-href-tr / data-href-en)
    var cvLink = document.getElementById("cvLink");
    if (cvLink) {
      var cvHref = cvLink.getAttribute("data-href-" + curLang);
      if (cvHref) cvLink.setAttribute("href", cvHref);
    }

    if (typeof renderCerts === "function") renderCerts();
    if (typeof renderGh === "function") renderGh();

    var fStatus = document.getElementById("formStatus");
    if (fStatus) {
      fStatus.textContent = "";
      fStatus.classList.remove("is-ok");
    }

    // Dil değişince daktilo animasyonları yeni sözlükle yeniden başlar
    if (restartTw) {
      runTypewriter(typeTargetEl, d.heroTitles, { type: 75, erase: 38, hold: 1500, holdEmpty: 320 });
    }

    try {
      localStorage.setItem(STORAGE_KEY, curLang);
    } catch (e) { /* sessizce geç */ }
  }

  // İlk yük: kayıtlı dili uygula
  setLang(curLang);

  /* ---------- 0b) TEMA (açık / koyu) ----------
     İlk değer <head> içindeki küçük betikle atanır; burada düğme ve
     işletim sistemi değişimi yönetilir. Seçim localStorage'da saklanır. */
  var THEME_KEY = "portfolio-theme";
  var htmlEl = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      var v = localStorage.getItem(THEME_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch (e) { return null; }
  }
  function applyTheme(t) {
    htmlEl.setAttribute("data-theme", t);
    if (themeBtn) themeBtn.setAttribute("aria-pressed", String(t === "dark"));
  }

  applyTheme(savedTheme() || (darkQuery.matches ? "dark" : "light"));

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      if (!reduceMotion) {
        htmlEl.classList.add("theme-switching");
        window.setTimeout(function () { htmlEl.classList.remove("theme-switching"); }, 350);
      }
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* sessizce geç */ }
    });
  }

  // Kullanıcı kendi seçimini yapmadıysa işletim sistemi değişimini izle
  function onSystemTheme(e) {
    if (!savedTheme()) applyTheme(e.matches ? "dark" : "light");
  }
  if (darkQuery.addEventListener) darkQuery.addEventListener("change", onSystemTheme);
  else if (darkQuery.addListener) darkQuery.addListener(onSystemTheme);

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

  var reveals = document.querySelectorAll(".reveal");

  // Kartlar/liste öğeleri için sıra numarası (CSS'te gecikmeyi belirler)
  var STAGGER = ".fact, .skill-card, .work-card, .socials > li, .field, .tl-item";
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
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
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
      syncMore();
    });
  });

  /* ---------- 4) PROJE DETAY PENCERESİ ----------
     Gerçek görselleri buradan tanımlayın (dosyalar img/ klasörüne).
     - images: ilk görsel kart kapağıdır; birden fazla yazarsanız pencerede küçük önizlemeler çıkar
     - year / url / repo: boş bırakılanlar pencerede hiç gösterilmez
     - fit: "contain" yazarsanız görsel pencerede kırpılmadan, tamamı görünür (geniş ekran görüntüleri için)
     Görsel bulunamazsa kart, degrade kapağıyla görünmeye devam eder. */
  /* Yeni proje eklemek için:
     1) index.html'de bir <article class="work-card"> kopyalayıp data-project numarasını değiştirin.
     2) Aşağıya aynı numarayla bir kayıt ekleyin; story'deki 3 satır detay penceresinde "Sorun / Yaklaşım / Sonuç" olarak görünür.
     3) Metinler için TR/EN sözlüğüne work.Nt / work.Nd / work.linkN anahtarlarını ekleyin (7 numaralı kayda bakın). */
  var PROJECTS = {
    7: {
      images: ["img/proje-7.webp"], fit: "contain", year: "2026", url: "https://muziksitesi.vercel.app/", repo: "",
      story: {
        tr: {
          problem: "Bir müzik işletmesinin dersi, mağazası, ses sistemi kiralaması ve organizasyonları farklı müşterilere hitap ediyor; hepsini ziyaretçiyi karıştırmadan anlatmak gerekiyordu.",
          approach: "Dört hizmeti tek sayfada net bölümlere ayırdım. HTML, CSS ve JavaScript ile sıfırdan, telefonda da rahat gezilecek şekilde kurdum.",
          result: "Tüm hizmetlerin tek bağlantıdan tanıtılabildiği, canlıda yayında bir tanıtım sitesi."
        },
        en: {
          problem: "A music business's lessons, store, sound system rental, and events speak to different customers, and all of it had to be explained without confusing visitors.",
          approach: "I split the four services into clear sections on a single page, built from scratch with HTML, CSS, and JavaScript so it is easy to browse on a phone.",
          result: "A live promo site that presents every service from a single link."
        }
      }
    }
  };

  var dlg = document.getElementById("projectDialog");
  var pdEl = {
    stage: document.getElementById("pdStage"),
    img: document.getElementById("pdImg"),
    thumbs: document.getElementById("pdThumbs"),
    info: document.getElementById("pdInfo"),
    cat: document.getElementById("pdCat"),
    title: document.getElementById("pdTitle"),
    desc: document.getElementById("pdDesc"),
    story: document.getElementById("pdStory"),
    meta: document.getElementById("pdMeta"),
    links: document.getElementById("pdLinks"),
    count: document.getElementById("pdCount"),
    prev: document.getElementById("pdPrev"),
    next: document.getElementById("pdNext"),
    close: document.getElementById("pdClose")
  };
  var pd = { card: null, imgs: [], title: "", fit: "" };

  function mk(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function projectOf(card) {
    var btn = card.querySelector(".work-link[data-project]");
    return (btn && PROJECTS[btn.getAttribute("data-project")]) || { images: [] };
  }
  function visibleCards() {
    return cards.filter(function (c) { return !c.hidden; });
  }

  // Görseli olmayan kartlar "Diğer çalışmalar" listesine iner; olanlar vitrin kalır
  var moreWrap = document.getElementById("workMoreWrap");
  var moreBox = document.getElementById("workMore");
  cards.forEach(function (card, n) { card._n = n; });
  function syncMore() {
    moreWrap.hidden = !moreBox.querySelector(".work-card:not([hidden])");
  }
  function flipFeatures() {
    cards.filter(function (c) { return c.classList.contains("is-feature"); })
      .forEach(function (c, k) { c.classList.toggle("is-flip", k % 2 === 1); });
  }
  // Az proje varken filtre gereksiz; 3 ve üstünde görünür
  var filterBar = document.querySelector("#work .filters");
  if (filterBar && cards.length < 3) filterBar.style.display = "none";
  function makeCompact(card) {
    card.classList.remove("is-feature");
    card.classList.add("is-compact");
    var after = Array.prototype.filter.call(moreBox.children, function (x) { return x._n > card._n; })[0];
    moreBox.insertBefore(card, after || null);
    syncMore();
  }

  // Kart kapaklarına gerçek görseli ekle (yüklenemezse kart sade satıra döner)
  cards.forEach(function (card) {
    var p = projectOf(card);
    var thumb = card.querySelector(".work-thumb");
    if (!thumb) return;
    if (!p.images || !p.images.length) { makeCompact(card); return; }
    var img = document.createElement("img");
    img.className = "work-img";
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("load", function () {
      thumb.classList.add("has-img");
      if (!card.classList.contains("is-compact")) { card.classList.add("is-feature"); flipFeatures(); }
    });
    img.addEventListener("error", function () { img.remove(); makeCompact(card); });
    img.src = p.images[0];
    thumb.insertBefore(img, thumb.firstChild);
  });

  function showImage(i) {
    var src = pd.imgs[i];
    pdEl.img.hidden = !src;
    pdEl.img.style.objectFit = pd.fit;
    if (src) {
      pdEl.img.alt = pd.title;
      pdEl.img.src = src;
    }
    Array.prototype.forEach.call(pdEl.thumbs.children, function (b, k) {
      b.setAttribute("aria-current", String(k === i));
    });
  }
  pdEl.img.addEventListener("load", function () { pdEl.img.hidden = false; });
  pdEl.img.addEventListener("error", function () { pdEl.img.hidden = true; });

  function fillDialog(card) {
    var d = DICTS[curLang];
    var p = projectOf(card);
    var catText = card.querySelector(".work-cat").textContent;
    var tags = Array.prototype.map.call(card.querySelectorAll(".work-tags li"), function (li) {
      return li.textContent;
    });

    pd.card = card;
    pd.title = card.querySelector(".work-title").textContent;
    pd.imgs = (p.images || []).slice();
    pd.fit = p.fit || "";

    // Görsel yoksa kartın degrade kapağı sahnede görünür
    var gradient = (card.querySelector(".work-thumb").className.match(/thumb-[a-g]/) || [""])[0];
    pdEl.stage.className = "pd-stage " + gradient;

    pdEl.cat.textContent = catText;
    pdEl.title.textContent = pd.title;
    pdEl.desc.textContent = card.querySelector(".work-desc").textContent;

    // Hikâye: Sorun / Yaklaşım / Sonuç (yalnızca doldurulmuş olanlar)
    pdEl.story.textContent = "";
    var st = p.story && (p.story[curLang] || p.story.tr);
    ["problem", "approach", "result"].forEach(function (k) {
      if (!st || !st[k]) return;
      var row = mk("div", "pd-row");
      row.appendChild(mk("dt", "", d["pd." + k]));
      row.appendChild(mk("dd", "", st[k]));
      pdEl.story.appendChild(row);
    });
    pdEl.story.hidden = !pdEl.story.children.length;

    // Ayrıntı satırları
    pdEl.meta.textContent = "";
    var rows = [[d["pd.cat"], catText]];
    if (tags.length) rows.push([d["pd.tools"], tags.join(", ")]);
    if (p.year) rows.push([d["pd.year"], p.year]);
    rows.forEach(function (r) {
      var row = mk("div", "pd-row");
      row.appendChild(mk("dt", "", r[0]));
      row.appendChild(mk("dd", "", r[1]));
      pdEl.meta.appendChild(row);
    });

    // Bağlantılar (yalnızca doldurulmuş olanlar)
    pdEl.links.textContent = "";
    function addLink(href, label, cls) {
      var a = mk("a", "btn " + cls, label);
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      pdEl.links.appendChild(a);
    }
    if (p.url) addLink(p.url, d["pd.visit"], "btn-primary");
    if (p.repo) addLink(p.repo, d["pd.source"], "btn-ghost");
    pdEl.links.hidden = !pdEl.links.children.length;

    // Küçük önizlemeler (birden fazla görsel varsa)
    pdEl.thumbs.textContent = "";
    pdEl.thumbs.hidden = pd.imgs.length < 2;
    pd.imgs.forEach(function (src, i) {
      var b = mk("button", "pd-thumb");
      b.type = "button";
      b.setAttribute("aria-label", d["pd.image"] + " " + (i + 1));
      var im = document.createElement("img");
      im.src = src;
      im.alt = "";
      im.loading = "lazy";
      b.appendChild(im);
      b.addEventListener("click", function () { showImage(i); });
      pdEl.thumbs.appendChild(b);
    });
    showImage(0);

    // Proje sayacı ve önceki/sonraki (yalnızca filtrede görünen kartlar arasında)
    var list = visibleCards();
    pdEl.count.textContent = (list.indexOf(card) + 1) + " / " + list.length;
    pdEl.prev.hidden = pdEl.next.hidden = list.length < 2;
    pdEl.info.scrollTop = 0;
  }

  function stepProject(dir) {
    var list = visibleCards();
    if (list.length < 2) return;
    var i = list.indexOf(pd.card);
    fillDialog(list[(i + dir + list.length) % list.length]);
  }

  function closeDialog() {
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
  }

  cards.forEach(function (card) {
    var btn = card.querySelector(".work-link[data-project]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      fillDialog(card);
      if (typeof dlg.showModal === "function") dlg.showModal();
      else dlg.setAttribute("open", "");
    });
  });

  pdEl.close.addEventListener("click", closeDialog);
  pdEl.prev.addEventListener("click", function () { stepProject(-1); });
  pdEl.next.addEventListener("click", function () { stepProject(1); });
  // Pencerenin dışına (karartılmış alana) tıklayınca kapan
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeDialog(); });
  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); stepProject(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepProject(-1); }
  });

  /* ---------- 4b) SERTİFİKALAR ----------
     Kendi sertifikalarınızı yalnızca aşağıdaki listeye yazın.
     - cat: "web" | "design" | "other"
     - image: sertifika görseli (img/ klasörüne koyun). Dosya yoksa kâğıt, yazılardan otomatik üretilir.
     - url: doğrulama / sertifika bağlantısı. Boşsa düğme gösterilmez.
     ÖRNEK içeriktir; "20XX" ve "Sertifika adı" yerine gerçek bilgileri yazın. */
  var CERTS = [
    { id: "c1", cat: "web", year: "20XX", credId: "0001", image: "img/sertifika-1.jpg", url: "",
      tr: { t: "Sertifika adı 1", i: "Veren kurum" }, en: { t: "Certificate name 1", i: "Issuing organization" } },
    { id: "c2", cat: "web", year: "20XX", credId: "0002", image: "img/sertifika-2.jpg", url: "",
      tr: { t: "Sertifika adı 2", i: "Veren kurum" }, en: { t: "Certificate name 2", i: "Issuing organization" } },
    { id: "c3", cat: "design", year: "20XX", credId: "0003", image: "img/sertifika-3.jpg", url: "",
      tr: { t: "Sertifika adı 3", i: "Veren kurum" }, en: { t: "Certificate name 3", i: "Issuing organization" } },
    { id: "c4", cat: "other", year: "20XX", credId: "0004", image: "img/sertifika-4.jpg", url: "",
      tr: { t: "Sertifika adı 4", i: "Veren kurum" }, en: { t: "Certificate name 4", i: "Issuing organization" } }
  ];
  var certListEl = document.getElementById("certList");
  var certSheetEl = document.getElementById("certSheet");
  var certMetaEl = document.getElementById("certMeta");
  var certOpenEl = document.getElementById("certOpen");
  var certEmptyEl = document.getElementById("certEmpty");
  var certFilterBtns = document.querySelectorAll("[data-cfilter]");
  var certCat = "all";
  var certSel = CERTS[0].id;
  var SEAL = '<svg class="cert-seal" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="24" cy="24" r="21"/><circle cx="24" cy="24" r="16" stroke-width="1"/><path d="m16.5 24.5 5 5 10-11" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function certText(c) { return c[curLang] || c.tr; }
  function certVisible() {
    return CERTS.filter(function (c) { return certCat === "all" || c.cat === certCat; });
  }

  function showCert(animate) {
    var d = DICTS[curLang];
    var c = CERTS.filter(function (x) { return x.id === certSel; })[0];
    certSheetEl.textContent = "";
    certMetaEl.textContent = "";
    certOpenEl.hidden = true;
    if (!c) return;
    var tx = certText(c);

    var sheet = mk("div", "cert-sheet" + (animate && !reduceMotion ? " is-swap" : ""));
    var inner = mk("div", "cert-in");
    inner.appendChild(mk("p", "cert-issuer", tx.i));
    var mid = mk("div");
    mid.appendChild(mk("p", "cert-kind", d["cert.kind"]));
    mid.appendChild(mk("h3", "cert-ttl", tx.t));
    mid.appendChild(mk("p", "cert-holder", "Burak Arabacı"));
    inner.appendChild(mid);
    var foot = mk("div", "cert-foot");
    foot.appendChild(mk("span", "", c.year));
    foot.insertAdjacentHTML("beforeend", SEAL);
    foot.appendChild(mk("span", "", "#" + c.credId));
    inner.appendChild(foot);
    sheet.appendChild(inner);

    if (c.image) {
      var img = document.createElement("img");
      img.className = "cert-img";
      img.alt = tx.t + " — " + tx.i;
      img.addEventListener("error", function () { img.remove(); });
      img.src = c.image;
      sheet.appendChild(img);
    }
    certSheetEl.appendChild(sheet);

    [[d["cert.issuer"], tx.i], [d["cert.year"], c.year], [d["cert.id"], c.credId]].forEach(function (r) {
      var row = mk("div");
      row.appendChild(mk("dt", "", r[0]));
      row.appendChild(mk("dd", "", r[1]));
      certMetaEl.appendChild(row);
    });
    if (c.url) { certOpenEl.href = c.url; certOpenEl.hidden = false; }
  }

  function renderCerts() {
    if (!certListEl) return;
    var d = DICTS[curLang];
    var list = certVisible();
    if (!list.some(function (c) { return c.id === certSel; })) certSel = list.length ? list[0].id : "";

    certListEl.textContent = "";
    list.forEach(function (c) {
      var tx = certText(c);
      var li = document.createElement("li");
      var b = mk("button", "cert-row");
      b.type = "button";
      b.setAttribute("aria-pressed", String(c.id === certSel));
      b.setAttribute("aria-controls", "certStage");
      b.appendChild(mk("span", "cert-year", c.year));
      var txt = mk("span");
      txt.appendChild(mk("span", "cert-name", tx.t));
      txt.appendChild(mk("span", "cert-org", tx.i));
      b.appendChild(txt);
      b.appendChild(mk("span", "cert-tag", d["cert.c." + c.cat]));
      b.addEventListener("click", function () {
        if (certSel === c.id) return;
        certSel = c.id;
        Array.prototype.forEach.call(certListEl.querySelectorAll(".cert-row"), function (r) {
          r.setAttribute("aria-pressed", String(r === b));
        });
        showCert(true);
        // Telefonda önizleme listenin üstünde kalır; seçince görünür alana getir
        if (window.matchMedia("(max-width: 900px)").matches) {
          document.getElementById("certStage").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
        }
      });
      li.appendChild(b);
      certListEl.appendChild(li);
    });
    certEmptyEl.hidden = list.length > 0;
    showCert(false);
  }

  Array.prototype.forEach.call(certFilterBtns, function (btn) {
    btn.addEventListener("click", function () {
      certCat = btn.getAttribute("data-cfilter");
      Array.prototype.forEach.call(certFilterBtns, function (x) {
        x.classList.toggle("is-active", x === btn);
        x.setAttribute("aria-pressed", String(x === btn));
      });
      renderCerts();
    });
  });
  renderCerts();

  /* ---------- 4c) GITHUB TERMİNALİ ----------
     Anahtar gerekmez: GitHub'ın herkese açık API'si kullanıcı adıyla çalışır.
     Kullanıcı adını değiştirmek için yalnızca GH_USER'ı düzeltin.
     Yanıt 10 dakika tarayıcıda saklanır (saatlik istek sınırına takılmamak için). */
  var GH_USER = "burakarabacii";
  var GH_COLORS = { HTML: "#e34c26", CSS: "#a78bfa", JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5", "C#": "#178600", Java: "#b07219", "C++": "#f34b7d", C: "#9ca3af", PHP: "#8892d8" };
  var ghRepos = null;
  var ghState = "loading";

  function ghAgo(iso) {
    var rtf;
    try { rtf = new Intl.RelativeTimeFormat(curLang, { numeric: "auto" }); } catch (e) { return ""; }
    var s = (new Date(iso) - Date.now()) / 1000;
    var units = [["year", 31536000], ["month", 2592000], ["day", 86400], ["hour", 3600], ["minute", 60]];
    for (var i = 0; i < units.length; i++) {
      if (Math.abs(s) >= units[i][1]) return rtf.format(Math.round(s / units[i][1]), units[i][0]);
    }
    return rtf.format(0, "minute");
  }

  function renderGh() {
    var box = document.getElementById("ghList");
    if (!box) return;
    var d = DICTS[curLang];
    box.textContent = "";
    if (ghState !== "ok") {
      box.appendChild(mk("li", "gh-note", d[ghState === "error" ? "gh.error" : "gh.loading"]));
      return;
    }
    if (!ghRepos.length) { box.appendChild(mk("li", "gh-note", d["gh.empty"])); return; }
    ghRepos.forEach(function (r) {
      var li = document.createElement("li");
      var a = mk("a", "gh-repo");
      a.href = r.u; a.target = "_blank"; a.rel = "noopener noreferrer";
      a.appendChild(mk("span", "gh-name", r.n));
      var meta = mk("span", "gh-meta");
      if (r.l) {
        var lang = mk("span", "gh-lang");
        var dot = mk("span", "gh-dot");
        dot.style.background = GH_COLORS[r.l] || "";
        lang.appendChild(dot);
        lang.appendChild(document.createTextNode(r.l));
        meta.appendChild(lang);
      }
      meta.appendChild(mk("span", "", ghAgo(r.t)));
      a.appendChild(meta);
      if (r.d) a.appendChild(mk("span", "gh-desc", r.d));
      li.appendChild(a);
      box.appendChild(li);
    });
  }

  function ghDone(list) {
    ghRepos = list;
    ghState = "ok";
    renderGh();
  }

  (function loadGh() {
    var KEY = "gh-repos-" + GH_USER;
    try {
      var cached = JSON.parse(sessionStorage.getItem(KEY) || "null");
      if (cached && Date.now() - cached.t < 600000) { ghDone(cached.data); return; }
    } catch (e) { /* önbellek yoksa ağdan al */ }

    fetch("https://api.github.com/users/" + GH_USER + "/repos?per_page=100&sort=pushed")
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (all) {
        var list = all
          .filter(function (r) { return !r.fork && !r.archived; })
          .sort(function (a, b) { return new Date(b.pushed_at) - new Date(a.pushed_at); })
          .slice(0, 4)
          .map(function (r) { return { n: r.name, d: r.description || "", l: r.language || "", u: r.html_url, t: r.pushed_at }; });
        try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data: list })); } catch (e) { /* sessizce geç */ }
        ghDone(list);
      })
      .catch(function () { ghState = "error"; renderGh(); });
  })();

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