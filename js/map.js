
import { formActivate ,adForm, mapFilters } from './form.js';
import { createAd } from './layout-generator.js';

const map = L.map('map-canvas')
  .on('load', () => {
    formActivate(adForm);
    formActivate(mapFilters);
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

const createSimilarPins = (similarObjects) => {
  similarObjects.forEach((similarObject) => {
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

    similarPinMarker.addTo(map);
    similarPinMarker.bindPopup(similarAd);
  });
};

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (event) => {
  const addressInput = document.querySelector('#address');
  const coordinates = event.target.getLatLng();
  addressInput.value = `${coordinates.lat.toFixed(5)} ${coordinates.lng.toFixed(5)}`;
});

const resetMap = () => {
  map.setView({
    lat: 35.65,
    lng: 139.7,
  }, 12);

  mainPinMarker.setLatLng({
    lat: 35.65,
    lng: 139.7,
  });

  const addressInput = document.querySelector('#address');
  const coordinatesMainPinMarker = mainPinMarker.getLatLng();
  addressInput.value = `${coordinatesMainPinMarker.lat.toFixed(5)} ${coordinatesMainPinMarker.lng.toFixed(5)}`;

  map.closePopup();
};

export {createSimilarPins, map, mainPinMarker, resetMap};
