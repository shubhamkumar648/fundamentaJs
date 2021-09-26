
// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

const fullName = document.querySelector("#fullName")

const responseBtn = document.querySelector('#response')

apiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

responseBtn.addEventListener("click" , () => {

    fetch(apiUrl)
    .then( response => response.json())
    .catch(error => console.error("unable to get item", error))
})