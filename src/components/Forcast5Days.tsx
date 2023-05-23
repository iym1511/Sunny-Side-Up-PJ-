import { useAppSelector } from "../hooks/reduxHooks";
import { List } from "../types/Predict5";
import "../css/Forcast5Days.css";
import { relative } from "path";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useEffect, useRef } from "react";

interface slickSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  arrows: boolean;
  slidesToShow: number;
  slidesToScroll: number;
}

const Forcast5Days = () => {
  const predict5Data = useAppSelector((state) => {
    return state.predict5Api.apiData;
  });

  // 시간
  const today: Date = new Date(); // 오늘 날짜 객체 생성
  const tomorrow: Date = new Date(today); // 오늘 날짜를 복사하여 다음 날짜 객체 생성
  const oneDate: number = today.getDate(); // 현재 날짜 출력
  const twoDate: number = tomorrow.getDate() + 1; // 다음 날짜 출력
  const threeDate: number = tomorrow.getDate() + 2;
  const fourDate: number = tomorrow.getDate() + 3;
  const fiveDate: number = tomorrow.getDate() + 4;

  // 5일 일기예보 타입 가져와서 사용
  const DateCheck: List[] | undefined = predict5Data?.list.filter(
    (a: List) => a.dt_txt.substr(8, 2) == String(oneDate)
  );
  const DateCheck2: List[] | undefined = predict5Data?.list.filter(
    (a: List) => a.dt_txt.substr(8, 2) == String(twoDate)
  );
  const DateCheck3: List[] | undefined = predict5Data?.list.filter(
    (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
  );
  const DateCheck4: List[] | undefined = predict5Data?.list.filter(
    (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
  );
  const DateCheck5: List[] | undefined = predict5Data?.list.filter(
    (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
  );

  // 슬릭에 연결해주는 useRef
  const slickRef: React.RefObject<Slider> = useRef<Slider>(null);

  // 슬릭 이전, 다음 클릭 감지
  const previous = useCallback(() => {
    slickRef.current?.slickPrev()
  }, []);

  const next = useCallback(() => {
    slickRef.current?.slickNext()
  }, []);

  const settings: slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // cssEase: "linear",
  };

  const showWeatherIcon = (weather: number | null, hours: number) => {
    if (weather != null && weather <= 200) {
      return <Forcast5DayIcon src={require("../img/bolt.png")} />;
    } else if (weather != null && weather >= 300 && weather < 600) {
      return <Forcast5DayIcon src={require("../img/rain.png")} />;
    } else if (weather != null && weather >= 600 && weather < 700) {
      return <Forcast5DayIcon src={require("../img/snow.png")} />;
    } else if (weather != null && weather >= 700 && weather < 800) {
      return <Forcast5DayIcon src={require("../img/fog.png")} />;
    } else if (weather != null && weather === 800) {
      if (hours > 17 || hours < 6) {
        return <Forcast5DayIcon src={require("../img/moon.png")} />;
      } else {
        return <Forcast5DayIcon src={require("../img/sun.png")} />;
      }
    } else if (weather != null && weather === 801) {
      if (hours > 17 || hours < 6) {
        return <Forcast5DayIcon src={require("../img/mooncloud.png")} />;
      } else {
        return <Forcast5DayIcon src={require("../img/suncloud.png")} />;
      }
    } else if (weather != null && weather > 801 && weather < 900) {
      return <Forcast5DayIcon src={require("../img/clouds.png")} />;
    }
  };

  useEffect(() => {
    console.log(DateCheck);
  });

  return (
    <>
      <Forcast5DayTimeBox>
        <TodaySpan>오늘</TodaySpan>
        {DateCheck &&
          DateCheck.map((data: List, index: number) => {
            const weatherId: number = data.weather[0].id;
            const hours: string = data.dt_txt.substr(11, 2);
            const numberHours: number = Number(hours);
            console.log(numberHours);
            return (
              <Forcast5DayTimeScrollDiv key={index}>
                <p>{data.dt_txt.substr(5, 14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                {showWeatherIcon(weatherId, numberHours)}
              </Forcast5DayTimeScrollDiv>
            );
          })}

        <TodaySpan>내일</TodaySpan>
        {DateCheck2 &&
          DateCheck2.map((data: List, index: number) => {
            const weatherId: number = data.weather[0].id;
            const hours: string = data.dt_txt.substr(11, 2);
            const numberHours: number = Number(hours);
            return (
              <Forcast5DayTimeScrollDiv key={index}>
                <p>{data.dt_txt.substr(5, 14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                {showWeatherIcon(weatherId, numberHours)}
              </Forcast5DayTimeScrollDiv>
            );
          })}

        <TodaySpan>모레</TodaySpan>
        {DateCheck3 &&
          DateCheck3.map((data: List, index: number) => {
            const weatherId: number = data.weather[0].id;
            const hours: string = data.dt_txt.substr(11, 2);
            const numberHours: number = Number(hours);
            return (
              <Forcast5DayTimeScrollDiv key={index}>
                <p>{data.dt_txt.substr(5, 14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                {showWeatherIcon(weatherId, numberHours)}
              </Forcast5DayTimeScrollDiv>
            );
          })}

        <TodaySpan>글피</TodaySpan>
        {DateCheck4 &&
          DateCheck4.map((data: List, index: number) => {
            const weatherId: number = data.weather[0].id;
            const hours: string = data.dt_txt.substr(11, 2);
            const numberHours: number = Number(hours);
            return (
              <Forcast5DayTimeScrollDiv key={index}>
                <p>{data.dt_txt.substr(5, 14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                {showWeatherIcon(weatherId, numberHours)}
              </Forcast5DayTimeScrollDiv>
            );
          })}

        <TodaySpan>그글피</TodaySpan>
        {DateCheck5 &&
          DateCheck5.map((data: List, index: number) => {
            const weatherId: number = data.weather[0].id;
            const hours: string = data.dt_txt.substr(11, 2);
            const numberHours: number = Number(hours);
            console.log(numberHours);
            return (
              <Forcast5DayTimeScrollDiv key={index}>
                <p>{data.dt_txt.substr(5, 14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                {showWeatherIcon(weatherId, numberHours)}
              </Forcast5DayTimeScrollDiv>
            );
          })}
      </Forcast5DayTimeBox>

      {/* 슬릭 */}
      <Sliderslick {...settings} ref={slickRef}>
        <SlickDiv>
          <SlickDiv>
            <TodaySpan>오늘</TodaySpan>
            {DateCheck &&
              DateCheck.map((data: List, index: number) => {
                const weatherId: number = data.weather[0].id;
                const hours: string = data.dt_txt.substr(11, 2);
                const numberHours: number = Number(hours);
                return (
                  <Forcast5DayTimeDiv key={index}>
                    <p>{data.dt_txt.substr(5, 14)}</p>
                    <p>{data.main.temp.toFixed(1)}°C</p>
                    {showWeatherIcon(weatherId, numberHours)}

                  </Forcast5DayTimeDiv>
                );
              })}
          </SlickDiv>
        </SlickDiv>

        <SlickDiv>
          <SlickDiv>
            <TodaySpan>내일</TodaySpan>
            {DateCheck2 &&
              DateCheck2.map((data: List, index: number) => {
                const weatherId: number = data.weather[0].id;
                const hours: string = data.dt_txt.substr(11, 2);
                const numberHours: number = Number(hours);
                return(

                <Forcast5DayTimeDiv key={index}>
                  <p>{data.dt_txt.substr(5, 14)}</p>
                  <p>{data.main.temp.toFixed(1)}°C</p>
                {showWeatherIcon(weatherId, numberHours)}
                </Forcast5DayTimeDiv>
                )
})}
          </SlickDiv>
        </SlickDiv>

        <SlickDiv>
          <SlickDiv>
            <TodaySpan>모레</TodaySpan>
            {DateCheck3 &&
              DateCheck3.map((data: List, index: number) => {
                const weatherId: number = data.weather[0].id;
                const hours: string = data.dt_txt.substr(11, 2);
                const numberHours: number = Number(hours);
                return(
                <Forcast5DayTimeDiv key={index}>
                  <p>{data.dt_txt.substr(5, 14)}</p>
                  <p>{data.main.temp.toFixed(1)}°C</p>
                  {showWeatherIcon(weatherId, numberHours)}
                </Forcast5DayTimeDiv>
                )
})}
          </SlickDiv>
        </SlickDiv>

        <SlickDiv>
          <SlickDiv>
            <TodaySpan>글피</TodaySpan>
            {DateCheck4 &&
              DateCheck4.map((data: List, index: number) => {
                const weatherId: number = data.weather[0].id;
                const hours: string = data.dt_txt.substr(11, 2);
                const numberHours: number = Number(hours);
                return(
                <Forcast5DayTimeDiv key={index}>
                  <p>{data.dt_txt.substr(5, 14)}</p>
                  <p>{data.main.temp.toFixed(1)}°C</p>
                  {showWeatherIcon(weatherId, numberHours)}
                </Forcast5DayTimeDiv>
                )
})}
          </SlickDiv>
        </SlickDiv>

        <SlickDiv>
          <SlickDiv>
            <TodaySpan>그글피</TodaySpan>
            {DateCheck5 &&
              DateCheck5.map((data: List, index: number) => {
                const weatherId: number = data.weather[0].id;
                const hours: string = data.dt_txt.substr(11, 2);
                const numberHours: number = Number(hours);
                return(
                <Forcast5DayTimeDiv key={index}>
                  <p>{data.dt_txt.substr(5, 14)}</p>
                  <p>{data.main.temp.toFixed(1)}°C</p>
                  {showWeatherIcon(weatherId, numberHours)}
                </Forcast5DayTimeDiv>
                )
})}
          </SlickDiv>
        </SlickDiv>
      </Sliderslick>

      <SlickArrowsBox>
        <div onClick={previous}>
          <img src={require("../img/arrow-left.png")} alt="" />
        </div>
        <div onClick={next}>
          <img src={require("../img/arrow-right.png")} alt="" />
        </div>
      </SlickArrowsBox>

      {/* 5일치 오후3시 날씨 */}
      <Forcast5DayBox>
        {predict5Data &&
          predict5Data?.list.map((data: List, index: number) => {
            const date: Date = new Date(data.dt_txt);
            const year: number = date.getFullYear();
            const month: number = date.getMonth() + 1;
            const day: number = date.getDate();
            const hour: number = date.getHours();
            const weatherId: number = data.weather[0].id;
            const hours: string = data.dt_txt.substr(11, 2);
            const numberHours: number = Number(hours);
            // 각 날짜별로 데이터 출력
            if (hour === 15) {
              return (
                <Forcast5DayDiv key={index}>
                  <p>{`${year}년 ${month}월 ${day}일`}</p>
                  {showWeatherIcon(weatherId, numberHours)}

                  <p>{`기온: ${data.main.temp.toFixed(1)}°C`}</p>
                </Forcast5DayDiv>
              );
            } else {
              return null;
            }
          })}
      </Forcast5DayBox>
    </>
  );
};

export default Forcast5Days;

const Forcast5DayBoxWallpaper = styled.div`
  font-family: "NEXON Lv1 Gothic OTF";
`

const Forcast5DayTimeBox = styled.div`
  display: flex;
  overflow-x: scroll;
  /* 스크롤바 전체 기본 꾸미기 !*/
  ::-webkit-scrollbar {
    height: 10px;
  }

  /* 스크롤바 막대 꾸미기 */
  ::-webkit-scrollbar-thumb {
    border: 1px solid white;
    border-radius: 10px;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Forcast5DayBox = styled.div`
  display: flex;
`;
const TodaySpan = styled.span`
  white-space: nowrap;
  border-right: 1.3px solid rgba(255, 255, 255, 0.7);
  padding-top: 30px;
  margin-top: 40px;
  margin-left: 10px;
  padding-right: 10px;
  height: 50px;
  text-align: center;
  color: #ffffff;
`;

const Forcast5DayTimeDiv = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  /* border: 1px solid red; */
  width: 100px;
  margin: auto;
`;
const Forcast5DayTimeScrollDiv = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

const Forcast5DayDiv = styled.div`
  margin: auto;
`;
const Forcast5DayIcon = styled.img`
  width: 70%;
  margin: auto;
`;
const SlickDiv = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

const Sliderslick = styled(Slider)`
  height: 200px;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const SlickArrowsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
  bottom: 130px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
