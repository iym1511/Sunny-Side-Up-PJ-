// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios, { AxiosResponse } from "axios";

interface initialStateType {
  status: string,
  apiData: null | any
}

interface Coord {
  lon: number;
  lat: number;
}


interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface List {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
}

interface WeatherData {
  cnt: number;
  list: List[];
}

  interface Params {
  id ?: string;
  appid: string;
  lang: string;
  units: string;
  lat ?: number| undefined,
  lon ?: number| undefined
}

interface Coords {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}

interface GeolocationPosition {
  coords : Coords;
  timestamp : number;
}

// let latitude:number[] = [];
// let longitude:number[] = [];

// const onGeoOkay = (position: GeolocationPosition): void => {
// let lat = position.coords.latitude;
// let lon = position.coords.longitude;
// latitude.push(lat);
// longitude.push(lon);
// // console.log(position)
// // console.log(latitude[0]);
// // console.log(longitude[0]);
// }

// const onGeoError = () : void=> {
// alert("I can't find you. No weather for you.");
// }

// navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);

export const asyncFetch = createAsyncThunk(
  'geo/asyncFetch',
  async ():Promise<AxiosResponse<WeatherData>> => {
    const params:Params = {
      id : "1838519",
      appid :"e524509bbefc6ce7ac50ddf6a1e1b1fb",
      lang : "kr",
      units : "metric",
      // lat : lat,
      // lon : lon
  };
  const res = await axios.get<WeatherData>("https://api.openweathermap.org/data/2.5/group", {params});
  return res;
  }
)

const initialState:initialStateType = {
  status: 'default',
  apiData: null
}

const GeoSlice = createSlice({
  name:"geo",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
      // 불러오는 로딩
      builder.addCase(asyncFetch.pending, (state) => {
          state.status = 'loading';
      });
      // 불러왔을 때
      builder.addCase(asyncFetch.fulfilled, (state, action:PayloadAction<any>)  => {
          state.apiData = action.payload;
          // console.log(action.payload);
          state.status = 'complete';
      });
      // 불러오기 실패
      builder.addCase(asyncFetch.rejected, (state) => {
          state.status = 'error';
      });
  },
})

export const { } = GeoSlice.actions;
export default GeoSlice.reducer;