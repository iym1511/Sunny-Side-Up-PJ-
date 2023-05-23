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

  // useEffect(() => {
  //   console.log("진혜콘솔");
  //   console.log(NationwideData);
  //   console.log(NationwideStatus);
  // }, [NationwideData]);

  return (
    <Nationwide5DaysWallpaper>
      <h1>전국 날씨</h1>
      <NationwideBigBox>
        <NationwideNavbar>
          {nationwideBox5.map((data: NationwideBox5, i: number) => (
            <NationwideNavbarBtn
              isActive={day === `${i}` ? true : false}
              onClick={() => {
                navigate(`/sunnysideup/${i}`);
              }}
            >
              {data.date}
            </NationwideNavbarBtn>
          ))}
        </NationwideNavbar>
        {<NationwideBox nationwideBox5={nationwideBox5} />}
      </NationwideBigBox>
    </Nationwide5DaysWallpaper>
  );
};

export default Nationwide5Days;

const Nationwide5DaysWallpaper = styled.div`
  margin: 110px;
  /* border: 1px solid yellow; */
  font-family: "NEXON Lv1 Gothic OTF";
  h1{
    margin: 35px; 
  }
`;

const NationwideBigBox = styled.div`
  width: 573px;
  margin: auto;
  padding: 10px 0 30px 0;
  border-radius: 10px;
  /* background-color: #b0daff63; */
`;

const NationwideNavbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 573px;
  height: 70px;
  margin: auto;
  justify-content: center;
  border: 1px solid #ffffff67;
  border-bottom: none;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const NationwideNavbarBtn = styled.button<{ isActive: boolean }>`
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: transparent;
  font-size: 1em;
  font-weight: lighter;
  font-family: "NEXON Lv1 Gothic OTF";
  letter-spacing: 2px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "white" : "#ffffff91")};
  /* color: white; */
  /* border-bottom: ${(props) => (props.isActive ? "1px solid white" : "none")}; */
  text-shadow: ${(props) => (props.isActive ? "0px 0px 8px lemonchiffon" : "none")};
  font-size: ${(props) => (props.isActive ? "1.2em" : "1em")};
  transition: 0.1s;
`;
