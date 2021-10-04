// Someone can ask to make the submit button disabled.

const inputEL = document.querySelector("#input-ELement");
const btnElment = document.querySelector("#btnCheck");
const paraDisplay = document.querySelector("#paraDisplay");


// btnElment.addEventListener('click', () => {

//     paraDisplay.innerText = inputEL.value
// })

//  inputEL.addEventListener("click", () => {

//     if (inputEL.value.length < 10) {
//         btnElment.disabled = true;
// } 
//       else {
//         btnElment.disabled = false;
//       }
      

// })

inputEL.addEventListener("input" , () => {

  if(inputEL.value.length > 10) {

    btnElment.disabled = true
  }

  else {

    btnElment.disabled = false
  }
})