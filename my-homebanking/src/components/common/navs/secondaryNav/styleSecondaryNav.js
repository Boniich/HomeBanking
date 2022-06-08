import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import {
  LogoContainer,
  LogoContent,
  LogoImage,
  LogoTitle,
} from "../../logo/styleLogo";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 460px;
  background: #fff;

  @media screen and (min-width: 1512px) {
    height: 80px;
    ${LogoContainer} {
      display: flex;
      margin: 0;
    }

    ${LogoContent} {
      flex-direction: row;
      gap: 6.78px;
    }

    ${LogoImage} {
      width: 27.13px;
      height: 27.13px;
    }

    ${LogoTitle} {
      margin: 0;
      font-size: 20.35px;
      line-height: 24.42px;
    }
  }
`;

const ComeBackArrow = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: ${neutralColor.neutral700};
  cursor: pointer;
`;

const ArrowContainer = styled.span`
  margin-left: 24px;

  @media screen and (min-width: 1512px) {
    margin-left: 123px;
  }
`;

const NavContent = styled.div`
  display: flex;
  gap: 27px;
`;

export { Nav, ComeBackArrow, ArrowContainer, NavContent };
