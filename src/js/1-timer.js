import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const myInp = document.getElementById('datetime-picker');
myInp.classList.add('time-changer');
myInp.style.width = '200px';
myInp.style.height = '30px';
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
