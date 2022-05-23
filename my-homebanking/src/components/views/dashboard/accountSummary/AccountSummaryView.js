import React from "react";
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

export const AccountSummaryView = () => {
  const numberAccount = 12458745893254;
  const notificationText = "Número de cuenta copiado";
  const notificationColor = infoColor.info900;
  const ref = React.createRef();
  return (
    <AccountSummary>
      <AccountSummaryContent>
        <SavingType>
          <ParagraphMedium3>Ahorro dolares</ParagraphMedium3>
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
        <HeadingSemiBold3>$200.00</HeadingSemiBold3>
        <NumberAccount>
          <ParagraphMedium2>{numberAccount}</ParagraphMedium2>
          <CopyAccion
            numberAccount={numberAccount}
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
