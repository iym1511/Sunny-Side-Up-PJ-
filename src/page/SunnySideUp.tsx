import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { asyncFetch2 } from "../module/weatherApi";

import axios from "axios";
import { PositionType } from "../types/GeoLocation";
import { setGps } from "../module/gps";
import { getAirPollData } from "../module/airpollution";
import { Documents, KakaoApiType } from "../types/KakaoApi";
import { getPredict5Data } from "../module/predict5";
import Forcast5Days from "../components/Forcast5Days";
import Nationwide5Days from "../components/Nationwide5Days";
import { getNationwidePredict5Data } from "../module/nationwidePredict5";
import styled from 'styled-components';
import { asyncFetch } from "../module/weatherApiKr";

const SunnySideUp = () => {
  // 한글로 출력해줘야하는대 망할놈이 안해줌
  const weatherApiDataKr = useAppSelector((state) => {
    return state.weatherApiKr.apiData1
  })
  const weatherApiData2 = useAppSelector((state) => {
    return state.weatherApi.apiData2;
  });
  const weatherApiStatus2 = useAppSelector((state) => {
    return state.weatherApi.status2;
  });
  const airPollData = useAppSelector((state) => {
    return state.airPollApi.apiData;
  });
  const airPollStatus = useAppSelector((state) => {
    return state.airPollApi.status;
  });


  const dispatch = useAppDispatch();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [si, setSi] = useState<string>();
  const [gu, setGu] = useState<string>();
  const [dong, setDong] = useState<string>();

  useEffect(() => {
    dispatch(asyncFetch());
    dispatch(asyncFetch2());
    dispatch(getAirPollData());
    dispatch(getPredict5Data());
    dispatch(getNationwidePredict5Data());
    // console.log(DateCheck)
    // console.log(DateCheck2)
    // console.log(DateCheck3);
    // console.log(DateCheck4);
    // console.log(dateSelect)
    // console.log(useDate)
  }, [latitude]);

  useEffect(() => {
    console.log("- - - - -첫 번째 api- - - - -");
    // console.log(weatherApiStatus1);
    // console.log(weatherApiData1);
    console.log("- - - - -두 번쨰 api- - - - -");
    console.log(weatherApiStatus2);
    console.log(weatherApiData2);
    console.log("- - - - -세 번쨰 api- - - - -");
    console.log(airPollStatus);
    console.log(airPollData);
    console.log("- - - - -네 번쨰 api- - - - -");
    // console.log(predict5Status);
    // console.log(predict5Data);
  }, []);

  const onGeoOkay = (position: PositionType): void => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  // gps에러 처리
  const onGeoError = (): void => {
    alert("I can't find you. No weather for you.");
  };

  // 오늘 날짜
  const date:Date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const today = `${year}년 ${month}월 ${day}일` 
  const getday = date.getDay();
  console.log(getday)

  // 일출
  const sunrise: number | undefined = weatherApiData2?.sys.sunrise;
  const SunriseDate: Date | undefined = sunrise
    ? new Date(sunrise * 1000)
    : undefined;

  // 일몰
  const sunset: number | undefined = weatherApiData2?.sys.sunset;
  const SunsetDate: Date | undefined = sunset
    ? new Date(sunset * 1000)
    : undefined;

  // GPS
  navigator.geolocation.getCurrentPosition(
    (position: PositionType) => onGeoOkay(position),
    onGeoError
  );

  useEffect(() => {
    dispatch(
      setGps({
        lat: latitude,
        lon: longitude,
      })
    );
    // console.log(gps);
  });

  // 대기질 측정
  const printAirPollStatus = (): string | undefined => {
    const airpollstatus: number | undefined = airPollData?.list[0].main.aqi;
    if (airpollstatus === 1) {
      return "좋음";
    } else if (airpollstatus === 2 || airpollstatus === 3) {
      return "보통";
    } else if (airpollstatus === 4) {
      return "나쁨";
    } else if (airpollstatus === 5) {
      return "매우 나쁨";
    }
  };

  // 현재 위치 기온
  const tempGps: number | undefined = weatherApiData2?.main.temp;

  // 현재 위치 체감 기온
  const feelsLikeGps: number | undefined = weatherApiData2?.main.feels_like;

  // Kakao 위도 경도에 따른 주소 불러오기
  const mapApi = async (): Promise<void> => {
    try {
      let response = await axios
        .get<KakaoApiType>(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
          {
            headers: {
              Authorization: "KakaoAK f51796a442eb354b971c2dd54d146652",
            },
          }
        )
        .then((response) => {
          const location: Documents = response.data.documents[0];
          setSi(location.address.region_1depth_name);
          setGu(location.address.region_2depth_name);
          setDong(location.address.region_3depth_name);
          // console.log(response);
          // locationX: location.address.x,
          // locationY: location.address.y,
        });
    } catch (error) {
      console.error(error);
    }
  };

  // if 문을 활용한 날씨별 배경
  const TodayWeather: number | null = weatherApiData2 && weatherApiData2.weather[0].id;

  // 삼항연산자를 활용한 날씨별 배경(날씨값에따라 바로 랜더됨)
  const fewClouds: boolean | null = weatherApiData2 && weatherApiData2.weather[0].description.includes("few");
  const rain: boolean | null = weatherApiData2 && weatherApiData2.weather[0].description.includes("rain");
  const clouds: boolean | null = weatherApiData2 && weatherApiData2.weather[0].id > 801 && weatherApiData2.weather[0].id < 805;
  const sunny: boolean | null = weatherApiData2 && weatherApiData2.weather[0].description.includes("sky");
  const mist: boolean | null = weatherApiData2 && weatherApiData2.weather[0].description.includes("mist");
  const thunderstorm: boolean | null = weatherApiData2 && weatherApiData2.weather[0].description.includes("thunderstorm");
  const snow: boolean | null = weatherApiData2 && weatherApiData2.weather[0].description.includes("snow");

  // 오늘 날씨 kr(개빡치게 한글로가져와도안됨)
  const todayWeather: string | null = weatherApiDataKr && weatherApiDataKr.weather[0].description


  // if 문을 활용한 날씨별 배경
  const showWeatherBackground = useCallback(() => {
    if (TodayWeather && TodayWeather <= 200) {
      return (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/thunderstorm.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
        </>
      );
    } else if (TodayWeather && TodayWeather >= 300 && TodayWeather < 600) {
      return (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/rain.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
        </>
      );
    } else if (TodayWeather && TodayWeather >= 600 && TodayWeather < 700) {
      <>
        <VideoBackground autoPlay muted loop>
          <source src={require("../videos/snow.mp4")} type="video/mp4" />
        </VideoBackground>
        <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
    </>
    } else if (TodayWeather && TodayWeather >= 700 && TodayWeather < 800) {
      return (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/mist.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
        </>
      );
    } else if (TodayWeather && TodayWeather === 800) {
      return (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/sunny.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
        </>
      );
    } else if (TodayWeather && TodayWeather === 801) {
      return (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/fewClouds.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
        </>
      );
    } else if (TodayWeather && TodayWeather > 801 && TodayWeather < 900) {
      return (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/Clouds.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
        </>
      );
    }
  }, [TodayWeather]);

  useEffect(() => {
    mapApi();
  }, [latitude]);
  

  return (
    <SunnySideUpWallpaper>
      {
        latitude ? (
          <GpsBox>
            <p>{si} {gu} {dong}</p>
            <img onClick={mapApi} src={require("../img/gps.png")}></img>
          </GpsBox>
        ):(
          <>
          <p>Loading...</p>
          </>
        )
      }
      <p>{today}</p>
      <img
        src={`https://openweathermap.org/img/wn/${
          weatherApiData2 && weatherApiData2.weather[0].icon
        }@2x.png`}
      />
      {
        fewClouds ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/fewClouds.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{todayWeather}</p>
          </>
        ):(
          <>
          </>
        )
      }
      {
        rain ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/rain.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
          </>
        ):(
          <>
          </>
        )
      }
      {
        clouds ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/Clouds.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
          </>
        ):(
          <>
          </>
        )
      }
      {
        sunny ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/sunny.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
          </>
        ):(
          <>
          </>
        )
      }
      {
        thunderstorm ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/thunderstorm.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
          </>
        ):(
          <>
          </>
        )
      }
      {
        snow ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/snow.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
          </>
        ):(
          <>
          </>
        )
      }
      {
        mist ? (
          <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/mist.mp4")} type="video/mp4" />
          </VideoBackground>
          <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p>
          </>
        ):(
          <>
          </>
        )
      }
      
      <p>{tempGps?.toFixed(1)}°C</p>
      <p>체감 온도 :{feelsLikeGps?.toFixed(1)}</p>
      <p>대기질 : {printAirPollStatus()}</p>
      <p>일출 : {SunriseDate?.toLocaleString()}</p>
      <p>일몰 : {SunsetDate?.toLocaleString()}</p>
      <p>풍속 : {weatherApiData2?.wind.speed}m/sec</p>
      <p>습도 : {weatherApiData2?.main.humidity}%</p>

      {/* 5일치 일기예보 */}
      <Forcast5Days />
      <Nationwide5Days />

    </SunnySideUpWallpaper>
  );
};

export default SunnySideUp;

const SunnySideUpWallpaper = styled.div`
  position: relative;
  color: white;
  text-align: center;
  font-weight: lighter;
`
const VideoBackground =  styled.video`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(70%);
  object-fit: cover;
`

const GpsBox = styled.div`
    display: flex;
    justify-content: center;
    & > p{
      margin-top: 40px;
      margin-left: 30px;
    }
    & > img{
      cursor: pointer;
      width: 26px;
      height: 26px;
      margin-top: 35px;
      margin-left: 5px;
    }
`
