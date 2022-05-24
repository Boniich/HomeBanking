import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { neutralColor, secondaryColor } from "../../../theme/colors/colors";
import { HeadingBold5 } from "../../../theme/heading/heading";
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
  BackgroundCloseSessionIcon,
  CloseSessionIcon,
};
