const outputContainer = document.querySelector('#output-container');

console.log(outputContainer);

const url = 'https://mystery-api.kushanksriraj.repl.co/get';

async function fetchURL(url) {
    try {
        const response = await fetch(url);
        
        const data = await response.text();
        console.log(response, data);
        if (response.ok) {
            outputContainer.innerText = data;
        } else {        
            throw new Error(`${response.status} occured - ${data}`);       
        }
    } catch(error) {
        outputContainer.innerText = error;
    }
}

fetchURL(url);