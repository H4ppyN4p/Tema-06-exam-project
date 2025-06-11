const openMenuBtn = document.querySelector("#navfolded")
const closeMenuBtn = document.querySelector("#navopened")
const themeBtn = document.querySelector("#temaer")



openMenuBtn.addEventListener("click", openDialog)
closeMenuBtn.addEventListener("click", closeDialog)
themeBtn.addEventListener("click", toggleThemes)

var isThemesToggled = false

const menuDialog = document.querySelector("#menu")

function openDialog() {
    menuDialog.showModal()
}

function closeDialog() {
    menuDialog.close()
}

function toggleThemes() {
    console.log ("toggling themes")
    if (isThemesToggled) {
        isThemesToggled = false
        document.getElementById("nav-arrow-head").style.transform = "rotate(0deg)"
        document.getElementById("nav-about-me").style.top = "0"
        document.getElementById("temaer-nav").style.display = "none"


    } else {
        isThemesToggled = true
        document.getElementById("nav-arrow-head").style.transform = "rotate(270deg)"
        document.getElementById("nav-about-me").style.top = "120px"
        document.getElementById("temaer-nav").style.display = "block"



    }
}