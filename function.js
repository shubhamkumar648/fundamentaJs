//1. Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

function power (a,b) {

    let result = Math.pow(a,b)
    
     console.log(result)
    
    }
    
    power(2,3)
    
    //2. Given length of a regular hexagon, your function should return area of the hexagon.
    // Example:
    // Input: areaOfHexagon(10) ––> Output: 259.80
    
    // Hint: Area = (3 √3(n)2 ) / 2
    
    
    function arOfHexagon (side) {
    
    
     let   area =  parseFloat(3 * Math.sqrt(3) *(side * side)) / 2;  
    
     return area
    
    }
    
    console.log(arOfHexagon(10))
    
    
    
    //3. Given a sentence, your functions should return the number of words in the sentence.
    // Example:
    // Input: noOfWords(We are neoGrammers) ––> Output: 3
    
    
    
    
    function noOfWords(str) { 
      return str.split(" ").length;
    }
    
    console.log(noOfWords("We are neoGrammers"));
    
    // Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
    // Example:
    // Input: findMin(3,5) ––> Output: 3
    // Input: findMin(3,5,9,1) ––> Output: 1
    // (Hint: Lookup rest parameters in JavaScript)
    
    
    function findMin (...arg) {
    
    return  Math.min(...arg)
    }
    
    console.log(findMin(3,5,2,1,0,8))
    
    // Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
    // Example:
    // Input: findMax(3,5) ––> Output: 5
    // Input: findMax(3,5,9,1) ––> Output: 9
    // (Hint: Lookup rest parameters in JavaScript)
    
    function findMax (...arg) {
    
      let result = Math.max(...arg)
    
      return result
    }
    
    console.log(findMax(5,3,2))
    
    // Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
    // Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle
    
    function typesOfTriangle(a,b,c) {
    
    let sum = a+b+c ;
    if (sum ===180 && a!=b && b!= c && a!=c) {
    
      console.log("it is scalen triangle")
    }
    
    else if(sum === 180 && a == b && b == c && a == c) {
    console.log(" it is equilateral triangle")
    }
    
    else if(sum === 180 && a==b && b==a && a!==c && b!==c) {
    console.log(" it is isosceles triangle")
    }
    
    else {
    
      console.log("not at triangle at all")
    }
    
    }
    
    typesOfTriangle(60,60,60)
    
// -------------------- Medium---------------------------------------------

// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
         
   function ArrayOfLength(arr) {
       
     return arr.length
        
   }

   console.log(ArrayOfLength([1,5,3,7,8]));




// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

    function indexOfArr( arr,item) {

    return arr.indexOf(item)
    }
     
    console.log( indexOfArr([1,6,3,5,8,9], 3));


// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]


// function replaceArr(arr,n1,item) {

// //   return   array.splice(array.indexOf(valueToReplace), 1, newValue);
//   return  arr.splice(index,n1,item);
// }

// console.log(replaceArr([1,5,3,5,6,8],5,10));

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function  mergerArray(arr1,arr2) {

    let result = arr1.concat(arr2)
    
    return result
}
    
console.log(mergerArray([1,3,5] , [2,4,6]))
// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

function getChar(str,index) {

    return str.charAt(index)
}

console.log(getChar("neoGcamp" ,4));
    
// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

function minDate() {


}


//------------------------------------------ Advance

// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.




// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

    function toSentenceCase(string) {  
        return string.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
    }  


console.log(toSentenceCase(" we are neoGreammers"))

// function stringCapital(string) {

//     string.split(" ")

//     for( let i  = 0 ; i < string.length ; i++) {

//       string[i] =   string[i][0].toUpperCase()+ string[i].substring(1)
//     }
 
//     return string.join('')
// }


// console.log(stringCapital(" we are indians"));