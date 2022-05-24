import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { neutralColor, primaryColor } from "../../../theme/colors/colors";
import { HeadingBold5 } from "../../../theme/heading/heading";
import { Popup } from "../popup/Popup";
import {
  BackgroundCloseSessionIcon,
  CloseSeccionButtonsContainer,
  CloseSessionButton,
  CloseSessionContent,
  CloseSessionIcon,
  CloseSessionIconAndTexs,
} from "./styleCloseSessionPopup";

export const CloseSessionPopup = ({ children }) => {
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
          <HeadingBold5>¿Deseas mantener tu session activa?</HeadingBold5>
        </CloseSessionIconAndTexs>
        <CloseSeccionButtonsContainer>
          <CloseSessionButton>Mantener activa</CloseSessionButton>
          <CloseSessionButton
            background="#fff"
            textColor={`${primaryColor.primary500}`}
            border={`1px solid ${primaryColor.primary500}`}
            textColorHover={`${primaryColor.primary400}`}
            backgroundHover="none"
            borderHover={`${primaryColor.primary400}`}
            textColorFocus={`${primaryColor.primary500}`}
            backgroundFocus={`${primaryColor.primary50}`}
            borderFocus={`${primaryColor.primary200}`}
          >
            Cerrar session
          </CloseSessionButton>
        </CloseSeccionButtonsContainer>
      </CloseSessionContent>
    </Popup>
  );
};
