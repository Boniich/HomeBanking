import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";
import { FooterText } from "../../../theme/footer/footer";

const MenuIcons = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
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
`;

const Li = styled.li``;

const UlMobile = styled(Ul)`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  ${Li} {
    padding: 10px 24px;
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 64px;
  text-align: center;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
  color: ${neutralColor.neutral300};
`;

const Section = styled.section`
  background-color: ${neutralColor.neutral50};
`;

const ListMenu = styled.div`
  position: absolute;
  top: 0;
  background-color: #fff;
  height: 100%;
  width: 100%;

  .box-close-btn {
    margin-bottom: 44px;
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    padding-right: 36px;
  }

  .span-close-btn {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${neutralColor.neutral100};
    border-radius: 100%;
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;
`;

const UserSection2 = styled.div`
  position: absolute;
  top: 135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1512px) {
    flex-direction: row;
  }
`;

const ListaItems = styled.p`
  color: ${neutralColor.neutral700};
  margin: 0;
`;

export {
  Section,
  Nav,
  Ul,
  Li,
  Link,
  MenuIcons,
  ListMenu,
  UlMobile,
  Span,
  ArrowIcon,
  UserSection,
  UserSection2,
  ListaItems,
};
