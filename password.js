// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.


let PasswordEL = document.querySelector("#pass-word")

let PassCheck   = document.querySelector("#Passcheck")
PassCheck.addEventListener("click" ,() => {

    let PasswordLength = PasswordEL.value



    if(PasswordLength.length < 10){

        console.log("you password must be greater than 10 charachter");
        
    }
 
      else {

            console.log("suceess");
       }

})