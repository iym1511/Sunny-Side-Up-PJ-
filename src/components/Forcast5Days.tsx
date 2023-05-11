import { useAppSelector } from "../hooks/reduxHooks";
import { List } from "../types/Predict5";
import "../css/Forcast5Days.css"
import { relative } from "path";
import styled from "styled-components";

const Forcast5Days = () => {
  const predict5Data = useAppSelector((state) => {
    return state.predict5Api.apiData;
  });
  const predict5Status = useAppSelector((state) => {
    return state.predict5Api.status;
  });

    // 시간
    const today: Date = new Date(); // 오늘 날짜 객체 생성
    const tomorrow: Date = new Date(today); // 오늘 날짜를 복사하여 다음 날짜 객체 생성
    const oneDate: number = today.getDate(); // 현재 날짜 출력
    const twoDate: number = tomorrow.getDate()+1; // 다음 날짜 출력
    const threeDate: number = tomorrow.getDate()+2;
    const fourDate: number = tomorrow.getDate()+3;
    const fiveDate: number = tomorrow.getDate()+4;

  
    // 5일 일기예보 타입 가져와서 사용
    const DateCheck:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate)
    const DateCheck2:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate)
    const DateCheck3:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate)
    const DateCheck4:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate)
    const DateCheck5:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate)


  return (  
    <div>
        <Forcast5DayTimeBox>
        <TodaySpan>오늘</TodaySpan>
          {
            DateCheck && DateCheck.map((data:List, index)=>(
              <Forcast5DayTimeDiv key={index}>
                <p>{data.dt_txt.substr(5,14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </Forcast5DayTimeDiv>
            ))
          }

        <TodaySpan>내일</TodaySpan>
          {
            DateCheck2 && DateCheck2.map((data:List, index)=>(
              <Forcast5DayTimeDiv key={index}>
                <p>{data.dt_txt.substr(5,14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </Forcast5DayTimeDiv>
            ))
          }
          
        <TodaySpan>모레</TodaySpan>
          {
            DateCheck3 && DateCheck3.map((data:List, index)=>(
              <Forcast5DayTimeDiv key={index}>
                <p>{data.dt_txt.substr(5,14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </Forcast5DayTimeDiv>
            ))
          }

        <TodaySpan>글피</TodaySpan>
          {
            DateCheck4 && DateCheck4.map((data:List, index)=>(
              <Forcast5DayTimeDiv key={index}>
                <p>{data.dt_txt.substr(5,14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </Forcast5DayTimeDiv>
            ))
          }

        <TodaySpan>그글피</TodaySpan>
          {
            DateCheck5 && DateCheck5.map((data:List, index)=>(
              <Forcast5DayTimeDiv key={index}>
                <p>{data.dt_txt.substr(5,14)}</p>
                <p>{data.main.temp.toFixed(1)}°C</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </Forcast5DayTimeDiv>
            ))
          }
        </Forcast5DayTimeBox>

        <Forcast5DayBox>
          {
            predict5Data && predict5Data?.list.map((data:List,index) => {
              const date:Date = new Date(data.dt_txt);
              const year: number = date.getFullYear();
              const month: number = date.getMonth() + 1;
              const day: number = date.getDate();
              const hour: number = date.getHours();
              // 각 날짜별로 데이터 출력
              if (hour === 12) {
                return (
                  <Forcast5DayDiv key={index}>
                    <p>{`${year}년 ${month}월 ${day}일`}</p>
                    <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
                    <p>{`기온: ${data.main.temp.toFixed(1)}°C`}</p>
                  </Forcast5DayDiv>
                );
              } else {
                return null;
              }
            })
          }
      </Forcast5DayBox>
    </div>
  );
}

export default Forcast5Days;

const Forcast5DayTimeBox = styled.div`
  display: flex;
  overflow-x: scroll;
`

const Forcast5DayBox = styled.div`
  display: flex;
`
const TodaySpan = styled.span`
  white-space: nowrap;
  border-right: 1px solid rgba(255, 255, 255, 0.322);
  padding-top: 30px;
  margin-top: 40px;
  margin-left: 10px;
  padding-right: 10px;
  height: 50px;
  text-align: center;
  color: #ffffff;
`
const Forcast5DayTimeDiv = styled.div`
  margin: 10px;
`
const Forcast5DayDiv = styled.div`
  margin: auto;
`