const convertToCelsius = function(f) {
  return Math.ceil(((f - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(c) {
  return Math.ceil(((c * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
