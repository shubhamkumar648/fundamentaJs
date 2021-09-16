//1. Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

//using arrow function (es6)

// let a = Number(prompt("enter number 1"))
// let b = Number(prompt("enter second number"))
const InputNumber = (a, b) => a + b;
console.log("the sum of two number is " + InputNumber(20, 40));

//2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

const simpleIntrest = (p, r, t) => {
  let SI = parseInt((p * r * t) / 100);
  return SI;
};

console.log("the simple interest given P,R,T is:" + simpleIntrest(100, 6, 2));

//3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
// Formula : 0.5 * m * v * v

const kineticEnergy = (m, v) =>
  console.log("the kinetic energy of a body with mass is: " + 0.5 * m * v * v);
kineticEnergy(4, 2);

//4. Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// Input: 56
// Output: 13.33333

const convertFhtoCelicus = (F) => {
  celicus = (parseFloat(F - 32) * 5) / 9;

  return celicus;
};

console.log("temprature of Fahrenheit to celsius is:" + convertFhtoCelicus(56));

//5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a

// let a = parseInt(prompt("enter a number"))
let a;
let area = a * a;
let perimeter = 4 * a;
let surfaceArea = 6 * a * a;
let volume = a * a * a;

console.log("\n result of Areais :" + area);
console.log("\n Area of Perimeter:" + perimeter);
console.log("\n Surface Area:" + surfaceArea);
console.log("\n Volume:" + volume);

//6 Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
// Input: CP = 1500, SP = 2000
// Output: 500 Profit
// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// let CP = prompt("enter a cost price number")
// let SP = prompt("enter a  selling price number")

function profitLoss(CP, SP) {
  let Loss = CP - SP;
  let profit = SP - CP;

  if (SP > CP) {
    return console.log(" you are profit with Rs:" + profit);
  } else {
    return console.log(" you are loss with Rs:" + Loss);
  }
}

profitLoss(1500, 2000);

//7. Write a program to calculate sum of N natural digits, as input by the users?
// Enter a positive integer: 100
// Sum = 5050

let n = Number("enter a number");
function naturalNumber() {
  let Sum = (n * (n + 1)) / 2;
  return Sum;
}
console.log(naturalNumber());

//using loop

function naturalNo(num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
}

console.log(naturalNo(100));

// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1111

let num = "enter a number";
for (let i = 1; i <= num; i++) {
  result = 2 * i - 1;

  console.log(result);
}

// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

//note: there are two method you can solve using number and and also using string method

//string method using modern array method(i.e map and reduce) and es6 arrow function
let input = 1234,
  resultant = input
    .toString()
    .split("")
    .map(Number)
    .reduce((c, d) => c + d, 0);

console.log(resultant);

// Write a JavaScript program that reverses a number.

// Example:
// Input:  32243;
// Output:  34223

function reverseNum(n1) {
  let result = parseFloat(n1.toString().split("").reverse().join(""));

  return result;
}
console.log(reverseNum(32243));
// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-
// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

// Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101
// Follow up Question : Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in
