import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_KEY;

const fetchWeather = async () => {
  try {
    const resp = await axios(`${BASE_URL}/${KEY}/42.3601,-71.0589?exclude=[minutely,flags,alerts]`)
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeather
