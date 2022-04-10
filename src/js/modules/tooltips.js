import { PointCircle } from "../data.js";
import {createPopper} from "@popperjs/core";

[...Array(4)].forEach((_, id) => {
    const close = document.querySelector(`#tooltip-close-main-${id + 1}`);
    const tooltip = document.querySelector(`#tooltip-main-${id + 1}`);
    close.addEventListener("click", () => {
        tooltip.setAttribute('tooltip-hide', "");
    })
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
            clearAttr();
            const offset = circle.position === 'right-top' ? [-115, 100] : circle.position === 'left-bottom' ? [125, 100] : circle.position === 'left-top' ? [-250, 100] : [100, 100];
            const active = circle.activeSvg ? document.querySelector(circle.activeSvg) : undefined;
            header.textContent = circle.header;
            body.textContent = circle.body;

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
                if(button.contains(event.target)) {
                    // Make the tooltip visible
                    tooltip.setAttribute('data-show', '');
                    button.setAttribute('data-show', '');
                    pulse.removeAttribute('data-show');
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