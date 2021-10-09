/*
q01
Given an array of objects of student's marks:

Print the name and total marks of each student.
Print the name of student whose total marks is highest.
Print the name of student whose total marks is lowest.
Print the average marks of the class in computer subject.
Print the grades of all students:
Grade A if total marks is higher than or equal to 75%,
Grade B if higher than or equal to 60%,
Grade C if higher than or equal to 35%,
Grade D if lower than 35%.
Print the total number of students passed and their names. Pass when total marks is greater than 35%.  

*/

const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },

  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

//Q-1.1 Print the name and total marks of each student.

//  for( let i = 0; i<=studentDetails.length;i++){

//      console.log(studentDetails[i].name);

//  }

/*  for(let studentDetail of studentDetails) {

    console.log(studentDetail.name);
  } */

//  let PrintName = studentDetails.map(studentName => studentName.name)    //using modern array method

// ---------------------  print total marks --------------------------

for (let i = 0; i < studentDetails.length; i++) {
  console.log(
    Number(
      studentDetails[i].computer +
        studentDetails[i].english +
        studentDetails[i].maths +
        studentDetails[i].science
    )
  );
}

//  2nd method to write function using forEach

/*
 studentDetails.forEach(studentDetail => {

    console.log("TOTAL marks:"+Number(studentDetail.computer+studentDetail.english+studentDetail.maths+studentDetail.science));   

 })   */

//  3rd method to write function using 'of' loop

//  for(let studentDetail of studentDetails) {

//     console.log("TOTAL marks:"+ Number(studentDetail.computer + studentDetail.english + studentDetail.maths + studentDetail.science));

//  }

//  Print the name of student whose total marks is highest.

let heigestMark = 0;
let nameofStudent = "";

studentDetails.forEach((studentsMarks) => {
  let totalMark = Number(
    studentsMarks.computer +
      studentsMarks.english +
      studentsMarks.maths +
      studentsMarks.science
  );

  if (totalMark > heigestMark) {
    heigestMark = totalMark;
    nameOfStudent = studentsMarks.name;
  }
});

console.log(nameOfStudent + "is height markwhich  is:" + heigestMark);

//1.3  Print the name of student whose total marks is lowest.

//------ not complete

//1.4 Print the average marks of the class in computer subject.

let totalMarkofComputer = 0;

for (let i = 0; i < studentDetails.length; i++) {
  totalMarkofComputer = totalMarkofComputer + studentDetails[i].computer / 4;

  // let AvgMarkOfComputer = (studentDetails[i].computer)

  console.log(totalMarkofComputer);
}

/* Q 1.5 ->Print the grades of all students:
Grade A if total marks is higher than or equal to 75%,
Grade B if higher than or equal to 60%,
Grade C if higher than or equal to 35%,
Grade D if lower than 35%.
let totalMarks, percentage  */

for (let studentDetail of studentDetails) {
  totalMarks = Number(
    studentDetail.computer +
      studentDetail.english +
      studentDetail.maths +
      studentDetail.science
  );

  percentage = parseFloat((totalMarks / 400) * 100);

  if (percentage >= 75) {
    console.log(percentage + "% GRADE: A");
  } else if (percentage >= 60) {
    console.log(percentage + " % GRADE: B");
  } else if (percentage >= 35) {
    console.log(percentage + "% GRADE: C");
  } else if (percentage < 35) {
    console.log(percentage + " % GRADE: F");
  }
  // Print the total number of students passed and their names. Pass when total marks is greater than 35%.
  //use triany operator here
  percentage > 35
    ? console.log("PASS :congrtaulation " + studentDetail.name)
    : console.log(" Fail: Better luck next time " + studentDetail.name);
}

// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

var Person = [
  {
    name: "Treta",
    age: 25,
    yuga: "Ram",
  },

  {
    name: "krishna",
    age: 31,
    yuga: "dwapar",
  },
];

function elderAge() {
  let moreAge = 0;

  let personName = "";

  for (let i = 0; i < Person.length; i++) {
    if (Person[i].age > moreAge) {
      personName = Person[i].name;

      moreAge = Person[i].age;
    }
  }

  console.log(personName + " whic age is " + moreAge);
}

elderAge();

// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.


let PowerfullPersons = [
  {
    name: "Treta",
    power: 2500,
    yuga: "Ram",
  },

  {
    name: "krishna",
    power: 2325,
    yuga: "dwapar",
  },
];


function personWithPower() {

  let MorePower = 0;
  let PersonName = "";

  for (let PowerfullPerson of PowerfullPersons) {



    if (PowerfullPerson.power > MorePower) {

      MorePower = PowerfullPerson.power;
      PersonName = PowerfullPerson.name

    }
  }

  console.log(" more power has " + PersonName + " and his power has " +  MorePower);
}

personWithPower();


// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.


let YugaPersons = 
  {
    name: "Treta",
    power: 2500,
    yuga: "Ram",
  }

  let dawparPerson = 
  {
    name: "krishna",
    power: 2325,
    yuga: "dwapar"
  }




function MorePowerbasedOnBoth (one,two) {

  let powerOne = Number(one.name.length)*35
  let powerTwo = Number(two.name.length)*35

  if (powerOne > powerTwo) {

    return one
  }

  else {
    return two
  }

}

let morePowerName =  MorePowerbasedOnBoth(YugaPersons,dawparPerson)

console.log(` more power Name is + ${morePowerName.name} `);

