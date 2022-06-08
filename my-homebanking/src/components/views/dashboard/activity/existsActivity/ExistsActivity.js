import { Link } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphUnderline2,
} from "../../../../../theme/paragraph/paragraph";
import TransferenceCardView from "../transference/TransferenceCardView";
import {
  AllActivityBox,
  CardTransfContainer,
  RenderActivity,
} from "./styleExistsActivity";

export const ExistsActivity = ({ transferenceData }) => {
  return (
    <RenderActivity>
      <ParagraphMedium2>Actividad Reciente</ParagraphMedium2>
      <CardTransfContainer>
        {transferenceData.map((transference) => (
          <TransferenceCardView
            key={transference._id}
            amount={transference.amount}
            motive={transference.motive}
            date={transference.date}
            destiny={transference.destiny}
            baseIso={transference.exchangeInfo.baseIso}
            objectiveIso={transference.exchangeInfo.objectiveIso}
          />
        ))}
      </CardTransfContainer>
      <AllActivityBox>
        <Link to="">
          <ParagraphUnderline2>Ver toda la actividad</ParagraphUnderline2>
        </Link>
      </AllActivityBox>
    </RenderActivity>
  );
};
