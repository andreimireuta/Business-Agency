// prompt("Please tell me a number");

const menu = document.querySelector('.menu');
const menu1 = document.querySelector('.menu1');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    navbar.classList.toggle('change');
    menu.classList.toggle('visible-hidden');
    menu1.classList.toggle('visible-active');
})
menu1.addEventListener('click', ()=>{
    navbar.classList.toggle('change');
    menu.classList.toggle('visible-hidden');
    menu1.classList.toggle('visible-active');
})