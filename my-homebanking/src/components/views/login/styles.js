import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Button } from "../../../theme/buttons/buttons";
import { Caption } from "../../../theme/caption/caption";

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

const LoginSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

const EmailContainer = styled.div`
  margin-bottom: 24px;
`;

const PasswordContainer = styled.div`
  margin-bottom: 16px;
`;

const InputIconContainer = styled.div`
  position: relative;
`;

const IconEye = styled(FontAwesomeIcon)`
  position: absolute;
  right: 16px;
  top: 35%;
  color: ${neutralColor.neutral800};
  font-size: 18px;
  z-index: 1000;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 54px;
  box-sizing: border-box;
  padding: 0 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.nonoBorder === true ? "none" : "1px solid #c3c9d6"};
  outline: ${(props) =>
    props.nonoBorder === true ? `2px solid ${errorColor.error500}` : "none"};
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border: ${(props) =>
      props.nonoBorder === true
        ? "none"
        : `2px solid ${primaryColor.primary500}`};
    outline: ${(props) =>
      props.nonoBorder === true
        ? `2px solid ${errorColor.error500}`
        : `3px solid ${primaryColor.primary200}`};
    box-shadow: ${(props) =>
      props.nonoBorder === true
        ? "none"
        : `0px 18px 56px -2px rgba(16, 71, 62, 0.13)`};
  }
`;

const ShowLoginErros = styled.span`
  padding: 4px 0 0 4px;
  color: ${errorColor.error500};
  font-size: 12px;
  line-height: 18px;
`;

const Box = styled.div`
  box-sizing: border-box;
  width: 360px;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #ffffff;
  border-radius: 20px;
  padding: 60px 24px 56px;

  ${Button} {
    width: 312px;
  }

  ${HeadingMedium4} {
    margin: 8px 0 40px 0;
    text-align: center;
  }
  ${ParagraphMedium3} {
    text-align: left;
    margin: 0;
    padding: 0 0 8px 4px;
  }

  .inputPassword {
    padding: 0 16px;
    font-size: 17px;
    line-height: 24px;
  }

  ${ParagraphUnderline3} {
    color: ${primaryColor.primary500};
    text-align: right;
    margin: 16px 0 32px;
    padding: 0;
  }

  ${Caption} {
    display: block;
    width: 100%;
    text-align: left;
    color: ${errorColor.error500};
    padding: 4px 0 0 4px;
  }

  .disable {
    background-color: ${neutralColor.neutral200};
    color: ${neutralColor.neutral500};
    cursor: no-drop;
  }

  @media screen and (min-width: 744px) {
    width: 437px;
    height: 561px;
    box-shadow: ${shadownXL};
    padding: 60px 48px 56px;

    ${Button} {
      width: 341px;
    }

    ${HeadingMedium4} {
      margin: 8px 0 56px 0;
    }
  }
`;

export {
  Box,
  Img,
  LoginSection,
  EmailContainer,
  PasswordContainer,
  InputIconContainer,
  IconEye,
  Input,
  ShowLoginErros,
};
