// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import {
  NationwideData,
  initialStateType,
  Location,
  Nationwide,
} from "../types/NationwidePredict5";

const location: Location[] = [
  { name: "Seoul", lat: 127.0, lon: 37.583328 },
  { name: "Incheon", lat: 126.416107, lon: 37.453609 },
  { name: "Daejeon", lat: 36.333328, lon: 127.416672 },
  { name: "Daegu", lon: 128.550003, lat: 35.799999 },
  { name: "Busan", lon: 129.050003, lat: 35.133331 },
  { name: "Ulsan", lon: 129.266663, lat: 35.566669 },
  { name: "Gwangju", lon: 126.916672, lat: 35.166672 },
  { name: "Gangneung", lon: 128.896103, lat: 37.755562 },
  { name: "Jeju-do", lon: 126.5, lat: 33.416672 },
  { name: "Gyeongsangbuk-do", lon: 128.75, lat: 36.333328 },
];

export const getNationwidePredict5Data = createAsyncThunk(
  "NationwidePredict5Slice/getNationwidePredict5Data",
  async (): Promise<Nationwide[]> => {
    const promises: Promise<NationwideData>[] = location.map((loc) => {
      return axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${loc.name}&appid=645aba597e8991be8a8b903b0bd29be1&units=metric`
      );
    });
    const responses: NationwideData[] = await Promise.all(promises);
    return responses.map((res) => res.data);
  }
);

const initialState: initialStateType = {
  status: "default",
  apiData: null,
  error: null,
};

const NationwidePredict5Slice = createSlice({
  name: "nationwidePredict5",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 불러오는 로딩
    builder.addCase(getNationwidePredict5Data.pending, (state): void => {
      state.status = "loading";
    });
    // 불러왔을 때
    builder.addCase(
      getNationwidePredict5Data.fulfilled,
      (state, action: PayloadAction<Nationwide[]>): void => {
        state.apiData = action.payload;
        state.status = "complete";
      }
    );
    // 불러오기 실패
    builder.addCase(getNationwidePredict5Data.rejected, (state): void => {
      state.error = "error";
    });
  },
});

export const {} = NationwidePredict5Slice.actions;
export default NationwidePredict5Slice.reducer;
