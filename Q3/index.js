const inputText = document.querySelector("#input-text");
const btnH1 = document.querySelector("#btn-h1");
const btnH2 = document.querySelector("#btn-h2");
const btnH3 = document.querySelector("#btn-h3");
const outputContainer = document.querySelector("#output-container");

btnH1.addEventListener('click', () => {
    let inputTextValue = inputText.value;
    outputContainer.innerHTML = `<h1> ${inputTextValue}</h1>`;
});

btnH2.addEventListener('click', () => {
    let inputTextValue = inputText.value;
    outputContainer.innerHTML = `<h2> ${inputTextValue}</h2>`;
});

btnH3.addEventListener('click', () => {
    let inputTextValue = inputText.value;
    outputContainer.innerHTML = `<h3> ${inputTextValue}</h3>`;
});