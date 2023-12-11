const fetch = require('node-fetch');
import Weather from '../models/Weather';

export const getWeatherData = async (city: string) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.CONNECT_WEATHER}`);
  console.log(response);
  
  if (!response.ok) {
    throw new Error(`Error from weather service: ${response.statusText}`);
  }
  const data = await response.json();

  // const weather = new Weather({ city, forecast: data });
  // await weather.save();

  return data;
};
