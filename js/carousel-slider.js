const carousel = document.querySelector('.carousel')
const slider = carousel.querySelector('.carousel_track')
let slides = [...slider.children]

slider.prepend(slides[slides.length - 1])

// Creating dot 
const dotsContainer = document.querySelector('.carousel_nav')
const createDots = (carousel, initSlides) => {

    initSlides.forEach((slide, index) => {
    const dot = document.createElement('button')
    dot.type = 'button'
    dot.classList.add('carousel_dot')
    dot.setAttribute('aria-label', `Slide number ${index + 1}`)
    slide.dataset.position = index
    slide.classList.contains('is-selected') && dot.classList.add('is-selected')
    dotsContainer.appendChild(dot)
    })

    carousel.appendChild(dotsContainer)

    return dotsContainer
}

carousel.addEventListener('mouseover', addDots);
function addDots(){
    dotsContainer.classList.add('dot-translate');
};

carousel.addEventListener('mouseleave', removeDots);
function removeDots(){
    dotsContainer.classList.remove('dot-translate');
};

const updateDot = slide => {
    const currDot = dotNav.querySelector('.is-selected')
    const targetDot = slide.dataset.position

    currDot.classList.remove('is-selected')
    dots[targetDot].classList.add('is-selected')
}

  // Handling arrow buttons
    const handleArrowClick = arrow => {
    arrow.addEventListener('click', () => {
        slides = [...slider.children]
        const currSlide = slider.querySelector('.is-selected')
        currSlide.classList.remove('is-selected')
        let targetSlide

        if (arrow.classList.contains('jsPrev')) {
        targetSlide = currSlide.previousElementSibling
        slider.prepend(slides[slides.length - 1])
        }

        if (arrow.classList.contains('jsNext')) {
        targetSlide = currSlide.nextElementSibling
        slider.append(slides[0])
        }

        targetSlide.classList.add('is-selected')
        updateDot(targetSlide)
    })
}

    const buttons = carousel.querySelectorAll('.carousel_btn')
    buttons.forEach(handleArrowClick)

  // Handling dot buttons
const handleDotClick = dot => {
    const dotIndex = dots.indexOf(dot)
    const currSlidePos = slider.querySelector('.is-selected').dataset.position
    const targetSlidePos = slider.querySelector(`[data-position='${dotIndex}']`).dataset.position

    if (currSlidePos < targetSlidePos) {
        const count = targetSlidePos - currSlidePos
        for (let i = count; i > 0; i--) nextBtn.click()
    }

    if (currSlidePos > targetSlidePos) {
        const count = currSlidePos - targetSlidePos
        for (let i = count; i > 0; i--) prevBtn.click()
    }
    }
    
    const dotNav = createDots(carousel, slides)
    const dots = [...dotNav.children]
    const prevBtn = buttons[0]
    const nextBtn = buttons[1]

    dotNav.addEventListener('click', e => {
    const dot = e.target.closest('button')
    if (!dot) return
    handleDotClick(dot)
    })