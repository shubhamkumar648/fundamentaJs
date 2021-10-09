
var inputEL2 = document.querySelector("#input-El2")
var buttonEl2 = document.querySelector("#button-El2")

var showOutput6 = document.querySelector("#show-Output6")



buttonEl2.addEventListener("click" , () => {

        var inputDisplay = inputEL2.value.length

        if(inputDisplay % 2 == 0) {

            showOutput6.style.color = "green"
           showOutput6.innerText = inputDisplay

        } 

        else {
            showOutput6.style.color = "red"
            showOutput6.innerText = inputDisplay


        }

})