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
- **Skill Shimmer** — Shimmer sweep on progress bars when hovering skill cards
- **Certificate Shine** — Light sweep across certificate image on hover
- **Floating Photo** — Hero and About images float up/down on loop
- **Hamburger Menu** — Responsive mobile navigation
- **Scroll Header** — Navbar changes style on scroll

---

## 🚀 Running Locally

Open `index.htm` directly in your browser, or use terminal:

```bash
# Windows
start index.htm

# macOS
open index.htm

# Linux
xdg-open index.htm
```

**Live Version:** https://moataz899.github.io/My_Portfolio/

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