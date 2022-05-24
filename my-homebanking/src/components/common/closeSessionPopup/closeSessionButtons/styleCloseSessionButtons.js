import styled from "styled-components";
import { Button } from "../../../../theme/buttons/buttons";
import { primaryColor } from "../../../../theme/colors/colors";

const KeepActiveSessionButton = styled(Button)`
  width: 178px;
  height: 47px;
  background: ${primaryColor.primary500};
  color: #fff;
  border: "none";
  font-size: 14px;
  line-height: 17px;
  padding: 12px 16px;

  @media screen and (min-width: 744px) {
    padding: 22px 28px;
    width: 198px;
    height: 66px;
    font-size: 18px;
    line-height: 22px;
  }
`;

const CloseSessionButton = styled(KeepActiveSessionButton)`
  background: #fff;
  color: ${primaryColor.primary500};
  border: 1px solid ${primaryColor.primary500};
  &:hover {
    color: ${primaryColor.primary400};
    background: none;
    border-color: ${primaryColor.primary400};
  }

  &:focus {
    color: ${primaryColor.primary500};
    background: ${primaryColor.primary50};
    border-color: ${primaryColor.primary200};
  }
`;

const CloseSeccionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 744px) {
    flex-direction: row;
    justify-content: center;
    width: 408px;
  }
`;

export {
  CloseSeccionButtonsContainer,
  KeepActiveSessionButton,
  CloseSessionButton,
};
