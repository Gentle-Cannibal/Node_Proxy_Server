import express from "express";
import getMeteorsService from "../services/meteors.service.js";
import { getDates } from "../helpers/dateHelper.js";
import createPath from "../utils/createPath.js";
import commonValidator from "../validators/commonValidator.js";
import { dateSchema } from "../validators/schemas.js";

const meteorsController = express.Router();

async function getMeteors(request, response, next) {
  try {
    const { date, wereDangerousMeteors, count } = request.query;

    const { startDate, endDate } = getDates(date);

    const result = await getMeteorsService(
      startDate,
      endDate,
      wereDangerousMeteors,
      count
    );

    response.json(result);
  } catch (error) {
    next(error);
  }
}

async function getMeteorsPage(request, response, next) {
  try {
    const { date, wereDangerousMeteors, count } = request.query;

    const { startDate, endDate } = getDates(date);

    const result = await getMeteorsService(
      startDate,
      endDate,
      wereDangerousMeteors,
      count
    );

    response.render(createPath("meteors"), { result });
  } catch (error) {
    next(error);
  }
}

meteorsController.get("/api/meteors", commonValidator(dateSchema), getMeteors);
meteorsController.get("/meteors", commonValidator(dateSchema), getMeteorsPage);

export default meteorsController;
