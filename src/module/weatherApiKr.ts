// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import { PositionType } from "../types/GeoLocation";
import {
  List,
  initialStateType,
} from "../types/WeatherApi";


export const asyncFetch = createAsyncThunk(
  "WeatherSlice/asyncFetch2",
  async (): Promise<List> => {
    const onGeoOkay = (position: PositionType): void => {
      const latitude: number = position.coords.latitude;
      const longtitude: number = position.coords.longitude;
      sessionStorage.setItem("latitude", `${latitude}`);
      sessionStorage.setItem("longtitude", `${longtitude}`);
    };
    const onGeoError = (): void => {
      alert("I can't find you. No weather for you.");
    };
    navigator.geolocation.getCurrentPosition(
      (position: PositionType) => onGeoOkay(position),
      onGeoError
    );
    const lat: string | null = sessionStorage.getItem("latitude");
    const lon: string | null = sessionStorage.getItem("longtitude");
    const res = await axios.get<List>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb&units=metric&lang=kr`
    );
    return res.data;
  }
);

const initialState: initialStateType = {
  status1: "default",
  status2: "default",
  error: null,
  apiData1: null,
  apiData2: null,
};

const WeatherKrSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 불러오는 로딩
    builder.addCase(asyncFetch.pending, (state): void => {
      state.status1 = "loading";
    });
    // 불러왔을 때
    builder.addCase(
      asyncFetch.fulfilled,
      (state, action: PayloadAction<List>): void => {
        state.apiData1 = action.payload;
        state.status1 = "complete";
      }
    );
    // 불러오기 실패
    builder.addCase(asyncFetch.rejected, (state): void => {
      state.error = "error";
    });
  },
});

export const {} = WeatherKrSlice.actions;
export default WeatherKrSlice.reducer;
