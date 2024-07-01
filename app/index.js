const $toggle = document.querySelector("#toggle");

$toggle.addEventListener("click", (e) => {

const darkMode = document.querySelectorAll(".dark-mode");
const lightMode = document.querySelectorAll(".light-mode");

    if(e) {
    if(darkMode.length > 0) {
    darkMode.forEach(el => {
        el.classList.add("light-mode");
        el.classList.remove("dark-mode");
    })
    }

    if(lightMode.length > 0) {
    lightMode.forEach(el => {
        el.classList.add("dark-mode");
        el.classList.remove("light-mode");
    })
    }
    }
})