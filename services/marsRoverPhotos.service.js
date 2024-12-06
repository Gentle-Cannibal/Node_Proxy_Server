import receiveLastMarsRoverPhotoFromStorage from "../repositories/marsRoverPhotos.repository.js";

async function receiveLastMarsRoverPhotoService(apiKey) {
  const photosFromStorage = await receiveLastMarsRoverPhotoFromStorage(apiKey);

  const latestPhotos = photosFromStorage.data.latest_photos;

  const lastPhotoImgSrc = latestPhotos[latestPhotos.length - 1].img_src;

  return lastPhotoImgSrc;
}

export default receiveLastMarsRoverPhotoService;
