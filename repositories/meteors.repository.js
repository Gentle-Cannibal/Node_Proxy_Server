import { getAsteroidsUrl } from "../utils/getUrl.js";
import axios from "axios";
import repositoryErrorHandler from "../utils/repositoryErrorHandler.js";

async function getMeteorsFromStorage(startDate, endDate) {
  try {
    const url = getAsteroidsUrl(startDate, endDate);
    return await axios.get(url);
  } catch (error) {
    repositoryErrorHandler(error);
  }
}

export default getMeteorsFromStorage;
