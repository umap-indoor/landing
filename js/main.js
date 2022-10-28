
slider();


async function slider() {
    let i = 0
    const posts = document.querySelectorAll('.slider-text__item')
    posts.forEach(t => t.style = 'top:-90px; pacity:0; transition: 0s')
    posts[0].style = "top:0px; opacity:1; transition: 0s";
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    while(true) {
        const next = (i + 1) % posts.length
        
        posts[i].style = "top:90px; opacity:0";
        posts[next].style = "top:0px; opacity:1";
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        posts[i].style = "top:-90px; opacity:0; transition: 0s";
        
        i = next
        
    }
}

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


// async function slider(screen) {
//     let i = 0;
//     const posts = document.querySelectorAll('.slider-text__item');
//     posts.forEach(t => t.style = `top:-${screen}; opacity:0; transition: 0s`);
//     posts[0].style = "top:0px; opacity:1; transition: 0s";
    
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     while(true) {
//         const next = (i + 1) % posts.length;
        
//         posts[i].style = `top:${screen}; opacity:0`;
//         posts[next].style = `top:${screen}; opacity:1`;
        
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         posts[i].style = `top:-${screen}; opacity:0; transition: 0s`;
        
//         i = next;
        
//     }
// };

//scroll phone-desctop
const phone = document.querySelector('.right_part_img');



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

setTimeout(playVideoGif, 1000);


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
    speed: 20000,
    slidesPerView: '2.8',
    autoplay: {
    enabled: true,
    delay: 1,
    // reverseDirection: true,
    },
    breakpoints: {
        // when window width is >= 768px
        250: {
            slidesPerView: 0.7,
        },
        450: {
            slidesPerView: 0.8,
        },
        738: {
            slidesPerView: 1.2,
        },
        1068: {
            slidesPerView: 1.8,
        },
        // when window width is >= 1350px
        1350: {
            slidesPerView: 2.6,
        }
        },
});


const sl2 = new Swiper('.swiper-animation_two', {
    slidesPerView: 'auto',
    loop: true,
    speed: 30000,
    slidesPerView: '3.0',
    autoplay: {
    enabled: true,
    delay: 1700,
    // reverseDirection: true,
    },
    breakpoints: {
        // when window width is >= 768px
        250: {
            slidesPerView: 0.7,
        }, 
        450: {
            slidesPerView: 0.8,
        },
        738: {
            slidesPerView: 1.1,
        },
        1068: {
            slidesPerView: 1.8,
        },
        // when window width is >= 1350px
        1350: {
            slidesPerView: 3,
        }
        },
});

const sl3 = new Swiper('.swiper-animation_three', {
    slidesPerView: 'auto',
    loop: true,
    speed: 8000,
    slidesPerView: '3',
    autoplay: {
    enabled: true,
    delay: 1,
    // reverseDirection: true,
    },
    breakpoints: {
        // when window width is >= 768px
        250: {
            slidesPerView: 0.7,
        }, 
        450: {
            slidesPerView: 0.8,
        }, 
        738: {
            slidesPerView: 1.3,
        },
        1068: {
            slidesPerView: 1.6,
        },
        1200: {
            slidesPerView: 1.4,
        },
        // when window width is >= 1350px
        1350: {
            slidesPerView: 2.4,
        }
        },
});

const sl4 = new Swiper('.swiper-animation_four', {
    // slidesPerView: 'auto',
    loop: true,
    speed: 15000,
    slidesPerView: '3',
    autoplay: {
    enabled: true,
    delay: 1000,
    // reverseDirection: true,
    },
     // Responsive breakpoints
    breakpoints: {
        250: {
            slidesPerView: 0.7,
        }, 
        450: {
            slidesPerView: 0.8,
        },
        // when window width is >= 768px
        738: {
            slidesPerView: 1.2,
        },
        1068: {
            slidesPerView: 1.8,
        },
        1200: {
            slidesPerView: 1.4,
        },
        // when window width is >= 1350px
        1350: {
            slidesPerView: 3,
        }
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

const phoneApp = document.querySelector('.app__container-img');


window.addEventListener('scroll', animationPhoneApp);
function animationPhoneApp() {
    let vertical_position = pageYOffset;
    // console.log(vertical_position)
    if(vertical_position > 6567){
        phoneApp .classList.add('transform-Y');

    } 
};


// slider-price
const wrapper = document.querySelector('.wrapper');
const sliderTarif = document.querySelector(".tarif-cards__container");
const itemSlider = document.querySelectorAll(".tarif-card__item");




//tarif
// const InitSliderTarif = () => {
//     if (document.documentElement.clientWidth < 1307) {
//         swiperTarif = new Swiper('.swiper-container', {
//             initialSlide: 1,
//             slidesPerView: 3,
//             centeredSlides: true,
//             loop: true,
//             spaceBetween: 21,
//             slideToClickedSlide: true,
//             });
//     } else if (document.documentElement.clientWidth < 1307) {
//         swiperTarif = undefined;
//     }
// }

// InitSliderTarif();

swiperTarif = new Swiper('.swiper-container', {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 21,
    slideToClickedSlide: true,
    // allowTouchMove:false,
     // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1380px
        1380: {
            allowTouchMove: false,
        }
        },
    });




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

const el=document.getElementById("TextWindow");
el.placeholder="Какой вопрос хотите задать?";

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
            el.placeholder = "Заказать разработку";
        } else if (et.classList.contains('btn-other')){
            el.placeholder = "Пишите по любой теме";
        }
    })
    }
};
    ChangePlaceholder();

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
    [...flipCards].forEach((card) => {
        card.addEventListener('click', function() {
            card.classList.toggle('flip');
        });
    });



    // function flipCard() {

    //     this.classList.toogle('flip'); //2.целевому элементу добавили класс flip
      
    //     if (!hasFlippedCard) { //если карта не перевернута, нажатой карте добавляется класс flip 
    //       hasFlippedCard = true;
    //       firstCard = this;
        
    //       return;
    //     }
      
    //     secondCard = this;
        
    //     checkForMatch();

        
    //   }

    // flipCards.forEach(card => card.addEventListener('click', flipCard));


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