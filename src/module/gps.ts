// tookit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GpsState } from "../types/Gps";

const initialState: GpsState = {
  lat: "",
  lon: "",
};

export const GpsSlice = createSlice({
  name: "gps",
  initialState,
  reducers: {
    setGps: (state, action: PayloadAction<GpsState>): void => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const { setGps } = GpsSlice.actions;
export default GpsSlice.reducer;
