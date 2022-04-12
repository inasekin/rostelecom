/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export const openModal = (modal, overlay) => {
	// document.body.classList.add('no-scroll');
	overlay.classList.remove('hidden');
	modal.classList.remove('hidden');
}

export const closeModal = (modal, overlay) => {
	// document.body.classList.remove('no-scroll');
	overlay.classList.add('hidden');
	modal.classList.add('hidden');
}

export const renderMenuFunctions = () => {
	const menuItemOpen = document.querySelector('.menu__item');
	const menuBurger = document.querySelector('.menu__burger');
	const menuBurgerItems = document.querySelectorAll('.burger__item');

	menuItemOpen.addEventListener('click', () => {
		menuItemOpen.classList.add('hidden');
		menuBurger.classList.remove('hidden');
	});

	for (let i = 0; i < menuBurgerItems.length; i++) {
		menuBurgerItems[i].addEventListener('click', () => {

			if (!menuBurgerItems[i].classList.contains('active')) {
				menuItemOpen.textContent = menuBurgerItems[i].textContent;
			}

			menuItemOpen.classList.remove('hidden');
			menuBurger.classList.add('hidden');
		})
	}


}