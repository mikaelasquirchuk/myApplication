const currentTime = document.querySelector("#current-time");
const getCurrentTime = function() {
    let today = new Date(); 
    let seconds = today.getSeconds();
    let minutes = today.getMinutes();
    if (seconds < 10){
        seconds = `0${seconds}`;
    }
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    today = `${today.getHours()}:${minutes}:${seconds}, ${today.getDate()}/${today.getMonth()+1}`;
    currentTime.innerText=today;
};

module.exports = {
    getCurrentTime: getCurrentTime
};
  