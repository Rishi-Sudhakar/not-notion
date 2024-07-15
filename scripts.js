document.addEventListener("DOMContentLoaded", function() {
    // GSAP Animations
    gsap.from("header", {duration: 1, y: -100, opacity: 0, ease: "bounce.out"});
    gsap.from(".section .content", {
        scrollTrigger: {
            trigger: ".section",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
    });

    // Parallax Effect on Section Backgrounds
    document.querySelectorAll('.section').forEach(section => {
        gsap.fromTo(section, {backgroundPositionY: '0%'}, {
            backgroundPositionY: '50%',
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                scrub: true
            }
        });
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, button, input, textarea').forEach(element => {
        element.addEventListener('mouseover', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.backgroundColor = 'rgba(0, 115, 230, 0.2)';
        });
        element.addEventListener('mouseout', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'transparent';
        });
    });
});
