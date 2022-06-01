import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { ParagraphSemibold2 } from "../../../../theme/paragraph/paragraph";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 27px;
  width: 100%;
  height: 60px;
  background: #fff;
`;

const ComeBackArrow = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: ${neutralColor.neutral700};
`;

const ArrowContainer = styled.span`
  margin-left: 24px;
`;

/**
 * Secondary nav, used in transactions and config.
 * @param {String} shortNavText should be required to show at least one string
 * @param {String} largeNavText (opcional) change the short text by this at 744px
 */

export const SecondaryNav = ({ shortNavText, largeNavText }) => {
  const ref = useRef(false);
  const [navText, setNavText] = useState(shortNavText);

  const switchTextsByWidth = () => {
    const wid = ref.current.offsetWidth;
    console.log(wid);

    if (wid >= 744) {
      setNavText(largeNavText);
    }
  };

  useEffect(() => {
    largeNavText && switchTextsByWidth();
  }, []);

  return (
    <Nav ref={ref}>
      <ArrowContainer>
        <ComeBackArrow icon={faArrowLeft} />
      </ArrowContainer>
      <ParagraphSemibold2>{navText}</ParagraphSemibold2>
    </Nav>
  );
};
