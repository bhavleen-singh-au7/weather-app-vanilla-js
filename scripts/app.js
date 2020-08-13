const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const dayNight = document.querySelector('.time');
const wIcon = document.querySelector('.icon img');

const updateUI = (data) => {

  const { cityDetails, weatherDet } = data;

  // Update the icon images
  let weatherSrc = `/img/icons/${weatherDet.WeatherIcon}.svg`;
  wIcon.setAttribute('src', weatherSrc);

  // Update the night/day
  let timeSrc = weatherDet.IsDayTime ?
    'img/day.svg' :
    'img/night.svg';

  dayNight.setAttribute('src', timeSrc);

  // Update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
      <div class="my-3">${weatherDet.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weatherDet.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
      </div>
  `;


  // Remove the d-none class if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};

const updateCity = async (city) => {

  const cityDetails = await getCity(city);
  const weatherDet = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weatherDet: weatherDet
  };

};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});