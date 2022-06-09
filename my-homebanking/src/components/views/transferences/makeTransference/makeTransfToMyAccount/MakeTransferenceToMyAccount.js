import React from "react";
import { AccountCard } from "../../../../common/accountCard/AccountCard";
import { MakeTransferenceView } from "../commonTransferenceComponents/MakeTransferenceView";

export const MakeTransferenceToMyAccount = () => {
  return (
    <MakeTransferenceView>
      <AccountCard />
    </MakeTransferenceView>
  );
};
