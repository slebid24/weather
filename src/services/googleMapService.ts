import { zoomDefenition } from "utilities/zoomDefenition";
import { GOOGLE_API_K, GOOGLE_MAP_URL } from "config/constants";
const googleMapService = async (
  lat: number,
  lon: number,
  population: number
): Promise<string> => {
  const res = await fetch(
    `${GOOGLE_MAP_URL}/staticmap?center=${lat},${lon}&zoom=${zoomDefenition(
      population
    )}&size=900x300&scale=2&maptype=terrain&key=${GOOGLE_API_K}`
  ).then((body) => {
    return body.url;
  });
  return res;
};

export default googleMapService;
