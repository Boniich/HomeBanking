import React from "react";
import { HeadingSemiBold5 } from "../../../theme/heading/heading";
import { CloseButton } from "../closeButton/CloseButton";
import {
  PopupContainer,
  PopupContent,
  PopupHeadContent,
  StyledPopup,
} from "./stylePopup";

export const Popup = React.forwardRef((props, ref) => {
  return (
    <StyledPopup ref={ref} modal trigger={props.accion}>
      {(close) => (
        <PopupContainer>
          <PopupContent>
            <PopupHeadContent>
              <HeadingSemiBold5>{props.headerText}</HeadingSemiBold5>
              <CloseButton propOnClick={close} />
            </PopupHeadContent>
            {props.children}
          </PopupContent>
        </PopupContainer>
      )}
    </StyledPopup>
  );
});
