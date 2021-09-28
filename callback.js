
//calling a funtion as an argument in to another function  called callback function

const displaycallBack = document.querySelector("#callBack")

function Mydisplay (output) {

displaycallBack.innerText = output

console.log(`   calculator sum is: ${output}`);

}

function calculator(num1,num2,mycallBack) {

    let sum = num1+num2;
    mycallBack(sum)
}

calculator(5,2,Mydisplay)





   