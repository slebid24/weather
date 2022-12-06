// @ts-ignore
import { RootState } from "../../store/store";

export const initStatusSelector = (state: RootState) =>
  state.data.initCityStatus;
export const currentTimeForComparisonSelector = (state: RootState) =>
  state.timeStamp.time.ts;
export const activeTypeSelector = (state: RootState) => state.typeOfTemp.type;
export const differenceOfTimeZoneSelector = (state: RootState) =>
  state.data.commonData.city.timezone;
export const coordSelector = (state: RootState) =>
  state.data.commonData.city.coord;
export const timeZoneSelector = (state: RootState) =>
  state.data.commonData.city.timezone;
export const tstampListSelector = (state: RootState) =>
  state.data.commonData.list;
export const cityNameSelector = (state: RootState) =>
  state.data.commonData.city.name;
export const cityPopulationSelector = (state: RootState) =>
  state.data.commonData.city.population;
export const activeDataSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum];
export const weatherIconSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum].weather[0].icon;
export const tempOfCurrentDaySelector =
  (listNum: number) => (state: RootState) =>
    state.data.commonData.list[listNum].main.temp;
export const pressureDefSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum].main.pressure;
export const humDefSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum].main.humidity;
export const windDefSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum].wind.speed;
export const cloudDefSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum].clouds.all;
export const weatherDescSelector = (listNum: number) => (state: RootState) =>
  state.data.commonData.list[listNum].weather[0].description;
