import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { neutralColor } from "../../../../../theme/colors/colors";
import { ParagraphMedium2 } from "../../../../../theme/paragraph/paragraph";

const NonActivityMsgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${ParagraphMedium2} {
    margin: 0;
    text-align: center;
  }
`;

const NonActivityMsgContainer = styled.section`
  width: 215px;
  margin: 90px auto;
`;

const BackgroundActivityIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: ${neutralColor.neutral100};
  border-radius: 100%;
`;

const TransferenceIcon = styled(FontAwesomeIcon)`
  font-size: 32px;
  color: ${neutralColor.neutral700};
`;

export {
  TransferenceIcon,
  NonActivityMsgContainer,
  BackgroundActivityIcon,
  NonActivityMsgContent,
};
