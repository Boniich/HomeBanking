import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ButtonsContainer } from "../../../../theme/buttons/buttonContainer/buttonContainer";
import {
  ComeBackToSiteButton,
  MakeNewTransaction,
} from "../../../../theme/buttons/buttons";
import { Caption } from "../../../../theme/caption/caption";
import { primaryColor } from "../../../../theme/colors/colors";
import { HeadingBold5 } from "../../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphSemibold3,
} from "../../../../theme/paragraph/paragraph";
import { shadownMD } from "../../../../theme/shadown/shadown";
import { CheckIcon } from "../../../../theme/styledIcon/styledIcon";
import { BackgroundIcon } from "../../backgroundIcons/backgroundIcons";
import { Popup } from "../Popup";
import { ModalSubContent, ModalTextAndIcons } from "../stylePopup";
import { TransferenceButtons } from "./transferenceButtons/TransferenceButtons";

export const TransferencePopup = ({
  children,
  amount,
  userName,
  date,
  tranfToAnotherAccountURL,
}) => {
  return (
    <Popup
      action={children}
      background={primaryColor.primary600}
      width="288px"
      height="493px"
      tableWidth="404px"
      tableHeight="509px"
      desktopWidth="404px"
      desktopHeight="509px"
      shadow={shadownMD}
      showHeader={false}
      closeIcon={false}
    >
      <ModalSubContent changeGap marginTop="33px">
        <ModalTextAndIcons
          mobileDisableFlexGap
          tableDisableFlexGap
          tableHeadingText
          tableHeadingLineHeight
          mobileMarginTranf
          tableMarginTranf
        >
          <BackgroundIcon
            mobileMarginBottom="40px"
            tableMarginBottom="32px"
            tranfbackgroundiconwidth={true}
            tranfbackgroundiconheight={true}
            tranfbackgroundcoloricon={"successColor"}
          >
            <CheckIcon
              icon={faCheck}
              tranfcheckiconwidth={true}
              tranfcheckiconheight={true}
              tranfcoloricon={"white"}
            ></CheckIcon>
          </BackgroundIcon>
          <ParagraphMedium2>Enviaste</ParagraphMedium2>
          {/* amount prop */}
          <HeadingBold5>$900.00</HeadingBold5>
          {/* username prop */}
          <ParagraphSemibold3>Danee Woart</ParagraphSemibold3>
          {/* date prop */}
          <Caption>28 Feb 2022 - 05:43pm</Caption>
        </ModalTextAndIcons>
        <TransferenceButtons
          tranfToAnotherAccountURL={tranfToAnotherAccountURL}
        />
      </ModalSubContent>
    </Popup>
  );
};
