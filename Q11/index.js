const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
const outputContainer = document.querySelector('#output-container');

password.addEventListener('input', () => {
    let passwordValue = password.value;
    let length = passwordValue.length;
    outputContainer.innerText = length;

    if(length > 10) {
        submit.disabled = false;
        password.style.border= '2px solid green';
        password.style.outline= 'none';
        outputContainer.innerText = "Great!";
    }

    if(length <= 10) {
        submit.disabled = true;
        password.style.border= '2px solid red';
        password.style.outline= 'none';
        outputContainer.innerText = "Oh no! Password should be greater than 10 characters long.";
    }

})