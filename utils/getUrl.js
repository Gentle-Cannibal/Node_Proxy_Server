import config from "../config/config.js";

const { NASA_API_KEY, NASA_API_ASTEROIDS_URL, NASA_API_MARS_ROVER_PHOTOS_URL } =
  config;

function getAsteroidsUrl(startDate, endDate) {
  return `${NASA_API_ASTEROIDS_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`;
}

function getMarsRoverPhotosUrl(apiKey) {
  return `${NASA_API_MARS_ROVER_PHOTOS_URL}?api_key=${apiKey}`;
}

export { getAsteroidsUrl, getMarsRoverPhotosUrl };
