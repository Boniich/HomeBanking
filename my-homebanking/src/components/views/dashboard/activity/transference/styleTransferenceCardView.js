import styled from "styled-components";
import { neutralColor } from "../../../../../theme/colors/colors";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../../theme/paragraph/paragraph";

const FigureTransf = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const TransfInfo = styled.div`
  ${ParagraphSemibold2} {
    margin-bottom: 4px;
  }
  ${ParagraphMedium3} {
    margin: 0;
  }
`;

const Transf = styled.div``;

const Divider = styled.hr`
  margin: 0;
  padding: 0;
  background-color: ${neutralColor.neutral200};
`;

export { TransfInfo, FigureTransf, Transf, Divider };
