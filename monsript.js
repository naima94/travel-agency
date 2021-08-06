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

/* ================ CHANGE BACKGROUND HEADER ================ */
function scrollHeader(){
    const header = document.getElementById("header")
    //When the scroll is greater than 100 viewport height, addthe scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/* ================ SWIPER DISCOVER ================ */
var swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
      /*stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,*/
    },
    /*pagination: {
      el: ".swiper-pagination",
    },*/
  })

  /* ================ VIDEO ================ */
  const videoFile = document.getElementById("video-file"),
        videoButton = document.getElementById("video-button"),
        videoIcon = document.getElementById("video-icon")

        function playPause() {
            if(videoFile.paused) {
                // Play video
                videoFile.play() 

                // We change the icon
                videoIcon.classList.add("ri-pause-fill")
                videoIcon.classList.remove("ri-play-fill")
            } else {
                // Pause video
                videoFile.pause()

                // We change the icon
                videoIcon.classList.remove("ri-pause-fill")
                videoIcon.classList.add("ri-play-fill")
            }
        }

        videoButton.addEventListener("click", playPause)

        function finalVideo() {
            // Video ends, icon change
            videoIcon.classList.remove("ri-pause-fill")
            videoIcon.classList.add("ri-play-fill")
        }

        // Ended, when the video end
        videoFile.addEventListener("ended", finalVideo)


        /* ================ SHOW SCROLL ================ */
        function scrollUp() {
            const scrollUp = document.getElementById("scroll-up");
            // When the scroll is higher than 200 viewport height, add the show-scroll class to the tag with the scrollUp 
            if(this.scrollY >= 200) scrollUp.classList.add("show-scroll"); 
            else scrollUp.classList.remove("show-scroll")
        }
        window.addEventListener("scroll", scrollUp)

        /* ================ SCROLL ACTIONS ACTIVE LINK ================ */
        const section = document.querySelectorAll("section[id]")

        function scrollActive() {
            const scrollY =window.pageYOffset

            section.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50
                sectionId = current.getAttribute("id")

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.add("active-link")
                } else {
                    document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.remove("active-link")
                }
            })
        }
        window.addEventListener("scroll", scrollActive)

        /* ================ DARK LIGHT THEME ================ */
        const themeButton = document.getElementById("theme-button")
        const darkTheme = "dark-theme"
        const iconTheme = "ri-sun-line"

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem("selected-theme")
        const selectedIcon = localStorage.getItem("selected-icon")

        // We obtain the current theme that the interface validate the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

        // We validate if the user previously shose the topic
        if(selectedTheme) {
            // If the validation is fullfiled we ask what the issue was to know if we actived the dark mode
            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
            themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](IconTheme)
        }

        // Activate / Desactivate the theme manually with the button
            themeButton.addEventListener("click", () => {
            // Add or remove the dark/light icon theme
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)

            // We save the theme and the current icon thet the user chose
            localStorage.setItem("selected-theme", getCurrentTheme())
            localStorage.setItem("selected-icon", getCurrentIcon())
        })