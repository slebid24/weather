import { IAstroData } from "types/data";
import { DAY_LENGTH_URL } from "config/constants";
const AstroDataService = async (
  lat: number,
  lon: number
): Promise<IAstroData> => {
  const res = await fetch(
    `${DAY_LENGTH_URL}/json?lat=${lat}&lng=${lon}&formatted=0`
  )
    .then((response) => response.json())
    .then((response) => response.results);
  return res;
};

export default AstroDataService;
