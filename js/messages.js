import { formResetHandler } from './form.js';
const isEscapeKey = (event) => event.key === 'Escape';

const successTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
successTemplate.classList.add('hidden');
document.body.appendChild(successTemplate);

const errorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
errorTemplate.classList.add('hidden');
const errorCloseButton = errorTemplate.querySelector('.error__button');
document.body.appendChild(errorTemplate);

const onEscKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeSuccessMessageHandler();
    closeErrorMessageHandler();
  }
};

const showSuccessMessage = () => {
  formResetHandler();
  successTemplate.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', closeSuccessMessageHandler);
};

function closeSuccessMessageHandler () {
  successTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', closeSuccessMessageHandler);
}

const showErrorMessage = () => {
  errorTemplate.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', closeErrorMessageHandler);
};

function closeErrorMessageHandler () {
  errorTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', closeErrorMessageHandler);
}

errorCloseButton.addEventListener('click', () => {
  closeErrorMessageHandler();
});

export {showSuccessMessage, showErrorMessage};
