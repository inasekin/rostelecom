import {createPopper} from "@popperjs/core";
const header = document.querySelector('#tooltip-header');
const body = document.querySelector('#tooltip-body');

export function initPopper(button, tooltip, active, position, name, description) {

    const offset = position === 'right' ? [-110, 100] : position === 'bottom' ? [100, 100] : [0, 0]

    header.textContent = name;
    body.textContent = description;
    const popperInstance = createPopper(button, tooltip, {
        placement: position,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset,
                },
            },
        ],
    });

    document.addEventListener('click', (event) => {
        if(button.contains(event.target)) {
            // Make the tooltip visible
            tooltip.setAttribute('data-show', '');
            button.setAttribute('data-show', '');
            active.setAttribute('data-show', '');

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
        } else {
            // Hide the tooltip
            tooltip.removeAttribute('data-show');
            button.removeAttribute('data-show');
            active.removeAttribute('data-show');

            // Disable the event listeners
            popperInstance.setOptions((options) => ({
                ...options,
                modifiers: [
                    ...options.modifiers,
                    { name: 'eventListeners', enabled: false },
                ],
            }));
        }
    });
}