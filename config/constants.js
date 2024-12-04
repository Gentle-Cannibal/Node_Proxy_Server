const statusCodes = {
  INTERNAL_SERVER_ERROR: 500,
};

const errorMessages = {
  HTTP_ERROR_MESSAGE: "HTTP error! The status code is different than 200-299.",
  NO_RESPONSE_MESSAGE:
    "The request to source was made but no response was received!",
};

const userMessages = {
  ERROR_HAPPENED_MESSAGE: "Error happened! Please try again later.",
};

const consoleFontColors = {
  RED: "\x1b[31m",
};

const dateConstants = {
  dateFormat: "yyyy-MM-dd",
  daysInWeek: 7,
};

export {
  statusCodes,
  errorMessages,
  consoleFontColors,
  userMessages,
  dateConstants,
};
