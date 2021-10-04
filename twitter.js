// Create a web app to simulate the character counter functionality of Twitter. When user starts to type something, counter should starts to decrease from 30. When counter reaches to 15, show it in yellow till 0. When counter reaches to 0, show it in red till infinite -ve number ( no min limit ). Now create a button. On clicking the button, show the input text on web page. Also, when counter is less than 0, disable the button.

const tweetCounter = document.querySelector("#tweet-Count")

const tweetInput = document.querySelector('#tweet-Input')

const  tweetBtn = document.querySelector("#tweet-Btn")

const tweetDisplay = document.querySelector('#tweet-Display')

  let temp = 30 

 tweetInput.addEventListener ('input',() => {

        temp--;
      if(tweetInput.value.length > 15 && tweetInput.value.length < 30 ) {
     
      tweetCounter.innerHTML = temp;
      tweetCounter.style.color = "yellow";
  }


  else if(tweetInput.value.length > 30 )  {

    tweetCounter.innerHTML =temp;
    tweetCounter.style.color = "red";
    tweetBtn.disabled = true;

  }
    else {

        tweetCounter.innerHTML =temp;
    }
 })

tweetBtn.addEventListener('click' ,() => {

     tweetDisplay.innerText = tweetInput.value

})