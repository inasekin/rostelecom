import {closeModal, openModal} from "./functions.js";

export const renderModals = () => {
    const videoModal = document.querySelector('.video-modal');
    const btnVideoModalClose = document.querySelector('.video-modal__close');
    const videoModalOverlay = document.querySelector('.video-modal__overlay');
    const btnOpenVideoModal = document.querySelector('.video__link');

    const svgButton = document.querySelector('.vector-svg__play');

    const videoImageBtn = document.querySelector('.video__image--mobile');
    videoImageBtn.addEventListener('click', () => {
        openModal(videoModal, videoModalOverlay);
    });

    btnOpenVideoModal.addEventListener('click', (evt) => {
        evt.preventDefault();
        openModal(videoModal, videoModalOverlay);
    });

    svgButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        openModal(videoModal, videoModalOverlay);
    });

    btnVideoModalClose.addEventListener('click', () => {
        closeModal(videoModal, videoModalOverlay);
    });
}