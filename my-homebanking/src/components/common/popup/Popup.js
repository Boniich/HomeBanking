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

/**
 * Create a popup using react-popup librery.
 *
 * All param are opcional but ref, action and children props always should be added if you
 * want have a trigger accion and content to render
 * @param {any} ref Add reference in order to be able that trigger works like should be.
 * @param {string} background  Set a background color for overlay of popup. It has a default value of rgba(17, 24, 39, 0.9)
 * @param {any} action Accion what will display popup. It can be a button component, a text or whatever
 * @param {string} headerText  Text that will have the propup in the top of it
 * @param {string} height  height of popup. It has a default value of 244px
 * @param {any} children It is the "children of popup" which will be render what you want in middle of popup
 **/

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
