import styled from "styled-components";
import { neutralColor } from "../colors/colors";
const ParagraphMedium1 = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
  color: ${neutralColor.neutral900};
`;

const ParagraphSemibold1 = styled(ParagraphMedium1)`
  font-weight: 600;
`;

const ParagraphUnderline1 = styled(ParagraphMedium1)`
  text-decoration-line: underline;
`;

const ParagraphMedium2 = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  color: ${neutralColor.neutral900};
`;

const ParagraphSemibold2 = styled(ParagraphMedium2)`
  font-weight: 600;
`;

const ParagraphUnderline2 = styled(ParagraphMedium2)`
  text-decoration-line: underline;
`;

const ParagraphMedium3 = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  color: ${neutralColor.neutral900};
`;

const ParagraphSemibold3 = styled(ParagraphMedium3)`
  font-weight: 600;
`;
const ParagraphUnderline3 = styled(ParagraphMedium3)`
  text-decoration-line: underline;
`;

export {
  ParagraphMedium1,
  ParagraphSemibold1,
  ParagraphUnderline1,
  ParagraphMedium2,
  ParagraphSemibold2,
  ParagraphUnderline2,
  ParagraphMedium3,
  ParagraphSemibold3,
  ParagraphUnderline3,
};
