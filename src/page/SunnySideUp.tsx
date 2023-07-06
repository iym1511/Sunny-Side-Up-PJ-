import { useEffect, useState } from "react";
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
import styled from "styled-components";
import Loding from "./Loding";
import { useNavigate } from "react-router";

const SunnySideUp = () => {
  const weatherApiDataKr = useAppSelector((state) => {
    return state.weatherApiKr.apiData1;
  });
  const weatherApiData2 = useAppSelector((state) => {
    return state.weatherApi.apiData2;
  });
  const airPollData = useAppSelector((state) => {
    return state.airPollApi.apiData;
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [si, setSi] = useState<string>();
  const [gu, setGu] = useState<string>();
  const [dong, setDong] = useState<string>();
  const [morebox, setMoreBox] = useState<boolean>(false);

  useEffect(() => {
    dispatch(asyncFetch2());
    dispatch(getAirPollData());
    dispatch(getPredict5Data());
    dispatch(getNationwidePredict5Data());
  }, []);

  useEffect(() => {
    mapApi();
  }, [latitude]);

  const onGeoOkay = (position: PositionType): void => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  // gps에러 처리
  const onGeoError = (): void => {
    alert("I can't find you. No weather for you.");
  };

  // 오늘 날짜
  const newDate: Date = new Date();
  const date: number = newDate.getDate();
  const month: number = newDate.getMonth() + 1;
  const year: number = newDate.getFullYear();
  const day: number = newDate.getDay();
  const hours: number = newDate.getHours();

  const showDay = (): string | undefined => {
    if (day == 0) {
      return "일요일";
    } else if (day == 1) {
      return "월요일";
    } else if (day == 2) {
      return "화요일";
    } else if (day == 3) {
      return "수요일";
    } else if (day == 4) {
      return "목요일";
    } else if (day == 5) {
      return "금요일";
    } else if (day == 6) {
      return "토요일";
    }
  };

  const today: string = `${year}년 ${month}월 ${date}일 ${showDay()}`;

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
  // const TodayWeather: number | null =
  //   weatherApiData2 && weatherApiData2.weather[0].id;

  // 삼항연산자를 활용한 날씨별 배경(날씨값에따라 바로 랜더됨)
  const fewClouds: boolean | null =
    weatherApiData2 && weatherApiData2.weather[0].description.includes("few");
  const rain: boolean | null =
    weatherApiData2 && weatherApiData2.weather[0].description.includes("rain");
  const clouds: boolean | null =
    weatherApiData2 &&
    weatherApiData2.weather[0].id > 801 &&
    weatherApiData2.weather[0].id < 805;
  const sunny: boolean | null =
    weatherApiData2 && weatherApiData2.weather[0].description.includes("sky");
  const mist: boolean | null =
    weatherApiData2 && weatherApiData2.weather[0].description.includes("mist");
  const thunderstorm: boolean | null =
    weatherApiData2 &&
    weatherApiData2.weather[0].description.includes("thunderstorm");
  const snow: boolean | null =
    weatherApiData2 && weatherApiData2.weather[0].description.includes("snow");

  const todayWeatherIcon: number | null =
    weatherApiDataKr && weatherApiDataKr.weather[0].id;
  // const todayHours =
  const showWeatherIcon = (weather: number | null, hours: number) => {
    if (weather != null && weather <= 200) {
      return <img src={require("../img/bolt.png")} />;
    } else if (weather != null && weather >= 300 && weather < 600) {
      return <img src={require("../img/rain.png")} />;
    } else if (weather != null && weather >= 600 && weather < 700) {
      return <img src={require("../img/snow.png")} />;
    } else if (weather != null && weather >= 700 && weather < 800) {
      return <img src={require("../img/fog.png")} />;
    } else if (weather != null && weather === 800) {
      if (hours > 19 || hours < 6) {
        return <img src={require("../img/moon.png")} />;
      } else {
        return <img src={require("../img/sun.png")} />;
      }
    } else if (weather != null && weather === 801) {
      if (hours > 19 || hours < 6) {
        return <img src={require("../img/mooncloud.png")} />;
      } else {
        return <img src={require("../img/suncloud.png")} />;
      }
    } else if (weather != null && weather > 801 && weather < 900) {
      return <img src={require("../img/clouds.png")} />;
    }
  };

  return weatherApiData2 ? (
    <SunnySideUpWallpaper>
      <GoHomeBtn
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </GoHomeBtn>
      {/* GPS 현재 위치 */}
      {latitude ? (
        <GpsBox>
          <CurrentLocation>
            {si} {gu} {dong}
          </CurrentLocation>
          <img onClick={mapApi} src={require("../img/gps.png")}></img>
        </GpsBox>
      ) : (
        <>
          <CurrentLocation>Loading...</CurrentLocation>
        </>
      )}

      {/* 오늘 날짜 */}
      <Today>{today}</Today>

      <TodayWeatherIcon>
        {showWeatherIcon(todayWeatherIcon, hours)}
      </TodayWeatherIcon>

      {fewClouds ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/fewClouds.mp4")} type="video/mp4" />
          </VideoBackground>
          {/* <p>{todayWeather}</p> */}
        </>
      ) : (
        <></>
      )}
      {rain ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/rain.mp4")} type="video/mp4" />
          </VideoBackground>
          {/* <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p> */}
        </>
      ) : (
        <></>
      )}
      {clouds ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/Clouds.mp4")} type="video/mp4" />
          </VideoBackground>
          {/* <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p> */}
        </>
      ) : (
        <></>
      )}
      {sunny ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/sunny.mp4")} type="video/mp4" />
          </VideoBackground>
          {/* <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p> */}
        </>
      ) : (
        <></>
      )}
      {thunderstorm ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source
              src={require("../videos/thunderstorm.mp4")}
              type="video/mp4"
            />
          </VideoBackground>
          {/* <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p> */}
        </>
      ) : (
        <></>
      )}
      {snow ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/snow.mp4")} type="video/mp4" />
          </VideoBackground>
          {/* <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p> */}
        </>
      ) : (
        <></>
      )}
      {mist ? (
        <>
          <VideoBackground autoPlay muted loop>
            <source src={require("../videos/mist.mp4")} type="video/mp4" />
          </VideoBackground>
          {/* <p>{weatherApiData2 && weatherApiData2.weather[0].description}</p> */}
        </>
      ) : (
        <></>
      )}

      <CurrentTemp>{tempGps?.toFixed(1)}°</CurrentTemp>
      <MoreBoxBtn
        onClick={() => {
          setMoreBox(!morebox);
        }}
      >
        {morebox ? "CLOSE" : "MORE"}
      </MoreBoxBtn>
      <MoreBox moreboxwidth={morebox}>
        <p>
          체감 온도 <span>|</span> {feelsLikeGps?.toFixed(1)}°
        </p>
        <p>
          대기질 <span>|</span> {printAirPollStatus()}
        </p>
        <p>
          일출 <span>|</span> {SunriseDate?.toLocaleString().slice(-10)}
        </p>
        <p>
          일몰 <span>|</span> {SunsetDate?.toLocaleString().slice(-10)}
        </p>
        <p>
          풍속 <span>|</span> {weatherApiData2?.wind.speed}m/sec
        </p>
        <p>
          습도 <span>|</span> {weatherApiData2?.main.humidity}%
        </p>
      </MoreBox>

      {/* 5일치 일기예보 */}
      <Forcast5Days />
      <Nationwide5Days />
    </SunnySideUpWallpaper>
  ) : (
    <Loding />
  );
};

export default SunnySideUp;

const SunnySideUpWallpaper = styled.div`
  position: relative;
  color: white;
  text-align: center;
  font-weight: lighter;
  /* padding: 50px; */
  padding: 70px 80px;
`;

const GoHomeBtn = styled.button`
  font-family: "NEXON Lv1 Gothic OTF";
  background-color: transparent;
  border: none;
  color: #ffffffab;
  font-size: 0.9em;
  padding: 7px 0;
  position: relative;
  right: 50%;
  width: 120px;
  border-radius: 10px;
  bottom: 30px;
  cursor: pointer;
  &:hover {
    color: white;
    text-shadow: 0 0 13px lemonchiffon;
    transition: 0.3s;
  }
  &::after {
    content: " →";
    opacity: 0;
    position: relative;
    top: 1px;
    left: 3px;
    transition: 0.3s;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(70%);
  object-fit: cover;
`;

const GpsBox = styled.div`
  display: flex;
  justify-content: center;
  & > p {
    margin-top: 10px;
    margin-left: 30px;
  }
  & > img {
    cursor: pointer;
    width: 26px;
    height: 26px;
    margin-top: 0px;
    margin-left: 5px;
  }
`;

const CurrentLocation = styled.p`
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 2em;
  margin: 10px;
`;

const Today = styled.p`
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.7);
  margin: 5px;
`;

const TodayWeatherIcon = styled.div`
  margin: 30px;
  padding: 5px;
  > img {
    width: 100px;
  }
`;

const CurrentTemp = styled.p`
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 2em;
  position: relative;
  left: 3px;
`;

const MoreBoxBtn = styled.button`
  font-family: "NEXON Lv1 Gothic OTF";
  margin: 20px;
  padding: 10px;
  width: 90px;
  border-radius: 0;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  &:hover {
    box-shadow: 0 0 10px lemonchiffon;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const MoreBox = styled.div<{ moreboxwidth: boolean }>`
  font-family: "NEXON Lv1 Gothic OTF";
  width: 300px;
  height: ${(props) => (props.moreboxwidth ? "220px" : "0px")};
  margin: auto;
  /* border: 1px solid black; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  margin-bottom: 40px;
  > p {
    margin: 8px;
    letter-spacing: 0.5px;
  }
  > p > span {
    color: #ffffff83;
    padding: 5px;
  }
`;
