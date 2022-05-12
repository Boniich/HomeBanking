import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { ParagraphMedium2 } from "../../../../../theme/paragraph/paragraph";
import {
  BackgroundTransferenceIcon,
  NoTranferenceMsgContainer,
  NoTransferenceContent,
  TransferenceIcon,
} from "./styleNoTransferenceMsg";

export const NoTransferenceMsg = () => {
  return (
    <NoTranferenceMsgContainer>
      <NoTransferenceContent>
        <BackgroundTransferenceIcon>
          <TransferenceIcon icon={faRightLeft} />
        </BackgroundTransferenceIcon>
        <ParagraphMedium2>
          Aún no has realizado ninguna transacción
        </ParagraphMedium2>
      </NoTransferenceContent>
    </NoTranferenceMsgContainer>
  );
};
