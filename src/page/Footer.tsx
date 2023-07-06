import React from "react";
import { FC } from "react";
import styled from "styled-components";

// React.SetStateAction은 상태를 업데이트하기위한 값의 타입을 제공
interface FooterProps {
  setFooterBtn: React.Dispatch<React.SetStateAction<boolean>>;
  footerBtn: boolean;
}

const Footer: FC<FooterProps> = ({ setFooterBtn, footerBtn }) => {
  return (
    <FooterWallpaperBox>
      <button
        onClick={() => {
          setFooterBtn(!footerBtn);
        }}
      >
        x
      </button>
    </FooterWallpaperBox>
  );
};

export default Footer;

const FooterWallpaperBox = styled.div`
  position: absolute;
  background-color: #3435806d;
  width: 100vw;
  height: 100vh;
  z-index: 11;

  button {
    margin-left: 92.5%;
    position: absolute;
    margin-top: 100px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
  }
`;
