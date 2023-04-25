import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { asyncFetch } from "../module/weatherApi";
import axios from "axios";

const SunnySideUp = () => {
  const geoApiStatus = useAppSelector((state)=> state.geoApi.status)
  const geoApiData = useAppSelector((state)=> {return state.geoApi.apiData});
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(asyncFetch());
  })

  useEffect(()=>{
    console.log(geoApiStatus);
    console.log(geoApiData);
  },[geoApiStatus])

  const [latitude, setLatitude] = useState<any>();
  const [longitude, setLongitude] = useState<any>();
  const [si, setSi] = useState<null | any>();
  const [gu, setGu] = useState<null | any>();
  const [dong, setDong] = useState<null | any>();

  const onGeoOkay = (position: any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude)
    console.log(latitude);
    console.log(longitude)
}

function onGeoError() {
    alert("I can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);



const mapApi = async ():Promise<void> => {
    try {
        let response = await axios.get<any>(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
            {
                headers: {
                Authorization: 'KakaoAK f51796a442eb354b971c2dd54d146652',  
                },
            },
            )
            .then(response => {
            const location = response.data.documents[0];
            setSi(location.address.region_1depth_name);
            setGu(location.address.region_2depth_name);
            setDong(location.address.region_3depth_name);
            // locationX: location.address.x,
            // locationY: location.address.y,
            });
        } catch (error:any) {
        console.log(error);
        }
    };

    useEffect(()=>{
        mapApi()
    },[latitude])
    console.log(si)



  return (  
    <div style={{border: "1px solid red"}}>
      <h1>ts 🔫</h1>
      <p>현재위치 : {si} {gu} {dong}</p>
      {
        geoApiData &&
        geoApiData.map((a:any)=>(
          {a}
        ))
      }
    </div>
  );
}

export default SunnySideUp;