const weatherBaseURL = `https://api.darksky.net/forecast/`;
const APIString = process.env.API_KEY3;

const weatherURL = `${weatherBaseURL}${APIString}/${location}`;

// const getWeather = function() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       console.log(`${position.coords.latitude},${position.coords.longitude}`)
//     );
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// };

let location = 0;
function getLocation() {
  if (navigator.geolocation) {
    location = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  return `${position.coords.latitude},${position.coords.longitude}`;
}

function getWeather() {
  console.log(location);
}
module.exports = {
  getLocation: getLocation,
  getWeather: getWeather
};
