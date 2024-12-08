import {
  consoleFontColors,
  statusCodes,
  userMessages,
} from "../config/constants.js";
import SourceError from "../errors/source.error.js";
import ValidationError from "../errors/validation.error.js";

const { RED } = consoleFontColors;
const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = statusCodes;
const { ERROR_HAPPENED_MESSAGE } = userMessages;

function commonErrorHandler(error, request, response, next) {
  if (error instanceof SourceError) {
    console.error(RED, error.stack);
    response
      .status(error.argument)
      .json({ error: ERROR_HAPPENED_MESSAGE, statusCode: error.argument });
  } else if (error instanceof ValidationError) {
    console.error(RED, error.stack);
    response.status(BAD_REQUEST).json({
      error: error.message,
      statusCode: BAD_REQUEST
    });
  } else {
    console.error(RED, error.stack);
    response.status(INTERNAL_SERVER_ERROR).json({
      error: ERROR_HAPPENED_MESSAGE,
      statusCode: INTERNAL_SERVER_ERROR,
    });
  }
}

export default commonErrorHandler;
