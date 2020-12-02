

const createWeatherUrl = (city,key) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    return url;
  };

  if (typeof module !== "undefined") {
    module.exports = createWeatherUrl;
  }