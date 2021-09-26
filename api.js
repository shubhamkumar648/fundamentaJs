
// Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.



let apiCallMessage = document.querySelector("#apiCallMessage")
let apiBtn = document.querySelector("#apiBtn")

let Serverurl = "https://lessonfourapi.tanaypratap.repl.cotranslate/yoda.json"


function getText(text) {
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text=" + text;
  }
  


 function errorHandler(error) {

 apiCallMessage.innerText = error;
 }

apiBtn.addEventListener("click" , () => {

    fetch(Serverurl)
    .then(response => response.json())
    .catch(errorHandler)

})