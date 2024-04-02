import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const myInp = document.getElementById('datetime-picker');
myInp.classList.add('time-changer');
myInp.style.width = '200px';
myInp.style.height = '20px';
myInp.style.borderRadius = '5px';

const strBtn = document.querySelector('button[data-start]');
console.log(strBtn);

let intervalid = 0;

strBtn.addEventListener(
  'click',
  () => {
    if (!intervalid) {
      strBtn.disabled = true;
      intervalid = setInterval(() => {
        console.log(`interval , ${intervalid}`);
      }, 1000);
    }
  },
  1000
);

myInp.addEventListener('click', () => {
  const calendarContainer = document.getElementById('calendar-container');
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
    appendTo: calendarContainer,
  };

  // Initialize Flatpickr with the specified options
  flatpickr(myInp, options);
});

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
