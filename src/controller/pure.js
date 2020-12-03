const createWeatherUrl = (city, key) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  return url;
};

module.exports = createWeatherUrl;
