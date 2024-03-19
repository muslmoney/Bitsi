const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    menu.classList.toggle('open')
})