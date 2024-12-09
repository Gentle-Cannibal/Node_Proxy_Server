import axios from "axios";
import config from "../config/config.js";

const { NASA_API_MARS_ROVER_PHOTOS_URL } = config;

async function receiveLastMarsRoverPhotoFromStorage(apiKey) {
  const url = `${NASA_API_MARS_ROVER_PHOTOS_URL}?api_key=${apiKey}`;
  return await axios.get(url);
}

export default receiveLastMarsRoverPhotoFromStorage;
