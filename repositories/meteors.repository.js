import axios from "axios";
import config from "../config/config.js";

const { NASA_API_KEY, NASA_API_ASTEROIDS_URL } = config;

async function getMeteorsFromStorage(startDate, endDate) {
  const url = `${NASA_API_ASTEROIDS_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`;
  return await axios.get(url);
}

export default getMeteorsFromStorage;
