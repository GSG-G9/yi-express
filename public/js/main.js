const city = document.getElementById('city');
const submitButton = document.getElementById('submit');
const cityName = document.getElementById('city-name');
const description = document.getElementById('description');
const temperature = document.getElementById('temp');
const wind = document.getElementById('wind');
const pressure = document.getElementById('pressure');
const icon = document.getElementById('icon');
submitButton.addEventListener('click', () => {
  fetch('/weather', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ city: city.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      cityName.textContent = `City Name : ${data.name}`;
      description.textContent = `description : ${data.weather[0].description}`;
      temperature.textContent = `temperature : ${data.main.temp}`;
      pressure.textContent = `pressure : ${data.main.pressure}`;
      wind.textContent = `wind Speed : ${data.wind.speed}  wind Degree : ${data.wind.deg}`;
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
});
