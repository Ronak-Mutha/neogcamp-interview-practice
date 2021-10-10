const inputText = document.querySelector("#input-text");
const btnIncreaseFontSize = document.querySelector("#btn-increase-font-size");
const btnDecreaseFontSize = document.querySelector("#btn-decrease-font-size");
const outputContainer = document.querySelector("#output-container");

btnIncreaseFontSize.addEventListener("click", () => {
  let style = window
    .getComputedStyle(outputContainer, null)
    .getPropertyValue("font-size");
  let currentFontSize = parseFloat(style);
  outputContainer.innerText = inputText.value;
  outputContainer.style.fontSize = currentFontSize + 2 + "px";
});

btnDecreaseFontSize.addEventListener("click", () => {
  let style = window
    .getComputedStyle(outputContainer, null)
    .getPropertyValue("font-size");
  let currentFontSize = parseFloat(style);
  outputContainer.innerText = inputText.value;
  outputContainer.style.fontSize = currentFontSize - 2 + "px";
});
