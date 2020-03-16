// const contents = document.querySelectorAll('.page');
// const circles = document.querySelectorAll('.slide')

// const scroll = document.body.scrollTop || document.documentElement.scrollTop
// const height = document.documentElement.scrollHeight
// const clientHeight = document.documentElement.clientHeight 
// const scrolled = (scroll / height) * 100

// console.log(height)

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')


function navFill(){
   nav.classList.toggle('nav-active');
   navLinks.forEach( (li , index) => {
      if(li.style.animation){
         li.style.animation = ``
      } else {
         li.style.animation = `navLinkFade 1s ease-in-out forwards ${index/9 + 0.1}s`
      }
   })
   burger.classList.toggle('toggle');
}
burger.addEventListener('click' ,navFill)