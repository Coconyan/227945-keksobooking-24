import { getData } from './data.js';
import { showAlert } from './utils/show-alert.js';
import './map.js';
import './form.js';
import { createSimilarPins } from './map.js';
import { showSuccessMessage } from './messages.js';
import { setAdFormSubmit, setHouseTypeChange, setHousePriceChange, setHouseRoomsChange, setHouseGuestsChange, setHouseFeaturesChange } from './form.js';
import { debounce } from './utils/debounce.js';

getData((data) => {
  createSimilarPins(data);
  setHouseTypeChange(debounce(() => createSimilarPins(data)));
  setHousePriceChange(debounce(() => createSimilarPins(data)));
  setHouseRoomsChange(debounce(() => createSimilarPins(data)));
  setHouseGuestsChange(debounce(() => createSimilarPins(data)));
  setHouseFeaturesChange(debounce(() => createSimilarPins(data)));
}, showAlert);

setAdFormSubmit(showSuccessMessage);
