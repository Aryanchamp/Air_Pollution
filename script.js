async function fetchAirQualityData() {
  const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'afa0abaa54msha14d99c84c3628dp1abc27jsn88ee31efe96a',
      'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();


    console.log(result);

    CO.innerHTML = response.CO
    NO2.innerHTML = response.NO2
    O3.innerHTML = response.O3
    SO2.innerHTML = response.SO2
    PM10.innerHTML = response.PM10
    overall_aqi.innerHTML = response.overall_aqi


  } catch (error) {
    console.error(error);
  }
}

fetchAirQualityData();



