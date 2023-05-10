import { useParams } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import { Nationwide } from "../types/NationwidePredict5";
import { List } from "../types/Predict5";

const NationwideBox = (props:any) => {
  const {nationwideBox5} = props
  const NationwideData = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });


  const { day } = useParams<string>();

    // 시간
    const today: Date = new Date(); // 오늘 날짜 객체 생성
    const tomorrow: Date = new Date(today); // 오늘 날짜를 복사하여 다음 날짜 객체 생성
    const oneDate: number = today.getDate(); // 현재 날짜 출력
    const twoDate: number = tomorrow.getDate()+1; // 다음 날짜 출력
    const threeDate: number = tomorrow.getDate()+2;
    const fourDate: number = tomorrow.getDate()+3;
    const fiveDate: number = tomorrow.getDate()+4;
 
    // 서울  
    const SeoulWeathers1:List[] | undefined  = NationwideData[0]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const SeoulWeathers2:List[] | undefined  = NationwideData[0]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const SeoulWeathers3:List[] | undefined  = NationwideData[0]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const SeoulWeathers4:List[] | undefined  = NationwideData[0]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const SeoulWeathers5:List[] | undefined  = NationwideData[0]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);
    console.log(SeoulWeathers1)

    // 인천
    const IncheonWeathers1:List[] | undefined = NationwideData[1]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const IncheonWeathers2:List[] | undefined = NationwideData[1]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const IncheonWeathers3:List[] | undefined = NationwideData[1]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const IncheonWeathers4:List[] | undefined = NationwideData[1]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const IncheonWeathers5:List[] | undefined = NationwideData[1]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);

    // 대전
    const DaejeonWeathers1:List[] | undefined = NationwideData[2]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const DaejeonWeathers2:List[] | undefined = NationwideData[2]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const DaejeonWeathers3:List[] | undefined = NationwideData[2]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const DaejeonWeathers4:List[] | undefined = NationwideData[2]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const DaejeonWeathers5:List[] | undefined = NationwideData[2]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);

    // 대구
    const DeaguWeathers1:List[] | undefined = NationwideData[3]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const DeaguWeathers2:List[] | undefined = NationwideData[3]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const DeaguWeathers3:List[] | undefined = NationwideData[3]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const DeaguWeathers4:List[] | undefined = NationwideData[3]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const DeaguWeathers5:List[] | undefined = NationwideData[3]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);
    
    // 부산
    const BusanWeathers1:List[] | undefined = NationwideData[4]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const BusanWeathers2:List[] | undefined = NationwideData[4]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const BusanWeathers3:List[] | undefined = NationwideData[4]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const BusanWeathers4:List[] | undefined = NationwideData[4]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const BusanWeathers5:List[] | undefined = NationwideData[4]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);
    
    // 울산
    const UlsanWeathers1:List[] | undefined = NationwideData[5]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const UlsanWeathers2:List[] | undefined = NationwideData[5]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const UlsanWeathers3:List[] | undefined = NationwideData[5]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const UlsanWeathers4:List[] | undefined = NationwideData[5]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const UlsanWeathers5:List[] | undefined = NationwideData[5]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);
    
    // 광주
    const GwangjuWeathers1:List[] | undefined = NationwideData[6]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const GwangjuWeathers2:List[] | undefined = NationwideData[6]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const GwangjuWeathers3:List[] | undefined = NationwideData[6]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const GwangjuWeathers4:List[] | undefined = NationwideData[6]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const GwangjuWeathers5:List[] | undefined = NationwideData[6]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);
    
    // 강릉
    const GangneungWeathers1:List[] | undefined = NationwideData[7]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const GangneungWeathers2:List[] | undefined = NationwideData[7]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const GangneungWeathers3:List[] | undefined = NationwideData[7]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const GangneungWeathers4:List[] | undefined = NationwideData[7]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const GangneungWeathers5:List[] | undefined = NationwideData[7]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);

    // 제주도
    const JejudoWeathers1:List[] | undefined = NationwideData[8]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const JejudoWeathers2:List[] | undefined = NationwideData[8]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const JejudoWeathers3:List[] | undefined = NationwideData[8]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const JejudoWeathers4:List[] | undefined = NationwideData[8]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const JejudoWeathers5:List[] | undefined = NationwideData[8]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);
    
    // 경상북도
    const GyeongsangbukWeathers1:List[] | undefined = NationwideData[9]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == oneDate);
    const GyeongsangbukWeathers2:List[] | undefined = NationwideData[9]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == twoDate);
    const GyeongsangbukWeathers3:List[] | undefined = NationwideData[9]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == threeDate);
    const GyeongsangbukWeathers4:List[] | undefined = NationwideData[9]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fourDate);
    const GyeongsangbukWeathers5:List[] | undefined = NationwideData[9]?.list.filter((a: any) => a.dt_txt.substr(8, 2) == fiveDate);

    console.log(SeoulWeathers1)
  return (  
    <div>
      {/* {day} */}
      {/* {NationwideData &&
        NationwideData.map((location: any, i: number) => (
          <div>
            <p>{location.list[0].main.temp}</p>
            <p>{day}</p>
          </div>
        ))} */}
        
        { // 서울 / 오늘
          SeoulWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());

            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>서울</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 서울 / 내일
          SeoulWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());

            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>서울</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 서울 / 모레
          SeoulWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());

            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>서울</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 서울 / 글피
          SeoulWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>서울</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 서울 / 그글피
          SeoulWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>서울</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 인천 / 오늘
          IncheonWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>인천</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 인천 / 내일
          IncheonWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>인천</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 인천 / 모레
          IncheonWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>인천</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 인천 / 글피
          IncheonWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>인천</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 인천 / 그글피
          IncheonWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>인천</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대전 / 오늘
          DaejeonWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대전</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대전 / 내일
          DaejeonWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대전</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대전 / 모레
          DaejeonWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대전</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대전 / 글피
          DaejeonWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대전</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대전 / 그글피
          DaejeonWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대전</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대구 / 오늘
          DeaguWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대구</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대구 / 내일
          DeaguWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대구</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대전 / 모레
          DeaguWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
            
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대구</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대구 / 글피
          DeaguWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대구</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 대구 / 그글피
          DeaguWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>대구</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 부산 / 오늘
          BusanWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>부산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 부산 / 내일
          BusanWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>부산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 부산 / 모레
          BusanWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>부산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 부산 / 글피
          BusanWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>부산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 부산 / 그글피
          BusanWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>부산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 울산 / 오늘
          UlsanWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>울산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 울산 / 내일
          UlsanWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>울산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 울산 / 모레
          UlsanWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>울산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 울산 / 글피
          UlsanWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>울산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 울산 / 그글피
          UlsanWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>울산</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 광주 / 오늘
          GwangjuWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>광주</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 광주 / 내일
          GwangjuWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>광주</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 광주 / 모레
          GwangjuWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>광주</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 광주 / 글피
          GwangjuWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>광주</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 광주 / 그글피
          GwangjuWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>광주</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 강릉 / 오늘
          GangneungWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>강릉</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 강릉 / 내일
          GangneungWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>강릉</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 강릉 / 모레
          GangneungWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>강릉</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 강릉 / 글피
          GangneungWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>강릉</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 강릉 / 그글피
          GangneungWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>강릉</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 제주도 / 오늘
          JejudoWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>재주도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }
        
        { // 제주도 / 내일
          JejudoWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>재주도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 제주도 / 모레
          JejudoWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>재주도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 제주도 / 글피
          JejudoWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>재주도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 제주도 / 그글피
          JejudoWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>재주도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 경상남도 / 오늘
          GyeongsangbukWeathers1?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "0" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>경상남도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 경상남도 / 내일
          GyeongsangbukWeathers2?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "1" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>경상남도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 경상남도 / 모레
          GyeongsangbukWeathers3?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "2" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>경상남도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 경상남도 / 글피
          GyeongsangbukWeathers4?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "3" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>경상남도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }

        { // 경상남도 / 그글피
          GyeongsangbukWeathers5?.map((location, i) => {
            const date:Date = new Date(location.dt_txt);
            const days:string = String(date.getDate());
          
            if(day == "4" && location.dt_txt.substr(11,2) === "15" && location.dt_txt.substr(8, 2) == days){
              return (
                <div>
                  <p>경상남도</p>
                  <p>{location.dt_txt}</p>
                  <p>기온{location.main.temp.toFixed(1)}</p>
                </div>
              )
            }else{
              return null
            }
          })
        }
    </div>
  );
}

export default NationwideBox;