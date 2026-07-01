# Moataz Dahy — AI Engineer Portfolio

A modern, responsive portfolio website with bilingual support (English/Arabic), smooth animations, and a premium dark/light theme.

---

## 📁 Project Structure

```
Portfolio/
├── index.htm                              # Main HTML
├── style.css                              # Main stylesheet
├── main.js                                # Core JavaScript (translations, theme, animations)
├── card-tilt.css                          # 3D tilt + mouse glow styles
├── card-tilt.js                           # 3D tilt logic
├── hero-typing.css                        # Typing animation styles
├── hero-typing.js                         # Typing animation logic
├── step-switcher.css                      # Paginator component styles
├── step-switcher.js                       # Paginator logic
├── scroll-reveal.js                       # Scroll-triggered reveal animations
├── pdf/
│   └── Abdelraouf Dahy Abdelraouf-CV2.pdf
└── img/
    ├── moataz.png.png                     # Hero photo
    ├── moataz2.jpg                        # About section photo
    └── *.png                              # Certificate images
```

---

## ✨ Features

### Sections
| Section | Description |
|---|---|
| **Hero** | Typing role animation, floating photo, staggered entrance |
| **AI Expertise** | Paginated card grid with 3D tilt + mouse glow |
| **Featured Projects** | Paginated cards with GitHub + Live Demo links |
| **Expertise Level** | Skill bars with animated progress + mouse effects |
| **Certifications** | Certificate cards with shine sweep on hover |
| **About Me** | Floating photo animation, stats counter |
| **Contact** | Contact form + social links |

### Interactive Features
- **Bilingual (EN/AR)** — Full translation with RTL layout, all sections including project titles and descriptions
- **Dark / Light theme** — Toggle with `localStorage` persistence
- **CV Modal** — Click "Download CV" to preview the PDF inline then download
- **3D Card Tilt** — Mouse-tracking rotation + radial glow on all cards (`data-tilt`)
- **Typing Animation** — Hero role cycles through 4 titles (always in English)
- **Step Switcher** — Numbered paginator for Expertise and Projects sections
- **Scroll Reveal** — Elements fade + slide in as you scroll down
- **Skill Shimmer** — Shimmer sweep on progress bars when hovering skill cards
- **Certificate Shine** — Light sweep across certificate image on hover
- **Floating Photo** — Hero and About images float up/down on loop
- **Hamburger Menu** — Responsive mobile navigation
- **Scroll Header** — Navbar changes style on scroll

---

## 🚀 Running Locally

Open `index.htm` directly in your browser, or use a local server for full PDF support:

```bash
# Python
python -m http.server 5500

# Node.js
npx http-server -p 5500
```

Then go to `http://localhost:5500`

---

## 🎨 Customization

### Personal Info — `index.htm`

```html
<!-- Nav logo -->
<span class="logo-text">YOUR NAME</span>

<!-- Hero title -->
<span data-i18n="hero-title-1">Building Intelligent Systems</span>
<span data-i18n="hero-title-2">That Transform Industries</span>

<!-- Typing roles -->
<span data-typed='["Role 1","Role 2","Role 3"]'></span>

<!-- Contact links -->
<a href="mailto:you@email.com">you@email.com</a>
<a href="https://linkedin.com/in/you">linkedin.com/in/you</a>
<a href="https://github.com/you">github.com/you</a>
```

### Translations — `main.js`

All text is driven by the `translations` object:

```javascript
const translations = {
    en: {
        'nav-home': 'Home',
        'hero-title-1': 'Building Intelligent Systems',
        'proj-title-1': 'Car License Plate Detection',
        // ...
    },
    ar: {
        'nav-home': 'الرئيسية',
        'hero-title-1': 'بناء أنظمة ذكية',
        'proj-title-1': 'كشف لوحات السيارات',
        // ...
    }
};
```

Every element with `data-i18n="key"` is updated automatically when the language toggles.

### Colors — `style.css`

```css
/* Dark theme (default) */
[data-theme="dark"] {
    --color-primary: #8fa87a;       /* Green accent */
    --color-background: #1a1d23;    /* Page background */
    --color-surface: #252a33;       /* Card background */
    --color-text-primary: #e8eaf0;
    --color-text-secondary: #9aa0b0;
}

/* Light theme */
:root {
    --color-primary: #d97757;       /* Terracotta accent */
    --color-background: #faf7f2;
    --color-surface: #ffffff;
}
```

### CV File

Replace the PDF and update links in `index.htm`:

```html
<!-- Nav -->
<a href="pdf/YourName-CV.pdf" class="nav-link" download>Resume</a>

<!-- Hero button (opens modal) -->
<button id="download-cv-btn" onclick="openCVModal()">Download CV</button>
```

Also update `CV_PDF_PATH` in `main.js`:
```javascript
const CV_PDF_PATH = 'pdf/YourName-CV.pdf';
```

### Adding a Project

Copy a project card block in `index.htm` and update:

```html
<div class="project-card" data-tilt>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag">Computer Vision</span>
            <span class="tag">Python</span>
        </div>
        <h3 data-i18n="proj-title-13">Your Project Title</h3>
        <p data-i18n="proj-desc-13">Your project description.</p>
        <div class="project-links">
            <a href="https://github.com/you/repo" target="_blank" class="btn btn-outline btn-sm">
                <i class="fa-brands fa-github"></i>
                <span data-i18n="project-code">Code</span>
            </a>
            <a href="https://your-demo.com" target="_blank" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-play"></i>
                <span data-i18n="project-demo">Live Demo</span>
            </a>
        </div>
    </div>
</div>
```

Then add the translation keys to both `en` and `ar` in `main.js`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `1280px` | Large desktops |
| `1024px` | Laptops, tablet landscape |
| `768px` | Tablet portrait, phone landscape |
| `480px` | Modern phones |
| `360px` | Small / older phones |
| `hover: none` | Touch devices (disables 3D tilt) |
| `landscape + short height` | Phones held sideways |
| `print` | Clean print output |

---

## 🌐 Deployment

### GitHub Pages
1. Push repo to GitHub
2. Settings → Pages → select `main` branch
3. Live at `https://username.github.io/repo-name`

### Netlify
Drag and drop the project folder onto [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
Connect your GitHub repo at [vercel.com](https://vercel.com) — auto-deploys on push.

---

## 🐛 Troubleshooting

| Problem | Fix |
|---|---|
| Styles not loading | Check `<link>` paths in `<head>`; clear cache (`Ctrl+Shift+R`) |
| JS not working | Open console (`F12`); check script `src` paths |
| Images not showing | Verify filenames and paths in `img/` folder |
| Mobile menu broken | Ensure `main.js` is loaded; check `#btn-menu` exists |
| Animations not playing | Check if `hero-animated` class is added; check console |
| Translations broken | Verify `data-i18n` keys exist in `main.js` translations |
| PDF not opening in modal | Run via local server (`localhost`) not file:// |
| 3D tilt not working | Only works on desktop with mouse; disabled on touch screens by design |

---

## 🛠 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Variables, Flexbox, Grid, Animations, RTL
- **Vanilla JavaScript** — No frameworks
- **Font Awesome 6** — Icons
- **Google Fonts** — Inter, JetBrains Mono

---

## 📄 License

This project is licensed under the MIT License — see the <a href="LICENSE.txt" target="_blank">LICENSE.txt</a> file for details.

---

*Built for Moataz Dahy — AI Engineer*