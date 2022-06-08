import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";

const Section = styled.section`
  background-color: ${neutralColor.neutral50};
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;
`;

const UserSection2 = styled.div`
  position: absolute;
  top: 132px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 744px) {
    top: 165px;
  }

  @media screen and (min-width: 1512px) {
    top: 352px;
    flex-direction: row;
  }
`;

export { Section, UserSection, UserSection2 };
