
// Create a web app where I can input a text. Now create two buttons + and -. 
// On clicking + increase the fontSize by 2px and vice versa.


const increment = document.querySelector("#increase");
const decrement = document.querySelector("#decrease");

const display = document.querySelector("#countDisplay");

let count = 0;

// using es6 arrow function
const counter = () => {
  count = count + 1;
display.innerHTML = count;
};
increment.addEventListener("click", counter);


decrement.addEventListener("click", function cunterMinus() {
  count = count - 1;
  display.innerHTML = count;
});
