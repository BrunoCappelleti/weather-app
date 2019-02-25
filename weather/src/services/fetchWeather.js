import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_KEY;

const fetchWeather = async (zip) => {
  try {
    const resp = await axios(`${BASE_URL}zip=${zip},us&units=imperial&appid=${KEY}`)
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeather
