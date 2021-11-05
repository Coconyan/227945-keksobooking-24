import { getData } from './data.js';
import { showAlert } from './utils/show-alert.js';
import './map.js';
import './form.js';
import { createSimilarPins } from './map.js';
import { showSuccessMessage } from './messages.js';
import { setAdFormSubmit, addOnChange } from './form.js';
import { debounce } from './utils/debounce.js';

getData((data) => {
  createSimilarPins(data);
  addOnChange(debounce(() => createSimilarPins(data)));
}, showAlert);

setAdFormSubmit(showSuccessMessage);
