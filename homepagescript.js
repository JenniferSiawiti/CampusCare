document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Elements ---
    const backBtn = document.getElementById('backBtn');
    const logoLink = document.getElementById('logoLink');

    // Go back to homepage
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'homepage.html';
        });
    }

    // Logo click goes to About Us
    if (logoLink) {
        logoLink.addEventListener('click', () => {
            window.location.href = 'aboutus.html';
        });
    }
});

// --- Existing Homepage Functions ---
function toggleSort() {
    const menu = document.getElementById('sortMenu');
    if (menu) menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function globalSearch() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.searchable-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(q) ? "flex" : "none";
    });
}

function globalSort(crit) {
    const cont = document.getElementById('issuedContainer');
    if (!cont) return;
    
    const cards = Array.from(cont.querySelectorAll('.report-card'));
    cards.sort((a, b) => {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        if (crit === 'latest') return dateB - dateA;
        if (crit === 'recent') return dateA - dateB;
        if (['7th', '6th', 'lg', '19th'].includes(crit)) {
            return a.dataset.floor === crit ? -1 : 1;
        }
        return 0;
    });
    
    cards.forEach(card => cont.appendChild(card));
    toggleSort();
}

function scrollSection(id, amt) {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: amt, behavior: 'smooth' });
}

// Global click handler for dropdowns
window.onclick = (e) => {
    const menu = document.getElementById('sortMenu');
    if (menu && !e.target.closest('.sort-wrapper') && !e.target.closest('.btn-action')) {
        menu.style.display = 'none';
    }
}
