import { useNavigate } from "react-router";
import styled from "styled-components";
import Bg1 from '../img/sky1.jpg'
import Bg2 from '../img/sky2.jpg'

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeBoxWallpaper>
      <HomeNavbarBox>
        <img src={require("../img/logo.png")} alt=""/>
        <p>SunnySideUp</p>
        <button onClick={()=>{
          navigate("/sunnysideup/0")
          setTimeout(()=>{
            window.location.reload()
          },4000)
          }}>Weather</button>
      </HomeNavbarBox>
      <HomeAboutBox>
        <HomeAboutDiv>
        <p>SUNNYSIDE / UP</p>
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
      </HomeAboutBox>
    </HomeBoxWallpaper>
  );
};

export default Home;

const HomeBoxWallpaper = styled.div`
  font-family: "NEXON Lv1 Gothic OTF";
  width: 100vw;
  height: 100vh;
  background-image: url(${Bg2});
  background-repeat : no-repeat;
  /* background-size : cover; */
  background-attachment: fixed;
  /* background-position-x: -200px; */
  background-position-x: -400px;
`

const HomeNavbarBox = styled.div`
  /* border: 1px solid white; */
  width: 150px;
  height: 250px;
  position: absolute;
  margin-top: 100px;
  margin-left: 90px;
  transition: 0.5s;
  :hover {
    background-color: #ffffff82;
    transition: 0.5s;
  }
  img {
    /* 이미지는 기본 inline이기때문에 block후 auto */
    display: block;
    margin: auto;
    width: 130px;
    margin-top: 8px;
  }
  p {
    margin: 0;
    /* margin: auto; */
    margin-top: 10px;
    text-align: center;
    font-family: 'Cafe24Oneprettynight';
    font-size: 15px;
    font-weight: lighter;
    letter-spacing: 5px;
    color: black;
  }
  button {
    font-family: 'Cafe24Oneprettynight';
    /* background-color: #ffffff; */
    background-color: rgba( 255, 255, 255, 0);
    border: none;
    width: 100px;
    display: block;
    margin: auto;
    color: black;
    margin-top: 20px;
    font-size: 18px ;
    cursor: pointer;
    transition: 0.5s;
    font-weight: bold;
  }
  button:hover {
    transform: translateX(2px);
    transition: 0.5s;
  }
`

const HomeAboutBox = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: white;
  margin-left: 50%;
`
const HomeAboutDiv = styled.div`
  width: 42vw;
  position: absolute;
  margin: auto;
  margin-top: 200px;
  margin-left: 5%;
  transition: 0.5s;
  p {
    color: gray;
    font-size: 0.9em;
    transition: 0.5s;
    margin: 0;
    margin-left: 10px;
      :nth-child(1){
        color: #3f3f3f;
        font-size: 1.1em;

        @media screen and (max-width: 1380px) {
        font-size: 1em;
      }
      }
      :nth-child(3){
        line-height: 150%;
      }
      :nth-child(5){
        margin-top: 10px;
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
    @media screen and (max-width: 1380px) {
        transition: 0.5s;
        font-size: 3em;
      }
  }
  img {
    width: 150px;
  }
`
