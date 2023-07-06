import NationwideBox from "./NationwideBox";
import { useNavigate, useParams } from "react-router";
import { NationwideBox5 } from "../types/NationwidePredict5";
import styled from "styled-components";

const Nationwide5Days = () => {
  const { day } = useParams();
  const navigate = useNavigate();
  const date = new Date();
  const currentDay = date.getDate();
  // 이번달의 마지막 날
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  // 현재 달
  const month = String(date.getMonth() + 1);
  // 현재 일
  const day1 = date.getDate();

  const month2 = () => {
    // 오늘 날짜가 해당 월의 마지막 날이라면
    if (currentDay === lastDayOfMonth) {
      // 다음달일 return
      date.setMonth(date.getMonth() + 2);
      return date.getMonth();
    } else {
      // 아니면, 현재 달을 return
      return date.getMonth() + 1;
    }
  };

  const day2 = () => {
    // 오늘 날짜가 해당 월의 마지막 날이라면
    if (currentDay === lastDayOfMonth) {
      // 날짜를 1일로 설정
      date.setDate(1);
      return date.getDate();
    } else {
      // 아니면, 현재 날짜에 +1
      return date.getDate() + 1;
    }
  };

  const month3 = () => {
    if (currentDay === lastDayOfMonth) {
      date.setMonth(date.getMonth());
      return date.getMonth();
    } else {
      return date.getMonth() + 1;
    }
  };

  const day3 = () => {
    if (currentDay === lastDayOfMonth) {
      date.setDate(2);
      return date.getDate();
    } else {
      return date.getDate() + 2;
    }
  };

  const month4 = () => {
    if (currentDay === lastDayOfMonth) {
      date.setMonth(date.getMonth());
      return date.getMonth();
    } else {
      return date.getMonth() + 1;
    }
  };

  const day4 = () => {
    if (currentDay === lastDayOfMonth) {
      date.setDate(3);
      return date.getDate();
    } else {
      return date.getDate() + 3;
    }
  };

  const month5 = () => {
    if (currentDay === lastDayOfMonth) {
      date.setMonth(date.getMonth());
      return date.getMonth();
    } else {
      return date.getMonth() + 1;
    }
  };

  const day5 = () => {
    if (currentDay === lastDayOfMonth) {
      date.setDate(4);
      return date.getDate();
    } else {
      return date.getDate() + 4;
    }
  };

  const nationwideBox5: NationwideBox5[] = [
    {
      date: `${month}.${day1}`,
    },
    {
      date: `${month2()}.${day2()}`,
    },
    {
      date: `${month3()}.${day3()}`,
    },
    {
      date: `${month4()}.${day4()}`,
    },
    {
      date: `${month5()}.${day5()}`,
    },
  ];

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
        {<NationwideBox />}
      </NationwideBigBox>
    </Nationwide5DaysWallpaper>
  );
};

export default Nationwide5Days;

const Nationwide5DaysWallpaper = styled.div`
  font-family: "NEXON Lv1 Gothic OTF";
  margin: 110px auto;
  h1 {
    margin: 35px auto;
    width: 200px;
  }
`;

const NationwideBigBox = styled.div`
  width: 573px;
  margin: auto;
  padding: 10px 0 30px 0;
  border-radius: 10px;
  /* background-color: #b0daff63; */
  @media screen and (max-width: 736px) {
    width: 350px;
    height: 450px;
  }
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
  @media screen and (max-width: 736px) {
    margin: auto;
    width: 350px;
  }
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
  /* border-bottom: ${(props) =>
    props.isActive ? "1px solid white" : "none"}; */
  text-shadow: ${(props) =>
    props.isActive ? "0px 0px 8px lemonchiffon" : "none"};
  font-size: ${(props) => (props.isActive ? "1.2em" : "1em")};
  transition: 0.1s;
  @media screen and (max-width: 736px) {
    margin: 3px;
  }
`;
