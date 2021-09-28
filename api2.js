
// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

const fullName = document.querySelector("#fullName")

const responseBtn = document.querySelector('#response')

const apidisplayName = document.querySelector('#apiCallName')

 let apiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


function getText (text) {
    return apiUrl + "?" +"text=" + text;

}

responseBtn.addEventListener("click" , () => {

    let inputTextName = fullName.value
    fetch(getText(inputTextName))
    .then( response => response.json())
    .then( json => {apidisplayName.innerText = json.contents.text})
    .catch(error => console.error("unable to get item", error))
})

