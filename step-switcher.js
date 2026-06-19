// ===================================
// NUMBERED STEP SWITCHER
// Paginates any grid marked with [data-step-switcher]
// into pages, controlled by a numbered pill control
// (matches the reference "1 / 2" toggle screenshot).
//
// Usage (in index.htm):
//   <div class="expertise-grid"
//        data-step-switcher
//        data-per-page="4"
//        data-step-labels="Core ML,Applied AI">
//     ...existing cards unchanged...
//   </div>
//
// Add this script tag AFTER main.js, right before </body>:
//   <script src="step-switcher.js"></script>
// ===================================

(function () {
    function chunk(arr, size) {
        const out = [];
        for (let i = 0; i < arr.length; i += size) {
            out.push(arr.slice(i, i + size));
        }
        return out;
    }

    function buildSwitcher(pageCount, onSelect) {
        const wrap = document.createElement('div');
        wrap.className = 'step-switcher-wrap';

        const switcher = document.createElement('div');
        switcher.className = 'step-switcher';
        switcher.setAttribute('role', 'tablist');

        for (let i = 0; i < pageCount; i++) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'step-switcher__btn' + (i === 0 ? ' is-active' : '');
            btn.dataset.page = String(i);
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');

            const numSpan = document.createElement('span');
            numSpan.textContent = String(i + 1);
            btn.appendChild(numSpan);

            btn.addEventListener('click', function () {
                onSelect(i, switcher);
            });

            switcher.appendChild(btn);
        }

        wrap.appendChild(switcher);
        return wrap;
    }

    function activatePage(panelsContainer, switcher, index) {
        panelsContainer.querySelectorAll('.step-panel').forEach(function (panel, i) {
            const active = i === index;
            panel.classList.toggle('is-active', active);
            panel.style.display = active ? '' : 'none'; // '' restores the grid's own display value
        });
        switcher.querySelectorAll('.step-switcher__btn').forEach(function (btn, i) {
            const active = i === index;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    function initStepSwitcher(grid) {
        const perPage = parseInt(grid.dataset.perPage || '4', 10);
        const items = Array.from(grid.children);

        // Nothing to paginate if it already fits on one page.
        if (items.length <= perPage) return;

        const pages = chunk(items, perPage);
        const originalClassName = grid.className; // preserves existing grid layout class(es)
        const parent = grid.parentNode;

        const panelsContainer = document.createElement('div');
        panelsContainer.className = 'step-panels';

        pages.forEach(function (pageItems, i) {
            const panel = document.createElement('div');
            panel.className = originalClassName + ' step-panel' + (i === 0 ? ' is-active' : '');
            panel.setAttribute('role', 'tabpanel');
            panel.style.display = i === 0 ? '' : 'none';
            pageItems.forEach(function (item) {
                panel.appendChild(item);
            });
            panelsContainer.appendChild(panel);
        });

        const switcherWrap = buildSwitcher(pages.length, function (index, switcherEl) {
            activatePage(panelsContainer, switcherEl, index);
        });

        parent.replaceChild(panelsContainer, grid);
        parent.insertBefore(switcherWrap, panelsContainer.nextSibling);
    }

    function init() {
        document.querySelectorAll('[data-step-switcher]').forEach(initStepSwitcher);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();