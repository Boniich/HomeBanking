import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
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

  const data = {
    accountNumber,
    balance,
    currency,
  };

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider };
export default AccountContext;
