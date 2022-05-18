import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { infoColor } from "../../../theme/colors/colors";
import { ParagraphSemibold3 } from "../../../theme/paragraph/paragraph";
import {
  CloseIconNotification,
  InfoIconNotification,
  NotificationContainer,
  NotificationIconAndText,
} from "./styleShowNotification";

export const showNotification = (text, color) => {
  toast.dismiss();
  toast(
    (t) => (
      <NotificationContainer paragraphColor={color}>
        <NotificationIconAndText>
          <InfoIconNotification
            icon={faCircleInfo}
            iconColor={infoColor.info900}
          />
          <ParagraphSemibold3>{text}</ParagraphSemibold3>
        </NotificationIconAndText>
        <CloseIconNotification
          icon={faXmark}
          iconColor={infoColor.info900}
          onClick={() => toast.dismiss(t.id)}
        />
      </NotificationContainer>
    ),
    {
      style: {
        minWidth: "200px",
        maxWidth: "100%",
      },
    },
    {
      duration: 2000,
    }
  );
};
