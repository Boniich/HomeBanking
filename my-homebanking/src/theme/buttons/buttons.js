import styled from "styled-components";
import { primaryColor } from "../colors/colors";

const Button = styled.button`
  font-family: inherit;
  /* El width se cambia en el componente que se este utilizando */
  width: auto;
  height: 55px;
  background-color: ${primaryColor.primary500};
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${primaryColor.primary400};
  }

  &:focus {
    background-color: ${primaryColor.primary700};
  }
`;

// this two button are used in modal like close session and tranference modal

const ButtonWithBackground = styled(Button)`
  width: ${(props) => props.width || "178px"};
  height: ${(props) => props.heigth || "47px"};
  background: ${primaryColor.primary500};
  color: #fff;
  border: "none";
  font-size: 14px;
  line-height: 17px;
  padding: 12px 16px;

  @media screen and (min-width: 744px) {
    padding: ${(props) => props.tablePadding || "22px 28px"};
    width: ${(props) => props.width || "198px"};
    height: ${(props) => props.heigth || "66px"};
    font-size: ${(props) => props.tableFontSize || "18px"};
    line-height: ${(props) => props.tableLineHeight || "22px"};
  }
`;

const ButtonWithoutBackground = styled(ButtonWithBackground)`
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

// Create a new component just be code be more easy to ready in each case
// transaction modals
const MakeNewTransaction = styled(ButtonWithBackground)``;
const ComeBackToSiteButton = styled(ButtonWithoutBackground)``;

// close session modal

const CloseSessionButton = styled(ButtonWithoutBackground)``;
const KeepSessionActiveButton = styled(ButtonWithBackground)``;

export {
  Button,
  MakeNewTransaction,
  ComeBackToSiteButton,
  CloseSessionButton,
  KeepSessionActiveButton,
};
