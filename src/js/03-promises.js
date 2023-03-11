import Notiflix from 'notiflix';

const inputs = document.querySelectorAll('input');
const submitButt = document.querySelector('button[type=submit]');

submitButt.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = collectValues(inputs);

  for (let i = 1; i <= userInput.amount; i++) {
    createPromise(i, userInput.delay).then(seccussMessage).catch(errorMessage);
    userInput.delay += userInput.step;
  }
});

function collectValues(arrayOfInputs) {
  const newArray = {};
  for (const input of arrayOfInputs) {
    newArray[input.name] = Number(input.value);
  }
  return newArray;
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  })
}

function seccussMessage({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function errorMessage({ position, delay }) {
  Notiflix.Notify.success(`Rejected promise ${position} in ${delay}ms`);
}