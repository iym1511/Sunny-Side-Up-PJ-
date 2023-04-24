import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { asyncFetch } from "../module/weatherApi";

const SunnySideUp = () => {
  const geoApiStatus = useAppSelector((state)=> state.geoApi.status)
  const geoApiData = useAppSelector((state)=> {return state.geoApi.apiData});
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(asyncFetch());
  },[])

  useEffect(()=>{
    console.log(geoApiData);
    console.log(geoApiStatus)
  },[geoApiStatus])

  return (  
    <div style={{border: "1px solid red"}}>
      <h1>ts 🔫</h1>
      {
        geoApiData &&
        geoApiData.map((a:any)=>(
          {a}
        ))
      }
    </div>
  );
}

export default SunnySideUp;