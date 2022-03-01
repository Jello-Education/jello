export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomFloatFromInterval = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);

export const ratingFormatter = (rating) =>
  rating ? parseFloat(rating).toFixed(1) : '0.0';
