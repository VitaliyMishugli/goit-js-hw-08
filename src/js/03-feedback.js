import throttle from 'lodash.throttle';
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');

const FORM_STATE = 'feedback-form-state';
const formData = {};

populateSavedData();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  let LSData = JSON.parse(localStorage.getItem(FORM_STATE));
  localStorage.removeItem(FORM_STATE);
  console.log(LSData);
}

function onFormData(e) {
  let persistedData = localStorage.getItem(FORM_STATE);
  persistedData = persistedData ? JSON.parse(persistedData) : {};
  persistedData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(persistedData));
}

function populateSavedData() {
  let persistedData = localStorage.getItem(FORM_STATE);
  if (persistedData) {
    persistedData = JSON.parse(persistedData);
    Object.entries(persistedData).forEach(([name, value]) => {
      form.elements[name].value = value;
      localStorage.setItem(FORM_STATE, JSON.stringify(persistedData));
    });
  }
  else {
    persistedData = {};
  }
}