const burger = document.querySelector(".header__burger");
const closeBtn = document.querySelector("[data-menu-close]");
const mobMenu = document.querySelector(".mobile-menu");
console.log(burger);

burger.addEventListener("click", onClick);
closeBtn.addEventListener("click", onClick);
function onClick() { 
    mobMenu.classList.toggle("active");
}