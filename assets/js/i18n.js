/* MISBAR bilingual engine — English ⇄ Arabic, full-site, RTL ready. */
(function(){
  var MAP = {
    "Home": "الرئيسية",
    "About Us": "من نحن",
    "Services": "خدماتنا",
    "Services ▾": "خدماتنا ▾",
    "Our Team": "فريقنا",
    "Contact Us": "اتصل بنا",
    "Get in Touch": "تواصل معنا",
    "Explore": "استكشف",
    "Explore Our Services": "استكشف خدماتنا",
    "Contact Our Team": "تواصل مع فريقنا",
    "Contact": "التواصل",
    "About us": "من نحن",
    "About": "من نحن",
    "FAQ": "الأسئلة الشائعةة",
    "Everything you need to know": "كل ما تحتاج معرفته",
    "How fast can you take over our warehouse?": "ما مدى سرعة استلامكم لمستودعنا؟",
    "Most handovers complete in 2–4 weeks: site walk, SOP review, team briefing and a supervised go-live with daily counts.": "تكتمل معظم عمليات الاستلام خلال ٢–٤ أسابيع: زيارة ميدانية، مراجعة الإجراءات، تدريب الفريق، وتشغيل تجريبي بإشراف مع جرد يومي.",
    "Do you work in Arabic and English?": "هل تعملون باللغتين العربية والإنجليزية؟",
    "Yes. All SOPs, labels, reports and government follow-up are handled in both languages by our Doha team.": "نعم. جميع الإجراءات والملصقات والتقارير ومتابعة المعاملات تتم باللغتين بواسطة فريقنا في الدوحة.",
    "Can you help with costs and processes only?": "هل يمكنكم المساعدة في التكاليف والإجراءات فقط؟",
    "Absolutely. Our management consultancy (702010) delivers performance reviews, cost analysis and KPI monitoring without a warehouse contract.": "بالتأكيد. استشاراتنا الإدارية (٧٠٢٠١٠) تقدم تقييم الأداء وتحليل التكاليف ومتابعة المؤشرات دون عقد مستودعات.",
    "How do we get a quote?": "كيف نحصل على عرض سعر؟",
    "WhatsApp us your space size and volumes, or send the enquiry form. A real person replies within one business day.": "راسلنا عبر واتساب بمساحة وحجم عملياتك، أو أرسل نموذج الاستفسار. سيرد عليك شخص حقيقي خلال يوم عمل واحد.",
    "Smarter Warehousing.": "مستودعات أذكى.",
    "Greater Efficiency.": "وكفاءة أعلى.",
    "Storage organization, inventory accuracy and operational workflows — professionally managed non-food warehouse operations in Qatar.": "تنظيم التخزين ودقة المخزون وسير العمل التشغيلي — عمليات مستودعات غير غذائية تُدار باحترافية في قطر.",
    "Explore Warehouse Services": "استكشف خدمات المستودعات",
    "WhatsApp Us": "راسلنا واتساب",
    "Inventory accuracy": "دقة المخزون",
    "Managed operations": "عمليات مُدارة",
    "Driven processes": "إجراءات معتمدةدة",
    "Live inventory control": "متابعة حية للمخزون",
    "Warehouse Performance": "أداء المستودع",
    "Enquiry response fast": "رد سريع على الاستفسارات",
    "Trusted in Qatar": "موثوق في قطر",
    "One accountable partner in Doha": "شريك واحد مسؤول في الدوحة",
    "Why MISBAR": "لماذا مسبار",
    "Practical Business Solutions. Better Operational Performance.": "حلول عملية للأعمال. وأداء تشغيلي أفضل.",
    "Cost Analysis": "تحليل التكاليف",
    "Expense Reduction": "خفض المصروفات",
    "SOP-Driven Operations": "عمليات بإجراءات معتمدةدة",
    "Safe, organised workflows you can audit with confidence.": "سير عمل آمن ومنظم يمكنك تدقيقه بثقة.",
    "Qatar Coverage": "تغطية قطر",
    "Doha-based teams for corporates, SMEs and industrial operators.": "فرق في الدوحة تخدم الشركات الكبرى والصغرى والمشغلين الصناعيين.",
    "A note from our team": "كلمة من فريقنا",
    "Tell us how your operation": "أخبرنا كيف تسير عملياتك",
    "MISBAR is a Qatar-based professional services company delivering operational, management and consultancy solutions to businesses, organizations and individuals — focused on understanding challenges, finding improvement opportunities and delivering practical, measurable value.": "مسبار شركة قطرية للخدمات المهنية تقدم حلولاً تشغيلية وإدارية واستشارية للشركات والمؤسسات والأفراد — تركز على فهم التحديات وإيجاد فرص التحسين وتقديم قيمة عملية وملموسة.",
    "— the busy days, the bottlenecks, the workarounds. We’ll listen first, then shape a practical plan around your people, not just your paperwork.": "— الأيام المزدحمة والاختناقات والحلول المؤقتة. سنستمع أولاً ثم نصمم خطة عملية حول فريقك وليس فقط أوراقك.",
    "Your Trusted Partner in Business Operations and Consultancy": "شريكك الموثوق في العمليات التجارية والاستشارات",
    "Professional knowledge, practical experience and a commitment to quality.": "معرفة مهنية وخبرة عملية والتزام بالجودة.",
    "The People Behind MISBAR": "الأشخاص وراء مسبار",
    "Meet our team →": "تعرف على فريقنا ←",
    "Meet our team": "تعرف على فريقنا",
    "Meet us first": "قابلنا أولاً",
    "Years combined experience": "سنة خبرة مجمعة",
    "Projects supported": "مشروعدعومد",
    "Client satisfaction": "رضا العملاء",
    "Our Core Services": "خدماتنا الأساسية",
    "Five registered activities. Two flagship practices. One accountable partner.": "خمسة أنشطة مسجلة. ونشاطان رئيسيان. وشريك واحد مسؤول.",
    "Warehouse Operations and Management": "عمليات وإدارة المستودعات",
    "Warehouse Operations": "عمليات المستودعات",
    "General Management Consultancy": "الاستشارات الإدارية العامدة",
    "Management Consultancy": "الاستشارات الإدارية",
    "Environmental Consultancy": "الاستشارات البيئي",
    "Translation Services": "خدمات الترجمة",
    "Transaction Follow-up": "متابعة المعاملات",
    "Transaction Follow-up Services": "خدمات متابعة المعاملات",
    "All Services": "جميع الخدمات",
    "In their words": "بكلماتهم",
    "Our Approach": "منهجيتنا",
    "Understand Needs": "نفهم احتياجاتك",
    "Plan Solution": "نخطط الحل",
    "Execute & Monitor": "ننفذ ونتابع",
    "Deliver On Time": "نسلم في الوق",
    "Prefer talking it through? So do we.": "تفضل الحديث مباشرة؟ نحن أيضاً.",
    "WhatsApp MISBAR": "راسل مسبار واتساب",
    "Send an Enquiry": "أرسل استفساراً",
    "Call": "اتصل",
    "Call MISBAR": "اتصل بمسبار",
    "Call Now": "اتصل الآن",
    "WhatsApp": "واتساب",
    "Chat with MISBAR": "تحدث مع مسبار",
    "Full name *": "الاسم الكامل *",
    "Phone *": "الهاتف *",
    "Email *": "البريد الإلكتروني *",
    "Email": "البريد الإلكتروني",
    "Service": "الخدمة",
    "Message *": "الرسالة *",
    "Send via WhatsApp": "أرسل عبر واتساب",
    "A real person reads every enquiry.": "شخص حقيقي يقرأ كل استفسار.",
    "1. You write in your own words.": "١. اكتب بكلماتك الخاصة.",
    "2. We ask good questions.": "٢. نطرح أسئلة دقيقة.",
    "3. You get honest next steps.": "٣. تحصل على خطوات تالية صادق.",
    "Doha, State of Qatar": "الدوحة، دولت قطر",
    "Doha · Qatar": "الدوحة · قطر",
    "Qatar-based professional services company delivering operational, management and consultancy solutions that create measurable operational value.": "شركت قطرية للخدمات المهنية تقدم حلولاً تشغيلية وإدارية واستشارية تحقق قيمت تشغيلية ملموست.",
    "Managing Director": "المدير العام",
    "Warehouse Operations Manager": "مدير عمليات المستودعات",
    "Management Consultant": "مستشار إداري",
    "Leadership": "القيادة",
    "Operations": "العمليات",
    "Warehousing": "التخزين",
    "Inventory": "المخزون",
    "Consultancy": "الاستشارات",
    "SOPs": "الإجراءات المعتمدةدة",
    "Jassim Al-Kuwari": "جاسم الكواري",
    "Mohammed Al-Ansari": "محمد الأنصاري",
    "Fatima Al-Sulaiti": "فاطمة السليطي",
    "Qatari business leader with 15+ years across operations, trading and corporate services in Doha. Leads MISBAR's strategy, partnerships and delivery standards.": "قيادي أعمال قطري بخبرة تتجاوز ١٥ عاماً في العمليات والتجارة وخدمات الشركات في الدوحة. يقود استراتيجية مسبار وشراكاتها ومعايير التنفيذ.",
    "Qatari business leader with 15+ years across operations, trading and corporate services in Doha.": "قيادي أعمال قطري بخبرة تتجاوز ١٥ عاماً في العمليات والتجارة وخدمات الشركات في الدوحة.",
    "Runs MISBAR's non-food storage operations — inventory control, FIFO discipline, team supervision and safe, on-time dispatch across Qatar.": "يدير عمليات التخزين غير الغذائي في مسبار — ضبط المخزون والالتزام بنظام FIFO والإشراف على الفريق والصرف الآمن وفي الوقت المحدد في جميع أنحاء قطر.",
    "Runs MISBAR's non-food storage operations — inventory control, FIFO discipline and safe dispatch.": "يدير عمليات التخزين غير الغذائي في مسبار — ضبط المخزون والالتزام بنظام FIFO والصرف الآمن.",
    "Management consultant advising SMEs and corporates on costs, SOPs and performance. Bilingual Arabic–English reporting, practical and audit-ready.": "مستشار إداري يقدم المشورة للشركات الصغيرة والكبيرة حول التكاليف والإجراءات والأداء. تقارير ثنائية اللغة عربي–إنجليزي، عملية وجاهزة للتدقيق.",
    "Bilingual Arabic–English consultant on costs, SOPs and performance improvement.": "مستشار ثنائي اللغة عربي–إنجليزي في التكاليف والإجراءات وتحسين الأداء.",
    "Learn more →": "اعرف المزيد ←",
    "Professional non-food storage facility operations, inventory control, warehouse organization and operational efficiency improvement.": "تشغيل مرافق التخزين غير الغذائي باحترافية، وضبط المخزون، وتنظيم المستودعات، وتحسين الكفاءة التشغيلية.",
    "Business performance assessment, cost analysis, expense reduction, process improvement and operational planning.": "تقييم أداء الأعمال، وتحليل التكاليف، وخفض المصروفات، وتحسين العمليات، والتخطيط التشغيلي.",
    "Environmental assessments, waste management advisory, environmental risk evaluation and practical improvement recommendations.": "تقييمات بيئية، واستشارات إدارة النفايات، وتقييم المخاطر البيئية، وتوصيات تحسين عملية.",
    "Arabic-English document, business correspondence, report and administrative translation services.": "خدمات ترجمة المستندات والمراسلات التجارية والتقارير والمعاملات الإدارية عربي–إنجليزي.",
    "Administrative transaction preparation, application submission and follow-up through permitted government and private channels.": "إعداد المعاملات الإدارية وتقديم الطلبات ومتابعتها عبر القنوات الحكومية والخاصة المعتمدة.",
    "Talk to someone who does this": "تحدث مع من يقوم بهذا",
    "every day in Doha": "كل يوم في الدوحة",
    "Say hello →": "قل مرحباً ←",
    "Corporates": "الشركات الكبرى",
    "SMEs": "الشركات الصغرى والمتوسط",
    "Industrial": "القطاع الصناعي",
    "Logistics": "اللوجستيات",
    "Government Suppliers": "موردو الجهات الحكومي",
    "How we work, honestly": "كيف نعمل، بصدق",
    "Professional Profiles, Managed with Care": "سير مهنية، تُدار بعناي",
    "Overview": "نظرت عامد",
    "What we deliver": "ماذا نقدم",
    "Send Enquiry": "إرسال الاستفسار",
    "Office": "المكتب",
    "What happens next": "ماذا بعد",
    "Activity 521011": "النشاط ٥٢١٠١١",
    "Activity 702010": "النشاط ٧٠٢٠١٠",
    "Activity 749033": "النشاط ٧٤٩٠٣٣",
    "Activity 829901": "النشاط ٨٢٩٩٠١",
    "Activity 829903": "النشاط ٨٢٩٩٠٣",
    "Environmental Advisory": "الاستشارات البيئي",
    "Arabic–English Translation": "الترجمت عرب–إنجليزي",
    "Clear view of operational costs and improvement opportunities.": "رؤيت واضحت للتكاليف التشغيلية وفرص التحسين.",
    "Expense reduction roadmap in weeks, not months": "خارطت طريق لخفض المصروفات خلال أسابيع لا أشهر.",
    "Documented procedures for consistency and accountability.": "إجراءات موثقت لضمان الاتساق والمساءلت.",
    "Labelled locations, clear aisles and optimised space for non-food goods.": "مواقع مرقمت وممرات واضحت ومساحات محسّنت للبضائع غير الغذائي.",
    "Inventory tracking & control": "تتبع المخزون وضبطه",
    "FIFO, batch and expiry control with SOPs your team can follow.": "ضبط FIFO والدفعات وتواريخ الانتهاء بإجراءات يسهل على فريقك اتباعها.",
    "Flexible operations": "عمليات مرنت",
    "One Partner.": "شريك واحد.",
    "Five Professional Services.": "خمس خدمات مهنية.",
    "Integrated operational, management and professional services in Qatar.": "خدمات تشغيلية وإدارية ومهنية متكاملت في قطر.",
    "Costs · Processes · KPIs": "التكاليف · الإجراءات · المؤشرات",
    "Clarity in Every Operation": "وضوح في كل عملي",
    "Business Challenges.": "تحديات الأعمال.",
    "Achieving Results": "تحقيق النتائج.",
    "Smart Process for Seamless Delivery": "عمليت ذكيت لتسليم سلس",
    "Our process": "عمليتنا",
    "Call, WhatsApp or send an enquiry — we respond to corporate enquiries promptly.": "اتصل أو راسلنا واتساب أو أرسل استفساراً — نرد على استفسارات الشركات بسرعت.",
    "Discuss Your Requirements": "ناقش متطلباتك",
    "Discuss Your Warehouse Requirements": "ناقش متطلبات المستودعات لديك",
    "Get a Quote": "اطلب عرض سعر",
    "MISBAR · Warehouse Operations · 521011": "مسبار · عمليات المستودعات · ٥٢١٠١١",
    "MISBAR · Management Consultancy · 702010": "مسبار · الاستشارات الإدارية · ٧٠٢٠١٠",
    "MISBAR · Doha, Qatar · Integrated Services": "مسبار · الدوحة، قطر · خدمات متكاملة"
    ,"CONSULTING & SERVICES": "للاستشارات والخدمات",
    "Receiving · Storage · Dispatch": "الاستلام · التخزين · الصرف",
    "Space utilization improved month over month": "تحسن استغلال المساحة شهراً بعد شهر",
    "Safety & risk reviewed": "السلامة والمخاطر مُراجعة",
    "Safety and operational risk reviews": "مراجعات السلامة والمخاطر التشغيلية",
    "Practical Solutions.": "حلول عملية.",
    "Performance assessment, cost analysis and process improvement — clear strategies that create measurable operational value.": "تقييم الأداء وتحليل التكاليف وتحسين العمليات — استراتيجيات واضحة تحقق قيمة تشغيلية ملموسة.",
    "Talk to Consultants": "تحدث مع المستشارين",
    "Talk to Our Consultants": "تحدث مع مستشارينا",
    "Registered activities": "الأنشطة المسجلة",
    "Based improvement": "تحسين مبني على الواقع",
    "ROI": "العائد على الاستثمار",
    "Focused planning": "تخطيط مركز",
    "Cost analysis delivered": "تحليل تكاليف مُسلّم",
    "Performance Review": "مراجعة الأداء",
    "Corrective action plan": "خطة إجراءات تصحيحية",
    "Warehouse, consultancy, environmental, translation and transaction follow-up — integrated support for corporates, SMEs and industrial operators.": "المستودعات والاستشارات والبيئة والترجمة ومتابعة المعاملات — دعم متكامل للشركات الكبرى والصغرى والمشغلين الصناعيين.",
    "Real people · Fast replies": "أشخاص حقيقيون · ردود سريعة",
    "Quality · Structure · Partnership": "الجودة · الهيكل · الشراكة",
    "Long-term relationships, professional standards": "علاقات طويلة الأمد ومعايير مهنية",
    "Inventory Accuracy": "دقة المخزون",
    "Receiving, storage and dispatch under SOP control.": "الاستلام والتخزين والصرف تحت ضبط الإجراءات المعتمدة.",
    "Arabic–English Support": "دعم عربي – إنجليزي",
    "Real people on WhatsApp — Mon–Sat, 8am–6pm Doha.": "أشخاص حقيقيون على واتساب — الاثنين إلى السبت، ٨ صباحاً حتى ٦ مساءً الدوحة.",
    "actually runs": "تسير فعلاً",
    "— The MISBAR team, Doha": "— فريق مسبار، الدوحة",
    "On-time delivery": "التسليم في الوقت المحدد",
    "Site visits & operations reviewed": "زيارات ميدانية وعمليات مُراجعة",
    "Units handled with care": "وحدات تُدار بعناية",
    "Value of goods movements supported": "قيمة حركات البضائع المدعومة",
    "Commitment to follow-through": "التزام بالمتابعة حتى الإنجاز",
    "What we do": "ماذا نفعل",
    "Racked & organised storage": "تخزين منظم على رفوف",
    "Receiving checks, stock counts and system discipline you can trust.": "فحص الاستلام وجرد المخزون وانضباط نظامي يمكنك الوثوق به.",
    "Reporting tailored to you": "تقارير مصممة لك",
    "Simple Arabic–English summaries: stock, movement and exceptions.": "ملخصات عربية – إنجليزية مبسطة: المخزون والحركة والاستثناءات.",
    "Flagship · Activity 521011": "النشاط الرئيسي · ٥٢١٠١١",
    "Flagship · Activity 702010": "النشاط الرئيسي · ٧٠٢٠١٠",
    "Smarter Warehouse Operations. Greater Efficiency.": "عمليات مستودعات أذكى. وكفاءة أعلى.",
    "Effective warehouse management is critical to business performance. MISBAR improves storage organization, inventory accuracy, workflows and resource utilization.": "الإدارة الفعالة للمستودعات أساسية لأداء الأعمال. مسبار يحسّن تنظيم التخزين ودقة المخزون وسير العمل واستغلال الموارد.",
    "Warehouse setup and operational management": "تأسيس المستودعات وإدارتها التشغيلية",
    "Receiving, inspection and dispatch management": "إدارة الاستلام والفحص والصرف",
    "Inventory control and stocktaking": "ضبط المخزون والجرد",
    "Storage space optimization & SOP development": "تحسين مساحات التخزين وتطوير الإجراءات",
    "Transforming Business Challenges into Practical Solutions.": "نحوّل تحديات الأعمال إلى حلول عملية.",
    "We help organizations identify performance gaps, understand operational costs and develop practical improvement strategies.": "نساعد المؤسسات على تحديد فجوات الأداء وفهم التكاليف التشغيلية وتطوير استراتيجيات تحسين عملية.",
    "Business performance assessment": "تقييم أداء الأعمال",
    "Operational cost analysis & expense reduction": "تحليل التكاليف التشغيلية وخفض المصروفات",
    "Procurement and supply chain improvement": "تحسين المشتريات وسلسلة الإمداد",
    "Process optimization, SOPs, KPIs & monitoring": "تحسين العمليات والإجراءات والمؤشرات والمتابعة",
    "Consultancy Services": "الخدمات الاستشارية",
    "What it feels like to work with us": "كيف تبدو تجربة العمل معنا",
    "Real relationships, plain language, steady follow-through.": "علاقات حقيقية ولغة واضحة ومتابعة ثابتة.",
    "Sample quotes — replace with client-approved words": "اقتباسات تجريبية — تُستبدل بكلمات معتمدة من العملاء",
    "They walked our warehouse floor with us, noticed what we had stopped seeing, and fixed the flow in weeks.": "ساروا معنا في أرضية المستودع، ولاحظوا ما توقفنا عن رؤيته، وأصلحوا التدفق خلال أسابيع.",
    "Operations Manager, Industrial client — Doha": "مدير عمليات، عميل صناعي — الدوحة",
    "Clear costs, clear steps, no jargon. We finally understood where the money was going — and what to do next.": "تكاليف واضحة وخطوات واضحة دون مصطلحات معقدة. فهمنا أخيراً أين تذهب الأموال — وماذا نفعل بعد ذلك.",
    "Finance Lead, SME client — Doha": "مسؤول مالي، عميل من الشركات الصغرى — الدوحة",
    "Documents, translations, follow-ups — one call and it was handled. They treat small tasks with care.": "المستندات والترجمات والمتابعات — مكالمة واحدة وتم كل شيء. يتعاملون مع المهام الصغيرة بعناية.",
    "Admin Coordinator, Commercial establishment — Doha": "منسق إداري، مؤسسة تجارية — الدوحة",
    "Understand → Plan → Execute → Deliver. The same calm rhythm behind every warehouse and consultancy engagement.": "نفهم ← نخطط ← ننفذ ← نسلّم. نفس الإيقاع الهادئ وراء كل عمل مستودعات واستشارات.",
    "We walk your floor and listen to your team.": "نزور موقعك ونستمع إلى فريقك.",
    "Practical SOPs, layouts and costed steps.": "إجراءات عملية وتصاميم وخطوات مُسعّرة.",
    "We implement with daily checks and reports.": "ننفذ مع فحص وتقارير يومية.",
    "Safe handover and steady follow-through.": "تسليم آمن ومتابعة ثابتة.",
    "Custom plan": "خطة مخصصة",
    "Request a Custom Logistics Plan": "اطلب خطة لوجستية مخصصة",
    "Tell us your volumes and bottlenecks — we design the right storage and flow.": "أخبرنا بأحجامك والاختناقات — نصمم لك التخزين والتدفق المناسب.",
    "Request a Plan": "اطلب خطة",
    "Why choose MISBAR": "لماذا تختار مسبار",
    "Warehouse + consultancy under one roof": "المستودعات والاستشارات تحت سقف واحد",
    "Arabic–English documents and follow-up": "مستندات ومتابعة عربي – إنجليزي",
    "Senior attention on every account": "اهتمام قيادي بكل حساب",
    "Clear pricing and honest timelines": "أسعار واضحة وجداول صادقة",
    "Why Businesses Choose MISBAR": "لماذا تختار الشركات مسبار",
    "Experience & Expertise": "الخبرة والاختصاص",
    "Practical knowledge across operations and consultancy.": "معرفة عملية عبر العمليات والاستشارات.",
    "Integrated Solutions": "حلول متكاملة",
    "Multiple professional services under one company.": "خدمات مهنية متعددة تحت شركة واحدة.",
    "Commitment to Quality": "الالتزام بالجودة",
    "Structured processes and professional standards.": "عمليات منظمة ومعايير مهنية.",
    "Long-term Partnerships": "شراكات طويلة الأمد",
    "Reliable relationships with our clients.": "علاقات موثوقة مع عملائنا.",
    "Understand Client Needs": "نفهم احتياجات العميل",
    "Provide Tailored Solutions": "نقدم حلولاً مصممة",
    "Implementation & Follow-up": "التنفيذ والمتابعة",
    "Our people": "فريقنا",
    "Our Doha team — Mon–Sat, 8am–6pm": "فريقنا في الدوحة — الاثنين إلى السبت، ٨ صباحاً حتى ٦ مساءً",
    "Mon–Sat · 8am–6pm Doha — a real person replies": "الاثنين – السبت · ٨ صباحاً حتى ٦ مساءً الدوحة — يرد عليك شخص حقيقي",
    "Call or WhatsApp and tell us what’s happening in your operation — in your own words. We’ll ask good questions and suggest honest next steps.": "اتصل أو راسلنا واتساب وأخبرنا بما يحدث في عملياتك — بكلماتك الخاصة. سنطرح أسئلة دقيقة ونقترح خطوات تالية صادقة.",
    "MISBAR for Consulting and Services · misbar.qa": "مسبار للاستشارات والخدمات · misbar.qa",
    "English (Phase 1) · Arabic (Phase 2) · Activity pages 06–07 reserved": "الإنجليزية (المرحلة ١) · العربية (المرحلة ٢) · صفحتا الأنشطة ٠٦–٠٧ محجوزتان",
    "Environmental · 749033": "البيئة · ٧٤٩٠٣٣",
    "Translation · 829901": "الترجمة · ٨٢٩٩٠١",
    "Transactions · 829903": "المعاملات · ٨٢٩٩٠٣",
    "What we deliver": "ماذا نقدم",
    "How we work, honestly": "كيف نعمل بصدق",
    "K+": "ألف+",
    "M+": "مليون+",
    "+ you": "+ أنت",
    "Business Challenges.": "تحديات الأعمال.",
    "Practical Business Solutions.": "حلول عملية للأعمال.",
    "Better Operational Performance.": "وأداء تشغيلي أفضل.",
    "One Partner. Five Professional Services.": "شريك واحد. خمس خدمات مهنية.",
    "The bottlenecks, the workarounds. We’ll listen first, then shape a practical plan around your people, not just your paperwork.": "الاختناقات والحلول المؤقتة. سنستمع أولاً، ثم نصمم خطة عملية حول فريقك وليس فقط أوراقك.",
    "The busy days, the bottlenecks, the workarounds. We’ll listen first, then shape a practical plan around your people, not just your paperwork.": "الأيام المزدحمة والاختناقات والحلول المؤقتة. سنستمع أولاً ثم نصمم خطة عملية حول فريقك وليس فقط أوراقك."

  };

  function norm(s){ return (s||"").replace(/\s+/g," ").trim(); }
  var KEYS = null;
  function keys(){ if(!KEYS){ KEYS = Object.keys(MAP).sort(function(a,b){ return b.length - a.length; }); } return KEYS; }
  function arText(en){
    var out = en;
    var ks = keys();
    for(var i=0;i<ks.length;i++){ var k=ks[i]; if(!k) continue; if(out.indexOf(k)!==-1){ out = out.split(k).join(MAP[k]); } }
    return out;
  }
  function apply(lang){
    var isAr = lang==="ar";
    document.documentElement.lang = isAr?"ar":"en";
    document.documentElement.dir = isAr?"rtl":"ltr";
    document.body.classList.toggle("ma-rtl", isAr);
    try{ localStorage.setItem("misbar_lang", lang); }catch(e){}
    // text nodes — substring replace from original English
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes=[]; while(walker.nextNode()){ nodes.push(walker.currentNode); }
    nodes.forEach(function(n){
      var p=n.parentElement; if(!p) return;
      var tag=(p.tagName||"").toLowerCase();
      if(tag==="script"||tag==="style"||tag==="noscript") return;
      if(p.closest && p.closest("[data-no-i18n]")) return;
      if(p.closest && p.closest("[data-hero-prev],[data-hero-next],[data-svc-prev],[data-svc-next]")) return;
      if(!n.__en){ n.__en = n.nodeValue; }
      if(isAr){
        var src = n.__en;
        if(!norm(src)) return;
        n.nodeValue = arText(src);
      } else {
        if(n.__en) n.nodeValue = n.__en;
      }
    });
    // placeholders
    document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(function(el){
      if(!el.__en_ph) el.__en_ph = el.getAttribute("placeholder");
      var cur = norm(el.getAttribute("placeholder"));
      if(isAr && MAP[cur]) el.setAttribute("placeholder", MAP[cur]);
      if(!isAr && el.__en_ph) el.setAttribute("placeholder", el.__en_ph);
    });
    // slider arrows: mirror for RTL, keep LTR icons otherwise (BEM ma-)
    document.querySelectorAll("[data-hero-prev],[data-svc-prev]").forEach(function(b){ b.textContent = isAr ? "→" : "←"; });
    document.querySelectorAll("[data-hero-next],[data-svc-next]").forEach(function(b){ b.textContent = isAr ? "←" : "→"; });
    // lang buttons
    document.querySelectorAll(".ma-header__lang").forEach(function(b){
      b.textContent = isAr ? "EN" : "عربي";
      b.setAttribute("data-no-i18n","1");
    });
    MISBAR_I18N.current = lang;
  }
  function langFromURL(){
    try{
      var q = new URLSearchParams(window.location.search).get("lang");
      if(!q) return null;
      q = q.toLowerCase();
      if(q==="ar"||q==="ae"||q==="arabic"||q==="a") return "ar";
      if(q==="en"||q==="e"||q==="english") return "en";
    }catch(e){}
    return null;
  }
  function syncURL(lang){
    try{
      var u = new URL(window.location.href);
      var code = (lang==="ar") ? "ar" : "en";
      // keep ?lang=ae working: if URL had ae, preserve ae for Arabic
      try{
        var cur = new URLSearchParams(window.location.search).get("lang");
        if(lang==="ar" && cur && cur.toLowerCase()==="ae") code = "ae";
      }catch(e){}
      if(u.searchParams.get("lang")!==code){ u.searchParams.set("lang", code); window.history.replaceState({}, "", u.toString()); }
    }catch(e){}
  }
  window.MISBAR_I18N = window.MISBAR_I18N || {};
  window.MISBAR_I18N.current = "en";
  window.MISBAR_I18N.switchTo = function(l){ syncURL(l); apply(l); };
  window.MISBAR_I18N.toggle = function(){ var n = (document.documentElement.dir==="rtl"?"en":"ar"); syncURL(n); apply(n); };
  window.MISBAR_I18N.applySaved = function(){
    var l = langFromURL();
    if(!l){ try{ l=localStorage.getItem("misbar_lang")||"en"; }catch(e){ l="en"; } }
    if(l==="ar"){ try{ localStorage.setItem("misbar_lang","ar"); }catch(e){} apply("ar"); syncURL("ar"); }
    else { apply("en"); }
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", window.MISBAR_I18N.applySaved);
  else window.MISBAR_I18N.applySaved();
  // re-apply after dynamic renders (team/service grids)
  var _r = window.MISBAR_refreshAnims;
  window.MISBAR_refreshAnims = function(){ if(typeof _r==="function") try{_r();}catch(e){} try{ if(window.MISBAR_I18N.current==="ar") apply("ar"); }catch(e){} };
})();
