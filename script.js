const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'afa0abaa54msha14d99c84c3628dp1abc27jsn88ee31efe96a',
    'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
  }
};

async function getAirQuality(city) {
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = city;

  try {
    const response = await fetch(url + city, options);
    const result = await response.json();

    console.log(result);

    document.getElementById('CO').innerHTML = result.CO.concentration;
    document.getElementById('NO2').innerHTML = result.NO2.concentration;
    document.getElementById('O3').innerHTML = result.O3.concentration;
    document.getElementById('SO2').innerHTML = result.SO2.concentration;
    document.getElementById('PM10').innerHTML = result.PM10.concentration;
    document.getElementById('overall_aqi').innerHTML = result.overall_aqi;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getAirQuality('Punjab'); // Display Punjab as default city when page loads

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();
    if (city !== '') {
      getAirQuality(city);
    }
  });
});
