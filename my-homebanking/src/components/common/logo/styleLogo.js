import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";

const LogoContainer = styled.div`
  display: ${(props) => (props.activeOnLogin ? "block" : "none")};
  margin: 0 auto 40px auto;

  @media screen and (min-width: 744) {
    margin: 0 auto 56px auto;
  }
`;

const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img.attrs((props) => ({
  logoColor:
    props.logoColor === "changeToWhite"
      ? `invert(100%) sepia(0%) saturate(0%) hue-rotate(7deg) brightness(107%) contrast(107%)`
      : `invert(7%) sepia(54%) saturate(587%) hue-rotate(183deg)
      brightness(93%) contrast(96%)`,
}))`
  width: 50px;
  height: 50px;
  filter: ${(props) => props.logoColor};
`;

const LogoTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  letter-spacing: -2%;
  margin: 8px 0 0 0;
  color: ${neutralColor.neutral900};
`;

export { LogoContainer, LogoContent, LogoImage, LogoTitle };
