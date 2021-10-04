let dummyBtn = document.querySelector('#dummy-btn')



function getData () {

 let url = "sk.txt"

fetch(url)
.then(response => response.text())
.then(data => console.log(data))

}

// function postData () {

// let url = "https://dummy.restapiexample.com/api/v1/create";
// let data =  '{"name":"sk42424","salary":"123","age":"23"}'

//  let params = {

//     method: 'post',

// headers:  {

//     "content-Type": "application/json"
// },

// body: data

// }

// fetch (url,params) 
// .then(response => response.json())
// .then(data => console.log(data))

// }




dummyBtn.addEventListener('click',getData)