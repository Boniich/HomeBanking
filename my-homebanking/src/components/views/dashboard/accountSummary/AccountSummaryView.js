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

export const AccountSummaryView = () => {
  const numberAccount = 12458745893254;
  const notificationText = "Número de cuenta copiado";
  const notificationColor = infoColor.info900;
  const ref = React.createRef();

  return (
    <AccountSummary>
      <AccountSummaryContent>
        {/* el tipo de ahorro cambia segun lo seleccionado*/}
        <SavingType>
          <ParagraphMedium3>Ahorro dolares</ParagraphMedium3>
          <ParagraphSemibold3>Cambiar cuenta</ParagraphSemibold3>
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
          accion={<SendButton ref={ref} text="Enviar Dinero" />}
          headerText="Enviar Dinero"
        >
          <SendButton text="A otra cuenta" extraText="San Patrick" />
          <SendButton text="A cuenta propia" />
        </Popup>
      </AccountSummaryContent>
    </AccountSummary>
  );
};
