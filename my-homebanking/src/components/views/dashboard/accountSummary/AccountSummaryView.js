import { faCircleInfo, faCopy, faX } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import {
  HeadingSemiBold3,
  HeadingSemiBold5,
} from "../../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold3,
} from "../../../../theme/paragraph/paragraph";
import { CloseButton } from "../../../common/closeButton/CloseButton";
import { SendButton } from "../../../common/sendButton/SendButton";
import {
  AccountSummary,
  AccountSummaryContent,
  CloseIconNotify,
  CopyButton,
  InfoIconNotify,
  Notify,
  NumberAccount,
  PopupContainer,
  PopupContent,
  PopupHeadContent,
  SavingType,
  StyledPopup,
} from "./styleAccountSummary";

export const AccountSummaryView = () => {
  const numberAccount = 12458745893254;
  const showAlert = () => {
    toast.dismiss();
    toast(
      (t) => (
        <Notify>
          <InfoIconNotify icon={faCircleInfo} />
          <ParagraphSemibold3>Número de cuenta copiado</ParagraphSemibold3>
          <CloseIconNotify icon={faX} onClick={() => toast.dismiss(t.id)} />
        </Notify>
      ),
      {
        style: {
          minWidth: "200px",
          maxWidth: "100%",
        },
      },
      {
        duration: 2000,
      }
    );
  };

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
          <CopyToClipboard text={numberAccount}>
            <CopyButton icon={faCopy} onClick={showAlert} />
          </CopyToClipboard>
          <Toaster
            position="bottom-center"
            containerStyle={{
              bottom: 75,
            }}
            toastOptions={{
              style: {
                border: "1px solid #BAE6FD",
                background: "#F0F9FF",
                padding: "12px 20px",
              },
            }}
          />
        </NumberAccount>
        <StyledPopup modal trigger={<SendButton text="Enviar Dinero" />}>
          {(close) => (
            <PopupContainer>
              <PopupContent>
                <PopupHeadContent>
                  <HeadingSemiBold5>Enviar Dinero</HeadingSemiBold5>
                  <CloseButton propOnClick={close} />
                </PopupHeadContent>
                <SendButton text="A otra cuenta" extraText="San Patrick" />
                <SendButton text="A cuenta propia" />
              </PopupContent>
            </PopupContainer>
          )}
        </StyledPopup>
      </AccountSummaryContent>
    </AccountSummary>
  );
};
