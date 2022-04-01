import { ParagraphMedium2 } from "../../../../theme/paragraph/paragraph";
import {
  ActivityContainer,
  ActivityContainer2,
  AllActivityBox,
  CardTransfContainer,
} from "../styleDashBoard";

const TransferenceView = () => {
  return (
    <ActivityContainer>
      <ActivityContainer2>
        <ParagraphMedium2>Actividades Recientes</ParagraphMedium2>
        <CardTransfContainer></CardTransfContainer>
        <AllActivityBox>
          <ParagraphMedium2>Ver toda la actividad</ParagraphMedium2>
        </AllActivityBox>
      </ActivityContainer2>
    </ActivityContainer>
  );
};

export default TransferenceView;
