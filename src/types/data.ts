export interface ComponentPosition {
  position: string;
}

export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface DateInterface {
  dayOfMonth: string;
  month: string;
  year: string;
  dayOfWeek: string;
  time: string;
  ts: number;
}

export interface GeoLocFromData {
  lat: number;
  lon: number;
}

export interface AstroDate {
  sunrise: string;
  solar_noon: string;
  sunset: string;
  day_length: number;
}

export interface DayLengthItemData {
  astroClassName: string;
  astroTitle: string;
  astroDef: string;
}

export interface TimeZone {
  timeZone: number;
  dayOfWeek: string;
}

export interface WeatherDefCompilation extends ComponentPosition {
  phenomen: string | number;
  defenition: number | string;
}

interface ICity {
  id: number;
  name: string;
  coord: GeoLocFromData;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IClouds {
  all: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ISys {
  pod: string;
}

export interface IList {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visability: number;
  pop: number;
  sys: ISys;
  dt_txt: string;
}

export interface ICommonData {
  cod: string;
  message: number;
  cnt: number;
  list: IList[];
  city: ICity;
}

export interface IStateIn {
  initCityStatus: string;
  commonData: ICommonData;
  timeStamp: number;
}

export interface ITypeOfTemp {
  type: string;
}

export interface IAstroData {
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  day_length: number;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  solar_noon: string;
  sunrise: string;
  sunset: string;
}

interface ILocalNames {
  [CountryISO: string]: string;
}

export interface ICitySearchingData {
  country: string;
  lat: number;
  local_names: ILocalNames;
  lon: number;
  name: string;
  state: string;
}

export interface ITypeOfInitialDonwloadingDepenFromRoute {
  isEmptyLink: boolean;
}

export enum DayofWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  Jule,
  August,
  September,
  October,
  November,
  December,
}
