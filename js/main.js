let hamburger = document.querySelector('.header-burger');
let headerMenu = document.querySelector('.header-menu');
let headerBurger = document.querySelector('.header-burger-menu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active')
})