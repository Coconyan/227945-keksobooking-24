function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (min > max || min < 0) ? null : Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 2);

function getRandomFloat (min, max, decimal) {
  return (min > max || min < 0) ? null : +(Math.random() * (max - min) + min).toFixed(decimal);
}

getRandomFloat(2.11, 2.13, 2);

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const TITLE = [
  'Заголовок1',
  'Заголовок2',
  'Заголовок3',
  'Заголовок4',
];
const MAX_PRICE = 10000;
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MAX_ROOMS = 9;
const MAX_GUEST = 20;
const CHECK = ['12:00', '13:00', '14:00'];
const FEAUTERS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = [
  'Описание1',
  'Описание2',
  'Описание3',
  'Описание4',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const ARRAY_LENGTH = 10;

const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

const getRandomArrayMiddleElements = (elements) => {
  const min = _.random(0, Math.floor(elements.length / 2));
  const max = _.random(Math.ceil(elements.length / 2), elements.length);
  if (min === max) {
    return elements.slice(min, max + 1);
  }
  return elements.slice(min, max);
};

const createLocation = () => ({
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5),
});

const createObject = () => ({
  author: {
    avatar: getRandomArrayElement(AVATAR),
  },

  offer: {
    title: getRandomArrayElement(TITLE),
    address: createLocation(),
    price: _.random(0, MAX_PRICE),
    type: getRandomArrayElement(TYPE),
    rooms: _.random(1, MAX_ROOMS),
    guests: _.random(1, MAX_GUEST),
    checkin: getRandomArrayElement(CHECK),
    checkout: getRandomArrayElement(CHECK),
    features: getRandomArrayMiddleElements(FEAUTERS),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayMiddleElements(PHOTOS),
  },

  location: {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  },
});

const similarObjects = Array.from({length: ARRAY_LENGTH}, createObject);
similarObjects;

