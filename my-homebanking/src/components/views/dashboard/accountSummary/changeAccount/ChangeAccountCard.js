import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../../assets/logo.svg";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../../theme/paragraph/paragraph";
import {
  ChangeAccountContainer,
  ChangeAccountContent,
  AccountTypeLogo,
  ActiveAccountIcon,
  BackgroundIconOfActiveAccoun,
  AccountData,
  LogoOnAccountTypeButton,
} from "./styleChangeAccountCard";

export const ChangeAccountCard = ({ typeSaving, accountNumber, email }) => {
  const emailInToken = localStorage.getItem("data");

  return (
    <ChangeAccountContainer>
      <ChangeAccountContent>
        <AccountTypeLogo>
          <LogoOnAccountTypeButton src={logo} />
        </AccountTypeLogo>
        <AccountData>
          <ParagraphSemibold2>{typeSaving}</ParagraphSemibold2>
          <ParagraphMedium3>{accountNumber}</ParagraphMedium3>
        </AccountData>
        {emailInToken === email && (
          <BackgroundIconOfActiveAccoun>
            <ActiveAccountIcon icon={faCheck} />
          </BackgroundIconOfActiveAccoun>
        )}
      </ChangeAccountContent>
    </ChangeAccountContainer>
  );
};
