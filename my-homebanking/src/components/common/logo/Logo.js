import { LogoContainer, LogoContent, LogoImage, LogoTitle } from "./styleLogo";
import trebolsvg from "../../../assets/trebolsvg.svg";
export const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <LogoContent>
        <LogoImage src={trebolsvg} />
        <LogoTitle>Saint Patrick</LogoTitle>
      </LogoContent>
    </LogoContainer>
  );
};
