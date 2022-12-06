export function getZero(num: number) {
  if (num > 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

export const defineDivider = (def: number) => {
  if (def > 190) {
    return 2.5;
  } else if (def > 169) {
    return 3;
  } else if (def > 155) {
    return 2;
  } else if (def > 140) {
    return 2.5;
  } else if (def > 130) {
    return 3;
  } else if (def > 120) {
    return 4;
  } else if (def > 110) {
    return 4;
  } else if (def > 100) {
    return 5;
  } else if (def > 90) {
    return 6;
  } else if (def > 80) {
    return 20;
  }
  return def;
};

export const defineFontSize = (def: number) => {
  if (def < 100) {
    return 13;
  }
  return 14;
};

export function getTimeRemaining(t: number) {
  const timeObj = {
    hours: getZero(Math.floor((t / (60 * 60)) % 24)),
    minutes: getZero(Math.floor((t / 60) % 60)),
    seconds: getZero(Math.floor(t % 60)),
  };
  return timeObj;
}
