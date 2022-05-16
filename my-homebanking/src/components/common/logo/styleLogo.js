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

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
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
