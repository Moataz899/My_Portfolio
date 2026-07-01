




document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    

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


    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('span');
    

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
            'cv-modal-title': 'Curriculum Vitae (CV)',
            'cv-modal-subtitle': "Viewing and downloading Moataz Dahy's Resume. Thank you for your interest!",
            'cv-download-btn': 'DOWNLOAD',
            'cv-fallback-text': 'PDF preview not supported in your browser.',
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
            'about-desc-3': 'Today, I specialize in building intelligent systems that make a difference â€” from detecting license plates in parking lots to generating educational content using large language models.',
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
            'footer-copyright': 'Â© 2024 Moataz Abdelraouf. All rights reserved.',
            'footer-tagline': 'Building Intelligent Systems That Transform Industries'
        },
        ar: {
            'nav-home': 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
            'nav-about': 'Ø¹Ù†ÙŠ',
            'nav-projects': 'Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹',
            'nav-skills': 'Ø§Ù„Ù…Ù‡Ø§Ø±Ø§Øª',
            'nav-certificates': 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª',
            'nav-contact': 'ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ',
            'nav-resume': 'Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ©',
            'hero-role-prefix': 'Ø£Ù†Ø§',
            'hero-title-1': 'Ø¨Ù†Ø§Ø¡ Ø£Ù†Ø¸Ù…Ø© Ø°ÙƒÙŠØ©',
            'hero-title-2': 'ØªØ­ÙˆÙ„ Ø§Ù„ØµÙ†Ø§Ø¹Ø§Øª',
            'hero-description': 'Ù…Ø±Ø­Ø¨Ø§Ù‹ØŒ Ø£Ù†Ø§ Ù…Ø¹ØªØ² Ø¶Ø­ÙŠ Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø¤ÙˆÙØŒ Ù…Ù‡Ù†Ø¯Ø³ Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…ØªØ®ØµØµ ÙÙŠ ØªØ¹Ù„Ù… Ø§Ù„Ø¢Ù„Ø©ØŒ Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ÙŠØ©ØŒ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù„ØºØ§Øª Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©ØŒ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„ØªÙˆÙ„ÙŠØ¯ÙŠØŒ Ø£Ù†Ø¸Ù…Ø© RAGØŒ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„ÙˆÙƒÙŠÙ„ØŒ ÙˆØ§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ø°ÙƒÙŠØ©.',
            'hero-view-work': 'Ø´Ø§Ù‡Ø¯ Ø£Ø¹Ù…Ø§Ù„ÙŠ',
            'hero-download-cv': 'ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ©',
            'cv-modal-title': 'Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© (CV)',
            'cv-modal-subtitle': 'Ø¹Ø±Ø¶ ÙˆØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© Ù„Ù…Ø¹ØªØ² Ø¯Ø§Ù‡ÙŠ. Ø´ÙƒØ±Ø§Ù‹ Ù„Ø§Ù‡ØªÙ…Ø§Ù…Ùƒ!',
            'cv-download-btn': 'ØªØ­Ù…ÙŠÙ„',
            'cv-fallback-text': 'Ù…Ø¹Ø§ÙŠÙ†Ø© PDF ØºÙŠØ± Ù…Ø¯Ø¹ÙˆÙ…Ø© ÙÙŠ Ù…ØªØµÙØ­Ùƒ.',
            'hero-lets-talk': 'Ù„Ù†ØªØ­Ø¯Ø«',
            'expertise-subtitle': 'Ù…Ø§ Ø£ÙØ¹Ù„Ù‡',
            'expertise-title': 'Ø®Ø¨Ø±Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ',
            'expertise-ml': 'ØªØ¹Ù„Ù… Ø§Ù„Ø¢Ù„Ø©',
            'expertise-ml-desc': 'Ø§Ù„ØªØ¹Ù„Ù… ØªØ­Øª Ø§Ù„Ø¥Ø´Ø±Ø§Ù ÙˆØ¨Ø¯ÙˆÙ† Ø¥Ø´Ø±Ø§ÙØŒ Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…ÙŠØ²Ø§ØªØŒ ÙˆØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ù†Ù…Ø§Ø°Ø¬ Ù„Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª Ø§Ù„ØªÙ†Ø¨Ø¤ÙŠØ©.',
            'expertise-dl': 'Ø§Ù„ØªØ¹Ù„Ù… Ø§Ù„Ø¹Ù…ÙŠÙ‚',
            'expertise-dl-desc': 'Ø§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø¹ØµØ¨ÙŠØ© Ø§Ù„ØªÙ„Ø§ÙÙŠÙÙŠØ© ÙˆØ§Ù„Ù…ØªÙƒØ±Ø±Ø© ÙˆØ¢Ù„ÙŠØ§Øª Ø§Ù„Ø§Ù†ØªØ¨Ø§Ù‡ Ù„ØªÙ…ÙŠÙŠØ² Ø§Ù„Ø£Ù†Ù…Ø§Ø· Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© ÙˆÙ…Ù‡Ø§Ù… Ø§Ù„ØªÙ†Ø¨Ø¤.',
            'expertise-cv': 'Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ÙŠØ©',
            'expertise-cv-desc': 'ÙƒØ´Ù Ø§Ù„Ø£Ø¬Ø³Ø§Ù…ØŒ ØªØµÙ†ÙŠÙ Ø§Ù„ØµÙˆØ±ØŒ ÙˆØªØ­Ù„ÙŠÙ„ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… YOLO Ùˆ OpenCV ÙˆÙ…Ø­ÙˆÙ„Ø§Øª Ø§Ù„Ø±Ø¤ÙŠØ©.',
            'expertise-nlp': 'Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù„ØºØ§Øª Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©',
            'expertise-nlp-desc': 'ØªÙˆÙ„ÙŠØ¯ Ø§Ù„Ù†ØµÙˆØµØŒ ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ù…Ø´Ø§Ø¹Ø±ØŒ ÙˆÙ…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ø­ÙˆÙ„Ø§Øª Ùˆ BERT Ùˆ GPT.',
            'expertise-genai': 'Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„ØªÙˆÙ„ÙŠØ¯ÙŠ',
            'expertise-genai-desc': 'Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ù„ØºØ§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø©ØŒ ØªÙˆÙ„ÙŠØ¯ Ø§Ù„ØµÙˆØ±ØŒ ÙˆØ¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ù…ØªØ·ÙˆØ±Ø©.',
            'expertise-rag': 'Ø£Ù†Ø¸Ù…Ø© RAG',
            'expertise-rag-desc': 'Ø§Ù„ØªÙˆÙ„ÙŠØ¯ Ø§Ù„Ù…Ø¹Ø²Ø² Ø¨Ø§Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ù„Ø¨Ù†Ø§Ø¡ ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ù…Ø¯Ø±ÙƒØ© Ù„Ù„Ù…Ø¹Ø±ÙØ© Ø¨Ø§Ø³ØªØ¬Ø§Ø¨Ø§Øª Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ³ÙŠØ§Ù‚ÙŠØ©.',
            'expertise-agentic': 'Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„ÙˆÙƒÙŠÙ„',
            'expertise-agentic-desc': 'ÙˆÙƒÙ„Ø§Ø¡ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ù…Ø³ØªÙ‚Ù„ÙˆÙ† Ø§Ù„Ø°ÙŠÙ† ÙŠÙ…ÙƒÙ†Ù‡Ù… Ø§Ù„ØªÙÙƒÙŠØ± ÙˆØ§Ù„ØªØ®Ø·ÙŠØ· ÙˆØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ù‡Ø§Ù… Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ø¨Ø´ÙƒÙ„ Ù…Ø³ØªÙ‚Ù„ Ù…Ø¹ Ø¥Ø´Ø±Ø§Ù Ø¨Ø´Ø±ÙŠ.',
            'projects-subtitle': 'Ø£Ø¹Ù…Ø§Ù„ÙŠ',
            'projects-title': 'Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ù…Ù…ÙŠØ²Ø©',
            'projects-description': 'Ø¨Ù†Ø§Ø¡ Ø­Ù„ÙˆÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„ØªÙŠ ØªØ­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„ÙˆØ§Ù‚Ø¹ÙŠØ©',
            'projects-view-all': 'Ø¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹',
            'project-code': 'Ø§Ù„ÙƒÙˆØ¯',
            'proj-title-1': 'ÙƒØ´Ù Ù„ÙˆØ­Ø§Øª Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª',
            'proj-desc-1': 'Ù†Ø¸Ø§Ù… ÙƒØ´Ù Ù„ÙˆØ­Ø§Øª Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„ÙØ¹Ù„ÙŠ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ÙŠØ© Ù„ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø¢Ù„ÙŠÙ‹Ø§ ÙˆØ¥Ø¯Ø§Ø±Ø© Ù…ÙˆØ§Ù‚Ù Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª.',
            'proj-title-2': 'ØªØµÙ†ÙŠÙ ÙˆØªÙ‚Ø³ÙŠÙ… Ø£ÙˆØ±Ø§Ù… Ø§Ù„Ø¯Ù…Ø§Øº',
            'proj-desc-2': 'Ù†Ù…ÙˆØ°Ø¬ ØªØ¹Ù„Ù… Ø¹Ù…ÙŠÙ‚ Ù„ØªØµÙ†ÙŠÙ ÙˆØªÙ‚Ø³ÙŠÙ… Ø£ÙˆØ±Ø§Ù… Ø§Ù„Ø¯Ù…Ø§Øº Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø¹ØµØ¨ÙŠØ© Ø§Ù„ØªÙ„Ø§ÙÙŠÙÙŠØ©ØŒ ÙŠÙØ¸Ù‡Ø± Ù‚Ø¯Ø±Ø§Øª ØªØ­Ù„ÙŠÙ„ Ø§Ù„ØµÙˆØ± Ø§Ù„Ø·Ø¨ÙŠØ©.',
            'proj-title-3': 'ØªØ­Ù„ÙŠÙ„ Ù…Ø´Ø§Ø¹Ø± ØªÙˆÙŠØªØ±',
            'proj-desc-3': 'Ù†Ø¸Ø§Ù… ØªØ­Ù„ÙŠÙ„ Ù…Ø´Ø§Ø¹Ø± Ù‚Ø§Ø¦Ù… Ø¹Ù„Ù‰ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù„ØºØ§Øª Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ© Ù„Ø¨ÙŠØ§Ù†Ø§Øª ØªÙˆÙŠØªØ±ØŒ ÙŠÙØ¸Ù‡Ø± Ù…Ù‡Ø§Ø±Ø§Øª Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù„ØºØ© Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ© ÙˆØªØµÙ†ÙŠÙ Ø§Ù„Ù†ØµÙˆØµ.',
            'proj-title-4': 'ØªÙ„Ø®ÙŠØµ Ø§Ù„Ù†ØµÙˆØµ ÙˆØ§Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ø¦Ù„Ø©',
            'proj-desc-4': 'Ù†Ø¸Ø§Ù… Ù…Ø¹Ø§Ù„Ø¬Ø© Ù„ØºØ§Øª Ø·Ø¨ÙŠØ¹ÙŠØ© Ù…ØªÙ‚Ø¯Ù… Ù„ØªÙ„Ø®ÙŠØµ Ø§Ù„Ù†ØµÙˆØµ ÙˆØ§Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ù…Ø­ÙˆÙ„Ø§Øª ÙˆØªÙ‚Ù†ÙŠØ§Øª NLP Ø§Ù„Ø­Ø¯ÙŠØ«Ø©.',
            'proj-title-5': 'Ø§Ù„ØªØ¹Ø±Ù Ø¹Ù„Ù‰ Ø¥ÙŠÙ…Ø§Ø¡Ø§Øª Ø§Ù„ÙŠØ¯ ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„ÙØ¹Ù„ÙŠ',
            'proj-desc-5': 'Ù†Ø¸Ø§Ù… Ø§Ù„ØªØ¹Ø±Ù Ø¹Ù„Ù‰ Ø¥ÙŠÙ…Ø§Ø¡Ø§Øª Ø§Ù„ÙŠØ¯ ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„ÙØ¹Ù„ÙŠ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ÙŠØ© Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ØªÙØ§Ø¹Ù„ Ø¨ÙŠÙ† Ø§Ù„Ø¥Ù†Ø³Ø§Ù† ÙˆØ§Ù„Ø­Ø§Ø³ÙˆØ¨.',
            'proj-title-6': 'Ø±ÙˆØ¨ÙˆØª Ù…Ø­Ø§Ø¯Ø«Ø© ØªÙŠÙ„ÙŠØºØ±Ø§Ù… Ù…Ø¹ n8n',
            'proj-desc-6': 'Ø±ÙˆØ¨ÙˆØª Ù…Ø­Ø§Ø¯Ø«Ø© Ø°ÙƒÙŠ Ø¹Ù„Ù‰ ØªÙŠÙ„ÙŠØºØ±Ø§Ù… Ù…Ø¨Ù†ÙŠ Ø¨Ù…Ù†ØµØ© Ø£ØªÙ…ØªØ© n8nØŒ ÙŠÙØ¸Ù‡Ø± Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ù„Ù…Ø­Ø§Ø¯Ø«Ø© ÙˆØ£ØªÙ…ØªØ© Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„.',
            'proj-title-7': 'ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù†Øµ Ø¥Ù„Ù‰ ØµÙˆØ±Ø©',
            'proj-desc-7': 'Ù†Ù…ÙˆØ°Ø¬ Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ØªÙˆÙ„ÙŠØ¯ÙŠ Ù„ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø£ÙˆØµØ§Ù Ø§Ù„Ù†ØµÙŠØ© Ø¥Ù„Ù‰ ØµÙˆØ±ØŒ ÙŠÙØ¸Ù‡Ø± Ø£Ø­Ø¯Ø« Ù‚Ø¯Ø±Ø§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„ØªÙˆÙ„ÙŠØ¯ÙŠ.',
            'proj-title-8': 'Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ø³ØªØ®Ø±Ø§Ø¬ Ø§Ù„ÙˆÙŠØ¨',
            'proj-desc-8': 'Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ù† 7 Ø£Ø¯ÙˆØ§Øª Ø§Ø³ØªØ®Ø±Ø§Ø¬ Ù„Ù„ÙƒØªØ¨ ÙˆØ§Ù„Ø¯ÙˆØ±Ø§Øª ÙˆÙ‚ÙˆØ§Ø¦Ù… Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„Ù…Ø¨Ø§Ø±ÙŠØ§Øª Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆÙ‚ÙˆØ§Ø¦Ù… Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª ÙˆØºÙŠØ±Ù‡Ø§ØŒ ØªÙØ¸Ù‡Ø± Ù…Ù‡Ø§Ø±Ø§Øª Ø§Ø³ØªØ®Ø±Ø§Ø¬ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆÙ…Ø¹Ø§Ù„Ø¬ØªÙ‡Ø§.',
            'proj-title-9': 'ÙˆÙƒÙ„Ø§Ø¡ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†',
            'proj-desc-9': 'Ù…Ø³ØªÙˆØ¯Ø¹ ØªØ¹Ù„ÙŠÙ…ÙŠ Ù…Ø¨Ù†ÙŠ Ø¹Ù„Ù‰ Ø¯ÙˆØ±Ø© Microsoft Ù„ÙˆÙƒÙ„Ø§Ø¡ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠØŒ ÙŠØºØ·ÙŠ Ø§Ù„Ù…ÙØ§Ù‡ÙŠÙ… Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ© Ù„Ø¨Ù†Ø§Ø¡ ÙˆÙƒÙ„Ø§Ø¡ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ø³ØªÙ‚Ù„Ø©.',
            'proj-title-10': 'Ù…ÙˆÙ„Ø¯ Ø±Ù…Ø² QR',
            'proj-desc-10': 'Ù†Ø¸Ø§Ù… ØªÙˆÙ„ÙŠØ¯ Ø±Ù…ÙˆØ² QR Ù…Ø¨Ù†ÙŠ Ø¹Ù„Ù‰ Python Ù„Ø¥Ù†Ø´Ø§Ø¡ Ø±Ù…ÙˆØ² QR Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ®ØµÙŠØµ Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ù…ØªÙ†ÙˆØ¹Ø© ØªØ´Ù…Ù„ Ø§Ù„Ø±ÙˆØ§Ø¨Ø· ÙˆØ§Ù„Ù†ØµÙˆØµ ÙˆÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø§ØªØµØ§Ù„.',
            'proj-title-11': 'Ù…Ø´Ø§Ø±ÙŠØ¹ ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª',
            'proj-desc-11': 'Ù…Ø´Ø§Ø±ÙŠØ¹ ØªØ­Ù„ÙŠÙ„ Ø¨ÙŠØ§Ù†Ø§Øª Ø´Ø§Ù…Ù„Ø© ØªÙØ¸Ù‡Ø± Ù…Ù‡Ø§Ø±Ø§Øª Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„ØªØµÙˆØ± ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¥Ø­ØµØ§Ø¦ÙŠ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Python ÙˆPandas.',
            'proj-title-12': 'Ù…Ø´Ø§Ø±ÙŠØ¹ Power BI',
            'proj-desc-12': 'Ù…Ø´Ø§Ø±ÙŠØ¹ Ø°ÙƒØ§Ø¡ Ø£Ø¹Ù…Ø§Ù„ ÙˆØªØµÙˆØ± Ø¨ÙŠØ§Ù†Ø§Øª Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Power BIØŒ ØªÙØ¸Ù‡Ø± Ø¥Ù†Ø´Ø§Ø¡ Ù„ÙˆØ­Ø§Øª Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ³Ø±Ø¯ Ù‚ØµØµ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª.',
            'skills-subtitle': 'Ø§Ù„Ù…Ù‡Ø§Ø±Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ©',
            'skills-title': 'Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ø®Ø¨Ø±Ø©',
            'skill-cv': 'Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ÙŠØ©',
            'skill-nlp': 'Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù„ØºØ§Øª ÙˆØ§Ù„Ù…Ø­ÙˆÙ„Ø§Øª',
            'skill-dl': 'Ø§Ù„ØªØ¹Ù„Ù… Ø§Ù„Ø¹Ù…ÙŠÙ‚',
            'skill-data': 'Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª',
            'certificates-subtitle': 'Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯Ø§Øª',
            'certificates-title': 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª',
            'certificates-description': 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª ÙˆØ§Ù„Ø¯ÙˆØ±Ø§Øª Ø§Ù„Ù…Ù‡Ù†ÙŠØ© Ø§Ù„Ù…ÙƒØªÙ…Ù„Ø©',
            'about-subtitle': 'Ø¹Ù†ÙŠ',
            'about-title': 'Ù…Ù† Ø§Ù„ÙØ¶ÙˆÙ„ Ø¥Ù„Ù‰ Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ',
            'about-desc-1': 'Ø¨Ø¯Ø£Øª Ø±Ø­Ù„ØªÙŠ ÙÙŠ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¨Ø³Ø¤Ø§Ù„ Ø¨Ø³ÙŠØ·: "ÙƒÙŠÙ ÙŠÙ…ÙƒÙ† Ù„Ù„Ø¢Ù„Ø§Øª Ø£Ù† ØªÙÙ‡Ù… ÙˆØªØªØ¹Ù„Ù… Ù…Ù† Ø§Ù„Ø¹Ø§Ù„Ù… Ù…Ù† Ø­ÙˆÙ„Ù†Ø§ØŸ"',
            'about-desc-2': 'Ù‚Ø§Ø¯Ù†ÙŠ Ù‡Ø°Ø§ Ø§Ù„ÙØ¶ÙˆÙ„ Ù…Ù† ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø¹ØµØ¨ÙŠØ© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ© Ø¥Ù„Ù‰ Ø¨Ù†Ø§Ø¡ Ø£Ù†Ø¸Ù…Ø© Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø¥Ù†ØªØ§Ø¬ ØªØ­Ù„ Ù…Ø´ÙƒÙ„Ø§Øª ÙˆØ§Ù‚Ø¹ÙŠØ©. Ø¹Ù„Ù‰ Ø·ÙˆÙ„ Ø§Ù„Ø·Ø±ÙŠÙ‚ØŒ Ø·ÙˆØ±Øª Ø®Ø¨Ø±Ø© ÙÙŠ Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ÙŠØ© ÙˆÙ…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù„ØºØ§Øª Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ© ÙˆØ§Ù„ØªØ¹Ù„Ù… Ø§Ù„Ø¹Ù…ÙŠÙ‚.',
            'about-desc-3': 'Ø§Ù„ÙŠÙˆÙ…ØŒ Ø£ØªØ®ØµØµ ÙÙŠ Ø¨Ù†Ø§Ø¡ Ø£Ù†Ø¸Ù…Ø© Ø°ÙƒÙŠØ© ØªØ­Ø¯Ø« ÙØ±Ù‚Ø§Ù‹ - Ù…Ù† ÙƒØ´Ù Ù„ÙˆØ­Ø§Øª Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª ÙÙŠ Ù…ÙˆØ§Ù‚Ù Ø§Ù„Ø³ÙŠØ§Ø±Ø§Øª Ø¥Ù„Ù‰ ØªÙˆÙ„ÙŠØ¯ Ù…Ø­ØªÙˆÙ‰ ØªØ¹Ù„ÙŠÙ…ÙŠ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ù„ØºØ§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø©.',
            'about-years': 'Ø³Ù†ÙˆØ§Øª Ø§Ù„Ø®Ø¨Ø±Ø©',
            'about-models': 'Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ø¥Ù†ØªØ§Ø¬',
            'about-projects': 'Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ù…ÙƒØªÙ…Ù„Ø©',
            'about-followers': 'Ù…ØªØ§Ø¨Ø¹ÙŠ Ù„ÙŠÙ†ÙƒØ¯ Ø¥Ù†',
            'about-cta': 'ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ',
            'contact-subtitle': 'ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ',
            'contact-title': 'Ù„Ù†Ø¨Ù†ÙŠ Ø´ÙŠØ¦Ø§Ù‹ Ù…Ø°Ù‡Ù„Ø§Ù‹',
            'contact-email-label': 'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
            'contact-linkedin-label': 'Ù„ÙŠÙ†ÙƒØ¯ Ø¥Ù†',
            'contact-github-label': 'Ø¬ÙŠØª Ù‡Ø¨',
            'contact-whatsapp-label': 'ÙˆØ§ØªØ³Ø§Ø¨',
            'contact-location-label': 'Ø§Ù„Ù…ÙˆÙ‚Ø¹',
            'contact-location-text': 'Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©ØŒ Ù…ØµØ± (Øª Ø¹ Ù…+Ù¢)',
            'contact-whatsapp-text': 'Ø¯Ø±Ø¯Ø´Ø© Ø¹Ù„Ù‰ ÙˆØ§ØªØ³Ø§Ø¨',
            'contact-name': 'Ø§Ø³Ù…Ùƒ',
            'contact-email': 'Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
            'contact-subject': 'Ø§Ù„Ù…ÙˆØ¶ÙˆØ¹',
            'contact-message': 'Ø±Ø³Ø§Ù„ØªÙƒ',
            'contact-send': 'Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø³Ø§Ù„Ø©',
            'footer-copyright': 'Â© Ù¢Ù Ù¢Ù¤ Ù…Ø¹ØªØ² Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø¤ÙˆÙ. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.',
            'footer-tagline': 'Ø¨Ù†Ø§Ø¡ Ø£Ù†Ø¸Ù…Ø© Ø°ÙƒÙŠØ© ØªØ­ÙˆÙ„ Ø§Ù„ØµÙ†Ø§Ø¹Ø§Øª'
        }
    };
    

    function updateContent(lang) {

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        

        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }
    

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
    


    



    
    function triggerHeroAnimations() {
        console.log('Triggering hero animations...');
        const heroSection = document.querySelector('.hero');
        const heroVisual = document.querySelector('.hero-visual');
        const heroDescription = document.querySelector('.hero-description');
        
        console.log('Hero elements found:', !!heroSection, !!heroVisual, !!heroDescription);
        

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                heroSection.classList.add('hero-animated');
                console.log('hero-animated class added');
                

                console.log('Starting typing effect immediately...');
                startTypingEffect(heroDescription);
                

                setTimeout(() => {
                    heroVisual.classList.add('animation-complete');
                }, 900);
            });
        });
    }
    

    function startTypingEffect(element) {
        console.log('Starting typing effect...');
        

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

            } else {
                console.log('Typing complete');
                console.log('Element after:', element.textContent);
            }
        }
        
        type();
    }
    

    const originalUpdateContent = updateContent;
    updateContent = function(lang) {
        originalUpdateContent(lang);
        

        setTimeout(() => {
            const heroDescription = document.querySelector('.hero-description');
            startTypingEffect(heroDescription);
        }, 100);
    };
    

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', triggerHeroAnimations);
    } else {
        triggerHeroAnimations();
    }
    

    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('btn-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');


    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });


    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });


    navLinksItems.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

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


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                

                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);


    const animatedElements = document.querySelectorAll('.expertise-card, .project-card, .skill-category, .contact-item, .certificate-card');
    animatedElements.forEach(el => observer.observe(el));


    sections.forEach(section => observer.observe(section));


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


    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1]?.value || '';
            const message = this.querySelector('textarea').value;
            

            if (!name || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            

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


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function showNotification(message, type = 'info') {

        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        

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
        

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }


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


    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        

        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    });


    console.log('%cðŸ¤– Moataz Abdelraouf - AI Engineer', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cBuilding Intelligent Systems That Transform Industries', 'font-size: 14px; color: #10b981;');

});


document.addEventListener('keydown', function(e) {

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


window.addEventListener('resize', debounce(function() {

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



const CV_PDF_PATH = 'pdf/Abdelraouf Dahy Abdelraouf-CV2.pdf';

function openCVModal() {
    const overlay = document.getElementById('cv-modal');
    const iframe  = document.getElementById('cv-iframe');
    const fallback = document.getElementById('cv-fallback');
    if (!overlay) return;


    if (iframe && !iframe.getAttribute('src')) {
        iframe.setAttribute('src', CV_PDF_PATH);
        iframe.onerror = function () {
            iframe.style.display = 'none';
            if (fallback) fallback.style.display = 'flex';
        };
    }


    overlay.style.display = 'flex';
    overlay.classList.remove('is-closing');
    document.body.style.overflow = 'hidden';


    if (typeof updateContent === 'function') {
        updateContent(document.documentElement.lang || 'en');
    }
}

function closeCVModal() {
    const overlay = document.getElementById('cv-modal');
    if (!overlay) return;
    overlay.classList.add('is-closing');
    setTimeout(function () {
        overlay.style.display = 'none';
        overlay.classList.remove('is-closing');
        document.body.style.overflow = '';
    }, 220);
}


document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('cv-modal');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeCVModal();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeCVModal();
    });
});


