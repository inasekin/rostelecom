import * as flsFunctions from "./modules/functions.js";
import "./modules/tooltips.js";
import "./modules/swiper.js";
import {renderModals} from "./modules/modals.js";
import {renderMenu, renderMenuFunctions} from "./modules/functions.js";
import {renderAnimations} from "./modules/animations.js";

// fullPage();
flsFunctions.isWebp();
renderModals();
renderMenuFunctions();
renderAnimations();
/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

const button = document.querySelectorAll(".town__circle-button");
const round = document.querySelectorAll(".town__round");
const modal = document.querySelectorAll(".town-modal");
const modalButton = document.querySelectorAll(".town-modal__button");

button[0].addEventListener( "click" , () => {
    round[0].classList.toggle("hidden");
    modal[0].classList.toggle("hidden");
    button[0].classList.toggle("hidden");
});

modalButton[0].addEventListener( "click" , () => {
    round[0].classList.toggle("hidden");
    modal[0].classList.toggle("hidden");
    button[0].classList.toggle("hidden");
});

button[1].addEventListener( "click" , () => {
    round[1].classList.toggle("hidden");
    modal[2].classList.toggle("hidden");
    button[1].classList.toggle("hidden");
});

modalButton[2].addEventListener( "click" , () => {
    round[1].classList.toggle("hidden");
    modal[2].classList.toggle("hidden");
    button[1].classList.toggle("hidden");
});

button[2].addEventListener( "click" , () => {
    round[2].classList.toggle("hidden");
    modal[3].classList.toggle("hidden");
    button[2].classList.toggle("hidden");
});

modalButton[3].addEventListener( "click" , () => {
    round[2].classList.toggle("hidden");
    modal[3].classList.toggle("hidden");
    button[2].classList.toggle("hidden");
});