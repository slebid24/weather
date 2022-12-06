export const unit = (phenomen: string | number): string => {
  switch (phenomen) {
    case "Wind":
      return "km/h";
    case "Humidity":
      return "%";
    case "Precipitation":
      return "mm";
    case "Cloudiness":
      return "%";
    case "Pressure":
      return "hPa";
    case "Visability":
      return "km";
    default:
      return "";
  }
};
