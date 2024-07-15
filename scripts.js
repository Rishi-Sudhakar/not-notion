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
});
