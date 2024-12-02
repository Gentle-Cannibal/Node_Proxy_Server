class SourceError extends Error {
  constructor(statusCode, ...params) {
    super(...params);
    this.name = "SourceError";
    this.argument = statusCode;
  }
}

export default SourceError;