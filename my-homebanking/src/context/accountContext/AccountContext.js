import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { handleCurrency } from "../../services/commonFunctions/handleCurrency/handleCurrency";
import { getAccountNumberFromStorage } from "../../services/commonFunctions/sessionStorageMethods/accountNumberMethods";

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
  const accNumber = getAccountNumberFromStorage();

  const allAccountByUser_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_ACCOUNTS_ENDPOINT}`;
  const findAccount_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FIND_ACCOUNT_ENDPOINT}`;
  const dataUser_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_FIND_ENDPOINT}`;
  const transferencesByUser_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_TRANSACTION_ACCOUNT_ENDPOINT}`;

  const bringAllAccountByUser = async () => {
    try {
      const response = await axios.post(allAccountByUser_URL,{
        email: email
      },{
        headers:{
          token: token
        }
      }
      );
      console.log("all accounts be user", response);

      // save account number of the first account of user
      if(!accNumber){
        const accountNumber = response.data[0].accountNumber;
        window.localStorage.setItem("accNumber",accountNumber);
      }


      for (let e = 0; e < response.data.length; e++) {
        const currencyObj = handleCurrency(response.data[e].currency);
        let obj = {
          id: response.data[e]._id,
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
      bringAllAccountByUser();
  },[]);

  const bringCurrentAccount = async (accNumber) => {
    
    try {
      const response = await axios.post(
        findAccount_URL,
        {
          accountNumber: accNumber
        },
        {
          headers: {
            token: token,
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
    (accNumber !== null) && bringCurrentAccount(accNumber);
  }, [accNumber]);


  
  const bringDataUser = async () => {
    try {
      const response = await axios.post(
        dataUser_URL,
        {
          dni: dni,
        },
        {
          headers: {
            token: token,
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


  useEffect(() => {
    (dni !== null) && bringDataUser();
  }, [dni]);

  const bringTransferenceByUser = async () => {
    try {
      const response = await axios.post(
        transferencesByUser_URL,
        {
          cci: cci,
        },
        {
          headers: {
            token: token,
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
      bringTransferenceByUser();
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
    bringCurrentAccount,
  };

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider };
export default AccountContext;
