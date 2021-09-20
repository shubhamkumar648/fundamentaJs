const textInput = document.querySelector("#text-Input");
const submitInputbtn = document.querySelector("#submit-Input");
const showOutput = document.querySelector("#show-Output");
const heading1 = document.querySelector("#h1");
const heading2 = document.querySelector("#h2");
const heading3 = document.querySelector("#h3");

submitInputbtn.addEventListener("click", () => {
  showOutput.innerHTML = textInput.value;
  showOutput.style.fontWeight = "bolder";
});

heading1.addEventListener("click", () => (showOutput.style.fontSize = "32px"));
heading2.addEventListener("click", () => (showOutput.style.fontSize = "24px"));
heading3.addEventListener("click",() => (showOutput.style.fontSize = "18.72px"));
