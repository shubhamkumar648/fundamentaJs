
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
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];


/*
 for( let i = 0; i<=studentDetails.length;i++){
    
     console.log(studentDetails[i].name);

 }
 */


/*  for(let studentDetail of studentDetails) {

    console.log(studentDetail.name);
  } */

 let PrintName = studentDetails.map(studentName => studentName.name)    //using modern array method
