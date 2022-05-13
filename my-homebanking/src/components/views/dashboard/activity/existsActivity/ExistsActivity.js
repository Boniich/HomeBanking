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

export const ExistsActivity = ({ transferenceMockData }) => {
  return (
    <RenderActivity>
      <ParagraphMedium2>Actividad Reciente</ParagraphMedium2>
      <CardTransfContainer>
        {transferenceMockData.map((transference) => (
          <TransferenceCardView
            key={transference.id}
            amount={transference.amount}
            motive={transference.motive}
            date={transference.date}
          />
        ))}
      </CardTransfContainer>
      <AllActivityBox>
        <Link to="/transacciones">
          <ParagraphUnderline2>Ver toda la actividad</ParagraphUnderline2>
        </Link>
      </AllActivityBox>
    </RenderActivity>
  );
};
