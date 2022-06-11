import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  errorColor,
  neutralColor,
  primaryColor,
} from "../../../../theme/colors/colors";
import { FooterText } from "../../../../theme/footer/footer";
import {
  ParagraphMedium2,
  ParagraphSemibold2,
} from "../../../../theme/paragraph/paragraph";
import { shadownLG } from "../../../../theme/shadown/shadown";
import { ArrowIcon } from "../../../../theme/styledIcon/styledIcon";
import { CloseButtonContainer } from "../../closeButton/styledCloseButton";
import {
  LogoContainer,
  LogoContent,
  LogoImage,
  LogoTitle,
} from "../../logo/styleLogo";

const MenuIcons = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: ${neutralColor.neutral500};
`;

const UserIcon = styled(FontAwesomeIcon)`
  display: none;
  width: 14px;
  height: 14px;
  color: #ffffff;
`;

const Nav = styled.nav.attrs((props) => ({
  backColor: props.backColor || `${neutralColor.neutral700}`,
  titleColor: props.titleColor || `#fff`,
  fontColor: props.fontColor || "#fff",
  iconUserColor: props.iconUserColor || "#fff",
  scrollShadow: props.scrollShadow || "none",
}))`
  position: fixed;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px -1px 16px rgba(17, 24, 39, 0.06);
  height: 64px;
  width: 100%;

  ${FooterText} {
    cursor: pointer;
    color: ${neutralColor.neutral500};
  }

  @media screen and (min-width: 1512px) {
    height: 84px;
    display: flex;
    justify-content: space-around;
    bottom: none;
    transition: 0.3s ease-in;
    box-shadow: ${(props) => props.scrollShadow};
    top: 0;
    background: ${(props) => props.backColor};

    ${MenuIcons} {
      display: none;
    }

    ${FooterText} {
      color: ${(props) => props.fontColor};
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
      color: ${(props) => props.titleColor};
    }

    ${UserIcon} {
      display: flex;
      color: ${(props) => props.iconUserColor};
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

const UlMobile = styled(Ul)`
  flex-direction: column;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1512px) {
    justify-content: flex-start;
    align-items: flex-start;
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
    }
    /* 
    .active > * {
      background: ${primaryColor.primary50};
      border-radius: 160px;
      color: ${primaryColor.primary600};
      font-weight: 600;
      line-height: 19px;
    } */
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

  @media screen and (min-width: 1512px) {
    display: ${(props) => props.offOnDesktop && "none"};
  }
`;

const ListMenu = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1512px) {
    top: 72px;
    left: 1350px;
    width: 228px;
    height: 176px;
    box-shadow: ${shadownLG};
    border-radius: 16px;
    ${CloseButtonContainer} {
      display: none;
    }

    ${ArrowIcon} {
      display: none;
    }
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  ${ParagraphMedium2} {
    color: ${neutralColor.neutral700};
    margin: 0;
  }

  ${ParagraphSemibold2} {
    margin: 0;
    color: ${errorColor.error500};
  }
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
  cursor: pointer;
  @media screen and (min-width: 1512px) {
    display: none;
  }
`;

const UserBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

export {
  Nav,
  UserBox,
  UserName,
  UserImage,
  Li,
  LiMobile,
  LinkBox,
  Span,
  ListMenu,
  UlMobile,
  Ul,
  MenuIcons,
  UserIcon,
};
