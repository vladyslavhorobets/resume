"use strict";


const rootElement = document.documentElement;
const scrollBtn = document.querySelector(".scroll");


document.addEventListener("scroll", (event) => {
    event.preventDefault();
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    console.log(scrollTotal);

    if ((rootElement.scrollTop / scrollTotal ) < 0.30 ) {
        scrollBtn.classList.add("scroll--hidden");
    } else {
        scrollBtn.classList.remove("scroll--hidden");
    }
})


scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})
