import joi from "joi";
import { subDays } from "date-fns";
import { dateConstants } from "../config/constants.js";
import { dateParser } from "../helpers/dateHelper.js";

const { daysInWeek } = dateConstants;

function meteorsValidator(dates) {
  const { endDate } = dates;
  const parsedEndDate = dateParser(endDate);

  const minStartDate = subDays(parsedEndDate, daysInWeek);

  const schema = joi.object({
    startDate: joi.date().min(minStartDate).required(),
    endDate: joi.date().required(),
  });

  return schema.validate(dates);
}

export default meteorsValidator;
