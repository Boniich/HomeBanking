import {
  faAngleRight,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ParagraphSemibold2 } from "../../../theme/paragraph/paragraph";
import { SendArrowIcon } from "../../../theme/styledIcon/styledIcon";
import {
  ActiveExtraText,
  BackgroundSendIcon,
  IconTextContainer,
  SendButtonContainer,
  SendIcon,
} from "./styleSendButton";

//  This button has this format [Icon- text - icon]

export const SendButton = React.forwardRef(
  ({ text, extraText, ...props }, ref) => {
    return (
      <SendButtonContainer ref={ref} {...props}>
        <IconTextContainer>
          <BackgroundSendIcon>
            <SendIcon icon={faLocationArrow} />
          </BackgroundSendIcon>
          <ParagraphSemibold2>
            {text} <ActiveExtraText>{extraText}</ActiveExtraText>
          </ParagraphSemibold2>
        </IconTextContainer>
        <SendArrowIcon icon={faAngleRight} />
      </SendButtonContainer>
    );
  }
);
