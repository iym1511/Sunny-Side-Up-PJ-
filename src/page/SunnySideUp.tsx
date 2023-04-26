import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { asyncFetch } from "../module/weatherApi";
import { asyncFetch2 } from "../module/weatherApi";
import axios from "axios";

interface KakaoApiType {
  meta: {
    total_count: number,
  },
  documents: Documents[]
};

interface Documents {
  address: {
    address_name: string,
    region_1depth_name: string,
    region_2depth_name: string,
    region_3depth_name: string,
    mountain_yn: 'N' | 'Y',
    main_address_no: string,
    sub_address_no: string,
    zip_code: string,
    x: string,
    y: string,
  },
  road_address: {
    address_name: string,
    region_1depth_name: string,
    region_2depth_name: string,
    region_3depth_name: string,
    road_name: string,
    underground_yn: 'N' | 'Y',
    main_building_no: string,
    sub_building_no: string,
    building_name: string,
    zone_no: string,
    x: string,
    y: string,
  } | null,
}

interface Coord {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

interface PositionType {
  coords : Coord
  timestamp : number;
}

const SunnySideUp = () => {

  const weatherApiData2 = useAppSelector((state)=> {return state.weatherApi.apiData2});
  const weatherApiData= useAppSelector((state)=> {return state.weatherApi.apiData});

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(asyncFetch());
    dispatch(asyncFetch2());
  },[]);

  useEffect(()=>{
    console.log(weatherApiData)
    console.log(weatherApiData2)
  },[]);

  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [si, setSi] = useState<string>();
  const [gu, setGu] = useState<string>();
  const [dong, setDong] = useState<string>();

  const onGeoOkay = (position: PositionType): void => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(position);
    console.log(latitude);
    console.log(longitude);
}

function onGeoError(): void {
    alert("I can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition((position: PositionType) => onGeoOkay(position), onGeoError);



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
        console.log(error);
        }
    };

    useEffect(()=>{
        mapApi()
    },[latitude])



  return (  
    <div style={{border: "1px solid red"}}>
      <h1>ts 🔫</h1>
      <p>현재위치 : {si} {gu} {dong}</p>
    </div>
  );
}

export default SunnySideUp;