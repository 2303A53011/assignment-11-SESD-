// V1: fixed city
const API_KEY = 'REPLACE_WITH_YOUR_OPENWEATHER_API_KEY'; // replace before running
const city = 'London';
const units = 'metric'; // Celsius

async function fetchCurrentWeather(cityName){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=${units}&appid=${API_KEY}`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('Weather API error: ' + res.status);
  return res.json();
}

async function render(){
  try{
    const data = await fetchCurrentWeather(city);
    document.getElementById('city').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temp').textContent = `${Math.round(data.main.temp)} °C`;
    document.getElementById('summary').textContent = data.weather[0].description;
  }catch(err){
    document.getElementById('summary').textContent = 'Could not load weather.';
    console.error(err);
  }
}

render();
