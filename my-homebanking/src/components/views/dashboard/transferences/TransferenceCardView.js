import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../theme/paragraph/paragraph";
import { Divider, FigureTransf, Transf, TransfInfo } from "./styleTransference";

const TransferenceCardView = ({ amount, motive, date }) => {
  return (
    <Transf>
      <FigureTransf>
        <TransfInfo>
          <ParagraphSemibold2>{motive}</ParagraphSemibold2>
          <ParagraphMedium3>{date}</ParagraphMedium3>
        </TransfInfo>
        <ParagraphSemibold2>{amount}</ParagraphSemibold2>
      </FigureTransf>
      <div>
        <Divider />
      </div>
    </Transf>
  );
};

export default TransferenceCardView;
