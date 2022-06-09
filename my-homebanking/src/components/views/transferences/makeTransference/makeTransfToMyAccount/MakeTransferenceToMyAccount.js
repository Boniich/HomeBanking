import React from "react";
import { AccountCard } from "../../../../common/accountCard/AccountCard";
import { TransferenceForm } from "../commonTransferenceComponents/TransferenceForm.js/TransferenceForm";

export const MakeTransferenceToMyAccount = () => {
  const shortNavText = "A cuenta propia";
  const largeNavText = "Transferencia a cuenta propia";
  return (
    <TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
      <AccountCard />
    </TransferenceForm>
  );
};
