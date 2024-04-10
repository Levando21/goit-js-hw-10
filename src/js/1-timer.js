import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myInp = document.getElementById('datetime-picker');
myInp.classList.add('time-changer');
myInp.style.width = '200px';
myInp.style.height = '20px';
myInp.style.borderRadius = '5px';

const strBtn = document.querySelector('button[data-start]');
const countdownDisplay = document.querySelector('.timer');

let intervalId = 0;
let countdownEndTime = 0; // Змінна для збереження кінцевого часу для таймера
strBtn.disabled = true;

strBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(updateCountdown, 1000);
    countdownDisplay.classList.add('value');
    countdownDisplay.classList.add('field');
    countdownDisplay.classList.add('label');
  }
  return;
});

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeLeft = countdownEndTime - currentTime;
  countdownDisplay.classList.add('value');
  countdownDisplay.classList.add('field');
  countdownDisplay.classList.add('label');
  strBtn.disabled = false;

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    intervalId = 0;
    countdownDisplay.textContent = 'Час вийшов!';
    iziToast.show({
      title: 'Alert',
      message: `This date was in the past. Choose another one`,
      position: 'topRight',
      timeout: 3000,
    });
    strBtn.disabled = true;
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownDisplay.textContent = ` ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

myInp.addEventListener('change', () => {
  const selectedDate = myInp.value;
  countdownEndTime = new Date(selectedDate).getTime();
});

flatpickr(myInp, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    countdownEndTime = selectedDates[0].getTime();
    updateCountdown();
  },
});
