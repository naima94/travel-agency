/* ================== SHOW MENU ================== */

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/* ========= Menu show ========= */
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

/* ========= Menu hidden ========= */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

/* ================ REMOVE MENU MOBILE ================ */
const navLink = document.querySelectorAll(".nav-link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav-link we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))