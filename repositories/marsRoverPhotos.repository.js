import { getMarsRoverPhotosUrl } from "../utils/getUrl.js";
import axios from "axios";
import repositoryErrorHandler from "../utils/repositoryErrorHandler.js";

async function receiveLastMarsRoverPhotoFromStorage(apiKey) {
  try {
    const url = getMarsRoverPhotosUrl(apiKey);
    return await axios.get(url);
  } catch (error) {
    repositoryErrorHandler(error);
  }
}

export default receiveLastMarsRoverPhotoFromStorage;
