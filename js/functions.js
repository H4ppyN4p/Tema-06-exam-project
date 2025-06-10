const openMenuBtn = document.querySelector("#navfolded")
const closeMenuBtn = document.querySelector("#navopened")


openMenuBtn.addEventListener("click", openDialog)
closeMenuBtn.addEventListener("click", closeDialog)

const menuDialog = document.querySelector("#menu")

function openDialog() {
    menuDialog.showModal()
}

function closeDialog() {
    menuDialog.close()
}