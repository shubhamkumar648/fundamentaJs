// Here’s an API. Fetch the name and age of user and show them on the web page. Now check weather the user is eligible for vaccination ( must be above 45 ). If yes, show the name in green colour. API 

const userName = document.querySelector('#user-Name');

const userAge = document.querySelector('#user-Age');

const apicallBtn = document.querySelector("#apiCall-btn")

let url = 'https://randomuser.me/api/?results=10'



apicallBtn.addEventListener( "click",()=> {

    fetch(url)
    .then(response => response.json())
    .then(json => setData(json.results))
     .catch(error => console.error("not fetching  api.." +error))

})