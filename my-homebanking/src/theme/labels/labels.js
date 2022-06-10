import styled from "styled-components";
import { neutralColor } from "../colors/colors";

export const ChangeImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  width: 104px;
  height: 41px;
  border-radius: 8px;
  color: ${neutralColor.neutral800};
  border: 1px solid ${neutralColor.neutral300};
  background: #fff;
  font-family: 400;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;
