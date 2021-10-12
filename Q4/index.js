const inputText = document.querySelector("#input-text");
const btnRed = document.querySelector("#btn-red");
const btnGreen = document.querySelector("#btn-green");
const btnBlue = document.querySelector("#btn-blue");
const outputContainer = document.querySelector("#output-container");

inputText.addEventListener('input', () => {
   let text = inputText.value
    outputContainer.innerText = text;
});

btnRed.addEventListener('click', () => {
    let text = inputText.value;
    outputContainer.style.color = 'red';
    outputContainer.innerText = text;
});


btnGreen.addEventListener('click', () => {
    let text = inputText.value;
    outputContainer.style.color = 'green';
    outputContainer.innerText = text;
});


btnBlue.addEventListener('click', () => {
    let text = inputText.value;
    outputContainer.style.color = 'blue';
    outputContainer.innerText = text;
});