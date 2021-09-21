const showOutput2 = document.querySelector("#Output-text")
const showInput2= document.querySelector("#text-Input2")
const submitInputbtn2 = document.querySelector("#submit-Input2")

console.log(submitInputbtn2);


const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")

submitInputbtn2.addEventListener("click", () => showOutput2.innerHTML = showInput2.value)
red.addEventListener("click", () => showOutput2.style.color = "red")
green.addEventListener("click", () => showOutput2.style.color = "green")
blue.addEventListener("click", () => showOutput2.style.color = "blue")

