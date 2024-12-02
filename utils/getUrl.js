import config from "../config/config.js";

const { START_DATE, END_DATE, NASA_API_KEY, NASA_API_URL } = config;

function getUrl() {
    return `${NASA_API_URL}?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${NASA_API_KEY}`;
}

export default getUrl;
