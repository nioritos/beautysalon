/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
var nav = document.querySelector('#header nav')
var toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
var links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
var header = document.querySelector('#header')
var navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel slider swiper */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhell: false,
    keyboard: true
})

/*ScrollReveal */

var myHomeSite = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
  
});

scrollReveal.reveal(
  `#home .image, #home, .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testmonials header, #testmonials .testmonials
  #contact .text, #contact .links
  `, { interval: 100 });


