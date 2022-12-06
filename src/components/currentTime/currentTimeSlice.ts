// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import { RootState } from "../../store/store";

const initialState = {
  time: 0,
  timeLoadingStatus: "Loading",
};
const currentTimeSlice = createSlice({
  name: "initTime",
  initialState,
  reducers: {
    setTime: (state: RootState, action) => void (state.time = action.payload),
    timeLoadingDone: (state: RootState) =>
      void (state.timeOnLoading = "Loaded"),
  },
});

const { actions } = currentTimeSlice;

export default currentTimeSlice.reducer;

export const { setTime } = actions;
