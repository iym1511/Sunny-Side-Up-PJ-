// tookit
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const getAirPollData = createAsyncThunk(
  'AirPollSlice/getAirPollData',
  async () => {
    const res = await axios.get("http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=e524509bbefc6ce7ac50ddf6a1e1b1fb")
  }
)

const initialState = {

}

const AirPollSlice = createSlice({
  name: "airPoll",
  initialState,
  reducers:{},
  extraReducers: (builder) => {

  }
})

export const {} = AirPollSlice.actions;
export default AirPollSlice.reducer;