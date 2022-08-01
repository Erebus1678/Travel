
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hamburger-menu'),
        menuItem = document.querySelectorAll('.hamburger-menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('hamburger-menu_openned');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('hamburger-menu_openned');
        })
    })
})