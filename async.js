/* a function running prallel with other function call asynchronous function
 
 when one function has to wait for  other function (wait for load file)   */

 //example

let displayasync = document.querySelector("#async")

  function myfunction() {

    displayasync.innerHTML = "hello i am  async shubham"
    displayasync.style.color = "brown"

  }


  setTimeout( myfunction, 3000)