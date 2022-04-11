import * as flsFunctions from "./modules/functions.js";
import "./modules/tooltips.js";
import "./modules/swiper.js";
import {renderModals} from "./modules/modals.js";
import {renderMenuFunctions} from "./modules/functions.js";
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

button[1].addEventListener( "mouseover" , () => {
    round[1].classList.toggle("hidden");
    button[1].style.opacity = "0";
});

button[1].addEventListener( "mouseout" , () => {
    round[1].classList.toggle("hidden");
    button[1].style.opacity = "1";
});


button[2].addEventListener( "mouseover" , () => {
    round[2].classList.toggle("hidden");
    button[2].style.opacity = "0";
});

button[2].addEventListener( "mouseout" , () => {
    round[2].classList.toggle("hidden");
    button[2].style.opacity = "1";
});

button[3].addEventListener( "mouseover" , () => {
    round[3].classList.toggle("hidden");
    button[3].style.opacity = "0";
});

button[3].addEventListener( "mouseout" , () => {
    round[3].classList.toggle("hidden");
    button[3].style.opacity = "1";
});

button[4].addEventListener( "click" , () => {
    round[4].classList.toggle("hidden");
    modal[1].classList.toggle("hidden");
    button[4].classList.toggle("hidden");
});

modalButton[1].addEventListener( "click" , () => {
    round[4].classList.toggle("hidden");
    modal[1].classList.toggle("hidden");
    button[4].classList.toggle("hidden");
});

button[5].addEventListener( "mouseover" , () => {
    round[5].classList.toggle("hidden");
    button[5].style.opacity = "0";
});

button[5].addEventListener( "mouseout" , () => {
    round[5].classList.toggle("hidden");
    button[5].style.opacity = "1";
});