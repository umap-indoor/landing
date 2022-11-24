
slider();


async function slider() {
    let i = 0;
    const posts = document.querySelectorAll('.slider-text__item');
    posts.forEach(t => t.style = 'top:-90px; pacity:0; transition: 0s');
    posts[0].style = "top:0px; opacity:1; transition: 0s";
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    while(true) {
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



//scroll phone-desctop

// window.addEventListener('scroll', scrollPhone);
// function scrollPhone() {
//     let vertical_position = pageYOffset;
//     console.log(vertical_position)
//     // console.log(document.documentElement.clientWidth)

//     if(vertical_position > 2267){
//         phone.classList.remove('stick');
//         phone.classList.add('position');

//     } else {
//         phone.classList.add('stick');
//         phone.classList.remove('position');

//     }
// };


//video-el


// const videoEl = document.getElementsByTagName('video')[0];

// // let timerId = setInterval(() => console.log(videoEl.currentTime), 1000);

// let currentState = 0;

// function pauseVideo() {
//     if (videoEl.currentTime > 3 && currentState == 0) {
//         videoEl.pause();
//         currentState = 1;
//     } else if (videoEl.currentTime > 6.2 && currentState == 1){
//         videoEl.pause();
//         currentState =2;
//     }  else if (videoEl.currentTime > 8.7 && currentState == 3){
//         videoEl.pause();
//         currentState =4;
//     }
// }
// videoEl.addEventListener('timeupdate', pauseVideo);

// function playVideo() {
//     if (pageYOffset > 400 && currentState ==1){
//         videoEl.play();
//     } else if (pageYOffset > 1000 && currentState == 2) {
//         videoEl.play();
//     } else if (pageYOffset > 2200 && currentState == 3) {
//         videoEl.play();
//     } else if (pageYOffset > 2000 && videoEl.currentTime > 8.6) {
//         videoEl.pause();
//     } else if (pageYOffset > 5270) {
//         videoEl.play();
//     }
// }






const videoGif1 = document.querySelector('#video1');
const videoGif2 = document.querySelector('#video2');
const videoGif3 = document.querySelector('#video3');


let windowInnerWidth = document.documentElement.clientWidth;

// let isEvent = false;
function playVideoGif() {
    console.log(windowInnerWidth)
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

// setTimeout(playVideoGif, 1000);


// setTimeout(function() {
//         videoGif2.play();
//     }
// }, 1000);

// function playVideoGif2() {
//     if(videoGif1.currentTime == 4){
//         videoGif2.play();
//     }
    
// };
// playVideoGif2();
// videoEl.playbackRate = -1;
// videoEl.addEventListener('timeupdate', function () {
// if(videoEl.duration == videoEl.currentTime){
// console.log(videoEl.duration)
// }
// });



//select

// let selectContainer = document.querySelector(".select-container");
// let select = document.querySelector(".select");
// let input = document.getElementById("input");
// let options = document.querySelectorAll(".select-container .option");


// select.onclick = () => {
//     selectContainer.classList.toggle("active");
// };


// options.forEach((e) => {
//     e.addEventListener("click", () => {
//         input.value = e.innerText;
//         selectContainer.classList.remove("active");
//         options.forEach((e) => {
//             e.classList.remove("selected");
//         });
//         e.classList.add("selected");
//     });
// });





//animation line

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
        // speed: 30000,
            
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
const carousel = document.querySelector(".carousel1");
const pagination = document.querySelector(".swiper-pagination1");

carousel.addEventListener('mouseover', addDots);
function addDots(){
    pagination.classList.add('dot-translate');
};

carousel.addEventListener('mouseleave', removeDots);
function removeDots(){
    pagination.classList.remove('dot-translate');
};


const carousel2 = document.querySelector(".carousel2");
const pagination2 = document.querySelector(".swiper-pagination2");


carousel2.addEventListener('mouseover', addDots2);
function addDots2(){
    pagination2.classList.add('dot-translate');
};

carousel2.addEventListener('mouseleave', removeDots2);
function removeDots2(){
    pagination2.classList.remove('dot-translate');
};

bullets = document.querySelectorAll('.carousel_nav')

// window.addEventListener('resize', removeBullets)

function removeBullets(){

    if (document.documentElement.clientWidth < 1000) {
        bullets[0].style.display="none";
        bullets[1].style.display="none";

    } else {
        bullets[0].style.display="flex";
        bullets[1].style.display="flex";
        // bulletsTwo.append(carousel2);
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


//animation-phone

// const phoneApp = document.querySelector('.app__container-img');


// window.addEventListener('scroll', animationPhoneApp);
// function animationPhoneApp() {
//     let vertical_position = pageYOffset;
//     // console.log(vertical_position)
//     if(vertical_position > 6567){
//         phoneApp .classList.add('transform-Y');

//     } 
// };


// slider-price
const wrapper = document.querySelector('.wrapper');
const sliderTarif = document.querySelector(".tarif-cards__container");
const itemSlider = document.querySelectorAll(".tarif-card__item");




//tarif



    let swiperTarif;

    const initAdvantagesSlider = () => {
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
initAdvantagesSlider();


    // form

const BtnsTheme = document.querySelectorAll('.btns-theme');
function activeBtn () {
    for (let btn of BtnsTheme) {
        btn.addEventListener('click', (event) => {
        const et = event.target;
        const BtnActive = document.querySelector('.active-buttons');
        if (BtnActive) {
            BtnActive.classList.remove('active-buttons');
        }
        et.classList.add('active-buttons');
        })
    }
    };
    activeBtn();

const el = document.getElementById("TextWindow");
el.placeholder = "Какой вопрос хотите задать?";

function ChangePlaceholder(){
    for (let btn of BtnsTheme) {
        btn.addEventListener('click', (event) => {
        const et = event.target;
        if (et.classList.contains('btn-idea')) {
            el.placeholder = "Предложите свою идею";
        } else if (et.classList.contains('btn-quest')){
            el.placeholder = "Какой вопрос хотите задать?";
        }else if (et.classList.contains('btn-error')){
            el.placeholder = "Сообщите нам об ошибке";
        } else if (et.classList.contains('btn-develop')){
            el.placeholder = "Записаться на дэмо";
        } else if (et.classList.contains('btn-other')){
            el.placeholder = "Пишите по любой теме";
        }
    })
    }
};
    ChangePlaceholder();

const developBtns = document.querySelectorAll(".linkRequestJS")
developBtns.forEach((item) => item.addEventListener('click',  openRequesrDevelop))


function openRequesrDevelop() {
    BtnsTheme[0].classList.remove('active-buttons')
    BtnsTheme[3].classList.add('active-buttons')
    BtnsTheme[2].classList.remove('active-buttons')
    BtnsTheme[1].classList.remove('active-buttons')
    BtnsTheme[4].classList.remove('active-buttons')
    el.placeholder = "Записаться на дэмо";
}

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
    
        }
    };
    });
    
    const flipCards = document.querySelectorAll('.flip-card');
    const BtnFlipCards = document.querySelectorAll('.flip-card__btn');
    for (let i = 0; i < BtnFlipCards.length; i++) {
        BtnFlipCards[i].addEventListener("click", function () {
            this.closest('.flip-card').classList.toggle('flip');

        });
    }

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
})
// const promises = [
//     new Promise((resolve) => {
//         setTimeout(() => resolve(1) , 500);
//     }),
//     new Promise((resolve) => {
//         setTimeout(() => resolve(2) , 500);
//     }),
//     new Promise((resolve) => {
//         setTimeout(() => resolve(3) , 500);
//     }),
// ]

// console.log(promises)


// promiseAll = (array) => {

// }

// promiseAll(promises).then(console.log)