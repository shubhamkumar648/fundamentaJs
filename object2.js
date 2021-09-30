// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

let readlineSync = require("readline-sync");
let chalk = require("chalk")




let numberofStudent = readlineSync.question(chalk.yellow("enter the number of student "))

 let highestMarks = 0; 
  let name = '';


for( let i=0; i < numberofStudent; i++ ) {

let studentName = readlineSync.question(chalk.yellow("enter the No  "+ [i+1] + " Student  name: "))

let unitTestMarks=Number(readlineSync.question(chalk.yellow(" enter unit test MArk ")))

let preFinalMarks =Number(readlineSync.question(chalk.yellow("enter the preFinalMarks of student ")))

let finalMarks =Number(readlineSync.question(chalk.yellow("enter the FinalMarks of student ")))


let totalMarks = (chalk.blue(unitTestMarks + preFinalMarks + finalMarks))

// let average = (chalk.green(totalMarks / 3));
  // let averageMarks = totalMarks / 3;

console.log(" total marks " + totalMarks)
// console.log(" average marks " + averageMarks)




if(totalMarks > highestMarks) {

  highestMarks = totalMarks;
  name = studentName;
 
}

console.log(" heighestMark is " + highestMarks + "and name is " + name)
  
}
