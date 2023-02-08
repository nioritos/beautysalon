const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination-cr'
  },
  mousewheel: true,
  keyboard: true
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer section, footer .brand, footer .social
  `,
  { interval: 100 }
)

/*Back to topButton */

const buttonBackTotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
  if(this.window.scrollY > 560) {
    buttonBackTotop.classList.add('show')
  } else {
    buttonBackTotop.classList.remove('show')
  }
})
