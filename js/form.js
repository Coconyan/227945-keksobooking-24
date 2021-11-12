import { sendData } from './data.js';
import { resetMap, createSimilarPins } from './map.js';
import { showErrorMessage } from './messages.js';
import { previewAvatar, previewImagesImg } from './photos-preview.js';
import { adForm, mapFilters, houseTypeSelect, housePriceSelect, houseRoomsSelect, houseGuestsSelect, houseFeaturesInputs } from './form-elements.js';
const IMG_PREVIEW_SRC = 'img/muffin-grey.svg';

const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFielsets = mapFilters.querySelectorAll('fieldset');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const price = document.querySelector('#price');
const adFormResetButton = adForm.querySelector('.ad-form__reset');

const formDisable = (form) => {
  if (form.matches('.ad-form')) {
    form.classList.add('ad-form--disabled');
    adFormFieldsets.forEach((fieldset) => {
      fieldset.disabled = true;
    });
  } else if (form.matches('.map__filters')) {
    form.classList.add('map__filters--disabled');
    mapFiltersFielsets.forEach((fieldset) => {
      fieldset.disabled = true;
    });
    mapFiltersSelects.forEach((select) => {
      select.disabled = true;
    });
  }
};

const formActivate = (form) => {
  if (form.matches('.ad-form')) {
    form.classList.remove('ad-form--disabled');
    adFormFieldsets.forEach((fieldset) => {
      fieldset.disabled = false;
    });
  } else if (form.matches('.map__filters')) {
    form.classList.remove('map__filters--disabled');
    mapFiltersFielsets.forEach((fieldset) => {
      fieldset.disabled = false;
    });
    mapFiltersSelects.forEach((select) => {
      select.disabled = false;
    });
  }
};

formDisable(adForm);
formDisable(mapFilters);

const roomNumberCapacityMap = {
  3: {
    availableCapacities: ['3', '2', '1'],
    errorText: '3 комнаты для 3, 2 или 1 гостя',
  },
  2: {
    availableCapacities: ['2', '1'],
    errorText: '2 комнаты для 2 или 1 гостя',
  },
  1: {
    availableCapacities: ['1'],
    errorText: '1 комната для 1 гостя',
  },
  100: {
    availableCapacities: ['0'],
    errorText: '100 комнат не для гостей',
  },
};

const setRoomAndCapacityValidationHandler = (event) => {
  const {target} = event;
  const {availableCapacities, errorText} = roomNumberCapacityMap[roomNumber.value];
  if (availableCapacities.includes(`${capacity.value}`)) {
    roomNumber.setCustomValidity('');
    capacity.setCustomValidity('');
  } else {
    target.setCustomValidity(errorText);
  }
  roomNumber.reportValidity();
  capacity.reportValidity();
};

roomNumber.addEventListener('change', setRoomAndCapacityValidationHandler);
capacity.addEventListener('change', setRoomAndCapacityValidationHandler);

const typePriceList = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

document.querySelector('#type').addEventListener('change', (event) => {
  const typeValue = event.target.value;
  price.min = typePriceList[typeValue];
  price.placeholder = typePriceList[typeValue];
});

const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

const addOnChange = (cb) => {
  [houseTypeSelect, housePriceSelect, houseRoomsSelect, houseGuestsSelect,  ...houseFeaturesInputs].forEach((element) => {
    element.addEventListener('change', cb);
  });
};

const setAdFormSubmit = (onSuccess, data) => {
  adForm.addEventListener('submit', (event) => {
    event.preventDefault();

    sendData(
      () => onSuccess(data),
      () => showErrorMessage(),
      new FormData(event.target),
    );
  });
};

const formResetHandler = (data) => {
  adForm.reset();
  mapFilters.reset();
  resetMap();
  createSimilarPins(data);
  previewAvatar.src = IMG_PREVIEW_SRC;
  previewImagesImg.src = IMG_PREVIEW_SRC;
  price.min = typePriceList.flat;
  price.placeholder = typePriceList.flat;
};

const setFormResetButton = (data) => {
  adFormResetButton.addEventListener('click', (event) => {
    event.preventDefault();
    formResetHandler(data);
  });
};

export {formActivate, formDisable, setAdFormSubmit, formResetHandler, addOnChange, setFormResetButton};
