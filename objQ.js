// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

// Write a function which takes two objects and return the person with more power based on their name and power both.

let personDetail = [
  {
    name: "Ram",
    age: "Treta",
    power: 2500,
  },

  {
    name: "Krishna",
    age: "Dwapar",
    power: 2325,
  },

];


let powerfull = 0
let powerfullName = "" * 35;

function Person () {

// for ( let i = 0 ; i<personDetail.length; i++) {

//     console.log(personDetail[i]);
// }

 for (let personDetails  of personDetail) {

 if(personDetails.power > powerfull) {

  powerfull = personDetails.power
  powerfullName = personDetails.name

}

}
console.log(` ${powerfull} + ${powerfullName}`);

}


Person()


