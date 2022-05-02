import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { HeadingSemiBold5 } from "../../../../theme/heading/heading";
import { ParagraphMedium2 } from "../../../../theme/paragraph/paragraph";
export const BoxUser = styled.div`
  background-color: ${neutralColor.neutral700};
  width: 100%;
  height: 216px;
  ${HeadingSemiBold5} {
    margin: 0;
    color: #ffffff;
    font-weight: 600;
  }

  ${ParagraphMedium2} {
    color: #ffffff;
    margin: 0;
  }
  .box1 {
    padding: 48px 0 0 24px;
  }
`;
