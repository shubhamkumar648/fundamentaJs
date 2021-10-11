// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.


const inputText1EL = document.querySelector('#input-Text1')

const IncrementButton = document.querySelector("#inc-of2")

const decrementButton = document.querySelector("#dec-of2")

const fontDisplay = document.querySelector("#fontOutput-Display")

const fontSubmitBtn = document.querySelector("#font-Submit")

var numPlusMinus = 18

fontSubmitBtn.addEventListener("click", () => {

    fontDisplay.innerText = inputText1EL.value
})

IncrementButton.addEventListener("click", () => {

 numPlusMinus = numPlusMinus + 2
    fontDisplay.style.fontSize = `${numPlusMinus}px`

})

decrementButton.addEventListener("click", () => {

 numPlusMinus = numPlusMinus - 2
    fontDisplay.style.fontSize = `${numPlusMinus}px`

})






