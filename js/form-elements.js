const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const houseTypeSelect = mapFilters.querySelector('[name="housing-type"]');
const housePriceSelect = mapFilters.querySelector('[name="housing-price"]');
const houseRoomsSelect = mapFilters.querySelector('[name="housing-rooms"]');
const houseGuestsSelect = mapFilters.querySelector('[name="housing-guests"]');
const houseFeaturesInputs = mapFilters.querySelectorAll('[name="features"]');

export {adForm, mapFilters, houseTypeSelect, housePriceSelect, houseRoomsSelect, houseGuestsSelect, houseFeaturesInputs};
