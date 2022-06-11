import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphSemibold2,
  ParagraphUnderline2,
} from "../../../../../theme/paragraph/paragraph";
import TransferenceCardView from "../transference/TransferenceCardView";
import {
  AllActivityBox,
  CardTransfContainer,
  LoadMoreResultContainer,
  RenderActivity,
} from "./styleExistsActivity";

export const ExistsActivity = ({ transferenceData }) => {
  const [showAllTransferences, setShowAllTransferences] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/transference" && setShowAllTransferences(true);
  }, []);

  const lessPaddingBotton = !showAllTransferences ? "" : "32px";

  return (
    <RenderActivity paddingBotton={lessPaddingBotton}>
      {!showAllTransferences && (
        <ParagraphMedium2>Actividad Reciente</ParagraphMedium2>
      )}
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
        {!showAllTransferences ? (
          <Link to="/transference">
            <ParagraphUnderline2>Ver toda la actividad</ParagraphUnderline2>
          </Link>
        ) : (
          <LoadMoreResultContainer>
            <ParagraphSemibold2>Cargar mas resultados</ParagraphSemibold2>
          </LoadMoreResultContainer>
        )}
      </AllActivityBox>
    </RenderActivity>
  );
};
