import * as flsFunctions from "./modules/functions.js";
import "./modules/tooltips.js";
import "./modules/swiper.js";
import {createPopper} from "@popperjs/core";
import {renderModals} from "./modules/modals.js";
import {renderMenu, renderMenuFunctions} from "./modules/functions.js";
import {renderAnimations} from "./modules/animations.js";
import {PointTown} from "./data.js";

flsFunctions.isWebp();
renderModals();
renderMenuFunctions();
renderAnimations();


const menuMobile = document.querySelector('.menu__mobile');
const menuMobileContent = document.querySelector('.menu__mobile_content');
const menuName = document.querySelector('.menu-name');

const townPublic = document.querySelector('.town__vector');

townPublic.addEventListener('click', (e) => {
    const tooltips = document.querySelectorAll('.tooltip');
    const buttons = document.querySelectorAll('.town__circle-button');
    const bigCircle = document.querySelectorAll('.town__circle--big');

    if (e.target.nodeName !== 'use' && e.target.nodeName !== 'image') {
        for (const element of tooltips) {
            element.removeAttribute('data-show');
        }
        for (const circle of bigCircle) {
            circle.removeAttribute('data-show');
        }   
        for (const button of buttons) {
            button.removeAttribute('data-hide');
        }       
    }
});

PointTown.forEach((frame) => {
    const tooltip = document.querySelector('#tooltip-town');
    const header = document.querySelector('#tooltip-town__header');
    const body = document.querySelector('#tooltip-town__body');
    const close = document.querySelector('#tooltip-town__close');

    frame.forEach((circle) => {
        const button = document.querySelector(`#circle-town-${circle.id}`);
        const bigCircle = document.querySelector(`#big-circle-town-${circle.id}`);

        button.addEventListener("click", (e) => {
            body.scrollTop = 0;

            clearAttr();

            const offset = circle.position === 'right-top' ? [-110, 100] : circle.position === 'left-bottom' ? [120, 100] : circle.position === 'left-top' ? [-250, 100] : [100, 100];
            header.textContent = circle.header;
            body.innerHTML = circle.body;

            button.setAttribute('data-hide', '');

            bigCircle.setAttribute('data-show', '');

            tooltip.setAttribute('data-show', '');

            button.closest('section').querySelector('.tooltip-main').setAttribute('tooltip-hide', "");

            const popperInstance = createPopper(bigCircle, tooltip, {
                placement: circle.placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset,
                        },
                    },
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false, // true by default
                            altAxis: true,
                        },
                    },
                ],
            });

            close.addEventListener('click', () => {
                body.scrollTop = 0;
                tooltip.removeAttribute('data-show');
                button.removeAttribute('data-hide');
                bigCircle.removeAttribute('data-show');
            })

        })
    })

});


function clearAttr() {
    PointTown.forEach((f) => {
        const tooltip = document.querySelector('#tooltip-town');
        tooltip.removeAttribute('data-show');
        f.forEach((e) => {
            const b = document.querySelector(`#circle-town-${e.id}`);
            const c = document.querySelector(`#big-circle-town-${e.id}`);
            b.removeAttribute('data-show');
            b.removeAttribute('data-hide');
            c.removeAttribute('data-show');
        })
    })
}

if (window.innerWidth < 900) {

    fullpage_api.setAutoScrolling(false);
    fullpage_api.setResponsive(true);
    document.querySelector('.menu__item').remove();
    menuMobileContent.innerHTML = document.querySelector('.header__menu').innerHTML;
    document.querySelector('.menu__burger').classList.remove('hidden');

    menuName.addEventListener('click', () => {
        if (menuName.textContent === 'Меню') {
            menuMobile.classList.remove('hidden');
            menuMobileContent.classList.remove('hidden');
            menuName.textContent = 'Назад';
        } else {
            menuMobileContent.classList.add('hidden');
            menuName.textContent = 'Меню';
        }
    });


} else {
    menuMobile.classList.add('hidden');
    menuMobileContent.classList.add('hidden');
}
