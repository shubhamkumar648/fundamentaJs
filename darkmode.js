
// Create a web app to simulate the dark mode functionality. On clicking the button, background color should change from WHITE to GREY and vice-versa.




const divContainer = document.querySelector("#div-Container")

const darkBtn = document.querySelector('#dark-btn')



darkBtn.addEventListener("click", () => {

    // divContainer.style.backgroundColor = "grey"
    document.body.style.backgroundColor = "grey";
})