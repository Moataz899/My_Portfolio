// ===================================
// CARD 3D TILT + MOUSE GLOW
// Subtle tilt-toward-cursor effect with a radial glow that
// follows the pointer inside each [data-tilt] card.
//
// Usage (already added to index.htm):
//   <div class="expertise-card" data-tilt> ... </div>
//   <div class="project-card" data-tilt> ... </div>
//
// CONFIG knobs below control intensity.
// ===================================

(function () {
    // ---- CONFIG: tweak these to change feel ----
    const MAX_TILT_DEG = 7;     // maximum rotation in degrees (keep small = elegant)
    const LIFT_PX = 6;          // how far the card lifts toward the viewer
    const PERSPECTIVE_PX = 900; // lower = more dramatic 3D depth
    // ---------------------------------------------

    // Skip entirely on touch-only devices — tilt needs a real pointer
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (!supportsHover) return;

    function attach(card) {
        let rafId = null;
        let pendingX = 0;
        let pendingY = 0;

        function applyTilt() {
            rafId = null;
            const rect = card.getBoundingClientRect();
            const px = (pendingX - rect.left) / rect.width;  // 0..1 across the card
            const py = (pendingY - rect.top) / rect.height;  // 0..1 down the card

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
            card.classList.add('is-tilting'); // disables the transform transition for instant tracking
        });

        card.addEventListener('mousemove', function (e) {
            pendingX = e.clientX;
            pendingY = e.clientY;
            if (rafId === null) {
                rafId = requestAnimationFrame(applyTilt); // throttle to one update per frame
            }
        });

        card.addEventListener('mouseleave', function () {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            card.classList.remove('is-tilting'); // re-enables the smooth-return transition
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
