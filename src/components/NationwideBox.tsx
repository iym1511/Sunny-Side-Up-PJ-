import { useParams } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import { Nationwide } from "../types/NationwidePredict5";
import { List } from "../types/Predict5";
import styled from "styled-components";

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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <SeoulDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <IncheonDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DeajeonDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DeaguDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <BusanDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <UlsanDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <GwangjuDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <GangneungDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <JejuDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
                if (
                  day == i &&
                  location.dt_txt.substr(11, 2) === "15" &&
                  location.dt_txt.substr(8, 2) == days
                ) {
                  return (
                    <DockdoDiv>
                      <img
                        src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                      />
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
  width: 100vw;
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
