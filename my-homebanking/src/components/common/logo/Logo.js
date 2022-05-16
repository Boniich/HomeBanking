import { LogoContainer, LogoContent, LogoImage, LogoTitle } from "./styleLogo";
import logo from "../../../assets/logo.svg";
export const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <LogoContent>
        <LogoImage src={logo} />
        <LogoTitle>Saint Patrick</LogoTitle>
      </LogoContent>
    </LogoContainer>
  );
};
