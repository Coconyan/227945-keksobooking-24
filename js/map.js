import { formActivate } from './form.js';
import { createAd } from './layout-generator.js';
import { adForm, mapFilters, houseTypeSelect, housePriceSelect, houseRoomsSelect, houseGuestsSelect, houseFeaturesInputs } from './form-elements.js';
const SIMILAR_PINS_COUNT = 10;
const addressInput = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.65,
    lng: 139.7,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.65,
    lng: 139.7,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const housePriceSelectMap = {
  any: {
    min: 0,
    max: 1000000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: 1000000,
  },
};

const getAdRank = (ad) => {
  const housePriceSelectMin = housePriceSelectMap[housePriceSelect.value].min;
  const housePriceSelectMax = housePriceSelectMap[housePriceSelect.value].max;
  const isNotAnyHousePriceSelect = housePriceSelect.value !== 'any';
  let rank = 0;
  let filtersCount = 0;
  filtersCount += houseTypeSelect.value !== 'any';
  filtersCount += isNotAnyHousePriceSelect;
  filtersCount += houseRoomsSelect.value !== 'any';
  filtersCount += houseGuestsSelect.value !== 'any';
  houseFeaturesInputs.forEach((featureInput) => {
    if (featureInput.checked) {
      filtersCount += 1;
    }
  });

  if (ad.offer.type === houseTypeSelect.value) {
    rank += 1;
  }
  if (ad.offer.price >= housePriceSelectMin && ad.offer.price <= housePriceSelectMax && isNotAnyHousePriceSelect) {
    rank += 1;
  }
  if (ad.offer.rooms === +houseRoomsSelect.value) {
    rank += 1;
  }
  if (ad.offer.guests === +houseGuestsSelect.value) {
    rank += 1;
  }
  if (ad.offer.features) {
    ad.offer.features.forEach((feature) => {
      houseFeaturesInputs.forEach((featureInput) => {
        if (feature === featureInput.value && featureInput.checked) {
          rank += 1;
        }
      });
    });
  }

  if (filtersCount === rank) {
    return true;
  }
  return false;
};

const markerGroup = L.layerGroup().addTo(map);

const createSimilarPins = (similarObjects) => {
  markerGroup.clearLayers();
  [...similarObjects]
    .filter(getAdRank)
    .slice(0, SIMILAR_PINS_COUNT)
    .forEach((similarObject) => {
      const similarAd = createAd(similarObject);
      const similarPinIcon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const similarPinMarker = L.marker(
        {
          lat: similarObject.location.lat,
          lng: similarObject.location.lng,
        },
        {
          icon: similarPinIcon,
        },
      );
      similarPinMarker.addTo(markerGroup);
      similarPinMarker.bindPopup(similarAd);
    });
  formActivate(adForm);
  formActivate(mapFilters);
};

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (event) => {
  const coordinates = event.target.getLatLng();
  addressInput.value = `${coordinates.lat.toFixed(5)} ${coordinates.lng.toFixed(5)}`;
});

const resetCoordinateInput = () => {
  const coordinatesMainPinMarker = mainPinMarker.getLatLng();
  addressInput.value = `${coordinatesMainPinMarker.lat.toFixed(5)} ${coordinatesMainPinMarker.lng.toFixed(5)}`;
};

resetCoordinateInput();

const resetMap = () => {
  map.setView({
    lat: 35.65,
    lng: 139.7,
  }, 12);

  mainPinMarker.setLatLng({
    lat: 35.65,
    lng: 139.7,
  });

  resetCoordinateInput();

  map.closePopup();
};

export {createSimilarPins, map, mainPinMarker, resetMap};
