import express from "express";
import receiveLastMarsRoverPhotoService from "../services/marsRoverPhotos.service.js";
import marsRoverPhotosValidator from "../validators/marsRoverPhotosValidator.js";
import commonValidator from "../validators/commonValidator.js";

const marsRoverPhotosController = express.Router();

async function receiveLastMarsRoverPhoto(request, response, next) {
  try {
    const apiKey = request.body.api_key;

    commonValidator(marsRoverPhotosValidator, apiKey);

    const result = await receiveLastMarsRoverPhotoService(apiKey);
    
    response.send(`<img src=${result} alt="Last Rover Photo">`);
  } catch (error) {
    next(error);
  }
}

marsRoverPhotosController.post(
  "/api/mars-rover-photos",
  receiveLastMarsRoverPhoto
);

export default marsRoverPhotosController;
