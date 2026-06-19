// ===================================
// HERO TYPING / ERASING ANIMATION
// Cycles the text inside [data-typed] through
// a list of phrases, typing and erasing each one.
//
// Usage (already added to index.htm):
//   <span class="hero-role__dynamic" data-typed='["Machine Learning Engineer","Computer Vision Specialist","Generative AI Developer","Agentic AI Builder"]'></span>
//
// Everything is configurable below — see the
// CONFIG block for speed/delay knobs.
// ===================================

(function () {
    // ---- CONFIG: tweak these to change feel ----
    const TYPE_SPEED_MS = 65;     // ms per character while typing
    const ERASE_SPEED_MS = 35;    // ms per character while erasing (usually faster than typing)
    const HOLD_AFTER_TYPE_MS = 1600; // pause once a phrase is fully typed, before erasing
    const HOLD_AFTER_ERASE_MS = 300;  // pause once erased, before typing the next phrase
    // ---------------------------------------------

    function startTyper(el) {
        let phrases;
        try {
            phrases = JSON.parse(el.getAttribute('data-typed'));
        } catch (e) {
            phrases = [el.textContent.trim()];
        }
        if (!phrases || !phrases.length) return;

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function tick() {
            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting) {
                // Typing forward
                charIndex++;
                el.textContent = currentPhrase.slice(0, charIndex);

                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(tick, HOLD_AFTER_TYPE_MS);
                    return;
                }
                setTimeout(tick, TYPE_SPEED_MS);
            } else {
                // Erasing backward
                charIndex--;
                el.textContent = currentPhrase.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(tick, HOLD_AFTER_ERASE_MS);
                    return;
                }
                setTimeout(tick, ERASE_SPEED_MS);
            }
        }

        tick();
    }

    window._startTyper = startTyper;

    function init() {
        document.querySelectorAll('[data-typed]').forEach(startTyper);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
