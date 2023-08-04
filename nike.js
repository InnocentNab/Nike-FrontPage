let menu = document.getElementsByClassName("open")[0]
let ModalContainer = document.getElementsByClassName("modal-container")[0]
let close = document.getElementsByClassName("close")[0]
let atc = document.getElementsByClassName("atc")[0]
let num = document.getElementsByClassName("num")[0]


menu.addEventListener("click", function () {
    ModalContainer.style.display = "block"

})
ModalContainer.addEventListener("click", function () {
    ModalContainer.style.display = "none"

})
close.addEventListener("click", function () {
    ModalContainer.style.display = "none"

})

atc.addEventListener("click", function () {
    num.textContent = parseInt(num.textContent)+1;
})
