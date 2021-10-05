// Create a password checker. When char goes above 10, input should become green. Now create a button. On clicking the button, show/hide the password. ( change ●●●●● to text and vice versa. ) HINT - you need to change the type of input field.

const inputCheck = document.querySelector("#input-check");

const hideShowButton = document.querySelector("#password-HideShow ");

inputCheck.addEventListener('input',  () => {

    if (inputCheck.value.length > 10) {

 inputCheck.style.backgroundColor ="green"

    }
})



hideShowButton.addEventListener("click",() => {

    if( inputCheck.type === "password") {

        inputCheck.type = "text"
        hideShowButton.innerText="hide"
    }

    else {

        inputCheck.type="password"
        hideShowButton.innerText="show"
    }
})
