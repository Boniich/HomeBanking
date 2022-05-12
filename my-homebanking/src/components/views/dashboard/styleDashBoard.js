import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  errorColor,
  neutralColor,
  primaryColor,
} from "../../../theme/colors/colors";
import { FooterText } from "../../../theme/footer/footer";
import {
  ParagraphMedium2,
  ParagraphSemibold2,
  ParagraphUnderline2,
} from "../../../theme/paragraph/paragraph";

const MenuIcons = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: ${neutralColor.neutral500};
`;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  /* top: 0; */
  /* desktop */
  /* position: fixed; */
  /* bottom: none; */
  /* top: 0; */
  background-color: #ffffff;
  box-shadow: 0px -1px 16px rgba(17, 24, 39, 0.06);
  height: 64px;
  width: 100%;

  @media screen and (min-width: 1512px) {
    bottom: none;
    top: 0;
    background-color: ${neutralColor.neutral700};

    ${MenuIcons} {
      display: none;
    }

    ${FooterText} {
      color: ${neutralColor.neutral500};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 64px;
  text-align: center;
`;

const LiMobile = styled.li`
  padding: 0 24px;
  margin: 16px 0;
`;

const UlMobile = styled(Ul)`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;
const Section = styled.section`
  background-color: ${neutralColor.neutral50};
`;

const ListMenu = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;

  ${ParagraphMedium2} {
    color: ${neutralColor.neutral700};
    margin: 0;
  }

  ${ParagraphSemibold2} {
    margin: 0;
    color: ${errorColor.error500};
  }
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;
`;

const UserSection2 = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 744px) {
    top: 230px;
  }

  @media screen and (min-width: 1512px) {
    top: 390px;
    /* flex-direction: row; */
  }
`;

const ListaItems = styled.p`
  color: ${neutralColor.neutral700};
  margin: 0;
`;

const UserImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;

const CardSection = styled.section`
  width: 413px;
`;

const TitleCardSection = styled.div`
  display: flex;
  justify-content: space-between;

  ${ParagraphSemibold2} {
    color: ${neutralColor.neutral600};
  }

  ${ParagraphUnderline2} {
    color: ${primaryColor.primary600};
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  background: ${neutralColor.neutral100};
  border: 1px solid ${neutralColor.neutral300};
  border-radius: 8px;
  /* it should be 20px but for have card icon more bigger is the 13px */
  padding: 13px;
  display: flex;
  align-items: center;
  gap: 12px;

  ${ParagraphMedium2} {
    margin: 0;
  }
`;

const CardIcon = styled.img`
  height: 37px;
`;

export {
  Section,
  Nav,
  Ul,
  Li,
  MenuIcons,
  ListMenu,
  UlMobile,
  Span,
  UserSection,
  UserSection2,
  ListaItems,
  UserImage,
  LiMobile,
  CardSection,
  TitleCardSection,
  CardContentContainer,
  Card,
  CardIcon,
};
