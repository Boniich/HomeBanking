import { useContext, useEffect, useState } from "react";
import AccountContext from "../../../../../context/accountContext/AccountContext";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../../theme/paragraph/paragraph";
import {
  Divider,
  FigureTransf,
  Transf,
  TransferenceAmount,
  TransfInfo,
} from "./styleTransferenceCardView";

const TransferenceCardView = ({ amount, motive, date, destiny }) => {
  const [tranfSymbol, setTranfSymbol] = useState({
    sameCci: false,
    Symbol: "",
  });
  const { cci } = useContext(AccountContext);
  useEffect(() => {
    if (cci === destiny) {
      setTranfSymbol({ sameCci: true, Symbol: "+" });
    } else {
      setTranfSymbol({ Symbol: "-" });
    }
  }, []);

  return (
    <Transf>
      <FigureTransf>
        <TransfInfo>
          <ParagraphSemibold2>{motive}</ParagraphSemibold2>
          <ParagraphMedium3>{date}</ParagraphMedium3>
        </TransfInfo>
        <TransferenceAmount amountColor={tranfSymbol.sameCci && true}>
          {tranfSymbol.Symbol}${amount}
        </TransferenceAmount>
      </FigureTransf>
      <div>
        <Divider />
      </div>
    </Transf>
  );
};

export default TransferenceCardView;
