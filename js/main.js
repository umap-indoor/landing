//text-slider
slider();

async function slider() {
    let i = 0;
    const posts = document.querySelectorAll('.slider-text__item');
    posts.forEach(t => t.style = 'top:-90px; pacity:0; transition: 0s');
    posts[0].style = "top:0px; opacity:1; transition: 0s";
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    while(i < 10) {
        const next = (i + 1) % posts.length;
        
        posts[i].style = "top:90px; opacity:0";
        posts[next].style = "top:0px; opacity:1";
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        posts[i].style = "top:-90px; opacity:0; transition: 0s";
        i = next;
        
    };
};

//cookie


// const cookieAlert = document.querySelector('.cookies-alert');
// const cookiesBtn =document.querySelector('.cookies-alert__btn')


// setTimeout(() => {
//     cookieAlert.classList.add('show')
// }, 1000)


// cookiesBtn.addEventListener('click', setCookies)

//     function setCookies() {
//         cookieAlert.classList.remove('show')
//         Cookies.set('cookieAlert', true, { expires: 7 });
//     }

//animated gif


const videoGif1 = document.querySelector('#video1'),
    videoGif2 = document.querySelector('#video2'),
    videoGif3 = document.querySelector('#video3');

let windowInnerWidth = document.documentElement.clientWidth;

// let isEvent = false;
function playVideoGif() {
    // console.log(windowInnerWidth);
    if (windowInnerWidth > 1200 && pageYOffset > 2700)  {
        videoGif1.play();
        // isEvent = true;
    } else if (800 < windowInnerWidth < 1200 && pageYOffset > 1700) {
        videoGif1.play();
        // isEvent = true;
    }
};

videoGif1.addEventListener('ended', function (){
    videoGif2.play();

});

videoGif2.addEventListener('ended', function (){
    videoGif3.play();

});

window.addEventListener('scroll', playVideoGif);


//animation infinity line

const sl1 = new Swiper('.swiper-animation_one', {
    slidesPerView: 'auto',
    loop: true,
    momentumBounceRatio: 25,
    momentumRatio: 15,
    momentumVelocityRatio: 15,
    speed: 14000,
    autoplay: {
        enabled: true,
        delay: 1,
        reverseDirection: true,
        },
});


const sl2 = new Swiper('.swiper-animation_two', {
    slidesPerView: 'auto',
    loop: true,
    momentumBounceRatio: 25,
    momentumRatio: 15,
    momentumVelocityRatio: 15,
    speed: 10000,
    autoplay: {
        enabled: true,
        delay: 1,
        },
});

const sl3 = new Swiper('.swiper-animation_three', {
    slidesPerView: 'auto',
    loop: true,
    momentumBounceRatio: 25,
    momentumRatio: 15,
    momentumVelocityRatio: 15,
    speed: 8000,
    autoplay: {
        enabled: true,
        delay: 1,
        reverseDirection: true,
        },
});

const sl4 = new Swiper('.swiper-animation_four', {
    slidesPerView: 'auto',
    loop: true,
    momentumBounceRatio: 25,
    momentumRatio: 15,
    momentumVelocityRatio: 15,
    speed: 16000,
    autoplay: {
        enabled: true,
        delay: 1,
        },
});


//carousel project
const carousel = document.querySelector(".carousel1"),
    pagination = document.querySelector(".swiper-pagination1");

carousel.addEventListener('mouseover', addDots);
function addDots(){
    pagination.classList.add('dot-translate');
};

carousel.addEventListener('mouseleave', removeDots);
function removeDots(){
    pagination.classList.remove('dot-translate');
};


const carousel2 = document.querySelector(".carousel2"),
    pagination2 = document.querySelector(".swiper-pagination2");


carousel2.addEventListener('mouseover', addDots2);
function addDots2(){
    pagination2.classList.add('dot-translate');
};

carousel2.addEventListener('mouseleave', removeDots2);
function removeDots2(){
    pagination2.classList.remove('dot-translate');
};

bullets = document.querySelectorAll('.carousel_nav');

// window.addEventListener('resize', removeBullets)

function removeBullets(){

    if (document.documentElement.clientWidth < 1000) {
        bullets[0].style.display="none";
        bullets[1].style.display="none";

    } else {
        bullets[0].style.display="flex";
        bullets[1].style.display="flex";
    }
    
};
removeBullets();

//carousel1
const swiper = new Swiper('.swiper1', {
    loop: true,

    pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
        clickable: true,
    //   dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    });


//carousel2
const swiper2 = new Swiper('.swiper2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
    //   dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-prev2',
        prevEl: '.swiper-button-next2',
    },
    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
    //   dynamicBullets: true
    },
    });



//accordion


const accordionContents = document.getElementsByClassName("accordion__content");
for (let i = 0; i < accordionContents.length; i++) {
    accordionContents[i].addEventListener("click", function () {
    this.classList.toggle("active");
    });
}


const plus = document.getElementsByClassName("img-plus");



// slider-price
const wrapper = document.querySelector('.wrapper'),
    sliderTarif = document.querySelector(".tarif-cards__container"),
    itemSlider = document.querySelectorAll(".tarif-card__item");

//initial slider

let swiperTarif;

    const initTarifsSlider = () => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
            const {
            contentRect: { width: bodyWidth },
            } = entry;
    
                const breakpoint = 1370;
    
            if (bodyWidth < breakpoint && !swiperTarif) {
                swiperTarif = new Swiper('.swiper-container', {
                spaceBetween: 21,
                centeredSlides: true,
                loop: true,
                initialSlide: 1,
                slidesPerView: 3,
                centeredSlides: true,
            });
        } else if (bodyWidth > breakpoint && swiperTarif) {
            swiperTarif.destroy();
            swiperTarif = undefined;
            }
        }
        });
    
        resizeObserver.observe(document.body);
    };
initTarifsSlider();


// form

const selectBtn = document.querySelectorAll('.select-btn-radio');
    el = document.getElementById("TextWindow");
el.placeholder = "Какой вопрос хотите задать?";

function ChangePlaceholder(){
    for (let btn of selectBtn) {
        btn.addEventListener('click', (event) => {
        const et = event.target.dataset.name;
            el.placeholder = `${et}`;
    });
    }
};
    ChangePlaceholder();

const developBtns = document.querySelectorAll(".linkRequestJS")
developBtns.forEach((item) => item.addEventListener('click',  openRequesrDevelop))


function openRequesrDevelop() {
    document.getElementById("demo").checked = true;
    el.placeholder = "Что нам устоит учесть при встрече?";
    console.log('dfg')
};

const accordionBtns = document.querySelectorAll(".button-accordion");

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {

        this.classList.toggle("is-open");
        this.innerHTML = "Скрыть подробности";
        let content = this.previousElementSibling;
        if (content.style.maxHeight) {
    
            content.style.maxHeight = null;
            this.innerHTML ="Показать подробности";
        } else {
    
        content.style.maxHeight = content.scrollHeight + "px";
    
        };
    };
    });

//flip cards
    
const flipCards = document.querySelectorAll('.flip-card'),
    BtnFlipCards = document.querySelectorAll('.flip-card__btn');
    BtnFlipCards.forEach((el) => { el.addEventListener("click", function() {
        this.closest('.flip-card').classList.toggle('flip');
    });



//popup-contact

const popupContact = document.querySelector('.popup-contact')
const openContact = document.querySelectorAll('.contact-link')
openContact.forEach((el) => { el.addEventListener('click', () => {
    popupContact.classList.toggle('hidden-popup')
})});



//burger-menu


const BtnMenu = document.querySelector('.btn-menu'),
    Burger = document.querySelector('.burger')
    BurgerMenu = document.querySelector('.burger-menu');
    BurgerItem = document.querySelectorAll('.menu__item-link-burger')
    BurgerShadow = document.querySelector('.burger-shadow')
    BodyHtml = document.querySelector('html')
    LogoIcon = document.querySelector('.logo-icon-mobile')



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
    });


//input email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('#input-text1');
    inputBlock = document.querySelector('.input-email')
    btnSubmit = document.querySelector('.questions_btn')

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {
    console.log('sdff')
	if (isEmailValid(input.value)) {
        document.querySelector('.questions_btn').removeAttribute('disabled');
	} else {
		inputBlock.style.borderColor = 'red';
	}
};

input.addEventListener('input', onInput);




//form


    // const form = document.querySelector("form");
    // // console.log(form)

    // form.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     const data = new FormData(form);
    //     const values = Object.fromEntries(data.entries())
    //     console.log(values)

    //     fetch(`https://${window.location.host}/api/site/feedback`, {
    //         method: "POST",
    //         body: values,
    //     })
    //         // .then((response) => response.text());
    //         .then(function () {
    //             btnSubmit.textContent =
    //                 "Thank you for your message!
    //         })
            
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // });


    submitForm();

    function submitForm() {
        const form = document.querySelector("form");
        btnSubmit=form.querySelector('.questions_btn')
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const data = new FormData(this);
            const values = Object.fromEntries(data.entries())
    
            fetch(`https://${window.location.host}/api/site/feedback`, {
                method: "POST",
                body: values,
            })
                .then((response) => response.text())
                .then(function () {
                    Btn.textContent =
                        "Thank you for your message!";
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    }