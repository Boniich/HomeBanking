import styled from "styled-components";
import {
  errorColor,
  neutralColor,
  successColor,
} from "../../../../../theme/colors/colors";
import { ParagraphSemibold2 } from "../../../../../theme/paragraph/paragraph";

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
`;

const Transf = styled.div``;

const Divider = styled.hr`
  margin: 0;
  padding: 0;
  background-color: ${neutralColor.neutral200};
`;
const TransferenceAmount = styled(ParagraphSemibold2).attrs((props) => ({
  amountColor:
    props.amountColor === true
      ? `${successColor.success600}`
      : `${errorColor.error600}`,
}))`
  color: ${(props) => props.amountColor};
`;

export { TransfInfo, FigureTransf, Transf, Divider, TransferenceAmount };
