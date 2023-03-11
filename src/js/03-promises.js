const inputs = document.querySelectorAll('input');
const submitButt = document.querySelector('button[type=submit]');

submitButt.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = collectValues(inputs);

  for (let i = 0; i < userInput.amount; i++) {
    console.log('yes');
    
  }
});

function collectValues(arrayOfInputs) {
  const newArray = {};
  for (const input of arrayOfInputs) {
    newArray[input.name] = input.value;
  }
  return newArray;
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

