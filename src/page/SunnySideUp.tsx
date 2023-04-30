import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { asyncFetch } from "../module/weatherApi";
import { asyncFetch2 } from "../module/weatherApi";

import axios from "axios";
import { PositionType } from "../types/GeoLocation";
import { useSelector } from "react-redux";
import { GpsState } from "../types/Gps";
import { setGps } from "../module/gps";
import {getAirPollData} from "../module/airpollution";
import { Documents, KakaoApiType } from "../types/KakaoApi";
import { getPredict5Data } from "../module/predict5";





const SunnySideUp = () => {
  const weatherApiData2 = useAppSelector((state)=> {return state.weatherApi.apiData2});
  const weatherApiData= useAppSelector((state)=> {return state.weatherApi.apiData});
  const weatherApiStatus1 = useAppSelector((state)=>{return state.weatherApi.status1});
  const weatherApiStatus2 = useAppSelector((state)=>{return state.weatherApi.status2});
  const airPollData = useAppSelector((state)=>{return state.airPollApi.apiData});
  const airPollStatus = useAppSelector((state)=>{return state.airPollApi.status});
  const predict5Data = useAppSelector((state)=>{return state.predict5Api.apiData});
  const predict5Status = useAppSelector((state)=>{return state.predict5Api.status});
  const gps = useAppSelector((state)=> state.gps)
  const dispatch = useAppDispatch();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [si, setSi] = useState<string>();
  const [gu, setGu] = useState<string>();
  const [dong, setDong] = useState<string>();

  useEffect(()=>{
    dispatch(asyncFetch());
    dispatch(asyncFetch2());
    dispatch(getAirPollData());
    dispatch(getPredict5Data());
  },[]);


  useEffect(()=>{
    console.log("- - - - -첫 번째 api- - - - -")
    console.log(weatherApiStatus1)
    console.log(weatherApiData)
    console.log("- - - - -두 번쨰 api- - - - -")
    console.log(weatherApiStatus2)
    console.log(weatherApiData2)
    console.log("- - - - -세 번쨰 api- - - - -")
    console.log(airPollStatus);
    console.log(airPollData);
    console.log("- - - - -네 번쨰 api- - - - -")
    console.log(predict5Status);
    console.log(predict5Data);
  },[]);

  const onGeoOkay = (position: PositionType): void => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(position);
    console.log(latitude);
    console.log(longitude);
}

// gps에러 처리
const onGeoError = (): void => {
    alert("I can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition((position: PositionType) => onGeoOkay(position), onGeoError);

useEffect(()=>{
  dispatch(setGps({
    lat : latitude,
    lon : longitude
  }))
  console.log(gps)
})

const mapApi = async ():Promise<void> => {
    try {
        let response = await axios.get<KakaoApiType>(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
            {
                headers: {
                Authorization: 'KakaoAK f51796a442eb354b971c2dd54d146652',  
                },
            },
            )
            .then(response => {
            const location:Documents = response.data.documents[0];
            setSi(location.address.region_1depth_name);
            setGu(location.address.region_2depth_name);
            setDong(location.address.region_3depth_name);
            console.log(response)
            // locationX: location.address.x,
            // locationY: location.address.y,
            });
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(()=>{
        mapApi()
    },[latitude])



  return (  
    <div style={{border: "1px solid red"}}>
      <h1>ts 🔫</h1>
      <p>현재위치 : {si} {gu} {dong}</p>
      <h3>GPS</h3>
      <p>{gps.lat} | {gps.lon}</p>
      <p>{airPollStatus}</p>
      {/* <p>{airPollData && airPollData.list[0].components.co}</p> */}
      <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
      <img src={`https://openweathermap.org/img/wn/${weatherApiData2 && weatherApiData2.weather[0].icon}@2x.png`} />
      {/* {airPollData && airPollData.map((a:any)=>(
        <div>
          {a}
        </div>
      ))} */}
    </div>
  );
}

export default SunnySideUp;