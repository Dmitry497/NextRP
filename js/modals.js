/* ===== MODALS ===== */

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';

    // Если закрываем трейлер — ставим видео на паузу и перематываем в начало
    if (id === 'trailerModal') {
        const video = document.getElementById('trailerVideo');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
}

function initModals() {
    const trailerBtn = document.getElementById('trailerBtn');
    const systemBtn  = document.getElementById('systemBtn');

    /* ===== ТРЕЙЛЕР ===== */
    if (trailerBtn) {
        trailerBtn.addEventListener('click', () => {
            openModal('trailerModal');
            const video = document.getElementById('trailerVideo');
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
        });
    }

    /* ===== СИСТЕМНЫЕ ТРЕБОВАНИЯ ===== */
    if (systemBtn) {
        systemBtn.addEventListener('click', () => openModal('systemModal'));
    }

    /* ===== УНИВЕРСАЛЬНОЕ ОТКРЫТИЕ ПО [data-modal] ===== */
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal') + 'Modal';
            openModal(modalId);
        });
    });

    /* ===== ЗАКРЫТИЕ ПО КРЕСТИКУ ===== */
    document.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', () => {
            const modal = el.closest('.modal');
            if (modal) closeModal(modal.id);
        });
    });

    /* ===== ЗАКРЫТИЕ ПО КЛИКУ НА ФОН ===== */
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });

    /* ===== ЗАКРЫТИЕ ПО ESC ===== */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.is-open').forEach(m => closeModal(m.id));
        }
    });
}