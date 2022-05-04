import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { neutralColor, primaryColor } from "../../../../theme/colors/colors";
import {
  HeadingSemiBold3,
  HeadingSemiBold5,
} from "../../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold3,
} from "../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../theme/shadown/shadown";
import { CloseIcon } from "../../../../theme/styledIcon/styledIcon";
import { CloseButtonContainer } from "../../../common/closeButton/styledCloseButton";

const AccountSummary = styled.div`
  width: 312px;
  background-color: #ffff;
  box-shadow: ${shadownXS};
  border-radius: 20px;
  margin-bottom: 32px;

  @media screen and (min-width: 744px) {
    width: 544px;
    box-shadow: ${shadownMD};
  }

  @media screen and (min-width: 1512px) {
    width: 413px;
    height: 220px;
    margin-right: 40px;
  }
`;

const AccountSummaryContent = styled.div`
  padding: 24px 24px;

  ${ParagraphMedium3} {
    margin: 0;
    color: ${neutralColor.neutral500};
  }

  ${HeadingSemiBold3} {
    margin: 8px 0 0 0;
  }
`;

const SavingType = styled.div`
  display: flex;
  justify-content: space-between;

  ${ParagraphSemibold3} {
    color: ${primaryColor.primary600};
  }
`;

const CopyButton = styled(FontAwesomeIcon)`
  width: 14.58px;
  height: 16.67px;
  color: ${neutralColor.neutral500};
`;

const NumberAccount = styled.div`
  display: flex;

  ${CopyButton} {
    margin-left: 14px;
  }

  ${ParagraphMedium2} {
    margin: 0;
  }
`;

const ExtendedNotifyString = styled.span`
  display: none;
`;

const Notify = styled.div`
  width: 100%;

  @media screen and (min-width: 744px) {
    ${ExtendedNotifyString} {
      display: inline-block;
    }
  }
`;

const CloseIconNotify = styled(CloseIcon)`
  width: 14px;
  height: 14px;
  color: #fff;
  margin-left: 39px;
  cursor: pointer;
`;

const BackgroundSendIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border-radius: 100%;
  background: linear-gradient(216.25deg, #60ebd0 4.63%, #0fb398 87.8%);
`;

//popup components

const PopupContainer = styled.div`
  width: 312px;
  height: 244px;
  background: #ffffff;
  border-radius: 16px;
`;

const PopupHeadContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${HeadingSemiBold5} {
    margin: 0;
  }

  //Component inside of CloseButton
  ${CloseButtonContainer} {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

const PopupContent = styled.div`
  padding: 24px 24px 32px;
`;

const StyledPopup = styled(Popup)`
  &-content {
    ${PopupContainer}
    ${PopupHeadContent}
    ${PopupContent}
  }

  &-overlay {
    background: ${neutralColor.neutral900};
    opacity: 0.9;
  }
`;
export {
  AccountSummary,
  AccountSummaryContent,
  SavingType,
  NumberAccount,
  Notify,
  ExtendedNotifyString,
  CloseIconNotify,
  CopyButton,
  BackgroundSendIcon,
  StyledPopup,
  PopupContainer,
  PopupHeadContent,
  PopupContent,
};
