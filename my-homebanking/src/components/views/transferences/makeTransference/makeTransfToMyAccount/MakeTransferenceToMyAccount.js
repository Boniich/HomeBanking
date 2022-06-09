import React from "react";
import { AccountCard } from "../../../../common/accountCard/AccountCard";
import { TransferenceForm } from "../commonTransferenceComponents/TransferenceForm.js/TransferenceForm";

export const MakeTransferenceToMyAccount = () => {
  return (
    <TransferenceForm>
      <AccountCard />
    </TransferenceForm>
  );
};
