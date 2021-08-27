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