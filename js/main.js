// ===== ТОЧКА ВХОДА =====
document.addEventListener('DOMContentLoaded', () => {
    initCookies();
    initHeader();
    initSwipers();
    initParallax();
    initSideNav();
    initModals();

    // Кнопки скачивания лаунчера
    ['playBtn', 'fightBtn', 'exploreBtn', 'standoutBtn', 'winBtn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', openLauncher);
    });
});