import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { handleCurrency } from "./handleCurrency/handleCurrency";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
  const [accountNumber, setAccountNumber] = useState();
  const [balance, setBalance] = useState("00.00");
  const [userEmail, setUserEmail] = useState("");
  const [dni, setDni] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cci, setCci] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [allAccountsByUser, setAllAccountsByUser] = useState([]);
  const [tranferences, setTranferences] = useState(null);

  const [currency, setCurrency] = useState({
    currencyText: "",
    currencySymbol: "",
  });

  const email = localStorage.getItem("data");
  const token = localStorage.getItem("token");

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
      console.log(dni);
      setUserEmail(response.data.email);
      setCci(response.data.cciCode);
      const currency = response.data.currency;
      const currencyData = handleCurrency(currency);
      setCurrency({
        currencyText: currencyData.currencyText,
        currencySymbol: currencyData.currencySymbol,
      });
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
      console.log("data user", response.data);
      const userName = response.data.name;
      const lastName = response.data.surname;
      const image = response.data.img;
      setName(userName);
      setLastName(lastName);
      setUserImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  // all accounts by the same user

  let allAccountBeUserURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_ACCOUNTS_ENDPOINT}`;

  const bringAllAccountByUser = async () => {
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

      for (let e = 0; e < response.data.length; e++) {
        const currencyObj = handleCurrency(response.data[e].currency);
        let obj = {
          id: response.data[e]._id,
          email: response.data[e].email,
          accountNumber: response.data[e].accountNumber,
          currencyText: currencyObj.currencyText,
        };
        console.log(obj);
        setAllAccountsByUser((allAccountsByUser) => [
          ...allAccountsByUser,
          obj,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dni !== null) {
      renderDataUser();
      bringAllAccountByUser();
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
    userEmail,
    lastName,
    cci,
    tranferences,
    userImage,
    allAccountsByUser,
  };

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider };
export default AccountContext;
