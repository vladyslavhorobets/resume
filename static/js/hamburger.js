"use strict";


const hamburgerBtn = document.querySelector(".header__hamburger");
const navbarMenu = document.querySelector(".header__navbar");

hamburgerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    hamburgerBtn.classList.toggle("hamburger--active");
    navbarMenu.classList.toggle("navbar--active");
})
