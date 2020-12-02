const env = require('env2')('server.env');
const fetch = require('node-fetch');
const createWeatherUrl = require('./pure')

const getWeather = (req, res) => {

  fetch(createWeatherUrl(req.body.city,process.env.API_KEY))
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getWeather;
