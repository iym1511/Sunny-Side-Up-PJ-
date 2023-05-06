import { useAppSelector } from "../hooks/reduxHooks";
import { List } from "../types/Predict5";

const Forcast5Days = () => {
  const predict5Data = useAppSelector((state) => {
    return state.predict5Api.apiData;
  });
  const predict5Status = useAppSelector((state) => {
    return state.predict5Api.status;
  });
    // 시간
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: string = String(date.getMonth() + 1).padStart(2, "0");
    const dateSelect: number = date.getDate();
    const today: string = String(dateSelect).padStart(2, "0");
    const useDate: string = `${month}-${today}`
  
    const today2: string = String(date.getDate()+1).padStart(2, "0");
    const useDate2: string = `${month}-${today2}`
    const today3: string = String(date.getDate()+2).padStart(2, "0");
    const useDate3: string = `${month}-${today3}`
    const today4: string = String(date.getDate()+3).padStart(2, "0");
    const useDate4: string = `${month}-${today4}`
  
    // 5일 일기예보 타입 가져와서 사용
    const DateCheck:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(5, 5) == useDate ? useDate : dateSelect+1)
    const DateCheck2:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(5, 5) == useDate2)
    const DateCheck3:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(5, 5) == useDate3)
    const DateCheck4:List[] | undefined  = predict5Data?.list.filter((a: any) => a.dt_txt.substr(5, 5) == useDate4)
  
    const asd = () => {
      if(predict5Data?.list.some((a: any) => a.dt_txt.substr(5, 5) == useDate)){
        
      }
    }

  return (  
    <div>
          <div style={{display: "flex", overflowX:"scroll"}}>
        {
          predict5Data && predict5Data.list.map((a:any)=>(
            <div style={{marginRight:"20px"}}>
              <p>{a.dt_txt.substr(5, 11)}</p>
              <p>{}</p>
              <img
                src={`https://openweathermap.org/img/wn/${
                  a.weather[0].icon
                }@2x.png`}
                style={{width:"100%"}}
              />
              <p>{a.main.temp.toFixed(1)}°C</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
 
export default Forcast5Days;