// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import { PositionType } from "../types/GeoLocation";
import { List, Params, WeatherData, initialStateType } from "../types/WeatherApi";

// interface Coords {
//   accuracy: number;
//   altitude: number | null;
//   altitudeAccuracy: number | null;
//   heading: number | null;
//   latitude: number;
//   longitude: number;
//   speed: number | null;
// }

// interface GeolocationPosition {
//   coords : Coords;
//   timestamp : number;
// }

export const asyncFetch = createAsyncThunk(
    'WeatherSlice/asyncFetch',
    async ():Promise<List[]> => {
        const params: Params = {
            id : "1835847,1841610,1843125,1845106,1845105,1845789,1845788,1841597,1902028,1846265",
            appid :"e524509bbefc6ce7ac50ddf6a1e1b1fb",
            lang : "kr",
            units : "metric"
        };
        const res = await axios.get<WeatherData>("https://api.openweathermap.org/data/2.5/group", {params});
        return res.data.list;
    }
)

export const asyncFetch2 = createAsyncThunk(
  'WeatherSlice/asyncFetch2',
  async ():Promise<List[]> => {
    const onGeoOkay = (position: PositionType): void => {
      const latitude : number  = position.coords.latitude;
      const longtitude : number = position.coords.longitude;
      sessionStorage.setItem("latitude", `${latitude}`)
      sessionStorage.setItem("longtitude", `${longtitude}`)
    }
    const onGeoError = (): void =>{
      alert("I can't find you. No weather for you.");
    }
    navigator.geolocation.getCurrentPosition((position: PositionType) => onGeoOkay(position), onGeoError);
    const lat = sessionStorage.getItem("latitude");
    const lon = sessionStorage.getItem("longtitude");
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb`)
    return res.data;
  }
)

const initialState:initialStateType = {
    status1: "default",
    status2: "default",
    apiData: null,
    apiData2: null,
}

const WeatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // 불러오는 로딩
        builder.addCase(asyncFetch.pending, (state): void => {
            state.status1 = 'loading';
        });
        // 불러왔을 때
        builder.addCase(asyncFetch.fulfilled, (state, action:PayloadAction<List[]>): void => {
            state.apiData = action.payload;
            state.status1 = 'complete';
        });
        // 불러오기 실패
        builder.addCase(asyncFetch.rejected, (state): void => {
            state.status1 = 'error';
        });
        
        // 불러오는 로딩
        builder.addCase(asyncFetch2.pending, (state): void => {
            state.status2 = 'loading';
        });
        // 불러왔을 때
        builder.addCase(asyncFetch2.fulfilled, (state, action:PayloadAction<List[]>): void => {
            state.apiData2 = action.payload;
            state.status2 = 'complete';
        });
        // 불러오기 실패
        builder.addCase(asyncFetch2.rejected, (state): void => {
            state.status2 = 'error';
        });
    },
})

export const { } = WeatherSlice.actions;
export default WeatherSlice.reducer;