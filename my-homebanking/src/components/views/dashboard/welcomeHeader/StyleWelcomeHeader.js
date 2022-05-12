import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { HeadingSemiBold5 } from "../../../../theme/heading/heading";
import { ParagraphMedium2 } from "../../../../theme/paragraph/paragraph";

export const WelcomeUserTexs = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 48px 0 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WelcomeUserContainer = styled.div`
  background-color: ${neutralColor.neutral700};
  width: 100%;
  height: 216px;

  ${HeadingSemiBold5} {
    margin: 0;
    color: #ffffff;
    font-weight: 600;
  }

  ${ParagraphMedium2} {
    color: #ffffff;
    margin: 0;
  }

  @media screen and (min-width: 744px) {
    height: 328px;

    ${HeadingSemiBold5} {
      font-size: 24px;
      letter-spacing: -0.01em;
    }

    ${ParagraphMedium2} {
      font-size: 18px;
      line-height: 22px;
    }

    ${WelcomeUserTexs} {
      padding-top: 80px;
      width: 560px;
    }
  }

  @media screen and (min-width: 1512px) {
    height: 460px;

    ${HeadingSemiBold5} {
      font-size: 30px;
      line-height: 120%;
    }

    ${ParagraphMedium2} {
      font-size: 20px;
      line-height: 28px;
    }

    ${WelcomeUserTexs} {
      padding-top: 250px;
      width: 1060px;
    }
  }
`;
