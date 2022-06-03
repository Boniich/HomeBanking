import { useContext, useEffect, useState } from "react";
import AccountContext from "../../../../../context/accountContext/AccountContext";
import { handleCurrency } from "../../../../../context/accountContext/handleCurrency/handleCurrency";
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

const TransferenceCardView = ({
  amount,
  motive,
  date,
  destiny,
  baseIso,
  objectiveIso,
}) => {
  const [amountStatus, setAmountStatus] = useState({
    sameCci: false,
    Symbol: "",
  });

  const [currency, setCurrency] = useState({
    currencyText: "",
    currencySymbol: "",
  });

  const { cci } = useContext(AccountContext);
  const originCurrencySymbol = handleCurrency(baseIso);
  const destinyCurrencySymbol = handleCurrency(objectiveIso);
  useEffect(() => {
    if (cci === destiny) {
      setAmountStatus({ sameCci: true, Symbol: "+" });
      setCurrency({
        currencyText: destinyCurrencySymbol.currencyText,
        currencySymbol: destinyCurrencySymbol.currencySymbol,
      });
    } else {
      setAmountStatus({ Symbol: "-" });
      setCurrency({
        currencyText: originCurrencySymbol.currencyText,
        currencySymbol: originCurrencySymbol.currencySymbol,
      });
    }
  }, []);

  return (
    <Transf>
      <FigureTransf>
        <TransfInfo>
          <ParagraphSemibold2>{motive}</ParagraphSemibold2>
          <ParagraphMedium3>{date}</ParagraphMedium3>
        </TransfInfo>
        <TransferenceAmount amountColor={amountStatus.sameCci && true}>
          {amountStatus.Symbol}
          {currency.currencySymbol}
          {amount}
        </TransferenceAmount>
      </FigureTransf>
      <div>
        <Divider />
      </div>
    </Transf>
  );
};

export default TransferenceCardView;
