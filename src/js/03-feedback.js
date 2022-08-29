import throttle from 'lodash.throttle';
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const submit = document.querySelector('.submit');

email.addEventListener('input', onEmailInput);
submit.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
}


function onEmailInput(evt) {
  const value = evt.target.value;
  console.log(value);
  localStorage.setItem('value', value);
}

function onTextAreaInput(evt){}
