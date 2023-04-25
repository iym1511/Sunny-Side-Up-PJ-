// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

interface initialStateType {
  status: string,
  apiData: null | any
}

let latitude:number[] = [];
let longitude:number[] = [];

const onGeoOkay = (position: GeolocationPosition): void => {
let lat = position.coords.latitude;
let lon = position.coords.longitude;
latitude.push(lat);
longitude.push(lon);
console.log(position)
console.log(latitude[0]);
console.log(longitude[0]);
}

const onGeoError = () : void => {
alert("I can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);
// http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb

export const asyncFetch = createAsyncThunk(
  'GeoSlice/asyncFetch',
  async ():Promise<any> => {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude[0]}&lon=${longitude[0]}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb&lang=kr`);
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
          console.log(action.payload);
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