import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";
import { HeadingSemiBold5 } from "../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../theme/paragraph/paragraph";
import { shadownMD } from "../../../theme/shadown/shadown";

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
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
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

const MenuIcons = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
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

const CloseIcon = styled(FontAwesomeIcon)`
  width: 9.33px;
  height: 9.33px;
  color: ${neutralColor.neutral700};
`;

const BoxUser = styled.div`
  background-color: ${neutralColor.neutral700};
  width: 100%;
  height: 216px;
  ${HeadingSemiBold5} {
    margin: 0;
    color: #ffffff;
    font-weight: 600;
  }

  ${ParagraphMedium2} {
    color: #ffffff;
    margin: 0;
  }
  .box1 {
    padding: 48px 0 0 24px;
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
`;

// actividad

//contendor actividad

const ActivityContainer = styled.div`
  width: 312px;
  margin: 0 auto;
  margin-bottom: 100px;
  border-radius: 20px;
  box-shadow: ${shadownMD};
`;

const ActivityContainer2 = styled.div`
  padding: 24px 24px 40px;
  ${ParagraphMedium2} {
    margin: 0;
  }
`;

// Cards

// contenedor Cards

const CardTransfContainer = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
`;

const FigureTransf = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const TransfInfo = styled.div`
  ${ParagraphSemibold2} {
    margin-bottom: 4px;
  }
  ${ParagraphMedium3} {
    margin: 0;
  }
`;

const Transf = styled.div``;

const Divider = styled.hr`
  margin: 0;
  padding: 0;
  background-color: ${neutralColor.neutral200};
`;

const AllActivityBox = styled.div`
  margin-top: 32px;
`;

export {
  Section,
  Nav,
  Ul,
  Li,
  Link,
  MenuIcons,
  ListMenu,
  BoxUser,
  UlMobile,
  Span,
  ArrowIcon,
  CloseIcon,
  ActivityContainer,
  ActivityContainer2,
  CardTransfContainer,
  FigureTransf,
  TransfInfo,
  Divider,
  Transf,
  AllActivityBox,
};
