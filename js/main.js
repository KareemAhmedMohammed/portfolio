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
    'hero.signal_3_value': 'Tested before handover',
    'story.statement': 'I turn complicated ideas into clear digital products people can actually use. That includes websites, mobile apps, business tools, and AI automations.',
    'story.closing': 'Simple to understand. Reliable after launch.',
    'experience.nova_role': 'Freelance AI developer',
    'experience.nova_period': 'Assiut, Egypt',
    'clients.label': 'CLIENTS',
    'creds.label': 'COMMUNITY & CREDENTIALS',
    'stack.label': 'BUILT WITH',
    'console.cap': 'Live build trace',
    'profile.status': 'Available for selected freelance work',
    'profile.copy': 'I plan, design, and build complete digital products. I explain decisions clearly and test the finished work before I hand it over.',
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
    'services.card_5_title': 'Localization and language support',
    'services.card_5_copy': 'Natural wording in every language you ship, layouts that handle both text directions, and details that make the product feel local to the people using it.',
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
    'contact.copy': 'I can help with AI agents, automation pipelines, SaaS dashboards, API integrations, client-facing flows, and prototype-to-production builds.',
    'contact.email_button': 'Email Kareem',
    'contact.whatsapp_button': 'WhatsApp',
    'footer.copy': '© 2026 Built by Kareem',
    'footer.top': 'Back to top',
    'footer.lead': 'Grow your idea the way you just grew that flower.',
    'footer.sub': "Tell me what you're building. I'll handle the system, the interface, and getting it live.",
    'footer.grow': 'CLICK TO GROW',
    'footer.grown': 'THE GARDEN IS FULL',
    'footer.sound_credit': 'Dawn chorus',
    'footer.sound_changes': 'Shortened, converted to mono and re-encoded.',
    'trace.hero': 'Intro',
    'trace.story': 'Story',
    'trace.work': 'Work',
    'trace.contact': 'Contact',
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
    'footer.lead': 'كبّر فكرتك زي ما لسه كبّرت الوردة دي.',
    'footer.sub': 'قوللي بتبني إيه، وأنا أظبط النظام والواجهة والعربي اللي هينزل بيه.',
    'footer.grow': 'دوس عشان تزرع',
    'footer.grown': 'الجنينة كملت',
    'footer.sound_credit': 'أصوات الفجر',
    'footer.sound_changes': 'اتقصّت واتحولت لمونو واتعملها إعادة ترميز.',
    'trace.hero': 'البداية',
    'trace.story': 'الحكاية',
    'trace.work': 'الشغل',
    'trace.contact': 'تواصل',
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
  requestAnimationFrame(() => homeScrollCraft?.layout());
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
  const display = $('.hero-display');
  if (lang === 'ar') { display?.classList.add('is-settled'); return; }

  const chs = $$('.hero-display .ch');
  chs.forEach(c => c.classList.add('in'));

  // Hand control back to CSS once the entrance is done, so :hover can take over.
  const last = chs[chs.length - 1];
  if (!last || !display) { display?.classList.add('is-settled'); return; }
  const settle = () => display.classList.add('is-settled');
  last.addEventListener('animationend', settle, { once: true });
  setTimeout(settle, 2200); // fallback if the event never fires
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
    document.body.dataset.activeView = name;
    $$('.nav-links a').forEach(a => {
      a.classList.toggle('is-active', routes[new URL(a.href, location.origin).pathname] === name);
    });
    window.scrollTo(0, 0);
    observeAll();
    if (name === 'home') {
      splitHero();
      playHero();
      startTrace();
      ensureHomeScrollCraft();
    }
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

/* ---------------- Scrollcraft homepage ----------------
   The runtime owns normalized act progress and the authored device families. */
let homeScrollCraft = null;
function ensureHomeScrollCraft() {
  if (homeScrollCraft || !window.ScrollCraft) {
    homeScrollCraft?.layout();
    return;
  }
  const home = $('[data-scroll-home]');
  if (!home || home.hidden) return;
  homeScrollCraft = window.ScrollCraft.mount(home);
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
  const garden = $('[data-garden-host]');

  // The journey trace is fixed above the page and can become the pointer target
  // while the footer is visibly underneath it. Use the footer's geometry so the
  // flower state follows what the visitor sees, not whichever layer wins hit-testing.
  const isOverGarden = (x, y) => {
    if (!garden) return false;
    const rect = garden.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };

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
    // Over the garden the dot becomes a rosette you plant with.
    dot.classList.toggle('is-garden', isOverGarden(e.clientX, e.clientY));
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
    const dx = mx - cx;
    const dy = my - cy;
    cx += dx * 0.22;
    cy += dy * 0.22;
    dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;

    // Keep easing after pointermove stops. Previously the cursor advanced only
    // once per event, so a quick move could leave the flower stranded far from
    // the real pointer until the mouse moved again.
    if (Math.abs(dx) > .1 || Math.abs(dy) > .1) {
      raf = requestAnimationFrame(loop);
    } else {
      cx = mx;
      cy = my;
      dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
    }

    // Letters are handled by a pure CSS :hover rule (each glyph lifts, rotates
    // and recolours on its own). Nothing here may write ch.style.transform or
    // ch.style.color — an inline style beats :hover and would silently kill it.

    if (Math.abs(mx - cx) > .3 || Math.abs(my - cy) > .3) raf = requestAnimationFrame(loop);
  }
  loop();
}
initPointer();

/* ---------------- ambient bird sound ----------------
   Dawn chorus by Alexander Kurthy, via xeno-canto / Wikimedia Commons,
   CC BY-SA 4.0. Shortened, converted to mono, re-encoded.
   Off by default: browsers block autoplay, and unrequested audio is rude.
   The file is only fetched once someone actually turns it on. */
const SOUND_KEY = 'ka:sound';
const SOUND_SRC = 'assets/birds-sky.mp3';
const soundBtn = $('[data-sound-toggle]');

let audioCtx = null, soundGain = null, soundBuf = null, soundNode = null;
let soundOn = false, soundBusy = false;

function storage(op, val) {
  try { return op === 'get' ? localStorage.getItem(SOUND_KEY) : localStorage.setItem(SOUND_KEY, val); }
  catch { return null; }   // private mode, blocked site data — never fatal
}

function paintSound() {
  if (!soundBtn) return;
  soundBtn.setAttribute('aria-pressed', String(soundOn));
  soundBtn.setAttribute('aria-label', soundOn ? 'Turn bird sound off' : 'Turn bird sound on');
  soundBtn.classList.toggle('is-loading', soundBusy);
}

async function soundStart() {
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') await audioCtx.resume();

  if (!soundBuf) {
    soundBusy = true; paintSound();
    try {
      const res = await fetch(SOUND_SRC);
      if (!res.ok) throw new Error(`audio ${res.status}`);
      soundBuf = await audioCtx.decodeAudioData(await res.arrayBuffer());
    } catch (err) {
      console.warn('bird sound unavailable:', err);
      soundOn = false; soundBusy = false; paintSound();
      return;
    }
    soundBusy = false;
  }

  soundGain = audioCtx.createGain();
  soundGain.gain.value = 0;
  soundGain.connect(audioCtx.destination);

  soundNode = audioCtx.createBufferSource();
  soundNode.buffer = soundBuf;
  soundNode.loop = true;
  // Loop inside the clip so the encoder's head/tail padding never clicks.
  soundNode.loopStart = 0.35;
  soundNode.loopEnd = Math.max(soundBuf.duration - 0.35, 1);
  soundNode.connect(soundGain);
  soundNode.start(0, soundNode.loopStart);

  soundGain.gain.linearRampToValueAtTime(0.28, audioCtx.currentTime + 1.4);
  paintSound();
}

function soundStop() {
  if (!soundNode || !audioCtx) return;
  const node = soundNode, gain = soundGain;
  soundNode = null; soundGain = null;
  gain.gain.cancelScheduledValues(audioCtx.currentTime);
  gain.gain.setValueAtTime(gain.gain.value, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.6);
  setTimeout(() => { try { node.stop(); } catch {} }, 700);
}

soundBtn?.addEventListener('click', async () => {
  if (soundBusy) return;
  soundOn = !soundOn;
  storage('set', soundOn ? 'on' : 'off');
  paintSound();
  if (soundOn) await soundStart(); else soundStop();
});

// Don't keep playing into a tab nobody is looking at.
document.addEventListener('visibilitychange', () => {
  if (!audioCtx) return;
  if (document.hidden) audioCtx.suspend();
  else if (soundOn) audioCtx.resume();
});

// Restore the preference, but never auto-start: playback still needs a gesture.
if (storage('get') === 'on' && soundBtn) {
  soundBtn.setAttribute('aria-label', 'Turn bird sound on');
  soundBtn.classList.add('is-armed');
}
paintSound();

/* ---------------- footer garden ----------------
   Click the footer to grow a plant where you clicked. */
const garden = $('[data-garden]');
const gardenHost = $('[data-garden-host]');
const gardenCue = $('[data-garden-cue]');
const PLANT_CAP = 22;
const rand = (a, b) => a + Math.random() * (b - a);

const SVGNS = 'http://www.w3.org/2000/svg';
const GREENS = ['#5c7d3f', '#6b8f49', '#4f6f36', '#7a9c52'];
const PETALS = ['#F5C542', '#E8501E', '#FFF9E9', '#E8A0B4', '#D96C8F', '#EFB93F'];
const pick = a => a[Math.floor(Math.random() * a.length)];

/* A mixed border, not a row of identical stems: flowers (always with a head),
   trees, bushes and reeds. `kind` is chosen once and drives size and shape. */
function makePlant(xPct, kindHint) {
  const kinds = ['flower', 'flower', 'flower', 'flower', 'tree', 'tree', 'bush', 'bush', 'reed'];
  const kind = kindHint || pick(kinds);

  const w = kind === 'tree' ? 130 : kind === 'bush' ? 96 : 56;
  const h = kind === 'tree' ? rand(190, 280)
          : kind === 'bush' ? rand(70, 108)
          : kind === 'reed' ? rand(120, 190)
          : rand(110, 195);
  const mid = w / 2;
  const green = pick(GREENS);

  const plant = document.createElement('div');
  plant.className = 'plant plant-' + kind;
  plant.style.left = xPct.toFixed(3) + '%';
  plant.style.zIndex = String(kind === 'tree' ? 0 : kind === 'bush' ? 1 : 2);
  plant.style.setProperty('--g', '0');

  const sway = document.createElement('div');
  sway.className = 'sway';
  // heavier things move less
  const amp = kind === 'tree' ? rand(.6, 1.2) : kind === 'bush' ? rand(.7, 1.4) : rand(1.4, 3);
  sway.style.setProperty('--swayA', amp.toFixed(1) + 'deg');
  sway.style.setProperty('--sway', rand(4.2, 8.5).toFixed(1) + 's');
  sway.style.setProperty('--sway-d', (-rand(0, 4)).toFixed(1) + 's');

  const svg = document.createElementNS(SVGNS, 'svg');
  svg.setAttribute('width', w);
  svg.setAttribute('height', h);
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  const g = document.createElementNS(SVGNS, 'g');
  g.setAttribute('filter', 'url(#ft-paint)');

  const el = (name, attrs, parent = g) => {
    const n = document.createElementNS(SVGNS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n);
    return n;
  };
  const stroke = (d, sw, colour = green) =>
    el('path', { d, stroke: colour, 'stroke-width': sw.toFixed(1), fill: 'none', 'stroke-linecap': 'round' });

  if (kind === 'tree') {
    const bark = pick(['#6B4B2A', '#7A5733', '#5E4225']);
    const canopyY = h * rand(.30, .40);
    stroke(`M${mid} ${h} C ${mid + rand(-5, 5)} ${h * .72} ${mid + rand(-7, 7)} ${h * .55} ${mid} ${canopyY}`, rand(6, 9), bark);
    stroke(`M${mid} ${h * .62} Q ${mid - 20} ${h * .55} ${mid - 28} ${h * .46}`, rand(3, 4.5), bark);
    stroke(`M${mid} ${h * .70} Q ${mid + 20} ${h * .62} ${mid + 30} ${h * .52}`, rand(3, 4.5), bark);

    const canopy = el('g', { class: 'head' });
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      el('circle', {
        cx: mid + Math.cos(a) * rand(16, 30),
        cy: canopyY + Math.sin(a) * rand(10, 20),
        r: rand(20, 30), fill: green, opacity: .95
      }, canopy);
    }
    el('circle', { cx: mid, cy: canopyY, r: rand(26, 34), fill: green }, canopy);
    // a little fruit so trees read as trees
    if (Math.random() > .45) {
      const fruit = pick(['#E8501E', '#F5C542', '#D96C8F']);
      for (let i = 0; i < Math.round(rand(3, 6)); i++) {
        el('circle', { cx: mid + rand(-26, 26), cy: canopyY + rand(-16, 18), r: rand(3, 4.6), fill: fruit }, canopy);
      }
    }
  } else if (kind === 'bush') {
    const bush = el('g', { class: 'head' });
    for (let i = 0; i < 6; i++) {
      el('ellipse', {
        cx: mid + rand(-26, 26), cy: h - rand(10, 34),
        rx: rand(16, 26), ry: rand(13, 20), fill: green, opacity: .96
      }, bush);
    }
    if (Math.random() > .4) {
      const berry = pick(PETALS);
      for (let i = 0; i < Math.round(rand(4, 8)); i++) {
        el('circle', { cx: mid + rand(-24, 24), cy: h - rand(14, 38), r: rand(2.4, 3.6), fill: berry }, bush);
      }
    }
  } else if (kind === 'reed') {
    for (let i = 0; i < Math.round(rand(3, 5)); i++) {
      const lean = rand(-14, 14);
      stroke(`M${mid + rand(-6, 6)} ${h} Q ${mid + lean} ${h * .5} ${mid + lean * 1.8} ${h * rand(.12, .28)}`, rand(1.6, 2.4));
    }
    const seed = el('g', { class: 'head' });
    el('ellipse', { cx: mid, cy: h * .16, rx: 4.2, ry: 11, fill: pick(['#B4894F', '#C9A063']) }, seed);
  } else {
    // FLOWER — always gets a head
    stroke(`M${mid} ${h} C ${mid + rand(-4, 4)} ${h * .6} ${mid + rand(-6, 6)} ${h * .35} ${mid + rand(-5, 5)} ${h * .2}`, rand(2.2, 3.2));
    stroke(`M${mid} ${h} Q ${mid - rand(10, 20)} ${h * .78} ${mid - rand(16, 28)} ${h * .58}`, rand(1.8, 2.6));
    stroke(`M${mid} ${h} Q ${mid + rand(10, 20)} ${h * .8} ${mid + rand(16, 28)} ${h * .62}`, rand(1.8, 2.8));

    for (let i = 0; i < Math.round(rand(2, 4)); i++) {
      const side = i % 2 ? 1 : -1;
      el('ellipse', {
        cx: mid + side * rand(7, 16), cy: h * rand(.42, .8),
        rx: rand(6, 11), ry: rand(2.6, 4.4), fill: green,
        transform: `rotate(${side * rand(15, 40)} ${mid + side * 12} ${h * .6})`
      });
    }

    const petal = pick(PETALS);
    const head = el('g', { class: 'head' });
    const hx = mid + rand(-4, 4), hy = h * .2;
    const petalCount = Math.round(rand(6, 9));
    for (let i = 0; i < petalCount; i++) {
      const a = (i / petalCount) * Math.PI * 2;
      el('ellipse', {
        cx: hx + Math.cos(a) * 6.5, cy: hy + Math.sin(a) * 6.5,
        rx: 5, ry: 3.6, fill: petal,
        transform: `rotate(${(a * 180) / Math.PI} ${hx + Math.cos(a) * 6.5} ${hy + Math.sin(a) * 6.5})`
      }, head);
    }
    el('circle', { cx: hx, cy: hy, r: 3.6, fill: '#6B4B1F' }, head);
  }

  svg.appendChild(g);
  sway.appendChild(svg);
  plant.appendChild(sway);
  plant.classList.add('bloomed');   // every growth now has a head to pop
  return plant;
}

/* The garden is planted already, just small. Clicking waters the nearest
   flower: it grows a step, and blooms when it reaches full height. */
const SEED_COUNT = 11;
const SEED_G = 0.26;      // starting size
const STEP_G = 0.19;      // growth per click
const MAX_G = 1;

// A deliberate planting order so the border always reads as a mixed bed:
// trees anchoring the ends, bushes filling, flowers and reeds between.
const SEED_PLAN = ['tree', 'flower', 'bush', 'flower', 'reed', 'flower',
                   'bush', 'flower', 'tree', 'flower', 'bush'];

function seedGarden() {
  if (!garden || garden.children.length) return;
  for (let i = 0; i < SEED_COUNT; i++) {
    // even spread with a little jitter so it doesn't read as a row of pickets
    const kind = SEED_PLAN[i % SEED_PLAN.length];
    const xPct = ((i + .5) / SEED_COUNT) * 100 + rand(-3.2, 3.2);
    // Trees and bushes are wide; keep them off the edges or they get clipped.
    const inset = kind === 'tree' ? 10 : kind === 'bush' ? 7 : 2;
    const plant = makePlant(Math.max(inset, Math.min(100 - inset, xPct)), kind);
    garden.appendChild(plant);
    void plant.offsetWidth;
    plant.style.setProperty('--g', (SEED_G + rand(-.05, .05)).toFixed(3));
  }
}

function waterNearest(clientX) {
  if (!garden || !gardenHost) return;
  const plants = [...garden.children];
  if (!plants.length) return;

  // nearest by horizontal distance to where the rosette was clicked
  let best = null, bestD = Infinity;
  for (const p of plants) {
    const b = p.getBoundingClientRect();
    const d = Math.abs((b.left + b.width / 2) - clientX);
    if (d < bestD) { bestD = d; best = p; }
  }
  if (!best) return;

  const now = parseFloat(best.style.getPropertyValue('--g')) || SEED_G;
  if (now >= MAX_G) { pulse(best); return; }   // already full — acknowledge the click

  const next = Math.min(MAX_G, now + STEP_G);
  best.style.setProperty('--g', next.toFixed(3));
  gardenCue?.classList.add('is-hidden');

  if (next >= MAX_G) {
    best.classList.add('maxed');
    // restart the bloom animation if this plant was re-triggered
    best.classList.remove('bursting'); void best.offsetWidth; best.classList.add('bursting');
    if ([...garden.children].every(p => (parseFloat(p.style.getPropertyValue('--g')) || 0) >= MAX_G)) {
      gardenHost.classList.add('is-full');
      if (gardenCue) {
        gardenCue.textContent = i18n[lang]['footer.grown'];
        gardenCue.classList.remove('is-hidden');
      }
    }
  }
}

function pulse(plant) {
  plant.classList.remove('bursting'); void plant.offsetWidth; plant.classList.add('bursting');
}

gardenHost?.addEventListener('click', e => {
  if (e.target.closest('a, button, [data-link]')) return;  // leave real controls alone
  waterNearest(e.clientX);
});

seedGarden();

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
