import axios from 'axios';

const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?`;
const KEY = 'eb94afecd6ee7e8494ecdaf59826372c';

const fetchWeather = async (zip) => {
  const resp = await axios(`${BASE_URL}zip=11217,us&appid=${KEY}`)

  return resp.data;
};

export default fetchWeather
