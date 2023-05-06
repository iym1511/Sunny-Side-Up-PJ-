import { useEffect } from "react";
import { getNationwidePredict5Data } from "../module/nationwidePredict5";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const Nationwide5Days = () => {
  const dispatch = useAppDispatch();
  // const weatherApiData1 = useAppSelector((state) => {
  //   return state.weatherApi.apiData1;
  // });
  // const weatherApiStatus1 = useAppSelector((state) => {
  //   return state.weatherApi.status1;
  // });

  const NationwideData = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });
  const NationwideStatus = useAppSelector((state) => {
    return state.nationwideApi.status;
  });

  // useEffect(()=>{
  //   dispatch(getNationwidePredict5Data());
  // })

  useEffect(()=>{
    console.log("진혜콘솔")
    console.log(NationwideData);
    console.log(NationwideStatus);
  },[NationwideStatus])

  return (
    <div>
      {/* {
        NationwideData && NationwideData.map((location:any,i:number)=>(
          <div>
            <p>ㅎ</p>
          </div>
        ))
      } */}
    </div>
  );
}

export default Nationwide5Days;