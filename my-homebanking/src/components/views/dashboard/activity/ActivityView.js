import { Link } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphUnderline2,
} from "../../../../theme/paragraph/paragraph";
import { NonActivityMsg } from "./nonActivityMsg/NonActivityMsg";
import {
  ActivityContainer,
  RenderActivity,
  AllActivityBox,
  CardTransfContainer,
} from "./styleActivityView";
import TransferenceCardView from "./transference/TransferenceCardView";

const ActivityView = () => {
  const transferenceMockData = [
    {
      id: 1,
      amount: 120,
      motive: "Deuda",
      date: "2022-03-01",
    },
    {
      id: 2,
      amount: 150,
      motive: "Deuda 2",
      date: "2022-03-01",
    },
    {
      id: 3,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
    {
      id: 4,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
    {
      id: 5,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
    {
      id: 6,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
    {
      id: 7,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
    {
      id: 8,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
  ];

  return (
    <ActivityContainer>
      {transferenceMockData.length > 0 ? (
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
      ) : (
        <NonActivityMsg />
      )}
    </ActivityContainer>
  );
};

export default ActivityView;
