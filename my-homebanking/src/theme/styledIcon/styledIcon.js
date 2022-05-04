// This are components that handle icons for will use many times
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { neutralColor, primaryColor } from "../colors/colors";

const CloseIcon = styled(FontAwesomeIcon)`
  width: 9.33px;
  height: 9.33px;
  color: ${neutralColor.neutral700};
`;
const ArrowIcon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
  color: ${neutralColor.neutral300};
`;

const SendIcon = styled(FontAwesomeIcon)`
  font-weight: 13.33px;
  color: #fff;
`;

const SendArrowIcon = styled(ArrowIcon)`
  color: ${primaryColor.primary500};
  font-size: 14px;
  margin-left: 64px;
`;
export { CloseIcon, ArrowIcon, SendIcon, SendArrowIcon };
