import { ParagraphMedium2 } from "../../../../theme/paragraph/paragraph";
import { ActivityContainer, ActivityContainer2, AllActivityBox, CardTransfContainer } from "./styleTransference";
import TransferenceCardView from "./TransferenceCardView";

const TransferenceView = () => {
  return (
    <ActivityContainer>
      <ActivityContainer2>
        <ParagraphMedium2>Actividades Recientes</ParagraphMedium2>
        <CardTransfContainer>
          {/* hacer datos mokeados mas adelante */}
          <TransferenceCardView/>
          <TransferenceCardView/>
          <TransferenceCardView/>
          <TransferenceCardView/>
          <TransferenceCardView/>
        </CardTransfContainer>
        <AllActivityBox>
          <ParagraphMedium2>Ver toda la actividad</ParagraphMedium2>
        </AllActivityBox>
      </ActivityContainer2>
    </ActivityContainer>
  );
};

export default TransferenceView;
