import styled from "styled-components";

import {
  errorColor,
  primaryColor,
  neutralColor,
} from "../../../theme/colors/colors";
import { HeadingMedium4 } from "../../../theme/heading/heading";
import {
  ParagraphMedium3,
  ParagraphUnderline3,
} from "../../../theme/paragraph/paragraph";
import { shadownXL } from "../../../theme/shadown/shadown";

export const LoginViewStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .formulario {
    box-sizing: border-box;
    width: 437px; //definir tama;os para mobile , tablet , pc
    height: 553px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: ${shadownXL};
    background: #ffffff;
    border-radius: 20px;
    padding: 60px 48px 56px;
    img {
      width: 50px;
      height: 50px;
      margin: 0 auto;
    }
    ${HeadingMedium4} {
      margin: 0 0 56px 0;
    }
    ${ParagraphMedium3} {
      text-align: left;
      margin: 0;
    }

    .containerEmail {
      margin-bottom: 16px;
    }

    input {
      width: 100%;
      height: 54px;
      box-sizing: border-box;
      margin: 4px 0;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid #c3c9d6;
      font-size: 16px;
      line-height: 24px;
    }

    input:focus {
      border: 2px solid ${primaryColor.primary500};
      outline: 3px solid ${primaryColor.primary200};
      box-shadow: 0px 18px 56px -2px rgba(16, 71, 62, 0.13);
    }

    .error {
      &:focus {
        outline: 3px solid ${errorColor.error500};
      }
    }
    .containerPassword {
      position: relative;
      margin-bottom: 16px;
    }

    .inputPassword {
      padding: 0 16px;
      font-size: 17px;
      line-height: 24px;
    }

    .iconEye {
      position: absolute;
      color: ${neutralColor.neutral800};
      font-size: 18px;
      right: 16px;
      top: 50%;
      cursor: pointer;
    }

    ${ParagraphUnderline3} {
      color: ${primaryColor.primary500};
      text-align: right;
      margin: 16px 0;
    }

    span {
      display: block;
      width: 100%;
      text-align: left;
      color: ${errorColor.error500};
    }

    .disable {
      background-color: ${neutralColor.neutral200};
      color: ${neutralColor.neutral500};
      cursor: no-drop;
    }
  }
`;
