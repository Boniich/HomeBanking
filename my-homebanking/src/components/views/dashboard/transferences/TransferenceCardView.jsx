import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../theme/paragraph/paragraph";
import { Divider, FigureTransf, Transf, TransfInfo } from "../styleDashBoard";

const TransferenceCardView = () => {
  return (
    <Transf>
      <FigureTransf>
        <TransfInfo>
          <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
          <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
        </TransfInfo>
        <ParagraphSemibold2>-50</ParagraphSemibold2>
      </FigureTransf>
      <div>
        <Divider />
      </div>
    </Transf>
  );
};

export default TransferenceCardView;
