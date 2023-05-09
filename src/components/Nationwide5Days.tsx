import { useEffect } from "react";
import { getNationwidePredict5Data } from "../module/nationwidePredict5";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import NationwideBox from "./NationwideBox";
import { useNavigate, useParams } from "react-router";
import { Nationwide, NationwideBox5, NationwideData } from "../types/NationwidePredict5";

let locationArray: any = [];

const Nationwide5Days = () => {
  const dispatch = useAppDispatch();
  const { day } = useParams();
  const navigate = useNavigate();
  const NationwideData = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });
  const NationwideStatus = useAppSelector((state) => {
    return state.nationwideApi.status;
  });
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day1 = String(date.getDate()).padStart(2, "0");
  const day2 = String(date.getDate() + 1).padStart(2, "0");
  const day3 = String(date.getDate() + 2).padStart(2, "0");
  const day4 = String(date.getDate() + 3).padStart(2, "0");
  const day5 = String(date.getDate() + 4).padStart(2, "0");
  // const dayArray :string[]= [day1, day2, day3, day4, day5];

  const nationwideBox5: NationwideBox5[] = [
    {
      date: `${month}.${day1}`,
    },
    {
      date: `${month}.${day2}`,
    },
    {
      date: `${month}.${day3}`,
    },
    {
      date: `${month}.${day4}`,
    },
    {
      date: `${month}.${day5}`,
    },
  ];

  useEffect(() => {
    console.log("진혜콘솔");
    console.log(NationwideData);
    console.log(NationwideStatus);
  }, [NationwideData]);

  return (
    <div>
      <h1>전국날씨</h1>

      {/* {NationwideData &&
        NationwideData.map((location: any, i: number) => (
          <div>
            <p>{location.city.name}</p>
            <p>{}</p>
          </div>
        ))} */}

      <div>
        {nationwideBox5.map((d, i) => (
          <div>
            <p
              onClick={() => {
                navigate(`/sunnysideup/${i}`);
              }}
            >
              {d.date}
            </p>
          </div>
        ))}
        {<NationwideBox nationwideBox5={nationwideBox5} />}
      </div>
    </div>
  );
};

export default Nationwide5Days;
