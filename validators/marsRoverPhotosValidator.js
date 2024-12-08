import joi from "joi";
import { validationValues } from "../config/constants.js";

const { MIN_LENGTH_API_KEY, MAX_LENGTH_API_KEY } = validationValues;

function marsRoverPhotosValidator(apiKey) {
  const schema = joi
    .string()
    .min(MIN_LENGTH_API_KEY)
    .max(MAX_LENGTH_API_KEY)
    .required();

    return schema.validate(apiKey);
}

export default marsRoverPhotosValidator;
