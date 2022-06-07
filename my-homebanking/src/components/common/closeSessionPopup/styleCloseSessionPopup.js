import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Caption } from "../../../theme/caption/caption";
import {
  neutralColor,
  secondaryColor,
  successColor,
} from "../../../theme/colors/colors";
import { HeadingBold5 } from "../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphSemibold3,
} from "../../../theme/paragraph/paragraph";
const CloseSessionContent = styled.div.attrs((props) => ({
  changeGap: props.changeGap && "48px",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.changeGap || "32px"};
  margin-top: 12px;

  @media screen and (min-width: 744px) {
    gap: ${(props) => props.changeGap || "64px"};
    margin-top: 33px;
  }

  @media screen and (min-width: 1512px) {
    margin-top: 80px;
  }
`;

const CloseSessionIconAndTexs = styled.div.attrs((props) => ({
  mobileDisableFlexGap: props.mobileDisableFlexGap === true ? "0" : "24px",
  tableDisableFlexGap: props.tableDisableFlexGap === true ? "0" : "32px",
  tableHeadingText: props.tableHeadingText === true ? "24px" : "30px",
  tableHeadingLineHeight:
    props.tableHeadingLineHeight === true ? "130%" : "120%",
  mobileMarginTranf: "16px 0",
  tableMarginTranf: "21px 0 20px 0",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.mobileDisableFlexGap};

  /* only is visible in the transference modal */
  ${ParagraphMedium2} {
    color: ${neutralColor.neutral800};
  }

  ${HeadingBold5} {
    width: 251px;
    margin: 0;
    text-align: center;
    font-weight: 700;
    color: ${neutralColor.neutral800};
    margin: ${(props) => props.mobileMarginTranf};
  }

  /* only is visible in the transference modal */
  ${ParagraphSemibold3} {
    color: ${neutralColor.neutral800};
    margin-bottom: 3px;
  }

  ${Caption} {
    color: ${neutralColor.neutral500};
  }

  @media screen and (min-width: 744px) {
    gap: ${(props) => props.tableDisableFlexGap};
    ${HeadingBold5} {
      width: 396px;
      font-size: ${(props) => props.tableHeadingText};
      line-height: ${(props) => props.tableHeadingLineHeight};
      letter-spacing: -0.01em;
      font-weight: 600;
      margin: ${(props) => props.tableMarginTranf};
    }

    ${ParagraphMedium2} {
      font-size: 18px;
      line-height: 22px;
    }

    ${ParagraphSemibold3} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const BackgroundCloseSessionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.mobileMarginBottom};
  /* width: 56px;
  height: 56px;
  background: ${secondaryColor.secondary200}; */
  border-radius: 120px;
  /* test para modal de transaccion */
  width: 64px;
  height: 64px;
  background: ${successColor.success600};

  @media screen and (min-width: 744px) {
    margin-bottom: ${(props) => props.tableMarginBottom};
  }
`;

const CloseSessionIcon = styled(FontAwesomeIcon)`
  /* width: 32px;
  height: 32px;
  color: ${secondaryColor.secondary800}; */
  /* test para modal de transaccion */
  width: 29.09px;
  height: 29.09px;
  color: #fff;
`;

export {
  CloseSessionContent,
  CloseSessionIconAndTexs,
  BackgroundCloseSessionIcon,
  CloseSessionIcon,
};
