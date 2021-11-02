import { getData } from './data.js';
import { showAlert } from './utils/show-alert.js';
import './map.js';
import './form.js';
import { createSimilarPins } from './map.js';
import { showSuccessMessage } from './messages.js';
import { setAdFormSubmit } from './form.js';

const loadAds = getData(createSimilarPins, showAlert);
loadAds();

setAdFormSubmit(showSuccessMessage);
