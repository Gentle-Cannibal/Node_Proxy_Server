import express from "express";
import receiveLastMarsRoverPhotoService from "../services/marsRoverPhotos.service.js";
import createPath from "../utils/createPath.js";

const marsRoverPhotosController = express.Router();

async function receiveLastMarsRoverPhoto(request, response, next) {
  try {
    const result = await receiveLastMarsRoverPhotoService(request.body.api_key);
    response.json(result);
  } catch (error) {
    next(error);
  }
}

async function receiveLastMarsRoverPhotoForm(request, response, next) {
  try {
    response.render(createPath("lastRoverPhotoForm"));
  } catch (error) {
    next(error);
  }
}

async function receiveLastMarsRoverPhotoPage(request, response, next) {
  try {
    const result = await receiveLastMarsRoverPhotoService(request.body.apiKey);
    response.render(createPath("lastRoverPhotoPage"), {result});
  } catch (error) {
    next(error);
  }
}

marsRoverPhotosController.post(
  "/api/mars-rover-photos",
  receiveLastMarsRoverPhoto
);

marsRoverPhotosController.get(
  "/mars-rover-photos",
  receiveLastMarsRoverPhotoForm
);

marsRoverPhotosController.post(
  "/mars-rover-photos",
  receiveLastMarsRoverPhotoPage
);

export default marsRoverPhotosController;
