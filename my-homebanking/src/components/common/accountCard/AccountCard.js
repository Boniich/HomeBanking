import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../theme/paragraph/paragraph";

import logo from "../../../assets/logo.svg";
import {
  AccountContainer,
  AccountContent,
  AccountData,
  AccountTypeLogo,
  LogoOnAccountTypeButton,
} from "./styleAccountCard";
import { useContext } from "react";
import AccountContext from "../../../context/accountContext/AccountContext";

export const AccountCard = ({typeSaving, accountNumber, children }) => {

  const {bringCurrentAccount} = useContext(AccountContext);
  const accountNumberInStorage = sessionStorage.getItem("accNumber");

  const changeAccount = () =>{
    if(accountNumberInStorage !== accountNumber){
      console.log(accountNumber);
      bringCurrentAccount(accountNumber);
      sessionStorage.setItem("accNumber",accountNumber);
    }
  }

  return (
    <AccountContainer onClick={changeAccount}>
      <AccountContent>
        <AccountTypeLogo>
          <LogoOnAccountTypeButton src={logo} />
        </AccountTypeLogo>
        <AccountData>
          <ParagraphSemibold2>{typeSaving}</ParagraphSemibold2>
          <ParagraphMedium3>{accountNumber}</ParagraphMedium3>
        </AccountData>
        {children}
      </AccountContent>
    </AccountContainer>
  );
};
