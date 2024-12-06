import "dotenv/config";

const config = {
  NASA_API_ASTEROIDS_URL: process.env.NASA_API_ASTEROIDS_URL,
  NASA_API_MARS_ROVER_PHOTOS_URL: process.env.NASA_API_MARS_ROVER_PHOTOS_URL,
  NASA_API_KEY: process.env.NASA_API_KEY,
  PORT: 4000,
};

export default config;
