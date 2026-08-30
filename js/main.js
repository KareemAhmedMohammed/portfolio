/* ============================================================
   Kareem Ahmed — portfolio
   Single document + pushState router. No libraries.
   ============================================================ */
document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------------- i18n ---------------- */
const i18n = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.playground': 'Playground',
    'nav.services': 'About',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.contact_chip': 'Get in touch',
    'hero.eyebrow': "HELLO, I'M KAREEM AHMED.",
    'hero.display_1': 'I build',
    'hero.lede': 'I build clear websites, apps, and automations that make everyday work easier.',
    'hero.signal_1_label': 'Focus',
    'hero.signal_1_value': 'Useful AI products',
    'hero.signal_2_label': 'Stack',
    'hero.signal_2_value': 'Websites and mobile apps',
    'hero.signal_3_label': 'Edge',
    'hero.signal_3_value': 'Arabic and English experiences',
    'story.statement': 'I turn complicated ideas into clear digital products people can actually use. That includes websites, mobile apps, business tools, and AI automations in English and Arabic.',
    'story.closing': 'Simple to understand. Reliable after launch.',
    'experience.nova_role': 'Freelance AI developer',
    'experience.nova_period': 'Assiut, Egypt',
    'clients.label': 'CLIENTS',
    'creds.label': 'COMMUNITY & CREDENTIALS',
    'stack.label': 'BUILT WITH',
    'console.cap': 'Live build trace',
    'profile.status': 'Available for selected freelance work',
    'profile.copy': 'I plan, design, and build complete digital products. I explain decisions clearly, support Arabic and English, and test the finished work before I hand it over.',
    'capabilities.kicker': 'ABOUT THE WORK',
    'capabilities.title': 'From an idea to a working product.',
    'projects.kicker': 'SELECTED PROJECTS',
    'projects.title': 'Work that solves a clear problem.',
    'projects.copy': 'Selected websites, apps, and business tools built for real people and daily use.',
    'projects.see_all': 'See all seven projects',
    'projects.lead_project': 'LEAD PROJECT',
    'projects.connected_project': 'CONNECTED PROJECT',
    'projects.other_kicker': 'MORE WORK',
    'projects.other_title': 'Other projects',
    'cta.open_live': 'Open the live site',
    'cta.read_more': 'Read about this build',
    'omdafit.short': 'A fitness website that turns approved signups into CoachFlow clients.',
    'omdafit.panel_copy': 'A live fitness website that explains the offer, accepts subscriber details, and provisions approved clients into CoachFlow.',
    'omdafit.provisioning_title': 'Client provisioning',
    'omdafit.provisioning_copy': 'An approved OmdaFit signup can create the client account in CoachFlow through a connected backend flow.',
    'omdafit.live_button': 'Open OmdaFit',
    'omdafit.contact_button': 'Discuss a similar build',
    'coachflow.summary': 'One connected product for coaches to manage clients, plans, progress, messages, and daily work across a web dashboard and client app.',
    'coachflow.ai_title': 'AI services',
    'coachflow.ai_copy': 'Useful AI workflows summarize client check-ins and prepare Egyptian meal plans inside the product.',
    'coachflow.bilingual_title': 'English and Arabic',
    'coachflow.bilingual_copy': 'The dashboard and mobile experience support both languages, including right-to-left layouts.',
    'coachflow.client_title': 'Client app',
    'coachflow.client_copy': 'A secure Expo app gives clients workouts, nutrition, progress check-ins, and messages in one place.',
    'morebuilds.card_1_title': 'CoachFlow',
    'morebuilds.card_1_copy': 'One system for coaches to manage clients, plans, progress, messages, and daily work.',
    'morebuilds.card_2_title': '5D Fitness',
    'morebuilds.card_2_copy': 'A gym membership system with online payment, digital memberships, QR entry, and staff controls.',
    'morebuilds.card_3_title': 'ClinicBase',
    'morebuilds.card_3_copy': 'A clinic desktop system that keeps working without internet and supports staff in Arabic and English.',
    'morebuilds.card_4_title': 'Limit',
    'morebuilds.card_4_copy': 'A small Mac app that shows Claude and Codex usage at a glance, with an Android companion.',
    'morebuilds.card_5_title': 'Misk',
    'morebuilds.card_5_copy': 'A private worship companion for prayer times, Qibla, Quran reading, athkar, duas, and athan audio.',
    'morebuilds.card_6_title': 'Rayhaan Obsidian',
    'morebuilds.card_6_copy': 'A fragrance website where scrolling moves through a cinematic visual sequence.',
    'morebuilds.card_6_link': 'View live',
    'services.kicker': 'WHAT I CAN BUILD',
    'services.title': 'Useful digital products, built around real needs.',
    'services.card_1_title': 'AI assistants and automations',
    'services.card_1_copy': 'Save time on repeated work such as finding opportunities, preparing first drafts, organizing information, and reminding your team what needs attention.',
    'services.card_2_title': 'Business dashboards',
    'services.card_2_copy': 'Give staff and customers one clear place to manage accounts, payments, reports, appointments, or daily operations.',
    'services.card_3_title': 'Connected business tools',
    'services.card_3_copy': 'Connect forms, messages, customer records, payments, and notifications so information moves without repeated copying.',
    'services.card_4_title': 'Websites and mobile apps',
    'services.card_4_copy': 'Responsive websites and mobile apps with clear screens, fast everyday actions, and a consistent experience across devices.',
    'services.card_5_title': 'Arabic and English experiences',
    'services.card_5_copy': 'Natural Arabic and English wording, right-to-left layouts, and details that make the product feel familiar to local customers.',
    'services.card_6_title': 'Testing and launch support',
    'services.card_6_copy': 'I test the important journeys, check phone and desktop layouts, and confirm the live version works before calling the project finished.',
    'certs.kicker': 'CREDENTIALS',
    'certs.title': 'Trained on the tools I build with.',
    'certs.gdg': 'Google Developer Group',
    'certs.community': 'Community',
    'process.kicker': 'DELIVERY METHOD',
    'process.title': 'A clear build loop from inspection to launch.',
    'process.step_1_title': 'Inspect',
    'process.step_1_copy': 'Understand the goal, the people using the product, and what is getting in their way.',
    'process.step_2_title': 'Design',
    'process.step_2_copy': 'Plan the clearest journey, screens, information, and decisions before building.',
    'process.step_3_title': 'Build',
    'process.step_3_copy': 'Build the complete product and connect the parts that need to work together.',
    'process.step_4_title': 'Verify',
    'process.step_4_copy': 'Test the important journeys on different screen sizes and confirm the live version works.',
    'play.kicker': 'PLAYGROUND',
    'play.title': 'Things built for the pleasure of building them.',
    'contact.kicker': 'FREELANCE AVAILABILITY',
    'contact.title': 'Have an AI workflow that needs to become a real product?',
    'contact.copy': 'I can help with AI agents, automation pipelines, SaaS dashboards, API integrations, bilingual client flows, and prototype-to-production builds.',
    'contact.email_button': 'Email Kareem',
    'contact.whatsapp_button': 'WhatsApp',
    'footer.copy': '© 2026 Built by Kareem',
    'footer.top': 'Back to top',
    loader: 'Loading portfolio',
    swap: ['software products with AI'],
    trace: [
      '> understand the real problem',
      '  ✓ goal and next step clarified',
      '> connect web, mobile, and AI',
      '  ✓ one useful product, not loose demos',
      '> test the important journeys',
      '  ✓ ready for real people'
    ]
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.playground': 'التجارب',
    'nav.services': 'عن الشغل',
    'nav.process': 'الطريقة',
    'nav.contact': 'تواصل',
    'nav.contact_chip': 'تواصل معايا',
    'hero.eyebrow': 'أهلاً، أنا كريم أحمد.',
    'hero.display_1': 'أنا ببني',
    'hero.lede': 'ببني مواقع وتطبيقات وأتمتة واضحة بتسهّل الشغل اليومي.',
    'hero.signal_1_label': 'التركيز',
    'hero.signal_1_value': 'منتجات ذكاء اصطناعي مفيدة',
    'hero.signal_2_label': 'الستاك',
    'hero.signal_2_value': 'مواقع وتطبيقات موبايل',
    'hero.signal_3_label': 'الميزة',
    'hero.signal_3_value': 'تجربة عربي وإنجليزي',
    'story.statement': 'بحوّل الأفكار المعقدة لمنتجات رقمية واضحة يقدر أي شخص يستخدمها. ده يشمل المواقع وتطبيقات الموبايل وأدوات البيزنس والأتمتة بالعربي والإنجليزي.',
    'story.closing': 'سهلة في الاستخدام. موثوقة بعد الإطلاق.',
    'experience.nova_role': 'مطور ذكاء اصطناعي فريلانس',
    'experience.nova_period': 'أسيوط، مصر',
    'clients.label': 'العملاء',
    'creds.label': 'المجتمع والشهادات',
    'stack.label': 'مبني بـ',
    'console.cap': 'تتبع البناء مباشر',
    'profile.status': 'متاح لشغل فريلانس مختار',
    'profile.copy': 'بخطط وبصمم وببني المنتج كامل، وبشرح القرارات بوضوح، وبدعم العربي والإنجليزي، وباختبر الشغل قبل التسليم.',
    'capabilities.kicker': 'عن الشغل',
    'capabilities.title': 'من فكرة لمنتج شغال.',
    'projects.kicker': 'مشاريع مختارة',
    'projects.title': 'شغل بيحل مشكلة واضحة.',
    'projects.copy': 'مواقع وتطبيقات وأدوات بيزنس معمولة للاستخدام اليومي الحقيقي.',
    'projects.see_all': 'شوف كل السبع مشاريع',
    'projects.lead_project': 'المشروع الرئيسي',
    'projects.connected_project': 'مشروع متصل',
    'projects.other_kicker': 'شغل أكتر',
    'projects.other_title': 'مشاريع أخرى',
    'cta.open_live': 'افتح الموقع',
    'cta.read_more': 'اقرا عن المشروع',
    'omdafit.short': 'موقع رياضي بيحوّل التسجيل المقبول لعميل داخل CoachFlow.',
    'omdafit.panel_copy': 'موقع رياضي منشور بيشرح العرض، يستقبل بيانات المشترك، وينشئ العملاء المقبولين داخل CoachFlow.',
    'omdafit.provisioning_title': 'إنشاء حساب العميل',
    'omdafit.provisioning_copy': 'بعد قبول التسجيل في OmdaFit، الفلو المتصل يقدر ينشئ حساب العميل داخل CoachFlow.',
    'omdafit.live_button': 'افتح OmdaFit',
    'omdafit.contact_button': 'اعمل مشروع شبهه',
    'coachflow.summary': 'منتج واحد متصل بيساعد الكوتش يدير العملاء والخطط والتقدم والرسائل والشغل اليومي من الداشبورد وتطبيق العميل.',
    'coachflow.ai_title': 'خدمات AI',
    'coachflow.ai_copy': 'فلوهات ذكاء اصطناعي مفيدة بتلخص متابعات العملاء وبتجهز خطط أكل مصرية جوه المنتج.',
    'coachflow.bilingual_title': 'عربي وإنجليزي',
    'coachflow.bilingual_copy': 'الداشبورد وتجربة الموبايل بيدعموا اللغتين، بما فيهم التصميم من اليمين للشمال.',
    'coachflow.client_title': 'تطبيق العميل',
    'coachflow.client_copy': 'تطبيق Expo آمن بيجمع التمارين والتغذية ومتابعة التقدم والرسائل في مكان واحد.',
    'morebuilds.card_1_title': 'CoachFlow',
    'morebuilds.card_1_copy': 'منصة SaaS كاملة لكوتشز وصالات في المنطقة مع داشبورد Next.js وAPI بـ NestJS وداتابيز Prisma وتطبيق Expo.',
    'morebuilds.card_2_title': '5D Fitness',
    'morebuilds.card_2_copy': 'منصة عضويات لصالة رياضية مع Paymob وعضوية رقمية وQR للدخول ولوحة تحكم للموظفين.',
    'morebuilds.card_3_title': 'ClinicBase',
    'morebuilds.card_3_copy': 'نظام Electron وSQLite يشتغل بدون إنترنت بصلاحيات موظفين وتصدير Excel ودعم عربي وإنجليزي.',
    'morebuilds.card_4_title': 'Limit',
    'morebuilds.card_4_copy': 'تطبيق macOS يقرأ استهلاك Claude وCodex محليًا مع تطبيق أندرويد مرافق على الواي فاي.',
    'morebuilds.card_5_title': 'Misk',
    'morebuilds.card_5_copy': 'رفيق عبادة خاص فيه مواقيت وقبلة ومصحف وأذكار وأدعية وأذان، وكل حاجة على الجهاز.',
    'morebuilds.card_6_title': 'Rayhaan Obsidian',
    'morebuilds.card_6_copy': 'عرض عطر سينمائي مبني على تسلسل ٣٠٠ صورة متحكم فيه بالسكرول.',
    'morebuilds.card_6_link': 'شوف لايف',
    'services.kicker': 'أقدر أبني إيه',
    'services.title': 'منتجات رقمية مفيدة، مبنية على احتياج حقيقي.',
    'services.card_1_title': 'مساعدين بالذكاء الاصطناعي وأتمتة',
    'services.card_1_copy': 'توفير وقت في الشغل المتكرر زي البحث وتجهيز المسودات وتنظيم المعلومات والتذكير بالمهام المهمة.',
    'services.card_2_title': 'لوحات تحكم للبيزنس',
    'services.card_2_copy': 'مكان واضح للموظفين والعملاء لإدارة الحسابات والدفع والتقارير والمواعيد والشغل اليومي.',
    'services.card_3_title': 'ربط أدوات البيزنس',
    'services.card_3_copy': 'ربط الفورمز والرسائل وبيانات العملاء والدفع والإشعارات من غير نقل يدوي متكرر.',
    'services.card_4_title': 'مواقع وتطبيقات موبايل',
    'services.card_4_copy': 'مواقع وتطبيقات سريعة وواضحة بتشتغل بشكل مريح على الموبايل والكمبيوتر.',
    'services.card_5_title': 'تجربة عربي وإنجليزي',
    'services.card_5_copy': 'كتابة طبيعية باللغتين ودعم كامل للاتجاه من اليمين للشمال وتفاصيل مناسبة للعميل المحلي.',
    'services.card_6_title': 'اختبار ودعم الإطلاق',
    'services.card_6_copy': 'باختبر الرحلات المهمة على أحجام شاشات مختلفة وبتأكد إن النسخة المنشورة شغالة قبل ما أعتبر المشروع خلص.',
    'certs.kicker': 'الشهادات',
    'certs.title': 'متدرب على الأدوات اللي ببني بيها.',
    'certs.gdg': 'Google Developer Group',
    'certs.community': 'مجتمع',
    'process.kicker': 'طريقة التسليم',
    'process.title': 'فلو بناء واضح من الفهم للانطلاق.',
    'process.step_1_title': 'أفهم',
    'process.step_1_copy': 'أقرأ المنتج والكود ورحلة المستخدم والبيزنس وحقيقة الديبلاي قبل الحل.',
    'process.step_2_title': 'أصمم',
    'process.step_2_copy': 'أرسم الفلو والداتا والشاشات والأتمتة والبرومبتات ونقط مراجعة الإنسان.',
    'process.step_3_title': 'أبني',
    'process.step_3_copy': 'أنفذ الفرونت والباك والـ APIs والداتا وتسجيل الدخول والإشعارات وmodel calls كمنتج واحد.',
    'process.step_4_title': 'أتحقق',
    'process.step_4_copy': 'أشغل التطبيق وأراجع الشاشات وأختبر الفلوهات وأفحص الديبلاي وأصلح الاختلافات.',
    'play.kicker': 'التجارب',
    'play.title': 'حاجات اتبنت لمتعة إنها تتبني.',
    'contact.kicker': 'متاح لفريلانس',
    'contact.title': 'عندك فلو ذكاء اصطناعي محتاج يتحول لمنتج حقيقي؟',
    'contact.copy': 'أقدر أساعدك في وكلاء AI والأتمتة والداشبوردات وربط APIs وتجارب عميل بلغتين وتحويل النموذج لمنتج.',
    'contact.email_button': 'ابعت إيميل',
    'contact.whatsapp_button': 'واتساب',
    'footer.copy': '© ٢٠٢٦ بُني بواسطة كريم',
    'footer.top': 'فوق',
    loader: 'بنجهز البورتفوليو',
    swap: ['منتجات برمجية بالذكاء الاصطناعي'],
    trace: [
      '< فهم المشكلة الحقيقية',
      '  ✓ الهدف والخطوة الجاية واضحين',
      '< ربط الويب والموبايل والذكاء الاصطناعي',
      '  ✓ منتج واحد مفيد، مش تجارب منفصلة',
      '< اختبار الرحلات المهمة',
      '  ✓ جاهز للاستخدام الحقيقي'
    ]
  }
};

let lang = 'en';

function applyLang(next) {
  lang = next;
  const dict = i18n[lang];
  const rtl = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';

  $$('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v) el.textContent = v;
  });

  $$('[data-lang-dial]').forEach(b => b.classList.toggle('is-on', b.dataset.langDial === lang));

  // Re-split the hero line for the new language (RTL uses a wipe, not glyph spans).
  splitHero();
  resetSwap();
  startTrace();
}

/* ---------------- hero display ---------------- */
function splitHero() {
  const line = $('[data-split]');
  if (!line) return;
  const text = i18n[lang]['hero.display_1'];

  // Arabic is joined script — never split into per-glyph spans.
  if (lang === 'ar') { line.textContent = text; return; }

  line.textContent = '';
  [...text].forEach((c, i) => {
    const s = document.createElement('span');
    s.className = 'ch';
    s.textContent = c === ' ' ? ' ' : c;
    s.style.animationDelay = (i * 38) + 'ms';
    line.appendChild(s);
  });
}

function playHero() {
  if (lang === 'ar') return;
  $$('.hero-display .ch').forEach(c => c.classList.add('in'));
}

/* ---------------- stable hero phrase ---------------- */
function resetSwap() {
  const box = $('[data-swap]');
  if (!box) return;
  const phrase = document.createElement('i');
  phrase.className = 'on';
  const text = i18n[lang].swap[0];
  if (lang === 'ar') {
    phrase.textContent = text;
  } else {
    let glyphIndex = 0;
    text.split(' ').forEach((word, wordIndex) => {
      if (wordIndex) phrase.append(' ');
      const wordSpan = document.createElement('span');
      wordSpan.className = 'phrase-word';
      [...word].forEach(c => {
        const glyph = document.createElement('span');
        glyph.className = 'ch';
        glyph.textContent = c;
        glyph.style.animationDelay = `${(glyphIndex + 7) * 38}ms`;
        wordSpan.appendChild(glyph);
        glyphIndex += 1;
      });
      phrase.appendChild(wordSpan);
    });
  }
  box.replaceChildren(phrase);
}

/* ---------------- console trace ---------------- */
let traceTimer = null;
function startTrace() {
  const out = $('[data-trace]');
  const bar = $('[data-trace-bar]');
  if (!out) return;
  clearTimeout(traceTimer);
  const lines = i18n[lang].trace;

  if (reduceMotion.matches) {
    out.innerHTML = lines.map(l => `<div>${l}</div>`).join('');
    if (bar) bar.style.width = '100%';
    return;
  }

  let li = 0, ci = 0;
  out.innerHTML = '';
  let row = document.createElement('div');
  out.appendChild(row);

  const tick = () => {
    if (li >= lines.length) {
      traceTimer = setTimeout(() => { startTrace(); }, 2600);
      return;
    }
    const line = lines[li];
    row.textContent = line.slice(0, ++ci);
    if (bar) bar.style.width = (((li + ci / line.length) / lines.length) * 100) + '%';

    if (ci >= line.length) {
      if (line.includes('✓') || line.includes('ok') || line.includes('تم')) row.className = 'ok';
      li++; ci = 0;
      if (out.children.length > 4) out.removeChild(out.firstChild);
      row = document.createElement('div');
      out.appendChild(row);
      traceTimer = setTimeout(tick, 420);
    } else {
      traceTimer = setTimeout(tick, 26);
    }
  };
  tick();
}

/* ---------------- router ---------------- */
const routes = { '/': 'home', '/work': 'work', '/about': 'about', '/playground': 'playground' };

function showView(name, { instant = false } = {}) {
  const curtain = $('[data-curtain]');
  const swapNow = () => {
    $$('.view').forEach(v => { v.hidden = v.dataset.view !== name; });
    $$('.nav-links a').forEach(a => {
      a.classList.toggle('is-active', routes[new URL(a.href, location.origin).pathname] === name);
    });
    window.scrollTo(0, 0);
    observeAll();
    if (name === 'home') { splitHero(); playHero(); startTrace(); }
  };

  if (instant || reduceMotion.matches || !curtain) { swapNow(); return; }

  curtain.className = 'curtain is-in';
  setTimeout(() => {
    swapNow();
    curtain.className = 'curtain is-out';
    setTimeout(() => { curtain.className = 'curtain'; }, 520);
  }, 500);
}

function navigate(path, push = true) {
  const name = routes[path] || 'home';
  if (push) history.pushState({ path }, '', path);
  showView(name);
}

document.addEventListener('click', e => {
  const a = e.target.closest('[data-link]');
  if (!a) return;
  const path = new URL(a.href, location.origin).pathname;
  if (!(path in routes)) return;
  e.preventDefault();
  if (path === location.pathname) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  navigate(path);
});

window.addEventListener('popstate', () => {
  showView(routes[location.pathname] || 'home', { instant: true });
});

/* ---------------- reveal observer ---------------- */
let io = null;
function observeAll() {
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach((en, i) => {
      if (!en.isIntersecting) return;
      setTimeout(() => en.target.classList.add('in'), i * 70);
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });

  $$('.card, .rv').forEach(el => {
    if (el.closest('.view[hidden]')) return;
    io.observe(el);
  });
}

/* ---------------- scroll loop ---------------- */
let sy = 0, ticking = false;
function onScrollFrame() {
  ticking = false;
  if (reduceMotion.matches) return;

  // Gentle scroll depth. Pointer movement never changes the sky.
  const sun = $('.sun'), moon = $('.moon');
  const p = Math.min(sy / (window.innerHeight || 1), 1);
  if (sun)  sun.style.setProperty('--sy', `${p * 120}px`);
  if (moon) moon.style.setProperty('--sy', `${p * 120}px`);
  $$('.cloud-layer').forEach((c, i) => {
    c.style.setProperty('--sx', `${p * (i % 2 ? -160 : 190)}px`);
    c.style.setProperty('--sy', `${p * 40}px`);
  });

  // plane along its path
  const sec = $('.plane-section');
  const plane = $('[data-plane]');
  const trail = $('[data-trail]');
  if (sec && plane && !$('.view[data-view="work"]').hidden) {
    const r = sec.getBoundingClientRect();
    const prog = Math.max(0, Math.min(1, (window.innerHeight - r.top) / (r.height + window.innerHeight)));
    plane.style.offsetDistance = (prog * 100) + '%';
    if (trail) {
      const len = trail.getTotalLength();
      trail.style.strokeDasharray = `${len}`;
      trail.style.strokeDashoffset = `${len * (1 - prog)}`;
    }
  }
}
window.addEventListener('scroll', () => {
  sy = window.scrollY;
  if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); }
}, { passive: true });

/* ---------------- pointer: cursor, sky, type ----------------
   Fine pointers only. Touch devices keep the native behaviour. */
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function initPointer() {
  if (!finePointer.matches || reduceMotion.matches) return;

  const dot = $('[data-cursor]');
  const label = $('[data-cursor-label]');
  if (!dot) return;
  document.documentElement.classList.add('cursor-on');

  let mx = innerWidth / 2, my = innerHeight / 2;   // target
  let cx = mx, cy = my;                            // eased
  let raf = null;

  const LINK_SEL = 'a, button, [data-link], [data-contact-open], [data-menu-open], .dial, .card';

  addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    const hit = e.target.closest(LINK_SEL);
    dot.classList.toggle('is-link', !!hit);
    if (label) {
      const l = !hit ? '' :
        hit.matches('.dial') ? (hit.dataset.langDial === 'ar' ? 'ع' : 'EN') :
        hit.matches('.card') ? 'VIEW' :
        hit.hasAttribute('data-contact-open') ? 'TALK' : 'GO';
      label.textContent = l;
    }
    // Give the cursor a light edge over the darker hero sky.
    dot.classList.toggle('on-sky', !!e.target.closest('.hero'));
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });

  addEventListener('pointerdown', () => dot.classList.add('is-down'));
  addEventListener('pointerup',   () => dot.classList.remove('is-down'));
  addEventListener('pointerleave', () => { dot.style.opacity = '0'; });
  addEventListener('pointerenter', () => { dot.style.opacity = '1'; });

  const chars = () => $$('.hero-display .ch');

  function loop() {
    raf = null;
    // cursor easing
    cx += (mx - cx) * 0.22;
    cy += (my - cy) * 0.22;
    dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;

    // The sky moves on its own. Only the headline responds to the pointer.
    const hero = $('.hero');
    if (hero && !$('.view[data-view="home"]').hidden) {
      const hr = hero.getBoundingClientRect();
      const pointerInHero = mx >= hr.left && mx <= hr.right && my >= hr.top && my <= hr.bottom;

      // Nearby letters make a small, bounded movement away from the pointer.
      // This feels alive without stretching the words or changing them on scroll.
      if (!document.body.classList.contains('is-loading')) chars().forEach(ch => {
        const r = ch.getBoundingClientRect();
        if (!pointerInHero) {
          ch.style.transform = '';
          ch.style.color = '';
          return;
        }
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const distance = Math.hypot(dx, dy) || 1;
        const influence = Math.max(0, 1 - distance / 260);
        const tx = (-dx / distance) * influence * 11;
        const ty = (-dy / distance) * influence * 8;
        ch.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        // Warm yellow at the edge, deepening toward orange nearest the pointer.
        // Each glyph keeps its own distance so the colour travels through the word.
        ch.style.color = influence > .02
          ? `hsl(${44 - influence * 16} 91% ${62 - influence * 5}%)`
          : '';
      });
    }

    if (Math.abs(mx - cx) > .3 || Math.abs(my - cy) > .3) raf = requestAnimationFrame(loop);
  }
  loop();
}
initPointer();

/* ---------------- theme ---------------- */
$('[data-theme-toggle]')?.addEventListener('click', () => {
  const night = document.documentElement.dataset.theme === 'night';
  const applyTheme = () => {
    document.documentElement.dataset.theme = night ? 'day' : 'night';
    $('[data-theme-toggle]').setAttribute('aria-label', night ? 'Switch to night' : 'Switch to day');
    $('[data-theme-toggle]').setAttribute('aria-pressed', String(!night));
  };

  applyTheme();
});

/* ---------------- language dials ---------------- */
$$('[data-lang-dial]').forEach(b => {
  b.addEventListener('click', () => applyLang(b.dataset.langDial));
});

/* ---------------- accordion ---------------- */
document.addEventListener('click', e => {
  const btn = e.target.closest('.acc-btn');
  if (!btn) return;
  const item = btn.closest('[data-acc-item]');
  const open = item.classList.contains('is-open');
  $$('[data-acc-item]').forEach(i => {
    i.classList.remove('is-open');
    i.querySelector('.acc-btn')?.setAttribute('aria-expanded', 'false');
  });
  if (!open) { item.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
});

/* ---------------- mobile menu ---------------- */
const menu = $('[data-menu]');
const burger = $('[data-menu-open]');
let menuReturnFocus = null;
function openMenu() {
  menuReturnFocus = document.activeElement;
  menu.hidden = false;
  menu.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => menu.classList.add('in'));
  burger?.setAttribute('aria-expanded', 'true');
  menu.querySelector('.menu-close')?.focus();
}
function closeMenu() {
  menu.classList.remove('in');
  burger?.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  setTimeout(() => { menu.hidden = true; menuReturnFocus?.focus(); }, 420);
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-menu-open]')) openMenu();
  else if (e.target.closest('[data-menu-close]')) closeMenu();
  // Navigating from inside the menu should also dismiss it.
  else if (e.target.closest('[data-menu-link]')) closeMenu();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu && !menu.hidden) closeMenu();
});

/* ---------------- contact drawer ---------------- */
const drawer = $('[data-drawer]'), scrim = $('[data-scrim]');
let drawerReturnFocus = null;
function openDrawer() {
  drawerReturnFocus = document.activeElement;
  drawer.hidden = false; scrim.hidden = false;
  drawer.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => { drawer.classList.add('in'); scrim.classList.add('in'); });
  drawer.querySelector('.drawer-close')?.focus();
}
function closeDrawer() {
  drawer.classList.remove('in'); scrim.classList.remove('in');
  drawer.setAttribute('aria-hidden', 'true');
  setTimeout(() => { drawer.hidden = true; scrim.hidden = true; drawerReturnFocus?.focus(); }, 520);
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-contact-open]')) {
    // The drawer can be opened from inside the mobile menu; dismiss it first
    // so the two overlays never stack.
    if (menu && !menu.hidden) closeMenu();
    openDrawer();
  }
  if (e.target.closest('[data-contact-close]') || e.target === scrim) closeDrawer();
});

/* ---------------- back to top ---------------- */
document.addEventListener('click', e => {
  if (!e.target.closest('[data-to-top]')) return;
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && drawer && !drawer.hidden) closeDrawer();
});

/* ---------------- loader ---------------- */
(function boot() {
  const loader = $('[data-loader]');
  const count  = $('[data-loader-count]');
  const fill   = $('[data-loader-fill]');
  const label  = $('[data-loader-label]');
  if (label) label.textContent = i18n[lang].loader;

  // Apply the dictionary on first paint too, not only on a language change.
  // The markup carries English as a no-JS fallback, and the two silently drift
  // apart otherwise.
  applyLang(lang);
  showView(routes[location.pathname] || 'home', { instant: true });

  let done = false;
  const setProgress = value => {
    const n = Math.max(0, Math.min(100, Math.round(value)));
    if (count) count.textContent = n;
    if (fill) fill.style.width = `${n}%`;
  };

  const finish = () => {
    if (done) return;
    done = true;
    setProgress(100);
    document.body.classList.remove('is-loading');
    document.body.setAttribute('aria-busy', 'false');
    loader?.classList.add('is-done');
    loader?.setAttribute('aria-hidden', 'true');
    playHero();
    startTrace();
    observeAll();
    onScrollFrame();
  };

  if (!loader) { finish(); return; }

  // Track the resources that materially change the first experience. The page
  // is released after its stylesheet/window load, fonts, and every image in the
  // document are ready. Errors count as settled so one missing asset cannot
  // trap the visitor behind the loader.
  const waitForWindow = new Promise(resolve => {
    if (document.readyState === 'complete') resolve();
    else addEventListener('load', resolve, { once: true });
  });
  const waitForFonts = document.fonts?.ready || Promise.resolve();
  const waitForImages = $$('img').map(img => new Promise(resolve => {
    if (img.complete) { resolve(); return; }
    img.addEventListener('load', resolve, { once: true });
    img.addEventListener('error', resolve, { once: true });
  }));
  const resources = [waitForWindow, waitForFonts, ...waitForImages];
  let settled = 0;
  setProgress(0);

  const tracked = resources.map(resource => Promise.resolve(resource)
    .catch(() => undefined)
    .finally(() => {
      settled += 1;
      setProgress((settled / resources.length) * 96);
    }));

  const ready = Promise.allSettled(tracked);
  const safetyTimeout = new Promise(resolve => setTimeout(resolve, 8000));
  const minimumDisplay = new Promise(resolve => setTimeout(resolve, reduceMotion.matches ? 0 : 450));

  Promise.all([Promise.race([ready, safetyTimeout]), minimumDisplay])
    .then(() => setTimeout(finish, reduceMotion.matches ? 0 : 180));
})();
