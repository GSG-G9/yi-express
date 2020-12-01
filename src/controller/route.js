const path = require('path');
const env = require('env2')('server.env');
const fetch = require('node-fetch');
const fs = require('fs');

const getMain = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const getWeather = (req, res) => {
    console.log('hi')
    console.log(req.body.city)
  const createWeatherUrl = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    console.log(url)
    return url;
  };
  
  fetch(createWeatherUrl(req.body.city))
    .then((response) => response.json())
    .then((data) =>{ 
    // const stream = fs.createWriteStream(path.join(__dirname,'..','weather.json'))
    // req.pipe(stream);
    res.json(data)
});
//   res.redirect('/');
};
module.exports = { getMain, getWeather };
