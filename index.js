// Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.


const inputEl = document.querySelector("#text-input");
const btnEl = document.querySelector("#btnClick");
  const displayOutput = document.querySelector("#displayOutput")

btnEl.addEventListener( 'click' , () => {

    let inputText = inputEl.value   
      
    let reverseString = inputText.split('').reverse().join('')

    displayOutput.innerText = reverseString

})