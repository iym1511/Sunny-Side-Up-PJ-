import { useAppSelector } from "../hooks/reduxHooks";
import { List } from "../types/Predict5";
import "../css/Forcast5Days.css"

const Forcast5Days = () => {
  const predict5Data = useAppSelector((state) => {
    return state.predict5Api.apiData;
  });
  const predict5Status = useAppSelector((state) => {
    return state.predict5Api.status;
  });

    // 시간
    const today = new Date(); // 오늘 날짜 객체 생성
    const tomorrow = new Date(today); // 오늘 날짜를 복사하여 다음 날짜 객체 생성
    const oneDate = today.getDate(); // 현재 날짜 출력
    const twoDate = tomorrow.getDate()+1; // 다음 날짜 출력
    const threeDate = tomorrow.getDate()+2;
    const fourDate = tomorrow.getDate()+3;
    const fiveDate = tomorrow.getDate()+4;

  
    // 5일 일기예보 타입 가져와서 사용
    const DateCheck:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate)
    const DateCheck2:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate)
    const DateCheck3:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate)
    const DateCheck4:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate)
    const DateCheck5:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate)



  return (  
    <div>
        <div style={{display:"flex",overflowX:"scroll"}}>

          {
            DateCheck && DateCheck.map((data:List, index)=>(
              <div key={index} style={{}}>
                <span className="allSpan">오늘</span>
                <p>{data.dt_txt.substr(5,14)}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </div>
            ))
          }

          {
            DateCheck2 && DateCheck2.map((data:List, index)=>(
              <div key={index} style={{}}>
                <span className="allSpan">내일</span>
                <p>{data.dt_txt.substr(5,14)}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </div>
            ))
          }
          
          {
            DateCheck3 && DateCheck3.map((data:List, index)=>(
              <div key={index} style={{}}>
                <span className="allSpan">모레</span>
                <p>{data.dt_txt.substr(5,14)}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </div>
            ))
          }

          {
            DateCheck4 && DateCheck4.map((data:List, index)=>(
              <div key={index} style={{}}>
                <span className="allSpan">글피</span>
                <p>{data.dt_txt.substr(5,14)}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </div>
            ))
          }

          {
            DateCheck4 && DateCheck4.map((data:List, index)=>(
              <div key={index} style={{}}>
                <span className="allSpan">그글피</span>
                <p>{data.dt_txt.substr(5,14)}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
              </div>
            ))
          }

        </div>

        <div style={{display: "flex", overflowX:"scroll"}}>
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
                  <div key={index} style={{margin:"auto"}}>
                    <p>{`${year}년 ${month}월 ${day}일`}</p>
                    <img
                    src={`https://openweathermap.org/img/wn/${
                      data.weather[0].icon
                    }@2x.png`}
                    style={{width:"100%"}}
                  />
                    <p>{`기온: ${data.main.temp.toFixed(1)}°C`}</p>
                  </div>
                );
              } else {
                return null;
              }
            })
          }
      </div>
    </div>
  );
}
 
export default Forcast5Days;