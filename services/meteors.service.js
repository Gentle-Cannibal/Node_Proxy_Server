import getMeteorsFromStorage from "../repositories/meteors.repository.js";
import handleMeteors from "../helpers/meteorsHelper.js";

async function getMeteorsService() {
  const meteorsFromStorage = await getMeteorsFromStorage();

  const nearEarthObjects = meteorsFromStorage.data.near_earth_objects;

  let result = [];

  for (const day in nearEarthObjects) {
    const meteorsOfDay = nearEarthObjects[day].map(handleMeteors);
    result = [...result, ...meteorsOfDay];
  }
  
  return result;
}

export default getMeteorsService;
