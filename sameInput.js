const sameInput = document.querySelector("#same-input")
const sameDisplay = document.querySelector("#same-Display")

sameInput.addEventListener("input" , ()=> {

    sameDisplay.innerText = sameInput.value

})