// Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.

// const inputEl = document.querySelector("#text-input");
// const btnEl = document.querySelector("#btnClick");
// const displayOutput = document.querySelector("#displayOutput");

// btnEl.addEventListener("click", () => {
//   let inputText = inputEl.value;

//   let reverseString = inputText.split("").reverse().join("");

//   displayOutput.innerText = reverseString;
// });

// Q. Put a paragraph on web with 16px font size. Now Increase the font size by 4px and vice-versa with the help of two buttons. Now change the colour of paragraph to RED when font size is divisible by 5. ( This question was given by Pranshu (neoGrad) in my mock interview)

const inputTextEl = document.querySelector("#input-text");
const checkBtnEl = document.querySelector("#check-btn");
const plusBtn = document.querySelector("#plus");
const MinusBtn = document.querySelector("#minus");
const textDisplayEl = document.querySelector("#textDisplay");
// const fontDisplay = document.querySelector("#font-Display")

let num = 16;

checkBtnEl.addEventListener("click", () => {
  textDisplayEl.innerText = inputTextEl.value;

  if (textDisplayEl.style.num % 5 === 0) {
    textDisplayEl.style.color = "red";
  } else {
    textDisplayEl.style.color = "green";
  }
});

plusBtn.addEventListener("click", () => {
  num = num + 4;
  textDisplayEl.style.fontSize = `${num}px`;
});

MinusBtn.addEventListener("click", () => {
  num = num - 4;
  textDisplayEl.style.fontSize = `${num}px`;
});

// // Create a game (Guess The Number) where user has to guess the random number range from 1 to 10. User will input a number between 1 to 10 . On clicking the button, show the user whether he/she has guess the number or not.

// // note:  this solution is incomplete i will solve using random method

// const userInputEl = document.querySelector("#user-Input");
// const userBtn = document.querySelector("#user-btn");
// const userOutput = document.querySelector("#userOutput");

// userBtn.addEventListener("click", () => {
//   if (Number(userInputEl.value) % 2 === 0) {
//     userOutput.innerText = "you guess right number";
//   } else {
//     userOutput.innerText = "you guess wrong number";
//   }
// });

// // 1. Create an array of 10 names. [ "Abhi", "Vishal","Aryan","John",.........upto 10 ]. Now create a button. On clicking the button, show one random name.
    
// const arrNameDisplay = document.querySelector("#click-user");
// const clickBtn = document.querySelector("#click-btn");

// let arr = [ "Abhi", "Vishal","Aryan","John","shubham","Raghav", "Punit", "Michael","harpreet","Sarukh"];

// console.log(arr);


// clickBtn.addEventListener("click", () => {


// // let displayarrList = arrNameDisplay.value.push(arr)
       
// displayarrList.innerText =  Math.floor(Math.random() * 10);
 

// })




// Create an array of 10 names. [ "Abhi", "Vishal","Aryan","John",.........upto 10 ]. Now create a button. On clicking the button, show one random name.

const arrNameDisplay = document.querySelector("#click-user");
const clickBtnEl = document.querySelector("#click-btn");

let arr = [ "Abhi", "Vishal","Aryan","John","shubham","Raghav", "Punit", "Michael","harpreet","Sarukh"];



clickBtnEl.addEventListener("click" , () => {
  let randomIndex = Math.floor(Math.random() * 10);

   arrNameDisplay.innerText = arr[randomIndex]
  })