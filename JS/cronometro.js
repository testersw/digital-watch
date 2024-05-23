const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');

let intervalId;
let time = 0;

function updateTime() {
  const hoursDisplay = document.getElementById('hours-display');
  const minutesDisplay = document.getElementById('minutes-display');
  const secondsDisplay = document.getElementById('seconds-display');

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  hoursDisplay.textContent = String(hours).padStart(2, '0');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      time += 1;
      updateTime();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  time = 0;
  updateTime();
}

document.addEventListener('DOMContentLoaded', () => {
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  restartBtn.addEventListener('click', resetTimer);
  backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});