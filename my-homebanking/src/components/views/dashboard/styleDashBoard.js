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
} from "../../../theme/paragraph/paragraph";
import {
  LogoContainer,
  LogoContent,
  LogoImage,
  LogoTitle,
} from "../../common/logo/styleLogo";

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
    // test para desktop
    height: 84px;
    display: flex;
    justify-content: space-around;
    bottom: none;
    box-shadow: none;
    top: 0;
    background-color: ${neutralColor.neutral700};

    ${MenuIcons} {
      display: none;
    }

    ${FooterText} {
      color: ${neutralColor.neutral500};
    }

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
      color: #ffffff;
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

  @media screen and (min-width: 1512px) {
    align-items: center;
  }
`;

const LinkBox = styled.span``;

const Li = styled.li`
  display: ${(props) => (props.off ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 64px;
  text-align: center;

  @media screen and (min-width: 1512px) {
    display: flex;
    padding: 0 24px;
    width: 100%;
    height: 40px;

    ${FooterText} {
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }

  //this class is setted in NavLink by librery
  .active > * {
    color: ${primaryColor.primary500};
    font-weight: 600;
    line-height: 14px;
  }
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

const ListaItems = styled.p`
  color: ${neutralColor.neutral700};
  margin: 0;
`;

const UserImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  @media screen and (min-width: 1512px) {
    width: 36px;
    height: 36px;
  }
`;

const UserName = styled(FooterText)`
  @media screen and (min-width: 1512px) {
    display: none;
  }
`;

const UserIcon = styled(FontAwesomeIcon)`
  display: none;
  width: 14px;
  height: 14px;
  color: #ffffff;
  @media screen and (min-width: 1512px) {
    display: flex;
  }
`;

const UserBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
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
  UserName,
  LiMobile,
  LinkBox,
  UserIcon,
  UserBox,
};
