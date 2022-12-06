import { GEO_URL, API_KEY } from "../config/constants";
import { ICitySearchingData } from "types/data";

const citySearchingService = async (
  city: string
): Promise<ICitySearchingData[]> => {
  const res = await fetch(
    `${GEO_URL}/direct?q=${city}&limit=20&appid=${API_KEY}`
  ).then((response) => response.json());
  return res;
};

export default citySearchingService;
