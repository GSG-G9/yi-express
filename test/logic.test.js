const createWeatherUrl = require('../src/controller/pure');

describe('Testing createWeatherUrl it shuold return url when given city name', () => {
  test('Should return queryString when take object ', () => {
    const actual = createWeatherUrl('paris', '0a0351568563f30bdaa051a8b6b0c33a');
    const expected = 'http://api.openweathermap.org/data/2.5/weather?q=paris&appid=0a0351568563f30bdaa051a8b6b0c33a&units=metric';
    expect(actual).toBe(expected);
  });
});
