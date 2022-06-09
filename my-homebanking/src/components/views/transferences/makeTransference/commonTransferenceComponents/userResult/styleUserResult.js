import styled from "styled-components";
import { neutralColor } from "../../../../../../theme/colors/colors";
import { ParagraphMedium3 } from "../../../../../../theme/paragraph/paragraph";
import { ArrowIcon } from "../../../../../../theme/styledIcon/styledIcon";

const UserResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  background: ${neutralColor.neutral50};
  border: 1px solid ${neutralColor.neutral300};
  border-radius: 8px;
`;

const UserImage = styled.img`
  width: 36px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 100%;
`;

const DataUser = styled.div`
  width: 156px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ArrowIconOfUserResult = styled(ArrowIcon)`
  color: ${neutralColor.neutral700};
`;

export { UserResultContainer, UserImage, DataUser, ArrowIconOfUserResult };
