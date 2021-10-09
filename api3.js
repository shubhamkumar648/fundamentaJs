// Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.

const apiResponse = document.querySelector("#api-Response");

const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function apiStatus() {
  fetch(serverUrl)
    .then((response) => {
        console.log(response.status);

      if(response.status === 404) {
        console.log("page not found");
      } 
      else if(response.status === 401) {
        console.log("you are not logged in");
      }
      
    })
   
    .then(json => console.log(json))
    // .then( response => response.json())
    // .catch((error) => console.error("fail to fetch error",error));

}

apiResponse.addEventListener("click", apiStatus);

