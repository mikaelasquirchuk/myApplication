const weatherBaseURL = `https://api.darksky.net/forecast`;
const APIString = process.env.API_KEY3;

const currentLocationSpan = document.querySelector("#current-location");

let currentLocation = 0;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  let latitude = Math.round(position.coords.latitude * 10000) / 10000;
  let longitude = Math.round(position.coords.longitude * 10000) / 10000;
  currentLocation = `${latitude},${longitude}`;
  let weatherURL = `${weatherBaseURL}/${APIString}/${currentLocation}`;
  fetch(weatherURL, { mode: "no-cors" })
    .then(response => response.json())
    .then(function(data) {
      console.log(data);
    });
}

function getWeather() {}

module.exports = {
  getLocation: getLocation,
  getWeather: getWeather
};
