//popup-contact
const popupContact = document.querySelector('.popup-contact'),
    openContact = document.querySelectorAll('.contact-link');
openContact.forEach((el) => { el.addEventListener('click', () => {
    popupContact.classList.toggle('hidden-popup');
})});

//burger-menu


const BtnMenu = document.querySelector('.btn-menu'),
    Burger = document.querySelector('.burger'),
    BurgerMenu = document.querySelector('.burger-menu'),
    BurgerItem = document.querySelectorAll('.menu__item-link-burger'),
    BurgerShadow = document.querySelector('.burger-shadow'),
    BodyHtml = document.querySelector('html'),
    LogoIcon = document.querySelector('.logo-icon-mobile');



BtnMenu.addEventListener('click', () => {
    BurgerMenu.classList.toggle('burger-menu-active');
    BtnMenu.classList.toggle('btn-menu-active');
    Burger.classList.toggle('burger-active');
    BurgerShadow.classList.toggle('burger-shadow-active');
    BodyHtml.classList.toggle('no-scroll');
    
    });

BurgerItem.forEach(item => {
    item.addEventListener('click', () => {
        BurgerMenu.classList.toggle('burger-menu-active');
        BtnMenu.classList.toggle('btn-menu-active');
        Burger.classList.toggle('burger-active');
        BurgerShadow.classList.toggle('burger-shadow-active');
        BodyHtml.classList.toggle('no-scroll');
    });
});

LogoIcon.addEventListener('click', () => {
    BurgerMenu.classList.remove('burger-menu-active');
    BtnMenu.classList.remove('btn-menu-active');
    Burger.classList.remove('burger-active');
    BurgerShadow.classList.remove('burger-shadow-active');
    BodyHtml.classList.remove('no-scroll');
});





