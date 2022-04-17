import * as flsFunctions from "./modules/functions.js";
import "./modules/tooltips.js";
import "./modules/swiper.js";
import {renderModals} from "./modules/modals.js";
import {renderMenu, renderMenuFunctions} from "./modules/functions.js";
import {renderAnimations} from "./modules/animations.js";

flsFunctions.isWebp();
renderModals();
renderMenuFunctions();
renderAnimations();

const backgroundTownScreen = document.querySelector('.town__vector');
const button = document.querySelectorAll(".town__circle-button");
const round = document.querySelectorAll(".town__round");
const modal = document.querySelectorAll(".town-modal");
const modalButton = document.querySelectorAll(".town-modal__button");

const closeAllModals = () => {
    for (let i = 0; i < modal.length; i++) {
        button[i].classList.remove('hidden')
        modal[i].classList.add("hidden");
        round[i].classList.add('hidden');
    }
}

backgroundTownScreen.addEventListener('click', (evt) => {
    if (evt.target.nodeName !== 'use') {
        closeAllModals();
    }
})

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener( "click" , () => {
        closeAllModals();
        button[i].classList.toggle("hidden");
        round[i].classList.toggle("hidden");
        modal[i].classList.toggle("hidden");
    });

    modalButton[i].addEventListener( "click" , () => {
        round[i].classList.toggle("hidden");
        modal[i].classList.toggle("hidden");
        button[i].classList.toggle("hidden");
    });
}