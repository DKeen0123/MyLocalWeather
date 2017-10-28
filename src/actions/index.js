import axios from 'axios';

const API_KEY = 'ff95d9dc528d4740afa81127172710';
const ROOT_URL = `https://api.apixu.com/v1/current.json?key=${API_KEY}&q=`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(latitude, longitude) {
  const url = `${ROOT_URL}${latitude},${longitude}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
