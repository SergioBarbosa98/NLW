/* abre e fecha o menu quando clicar nos icones: hamburguer e x */

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
    element.addEventListener("click", function(){
        nav.classList.toggle("show")
    })
}

/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll("nav ul li a")

for(const link of links){
    link.addEventListener("click", function(){
        nav.classList.remove("show")
    })
}

/* change page's header when scroll */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function(){
    if(window.scrollY >= navHeight){
      header.classList.add("scroll")  
    }
    else{
        header.classList.remove("scroll")

    }
})


/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel:true,
    keyboard:true,

  });

  /* SCROLLREVEAL: Show elements when scroll */

  const scrollReveal = ScrollReveal ({
      origin:'top',
      distance: '30px',
      duration: 1100,
      reset: true
  })

  scrollReveal.reveal(
      `#home .text, #home .image
       #about .text, #about .image,
       #services header, #services .card,
       #testimonials header, #testimonials .testimonials,
       #contact .text, #contact .links
       `,
      { interval:200 }
      );