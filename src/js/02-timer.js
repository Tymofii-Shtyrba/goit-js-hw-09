import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startButtonRef = document.querySelector('button[data-start]');
const timerRef = document.querySelectorAll('.value');

let difference;
let intervalId;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currebtDate = options.defaultDate.getTime();
    const newDate = new Date(selectedDates).getTime();

    if (newDate < currebtDate) {
      Notiflix.Notify.warning('Please, choose a date in the future');
    } else {
      if (!intervalId) {
        startButtonRef.removeAttribute('disabled');
      }
      difference = newDate - currebtDate;
    }
  },
};

startButtonRef.setAttribute('disabled', '');
startButtonRef.addEventListener('click', timer);


flatpickr('input#datetime-picker', options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function timer() {
    intervalId = setInterval(() => {
      const time = Object.values(convertMs(difference));
      const newTime = time.map(addLeadingZero);
      if (difference > 0) {
        difference -= 1000;
        for (let i = 0; i < timerRef.length; i++) {
          timerRef[i].textContent = newTime[i];
          
        }
      } else {
        clearInterval(intervalId);
        Notiflix.Notify.success('Time is over');
      }
    }, 1000);
  startButtonRef.setAttribute('disabled', '');
  }

function addLeadingZero(value) {
  return String(value).padStart(2,0);
}