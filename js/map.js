import { formActivate ,adForm, mapFilters } from './form.js';
import { createAd } from './layout-generator.js';
const SIMILAR_PINS_COUNT = 10;

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
  const houseTypeSelect = document.querySelector('[name="housing-type"]');
  const housePriceSelect = document.querySelector('[name="housing-price"]');
  const houseRoomsSelect = document.querySelector('[name="housing-rooms"]');
  const houseGuestsSelect = document.querySelector('[name="housing-guests"]');
  const houseFeaturesInputs = document.querySelectorAll('[name="features"]');
  const housePriceSelectMin = housePriceSelectMap[housePriceSelect.value].min;
  const housePriceSelectMax = housePriceSelectMap[housePriceSelect.value].max;
  let rank = 0;

  if (ad.offer.type === houseTypeSelect.value) {
    rank += 1;
  }
  if (ad.offer.price >= housePriceSelectMin && ad.offer.price <= housePriceSelectMax) {
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
          rank+= 1;
        }
      });
    });
  }

  if (ad.offer.features === houseFeaturesInputs.value) {
    rank += 1;
  }

  return rank;
};

const compareAds = (adA, adB) => getAdRank(adB) - getAdRank(adA);

const markerGroup = L.layerGroup().addTo(map);

const createSimilarPins = (similarObjects) => {
  markerGroup.clearLayers();
  [...similarObjects]
    .sort(compareAds)
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
  const addressInput = document.querySelector('#address');
  const coordinates = event.target.getLatLng();
  addressInput.value = `${coordinates.lat.toFixed(5)} ${coordinates.lng.toFixed(5)}`;
});

const resetCoordinateInput = () => {
  const addressInput = document.querySelector('#address');
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
