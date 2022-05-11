import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { primaryColor } from "../../../theme/colors/colors";

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ActiveExtraText = styled.span`
  display: none;
`;

const SendIcon = styled(FontAwesomeIcon)`
  font-weight: 13.33px;
  color: #fff;
`;

const SendButtonContainer = styled.button`
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${primaryColor.primary50};
  color: ${primaryColor.primary900};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  border: 1px solid ${primaryColor.primary300};
  cursor: pointer;
  margin-top: 33px;
  padding: 0;

  @media screen and (min-width: 740px) {
    ${ActiveExtraText} {
      display: inline-block;
    }
  }
`;

const BackgroundSendIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 0 12px 0 20px;
  border-radius: 100%;
  background: linear-gradient(216.25deg, #60ebd0 4.63%, #0fb398 87.8%);
`;

export {
  BackgroundSendIcon,
  SendIcon,
  SendButtonContainer,
  IconTextContainer,
  ActiveExtraText,
};
