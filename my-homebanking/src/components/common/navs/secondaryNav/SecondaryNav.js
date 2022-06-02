import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { ParagraphSemibold2 } from "../../../../theme/paragraph/paragraph";
import { Logo } from "../../logo/Logo";
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
  gap: 363px;
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

/**
 * Secondary nav, used in transactions and config.
 * @param {String} shortNavText should be required to show at least one string
 * @param {String} largeNavText (opcional) change the short text by this at 744px
 */

export const SecondaryNav = ({ shortNavText, largeNavText }) => {
  const ref = useRef(false);
  const [navText, setNavText] = useState(shortNavText);
  const navigate = useNavigate();
  const switchTextsByWidth = () => {
    const wid = ref.current.offsetWidth;
    console.log(wid);

    if (wid >= 744) {
      setNavText(largeNavText);
    }
  };

  const comeBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    largeNavText && switchTextsByWidth();
  }, []);

  return (
    <Nav ref={ref}>
      <NavContent>
        <ArrowContainer>
          <ComeBackArrow onClick={comeBack} icon={faArrowLeft} />
        </ArrowContainer>
        <ParagraphSemibold2>{navText}</ParagraphSemibold2>
      </NavContent>
      <Logo />
    </Nav>
  );
};
