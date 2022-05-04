//  This button has this format [Icon- text - icon]

import {
  faAngleRight,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { SendArrowIcon, SendIcon } from "../../../theme/styledIcon/styledIcon";
import { BackgroundSendIcon, SendButtonContainer } from "./styleSendButton";

export const SendButton = React.forwardRef(({ text, ...props }, ref) => {
  return (
    <SendButtonContainer ref={ref} {...props}>
      <BackgroundSendIcon>
        <SendIcon icon={faLocationArrow} />
      </BackgroundSendIcon>
      {text}
      <SendArrowIcon icon={faAngleRight} />
    </SendButtonContainer>
  );
});
