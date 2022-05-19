import Popup from "reactjs-popup";
import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";
import { HeadingSemiBold5 } from "../../../theme/heading/heading";
import { SendArrowIcon } from "../../../theme/styledIcon/styledIcon";
import { CloseButtonContainer } from "../closeButton/styledCloseButton";
import { SendButtonContainer } from "../sendButton/styleSendButton";

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

export { StyledPopup, PopupContainer, PopupHeadContent, PopupContent };
