import joi from "joi";
import { dateConstants } from "../config/constants.js";

const { dateExpression } = dateConstants;

const dateSchema = joi.alternatives().try(
  joi.string().pattern(dateExpression).optional(),
  joi.object({
    start: joi.string().pattern(dateExpression).required(),
    end: joi.string().pattern(dateExpression).required(),
  }).optional()
);

export { dateSchema };
