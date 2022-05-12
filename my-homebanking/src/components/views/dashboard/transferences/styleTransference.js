import styled from "styled-components";
import { neutralColor, primaryColor } from "../../../../theme/colors/colors";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold2,
  ParagraphUnderline2,
} from "../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../theme/shadown/shadown";

//contendor actividad

const ActivityContainer = styled.div`
  width: 312px;
  margin: 0 auto;
  margin-bottom: 100px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: ${shadownXS};
  @media screen and (min-width: 744px) {
    width: 544px;
    box-shadow: ${shadownMD};
  }

  @media screen and (min-width: 1512px) {
    width: 595px;
  }
`;

const ActivityContainer2 = styled.div`
  padding: 24px 24px 40px;
  ${ParagraphMedium2} {
    margin: 0;
  }

  @media screen and (min-width: 744px) {
    padding: 32px 32px 40px;
  }
`;

// Cards

// contenedor Cards

const CardTransfContainer = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
`;

const FigureTransf = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const TransfInfo = styled.div`
  ${ParagraphSemibold2} {
    margin-bottom: 4px;
  }
  ${ParagraphMedium3} {
    margin: 0;
  }
`;

const Transf = styled.div``;

const Divider = styled.hr`
  margin: 0;
  padding: 0;
  background-color: ${neutralColor.neutral200};
`;

const AllActivityBox = styled.div`
  margin-top: 32px;

  ${ParagraphUnderline2} {
    color: ${primaryColor.primary600};
    font-weight: 400;
  }
`;

export {
  ActivityContainer,
  ActivityContainer2,
  CardTransfContainer,
  FigureTransf,
  TransfInfo,
  Divider,
  Transf,
  AllActivityBox,
};
