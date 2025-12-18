// let khyn = "khyn";
// console.log(khyn);

const timeEl = document.querySelector("#time");
const startBtnEl = document.querySelector("#start-btn");
const lapBtnEl = document.querySelector("#lap-btn");
const resetBtnEl = document.querySelector("#stop-btn");
const lapItemsEl = document.querySelector("#laps");

let initialTime = 0;
let lapTime = 0;
let timerId = null;
let isActiveTimer = false;
let countOfLaps = 0;

function formattingTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const othersSeconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}.${String(othersSeconds).padStart(2, "0")}`;
}

function updateTime() {
  lapTime = Date.now() - initialTime;
  timeEl.textContent = formattingTime(lapTime);
}

startBtnEl.addEventListener("click", () => {
  if (!isActiveTimer) {
    initialTime = Date.now() - lapTime;
    timerId = setInterval(updateTime, 10);
    isActiveTimer = true;
    startBtnEl.textContent = "Pause";
    lapBtnEl.disabled=false
  } else {
    clearInterval(timerId);
    isActiveTimer = false;
    startBtnEl.textContent = "Start";
  }
});

lapBtnEl.addEventListener("click", () => {
  countOfLaps += 1;

  const li = document.createElement("li");
  li.textContent = `Lap ${countOfLaps}: ${formattingTime(lapTime)}  `;
  lapItemsEl.appendChild(li);
  initialTime = Date.now();
  lapTime = 0;
  timeEl.textContent = "00:00:00";
});

resetBtnEl.addEventListener("click", () => {
  clearInterval(timerId);
  initialTime = 0;
  lapTime = 0;
  isActiveTimer = false;
  countOfLaps = 0;
  lapItemsEl.innerHTML=""
  startBtnEl.textContent="Start"
  timeEl.textContent="00:00:00"
  lapBtnEl.disabled=true
});
