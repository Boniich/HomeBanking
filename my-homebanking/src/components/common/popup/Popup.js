import React from "react";
import { HeadingSemiBold5 } from "../../../theme/heading/heading";
import { CloseButton } from "../closeButton/CloseButton";
import {
  Modal,
  ModalContainer,
  ModalContent,
  ModalHeader,
  StyledPopup,
} from "./stylePopup";

export const Popup = React.forwardRef((props, ref) => {
  return (
    <StyledPopup
      ref={ref}
      background={props.background}
      modal
      trigger={props.accion}
    >
      {(close) => (
        <Modal height={props.height}>
          <ModalContainer>
            <ModalHeader>
              <HeadingSemiBold5>{props.headerText}</HeadingSemiBold5>
              <CloseButton propOnClick={close} />
            </ModalHeader>
            <ModalContent>{props.children}</ModalContent>
          </ModalContainer>
        </Modal>
      )}
    </StyledPopup>
  );
});
