const timeBox = document.querySelector(".js-time");
const timeTitle = timeBox.querySelector("h1");

function LoadTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    timeTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;

}


function init() {
    LoadTime();
    setInterval(LoadTime, 1000);
}

init();