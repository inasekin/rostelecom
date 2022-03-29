import gsap from 'gsap';

export const renderAnimations = () => {
    gsap.to(document.querySelector('.vector__main'),
        {
            duration: 3, scale: 1
        });
}
