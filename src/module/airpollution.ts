// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import { AirPollutionApi, List, initialStateType } from "../types/airpollution";

export const getAirPollData = createAsyncThunk(
  "AirPollSlice/getAirPollData",
  async (): Promise<AirPollutionApi> => {
    const lat: string | null = sessionStorage.getItem("latitude");
    const lon: string | null = sessionStorage.getItem("longtitude");
    const res = await axios.get<AirPollutionApi>(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb&units=metric`
    );
    return res.data;
  }
);

const initialState: initialStateType = {
  status: "defauylt",
  apiData: null,
  error: null
};

const AirPollSlice = createSlice({
  name: "airPoll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 불러오는 로딩
    builder.addCase(getAirPollData.pending, (state): void => {
      state.status = "loading";
    });
    // 불러왔을 때
    builder.addCase(
      getAirPollData.fulfilled,
      (state, action: PayloadAction<AirPollutionApi>): void => {
        state.apiData = action.payload;
        state.status = "complete";
      }
    );
    // 불러오기 실패
    builder.addCase(getAirPollData.rejected, (state): void => {
      state.error = "error";
    });
  },
});

export const {} = AirPollSlice.actions;
export default AirPollSlice.reducer;
