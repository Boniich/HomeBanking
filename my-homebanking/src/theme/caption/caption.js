import styled from "styled-components";
const Caption = styled.caption`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${neutralColor.neutral900};
`;

const CaptionSemiBold = styled(CaptionMedium)`
  font-weight: 600;
`;

const CaptionBold = styled(CaptionMedium)`
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export { Caption, CaptionSemiBold, CaptionBold };
