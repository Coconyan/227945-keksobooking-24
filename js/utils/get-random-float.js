function getRandomFloat (min, max, decimal) {
  return (min > max || min < 0) ? null : +(Math.random() * (max - min) + min).toFixed(decimal);
}

export {getRandomFloat};
