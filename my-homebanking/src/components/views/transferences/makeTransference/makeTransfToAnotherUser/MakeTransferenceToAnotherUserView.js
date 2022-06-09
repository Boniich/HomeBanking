import { TransferenceForm } from "../commonTransferenceComponents/TransferenceForm/TransferenceForm";
import { UserResult } from "../commonTransferenceComponents/userResult/UserResult";

export const MakeTransferenceToAnotherUserView = () => {
  const shortNavText = "A otro usuario";
  const largeNavText = "Transferencia a otro usuario";
  return (
    <TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
      <UserResult removeBorder={true} removePadding={true} disableicon={true} />
    </TransferenceForm>
  );
};
