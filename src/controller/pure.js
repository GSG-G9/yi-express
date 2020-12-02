const env = require('env2')('server.env');

const createWeatherUrl = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    return url;
  };

  if (typeof module !== "undefined") {
    module.exports = createWeatherUrl;
  }