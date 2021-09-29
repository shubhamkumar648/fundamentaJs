
//calling a funtion as an argument in to another function  called callback function

const displaycallBack = document.querySelector("#callBack")

function Mydisplay (output) {

displaycallBack.innerText = output

console.log(`calculator sum is: ${output}`);

}

function calculator(num1,num2,mycallBack) {

    let sum = num1+num2;
    mycallBack(sum)
}

calculator(5,2,Mydisplay)


// second practice of call back 

function Information(question,name,designation) {

    console.log(question,name(),designation());

}

function infoName() {

   return ("my name is shubham ");
}

function infoDesignation () {

     return (" i am frontend software devloer ");
}

// note : - when you pass a function as an argument remember not to use parenthesise () 
// Information(" tell me  your short intro? ", infoName() ,infoDesignation())  --- wrong  ❌❌
// Information(" tell me  your short intro? ", infoName ,infoDesignation) --- correct   ✔️✔️


Information(" tell me  your short intro? ", infoName ,infoDesignation)
// Information(" tell me  your short intro? ", () => "my name is shubham" ,() => " i am software devloper")
