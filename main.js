// ===================================
// REDESIGNED PORTFOLIO JAVASCRIPT
// Enhanced interactivity and animations
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Theme functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('span');
    
    // Translation dictionary
    const translations = {
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills',
            'nav-certificates': 'Certificates',
            'nav-contact': 'Contact',
            'nav-resume': 'Resume',
            'hero-role-prefix': "I'm a",
            'hero-title-1': 'Building Intelligent Systems',
            'hero-title-2': 'That Transform Industries',
            'hero-description': 'Hello, I\'m Moataz Dahy Abdelraouf, an AI Engineer specializing in Machine Learning, Computer Vision, NLP, Generative AI, RAG Systems, Agentic AI, and Intelligent Automation.',
            'hero-view-work': 'View My Work',
            'hero-download-cv': 'Download CV',
            'hero-lets-talk': 'Let\'s Talk',
            'expertise-subtitle': 'What I Do',
            'expertise-title': 'AI Expertise',
            'expertise-ml': 'Machine Learning',
            'expertise-ml-desc': 'Supervised and unsupervised learning, feature engineering, and model evaluation for predictive analytics.',
            'expertise-dl': 'Deep Learning',
            'expertise-dl-desc': 'CNNs, RNNs, and attention mechanisms for complex pattern recognition and prediction tasks.',
            'expertise-cv': 'Computer Vision',
            'expertise-cv-desc': 'Object detection, image classification, and video analysis using YOLO, OpenCV, and Vision Transformers.',
            'expertise-nlp': 'Natural Language Processing',
            'expertise-nlp-desc': 'Text generation, sentiment analysis, and document processing with Transformers, BERT, and GPT.',
            'expertise-genai': 'Generative AI',
            'expertise-genai-desc': 'Large Language Models, image generation, and content creation using cutting-edge AI techniques.',
            'expertise-rag': 'RAG Systems',
            'expertise-rag-desc': 'Retrieval-Augmented Generation for building knowledge-aware AI applications with accurate, contextual responses.',
            'expertise-agentic': 'Agentic AI',
            'expertise-agentic-desc': 'Autonomous AI agents that can reason, plan, and execute complex tasks independently with human oversight.',
            'projects-subtitle': 'My Work',
            'projects-title': 'Featured Projects',
            'projects-description': 'Building AI solutions that solve real-world problems',
            'projects-view-all': 'View All Projects',
            'project-code': 'Code',
            'proj-title-1': 'Car License Plate Detection',
            'proj-desc-1': 'Real-time license plate detection system using computer vision techniques for automated vehicle identification and parking management.',
            'proj-title-2': 'Brain Tumor Classification & Segmentation',
            'proj-desc-2': 'Deep learning model for brain tumor classification and segmentation using CNNs, demonstrating medical imaging analysis capabilities.',
            'proj-title-3': 'Twitter Sentiment Analysis',
            'proj-desc-3': 'NLP-based sentiment analysis system for Twitter data, showcasing natural language processing and text classification skills.',
            'proj-title-4': 'Text Summarizer & Question Answering',
            'proj-desc-4': 'Advanced NLP system for text summarization and question answering using transformer models and modern NLP techniques.',
            'proj-title-5': 'Real-Time Hand Gesture Recognition',
            'proj-desc-5': 'Real-time hand gesture recognition system using computer vision for human-computer interaction applications.',
            'proj-title-6': 'ChatBot Telegram with n8n',
            'proj-desc-6': 'Intelligent Telegram chatbot built with n8n automation platform, showcasing conversational AI and workflow automation.',
            'proj-title-7': 'Text to Image',
            'proj-desc-7': 'Generative AI model for converting text descriptions to images, demonstrating cutting-edge generative AI capabilities.',
            'proj-title-8': 'Web Scraping Projects',
            'proj-desc-8': 'Collection of 7 web scrapers for books, courses, job listings, sports matches, car listings, and more. Demonstrates data extraction and processing skills.',
            'proj-title-9': 'AI Agents for Beginners',
            'proj-desc-9': "Learning repository based on Microsoft's AI Agents course, covering fundamental concepts of building AI agents and autonomous systems.",
            'proj-title-10': 'QR Code Generator',
            'proj-desc-10': 'Python-based QR code generation system for creating customizable QR codes for various applications including URLs, text, and contact information.',
            'proj-title-11': 'Data Analysis Projects',
            'proj-desc-11': 'Comprehensive data analysis projects demonstrating data manipulation, visualization, and statistical analysis skills using Python and Pandas.',
            'proj-title-12': 'Power BI Projects',
            'proj-desc-12': 'Business intelligence and data visualization projects using Power BI, showcasing dashboard creation and data storytelling capabilities.',
            'skills-subtitle': 'Technical Skills',
            'skills-title': 'Expertise Level',
            'skill-cv': 'Computer Vision',
            'skill-nlp': 'NLP & Transformers',
            'skill-dl': 'Deep Learning',
            'skill-data': 'Data & Tools',
            'certificates-subtitle': 'Credentials',
            'certificates-title': 'Certifications',
            'certificates-description': 'Professional certifications and courses completed',
            'about-subtitle': 'About Me',
            'about-title': 'From Curiosity to AI Engineering',
            'about-desc-1': 'My journey into AI started with a simple question: "How can machines understand and learn from the world around us?"',
            'about-desc-2': 'That curiosity led me from experimenting with basic neural networks to building production-ready AI systems that solve real-world problems. Along the way, I\'ve developed expertise in computer vision, natural language processing, and deep learning.',
            'about-desc-3': 'Today, I specialize in building intelligent systems that make a difference — from detecting license plates in parking lots to generating educational content using large language models.',
            'about-years': 'Years Experience',
            'about-models': 'Production Models',
            'about-projects': 'Projects Completed',
            'about-followers': 'LinkedIn Followers',
            'about-cta': 'Get In Touch',
            'contact-subtitle': 'Get In Touch',
            'contact-title': 'Let\'s Build Something Amazing',
            'contact-email-label': 'Email',
            'contact-linkedin-label': 'LinkedIn',
            'contact-github-label': 'GitHub',
            'contact-whatsapp-label': 'WhatsApp',
            'contact-location-label': 'Location',
            'contact-location-text': 'Cairo, Egypt (UTC+2)',
            'contact-whatsapp-text': 'Chat on WhatsApp',
            'contact-name': 'Your Name',
            'contact-email': 'Your Email',
            'contact-subject': 'Subject',
            'contact-message': 'Your Message',
            'contact-send': 'Send Message',
            'footer-copyright': '© 2024 Moataz Abdelraouf. All rights reserved.',
            'footer-tagline': 'Building Intelligent Systems That Transform Industries'
        },
        ar: {
            'nav-home': 'الرئيسية',
            'nav-about': 'عني',
            'nav-projects': 'المشاريع',
            'nav-skills': 'المهارات',
            'nav-certificates': 'الشهادات',
            'nav-contact': 'تواصل معي',
            'nav-resume': 'السيرة الذاتية',
            'hero-role-prefix': 'أنا',
            'hero-title-1': 'بناء أنظمة ذكية',
            'hero-title-2': 'تحول الصناعات',
            'hero-description': 'مرحباً، أنا معتز ضحي عبد الرؤوف، مهندس ذكاء اصطناعي متخصص في تعلم الآلة، الرؤية الحاسوبية، معالجة اللغات الطبيعية، الذكاء الاصطناعي التوليدي، أنظمة RAG، الذكاء الاصطناعي الوكيل، والأتمتة الذكية.',
            'hero-view-work': 'شاهد أعمالي',
            'hero-download-cv': 'تحميل السيرة الذاتية',
            'hero-lets-talk': 'لنتحدث',
            'expertise-subtitle': 'ما أفعله',
            'expertise-title': 'خبرة الذكاء الاصطناعي',
            'expertise-ml': 'تعلم الآلة',
            'expertise-ml-desc': 'التعلم تحت الإشراف وبدون إشراف، هندسة الميزات، وتقييم النماذج للتحليلات التنبؤية.',
            'expertise-dl': 'التعلم العميق',
            'expertise-dl-desc': 'الشبكات العصبية التلافيفية والمتكررة وآليات الانتباه لتمييز الأنماط المعقدة ومهام التنبؤ.',
            'expertise-cv': 'الرؤية الحاسوبية',
            'expertise-cv-desc': 'كشف الأجسام، تصنيف الصور، وتحليل الفيديو باستخدام YOLO و OpenCV ومحولات الرؤية.',
            'expertise-nlp': 'معالجة اللغات الطبيعية',
            'expertise-nlp-desc': 'توليد النصوص، تحليل المشاعر، ومعالجة المستندات باستخدام المحولات و BERT و GPT.',
            'expertise-genai': 'الذكاء الاصطناعي التوليدي',
            'expertise-genai-desc': 'نماذج اللغات الكبيرة، توليد الصور، وإنشاء المحتوى باستخدام تقنيات الذكاء الاصطناعي المتطورة.',
            'expertise-rag': 'أنظمة RAG',
            'expertise-rag-desc': 'التوليد المعزز بالاسترجاع لبناء تطبيقات الذكاء الاصطناعي المدركة للمعرفة باستجابات دقيقة وسياقية.',
            'expertise-agentic': 'الذكاء الاصطناعي الوكيل',
            'expertise-agentic-desc': 'وكلاء الذكاء الاصطناعي المستقلون الذين يمكنهم التفكير والتخطيط وتنفيذ المهام المعقدة بشكل مستقل مع إشراف بشري.',
            'projects-subtitle': 'أعمالي',
            'projects-title': 'المشاريع المميزة',
            'projects-description': 'بناء حلول الذكاء الاصطناعي التي تحل المشكلات الواقعية',
            'projects-view-all': 'عرض جميع المشاريع',
            'project-code': 'الكود',
            'proj-title-1': 'كشف لوحات السيارات',
            'proj-desc-1': 'نظام كشف لوحات السيارات في الوقت الفعلي باستخدام تقنيات الرؤية الحاسوبية لتحديد المركبات آليًا وإدارة مواقف السيارات.',
            'proj-title-2': 'تصنيف وتقسيم أورام الدماغ',
            'proj-desc-2': 'نموذج تعلم عميق لتصنيف وتقسيم أورام الدماغ باستخدام الشبكات العصبية التلافيفية، يُظهر قدرات تحليل الصور الطبية.',
            'proj-title-3': 'تحليل مشاعر تويتر',
            'proj-desc-3': 'نظام تحليل مشاعر قائم على معالجة اللغات الطبيعية لبيانات تويتر، يُظهر مهارات معالجة اللغة الطبيعية وتصنيف النصوص.',
            'proj-title-4': 'تلخيص النصوص والإجابة على الأسئلة',
            'proj-desc-4': 'نظام معالجة لغات طبيعية متقدم لتلخيص النصوص والإجابة على الأسئلة باستخدام نماذج المحولات وتقنيات NLP الحديثة.',
            'proj-title-5': 'التعرف على إيماءات اليد في الوقت الفعلي',
            'proj-desc-5': 'نظام التعرف على إيماءات اليد في الوقت الفعلي باستخدام الرؤية الحاسوبية لتطبيقات التفاعل بين الإنسان والحاسوب.',
            'proj-title-6': 'روبوت محادثة تيليغرام مع n8n',
            'proj-desc-6': 'روبوت محادثة ذكي على تيليغرام مبني بمنصة أتمتة n8n، يُظهر الذكاء الاصطناعي للمحادثة وأتمتة سير العمل.',
            'proj-title-7': 'تحويل النص إلى صورة',
            'proj-desc-7': 'نموذج ذكاء اصطناعي توليدي لتحويل الأوصاف النصية إلى صور، يُظهر أحدث قدرات الذكاء الاصطناعي التوليدي.',
            'proj-title-8': 'مشاريع استخراج الويب',
            'proj-desc-8': 'مجموعة من 7 أدوات استخراج للكتب والدورات وقوائم الوظائف والمباريات الرياضية وقوائم السيارات وغيرها، تُظهر مهارات استخراج البيانات ومعالجتها.',
            'proj-title-9': 'وكلاء الذكاء الاصطناعي للمبتدئين',
            'proj-desc-9': 'مستودع تعليمي مبني على دورة Microsoft لوكلاء الذكاء الاصطناعي، يغطي المفاهيم الأساسية لبناء وكلاء الذكاء الاصطناعي والأنظمة المستقلة.',
            'proj-title-10': 'مولد رمز QR',
            'proj-desc-10': 'نظام توليد رموز QR مبني على Python لإنشاء رموز QR قابلة للتخصيص لتطبيقات متنوعة تشمل الروابط والنصوص ومعلومات الاتصال.',
            'proj-title-11': 'مشاريع تحليل البيانات',
            'proj-desc-11': 'مشاريع تحليل بيانات شاملة تُظهر مهارات معالجة البيانات والتصور والتحليل الإحصائي باستخدام Python وPandas.',
            'proj-title-12': 'مشاريع Power BI',
            'proj-desc-12': 'مشاريع ذكاء أعمال وتصور بيانات باستخدام Power BI، تُظهر إنشاء لوحات البيانات وسرد قصص البيانات.',
            'skills-subtitle': 'المهارات التقنية',
            'skills-title': 'مستوى الخبرة',
            'skill-cv': 'الرؤية الحاسوبية',
            'skill-nlp': 'معالجة اللغات والمحولات',
            'skill-dl': 'التعلم العميق',
            'skill-data': 'البيانات والأدوات',
            'certificates-subtitle': 'الاعتمادات',
            'certificates-title': 'الشهادات',
            'certificates-description': 'الشهادات والدورات المهنية المكتملة',
            'about-subtitle': 'عني',
            'about-title': 'من الفضول إلى هندسة الذكاء الاصطناعي',
            'about-desc-1': 'بدأت رحلتي في الذكاء الاصطناعي بسؤال بسيط: "كيف يمكن للآلات أن تفهم وتتعلم من العالم من حولنا؟"',
            'about-desc-2': 'قادني هذا الفضول من تجربة الشبكات العصبية الأساسية إلى بناء أنظمة ذكاء اصطناعي جاهزة للإنتاج تحل مشكلات واقعية. على طول الطريق، طورت خبرة في الرؤية الحاسوبية ومعالجة اللغات الطبيعية والتعلم العميق.',
            'about-desc-3': 'اليوم، أتخصص في بناء أنظمة ذكية تحدث فرقاً - من كشف لوحات السيارات في مواقف السيارات إلى توليد محتوى تعليمي باستخدام نماذج اللغات الكبيرة.',
            'about-years': 'سنوات الخبرة',
            'about-models': 'نماذج الإنتاج',
            'about-projects': 'المشاريع المكتملة',
            'about-followers': 'متابعي لينكد إن',
            'about-cta': 'تواصل معي',
            'contact-subtitle': 'تواصل معي',
            'contact-title': 'لنبني شيئاً مذهلاً',
            'contact-email-label': 'البريد الإلكتروني',
            'contact-linkedin-label': 'لينكد إن',
            'contact-github-label': 'جيت هب',
            'contact-whatsapp-label': 'واتساب',
            'contact-location-label': 'الموقع',
            'contact-location-text': 'القاهرة، مصر (ت ع م+٢)',
            'contact-whatsapp-text': 'دردشة على واتساب',
            'contact-name': 'اسمك',
            'contact-email': 'بريدك الإلكتروني',
            'contact-subject': 'الموضوع',
            'contact-message': 'رسالتك',
            'contact-send': 'إرسال الرسالة',
            'footer-copyright': '© ٢٠٢٤ معتز عبد الرؤوف. جميع الحقوق محفوظة.',
            'footer-tagline': 'بناء أنظمة ذكية تحول الصناعات'
        }
    };
    
    // Function to update page content based on language
    function updateContent(lang) {
        // Update text content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }
    
    // Check for saved language preference or default to English (LTR)
    const savedLang = localStorage.getItem('lang') || 'en';
    const html = document.documentElement;
    
    if (savedLang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        langText.textContent = 'EN';
        updateContent('ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        langText.textContent = 'AR';
        updateContent('en');
    }
    
    langToggle.addEventListener('click', function() {
        const currentDir = html.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        const newLang = newDir === 'rtl' ? 'ar' : 'en';
        
        html.setAttribute('dir', newDir);
        html.setAttribute('lang', newLang);
        langText.textContent = newDir === 'rtl' ? 'EN' : 'AR';
        localStorage.setItem('lang', newLang);
        updateContent(newLang);
        
        console.log(`Language switched to: ${newLang === 'ar' ? 'Arabic (RTL)' : 'English (LTR)'}`);
    });
    
    // Resume and Download CV buttons now link directly to the PDF file
    // No click handlers needed since they use the download attribute
    
    // ===================================
    // HERO ANIMATION TRIGGER
    // ===================================
    
    function triggerHeroAnimations() {
        console.log('Triggering hero animations...');
        const heroSection = document.querySelector('.hero');
        const heroVisual = document.querySelector('.hero-visual');
        const heroDescription = document.querySelector('.hero-description');
        
        console.log('Hero elements found:', !!heroSection, !!heroVisual, !!heroDescription);
        
        // Add hero-animated class using double requestAnimationFrame for proper timing
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                heroSection.classList.add('hero-animated');
                console.log('hero-animated class added');
                
                // Start typing effect immediately for testing
                console.log('Starting typing effect immediately...');
                startTypingEffect(heroDescription);
                
                // Chain floatPhoto animation after slideInRight completes (0.6s + 0.3s delay = 0.9s)
                setTimeout(() => {
                    heroVisual.classList.add('animation-complete');
                }, 900);
            });
        });
    }
    
    // Typing effect for bio paragraph
    function startTypingEffect(element) {
        console.log('Starting typing effect...');
        
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            console.log('Reduced motion preferred, skipping typing effect');
            return;
        }
        
        const lang = localStorage.getItem('lang') || 'en';
        const text = translations[lang]['hero-description'];
        
        console.log('Language:', lang, 'Text length:', text.length);
        console.log('Element before:', element.textContent);
        
        element.textContent = '';
        let index = 0;
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 30); // Typing speed: 30ms per character
            } else {
                console.log('Typing complete');
                console.log('Element after:', element.textContent);
            }
        }
        
        type();
    }
    
    // Restart typing effect when language changes
    const originalUpdateContent = updateContent;
    updateContent = function(lang) {
        originalUpdateContent(lang);
        
        // Restart typing effect for bio paragraph after language change
        setTimeout(() => {
            const heroDescription = document.querySelector('.hero-description');
            startTypingEffect(heroDescription);
        }, 100);
    };
    
    // Trigger animations on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', triggerHeroAnimations);
    } else {
        triggerHeroAnimations();
    }
    
    // Navigation functionality
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('btn-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    // Scroll-based header styling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Smooth scroll for navigation links
    navLinksItems.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Skip external links, download links, and non-hash hrefs
            if (!href || !href.startsWith('#') || this.hasAttribute('download')) return;
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = header.offsetHeight;
            
            if (window.scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate skill bars when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const animatedElements = document.querySelectorAll('.expertise-card, .project-card, .skill-category, .contact-item, .certificate-card');
    animatedElements.forEach(el => observer.observe(el));

    // Observe entire sections
    sections.forEach(section => observer.observe(section));

    // Skill bar animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    // Typing effect for hero (optional enhancement)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Parallax effect for hero orbs
    const orbs = document.querySelectorAll('.gradient-orb');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Form validation and submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1]?.value || '';
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
    `;
    document.head.appendChild(style);

    // Counter animation for statistics
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Observe highlight numbers for counter animation
    const highlightNumbers = document.querySelectorAll('.highlight-number');
    const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateCounter(entry.target, number);
                }
                highlightObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    highlightNumbers.forEach(num => highlightObserver.observe(num));

    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading state
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Hide loading screen if exists
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    });

    // Console welcome message
    console.log('%c🤖 Moataz Abdelraouf - AI Engineer', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cBuilding Intelligent Systems That Transform Industries', 'font-size: 14px; color: #10b981;');
    console.log('%cGitHub: https://github.com/Moataz899', 'font-size: 12px; color: #a3a3a3;');
});

// Keyboard navigation enhancement
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.getElementById('btn-menu');
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
});

// Performance optimization: Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize events
window.addEventListener('resize', debounce(function() {
    // Recalculate any size-dependent calculations
    const header = document.querySelector('.header');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        const menuToggle = document.getElementById('btn-menu');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
}, 250));

// Lazy load images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}