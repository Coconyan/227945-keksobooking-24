const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const formDisable = (form) => {
  if (form.matches('.ad-form')) {
    form.classList.add('ad-form--disabled');
    const adFormFieldsets = adForm.querySelectorAll('fieldset');
    adFormFieldsets.forEach((fieldset) => {
      fieldset.disabled = true;
    });
  } else if (form.matches('.map__filters')) {
    form.classList.add('map__filters--disabled');
    const mapFiltersSelects = mapFilters.querySelectorAll('select');
    const mapFiltersFielsets = mapFilters.querySelectorAll('fieldset');
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
    const adFormFieldsets = adForm.querySelectorAll('fieldset');
    adFormFieldsets.forEach((fieldset) => {
      fieldset.disabled = false;
    });
  } else if (form.matches('.map__filters')) {
    form.classList.remove('map__filters--disabled');
    const mapFiltersSelects = mapFilters.querySelectorAll('select');
    const mapFiltersFielsets = mapFilters.querySelectorAll('fieldset');
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
formActivate(mapFilters);
formActivate(adForm);

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

roomNumber.addEventListener('change', () => {

  if (roomNumber.value === '1' && (capacity.value === '2' ||capacity.value === '3' || capacity.value === '0')) {
    roomNumber.setCustomValidity('1 комната для 1 гостя');
  } else if (roomNumber.value === '2' && (capacity.value === '3' || capacity.value === '0')) {
    roomNumber.setCustomValidity('2 комнаты для 2 или 1 гостя');
  } else if (roomNumber.value === '3' && capacity.value === '0') {
    roomNumber.setCustomValidity('3 комнаты для 3, 2 или 1 гостя');
  } else if (roomNumber.value === '100' && capacity.value !== '0') {
    roomNumber.setCustomValidity('100 комнат не для гостей');
  } else {
    roomNumber.setCustomValidity('');
    capacity.setCustomValidity('');
  }

  roomNumber.reportValidity();
});

capacity.addEventListener('change', () => {

  if (roomNumber.value === '1' && (capacity.value === '2' ||capacity.value === '3' || capacity.value === '0')) {
    capacity.setCustomValidity('1 комната для 1 гостя');
  } else if (roomNumber.value === '2' && (capacity.value === '3' || capacity.value === '0')) {
    capacity.setCustomValidity('2 комнаты для 2 или 1 гостя');
  } else if (roomNumber.value === '3' && capacity.value === '0') {
    capacity.setCustomValidity('3 комнаты для 3, 2 или 1 гостя');
  } else if (roomNumber.value === '100' && capacity.value !== '0') {
    capacity.setCustomValidity('100 комнат не для гостей');
  } else {
    roomNumber.setCustomValidity('');
    capacity.setCustomValidity('');
  }

  capacity.reportValidity();
});


