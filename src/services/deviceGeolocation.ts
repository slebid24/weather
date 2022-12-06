import { Geolocation } from "../types/data";

const getPositionService = async () => {
  const result: Geolocation = {
    latitude: 0,
    longitude: 0,
  };
  const options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
  };
  function success(pos: { coords: Geolocation }) {
    const crd = pos.coords;
    result.latitude = crd.latitude;
    result.longitude = crd.longitude;
  }
  function getPosition(options?: PositionOptions): Promise<any> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
  }
  await getPosition(options).then(success);
  return result;
};

export default getPositionService;
