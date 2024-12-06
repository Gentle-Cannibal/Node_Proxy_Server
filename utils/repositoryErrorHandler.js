import { statusCodes, errorMessages } from "../config/constants.js";
import SourceError from "../errors/source.error.js";

const { INTERNAL_SERVER_ERROR } = statusCodes;
const { HTTP_ERROR_MESSAGE, NO_RESPONSE_MESSAGE } = errorMessages;

function repositoryErrorHandler(error) {
  if (error.response) {
    throw new SourceError(error.response.status, HTTP_ERROR_MESSAGE);
  } else if (error.request) {
    throw new SourceError(INTERNAL_SERVER_ERROR, NO_RESPONSE_MESSAGE);
  } else {
    throw new SourceError(INTERNAL_SERVER_ERROR, error.message);
  }
}

export default repositoryErrorHandler;
