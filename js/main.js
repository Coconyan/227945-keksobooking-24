function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    return 'Максимальное значение равно, либо меньше минимального.';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 20);

function getRandomFloatInt (min, max, decimal) {
  if (min >= max) {
    return 'Максимальное значение равно, либо меньше минимального.';
  }
  return +(Math.random() * (max - min + 1) + min).toFixed(decimal);
}

getRandomFloatInt(4.52, 4.65, 2);
