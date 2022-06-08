import styled from "styled-components";
import { ParagraphSemibold3 } from "../../../theme/paragraph/paragraph";
import { CloseIcon } from "../../../theme/styledIcon/styledIcon";

const NotificationContainer = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ParagraphSemibold3} {
    color: ${(props) => props.paragraphColor};
    margin: 0;
    cursor: default;
  }

  @media screen and (min-width: 740px) {
    width: 420px;
  }
`;

const NotificationIconAndText = styled.span`
  display: flex;
  align-items: center;
  gap: 13.67px;
`;

const CloseIconNotification = styled(CloseIcon)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const InfoIconNotification = styled(CloseIconNotification)`
  width: 16.67px;
  height: 16.67px;
  color: ${(props) => props.color};
  cursor: default;
`;

export {
  NotificationContainer,
  NotificationIconAndText,
  InfoIconNotification,
  CloseIconNotification,
};
