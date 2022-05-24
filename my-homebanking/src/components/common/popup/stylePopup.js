import Popup from "reactjs-popup";
import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";
import { HeadingSemiBold5 } from "../../../theme/heading/heading";
import { SendArrowIcon } from "../../../theme/styledIcon/styledIcon";
import { CloseButtonContainer } from "../closeButton/styledCloseButton";
import { SendButtonContainer } from "../sendButton/styleSendButton";

const Modal = styled.div`
  width: ${(props) => props.width || `312px`};
  height: ${(props) => props.height || `244px`};
  background: #ffffff;
  border-radius: 16px;

  @media screen and (min-width: 744px) {
    width: ${(props) => props.tableWidth || `400px`};
    height: ${(props) => props.tableHeight || "auto"};
  }

  @media screen and (min-width: 1512px) {
    width: ${(props) => props.desktopWidth || `400px`};
    height: ${(props) => props.desktopHeight || "auto"};
  }
`;

const ModalContainer = styled.div`
  padding: 24px 24px 32px;
`;

const ModalHeader = styled.div`
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${SendButtonContainer} {
    margin: 0;
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
  &-overlay {
    background: ${(props) => props.background || `rgba(17, 24, 39, 0.9)`};
  }

  &-content {
    ${Modal}
    ${ModalContainer}
    ${ModalHeader}
  ${ModalContent}
  }
`;

export { StyledPopup, Modal, ModalContainer, ModalHeader, ModalContent };
