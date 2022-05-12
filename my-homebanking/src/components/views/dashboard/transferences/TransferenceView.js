import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphUnderline2,
} from "../../../../theme/paragraph/paragraph";
import {
  ActivityContainer,
  ActivityContainer2,
  AllActivityBox,
  BackgroundTransferenceIcon,
  CardTransfContainer,
  NoTranferenceMsgContainer,
  NoTransferenceContent,
  TransferenceIcon,
} from "./styleTransference";
import TransferenceCardView from "./TransferenceCardView";

const TransferenceView = () => {
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
        <ActivityContainer2>
          <ParagraphMedium2>Actividades Recientes</ParagraphMedium2>
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
        </ActivityContainer2>
      ) : (
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
      )}
    </ActivityContainer>
  );
};

export default TransferenceView;
