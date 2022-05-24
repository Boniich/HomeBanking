import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { neutralColor } from "../../../theme/colors/colors";
import { HeadingBold5 } from "../../../theme/heading/heading";
import { Popup } from "../popup/Popup";
import { CloseSessionButtons } from "./closeSessionButtons/CloseSessionButtons";
import {
  BackgroundCloseSessionIcon,
  CloseSessionContent,
  CloseSessionIcon,
  CloseSessionIconAndTexs,
} from "./styleCloseSessionPopup";

export const CloseSessionPopup = ({ children, text }) => {
  return (
    <Popup
      action={children}
      background={neutralColor.neutral700}
      width="316px"
      height="418px"
      tableWidth="544px"
      tableHeight="544px"
      desktopWidth="686px"
      desktopHeight="642px"
    >
      <CloseSessionContent>
        <CloseSessionIconAndTexs>
          <BackgroundCloseSessionIcon>
            <CloseSessionIcon icon={faCircleInfo}></CloseSessionIcon>
          </BackgroundCloseSessionIcon>
          <HeadingBold5>{text}</HeadingBold5>
        </CloseSessionIconAndTexs>
        <CloseSessionButtons />
      </CloseSessionContent>
    </Popup>
  );
};
