
const fetch = require('node-fetch');
const createWeatherUrl = require('./pure')

const getWeather = (req, res) => {

  fetch(createWeatherUrl(req.body.city))
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getWeather;
