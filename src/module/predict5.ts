// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import { List, Predict5Api, initialStateType } from "../types/Predict5";

export const getPredict5Data = createAsyncThunk(
  "Predict5Slice/getPredict30Data",
  async (): Promise<Predict5Api> => {
    const lat: string | null = sessionStorage.getItem("latitude");
    const lon: string | null = sessionStorage.getItem("longtitude");
    const res = await axios.get<Predict5Api>(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=645aba597e8991be8a8b903b0bd29be1&units=metric`
    );
    return res.data;
  }
);

const initialState: initialStateType = {
  status: "default",
  apiData: null,
  error: null,
};

const Predict5Slice = createSlice({
  name: "predict5",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 불러오는 로딩
    builder.addCase(getPredict5Data.pending, (state): void => {
      state.status = "loading";
    });
    // 불러왔을 때
    builder.addCase(
      getPredict5Data.fulfilled,
      (state, action: PayloadAction<Predict5Api>): void => {
        state.apiData = action.payload;
        state.status = "complete";
      }
    );
    // 불러오기 실패
    builder.addCase(getPredict5Data.rejected, (state): void => {
      state.error = "error";
    });
  },
});

export const {} = Predict5Slice.actions;
export default Predict5Slice.reducer;
