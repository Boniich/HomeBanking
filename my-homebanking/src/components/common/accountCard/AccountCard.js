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

export const AccountCard = ({ typeSaving, accountNumber, children }) => {
  return (
    <AccountContainer>
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
