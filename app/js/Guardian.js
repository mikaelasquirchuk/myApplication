const guardianOutput = document.querySelector(`#guardian-output`);
const guardianSections = document.querySelector(`#guardian-section-dropdown`);
const guardianButton = document.querySelector(`#guardian-section-button`);

const baseURL = 
`https://content.guardianapis.com`;
const APIString = `api-key=${process.env.API_KEY}`;

let today = new Date(); 
today = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`

const searchURL = `${baseURL}/search?from-date${today}&${APIString}`;
const logResults = function() {
  fetch(searchURL)
  .then(response => response.json())
  .then(data => printOutLinks(data.response.results));
}
const printOutLinks = function(arrayLinks) {
  const newsHTML = arrayLinks.reduce(function(allItems, newsItem) {
    return allItems + `<a href="${newsItem.webUrl}" target="_blank"><li>${newsItem.webTitle}</li></a>`
  }
  ,``);
  guardianOutput.innerHTML = `<ul>${newsHTML}</ul>`
}

const sectionURL = `${baseURL}/sections?${APIString}`;
const logSections = function() {
  fetch(sectionURL)
  .then(response => response.json())
  .then(data => printOutSections(data.response.results))
}
const printOutSections = function(arraySections){
  const sectionHTML = arraySections.reduce(function(allItems, sectionItem) {
    return allItems + `<option value="${sectionItem.id}">${sectionItem.webTitle}</option>`
  });
  guardianSections.innerHTML = `
  <option value="Select a section">Select a section</option>
  ${sectionHTML}
  `;
};

const logSelectedSections = function() {
  const selected = guardianSections.options[guardianSections.selectedIndex].value;
  let newURL = `${baseURL}/search?from-date${today}&section=${selected}&${APIString}`;
  fetch(newURL)
  .then(response => response.json())
  .then(data => printOutLinks(data.response.results));
};


module.exports = {
  logResults: logResults,
  logSections: logSections,
  logSelectedSections:logSelectedSections
};
