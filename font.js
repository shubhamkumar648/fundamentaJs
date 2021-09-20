
const displayOutput = document.querySelector("#display-output")
const inputValue = document.querySelector("#input-Value")
const btnEl = document.querySelector("#input-Btn")
const increamentFont = document.querySelector("#increament")
const decrementFont = document.querySelector("#decrement")


let num = 16

function submitInput () {

  let showInputValue =  inputValue.value  
   displayOutput.innerHTML = showInputValue
}

btnEl.addEventListener("click",submitInput)

increamentFont.addEventListener("click", function fontIncrease() {

    num = num+2
    displayOutput.style.fontSize = `${num}px`

})

decrementFont.addEventListener("click", function fontDecrease() {

    num = num-2
    displayOutput.style.fontSize = `${num}px`

})


