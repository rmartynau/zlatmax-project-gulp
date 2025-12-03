// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targertElement = e.target;
    if (targertElement.closest('[data-parent]')) {
        const subMenuId = targertElement.dataset.parent ? targertElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelector('.catalog-header');
        if (subMenu) {
            catalogMenu.classList.toggle('_sub-menu-show');
            targertElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
        } else {
            console.log('Ой ой, нет такого подменю :(');
        }
        e.preventDefault();
    }
}