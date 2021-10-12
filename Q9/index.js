const outputContainer = document.querySelector('#output-container');

console.log(outputContainer);

const url401 = 'https://unitube-server.herokuapp.com/playlists';
const url404 = 'https://jsonplaceholder.typicode.com/dummyUsers';

async function fetchURL(url) {
        try{const response = await fetch(url);
        const data = await response.json();
        console.log(response, data);

        if (response.status === 401) {
            throw new Error('you are not logged in\n');
        } else if(response.status === 404){
            throw new Error('page not found\n');
        } else{        
           throw new Error(`${response.status} - ${data.message}\n`);  
        }  }    catch(error) { 
            outputContainer.innerText += error;
        }
}

fetchURL(url401);
fetchURL(url404);