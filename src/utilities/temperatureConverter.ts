export const temperatureConverter = (integer: number, type: string): number => {
  if (type === "celsius") {
    return Math.round(integer - 273.15);
  }
  return Math.round((integer - 273.15) * 1.8 + 32.0);
};
