// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Function to make elements visible as they scroll into view
    function animateOnScroll() {
        const sections = document.querySelectorAll('.content-section');

        sections.forEach(section => {
            gsap.fromTo(section,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }

    // Initial call to set up the animations
    animateOnScroll();

    // Interactive Demo Functionality
    window.runDemo = function (demoId) {
        const demoResult = document.getElementById(demoId);
        if (demoResult.style.display === 'block') {
            demoResult.style.display = 'none';
        } else {
            demoResult.style.display = 'block';
        }
    };

});