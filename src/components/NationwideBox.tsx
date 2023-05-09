import { useParams } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import { Nationwide } from "../types/NationwidePredict5";

const NationwideBox = (props:any) => {
  const {nationwideBox5} = props
  const NationwideData: Nationwide[] = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });


  const { day } = useParams();

  return (  
    <div style={{border:"1px solid red"}}>
      {day}
      {NationwideData &&
        NationwideData.map((location: any, i: number) => (
          <div>
            <p>{location.list[0].main.temp}</p>
            {/* <p>{day}</p> */}
          </div>
        ))}
    </div>
  );
}

export default NationwideBox;