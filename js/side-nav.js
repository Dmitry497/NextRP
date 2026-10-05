// ===== SIDE NAV =====
function initSideNav() {
    const sections = ['welcome', 'updates', 'develop', 'fight', 'explore', 'stand-out', 'win'];
    const sideItems = document.querySelectorAll('.Navigation_item__9Y5Ky');
    if (!sideItems.length) return;

    const ACTIVE = 'Navigation_active__II_5V';

    sideItems.forEach(item => {
        item.onclick = () => {
            const id = item.dataset.section;
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        };
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sideItems.forEach(item => {
                    item.classList.toggle(ACTIVE, item.dataset.section === entry.target.id);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}