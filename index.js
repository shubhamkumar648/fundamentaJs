//--------------Operators, Branching, Loops----------

//1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// function add(num1, num2, num3, num4, num5) {
//   let sum = num1 + num2 + num3 + num4 + num5;

//   return sum;
// }

//  document.write(add(3, 4, 5, 6, 7));

//----- Write a program to take a number input from user and determine whether the number is odd or even.

//  let num = ("enter a number")

// function oddEven() {

//     if(num % 2 ==0) {

//         document.write("\n ex2:-it is even number")
//     }

//     else {

//         document.write("\n ex2:it  is odd number")
//     }

//     return num
// }

// document.write(oddEven())

// 3.----- Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// let num1,num2,

// function Maxmin  (num1,num2)  {

//     if (num1 > num2 ) {

//        console.log(" it  is min");
//     }

//     else  {

//         console.log("num2  is max");

//     }

//     return num1,num2

// }

// console.log(Maxmin(129,51))

// // Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// let num1, num2, num3;

// function Max(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     console.log(" num1 is max");
//   } else if (num2 > num1 && num2 > num3) {
//     console.log("num2  is max");
//   } else {
//     console.log("num3 is max");
//   }

//   return num1, num2, num3;
// }

// console.log(Max(129, 51, 134));

//5. -----Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// let month = Number(prompt("eneter a month in number"))

// function knowDaysOfmonth () {

//     let year

//     if (month==1 || month ==3 ||month ==5|| month==7|| month ==8 || month ==10) {

//         console.log("day is 31");
//     }

//     else if(month ==2  &&  (year % 400 ==0 || year%4 ==0 && year%!100 == 0)) {

//         console.log("this month is  leap year  which is 29  days");

//     }
//     else if (month ==2 ) {

//         console.log("days is 28");
//     }

//     else {

//         console.log("days is 30");
//     }

// }

// knowDaysOfmonth()

//Q6:- Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// function FizzBuzz () {

// for(let i = 1; i<=100; i++) {

//     if( i % 3 ==0 && i  % 5 == 0) {
//         console.log("fizzbuzz");
//     }

//     else if ( i % 5 == 0 ) {

//         console.log("buzz");
//     }

//     else if  ( i % 3 ==0 ) {

//         console.log("fizz")
//     }

//     else {
//         console.log(i)
//     }
// }

// }

// FizzBuzz()

// Q7:- Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// let num = 5;
// let string = "";

// for (let i = 1; i <= num; i++) {
//   {
//     for (let j = 0; j < i; j++) {     //nested loop
//       string += "*";
//     }
//   }

//   string += "\n";
// }

// console.log(string);

//Q8:- Write a program to take a number input from user and print multiplication table 12 times for that number.

// let num2 = Number(prompt("enetr a number"))

// function multiply() {

// for(let num = 1; num<=12; num++){

//     console.log( num2 * num)
// }

// }

// multiply()

//Q9:- Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

//The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.

// const num = Number(prompt("enter a number"));

// function fibonicii() {
//   let a = 0,
//     b = 1,
//     c;

//   for (let i = 0; i <= num; i++) {
//     console.log(a);
//     document.write("<br>", a);
//     c = a + b;
//     a = b;
//     b = c;
//   }
// }

// fibonicii();

//Q10. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

//   const n = Number(prompt("enter a number"));

// function Factorial(num) {
//   if (num <=1) {
//     return 1;
//   } else {
//     return   (num * Factorial(num - 1));
//   }
// }

// console.log(Factorial(5))

// 2nd using  iteration method
// function factorial(){
//     let result = 1

//     if(n <=1){
//         return result;
//     }else{
//         for (let i = n; i>=1; i--){

//            result = result * i
//         }
//           return console.log(result)
//     }

// }

// factorial()

//Q11. ----------------------Write a Program to take a number input from user and find if the number is Prime or not.

const num = Number(prompt("enter a number"));


  
 isPrime = true;

  if (num ==1 ) {
    console.log(" it is  neither a prime nor compostie");

  } 
  else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i  == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("it is prime");
    } else {
      console.log(" number not prime");
    }
}
  
  else {
    console.log("please enter postive number");
  }

  

