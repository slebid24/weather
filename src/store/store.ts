import { configureStore } from "@reduxjs/toolkit";
import initStatus from "../components/wrapper/wrapperSlice";
import typeOfTemp from "../components/tempTypesButtons/tempTypesButtonsSlice";
import initTime from "../components/currentTime/currentTimeSlice";

const reducer = {
  data: initStatus,
  typeOfTemp: typeOfTemp,
  timeStamp: initTime,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware: () => any) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
