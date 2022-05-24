import {
  CloseSeccionButtonsContainer,
  CloseSessionButton,
  KeepActiveSessionButton,
} from "./styleCloseSessionButtons";

export const CloseSessionButtons = () => {
  return (
    <CloseSeccionButtonsContainer>
      <KeepActiveSessionButton>Mantener activa</KeepActiveSessionButton>
      <CloseSessionButton>Cerrar session</CloseSessionButton>
    </CloseSeccionButtonsContainer>
  );
};
