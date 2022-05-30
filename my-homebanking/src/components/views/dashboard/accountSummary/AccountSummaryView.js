import React, { useEffect, useState } from "react";
import { infoColor } from "../../../../theme/colors/colors";
import { HeadingSemiBold3 } from "../../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold3,
} from "../../../../theme/paragraph/paragraph";
import { CopyAccion } from "../../../common/copyAccion/CopyAccion";
import { Notification } from "../../../common/notification/Notification";
import { Popup } from "../../../common/popup/Popup";
import { SendButton } from "../../../common/sendButton/SendButton";
import {
  AccountSummary,
  AccountSummaryContent,
  NumberAccount,
  SavingType,
} from "./styleAccountSummary";
import { ChangeAccountCard } from "./changeAccount/ChangeAccountCard";
import axios from "axios";

export const AccountSummaryView = () => {
  const notificationText = "Número de cuenta copiado";
  const notificationColor = infoColor.info900;
  const ref = React.createRef();

  const [accountNumber, setAccountNumber] = useState();
  const [balance, setBalance] = useState("00.00");
  const [currency, setCurrency] = useState({
    currencyText: "",
    currencySymbol: "",
  });

  const email = localStorage.getItem("data");
  const token = localStorage.getItem("token");

  const handleCurrency = (currency) => {
    switch (currency) {
      case "USD":
        setCurrency({ currencyText: "Ahorro en dolares", currencySymbol: "$" });
        break;
      case "ARS":
        setCurrency({
          currencyText: "Ahorro en pesos Arg",
          currencySymbol: "$",
        });
        break;

      case "PEN":
        setCurrency({
          currencyText: "Ahorro en Soles",
          currencySymbol: "S/.",
        });
        break;

      default:
        setCurrency({
          currencyText: "Ahorro",
          currencySymbol: "$",
        });
        break;
    }
  };

  let url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FIND_ACCOUNT_ENDPOINT}`;
  const handleAccount = async () => {
    try {
      const response = await axios.post(
        url,
        {
          email: email,
        },
        {
          headers: {
            "stp-token": token,
          },
        }
      );

      console.log(response);
      setAccountNumber(response.data.accountNumber);
      setBalance(response.data.balance);
      const currency = response.data.currency;
      handleCurrency(currency);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAccount();
  }, []);

  return (
    <AccountSummary>
      <AccountSummaryContent>
        <SavingType>
          <ParagraphMedium3>{currency.currencyText}</ParagraphMedium3>
          <Popup
            action={
              <ParagraphSemibold3 ref={ref}>Cambiar cuenta</ParagraphSemibold3>
            }
            headerText="Cambiar Cuenta"
            height="auto"
          >
            <ChangeAccountCard
              typeSaving="Ahorro en Dolares"
              accountNumber="123456789"
            />
          </Popup>
        </SavingType>
        <HeadingSemiBold3>
          {currency.currencySymbol}
          {balance}
        </HeadingSemiBold3>
        <NumberAccount>
          <ParagraphMedium2>{accountNumber}</ParagraphMedium2>
          <CopyAccion
            numberAccount={accountNumber}
            notificationText={notificationText}
            notificationColor={notificationColor}
          />
          <Notification background="#F0F9FF" />
        </NumberAccount>
        <Popup
          action={<SendButton ref={ref} text="Enviar Dinero" />}
          headerText="Enviar Dinero"
        >
          <SendButton text="A otra cuenta" extraText="San Patrick" />
          <SendButton text="A cuenta propia" />
        </Popup>
      </AccountSummaryContent>
    </AccountSummary>
  );
};
