const key = '0A5nDJUpNXQQMSNCu5KCskqEGXiFoLqh';

// Get Weather Information
const getWeather = async (locId) => {

  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locId}?apikey=${key}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();
  return data[0];
};


// Get city Information
const getCity = async (city) => {

  const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();
  return data[0];
};