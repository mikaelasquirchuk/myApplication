const backgroundAPIURL = "https://pixabay.com/api/";

const params = `?key=${process.env.API_KEY2}&q=texture&category=nature&colors=grayscale&image_type=photo&safe_search=true&min_width=1000`;
const URL = backgroundAPIURL + params;
const setBackground = function() {
    fetch(URL)
    .then(response => response.json())
    .then(function(data) {
        let number = parseInt(Math.floor(Math.random() * 20));
        console.log(data.hits[number]);
        let backgroundImage = data.hits[number].webformatURL;
        console.log(backgroundImage);
        document.body.style.background=`url('${backgroundImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize=`cover`;
    });
};

module.exports = {
    setBackground: setBackground
};