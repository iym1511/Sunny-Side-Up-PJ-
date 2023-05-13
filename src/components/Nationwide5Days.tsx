import { useEffect, useState } from "react";
import { getNationwidePredict5Data } from "../module/nationwidePredict5";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import NationwideBox from "./NationwideBox";
import { useNavigate, useParams } from "react-router";
import {
  Nationwide,
  NationwideBox5,
  NationwideData,
} from "../types/NationwidePredict5";
import styled from "styled-components";

const Nationwide5Days = () => {
  const { day } = useParams();
  const navigate = useNavigate();
  const NationwideData = useAppSelector((state) => {
    return state.nationwideApi.apiData;
  });
  const NationwideStatus = useAppSelector((state) => {
    return state.nationwideApi.status;
  });
  const date = new Date();
  const month = String(date.getMonth() + 1);
  const day1 = String(date.getDate()).padStart(2, "0");
  const day2 = String(date.getDate() + 1).padStart(2, "0");
  const day3 = String(date.getDate() + 2).padStart(2, "0");
  const day4 = String(date.getDate() + 3).padStart(2, "0");
  const day5 = String(date.getDate() + 4).padStart(2, "0");
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
    <Nationwide5DaysWallpaper>
      <h1>전국날씨</h1>
      <NationwideNavbar>
        {nationwideBox5.map((d, i) => (
          <NationwideNavbarBtn
            isActive={day === `${i}` ? true : false}
            onClick={() => {
              navigate(`/sunnysideup/${i}`);
            }}
          >
            {d.date}
          </NationwideNavbarBtn>
        ))}
      </NationwideNavbar>
      {<NationwideBox nationwideBox5={nationwideBox5} />}
    </Nationwide5DaysWallpaper>
  );
};

export default Nationwide5Days;

const Nationwide5DaysWallpaper = styled.div`
  margin: 0;
  border: 1px solid yellow;
`;

const NationwideNavbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 573px;
  margin: auto;
  justify-content: center;
`;

const NationwideNavbarBtn = styled.button<{ isActive: boolean }>`
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: transparent;
  font-size: 1em;
  font-weight: lighter;
  color: ${(props) => (props.isActive ? "red" : "white")};
  border-bottom: ${(props) => (props.isActive ? "1px solid red" : "none")};
`;
