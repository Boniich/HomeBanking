import styled from "styled-components";
import { neutralColor } from "../colors/colors";

const FooterText = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${neutralColor.neutral900};
`;

const FootertextSemiBold = styled(FooterText)`
  font-weight: 600;
`;

const FooterTextCap = styled(FootertextSemiBold)`
  line-height: 130%;
  letter-spacing: 13px;
  text-transform: uppercase;
`;

export default { FooterText, FootertextSemiBold, FooterTextCap };
