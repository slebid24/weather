// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import { RootState } from "../../store/store";
import { ITypeOfTemp } from "types/data";

const initialState: ITypeOfTemp = {
  type: "celsius",
};

const tempTypesButtonsSlice = createSlice({
  name: "typeOfTemp",
  initialState,
  reducers: {
    newType: (state: RootState, action) => void (state.type = action.payload),
  },
});

const { actions } = tempTypesButtonsSlice;

export default tempTypesButtonsSlice.reducer;
export const { newType } = actions;
