// tookit
import { createSlice } from "@reduxjs/toolkit";
import { PositionType } from "../types/GeoLocation";
import { GpsState } from "../types/Gps";

const initialState:GpsState = {
  lat: null,
  lon:null
}

export const GpsSlice = createSlice({
  name: "gps",
  initialState,
  reducers:{
    setGps : (state, action) =>{

    }
  }
})

export const {setGps} = GpsSlice.actions;
export default GpsSlice.reducer;