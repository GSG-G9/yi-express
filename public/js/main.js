const city = document.getElementById('city');
const submitButton = document.getElementById('submit');
const div = document.getElementById('div');

submitButton.addEventListener('click', () => {
  fetch('/weather', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ city: city.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      div.textContent = JSON.stringify(data);
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
});
