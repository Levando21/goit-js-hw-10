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

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function whenSubmitted(event) {
  event.preventDefault();

  const delayValue = inputElement.value;

  if (radioFull.checked) {
    delay(delayValue)
      .then(() => {
        console.log(`Promise fulfilled after ${delayValue}ms`);
        iziToast.show({
          title: 'Alert',
          message: `Promise fulfilled after ${delayValue}ms`,
          position: 'topRight',
          timeout: `${delayValue}`,
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    delay(delayValue)
      .then(() => {
        console.log(`Promise rejected after ${delayValue}ms`);
        iziToast.show({
          title: 'Alert',
          message: `Promise rejected after ${delayValue}ms`,
          position: 'topRight',
          timeout: `${delayValue}`,
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
