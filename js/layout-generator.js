const createAd = (similarObject) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);

  const cardTitle = cardTemplate.querySelector('.popup__title');
  cardTitle.textContent = similarObject.offer.title;

  const cardAddress = cardTemplate.querySelector('.popup__text--address');
  cardAddress.textContent = `${similarObject.offer.address.lat  }, ${  similarObject.offer.address.lng}`;

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

  const cardFeatures = cardTemplate.querySelector('.popup__features');
  cardFeatures.textContent = similarObject.offer.features;
  if (cardFeatures.textContent === '') {
    cardFeatures.classList.add('hidden');
  }

  const cardDescription = cardTemplate.querySelector('.popup__description');
  cardDescription.textContent = similarObject.offer.description;

  const cardPhotosFragment = document.createDocumentFragment();
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

  const cardAvatar = cardTemplate.querySelector('.popup__avatar');
  cardAvatar.src = similarObject.author.avatar;
  return cardTemplate;
};


export {createAd};
