import getMeteorsFromStorage from "../repositories/meteors.repository.js";

async function getMeteorsService(
  startDate,
  endDate,
  wereDangerousMeteors,
  count
) {
  const meteorsFromStorage = await getMeteorsFromStorage(startDate, endDate);

  let result = handleMeteorsFromStorage(meteorsFromStorage);

  result = filterDangerousMeteors(result, wereDangerousMeteors);

  result = getNumberOfMeteorites(result, count);

  return result;
}

function getNumberOfMeteorites(meteors, count) {
  if (count === "true") {
    meteors = { numberOfMeteorites: meteors.length };
  }

  return meteors;
}

function filterDangerousMeteors(meteors, wereDangerousMeteors) {
  if (wereDangerousMeteors === "true") {
    meteors = meteors.filter(
      (meteor) => meteor.is_potentially_hazardous_asteroid === true
    );
  }

  if (wereDangerousMeteors === "false") {
    meteors = meteors.filter(
      (meteor) => meteor.is_potentially_hazardous_asteroid === false
    );
  }

  return meteors;
}

function handleMeteorsFromStorage(meteorsFromStorage) {
  const nearEarthObjects = meteorsFromStorage.data.near_earth_objects;

  let result = [];

  for (const day in nearEarthObjects) {
    const meteorsOfDay = nearEarthObjects[day].map(handleMeteors);
    result = [...result, ...meteorsOfDay];
  }

  return result;
}

function handleMeteors(meteor) {
  return {
    id: meteor.id,
    name: meteor.name,
    diameter_meters: meteor.estimated_diameter.meters.estimated_diameter_max,
    is_potentially_hazardous_asteroid: meteor.is_potentially_hazardous_asteroid,
    close_approach_date_full:
      meteor.close_approach_data[meteor.close_approach_data.length - 1]
        .close_approach_date_full,
    relative_velocity_kps:
      meteor.close_approach_data[meteor.close_approach_data.length - 1]
        .relative_velocity.kilometers_per_second,
  };
}

export default getMeteorsService;
