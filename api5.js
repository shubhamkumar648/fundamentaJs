// Here's an API (Link: https://mystery-api.kushanksriraj.repl.co/get) , it can give two errors. Either 404, or 401 . If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'. Followup question: If the status is 200 then show the message : API is working (Done using Vanilla JS by Lakshay)

const apiBtncall = document.querySelector("#apiBtncall")

let urlApi = "https://mystery-api.kushanksriraj.repl.co/get"




apiBtncall.addEventListener("click", () => {

 fetch(urlApi)
    .then((response) => {
        
        if(response.status === 404) {
                   console.log("page not found");
                    }

        else if(response.status === 401) {
         console.log("you are not loged in");
        }

        else {
            console.log("error");
        }
    })  
    
    // .then(json => console.log(json))
})
