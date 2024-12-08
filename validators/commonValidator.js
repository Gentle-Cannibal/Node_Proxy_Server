import ValidationError from "../errors/validation.error.js";

function commonValidator(schema) {
  return (request, response, next) => {
    const { error } = schema.validate(request.query.date);

    if (error) {
      throw new ValidationError(error);
    }

    next();
  };
}

export default commonValidator;
