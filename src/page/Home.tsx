import { useNavigate } from "react-router";
import styled from "styled-components";
import Bg1 from '../img/sky1.jpg'
import Bg2 from '../img/sky2.jpg'
import { SetStateAction, useState } from "react";
import Footer from "./Footer";
import React from "react";
import ChannelService from "../components/ChannelTalk";
import ChannelTalk from "../components/ChannelTalk";



const Home = () => {
  const navigate = useNavigate();
  
  const [footerBtn, setFooterBtn] = useState<boolean>(false);

  return (
    <HomeBoxWallpaper>
      <FooterDiv isActive={footerBtn}>
            <button onClick={()=>{setFooterBtn(!footerBtn)}}>x</button>
              <h1>Business Information</h1>
              <p>SunnySideUp Inc. 사랑시 고백구 행복동</p>
              <div>
                <p>대표 : 써니사이드업</p>
                <p>사업자등록번호: 001-01-0000001</p>
              </div>
            <p>Copyright ⓒ 2023 by SunnySideUp All Pictures cannot be copied without permission</p>
      </FooterDiv>

      <HomeNavbarBox isActive={footerBtn}>
        <img src={require("../img/Logo3.png")} alt=""/>
        <p>Sunny Side Up</p>
        <button onClick={()=>{
          navigate("/sunnysideup/0")
          setTimeout(()=>{
            window.location.reload()
          },4000)
          }}>Weather cast</button>
      </HomeNavbarBox>
      <HomeAboutBox>
        <HomeAboutDiv>
        <p>SUNNY SIDE / UP</p>
        <h1>S/U</h1>
        <p>
          SU(SunnySideUp)은 2023년에 태어났어요<br />
          삶을 가치있는 것들로 골고루 채우고 살자는 다짐같은 의미를 담았습니다<br />
          그래서 삶의 소중한 순간들을 SunnySideUp에 담았습니다<br />
          그리고 그 날씨들로 계획을 만듭니다<br />
          사람들이 SunnySideUp의 날씨 보고 삶의 소중한 순간들을 함께 기억했으면 좋겠습니다.<br />
        </p>
        <br/>
        <p>with more precious things / a better LIFE</p>
        <img src={require("../img/SU.png")} alt="" />
        <p>
          [LOGO DESIGN]<br/>
          sunnyside의 s + up의 u 심볼을 함께 담아<br/>
          디자인의 로고가 되었습니다.<br/>
        </p>
        </HomeAboutDiv>
        <FooterBtn isActive={footerBtn} onClick={()=> setFooterBtn(!footerBtn)}>
          <img src={require("../img/FooterIcon.png")} alt="" />
        </FooterBtn>
      </HomeAboutBox>
      <ChannelTalk />
    </HomeBoxWallpaper>
  );
};

export default Home;

const HomeBoxWallpaper = styled.div`
  font-family: "NEXON Lv1 Gothic OTF";
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${Bg2});
  background-repeat : no-repeat;
  /* background-size : cover; */
  background-attachment: fixed;
  /* background-position-x: -200px; */
  /* background-position-x: -400px; */
  ::-webkit-scrollbar {
	  display:none /* Chrome , Safari , Opera */
  }
`

const HomeNavbarBox = styled.div<{isActive : boolean}>`
  width: 160px;
  height: 220px;
  position: absolute;
  margin-top: 6%;
  margin-left: 90px;
  padding-top: 20px;
  transition: 0.5s;
  z-index: ${({ isActive }) => (isActive ? 0 : 1000)};
  :hover {
    background-color: #ffffff5d;
    transition: 0.5s;
  }
  img {
    /* 이미지는 기본 inline이기때문에 block후 auto */
    display: block;
    margin: auto;
    width: 115px;
    margin-top: 8px;
  }
  p {
    margin: 0;
    /* margin: auto; */
    margin-top: 13px;
    text-align: center;
    font-family: 'Cafe24Oneprettynight';
    font-size: 1.2em;
    font-weight: bolder;
    letter-spacing: 2px;
    color: black;
  }
  button {
    font-family: 'Cafe24Oneprettynight';
    /* background-color: #ffffff; */
    background-color: rgba( 255, 255, 255, 0);
    border: none;
    width: 120px;
    display: block;
    margin: auto;
    color: #5c5c5c;
    margin-top: 20px;
    font-size: 1.1em;
    font-weight: lighter;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.5s;
      :hover{
        transform: translateX(5px);
        transition: 0.5s;
        color: black;
        font-weight: bold;
      }
  }
  @media screen and (max-width: 1025px) {
    margin-top: 4%;
    margin-left: 6%;
    width: 150px;
    height: 200px;
    overflow: auto;
  }
`

const HomeAboutBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  margin-left: 50%;
  position: relative;
  top: 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
	  display: none /* Chrome , Safari , Opera */
  }
  @media screen and (max-width: 1025px) {
    position: relative;
    top: 283px;
    margin-left: 0;
    width: 100vw;
  }
`
const HomeAboutDiv = styled.div`
  width: 42vw;
  height: 85%;
  position: absolute;
  margin: auto;
  margin-top: 10%;
  margin-left: 5%;
  transition: 0.5s;
  animation: fadeInRight1 1.5s;
  overflow-y: auto ;
  ::-webkit-scrollbar {
	  display:none /* Chrome , Safari , Opera */
  }
  z-index: 1004;
  @media screen and (max-width: 1025px) {
    margin-top: 50px;
    width: 60vw;
    height: 80%;
    overflow: scroll;
  }
  /* @media screen and (max-height: 799px){
    margin-top: 50px;
  } */
  @keyframes fadeInRight1 {
        0% {
            opacity: 0;
            transform: translate3d(10%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
  p {
    color: gray;
    font-size: 0.9em;
    transition: 0.5s;
    margin: 20px 0;
    margin-left: 10px;
      :nth-child(1){
        color: #3f3f3f;
        font-size: 1.1em;
        animation: fadeInRight2 1s;
      @keyframes fadeInRight2 {
            0% {
                opacity: 0;
                transform: translate3d(10%, 0, 0);
            }
            to {
                opacity: 1;
                transform: translateZ(0);
            }
        }
        @media screen and (max-width: 1380px) {
          font-size: 1em;
        }
      }
      :nth-child(3){
        line-height: 150%;
      }
      :nth-child(5){
        margin-top: 10px;
        line-height: 150%;
      }
      :nth-child(7){
        line-height: 150%;
      }
    @media screen and (max-width: 1380px) {
        transition: 0.5s;
        font-size: 0.8em;
      }
  }
  h1 {
    font-size: 4em;
    transition: 0.5s;
    margin-left: 10px;
    letter-spacing: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
    animation: fadeInRight3 0.5s;
      @keyframes fadeInRight3 {
            0% {
                opacity: 0;
                transform: translate3d(10%, 0, 0);
            }
            to {
                opacity: 1;
                transform: translateZ(0);
            }
        }
    @media screen and (max-width: 1380px) {
        transition: 0.5s;
        font-size: 3em;
      }
  }
  img {
    width: 150px;
    position: relative;
    right: 12px;
    margin: 10px 0;
    z-index: 999;
  }
`
const FooterBtn = styled.button<{isActive : boolean}>`
  margin: auto;
  margin-left: 85%;
  position: absolute;
  margin-top: 8%;
  background-color: rgba( 255, 255, 255, 0);
  border: none;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  display:${({ isActive }) => (isActive ? "none" : "")};
  z-index: 1005;
  @media screen and (max-width: 1025px) {

  }
  img {
    width: 20px;
  }
`

const FooterDiv = styled.div<{isActive : boolean}>`
  background-color: #5151d6ae;
  position: absolute;
  z-index: ${({ isActive }) => (isActive ? 1006 : 1000)};
  transition: 0.5s;
  width: 100vw;
  height: 100vh;
  /* display: ${({ isActive }) => (isActive ? "" : "none")}; */
  opacity:${({ isActive }) => (isActive ? 1 : 0)};
  @media screen and (max-width: 1025px) {
    height: 120vh;
    position: fixed;
  }
  @media screen and ( max-height: 799px){
    position: fixed;
  }
  button {
    margin-left: 90%;
    /* position: absolute; */
    margin-top: 7%;
    background-color: rgba( 255, 255, 255, 0);
    border: none;
    cursor: pointer;
    opacity:${({ isActive }) => (isActive ? 1 : 0)};
    color: white;
  }
  h1 {
    font-family: 'SBAggroB';
    color: white;
    text-align: center;
    margin-top: 200px;
    margin-bottom: 80px;
    font-weight: bolder;
    font-size: 4em;
    @media screen and (max-width: 1025px) {
    margin-top: 100px;
    font-size: 3em;
  }
  @media screen and ( max-height: 799px){
    margin-top: 9%;
  }
  }
  p {
    :nth-child(2) {
      margin-left: 20px;
    }
    :last-child {
      font-weight: bolder;
    }
      color: white;
      transition: 0.5s;
      text-align: center;
      font-size: 1em;
      margin: auto;
      margin: 0;
      margin-top: 40px;
  }
  div {
        display: flex;
        justify-content: center;
      }

`