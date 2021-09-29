//---------------- Beginner to Intermediate
// Write a program that converts the string into uppercase

function Uppercase(str) {
  return str.toUpperCase();
}

console.log(Uppercase("shubham"));

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

function concatString(str1, str2) {
  return str1 + str2;
}
console.log(concatString("Good", "Mornng"));

// Program that reads string and count number of characters present in the string

let str = "just Do it";
console.log(str, str.length);

// Write a program that converts string like "124" to 124

function convertString(value) {
  return parseFloat(value);
}
console.log(convertString("124"));

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

function deleteVowel(input) {
  if (input.length <= 80) {
    return input.replace(/[aeiou]/gi, "");
  } else {
    console.log(
      " you input value is exceed  it should be equal or less than 80"
    );
  }
}
console.log(
  deleteVowel(
    " a string and return true if the length is greater than 7 without using strlenm"
  )
);

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

function aplhaNUmerric(str) {
  var Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

  //   if(str.match(Exp)) {
//     console.log( " it is alphanumeric");
  //   }
  //   else {
  //     console.log( " not alphanumeric");
  //   }
 
  // using terniary operator es6
  return str.match(Exp) ? "it is numeric" : " it not alphanumeric";
}
console.log(aplhaNUmerric("123sk"));

// A program that reads three strings and prints the longest and smallest one




// A program that counts number of vowels and consonants in a String?

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// Write a program that takes two strings and copies smaller string into bigger string

// Given a string, determine if it is a palindrome, considering only alphanumeric characters

// For a given input string(str), write a function to print all the possible substrings.Without using substr method

// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
