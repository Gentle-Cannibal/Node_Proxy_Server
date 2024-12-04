import config from "../config/config.js";

const { NASA_API_KEY, NASA_API_URL } = config;

function getUrl(startDate, endDate) {
  return `${NASA_API_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`;
}

export default getUrl;
