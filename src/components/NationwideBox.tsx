import { useParams } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import { Nationwide } from "../types/NationwidePredict5";
import { List } from "../types/Predict5";
import styled, { keyframes } from "styled-components";

const NationwideBox = (props: any) => {
  const { nationwideBox5 } = props;
  const NationwideData = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });

  const { day } = useParams<string>();

  const date = new Date();
  const currentDay = date.getDate();
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  const twoDate = () => {
    if (currentDay === lastDayOfMonth) {
        date.setMonth(date.getMonth() + 1);
        date.setDate(1);
        } else {
        date.setDate(date.getDate() + 1);
        }
    return date.getDate();
  }
  const threeDate = () => {
    if (currentDay === lastDayOfMonth) {
        date.setMonth(date.getMonth());
        date.setDate(2);
        } else {
        date.setDate(date.getDate() + 2);
        }
    return date.getDate();
  }
  const fourDate = () => {
    if (currentDay === lastDayOfMonth) {
        date.setMonth(date.getMonth());
        date.setDate(3);
        } else {
        date.setDate(date.getDate() + 3);
        }
    return date.getDate();
  }
  const fiveDate = () => {
    if (currentDay === lastDayOfMonth) {
        date.setMonth(date.getMonth());
        date.setDate(4);
        } else {
        date.setDate(date.getDate() + 4);
        }
    return date.getDate();
  }
  
  // 시간
  const today: Date = new Date(); // 오늘 날짜 객체 생성
  const oneDate: number = today.getDate(); // 현재 날짜 출력
  // const twoDate: number = today.getDate() + 1;
  // const threeDate: number = today.getDate() + 2;
  // const fourDate: number = today.getDate() + 3;
  // const fiveDate: number = today.getDate() + 4;

  // 서울
  const SeoulWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const SeoulWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate()).padStart(2,"0"));
  const SeoulWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate()).padStart(2,"0")
    );
  const SeoulWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate()).padStart(2,"0")
    );
  const SeoulWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[0].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate()).padStart(2,"0")
    );

  // type 설명 : List배열 이거나 undefined가 배열로있다
  const SeoulArray: (List[] | undefined)[] = [
    SeoulWeathers1,
    SeoulWeathers2,
    SeoulWeathers3,
    SeoulWeathers4,
    SeoulWeathers5,
  ];
  console.log(SeoulArray)
  // 인천
  const IncheonWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const IncheonWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate()));
  const IncheonWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate())
    );
  const IncheonWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate())
    );
  const IncheonWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[1].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate())
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
    NationwideData[2].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const DaejeonWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate));
  const DaejeonWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const DaejeonWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const DaejeonWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[2].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const DaejeonArray: (List[] | undefined)[] = [
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
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const DeaguArray: (List[] | undefined)[] = [
    DeaguWeathers1,
    DeaguWeathers2,
    DeaguWeathers3,
    DeaguWeathers4,
    DeaguWeathers5,
  ];

  // 부산
  const BusanWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const BusanWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate));
  const BusanWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const BusanWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const BusanWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[4].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const BusanArray: (List[] | undefined)[] = [
    BusanWeathers1,
    BusanWeathers2,
    BusanWeathers3,
    BusanWeathers4,
    BusanWeathers5,
  ];

  // 울산
  const UlsanWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const UlsanWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate));
  const UlsanWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const UlsanWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const UlsanWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[5].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const UlsanArray: (List[] | undefined)[] = [
    UlsanWeathers1,
    UlsanWeathers2,
    UlsanWeathers3,
    UlsanWeathers4,
    UlsanWeathers5,
  ];

  // 광주
  const GwangjuWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const GwangjuWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter((a: any) => a.dt_txt.substr(8, 2) == String(twoDate));
  const GwangjuWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const GwangjuWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const GwangjuWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[6].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const GwangjuArray: (List[] | undefined)[] = [
    GwangjuWeathers1,
    GwangjuWeathers2,
    GwangjuWeathers3,
    GwangjuWeathers4,
    GwangjuWeathers5,
  ];

  // 강릉
  const GangneungWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const GangneungWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate));
  const GangneungWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const GangneungWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const GangneungWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[7].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const GangneungArray: (List[] | undefined)[] = [
    GangneungWeathers1,
    GangneungWeathers2,
    GangneungWeathers3,
    GangneungWeathers4,
    GangneungWeathers5,
  ];

  // 제주도
  const JejudoWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const JejudoWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate));
  const JejudoWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const JejudoWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const JejudoWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[8].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const JejuArray: (List[] | undefined)[] = [
    JejudoWeathers1,
    JejudoWeathers2,
    JejudoWeathers3,
    JejudoWeathers4,
    JejudoWeathers5,
  ];

  // 경상북도
  const GyeongsangbukWeathers1: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(oneDate));
  const GyeongsangbukWeathers2: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter((a: List) => a.dt_txt.substr(8, 2) == String(twoDate));
  const GyeongsangbukWeathers3: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(threeDate)
    );
  const GyeongsangbukWeathers4: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fourDate)
    );
  const GyeongsangbukWeathers5: List[] | undefined =
    NationwideData &&
    NationwideData[9].list.filter(
      (a: List) => a.dt_txt.substr(8, 2) == String(fiveDate)
    );
  const GyengsangbukArray: (List[] | undefined)[] = [
    GyeongsangbukWeathers1,
    GyeongsangbukWeathers2,
    GyeongsangbukWeathers3,
    GyeongsangbukWeathers4,
    GyeongsangbukWeathers5,
  ];

  const showWeatherIcon = (weather: number) => {
    if (weather <= 200) {
      return <img src={require("../img/bolt.png")} />;
    } else if (weather >= 300 && weather < 600) {
      return <img src={require("../img/rain.png")} />;
    } else if (weather >= 600 && weather < 700) {
      return <img src={require("../img/snow.png")} />;
    } else if (weather >= 700 && weather < 800) {
      return <img src={require("../img/fog.png")} />;
    } else if (weather === 800) {
      return <img src={require("../img/sun.png")} />;
    } else if (weather === 801) {
      return <img src={require("../img/suncloud.png")} />;
    } else if (weather > 801 && weather < 900) {
      return <img src={require("../img/clouds.png")} />;
    }
  };

  return (
    <NationwideBoxWallpaper>
      <SouthKoreaBox>
        <SouthKoreaImage src={require("../img/southkorea12.png")} alt="없음" />
        {     /* 시간대별 배열들을 한번풀어주고 안에서 2중맵으로 배열안에서 조건문 수행 */
          // 서울
          SeoulArray &&
            SeoulArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <SeoulDiv>
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
            IncheonArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <IncheonDiv>
                      {showWeatherIcon(weather)}
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
            DaejeonArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
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
                      {showWeatherIcon(weather)}
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
            DeaguArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
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
                      {showWeatherIcon(weather)}
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
            BusanArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <BusanDiv>
                      {showWeatherIcon(weather)}
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
            UlsanArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <UlsanDiv>
                      {showWeatherIcon(weather)}
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
            GwangjuArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <GwangjuDiv>
                      {showWeatherIcon(weather)}
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
            GangneungArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <GangneungDiv>
                      {showWeatherIcon(weather)}
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
            JejuArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <JejuDiv>
                      {showWeatherIcon(weather)}
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
            GyengsangbukArray.map((l: List[] | undefined, i: number | string) => {
              return l?.map((location: List) => {
                const date: Date = new Date(location.dt_txt);
                const days: string = String(date.getDate());
                const weather: number = location.weather[0].id;
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DockdoDiv>
                      {showWeatherIcon(weather)}
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
  margin: auto;
`;

const SouthKoreaBox = styled.div`
  width: 573px;
  height: 578px;
  background-color: transparent;
  margin: auto;
  padding: 15px 0 45px 0;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid #ffffff67;
  background-color: #8bb6dc62;
  p{
    color: #1c1c1c;
    font-weight: bold;
  }
  @media screen and (max-width: 736px) {
    margin: auto;
    width: 350px;
    height: 450px;
    }
`;

const SouthKoreaImage = styled.img`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 100%;
    margin: auto;
    }
`;

const SeoulDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 88%;
  left: 30%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 89%;
    left: 20%;
    }
`;

const IncheonDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 101%;
  left: 19%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    text-shadow: 0 0 10px #DBF6FF;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 85%;
    left: -18%;
    }
`;

const DeajeonDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 102%;
  left: 33%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 68%;
    left: -20%;
    }
`;

const DeaguDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 110%;
  left: 52%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 58%;
    left: -22%;
    }
`;

const BusanDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 111%;
  left: 59%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;    
    text-shadow: 0 0 10px #DBF6FF;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 61%;
    left: 55%;
    }
`;

const UlsanDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 135%;
  left: 70%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    text-shadow: 0 0 10px #DBF6FF;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 66%;
    left: 48%;
    }
`;

const GwangjuDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 148%;
  left: 26%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 63%;
    left: -30%;
    }
`;

const GangneungDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 211%;
  left: 58%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    text-shadow: 0 0 10px white;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 108%;
    left: -15%;
  }
`;

const JejuDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 154%;
  left: 18%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    text-shadow: 0 0 10px #DBF6FF;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 56%;
    left: -18%;
    }
`;

const DockdoDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  bottom: 233%;
  left: 78%;
  img {
    width: 45%;
    margin: 10px;
    padding: 0;
  }
  p {
    position: relative;
    bottom: 12px;
    margin: 0;
    text-shadow: 0 0 10px #DBF6FF;
    @media screen and (max-width: 736px) {
    font-size: 0.8em;
    }
  }
  @media screen and (max-width: 736px) {
    display: inline-block;
    width: 80px;
    height: 80px;
    bottom: 110%;
    left: 25%;
    }
`;
