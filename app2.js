const sliderMain = new Swiper('.slider_main', {
freeMode: true,
centeredSlides: true,
mousewheel: true,
parallax: true,
breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,   
        }
    }
})

const slider_bg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})
sliderMain.controller.control = slider_bg

document.querySelectorAll('.slider__item').forEach(item => {
   item.addEventListener('click', event => {
       item.classList.toggle('opened')
   })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})

// Disable Right-cklick
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable Hotkays
document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'cvxspwuaz'.indexOf(event.key) !== -1) {
      event.preventDefault()
    }
  }) 