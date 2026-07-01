(function () {
    const TYPE_SPEED_MS = 65;
    const ERASE_SPEED_MS = 35;
    const HOLD_AFTER_TYPE_MS = 1600;
    const HOLD_AFTER_ERASE_MS = 300;

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
                charIndex++;
                el.textContent = currentPhrase.slice(0, charIndex);

                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(tick, HOLD_AFTER_TYPE_MS);
                    return;
                }
                setTimeout(tick, TYPE_SPEED_MS);
            } else {
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
