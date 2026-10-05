// ===== PARALLAX =====
function initParallax() {
    const items = document.querySelectorAll('.ParallaxChild_child___vz_a');
    if (!items.length) return;

    const groups = new Map();
    items.forEach(el => {
        const section = el.closest('section');
        if (!section) return;
        if (!groups.has(section)) groups.set(section, []);
        groups.get(section).push(el);
    });

    const data = [];
    groups.forEach(arr => {
        arr.forEach((el, i) => {
            data.push({
                el,
                speedX: 0.15 + i * 0.07,
                speedY: 0.08 + i * 0.07
            });
        });
    });

    // Целевые и текущие координаты мыши (для плавности)
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function lerp(start, end, t) {
        return start + (end - start) * t;
    }

    function animate() {
        // Плавный догон мыши — 0.08 скорость сглаживания
        // Чем больше — тем резче, меньше — тем плавнее
        currentX = lerp(currentX, targetX, 0.08);
        currentY = lerp(currentY, targetY, 0.08);

        const offsetX = (currentX / window.innerWidth) * 100 - 50;
        const offsetY = (currentY / window.innerHeight) * 100 - 50;

        data.forEach(({ el, speedX, speedY }) => {
            const moveX = offsetX * speedX;
            const moveY = offsetY * speedY;
            el.style.transform =
                `translate(${moveX}px, ${moveY}px) skew(-23deg) rotate(-15deg)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
}