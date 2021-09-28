/* a function running prallel with other function call asynchronous function
 
 when one function has to wait for  other function (wait for load file)   */


 let displayasync = document.querySelector("#async")

//   function myfunction() {

//     displayasync.innerHTML = "hello i am  asyncshubham"
//     displayasync.style.color = "brown"

//   }


  setTimeout(  function () {myfunction('i am shubham')}, 3000)

  function myfunction( value) {

  displayasync.innerHTML = value
  displayasync.style.color = "brown"

  }


