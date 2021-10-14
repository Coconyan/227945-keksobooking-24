import {getRandomFloat} from './utils/get-random-float.js';
import {getRandomInt} from './utils/get-random-int.js';

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

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomArrayMiddleElements = (elements) => {
  const min = getRandomInt(0, Math.floor(elements.length / 2));
  const max = getRandomInt(Math.ceil(elements.length / 2), elements.length);
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
    price: getRandomInt(0, MAX_PRICE),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomInt(1, MAX_ROOMS),
    guests: getRandomInt(1, MAX_GUEST),
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
console.log(similarObjects);
