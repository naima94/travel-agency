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
    },
  });

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