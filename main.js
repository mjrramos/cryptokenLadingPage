/* abrir e fechar menu quando clicar nos icones */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/* fechar menu quando clicar nos links */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.scrollHeight

/* Carousel library Swiper */

const swiper = new Swiper('.swiper', {
  slidersPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true,
  loop: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
                     #about .image, #about .text,
                     #services header, #services .card,
                     #testimonials header, #testimonials .testimonials,
                     #contact .text, #contact .links,
                     footer .brand, footer .social
`,
  { interval: 100 }
)

/* botão - back to top */

/* mudar o header da página quando der scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.scrollHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    console.log('maior que')
  } else {
    header.classList.remove('scroll')
    console.log('menor que')
  }
}

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 800) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop(), changeHeaderWhenScroll()
})
