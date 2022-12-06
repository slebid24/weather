import { DATA_URL, API_KEY } from "../config/constants";
import { ICommonData } from "types/data";

const getWeatherDataService = async (
  lat: number,
  lon: number
): Promise<ICommonData> => {
  const res = await fetch(
    `${DATA_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  ).then((response) => response.json());

  return res;
};

export default getWeatherDataService;
