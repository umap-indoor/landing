
//text slider
slider();

async function slider() {
    let i = 0;
    const posts = document.querySelectorAll('.slider-text__item');
    posts.forEach(t => t.style = 'top:-100px; pacity:0; transition: 0s');
    posts[0].style = "top:0px; opacity:1; transition: 0s";
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    while(true) {
        const next = (i + 1) % posts.length;
        
        posts[i].style = "top:100px; opacity:0";
        posts[next].style = "top:0px; opacity:1";
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        posts[i].style = "top:-100px; opacity:0; transition: 0s";
        
        i = next;
        
    }
};

//scroll phone
const phone = document.querySelector('.right_part_img');


window.addEventListener('scroll', scrollPhone);
function scrollPhone() {
    let vertical_position = pageYOffset;
    if(vertical_position > 2267){
        phone.classList.remove('stick');
        phone.classList.add('position');

    } else {
        phone.classList.add('stick');
        phone.classList.remove('position');

    }
};


//animation-phone

let animation = document.querySelector('.app__container-img');


window.addEventListener('scroll', animationPhone);
function animationPhone() {
    let vertical_position = pageYOffset;
    // console.log(vertical_position)
    if(vertical_position > 6567){
        animation.classList.add('transform-Y');

    } 
};


//select

let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".select-container .option");


select.onclick = () => {
    selectContainer.classList.toggle("active");
};

options.forEach((e) => {
    e.addEventListener("click", () => {
        input.value = e.innerText;
        selectContainer.classList.remove("active");
        options.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});

//animation line

const sl1 = new Swiper('.swiper-animation_one', {
    slidesPerView: 'auto',
    loop: true,
    speed: 20000,
    slidesPerView: '2.8',
    autoplay: {
    enabled: true,
    delay: 1,
    reverseDirection: true,
    },
    breakpoints: {
        // when window width is >= 768px
        738: {
            slidesPerView: 1.4,
        },
        1068: {
            slidesPerView: 2.3,
        },
        // when window width is >= 1350px
        1350: {
            slidesPerView: 3,
        }
        },
});


const sl2 = new Swiper('.swiper-animation_two', {
    slidesPerView: 'auto',
    loop: true,
    speed: 40000,
    slidesPerView: '3.0',
    autoplay: {
    enabled: true,
    delay: 1,
    },
    breakpoints: {
        // when window width is >= 768px
        738: {
            slidesPerView: 1.4,
        },
        1068: {
            slidesPerView: 2.3,
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
    speed: 28000,
    slidesPerView: '2.5',
    autoplay: {
    enabled: true,
    delay: 1,
    reverseDirection: true,
    },
    breakpoints: {
        // when window width is >= 768px
        738: {
            slidesPerView: 1.4,
        },
        1068: {
            slidesPerView: 2.3,
        },
        // when window width is >= 1350px
        1350: {
            slidesPerView: 3,
        }
        },
});

const sl4 = new Swiper('.swiper-animation_four', {
    slidesPerView: 'auto',
    loop: true,
    speed: 35000,
    slidesPerView: '2.6',
    autoplay: {
    enabled: true,
    delay: 1,
    },
     // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        738: {
            slidesPerView: 1.2,
        },
        1068: {
            slidesPerView: 2.3,
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

bulletsOne = document.querySelector('.swiper-pagination1')
bulletsTwo = document.querySelector('.swiper-pagination2')

// window.addEventListener('resize', removeBullets)

function removeBullets(){
    if (document.documentElement.clientWidth < 1000) {
        bulletsOne.parentNode.removeChild(bulletsOne);
        bulletsTwo.parentNode.removeChild(bulletsTwo);

    } else {
        console.log('jkmit');
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


//tarif
// const wrapper = document.querySelector('.wrapper');
// if (wrapper.offsetWidth < 1300) {
//     console.log('dfdf');
// };
// console.log(wrapper.offsetWidth)


// slider-price
const wrapper = document.querySelector('.wrapper')
const sliderTarif = document.querySelector(".tarif-cards__container")
const itemSlider = document.querySelectorAll(".tarif-card__item")

window.addEventListener('resize', checkResize);

function checkResize() {
    if (document.documentElement.clientWidth < 1210) {
        tarifSlider();
    } 
    
};
checkResize();



function tarifSlider(){
    itemSlider[0].addEventListener("click", () => {
        sliderTarif.style.transform = "translate(13.33%)";
        // document.getElementsByClassName("psevdo-shadow").classList.remove("psevdo-shadow");
    
    
    });
    itemSlider[1].addEventListener("click", () => {
        sliderTarif.style.transform = "";
    
    });
    itemSlider[2].addEventListener("click", () => {
        sliderTarif.style.transform = "translate(-13.33%)";
    
    });
};