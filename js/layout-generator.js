const createAd = (similarObject) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);

  const cardTitle = cardTemplate.querySelector('.popup__title');
  cardTitle.textContent = similarObject.offer.title;

  const cardAddress = cardTemplate.querySelector('.popup__text--address');
  cardAddress.textContent = similarObject.offer.address;

  const cardPrice = cardTemplate.querySelector('.popup__text--price');
  cardPrice.textContent = `${similarObject.offer.price  } ₽/ночь`;

  const cardType = cardTemplate.querySelector('.popup__type');
  const cardTypeList = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  const createCardType = (type) => cardTypeList[type];
  cardType.textContent = createCardType(similarObject.offer.type);

  const cardCapacity = cardTemplate.querySelector('.popup__text--capacity');
  cardCapacity.textContent = `${similarObject.offer.rooms  } комнаты для ${  similarObject.offer.guests  } гостей`;

  const cardTime = cardTemplate.querySelector('.popup__text--time');
  cardTime.textContent = `Заезд после ${  similarObject.offer.checkin  }, выезд до ${  similarObject.offer.checkout}`;

  const cardFeaturesMap = {
    wifi: 'popup__feature--wifi',
    dishwasher: 'popup__feature--dishwasher',
    parking: 'popup__feature--parking',
    washer: 'popup__feature--washer',
    elevator: 'popup__feature--elevator',
    conditioner: 'popup__feature--conditioner',
  };
  const cardFeaturesList = cardTemplate.querySelector('.popup__features');
  const cardFeaturesItems = cardFeaturesList.querySelectorAll('.popup__feature');
  const similarObjectFeaturesArray = similarObject.offer.features;
  const cardFeaturesFragment = document.createDocumentFragment();
  if (similarObjectFeaturesArray) {
    similarObjectFeaturesArray.forEach((feature) => {
      cardFeaturesItems.forEach((element) => {
        if (element.classList.contains(cardFeaturesMap[feature])) {
          cardFeaturesFragment.appendChild(element);
        }
      });
    });
  }
  cardFeaturesList.textContent = '';
  cardFeaturesList.appendChild(cardFeaturesFragment);


  if (cardFeaturesList.children.length === 0) {
    cardFeaturesList.classList.add('hidden');
  }

  const cardDescription = cardTemplate.querySelector('.popup__description');
  cardDescription.textContent = similarObject.offer.description;
  if (cardDescription.textContent === '') {
    cardDescription.classList.add('hidden');
  }

  const cardPhotosFragment = document.createDocumentFragment();
  if (similarObject.offer.photos) {
    similarObject.offer.photos.forEach((photo) => {
      const cardPhotoTemplate = cardTemplate.querySelector('.popup__photos').cloneNode(true);
      const cardPhotoImg = cardPhotoTemplate.querySelector('img');
      cardPhotoImg.src = photo;
      cardPhotosFragment.appendChild(cardPhotoImg);
    });
    cardTemplate.querySelector('.popup__photos img').remove();
    const cardPhotos = cardTemplate.querySelector('.popup__photos');
    cardPhotos.appendChild(cardPhotosFragment);
    if (cardTemplate.querySelector('.popup__photos img') === null) {
      cardPhotos.classList.add('hidden');
    }
  } else {
    cardTemplate.querySelector('.popup__photos').classList.add('hidden');
  }

  const cardAvatar = cardTemplate.querySelector('.popup__avatar');
  cardAvatar.src = similarObject.author.avatar;
  return cardTemplate;
};


export {createAd};
