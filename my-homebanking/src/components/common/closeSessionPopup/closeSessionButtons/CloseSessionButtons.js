import {
  CloseSeccionButtonsContainer,
  CloseSessionButton,
  KeepActiveSessionButton,
} from "./styleCloseSessionButtons";

export const CloseSessionButtons = () => {
  const closeSession = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <CloseSeccionButtonsContainer>
      <KeepActiveSessionButton>Mantener activa</KeepActiveSessionButton>
      <CloseSessionButton onClick={closeSession}>
        Cerrar session
      </CloseSessionButton>
    </CloseSeccionButtonsContainer>
  );
};
