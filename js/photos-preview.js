const FILES_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserImages = document.querySelector('#images');
const previewImages = document.querySelector('.ad-form__photo');
const previewImagesImg = previewAvatar.cloneNode(true);
previewImagesImg.alt = 'Фотография жилья';
previewImages.style = 'display: flex; align-items: center; justify-content: center;';
previewImages.appendChild(previewImagesImg);

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILES_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

fileChooserImages.addEventListener('change', () => {
  const file = fileChooserImages.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILES_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImagesImg.src = URL.createObjectURL(file);
  }
});

export {previewAvatar, previewImagesImg};
