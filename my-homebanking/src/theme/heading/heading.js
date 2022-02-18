import styled from "styled-components";
import { neutralColor } from "./Colors";

// H1

const HeadingMedium1 = styled.h1`
  font-size: 48px;
  line-height: 120%;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: ${neutralColor.neutral900};
`;

const HeadingSemiBold1 = styled(HeadingMedium1)`
  font-weight: bold;
`;

const HeadingBold1 = styled(HeadingMedium1)`
  font-weight: 800;
`;

// H2 y sus modificaciones

const HeadingMedium2 = styled.h2`
  font-size: 36px;
  line-height: 120%;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: ${neutralColor.neutral900};
`;

const HeadingSemiBold2 = styled(HeadingMedium2)`
  font-weight: bold;
`;

const HeadingBold2 = styled(HeadingMedium2)`
  font-weight: 800;
`;

// H3 y sus modificaciones

const HeadingMedium3 = styled.h3`
  font-size: 30px;
  line-height: 120%;
  letter-spacing: -0.01em;
  font-weight: 600;
  color: ${neutralColor.neutral900};
`;

const HeadingSemiBold3 = styled(HeadingMedium3)`
  font-weight: bold;
`;

const HeadingBold3 = styled(HeadingMedium3)`
  font-weight: 800;
`;

// H4 y sus modificaciones

const HeadingMedium4 = styled.h4`
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.01em;
  font-weight: 600;
  color: ${neutralColor.neutral900};
`;

const HeadingSemiBold4 = styled(HeadingMedium4)`
  font-weight: bold;
`;

const HeadingBold4 = styled(HeadingMedium4)`
  font-weight: 800;
`;

// H5 y sus modificaciones

const HeadingMedium5 = styled.h5`
  font-size: 20px;
  line-height: 130%;
  font-weight: 600;
  color: ${neutralColor.neutral900};
`;

const HeadingSemiBold5 = styled(HeadingMedium5)`
  font-weight: bold;
`;

const HeadingBold5 = styled(HeadingMedium5)`
  font-weight: 800;
`;

// H6 y sus modificaciones

const HeadingMedium6 = styled.h6`
  font-size: 18px;
  line-height: 130%;
  font-weight: 600;
  color: ${neutralColor.neutral900};
`;

const HeadingSemiBold6 = styled(HeadingMedium6)`
  font-weight: bold;
`;

const HeadingBold6 = styled(HeadingMedium6)`
  font-weight: 800;
`;

// Subheading

const SubHeadingMedium = styled.h3`
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  color: ${neutralColor.neutral900};
`;

const SubHeadingSemiBold = styled(SubHeadingMedium)`
  font-weight: 600;
`;

const SubHeadingUnderline = styled(SubHeadingMedium)`
  text-decoration-line: underline;
`;

export {
  HeadingMedium1,
  HeadingSemiBold1,
  HeadingBold1,
  HeadingMedium2,
  HeadingSemiBold2,
  HeadingBold2,
  HeadingMedium3,
  HeadingSemiBold3,
  HeadingBold3,
  HeadingMedium4,
  HeadingSemiBold4,
  HeadingBold4,
  HeadingMedium5,
  HeadingSemiBold5,
  HeadingBold5,
  HeadingMedium6,
  HeadingSemiBold6,
  HeadingBold6,
  SubHeadingMedium,
  SubHeadingSemiBold,
  SubHeadingUnderline,
};
