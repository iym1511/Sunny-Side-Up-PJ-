// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

interface initialStateType {
  status: string,
  apiData: null | any
}

export const asyncFetch = createAsyncThunk(
  'GeoSlice/asyncFetch',
  async ():Promise<any> => {
      const res = await axios.get<any>("http://api.openweathermap.org/geo/1.0/reverse?lat=35.1375583&lon=129.1003724&limit=5&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb");
      return res;
  }
)

const initialState:initialStateType = {
  status: "default",
  apiData: null
}

const GeoSlice = createSlice({
  name:"geo",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
      // 불러오는 로딩
      builder.addCase(asyncFetch.pending, (state): void => {
          state.status = 'loading';
      });
      // 불러왔을 때
      builder.addCase(asyncFetch.fulfilled, (state, action:PayloadAction<any>): void => {
          state.apiData = action.payload;
          state.status = 'complete';
      });
      // 불러오기 실패
      builder.addCase(asyncFetch.rejected, (state): void => {
          state.status = 'error';
      });
  },
})

export const { } = GeoSlice.actions;
export default GeoSlice.reducer;