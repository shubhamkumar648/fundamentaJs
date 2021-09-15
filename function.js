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
    
    