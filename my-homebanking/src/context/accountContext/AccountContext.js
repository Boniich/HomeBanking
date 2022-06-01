import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [accountNumber, setAccountNumber] = useState();
  const [balance, setBalance] = useState("00.00");
  const [dni, setDni] = useState(null);
  const [name, setName] = useState();
  const [cci, setCci] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [allAccountsBeUser, setAllAccountsBeUser] = useState(null);
  const [tranferences, setTranferences] = useState(null);

  const [currency, setCurrency] = useState({
    currencyText: "",
    currencySymbol: "",
  });

  const email = localStorage.getItem("data");
  const token = localStorage.getItem("token");

  const handleCurrency = (currency) => {
    let CurrencyType = {
      currencyText: "",
      currencySymbol: "",
    };
    switch (currency) {
      case "USD":
        CurrencyType.currencyText = "Ahorro en dolares";
        CurrencyType.currencySymbol = "$";
        return CurrencyType;
      case "ARS":
        CurrencyType.currencyText = "Ahorro en pesos Arg";
        CurrencyType.currencySymbol = "$";
        return CurrencyType;

      case "PEN":
        CurrencyType.currencyText = "Ahorro en Soles";
        CurrencyType.currencySymbol = "S/";
        return CurrencyType;

      default:
        CurrencyType.currencyText = "Ahorro";
        CurrencyType.currencySymbol = "$";
        return CurrencyType;
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
      setDni(response.data.owner);
      setCci(response.data.cciCode);
      const currency = response.data.currency;
      const currencyData = handleCurrency(currency);
      setCurrency({
        currencyText: currencyData.currencyText,
        currencySymbol: currencyData.currencySymbol,
      });
      console.log("currency procesada", currencyData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAccount();
  }, []);

  let dataUserUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_FIND_ENDPOINT}`;
  const renderDataUser = async () => {
    try {
      const response = await axios.post(
        dataUserUrl,
        {
          dni: dni,
        },
        {
          headers: {
            "stp-token": token,
          },
        }
      );
      console.log("data user", response.data[0]);
      const userName = response.data[0].name;
      const image = response.data[0].img;
      setName(userName);
      setUserImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  // all accounts by the same user

  let allAccountBeUserURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_ACCOUNTS_ENDPOINT}`;

  const bringAllAccountBeUser = async () => {
    try {
      const response = await axios.post(
        allAccountBeUserURL,
        {
          dni: dni,
        },
        {
          headers: {
            "stp-token": token,
          },
        }
      );
      console.log("all accounts be user", response.data);
      setAllAccountsBeUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dni !== null) {
      renderDataUser();
      bringAllAccountBeUser();
    }
  }, [dni]);

  let cciCodeUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_TRANSACTION_ACCOUNT_ENDPOINT}`;

  const bringTransations = async () => {
    try {
      const response = await axios.post(
        cciCodeUrl,
        {
          cci: cci,
        },
        {
          headers: {
            "stp-token": token,
          },
        }
      );
      console.log("transations", response.data);
      setTranferences(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cci !== null) {
      bringTransations();
    }
  }, [cci]);

  const data = {
    accountNumber,
    balance,
    currency,
    name,
    tranferences,
    userImage,
    allAccountsBeUser,
  };

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider };
export default AccountContext;
