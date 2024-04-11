import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const inputElement = document.querySelector('input[name="delay"]');
let radioFull = document.querySelector(
  'input[type="radio"][name="state"][value="fulfilled"]'
);
const radioRej = document.querySelector(
  'input[type="radio"][name="state"][value="rejected"]'
);
const btn = document.querySelector('button[type="submit"]');

radioFull.checked = true;

btn.addEventListener('click', event => {
  event.preventDefault();

  const delayValue = inputElement.value;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioFull.checked) {
        resolve(`Promise fulfilled after ${delayValue} ms`);
      } else {
        reject(`Promise rejected after ${delayValue}ms`);
      }
    }, delayValue);
  })
    .then(message => {
      iziToast.show({
        title: 'Alert',
        message: message,
        position: 'topRight',
        timeout: delayValue,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Alert',
        message: error,
        position: 'topRight',
        timeout: delayValue,
      });
    });
});
