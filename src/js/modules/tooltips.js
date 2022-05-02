import { PointCircle } from "../data.js";
import {createPopper} from "@popperjs/core";

const backgroundInteriorOffice = document.querySelector('#interior_office');
const backgroundInteriorHome = document.querySelector('#interior_home');
const backgroundInteriorPublic = document.querySelector('#interior_public');

const closeTooltips = () => {
    const tooltips = document.querySelectorAll('.tooltip');
    const activeSvg = document.querySelectorAll('.active-map');

    
    for (const element of tooltips) {
        element.removeAttribute('data-show');
    }

    for (const vector of activeSvg) {
        vector.removeAttribute('data-show');
    }
}

backgroundInteriorOffice.addEventListener('click', (evt) => {
   if (evt.target.nodeName !== 'circle') {
       closeTooltips();
   }
});

backgroundInteriorHome.addEventListener('click', (evt) => {
    if (evt.target.nodeName !== 'circle') {
        closeTooltips();
    }
});

backgroundInteriorPublic.addEventListener('click', (evt) => {
    if (evt.target.nodeName !== 'circle') {
        closeTooltips();
    }
});


[...Array(5)].forEach((_, id) => {
    const close = document.querySelector(`#tooltip-close-main-${id + 1}`);
    const tooltip = document.querySelector(`#tooltip-main-${id + 1}`);

    close.addEventListener("click", () => {
        tooltip.setAttribute('tooltip-hide', "");
    });

})

PointCircle.forEach((frame, idx) => {
    const index = idx + 1;
    const header = document.querySelector(`#tooltip-header-${index}`);
    const body = document.querySelector(`#tooltip-body-${index}`);
    const tooltip = document.querySelector(`#tooltip-${index}`);
    const close = document.querySelector(`#tooltip-close-${index}`);


    frame.forEach((circle) => {
        const button = document.querySelector(`#button-point-${circle.id}`);
        const pulse = document.querySelector(`#circle-pulse-${circle.id}`);

        button.addEventListener("click", (e) => {
            body.scrollTop = 0;
            setPulse();
            clearAttr();
            const offset = circle.position === 'right-top' ? [-110, 100] : circle.position === 'left-bottom' ? [120, 100] : circle.position === 'left-top' ? [-250, 100] : [100, 100];
            const active = circle.activeSvg ? document.querySelector(circle.activeSvg) : undefined;
            header.innerText = circle.header;
            body.innerText = circle.body;

            pulse.removeAttribute('data-show');

            button.closest('section').querySelector('.tooltip-main').setAttribute('tooltip-hide', "");

            const popperInstance = createPopper(button, tooltip, {
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
                button.removeAttribute('data-show');
                pulse.setAttribute('data-show', '');

                if (active) active.removeAttribute('data-show');
                // Disable the event listeners
                popperInstance.setOptions((options) => ({
                    ...options,
                    modifiers: [
                        ...options.modifiers,
                        { name: 'eventListeners', enabled: false },
                    ],
                }));
            })

            document.addEventListener('click', (event) => {
                body.scrollTop = 0;
                if(button.contains(event.target)) {
                    // Make the tooltip visible
                    tooltip.setAttribute('data-show', '');
                    button.setAttribute('data-show', '');
                    if (active) active.setAttribute('data-show', '');

                    // Enable the event listeners
                    popperInstance.setOptions((options) => ({
                        ...options,
                        modifiers: [
                            ...options.modifiers,
                            { name: 'eventListeners', enabled: true },
                        ],
                    }));

                    // Update its position
                    popperInstance.update();
                }
            });
        })
    })
})

function clearAttr() {
    PointCircle.forEach((f, i) => {
        const index = i + 1;
        const tooltip = document.querySelector(`#tooltip-${index}`);
        tooltip.removeAttribute('data-show');
        f.forEach((e) => {
            const b = document.querySelector(`#button-point-${e.id}`);
            const a = e.activeSvg ? document.querySelector(e.activeSvg) : undefined;
            b.removeAttribute('data-show');
            if (a) a.removeAttribute('data-show');
        })
    })
}

function setPulse() {
    PointCircle.forEach((f, i) => {
        f.forEach((e) => {
            const pulse = document.querySelector(`#circle-pulse-${e.id}`);
            pulse.setAttribute('data-show', "")
        })
    })
}

