const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId;

stopButton.setAttribute('disabled', '');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);


function start() {
  changeButtonAccessibility();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  changeButtonAccessibility();  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeButtonAccessibility() {
  startButton.toggleAttribute('disabled');
  stopButton.toggleAttribute('disabled');
}

