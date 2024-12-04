import express from "express";
import getMeteorsService from "../services/meteors.service.js";
import getDates from '../helpers/dateHelper.js'

const meteorsController = express.Router();

async function getMeteors(request, response, next) {
  try {
    const { date, wereDangerousMeteors, count } = request.query;
    
    const { startDate, endDate } = getDates(date);

    const result = await getMeteorsService(startDate, endDate, wereDangerousMeteors, count);

    response.json(result);
  } catch (error) {
    next(error);
  }
}

meteorsController.get("/meteors", getMeteors);

export default meteorsController;
