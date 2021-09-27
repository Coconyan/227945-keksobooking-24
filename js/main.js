function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (min >= max) ? 'Максимальное значение равно, либо меньше минимального.' : Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 20);

function getRandomFloatInt (min, max, decimal) {
  return (min >= max) ? 'Максимальное значение равно, либо меньше минимального.' : +(Math.random() * (max - min + 1) + min).toFixed(decimal);
}

getRandomFloatInt(0.52, 4, 3);
