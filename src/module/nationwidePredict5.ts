// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";
import { NationwideData, initialStateType, List, Params, Location } from "../types/NationwidePredict5";
import { Predict5Api } from "../types/Predict5";
// import { Params } from "react-router";
// import { Predict5Api, initialStateType } from "../types/Predict5";
// import { List, Params , WeatherData ,initialStateType} from "../types/WeatherApi";



const location: Location[] = [
  {name: "Seoul", lat: 127.0, lon: 37.583328},
  {name: "Incheon", lat:126.416107, lon:37.453609},
  {name: "Daejeon", lat: 36.333328, lon: 127.416672 },
  {name: "Daegu",lon: 128.550003,lat: 35.799999},
  {name: "Busan", lon: 129.050003, lat: 35.133331},
  {name: "Ulsan", lon: 129.266663,lat: 35.566669},
  {name: "Gwangju", lon: 126.916672,lat: 35.166672},
  {name: "Gangneung", lon: 128.896103, lat: 37.755562},
  {name: "Jeju-do", lon: 126.5, lat: 33.416672},
  {name: "Gyeongsangbuk-do", lon: 128.75, lat: 36.333328}
]

export let nationwideDataArray: any = [];

// export const getNationwidePredict5Data = createAsyncThunk(
//   "NationwidePredict5Slice/getNationwidePredict5Data",
//   async ():Promise<any> => {

//     location.map(async(loc,i)=>{
//       const res = await axios.get<any>(
//         `http://api.openweathermap.org/data/2.5/weather?q=${loc.name}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb`
//       )
//       nationwideDataArray.push(res.data)
//     })
//     return nationwideDataArray;
//   }
// )

let dataArray:any = [];
let locationArray:any = [];

export const getNationwidePredict5Data = createAsyncThunk(
  "NationwidePredict5Slice/getNationwidePredict5Data",
  async (): Promise<any> => {
    const params: Params = {
      id: "1835847,1843561,1835224,1835327,1838519,1833742,1841808,1843137,1846265,1841597",
      appid: "e524509bbefc6ce7ac50ddf6a1e1b1fb",
      units: "metric",
    };

    location.forEach(async(loc,i)=>{
      const res = await axios.get<NationwideData>(
        `http://api.openweathermap.org/data/2.5/forecast?q=${loc.name}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb&units=metric`
      )
      dataArray = Array.isArray(res) ? res : [res];
    console.log(dataArray); // 배열에 넣어 사용
    locationArray.push(dataArray);
  })
    return locationArray;

      // const res = await axios.get<any>(
      //   `http://api.openweathermap.org/data/2.5/forecast?q=Busan&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb`
      // )

    // const res = await axios.get<any>(
    //   `https://api.openweathermap.org/data/2.5/forecast?group`,
    //   { params } 
    // );
    // return res.data;
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
      (state, action: PayloadAction<any>): void => {
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