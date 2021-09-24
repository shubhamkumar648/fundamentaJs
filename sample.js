// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. 
// And then print who has the highest marks.  What if I ask you to print the average as well?


// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

  var Person = [
      {
    name:  "Treta",
    age:   25,
    yuga: "Ram"
          },

   {
       name: "krishna",
       age:  31,
       youga: "dwapar"

   }       
]



function elderAge() {

    let moreAge = 0

    let personName = ""

for( let i = 0; i<Person.length;i++) {
    
    if(Person[i].age > moreAge ){

        personName = Person[i].name

        moreAge = Person[i].age

    }

}

console.log(personName + " whic age is "+ moreAge);

}

elderAge()