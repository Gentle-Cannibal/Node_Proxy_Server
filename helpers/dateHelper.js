import { dateConstants } from "../config/constants.js";
import { subDays, addDays, format } from "date-fns";

const { dateFormat, daysInWeek } = dateConstants;

function getDates(date) {
  let startDate;
  let endDate;

  if (date) {
    if (typeof date === "object") {
      startDate = date.start;
      endDate = date.end;
    } else {
      startDate = date;
      endDate = format(addDays(dateParser(date), daysInWeek), dateFormat);
    }
  } else {
    startDate = format(subDays(new Date(), daysInWeek), dateFormat);
    endDate = format(new Date(), dateFormat);
  }

  return { startDate, endDate };
}

function dateParser(date) {
  return new Date(Date.parse(date));
}

export { getDates, dateParser };
