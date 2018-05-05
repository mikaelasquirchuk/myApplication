const guardianOutput = document.querySelector(`#guardian-output`);

const baseURL = 
`https://content.guardianapis.com/search`;
const APIString = `api-key=${process.env.API_KEY}`;

let today = new Date(); 
today = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
const URL = `${baseURL}?from-date${today}&${APIString}`;


const logResults = function() {
  fetch(URL)
  .then(response => response.json())
  .then(function(data){
    printOut(data.response.results);
  })
}

const printOut = function(array) {
  console.log(array[0]);
  const newsHTML = array.reduce(function(allItems, newsItem) {
    return allItems + `<a href="${newsItem.webUrl}" target="_blank"><li>${newsItem.webTitle}</li></a>`
  }
  ,``);
  guardianOutput.innerHTML = `<ul>${newsHTML}</ul>`
}

module.exports = {
  logResults: logResults
};