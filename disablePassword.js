// Someone can ask to make the submit button disabled.



const passwordValue = document.querySelector("#passwordValue")
const repasswordValue= document.querySelector("#repasswordValue")
const btnEl = document.querySelector("#btn-EL")



if(passwordValue.value === repasswordValue.value) {

    btnEl.disabled = true
}

else {
    btnEl.disabled = false;
}