import { useParams } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import { Nationwide } from "../types/NationwidePredict5";
import { List } from "../types/Predict5";
import styled, { keyframes } from "styled-components";
import '../css/WeatherIcons.css';

const NationwideBox = (props: any) => {
  const { nationwideBox5 } = props;
  const NationwideData = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });

  const { day } = useParams<string>();

  // 시간
  const today: Date = new Date(); // 오늘 날짜 객체 생성
  const oneDate: number = today.getDate(); // 현재 날짜 출력
  const twoDate: number = today.getDate() + 1;
  const threeDate: number = today.getDate() + 2;
  const fourDate: number = today.getDate() + 3;
  const fiveDate: number = today.getDate() + 4;

  // 서울
  const SeoulWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const SeoulWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const SeoulWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const SeoulWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const SeoulWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const SeoulArray = [
    SeoulWeathers1,
    SeoulWeathers2,
    SeoulWeathers3,
    SeoulWeathers4,
    SeoulWeathers5,
  ];

  // 인천
  const IncheonWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const IncheonWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const IncheonWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const IncheonWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const IncheonWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const IncheonArray = [
    IncheonWeathers1,
    IncheonWeathers2,
    IncheonWeathers3,
    IncheonWeathers4,
    IncheonWeathers5,
  ];

  // 대전
  const DaejeonWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const DaejeonWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const DaejeonWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const DaejeonWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const DaejeonWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const DaejeonArray = [
    DaejeonWeathers1,
    DaejeonWeathers2,
    DaejeonWeathers3,
    DaejeonWeathers4,
    DaejeonWeathers5,
  ];

  // 대구
  const DeaguWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[3].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const DeaguWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[3].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const DeaguWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[3].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const DeaguWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[3].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const DeaguWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[3].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const DeaguArray = [
    DeaguWeathers1,
    DeaguWeathers2,
    DeaguWeathers3,
    DeaguWeathers4,
    DaejeonWeathers5,
  ];

  // 부산
  const BusanWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const BusanWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const BusanWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const BusanWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const BusanWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const BusanArray = [
    BusanWeathers1,
    BusanWeathers2,
    BusanWeathers3,
    BusanWeathers4,
    BusanWeathers5,
  ];

  // 울산
  const UlsanWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const UlsanWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const UlsanWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const UlsanWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const UlsanWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const UlsanArray = [
    UlsanWeathers1,
    UlsanWeathers2,
    UlsanWeathers3,
    UlsanWeathers4,
    UlsanWeathers5,
  ];

  // 광주
  const GwangjuWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const GwangjuWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const GwangjuWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const GwangjuWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const GwangjuWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const GwangjuArray = [
    GwangjuWeathers1,
    GwangjuWeathers2,
    GwangjuWeathers3,
    GwangjuWeathers4,
    GwangjuWeathers5,
  ];

  // 강릉
  const GangneungWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const GangneungWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const GangneungWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const GangneungWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const GangneungWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const GangneungArray = [
    GangneungWeathers1,
    GangneungWeathers2,
    GangneungWeathers3,
    GangneungWeathers4,
    GangneungWeathers5,
  ];

  // 제주도
  const JejudoWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const JejudoWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const JejudoWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const JejudoWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const JejudoWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const JejuArray = [
    JejudoWeathers1,
    JejudoWeathers2,
    JejudoWeathers3,
    JejudoWeathers4,
    JejudoWeathers5,
  ];

  // 경상북도
  const GyeongsangbukWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
  const GyeongsangbukWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
  const GyeongsangbukWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == threeDate
    );
  const GyeongsangbukWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fourDate
    );
  const GyeongsangbukWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter(
      (a: any) => a.dt_txt.substr(8, 2) == fiveDate
    );
  const GyengsangbukArray = [
    GyeongsangbukWeathers1,
    GyeongsangbukWeathers2,
    GyeongsangbukWeathers3,
    GyeongsangbukWeathers4,
    GyeongsangbukWeathers5,
  ];

  const showWeatherIcon = (weather:number) => {
    if (weather <= 200) {
      return (
        <WeatherIcon>
        <Cloud></Cloud>
        <Light>
          <Bolt></Bolt>
          <Bolt></Bolt>
        </Light>
      </WeatherIcon>
      );
    } else if (weather >= 300 && weather < 600) {
      return (
        <WeatherIcon>
        <Cloud></Cloud>
        <Rain></Rain>
      </WeatherIcon>
      );
    } else if (weather >= 600 && weather < 700) {
      <WeatherIcon>
        <Cloud></Cloud>
        <Snow>
          <Flake></Flake>
          <Flake></Flake>
        </Snow>
      </WeatherIcon>
    } else if (weather >= 700 && weather < 800) {
      return (
        <WeatherIcon>
        <Cloud></Cloud>
        <Mistbar></Mistbar>
      </WeatherIcon>
      );
    } else if (weather === 800) {
      return (
        <WeatherIcon>
        <Sun>
          <Rays></Rays>
        </Sun>
      </WeatherIcon>
      );
    } else if (weather === 801) {
      return (
        <WeatherIcon>
        <Cloud></Cloud>
        <Sun>
          <Rays></Rays>
        </Sun>
        <Rain></Rain>
      </WeatherIcon>
      );
    } else if (weather > 801 && weather < 900) {
      return (
        <WeatherIcon>
        <Cloud></Cloud>
        <Cloud></Cloud>
      </WeatherIcon>
      );
    }
  };

  return (
    <NationwideBoxWallpaper>
      <SouthKoreaBox>
        <SouthKoreaImage src={require("../img/southkorea01.png")} alt="없음" />
        {
          // 서울
          SeoulArray &&
            SeoulArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <SeoulDiv>
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      {showWeatherIcon(weather)}
                      <p>서울 {location.main.temp.toFixed(1)}°</p>
                    </SeoulDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 인천
          IncheonArray &&
            IncheonArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <IncheonDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>인천 {location.main.temp.toFixed(1)}°</p>
                    </IncheonDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 대전
          DaejeonArray &&
            DaejeonArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DeajeonDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>대전 {location.main.temp.toFixed(1)}°</p>
                    </DeajeonDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 대구
          DeaguArray &&
            DeaguArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DeaguDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>대구 {location.main.temp.toFixed(1)}°</p>
                    </DeaguDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 부산
          BusanArray &&
            BusanArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <BusanDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>부산 {location.main.temp.toFixed(1)}°</p>
                    </BusanDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 울산
          UlsanArray &&
            UlsanArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <UlsanDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>울산 {location.main.temp.toFixed(1)}°</p>
                    </UlsanDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 광주
          GwangjuArray &&
            GwangjuArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <GwangjuDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>광주 {location.main.temp.toFixed(1)}°</p>
                    </GwangjuDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 강릉
          GangneungArray &&
            GangneungArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <GangneungDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>강릉 {location.main.temp.toFixed(1)}°</p>
                    </GangneungDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 제주
          JejuArray &&
            JejuArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <JejuDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>제주 {location.main.temp.toFixed(1)}°</p>
                    </JejuDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }

        {
          // 울릉도/독도
          GyengsangbukArray &&
            GyengsangbukArray.map((l: any, i: any): any => {
              return l?.map((location: any) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DockdoDiv>
                      {/* {showWeatherIcon(weather)} */}
                      {/* <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      /> */}
                      <p>울릉도/독도 {location.main.temp.toFixed(1)}°</p>
                    </DockdoDiv>
                  );
                } else {
                  return null;
                }
              });
            })
        }
      </SouthKoreaBox>
    </NationwideBoxWallpaper>
  );
};

export default NationwideBox;

const NationwideBoxWallpaper = styled.div`
  width: 95vw;
  margin: auto;
  border: 1px solid red;
`;

const SouthKoreaBox = styled.div`
  width: 573px;
  height: 578px;
  background-color: transparent;
  border: 1px solid blue;
  margin: auto;
`;

const SouthKoreaImage = styled.img`
  width: 80%;
  margin: auto;
`;

const SeoulDiv = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0;
  position: relative;
  bottom: 77%;
  right: 10%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const IncheonDiv = styled.div`
  position: relative;
  bottom: 87%;
  right: 20%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const DeajeonDiv = styled.div`
  position: relative;
  bottom: 88%;
  right: 9%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const DeaguDiv = styled.div`
  position: relative;
  bottom: 95%;
  left: 9%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const BusanDiv = styled.div`
  position: relative;
  bottom: 95%;
  left: 16%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const UlsanDiv = styled.div`
  position: relative;
  bottom: 115%;
  left: 25%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const GwangjuDiv = styled.div`
  position: relative;
  bottom: 125%;
  right: 14%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const GangneungDiv = styled.div`
  position: relative;
  bottom: 176%;
  left: 14%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const JejuDiv = styled.div`
  position: relative;
  bottom: 126%;
  right: 20%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;

const DockdoDiv = styled.div`
  position: relative;
  bottom: 195%;
  left: 30%;
  img {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
  }
`;


// 🌞 날씨 아이콘 🌞

const WeatherIcon = styled.div`
  width: 50px;
  height: 50px;
  margin: 0;
`

const SpinKeyframe = keyframes`
  0%  {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(360deg);
    transform: rotate(360deg);}   
`

const LightningKeyframe = keyframes`
  45% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
  50% {
    color: lemonchiffon;
    background: lemonchiffon;
    opacity: 1;
  }
  55% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
`

const MistKeyframe = keyframes`
    0% { opacity: 0; }
  50% { opacity: 0.6; }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.5) translate(-100%, -3em);
            transform: scale(0.5) translate(-100%, -3em);
  }
`

const CloudKeyframe = keyframes`
    0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.5) translate(-200%, -3em);
            transform: scale(0.5) translate(-200%, -3em);
  }
`

const RainKeyframe = keyframes`
    0% {
    background: #0cf;
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  50% {
    background: rgba(255,255,255,0.3);
    box-shadow:
      0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  100% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
`

const Sun = styled.div`
  width: 10%;
  height: 10%;
  margin: 0;
  background: orange;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em orange;
  -webkit-animation: 12s infinite linear;
  animation: ${SpinKeyframe} 12s infinite linear;
`

const Rays = styled.div`
  position: absolute;
  top: -41px;
  left: 50%;
  display: block;
  width: 15%;
  height: 80%;
  margin-left: -0.1875em;
  background: yellow;
  border-radius: 0.25em;
  box-shadow: 0 5.375em yellow;
  &:before, &::after{
    content: '';
  position: absolute;
  top: 0em;
  left: 0em;
  display: block;
  width: 4px;
  height: 15px;
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
  -webkit-transform-origin: 50% 3.25em;
          transform-origin: 50% 3.25em;
  background: yellow;
  border-radius: 0.25em;
  box-shadow: 0 5.375em yellow;
  }
  &:before{
    -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
  }
`

const Rain = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
  &:after{
    content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #0cf;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow:
    0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
    -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
    -1.375em -0.125em 0 rgba(255,255,255,0.2);
  -webkit-transform: rotate(-28deg);
          transform: rotate(-28deg);
  -webkit-animation: ${RainKeyframe} 3s linear infinite;
          animation: ${RainKeyframe} 3s linear infinite;
  }
`

const Cloud = styled.div`
  position: absolute;
  z-index: 1;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: gray;
  border-radius: 50%;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em gray,
    2.0625em 0.9375em 0 -0.9375em gray,
    0 0 0 0.375em gray,
    -2.1875em 0.6875em 0 -0.3125em gray,
    2.0625em 0.9375em 0 -0.5625em gray;
  &:after{
    content: '';
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: gray;
  box-shadow: 0 0.4375em 0 -0.0625em gray;
  }
  &:nth-child(2){
    z-index: 0;
  background: white;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff,
    0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff,
    2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  -webkit-transform: scale(0.5) translate(6em, -3em);
          transform: scale(0.5) translate(6em, -3em);
  -webkit-animation: ${CloudKeyframe} 4s linear infinite;
          animation: ${CloudKeyframe} 4s linear infinite;
  }
  &:nth-child(2):after{
    background: white;
  }
`

const Snow = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
`

const Flake = styled.div`
  &:before, &:after{
  content: '❅';
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.025em 0 0 -1.0125em;
  color: white;
  list-height: 1em;
  opacity: 0.2;
  -webkit-animation: ${SpinKeyframe} 8s linear infinite reverse;
          animation: ${SpinKeyframe} 8s linear infinite reverse;
  }
  &:after{
    margin: 0.125em 0 0 -1em;
  font-size: 1.5em;
  opacity: 0.4;
  -webkit-animation: ${SpinKeyframe} 14s linear infinite;
          animation: ${SpinKeyframe} 14s linear infinite;
  }
  &:nth-child(2):before{
    margin: -0.5em 0 0 0.25em;
  font-size: 1.25em;
  opacity: 0.2;
  -webkit-animation: ${SpinKeyframe} 10s linear infinite;
          animation: ${SpinKeyframe} 10s linear infinite;
  }
  &:nth-child(2):after{
    margin: 0.375em 0 0 0.125em;
  font-size: 2em;
  opacity: 0.4;
  -webkit-animation: ${SpinKeyframe} 16s linear infinite reverse;
          animation: ${SpinKeyframe} 16s linear infinite reverse;
  } 
`

const Light = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
`

const Bolt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: #fff;
  opacity: 0.3;
  -webkit-animation: ${LightningKeyframe} 2s linear infinite;
          animation: ${LightningKeyframe} 2s linear infinite;
  &:nth-child(2){
    width: 0.5em;
  height: 0.25em;
  margin: -1.75em 0 0 -1.875em;
  -webkit-transform: translate(2.5em, 2.25em);
          transform: translate(2.5em, 2.25em);
  opacity: 0.2;
  -webkit-animation: ${LightningKeyframe} 1.5s linear infinite;
          animation: ${LightningKeyframe} 1.5s linear infinite;
  }
  &:before, &:after{
    content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: -1.625em 0 0 -1.0125em;
  border-top: 1.25em solid transparent;
  border-right: 0.75em solid;
  border-bottom: 0.75em solid;
  border-left: 0.5em solid transparent;
  -webkit-transform: skewX(-10deg);
          transform: skewX(-10deg);
  }
  &:after{
    margin: -0.25em 0 0 -0.25em;
  border-top: 0.75em solid;
  border-right: 0.5em solid transparent;
  border-bottom: 1.25em solid transparent;
  border-left: 0.75em solid;
  -webkit-transform: skewX(-10deg);
          transform: skewX(-10deg);
  }
  &:nth-child(2):before{
    margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
  }
  &:nth-child(2):after{
    margin: -0.125em 0 0 -0.125em;
  border-top: 0.375em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0.625em solid transparent;
  border-left: 0.375em solid;
  }
`

const Mistbar = styled.div`
position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: transparent;
  width: 90px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  position: relative;
  bottom: -9px;
  &:after{
    content: '';
    position: absolute;
    top: 13px;
    display: block;
    width: 120px;
    height: 10px;
    border-radius: 50px;
    z-index: 0;
    background: white;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.3;
    -webkit-transform: scale(0.5) translate(6em, -3em);
            transform: scale(0.5) translate(6em, -3em);
    -webkit-animation: ${MistKeyframe} 8s linear infinite;
            animation: ${MistKeyframe} 8s linear infinite;
  }
  &:before{
    content: '';
    position: absolute;
    top: 40px;
    left: -30px;
    display: block;
    width: 130px;
    height: 10px;
    border-radius: 50px;
    z-index: 0;
    background: white;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.3;
    -webkit-transform: scale(0.5) translate(6em, -3em);
            transform: scale(0.5) translate(6em, -3em);
    -webkit-animation: ${MistKeyframe} 8s linear infinite;
            animation: ${MistKeyframe} 8s linear infinite;
  }
`