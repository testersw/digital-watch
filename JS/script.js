function updateClock() {
  const now = new Date();
  
  let hours = now.getHours();
  if (hours === 0) hours = 12;
  
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  document.getElementById('hours-display').textContent = hours;
  document.getElementById('minutes-display').textContent = minutes;
  document.getElementById('seconds-display').textContent = seconds;
}

updateClock();

setInterval(updateClock, 1000);
