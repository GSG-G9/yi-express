const router = require('express').Router();
const { getWeather, getGazaWeather } = require('./route.js');
const { error404, error500 } = require('./error.js');

router.post('/weather', getWeather);
router.get('/weather',getGazaWeather)
router.use(error404);
router.use(error500);

module.exports = router;
