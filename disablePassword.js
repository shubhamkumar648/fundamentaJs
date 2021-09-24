// Someone can ask to make the submit button disabled.



const passwordValue = document.querySelector("#passwordValue")
const repasswordValue= document.querySelector("#repasswordValue")
const btnEl = document.querySelector("#btn-EL")

btnEl.disabled = true


if(passwordValue.value === repasswordValue.value) {

}

else {

    console.log("false");
}