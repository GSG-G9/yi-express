const env = require('env2')('server.env');
const fetch = require('node-fetch');

const getWeather = (req, res) => {
  const createWeatherUrl = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    return url;
  };

  fetch(createWeatherUrl(req.body.city))
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getWeather;
