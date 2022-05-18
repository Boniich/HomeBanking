import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import styled from "styled-components";
import {
  infoColor,
  neutralColor,
  primaryColor,
} from "../../../../theme/colors/colors";
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
import {
  CloseIcon,
  SendArrowIcon,
} from "../../../../theme/styledIcon/styledIcon";
import { CloseButtonContainer } from "../../../common/closeButton/styledCloseButton";
import { SendButtonContainer } from "../../../common/sendButton/styleSendButton";

const AccountSummary = styled.div`
  width: 312px;
  height: 258px;
  background-color: #ffff;
  box-shadow: ${shadownXS};
  border-radius: 20px;
  margin-bottom: 32px;

  @media screen and (min-width: 744px) {
    width: 544px;
    height: 319px;
    box-shadow: ${shadownMD};
  }

  @media screen and (min-width: 1512px) {
    width: 413px;
    height: 312px;
    margin-right: 40px;
  }
`;

const AccountSummaryContent = styled.div`
  padding: 24px 24px 32px;

  ${ParagraphMedium3} {
    margin: 0;
    color: ${neutralColor.neutral500};
  }

  ${HeadingSemiBold3} {
    margin: 0 0 8px 0;
  }

  ${SendButtonContainer} {
    &:hover {
      transition: all 0.5s;
      background-color: ${primaryColor.primary300};
    }
  }

  @media screen and (min-width: 744px) {
    padding: 32px 32px 47px;

    ${ParagraphMedium3} {
      font-size: 16px;
      line-height: 24px;
    }

    ${HeadingSemiBold3} {
      font-size: 48px;
      letter-spacing: -0.02em;
      margin: 0 0 12px 0;
    }

    ${SendButtonContainer} {
      margin-top: 38px;
    }
  }

  @media screen and (min-width: 1512px) {
    padding: 32px 32px 40px;
  }
`;

const SavingType = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

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

const CloseIconNotify = styled(CloseIcon)`
  width: 16px;
  height: 16px;
  color: ${infoColor.info900};
  cursor: pointer;
`;

const NotifySpan = styled.span`
  display: flex;
  align-items: center;
  gap: 13.67px;
`;

const Notify = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ParagraphSemibold3} {
    color: ${infoColor.info900};
    margin: 0;
    cursor: default;
  }

  @media screen and (min-width: 740px) {
    width: 420px;
  }
`;

const InfoIconNotify = styled(CloseIconNotify)`
  width: 16.67px;
  height: 16.67px;
  cursor: default;
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

  @media screen and (min-width: 744px) {
    width: 400px;
  }
`;

const PopupHeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

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

  ${SendButtonContainer} {
    margin: 0;
    margin-bottom: 16px;
    background: transparent;
    border: 1px solid ${neutralColor.neutral300};
    color: ${neutralColor.neutral800};

    ${SendArrowIcon} {
      color: ${neutralColor.neutral700};
    }

    &:hover {
      transition: all 0.5s;
      background-color: ${neutralColor.neutral100};
    }
  }
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
  InfoIconNotify,
  CloseIconNotify,
  CopyButton,
  BackgroundSendIcon,
  StyledPopup,
  PopupContainer,
  PopupHeadContent,
  PopupContent,
  NotifySpan,
};
