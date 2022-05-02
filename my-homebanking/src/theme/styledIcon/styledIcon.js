// This are components that handle icons for will use many times
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { neutralColor } from "../colors/colors";

const CloseIcon = styled(FontAwesomeIcon)`
  width: 9.33px;
  height: 9.33px;
  color: ${neutralColor.neutral700};
`;

export { CloseIcon };
