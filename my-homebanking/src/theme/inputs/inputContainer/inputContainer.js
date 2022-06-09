import styled from "styled-components";
import { neutralColor } from "../../colors/colors";
import { ParagraphMedium3 } from "../../paragraph/paragraph";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${ParagraphMedium3} {
    color: ${neutralColor.neutral700};
    padding-left: 4px;
  }
`;
