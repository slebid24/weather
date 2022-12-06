import { GEO_URL, API_KEY } from "../config/constants";
import { GeoLocFromData } from "types/data";
const geoCodingService = async (
  lat: number,
  lon: number
): Promise<GeoLocFromData> => {
  const res = await fetch(
    `${GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=10&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((response) => response[0]);

  return res;
};

export default geoCodingService;
