import gsap from 'gsap';
import 'scrollmagic';

export const renderAnimations = () => {
    let activeSectionIndex;
    let interval;

    gsap.fromTo(document.querySelector('.vector__logo'),
        {
            duration: 3, x: 400, zIndex: 0, opacity: 0
        }, {
            duration: 3, x: 380, zIndex: 1, opacity: 1
        });

    gsap.fromTo(document.querySelector('.vector__column'),
        {
            duration: 3, opacity: 0
        }, {
            duration: 3, opacity: 1
        });

    gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            start: "top top",
            end: "top top",
            scrub: true
        }
    }).from(".vector__main", { y: innerHeight * 1.5 });

    interval = setInterval(() => {
        activeSectionIndex = fullpage_api.getActiveSection();

        if (activeSectionIndex.index === 1) {
            clearInterval();
            console.log(123)
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                }
            }).from(".vector-svg__main", { y: -innerHeight * 1.5 });

            clearInterval(interval);
        }
    }, 300);

}
