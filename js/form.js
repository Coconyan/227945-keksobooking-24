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

const roomAndCapacityValidation = (event) => {
  const {target} = event;
  const {availableCapacities, errorText} = roomNumberCapacityMap[roomNumber.value];
  target.setCustomValidity(availableCapacities.includes(`${capacity.value}`) ? '' : errorText);
  target.reportValidity();
};

roomNumber.addEventListener('change', roomAndCapacityValidation);
capacity.addEventListener('change', roomAndCapacityValidation);

const typePriceList = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const type = document.querySelector('#type');
const price = document.querySelector('#price');

type.addEventListener('change', () => {
  const typeValue = type.value;
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
