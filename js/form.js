const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const formDisable = (form) => {
  const formClass = form.classList;
  form.classList.add(`${formClass  }--disabled`);
};

const formActivate = (form) => {
  const formClass = form.classList;
  if (formClass.length > 1) {
    const className = formClass[1];
    form.classList.remove(className);
  }
};

formDisable(adForm);
formDisable(mapFilters);
formActivate(adForm);
formActivate(mapFilters);
