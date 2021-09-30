// Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.


const inputEl = document.querySelector("#text-input");
const btnEl = document.querySelector("#btnClick");
  const displayOutput = document.querySelector("#displayOutput")

btnEl.addEventListener( 'click' , () => {

    let inputText = inputEl.value   
      
    let reverseString = inputText.split('').reverse().join('')

    displayOutput.innerText = reverseString

})


// Here’s an API. Fetch the name and age of user and show them on the web page. Now check weather the user is eligible for vaccination ( must be above 45 ). If yes, show the name in green colour. API 