import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Button } from "../../../theme/buttons/buttons";
import {
  neutralColor,
  primaryColor,
  secondaryColor,
} from "../../../theme/colors/colors";
import { HeadingBold5 } from "../../../theme/heading/heading";

const CloseSessionButton = styled(Button)`
  width: 178px;
  height: 47px;
  background: ${(props) => props.background || `${primaryColor.primary500}`};
  color: ${(props) => props.textColor || `#fff`};
  border: ${(props) => props.border || "none"};
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

  &:hover {
    color: ${(props) => props.textColorHover || "none"};
    background: ${(props) =>
      props.backgroundHover || `${primaryColor.primary400}`};
    border-color: ${(props) => props.borderHover};
  }

  &:focus {
    color: ${(props) => props.textColorFocus || "none"};
    background: ${(props) =>
      props.backgroundFocus || `${primaryColor.primary400}`};
    border-color: ${(props) => props.borderFocus};
  }
`;

const CloseSessionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 12px;

  @media screen and (min-width: 744px) {
    gap: 64px;
    margin-top: 33px;
  }

  @media screen and (min-width: 1512px) {
    margin-top: 80px;
  }
`;

const CloseSessionIconAndTexs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  ${HeadingBold5} {
    width: 251px;
    margin: 0;
    text-align: center;
    font-weight: 700;
    color: ${neutralColor.neutral800};
  }

  @media screen and (min-width: 744px) {
    gap: 32px;
    ${HeadingBold5} {
      width: 396px;
      font-size: 30px;
      line-height: 120%;
      letter-spacing: -0.01em;
      font-weight: 600;
    }
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

const BackgroundCloseSessionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background: ${secondaryColor.secondary200};
  border-radius: 120px;
`;

const CloseSessionIcon = styled(FontAwesomeIcon)`
  width: 32px;
  height: 32px;
  color: ${secondaryColor.secondary800};
`;

export {
  CloseSessionContent,
  CloseSessionIconAndTexs,
  CloseSeccionButtonsContainer,
  BackgroundCloseSessionIcon,
  CloseSessionIcon,
  CloseSessionButton,
};
