import { Link } from "react-router-dom";
import { ButtonsContainer } from "../../../../../theme/buttons/buttonContainer/buttonContainer";
import {
  ComeBackToSiteButton,
  MakeNewTransaction,
} from "../../../../../theme/buttons/buttons";

export const TransferenceButtons = ({ tranfToAnotherAccountURL }) => {
  const transfURL = tranfToAnotherAccountURL;
  const makeNewTransference = () => {
    transfURL === "" && window.location.reload();
  };
  return (
    <ButtonsContainer gap="16px" flexDirection="column" tableWidth="none">
      <Link to={tranfToAnotherAccountURL}>
        <MakeNewTransaction
          onClick={makeNewTransference}
          tablePadding="12px 16px"
          width="195px"
          heigth="41px"
          tableFontSize="14px"
          tableLineHeight="17px"
        >
          Nueva Transferencia
        </MakeNewTransaction>
      </Link>

      <Link to="/">
        <ComeBackToSiteButton
          tablePadding="12px 16px"
          width="195px"
          heigth="41px"
          tableFontSize="14px"
          tableLineHeight="17px"
        >
          Regresar al inicio
        </ComeBackToSiteButton>
      </Link>
    </ButtonsContainer>
  );
};
