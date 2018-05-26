const guardianAPI = require("./Guardian");
const guardianButton = document.querySelector(`#guardian-section-button`);

guardianAPI.logResults();
setInterval(guardianAPI.logResults, 10000);

guardianAPI.logSections();

guardianButton.addEventListener("click", guardianAPI.logSelectedSections);

const setBackground = require("./Background");
const backgroundButton = document.querySelector("#change-background");
setBackground.setBackground();

backgroundButton.addEventListener("click", setBackground.setBackground);

const pageLoad = require("./Interface");

setInterval(pageLoad.getCurrentTime, 1000);

const getWeather = require("./Weather");
getWeather.getLocation();
