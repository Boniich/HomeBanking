import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { neutralColor, primaryColor } from "../../../../theme/colors/colors";
import { HeadingSemiBold3 } from "../../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold3,
} from "../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../theme/shadown/shadown";
import { ModalContainer } from "../../../common/popup/stylePopup";
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

  ${ModalContainer} {
    height: auto;
  }
`;

const CopyButton = styled(FontAwesomeIcon)`
  width: 14.58px;
  height: 16.67px;
  color: ${neutralColor.neutral500};
  margin-left: 14px;
`;

const NumberAccount = styled.div`
  display: flex;

  ${ParagraphMedium2} {
    margin: 0;
  }
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

export {
  AccountSummary,
  AccountSummaryContent,
  SavingType,
  NumberAccount,
  CopyButton,
  BackgroundSendIcon,
};
