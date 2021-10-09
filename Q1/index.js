const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const btnAdd = document.querySelector('#btn-add');
const btnSubtract = document.querySelector('#btn-subtract');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const outputContainer = document.querySelector('#output-container');

btnAdd.addEventListener('click', () => {
    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const result = firstNumberValue + secondNumberValue;
    outputContainer.innerText = result;
});

btnSubtract.addEventListener('click', () => {
    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const result = firstNumberValue - secondNumberValue;
    outputContainer.innerText = result;
});

btnMultiply.addEventListener('click', () => {
    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const result = firstNumberValue * secondNumberValue;
    outputContainer.innerText = result;
});

btnDivide.addEventListener('click', () => {
    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const result = firstNumberValue / secondNumberValue;
    outputContainer.innerText = result;
});