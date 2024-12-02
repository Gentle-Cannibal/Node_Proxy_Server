import express from "express";
import getMeteorsService from "../services/meteors.service.js";

const meteorsController = express.Router();

async function getMeteors(request, response, next) {
  try {
    const result = await getMeteorsService();
    response.json(result);
  } catch (error) {
    next(error);
  }
}

meteorsController.get("/meteors", getMeteors);

export default meteorsController;
