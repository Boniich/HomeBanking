import styled from "styled-components";
import { neutralColor, primaryColor } from "../colors/colors";

const Button = styled.button.attrs((props) => ({
  disabledBackground: props.disabledBackground
    ? `${neutralColor.neutral200}`
    : `${primaryColor.primary500}`,
  disableColor: props.disableColor ? `${neutralColor.neutral400}` : ` #fff`,
  disableCursor: props.disableCursor ? "no-drop" : "pointer",
  disableFocus: props.disableFocus ? "none" : `${primaryColor.primary700}`,
  disableHover: props.disableHover ? "none" : `${primaryColor.primary400}`,
}))`
  font-family: inherit;
  /* El width se cambia en el componente que se este utilizando */
  width: auto;
  height: 55px;
  background-color: ${(props) => props.disabledBackground};
  color: ${(props) => props.disableColor};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  border: none;
  cursor: ${(props) => props.disableCursor};

  &:hover {
    background-color: ${(props) => props.disableHover};
  }

  &:focus {
    background-color: ${(props) => props.disableFocus};
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

const ConfigButton = styled.button.attrs((props) => ({
  switchBackground:
    props.switchBackground === true ? `${neutralColor.neutral700}` : "#fff",
  switchColor:
    props.switchColor === true ? "#fff" : `${neutralColor.neutral500}`,
  switchFontWeight: props.switchFontWeight === true ? "600" : "400",
  switchBorder:
    props.switchBorder === true
      ? "none"
      : `1px solid ${neutralColor.neutral300}`,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  width: 312px;
  height: 41px;
  border-radius: 120px;
  padding: 12px 24px;
  color: ${(props) => props.switchColor};
  background: ${(props) => props.switchBackground};
  font-weight: ${(props) => props.switchFontWeight};
  border: ${(props) => props.switchBorder};
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;

export {
  Button,
  MakeNewTransaction,
  ComeBackToSiteButton,
  CloseSessionButton,
  KeepSessionActiveButton,
  ConfigButton,
};
