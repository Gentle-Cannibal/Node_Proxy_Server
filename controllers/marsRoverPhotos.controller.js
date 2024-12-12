import express from "express";
import receiveLastMarsRoverPhotoService from "../services/marsRoverPhotos.service.js";

const marsRoverPhotosController = express.Router();

async function receiveLastMarsRoverPhoto(request, response, next) {
  try {
    const result = await receiveLastMarsRoverPhotoService(request.body.api_key);

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
