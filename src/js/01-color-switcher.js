const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId;

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);


function start() {
  startButton.setAttribute('disabled', '');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  startButton.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

