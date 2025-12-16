let khyn = "khyn";
console.log(khyn);

const timeEl = document.querySelector('#time');
const startBtnEl = document.querySelector('#start-btn');
const lapBtnEl = document.querySelector('#lap-btn');
const stopBtnEl = document.querySelector('#stop-btn');
const lapItemsEl = document.querySelector('#laps');

let initialTime = 0;
let lapTime = 0;
let timerId = null;
let isActiveTimer = false;
let countOfLaps = 0;

function formattingTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const othersSeconds = Math.floor((ms % 1000) / 10);

    return (`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(othersSeconds).padStart(2, "0")}`);
};


function updateTime() {
    lapTime = Date.now() - initialTime 
    timeEl.textContent = formattingTime(lapTime)
}