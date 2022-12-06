// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import { RootState } from "../../store/store";
import { IStateIn } from "types/data";

const initialState: IStateIn = {
  initCityStatus: "loading",
  commonData: {
    cod: "NA",
    message: 0,
    cnt: 0,
    list: [
      {
        dt: 0,
        main: {
          temp: 0,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          sea_level: 0,
          grnd_level: 0,
          humidity: 0,
          temp_kf: 0,
        },
        weather: [
          {
            id: 0,
            main: "NA",
            description: "NA",
            icon: "NA",
          },
        ],

        clouds: {
          all: 0,
        },
        wind: {
          speed: 0,
          deg: 0,
          gust: 0,
        },
        visability: 0,
        pop: 0,
        sys: {
          pod: "NA",
        },
        dt_txt: "NA",
      },
    ],
    city: {
      id: 0,
      name: "NA",
      coord: {
        lat: 0,
        lon: 0,
      },
      country: "NA",
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
  },
  timeStamp: 0,
};

const wrapperSlice = createSlice({
  name: "initStatus",
  initialState,
  reducers: {
    initCityLoaded: (state: RootState) =>
      void (state.initCityStatus = "loaded"),
    initCityError: (state: RootState) => void (state.initCityStatus = "error"),
    newQueryLoading: (state: RootState) =>
      void (state.initCityStatus = "loading"),
    weatherData: (state: RootState, action) =>
      void (state.commonData = action.payload),
    actualTimeStamp: (state: RootState, action) =>
      void (state.timeStamp = action.payload),
  },
});

const { actions } = wrapperSlice;

export default wrapperSlice.reducer;
export const {
  initCityLoaded,
  initCityError,
  weatherData,
  newQueryLoading,
  actualTimeStamp,
} = actions;
