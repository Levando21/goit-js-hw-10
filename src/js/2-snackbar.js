import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const inputElement = document.querySelector('input[name="delay"]');
const radioFull = document.querySelector(
  'input[type="radio"][name="state"][value="fulfilled"]'
);
const radioRej = document.querySelector(
  'input[type="radio"][name="state"][value="rejected"]'
);
const btn = document.querySelector('button[type="submit"]');

radioFull.addEventListener('change', () => {
  console.log('checked');
});
radioRej.addEventListener('change', () => {
  console.log('no');
});
btn.addEventListener('click', whenSubmitted);

function whenSubmitted(event) {
  event.preventDefault();

  const delay = inputElement.value;

  if (radioFull.checked) {
    setTimeout(() => {
      console.log(`Promise fulfilled after ${delay}ms`);
      iziToast.show({
        title: 'Alert',
        message: `Promise fulfilled after ${delay}ms`,
        position: 'topRight',
        timeout: `${delay}`,
      });
    }, delay);
  } else {
    setTimeout(() => {
      iziToast.show({
        title: 'Alert',
        message: `Promise rejected after ${delay}ms`,
        position: 'topRight',
        timeout: `${delay}`,
      });
      console.log(`Rejected after ${delay}ms`);
    }, delay);
  }
}
