import getUrl from "../utils/getUrl.js";
import axios from "axios";
import SourceError from "../errors/source.error.js";
import { statusCodes, errorMessages } from "../config/constants.js";

const { INTERNAL_SERVER_ERROR } = statusCodes;
const { HTTP_ERROR_MESSAGE, NO_RESPONSE_MESSAGE } = errorMessages;

async function getMeteorsFromStorage(startDate, endDate) {
  try {
    const url = getUrl(startDate, endDate);
    return await axios.get(url);
  } catch (error) {
    if (error.response) {
      throw new SourceError(error.response.status, HTTP_ERROR_MESSAGE);
    } else if (error.request) {
      throw new SourceError(INTERNAL_SERVER_ERROR, NO_RESPONSE_MESSAGE);
    } else {
      throw new SourceError(INTERNAL_SERVER_ERROR, error.message);
    }
  }
}

export default getMeteorsFromStorage;
