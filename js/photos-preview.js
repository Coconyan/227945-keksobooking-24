import { adForm } from './form-elements.js';
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = adForm.querySelector('#avatar');
const previewAvatar = adForm.querySelector('.ad-form-header__preview img');
const fileChooserImages = adForm.querySelector('#images');
const previewImage = adForm.querySelector('.ad-form__photo');
const previewImageImg = previewAvatar.cloneNode(true);
previewImageImg.alt = 'Фотография жилья';
previewImage.classList.add('ad-form__photo-preview');
previewImage.appendChild(previewImageImg);

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

fileChooserImages.addEventListener('change', () => {
  const file = fileChooserImages.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImageImg.src = URL.createObjectURL(file);
  }
});

export {previewAvatar, previewImageImg as previewImagesImg};
