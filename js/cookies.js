// ===== COOKIES =====
function initCookies() {
    const cookies = document.getElementById('cookies');
    if (!cookies) return;

    // Класс "hidden" в оригинале = блок скрыт
    const HIDDEN = 'CookiesBlock_hidden__5ZqDo';

    if (localStorage.getItem('cookies_accepted')) {
        cookies.classList.add(HIDDEN);
    }

    const acceptBtn = document.getElementById('cookiesAccept');
    if (acceptBtn) {
        acceptBtn.onclick = () => {
            localStorage.setItem('cookies_accepted', 'true');
            cookies.classList.add(HIDDEN);
        };
    }
}