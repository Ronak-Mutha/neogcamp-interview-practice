const inputName = document.querySelector("#input-name");
const fetchData = document.querySelector("#btn-name");
const outputContainer = document.querySelector("#output-container");

const url = "https://jsonplaceholder.typicode.com/users";

function clearOutput() {
    while(outputContainer.firstChild) {
        outputContainer.removeChild(outputContainer.firstChild);
    } 
};

function constructURL(inputText) {
  const encodedURI = encodeURI(inputText);
  return `${url}?text=${encodedURI}`;
}

fetchData.addEventListener("click", () => {
  const name = inputName.value;
  const finalURL = constructURL(name);
  console.log(finalURL);
  fetch(url)
    .then((response) =>{
        console.log(response);
        json = response.json();
        console.log(json);
        return json;
    })
    .then((json) => {
        clearOutput();
        outputContainer.style.color = "coral";
        json.forEach((user, index) => outputContainer.innerText += `${index+1}. ${user.name.toUpperCase()} \n`)})
    .catch((error) => (outputContainer.innerHTML = error));
});
