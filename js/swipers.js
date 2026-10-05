// ===== SWIPERS =====

// ===== ДАННЫЕ ДЛЯ DEVELOP =====
// Порядок строго совпадает с порядком слайдов в HTML:
// 0 — Бизнес (slider-with-params-3)
// 1 — Работы (slider-with-params-1)
// 2 — Гонки  (slider-with-params-2)
const developData = [
    {
        title: 'Бизнес',
        desc: 'Поднимайся с низов в топы',
        info: '+50 видов деятельности и развлечений',
        earn: 5,
        time: 3,
        diff: 4
    },
    {
        title: 'Работы',
        desc: 'Выбери занятие себе по душе',
        info: '+50 видов деятельности и развлечений',
        earn: 2,
        time: 4,
        diff: 3
    },
    {
        title: 'Гонки',
        desc: 'Сможешь занять первое место в наших турнирах?',
        info: '+50 видов деятельности и развлечений',
        earn: 3,
        time: 2,
        diff: 2
    }
];

// ===== КАРТОЧКИ UPDATES =====
// Просто добавляй/меняй объекты в массиве — карточки обновятся сами
const updatesData = [
    { name: "Событие Мастерская",                    date: '24.09.2026', img: 'https://s1.nextrp.ru/1780476145280-5-(15).png' },
    { name: 'NextPass 41 сезон',                     date: '17.09.2026', img: 'https://s1.nextrp.ru/1789550766412-4-(32).png' },
    { name: 'Фестиваль Спорта',                      date: '10.09.2026', img: 'https://s1.nextrp.ru/1788944860704-3-(28).png' },
    { name: 'Сюжетное событие "Битва за салон"',     date: '03.09.2026', img: 'https://s1.nextrp.ru/1788355631595-7-(23).png' },
    { name: 'Новое оружие - РШ12 "Легенда"',         date: '27.08.2026', img: 'https://s1.nextrp.ru/1787742604934-4-(29).png' },
    { name: 'Глобальное обновление рыбалки',         date: '20.08.2026', img: 'https://s1.nextrp.ru/1787139849992-3-(25).png' },
    { name: 'Фестиваль богов',                       date: '13.08.2026', img: 'https://s1.nextrp.ru/1786526134788-7-(21).png' },
    { name: 'Событие "Пиксельное безумие"',          date: '06.08.2026', img: 'https://s1.nextrp.ru/1785915616118-9-(15).png' },
    { name: 'Марафон промокодов в ВК',               date: '30.07.2026', img: 'https://s1.nextrp.ru/1785317253514-9-(14).png' },
    { name: 'Переработка бронежилетов',              date: '23.07.2026', img: 'https://s1.nextrp.ru/1784720178634-6-(20).png' },
    { name: 'Древо удачи',                           date: '16.07.2026', img: 'https://s1.nextrp.ru/1784114588352-4-(22).png' },
    { name: 'Специальное событие календаря',         date: '02.07.2026', img: 'https://s1.nextrp.ru/1782915617947-7-(17).png' },
    { name: 'NextPass 38 сезон',                     date: '25.06.2026', img: 'https://s1.nextrp.ru/1782290862955-4-(20).png' },
    { name: 'Новый набор "Nismo Z-tune"',            date: '18.06.2026', img: 'https://s1.nextrp.ru/1781703466400-9.png' },
    { name: 'Глобальное обновление работы "Фермер"', date: '11.06.2026', img: 'https://s1.nextrp.ru/1781097742421-4-(19).png' },
    { name: 'Событие "Мастерская"',                  date: '04.06.2026', img: 'https://s1.nextrp.ru/1780476145280-5-(15).png' },
    { name: 'NextPass 37 сезон',                     date: '28.05.2026', img: 'https://s1.nextrp.ru/1779889387248-13-(3).png' },
    { name: 'Обновление античита',                   date: '21.05.2026', img: 'https://s1.nextrp.ru/1779264761620-1-(13).png' },
    { name: 'Фестиваль Египетский',                  date: '14.05.2026', img: 'https://s1.nextrp.ru/1778678531843-8-(9).png' }
];

// ===== РЕНДЕР КАРТОЧЕК UPDATES =====
function renderUpdatesCards() {
    const wrapper = document.querySelector('.carrousel .swiper-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';
    updatesData.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="slideImg">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
            <div class="text">
                <span class="textLeft">${item.name}</span>
                <span class="textRight">${item.date}</span>
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

// ===== РЕНДЕР РЕЙТИНГА (5 иконок) =====
function renderRating(el, value) {
    if (!el) return;
    el.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const icon = document.createElement('div');
        icon.className = 'ratingIcon' + (i <= value ? ' filled' : '');
        el.appendChild(icon);
    }
}

// ===== ОБНОВЛЕНИЕ ТЕКСТА/РЕЙТИНГОВ DEVELOP =====
function updateDevelopInfo(index) {
    const d = developData[index];
    if (!d) return;

    const titleEl = document.getElementById('developRatingTitle');
    const descEl  = document.getElementById('developRatingDesc');
    const infoEl  = document.getElementById('developInfoTitle');
    const infoDsc = document.getElementById('developInfoDesc');

    if (titleEl) titleEl.textContent = d.title;
    if (descEl)  descEl.textContent  = d.desc;
    if (infoEl)  infoEl.textContent  = d.title;
    if (infoDsc) infoDsc.textContent = d.info;

    renderRating(document.getElementById('ratingEarn'), d.earn);
    renderRating(document.getElementById('ratingTime'), d.time);
    renderRating(document.getElementById('ratingDiff'), d.diff);
}

// ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ СВАЙПЕРОВ =====
function initSwipers() {

    // ===== UPDATES =====
    const carrouselEl = document.querySelector('.carrousel');
    if (carrouselEl) {
        renderUpdatesCards();

    new Swiper('.carrousel', {
    slidesPerView: 4.2,
    spaceBetween: 16,
    scrollbar: { el: '.carrousel .swiper-scrollbar', draggable: true },
    mousewheel: { forceToAxis: true },
    breakpoints: {
        0:    { slidesPerView: 1.2, spaceBetween: 12 },
        768:  { slidesPerView: 2.3, spaceBetween: 16 },
        1024: { slidesPerView: 3.3, spaceBetween: 20 },
        1440: { slidesPerView: 4.3, spaceBetween: 20 }
    }
  });
    }

    // ===== DEVELOP =====
    const developThumbsEl = document.getElementById('developThumbs');
    const developSliderEl = document.querySelector('.sliderWithParams');

    if (developThumbsEl && developSliderEl) {
        // Мини-слайдер с иконками (без loop, чтобы индексы совпадали с главным)
        const developThumbs = new Swiper('#developThumbs', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: true,
            watchSlidesProgress: true,
            allowTouchMove: false,
            simulateTouch: false
        });

        // Главный слайдер
        const developSlider = new Swiper('.sliderWithParams', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,            // ВАЖНО: без loop — индексы не съезжают
            speed: 550,
            allowTouchMove: false,
            simulateTouch: false,
            navigation: {
                nextEl: '.sliderWithParams .swiper-button-next',
                prevEl: '.sliderWithParams .swiper-button-prev'
            },
            thumbs: { swiper: developThumbs },
            on: {
                init(s) {
                    // Обновляем данные при первой инициализации
                    updateDevelopInfo(s.realIndex);
                },
                slideChange(s) {
                    updateDevelopInfo(s.realIndex);
                }
            }
        });

        // Клик по иконкам — переключаем главный слайдер
        const thumbSlides = developThumbsEl.querySelectorAll('.swiper-slide');
        thumbSlides.forEach((slide, i) => {
            slide.addEventListener('click', () => {
                developSlider.slideTo(i);
                updateDevelopInfo(i);
            });
        });
    }

    // ===== EXPLORE =====
    const exploreThumbsEl = document.querySelector('.sliderAlbumCarrousel');
    const exploreMainEl   = document.querySelector('.sliderAlbum');

    if (exploreThumbsEl && exploreMainEl) {
        const exploreThumbs = new Swiper('.sliderAlbumCarrousel', {
            slidesPerView: 'auto',
            spaceBetween: 12,
            watchSlidesProgress: true,
            freeMode: true
        });

        new Swiper('.sliderAlbum', {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            speed: 200,
            spaceBetween: 0,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            thumbs: { swiper: exploreThumbs },
            navigation: {
                nextEl: '.sliderAlbum .swiper-button-next',
                prevEl: '.sliderAlbum .swiper-button-prev'
            }
        });
    }
}