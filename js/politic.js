//popup

const popupContact = document.querySelector('.popup-contact')
const openContact = document.querySelectorAll('.contact-link')
openContact.forEach((el) => { el.addEventListener('click', () => {
    popupContact.classList.toggle('hidden-popup')
})});






const BtnMenu = document.querySelector('.btn-menu');
const Burger = document.querySelector('.burger')
const BurgerMenu = document.querySelector('.burger-menu');
const BurgerItem = document.querySelectorAll('.menu__item-link-burger')
const BurgerShadow = document.querySelector('.burger-shadow')
const BodyHtml = document.querySelector('html')
const LogoIcon = document.querySelector('.logo-icon-mobile')
console.log(BodyHtml)


BtnMenu.addEventListener('click', () => {
    BurgerMenu.classList.toggle('burger-menu-active');
    BtnMenu.classList.toggle('btn-menu-active');
    Burger.classList.toggle('burger-active');
    BurgerShadow.classList.toggle('burger-shadow-active');
    BodyHtml.classList.toggle('no-scroll');

    
})

BurgerItem.forEach(item => {
    item.addEventListener('click', () => {
        BurgerMenu.classList.toggle('burger-menu-active');
        BtnMenu.classList.toggle('btn-menu-active');
        Burger.classList.toggle('burger-active');
        BurgerShadow.classList.toggle('burger-shadow-active');
        BodyHtml.classList.toggle('no-scroll');
    })
})

LogoIcon.addEventListener('click', () => {
    BurgerMenu.classList.toggle('burger-menu-active');
    BtnMenu.classList.toggle('btn-menu-active');
    Burger.classList.toggle('burger-active');
    BurgerShadow.classList.toggle('burger-shadow-active');
    BodyHtml.classList.toggle('no-scroll');
})

BurgerShadow.addEventListener('click', () => {
    BurgerMenu.classList.toggle('burger-menu-active');
    BtnMenu.classList.toggle('btn-menu-active');
    Burger.classList.toggle('burger-active');
    BurgerShadow.classList.toggle('burger-shadow-active');
    BodyHtml.classList.toggle('no-scroll');
});




