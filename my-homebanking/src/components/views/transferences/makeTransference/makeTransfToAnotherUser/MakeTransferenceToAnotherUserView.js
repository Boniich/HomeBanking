import { TransferenceForm } from "../commonTransferenceComponents/TransferenceForm/TransferenceForm";

export const MakeTransferenceToAnotherUserView = () => {
  const shortNavText = "A otro usuario";
  const largeNavText = "Transferencia a otro usuario";
  return (
    <TransferenceForm
      shortNavText={shortNavText}
      largeNavText={largeNavText}
    ></TransferenceForm>
  );
};
