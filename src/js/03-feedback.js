import throttle from 'lodash.throttle';
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');

const FORM_STATE = 'feedback-form-state';
const formData = {};

populateSavedData();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  let LSData = localStorage.getItem(FORM_STATE);
  LSData = JSON.parse(LSData);
  localStorage.removeItem(FORM_STATE);
}

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(formData));
  console.log(formData);
}

function populateSavedData() {
  const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
  console.log(savedData);
  if (savedData) {
    email.value = savedData.email;
    textarea.value = savedData.message;
  }
}