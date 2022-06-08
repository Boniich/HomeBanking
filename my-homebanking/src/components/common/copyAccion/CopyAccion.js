import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CopyToClipboard from "react-copy-to-clipboard";
import { CopyButton } from "../../views/dashboard/accountSummary/styleAccountSummary";
import { showNotification } from "../notification/showNotification";

export const CopyAccion = ({
  numberAccount,
  notificationText,
  notificationColor,
}) => {
  return (
    <>
      <CopyToClipboard text={numberAccount}>
        <CopyButton
          icon={faCopy}
          onClick={() => showNotification(notificationText, notificationColor)}
        />
      </CopyToClipboard>
    </>
  );
};
