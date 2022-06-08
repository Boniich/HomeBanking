import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { ParagraphMedium2 } from "../../../../../theme/paragraph/paragraph";
import {
  BackgroundActivityIcon,
  NonActivityMsgContainer,
  NonActivityMsgContent,
  TransferenceIcon,
} from "./styleNonActivityMsg";

export const NonActivityMsg = () => {
  return (
    <NonActivityMsgContainer>
      <NonActivityMsgContent>
        <BackgroundActivityIcon>
          <TransferenceIcon icon={faRightLeft} />
        </BackgroundActivityIcon>
        <ParagraphMedium2>
          Aún no has realizado ninguna transacción
        </ParagraphMedium2>
      </NonActivityMsgContent>
    </NonActivityMsgContainer>
  );
};
