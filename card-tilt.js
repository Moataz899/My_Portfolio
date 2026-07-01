(function () {
    const MAX_TILT_DEG = 7;
    const LIFT_PX = 6;
    const PERSPECTIVE_PX = 900;

    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (!supportsHover) return;

    function attach(card) {
        let rafId = null;
        let pendingX = 0;
        let pendingY = 0;

        function applyTilt() {
            rafId = null;
            const rect = card.getBoundingClientRect();
            const px = (pendingX - rect.left) / rect.width;
            const py = (pendingY - rect.top) / rect.height;

            const rotateY = (px - 0.5) * (MAX_TILT_DEG * 2);
            const rotateX = (0.5 - py) * (MAX_TILT_DEG * 2);

            card.style.transform =
                'perspective(' + PERSPECTIVE_PX + 'px) ' +
                'rotateX(' + rotateX.toFixed(2) + 'deg) ' +
                'rotateY(' + rotateY.toFixed(2) + 'deg) ' +
                'translateY(-' + LIFT_PX + 'px)';

            card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
            card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        }

        card.addEventListener('mouseenter', function () {
            card.classList.add('is-tilting');
        });

        card.addEventListener('mousemove', function (e) {
            pendingX = e.clientX;
            pendingY = e.clientY;
            if (rafId === null) {
                rafId = requestAnimationFrame(applyTilt);
            }
        });

        card.addEventListener('mouseleave', function () {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            card.classList.remove('is-tilting');
            card.style.transform = '';
            card.style.removeProperty('--mx');
            card.style.removeProperty('--my');
        });
    }

    function init() {
        document.querySelectorAll('[data-tilt]').forEach(attach);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
