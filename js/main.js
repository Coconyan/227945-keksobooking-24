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
