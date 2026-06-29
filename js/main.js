const header = document.querySelector('[data-header]');
const revealTargets = document.querySelectorAll('.reveal');
const canvas = document.querySelector('[data-particles]');
const ctx = canvas?.getContext('2d');
const loader = document.querySelector('[data-loader]');
const loaderCanvas = document.querySelector('[data-loader-canvas]');
const loaderCtx = loaderCanvas?.getContext('2d');
const loaderCount = document.querySelector('[data-loader-count]');
const loaderLabel = document.querySelector('[data-loader-label]');
const langToggle = document.querySelector('[data-lang-toggle]');

const i18n = {
  en: {
    'nav.contact_chip': 'get in touch',
    'nav.menu': 'menu',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'hero.kicker': 'ai automation, saas engineering, arabic-ready client support',
    'hero.title': 'Kareem',
    'hero.lede': 'I build practical AI systems that connect prompts, APIs, dashboards, mobile apps, and real customer workflows. My work focuses on useful automation, clean product execution, and verified delivery.',
    'hero.cta_project': 'View Projects',
    'hero.cta_whatsapp': 'WhatsApp me',
    'hero.signal_1_label': 'focus',
    'hero.signal_1_value': 'AI agents + product systems',
    'hero.signal_2_label': 'stack',
    'hero.signal_2_value': 'Next.js, NestJS, Prisma, Expo',
    'hero.signal_3_label': 'edge',
    'hero.signal_3_value': 'English and Arabic workflows',
    'profile.status': '[available]',
    'profile.copy': 'Applied AI developer building practical automations, SaaS dashboards, and bilingual client workflows.',
    'projects.kicker': 'selected projects',
    'projects.title': 'Projects built as real systems, not portfolio mockups.',
    'projects.copy': 'Two production-grade builds that show applied AI, SaaS architecture, client workflows, bilingual product thinking, and live deployment discipline.',
    'coachflow.panel_label': 'product architecture',
    'coachflow.panel_status': 'live project',
    'coachflow.brand_line': 'Performance coaching SaaS for real coaches and clients.',
    'coachflow.live_button': 'Open live landing page',
    'coachflow.app_button': 'View client app page',
    'coachflow.arch_1': 'Next.js web dashboard',
    'coachflow.arch_2': 'NestJS API',
    'coachflow.arch_3': 'Prisma + PostgreSQL',
    'coachflow.arch_4': 'Expo mobile app',
    'coachflow.panel_copy': 'Coaches manage clients, programs, nutrition, check-ins, messages, team roles, billing, and progress. Clients use a dedicated dashboard and native mobile app for workouts, nutrition, progress photos, messages, and settings.',
    'omdafit.panel_label': 'fitness subscription site',
    'omdafit.panel_status': 'vercel live',
    'omdafit.brand_line': 'A polished fitness subscription experience connected to real client onboarding.',
    'omdafit.live_button': 'Open OmdaFit',
    'omdafit.contact_button': 'Discuss a similar build',
    'omdafit.arch_1': 'Vercel production site',
    'omdafit.arch_2': 'Plan selection flow',
    'omdafit.arch_3': 'Approval-ready onboarding',
    'omdafit.arch_4': 'CoachFlow handoff path',
    'omdafit.panel_copy': 'OmdaFit is a live fitness website focused on converting visitors into subscribers through clear plans, strong visual direction, and an onboarding flow that can connect into CoachFlow when a client is approved.',
    'coachflow.card_1_title': 'AI services',
    'coachflow.card_1_copy': 'Anthropic-backed service layer for check-in summaries and custom Egyptian meal generation, connected through backend workflows rather than loose prompt demos.',
    'coachflow.card_2_title': 'Provisioning bridge',
    'coachflow.card_2_copy': 'OmdaFit approval can provision CoachFlow clients through backend routes, linking a marketing/subscription flow to real account creation.',
    'coachflow.card_3_title': 'English and Arabic UX',
    'coachflow.card_3_copy': 'Dashboard and mobile labels include Arabic/English strings, RTL-aware experiences, and regional details like Egyptian foods and MENA coaching assumptions.',
    'coachflow.card_4_title': 'Native client app',
    'coachflow.card_4_copy': 'Expo app mirrors the web client dashboard with secure token storage, workout player, nutrition views, progress check-ins, messages, and client-only login guard.',
    'services.kicker': 'what i can build',
    'services.title': 'Applied AI systems for real business workflows.',
    'services.copy': 'I focus on systems where AI is connected to data, product screens, notifications, and human review points.',
    'services.card_1_title': 'AI proposal and follow-up agents',
    'services.card_1_copy': 'Job scanning, fit scoring, proposal drafting, client-specific context, follow-up reminders, and review loops for Upwork, Fiverr, and LinkedIn pipelines.',
    'services.card_2_title': 'Custom SaaS dashboards',
    'services.card_2_copy': 'Role-aware dashboards with auth, database models, admin controls, billing logic, analytics, and operational tools built around the actual workflow.',
    'services.card_3_title': 'API and automation glue',
    'services.card_3_copy': 'Connect model APIs, CRMs, messaging, forms, Google tools, databases, and notifications into one reliable system with logging and verification.',
    'services.card_4_title': 'Web and mobile product builds',
    'services.card_4_copy': 'Next.js web apps, React interfaces, Expo client apps, API integration, responsive design, local persistence, and polished frontend execution.',
    'services.card_5_title': 'Arabic client experience',
    'services.card_5_copy': 'Arabic-facing copy, bilingual UI decisions, RTL-aware layouts, and support for clients who need local context instead of generic English-only automation.',
    'services.card_6_title': 'Verification-first delivery',
    'services.card_6_copy': 'Testing, browser checks, deployment checks, live alias verification, and concrete proof that the system being delivered is the one users actually see.',
    'capabilities.kicker': 'capabilities',
    'capabilities.title': 'From idea to working product.',
    'capabilities.item_1_title': 'AI workflow design',
    'capabilities.item_1_copy': 'Define what the agent should do, what humans approve, and where model output becomes product state.',
    'capabilities.item_2_title': 'Backend and data models',
    'capabilities.item_2_copy': 'Build APIs, database schemas, auth, queues, notifications, and admin operations around the workflow.',
    'capabilities.item_3_title': 'Polished client-facing UI',
    'capabilities.item_3_copy': 'Create clean web and mobile surfaces that clients can understand quickly in English or Arabic.',
    'process.kicker': 'delivery method',
    'process.title': 'A smooth build loop from inspection to launch.',
    'process.step_1_title': 'Inspect',
    'process.step_1_copy': 'Read the current product, repo, user flow, business process, and deployment reality before proposing a solution.',
    'process.step_2_title': 'Design',
    'process.step_2_copy': 'Map the workflow, data model, screens, automations, prompts, and human review points so the AI does useful work safely.',
    'process.step_3_title': 'Build',
    'process.step_3_copy': 'Implement the frontend, backend, API connections, database state, auth, notifications, and model calls as one coherent product.',
    'process.step_4_title': 'Verify',
    'process.step_4_copy': 'Run the app, check responsive screens, test key paths, inspect live deployments, and fix mismatches before calling the work done.',
    'proof.kicker': 'selected proof',
    'proof.title': 'Built around real outputs.',
    'proof.copy': 'The strongest proof in my portfolio is not a fake number. It is the ability to move from a product idea to a functioning system with web, mobile, backend, data, AI, and verification.',
    'proof.item_1_title': 'Full-stack scope',
    'proof.item_1_copy': 'CoachFlow spans dashboard, API, database, client app, and deployment.',
    'proof.item_2_title': 'AI in context',
    'proof.item_2_copy': 'AI services sit inside check-ins, meals, automations, and user workflows.',
    'proof.item_3_title': 'Regional fit',
    'proof.item_3_copy': 'Arabic support, Egyptian food logic, Fawry/manual payment assumptions, and MENA coaching flows.',
    'contact.kicker': 'freelance availability',
    'contact.title': 'Have an AI workflow that needs to become a real product?',
    'contact.copy': 'I can help with AI agents, automation pipelines, SaaS dashboards, API integrations, bilingual client flows, and prototype-to-production builds.',
    'contact.email_button': 'Email Kareem',
    'contact.whatsapp_button': 'WhatsApp',
    'contact.call_button': 'Call',
    'footer.copy': 'designed & built for applied AI work - 2026',
    'footer.top': 'Back to top',
    loader: 'preparing applied ai portfolio'
  },
  ar: {
    'nav.contact_chip': 'تواصل معايا',
    'nav.menu': 'القائمة',
    'nav.projects': 'المشاريع',
    'nav.services': 'الخدمات',
    'nav.process': 'الطريقة',
    'nav.contact': 'تواصل',
    'hero.kicker': 'أتمتة بالذكاء الاصطناعي، منتجات SaaS، وتجربة عربي/إنجليزي',
    'hero.title': 'كريم',
    'hero.lede': 'ببني أنظمة ذكاء اصطناعي عملية بتوصل بين البرومبتات، الـ APIs، الداشبوردات، تطبيقات الموبايل، وشغل العملاء الحقيقي. تركيزي إن الأتمتة تبقى مفيدة، شكلها نضيف، ومختبرة صح.',
    'hero.cta_project': 'شوف المشاريع',
    'hero.cta_whatsapp': 'كلمني واتساب',
    'hero.signal_1_label': 'التركيز',
    'hero.signal_1_value': 'AI agents + أنظمة منتجات',
    'hero.signal_2_label': 'الستاك',
    'hero.signal_2_value': 'Next.js, NestJS, Prisma, Expo',
    'hero.signal_3_label': 'الميزة',
    'hero.signal_3_value': 'تجارب عربي وإنجليزي',
    'profile.status': '[متاح]',
    'profile.copy': 'مطور AI تطبيقي ببني أتمتة عملية، داشبوردات SaaS، وتجارب عملاء بلغتين.',
    'projects.kicker': 'مشاريع مختارة',
    'projects.title': 'مشاريع شغالة بجد، مش مجرد شكل في بورتفوليو.',
    'projects.copy': 'مشروعين منشورين يوضحوا شغل AI تطبيقي، معمارية SaaS، فلوهات عملاء، تفكير عربي/إنجليزي، وتسليم متأكد منه.',
    'coachflow.panel_label': 'معمارية المنتج',
    'coachflow.panel_status': 'مشروع لايف',
    'coachflow.brand_line': 'منصة كوتشينج للأداء مبنية لكوتشز وعملاء حقيقيين.',
    'coachflow.live_button': 'افتح صفحة التعريف',
    'coachflow.app_button': 'شوف صفحة تطبيق العميل',
    'coachflow.arch_1': 'داشبورد ويب بـ Next.js',
    'coachflow.arch_2': 'API بـ NestJS',
    'coachflow.arch_3': 'Prisma + PostgreSQL',
    'coachflow.arch_4': 'تطبيق موبايل بـ Expo',
    'coachflow.panel_copy': 'الكوتش يقدر يدير العملاء، البرامج، التغذية، المتابعات، الرسائل، أدوار الفريق، الدفع، والتقدم. والعميل عنده مساحة خاصة وتطبيق موبايل للتمارين، الأكل، الصور، الرسائل، والإعدادات.',
    'omdafit.panel_label': 'موقع اشتراكات رياضية',
    'omdafit.panel_status': 'منشور على Vercel',
    'omdafit.brand_line': 'تجربة اشتراك رياضي نضيفة ومتصلة بفلو استقبال عملاء حقيقي.',
    'omdafit.live_button': 'افتح OmdaFit',
    'omdafit.contact_button': 'اعمل مشروع شبهه',
    'omdafit.arch_1': 'موقع إنتاج على Vercel',
    'omdafit.arch_2': 'فلو اختيار الخطط',
    'omdafit.arch_3': 'استقبال عميل بعد الموافقة',
    'omdafit.arch_4': 'مسار تسليم لـ CoachFlow',
    'omdafit.panel_copy': 'OmdaFit موقع رياضي منشور فعلا، هدفه يحول الزائر لمشترك من خلال خطط واضحة، شكل قوي، وفلو استقبال يقدر يتربط مع CoachFlow لما العميل يتقبل.',
    'coachflow.card_1_title': 'ذكاء اصطناعي جوه المنتج',
    'coachflow.card_1_copy': 'طبقة ذكاء اصطناعي مبنية على Anthropic لتلخيص المتابعات وتوليد وجبات مصرية مخصصة، ومربوطة بالباك إند بدل ما تكون مجرد تجربة برومبت.',
    'coachflow.card_2_title': 'ربط إنشاء الحسابات',
    'coachflow.card_2_copy': 'موافقة OmdaFit تقدر تنشئ عميل داخل CoachFlow من خلال مسارات الباك إند، ففلو التسجيل بيتحول لحساب حقيقي.',
    'coachflow.card_3_title': 'تجربة عربي وإنجليزي',
    'coachflow.card_3_copy': 'الداشبورد والموبايل فيهم نصوص عربي/إنجليزي، دعم RTL، وتفاصيل مناسبة للسوق المصري والمنطقة.',
    'coachflow.card_4_title': 'تطبيق عميل أصلي',
    'coachflow.card_4_copy': 'تطبيق Expo بيقدم تجربة العميل من الموبايل بتخزين آمن للتوكن، مشغل تمرين، تغذية، متابعة تقدم، رسائل، وحماية دخول مخصصة للعملاء فقط.',
    'services.kicker': 'أقدر أبني إيه',
    'services.title': 'أنظمة ذكاء اصطناعي عملية لشغل بيزنس حقيقي.',
    'services.copy': 'بركز على أنظمة يكون فيها الذكاء الاصطناعي متوصل بالداتا، الشاشات، الإشعارات، ومراجعة البشر لما تكون مهمة.',
    'services.card_1_title': 'وكلاء للعروض والمتابعة',
    'services.card_1_copy': 'فحص فرص العمل، تقييم المناسبة، كتابة العروض، سياق مخصص لكل عميل، تذكير بالمتابعة، ومراجعة قبل الإرسال.',
    'services.card_2_title': 'لوحات تحكم مخصصة',
    'services.card_2_copy': 'لوحات تحكم بأدوار وصلاحيات، تسجيل دخول، نماذج بيانات، أدوات إدارة، منطق دفع، تحليلات، وأدوات تشغيل حقيقية.',
    'services.card_3_title': 'ربط APIs والأتمتة',
    'services.card_3_copy': 'ربط model APIs، CRMs، فورمز، رسائل، Google tools، قواعد بيانات، وإشعارات في نظام واحد موثوق.',
    'services.card_4_title': 'ويب وموبايل',
    'services.card_4_copy': 'Next.js web apps، واجهات React، تطبيقات Expo، ربط API، responsive design، وواجهة شكلها محترف.',
    'services.card_5_title': 'تجربة عربي قوية',
    'services.card_5_copy': 'كتابة عربي مفهومة لجيلنا، قرارات UI بلغتين، RTL مضبوط، وتجربة مناسبة لعملاء مصر والمنطقة.',
    'services.card_6_title': 'تسليم متأكد منه',
    'services.card_6_copy': 'اختبارات، مراجعة في المتصفح، فحص النسخة المنشورة، وتأكيد إن اللي اتعمل هو فعلا اللي المستخدم شايفه.',
    'capabilities.kicker': 'القدرات',
    'capabilities.title': 'من فكرة لنظام شغال.',
    'capabilities.item_1_title': 'تصميم فلو الذكاء الاصطناعي',
    'capabilities.item_1_copy': 'نحدد الوكيل الذكي يعمل إيه، إمتى الإنسان يراجع، وإزاي النتيجة تتحول لحالة حقيقية في المنتج.',
    'capabilities.item_2_title': 'Backend وداتا موديل',
    'capabilities.item_2_copy': 'بناء APIs، schemas، auth، queues، notifications، وتشغيل admin حوالين الفلو.',
    'capabilities.item_3_title': 'واجهة عميل محترفة',
    'capabilities.item_3_copy': 'واجهات ويب وموبايل نضيفة وسريعة الفهم، سواء العميل بيتعامل بالعربي أو الإنجليزي.',
    'process.kicker': 'طريقة التسليم',
    'process.title': 'فلو بناء ناعم من الفهم للانطلاق.',
    'process.step_1_title': 'أفهم',
    'process.step_1_copy': 'أقرأ المنتج، الكود، رحلة المستخدم، البيزنس، وحقيقة الديبلاي قبل أي حل.',
    'process.step_2_title': 'أصمم',
    'process.step_2_copy': 'أرسم الفلو، الداتا، الشاشات، الأتمتة، البرومبتات، ونقط مراجعة الإنسان.',
    'process.step_3_title': 'أبني',
    'process.step_3_copy': 'أنفذ الفرونت، الباك، الـ API، الداتابيز، auth، notifications، وmodel calls كنظام واحد.',
    'process.step_4_title': 'أتحقق',
    'process.step_4_copy': 'أشغل التطبيق، أراجع الشاشات، أختبر الفلوهات، وأتأكد من النسخة اللايف قبل ما أقول خلص.',
    'proof.kicker': 'إثبات حقيقي',
    'proof.title': 'الشغل مبني على نتائج حقيقية.',
    'proof.copy': 'أقوى دليل مش رقم وهمي. الدليل إن الفكرة تتحول لنظام فيه ويب، موبايل، باك إند، داتا، ذكاء اصطناعي، وتحقق.',
    'proof.item_1_title': 'Full-stack حقيقي',
    'proof.item_1_copy': 'CoachFlow فيه لوحة تحكم، واجهة برمجية، قاعدة بيانات، تطبيق عميل، ونسخة منشورة.',
    'proof.item_2_title': 'ذكاء اصطناعي في السياق',
    'proof.item_2_copy': 'خدمات الذكاء الاصطناعي موجودة جوه المتابعات، الوجبات، الأتمتة، وفلوهات المستخدمين.',
    'proof.item_3_title': 'مناسب للمنطقة',
    'proof.item_3_copy': 'دعم عربي، منطق أكل مصري، طرق دفع مناسبة للسوق، وفلوهات تدريب تناسب مصر والمنطقة.',
    'contact.kicker': 'متاح لفريلانس',
    'contact.title': 'عندك فلو ذكاء اصطناعي محتاج يتحول لمنتج حقيقي؟',
    'contact.copy': 'أقدر أساعدك في وكلاء ذكاء اصطناعي، أتمتة، لوحات تحكم، ربط APIs، تجارب عميل بلغتين، وتحويل النموذج الأولي لمنتج.',
    'contact.email_button': 'ابعت إيميل',
    'contact.whatsapp_button': 'واتساب',
    'contact.call_button': 'اتصال',
    'footer.copy': 'تصميم وبناء لشغل AI تطبيقي - 2026',
    'footer.top': 'فوق',
    loader: 'بنجهز البورتفوليو'
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

const applyLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[lang][key]) node.textContent = i18n[lang][key];
  });
  if (langToggle) langToggle.lastChild.nodeValue = lang === 'ar' ? ' EN' : ' AR';
  if (loaderLabel) loaderLabel.textContent = i18n[lang].loader;
};

document.body.classList.add('is-ready');
applyLanguage(currentLang);

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index * 34, 240)}ms`;
  revealObserver.observe(target);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

langToggle?.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
});

const particles = [];
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
let phraseTargets = [];
let width = 0;
let height = 0;
let deviceRatio = 1;
let loadingMode = true;
let startTime = performance.now();

const resizeCanvas = (targetCanvas, targetCtx) => {
  if (!targetCanvas || !targetCtx) return;
  deviceRatio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  targetCanvas.width = Math.floor(width * deviceRatio);
  targetCanvas.height = Math.floor(height * deviceRatio);
  targetCanvas.style.width = `${width}px`;
  targetCanvas.style.height = `${height}px`;
  targetCtx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
};

const seedParticles = () => {
  const count = Math.max(320, Math.min(980, Math.floor((window.innerWidth * window.innerHeight) / 1800)));
  particles.length = 0;
  for (let i = 0; i < count; i += 1) {
    const columns = Math.ceil(Math.sqrt(count * (width / Math.max(height, 1))));
    const rows = Math.ceil(count / columns);
    const col = i % columns;
    const row = Math.floor(i / columns);
    const baseX = ((col + 0.5) / columns) * width;
    const baseY = ((row + 0.5) / rows) * height;
    particles.push({
      angle: (Math.PI * 2 * i) / count,
      baseX: baseX + (Math.random() - 0.5) * 38,
      baseY: baseY + (Math.random() - 0.5) * 38,
      radius: 18 + (i % 11) * 3,
      x: width * Math.random(),
      y: height * Math.random(),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      size: Math.random() > 0.84 ? 1.85 : 0.95,
      alpha: 0.32 + Math.random() * 0.46
    });
  }
};

const buildPhraseTargets = () => {
  const phrases = ['AI', 'API', 'BUILD', 'SHIP'];
  const offscreen = document.createElement('canvas');
  const offCtx = offscreen.getContext('2d');
  if (!offCtx) return;

  offscreen.width = Math.max(720, Math.floor(width));
  offscreen.height = Math.max(300, Math.floor(height * 0.42));
  const fontSize = Math.max(86, Math.min(210, width / 7));

  phraseTargets = phrases.map((phrase) => {
    offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
    offCtx.fillStyle = '#000';
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.font = `800 ${fontSize}px Inter, Arial, sans-serif`;
    offCtx.fillText(phrase, offscreen.width / 2, offscreen.height / 2);

    const image = offCtx.getImageData(0, 0, offscreen.width, offscreen.height).data;
    const points = [];
    const step = Math.max(7, Math.floor(fontSize / 18));
    for (let y = 0; y < offscreen.height; y += step) {
      for (let x = 0; x < offscreen.width; x += step) {
        const alpha = image[(y * offscreen.width + x) * 4 + 3];
        if (alpha > 80) {
          points.push({
            x: (x / offscreen.width) * width,
            y: height * 0.48 + (y - offscreen.height / 2)
          });
        }
      }
    }
    return points;
  });
};

const resizeAll = () => {
  resizeCanvas(canvas, ctx);
  resizeCanvas(loaderCanvas, loaderCtx);
  seedParticles();
  buildPhraseTargets();
};

const aiShapeTarget = (index, t) => {
  if (phraseTargets.length) {
    const phraseIndex = Math.floor(t / 2400) % phraseTargets.length;
    const nextPhraseIndex = (phraseIndex + 1) % phraseTargets.length;
    const morph = (1 - Math.cos(((t % 2400) / 2400) * Math.PI)) / 2;
    const current = phraseTargets[phraseIndex];
    const next = phraseTargets[nextPhraseIndex];
    const a = current[index % current.length];
    const b = next[index % next.length];
    const breathe = Math.sin(t * 0.0014 + index * 0.27) * 3;
    if (a && b) {
      return {
        x: a.x * (1 - morph) + b.x * morph + breathe,
        y: a.y * (1 - morph) + b.y * morph + Math.cos(t * 0.001 + index) * 3
      };
    }
  }

  const cx = width / 2;
  const cy = height * 0.5;
  const scale = Math.min(width, height) / 520;
  const group = index % 12;
  const local = (Math.floor(index / 12) % 64) / 63;
  const jitter = Math.sin(t * 0.0014 + index) * 4;

  if (group < 5) {
    const side = group < 2 ? -1 : group < 4 ? 1 : 0;
    if (side === 0) {
      return {
        x: cx - 150 * scale + (local - 0.5) * 116 * scale,
        y: cy + 24 * scale + jitter
      };
    }
    return {
      x: cx - 190 * scale + side * local * 86 * scale,
      y: cy + 110 * scale - local * 220 * scale + jitter
    };
  }

  if (group < 8) {
    return {
      x: cx + 38 * scale + (group - 6) * 26 * scale + jitter,
      y: cy + 112 * scale - local * 224 * scale
    };
  }

  const nodes = [
    [-26, -96], [42, -70], [116, -98],
    [-8, -8], [74, 14], [146, -18],
    [-38, 88], [48, 94], [128, 70]
  ];
  const node = nodes[index % nodes.length];
  const orbit = 14 + (index % 5) * 4;
  const angle = t * 0.001 + index * 0.9;
  return {
    x: cx + (node[0] * scale) + Math.cos(angle) * orbit * scale,
    y: cy + (node[1] * scale) + Math.sin(angle) * orbit * scale
  };
};

const applyPointerForce = (x, y, t, mode) => {
  if (!pointer.active) return { x, y, intensity: 0 };
  const dx = x - pointer.x;
  const dy = y - pointer.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const radius = mode === 'loader' ? 300 : 260;
  if (dist > radius) return { x, y, intensity: 0 };

  const strength = 1 - dist / radius;
  const angle = Math.atan2(dy, dx) + Math.PI / 2;
  const repel = mode === 'loader' ? 58 : 44;
  const swirl = mode === 'loader' ? 44 : 30;
  const pulse = 0.7 + Math.sin(t * 0.004) * 0.3;

  return {
    x: x + (dx / dist) * repel * strength + Math.cos(angle) * swirl * strength * pulse,
    y: y + (dy / dist) * repel * strength + Math.sin(angle) * swirl * strength * pulse,
    intensity: strength
  };
};

const drawPattern = (targetCtx, t, mode = 'site') => {
  if (!targetCtx) return;
  targetCtx.clearRect(0, 0, width, height);
  const scrollFade = mode === 'loader' ? 1 : 0.76;
  const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, height);
  const bottomDistance = docHeight - (window.scrollY + height);
  const shapeMix = mode === 'site' && !loadingMode ? Math.max(0, Math.min(1, 1 - bottomDistance / 1200)) : 0;
  const cursorLinks = [];
  const shapeLinks = [];

  particles.forEach((point, index) => {
    let x;
    let y;
    if (mode === 'loader' || loadingMode) {
      const wave = t * 0.0012 + index * 0.21;
      const sweep = Math.sin(t * 0.00055 + point.baseY * 0.01) * 22;
      x = point.baseX + Math.cos(point.angle + t * 0.0014) * point.radius + sweep;
      y = point.baseY + Math.sin(point.angle * 1.7 + t * 0.0011) * point.radius + Math.cos(wave) * 18;
    } else {
      point.x += point.vx + Math.sin(t * 0.001 + index) * 0.018;
      point.y += point.vy + Math.cos(t * 0.0012 + index) * 0.018;
      if (point.x < width * 0.1 || point.x > width * 0.9) point.vx *= -1;
      if (point.y < height * 0.12 || point.y > height * 0.82) point.vy *= -1;
      x = point.x;
      y = point.y;
    }

    if (shapeMix > 0) {
      const target = aiShapeTarget(index, t);
      x = x * (1 - shapeMix) + target.x * shapeMix;
      y = y * (1 - shapeMix) + target.y * shapeMix;
    }

    const pointerResult = applyPointerForce(x, y, t, mode);
    x = pointerResult.x;
    y = pointerResult.y;
    if (pointerResult.intensity > 0.32 && cursorLinks.length < 44) cursorLinks.push({ x, y, a: pointerResult.intensity });
    if (shapeMix > 0.45 && index % 7 === 0 && shapeLinks.length < 90) shapeLinks.push({ x, y, a: shapeMix });

    targetCtx.beginPath();
    targetCtx.arc(x, y, point.size + shapeMix * 1.1 + pointerResult.intensity * 1.2, 0, Math.PI * 2);
    targetCtx.fillStyle = `rgba(16, 16, 16, ${Math.min(0.9, (point.alpha + shapeMix * 0.34 + pointerResult.intensity * 0.24) * scrollFade)})`;
    targetCtx.fill();
  });

  if (pointer.active && cursorLinks.length > 2) {
    targetCtx.lineWidth = mode === 'loader' ? 1.1 : 0.8;
    cursorLinks.slice(0, 24).forEach((point, index) => {
      const next = cursorLinks[(index + 5) % cursorLinks.length];
      targetCtx.beginPath();
      targetCtx.moveTo(point.x, point.y);
      targetCtx.lineTo(next.x, next.y);
      targetCtx.strokeStyle = `rgba(16, 16, 16, ${Math.min(0.22, point.a * 0.16)})`;
      targetCtx.stroke();
    });
  }

  if (shapeLinks.length > 4) {
    targetCtx.lineWidth = 0.7;
    shapeLinks.forEach((point, index) => {
      const next = shapeLinks[(index + 3) % shapeLinks.length];
      const dx = point.x - next.x;
      const dy = point.y - next.y;
      if (Math.sqrt(dx * dx + dy * dy) > 130) return;
      targetCtx.beginPath();
      targetCtx.moveTo(point.x, point.y);
      targetCtx.lineTo(next.x, next.y);
      targetCtx.strokeStyle = `rgba(16, 16, 16, ${0.08 * point.a})`;
      targetCtx.stroke();
    });
  }
};

const animateParticles = (time) => {
  drawPattern(ctx, time, 'site');
  if (loader && !loader.classList.contains('is-hidden')) drawPattern(loaderCtx, time, 'loader');
  requestAnimationFrame(animateParticles);
};

const runLoader = () => {
  const duration = 2350;
  const tick = (time) => {
    const progress = Math.min(1, (time - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(eased * 100);
    if (loaderCount) loaderCount.textContent = String(value);
    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }
    loadingMode = false;
    loader?.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
    setTimeout(() => loader?.remove(), 900);
  };
  requestAnimationFrame(tick);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });
window.addEventListener('resize', resizeAll);
window.addEventListener('pointermove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
}, { passive: true });
window.addEventListener('pointerleave', () => {
  pointer.active = false;
});
resizeAll();
requestAnimationFrame(animateParticles);
runLoader();
