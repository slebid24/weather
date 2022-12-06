export const zoomDefenition = (populat: number): number => {
  if (populat < 10000) {
    return 13;
  } else if (populat < 100000) {
    return 12;
  } else if (populat < 500000) {
    return 11;
  } else if (populat < 1000000) {
    return 10;
  } else if (populat < 10000000) {
    return 9;
  }
  return 12;
};
