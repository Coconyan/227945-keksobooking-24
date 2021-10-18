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
