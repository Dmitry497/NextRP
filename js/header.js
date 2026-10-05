// ===== HEADER =====
function initHeader() {
    const header = document.getElementById('header');
    const burger = document.getElementById('burgerBtn');
    const burgerContent = document.getElementById('burgerContent');


    // Бургер (мобильное меню)
    if (burger && burgerContent) {
        const OPEN = 'BurgerMenu_open__osOpx';
        burger.onclick = () => {
            burgerContent.classList.toggle(OPEN);
        };
        burgerContent.querySelectorAll('a').forEach(link => {
            link.onclick = () => burgerContent.classList.remove(OPEN);
        });
    }
}