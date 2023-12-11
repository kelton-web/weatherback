const fetch = require('node-fetch');

export const getWeatherDataByCoords = async (lat: number, lon: number): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.CONNECT_WEATHER}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Error from weather service: ${response.statusText}`);
  }
  return await response.json();
};
