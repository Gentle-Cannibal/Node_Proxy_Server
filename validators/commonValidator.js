import ValidationError from "../errors/validation.error.js";

function commonValidator(validator, object) {
    const {error} = validator(object);

    if (error) {
        throw new ValidationError(error);
    }
}

export default commonValidator;