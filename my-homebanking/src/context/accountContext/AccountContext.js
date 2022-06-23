import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { handleCurrency } from "../../services/commonFunctions/handleCurrency/handleCurrency";

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

  // search a user for make a transference

  // find acount endpoint
  const [searchUserFound, setSearchUserFound] = useState(false);
  const [searchUserNotFound, setSearchUserNotFound] = useState(false);
  const [searchUserCci, setSearchUserCci] = useState(null);
  const [searchUserAccNUmber, setSearchUserAccNumber] = useState("");
  const [searchUserDni, setSearchUserDni] = useState(null);
  // find user endpoint
  const [searchUserImage, setSearchUserImage] = useState("");
  const [searchUserName, setSearchUserName] = useState("");
  const [searchUserLastName, setSearchLastUserName] = useState("");
  // loader for search user
  const [searchUserLoader, setSearchUserLoader] = useState(false);
  // loader meanwhile at transference is in procress
  const [transferenceLoader, setTransferenceLoader] = useState(false);

  // success or faild of transference 

  const [successTransference, setSuccesstransference] = useState(false);
  const [failedTransference, setFailedTransference] = useState(false);



  const [currency, setCurrency] = useState({
    currencyText: "",
    currencySymbol: "",
  });

  const email = sessionStorage.getItem("data")
  const token = sessionStorage.getItem("token");
  const accNumber = sessionStorage.getItem("accNumber");

  // functions that handle set states

  const resetSearchUser = () =>{
    setSearchUserFound(false);
    setSearchUserNotFound(false);
    setSearchUserCci(null);
    setSearchUserAccNumber("");
    setSearchUserDni(null);

    setSearchUserImage("");
    setSearchUserName("");
    setSearchLastUserName("");
  }

  const removeModalFromOldTransference = () => setSuccesstransference(false);

  const allAccountByUser_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_ACCOUNTS_ENDPOINT}`;
  const findAccount_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FIND_ACCOUNT_ENDPOINT}`;
  const dataUser_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_FIND_ENDPOINT}`;
  const transferencesByUser_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_TRANSACTION_ACCOUNT_ENDPOINT}`;
  const makeTransference_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_MAKE_A_TRANSFERENCE}`;
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
        sessionStorage.setItem("accNumber",accountNumber);
      }


      for (let e = 0; e < response.data.length; e++) {
        const currencyObj = handleCurrency(response.data[e].currency);
        let obj = {
          id: response.data[e]._id,
          accountNumber: response.data[e].accountNumber,
          balance: response.data[e].balance,
          currencyText: currencyObj.currencyText,
          currencySymbol: currencyObj.currencySymbol,
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


  // search user for transference

  const searchAccountUser = async (accNumber) => {
    setSearchUserLoader(true);
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
      setSearchUserCci(response.data.cciCode);
      setSearchUserAccNumber(response.data.accountNumber);
      setSearchUserDni(response.data.owner);
    } catch (error) {
      console.log(error);
      if(error?.response.status === 404){
        setSearchUserNotFound(true);
        setSearchUserLoader(false);
      }
    } 
  };

  const searchDataUser = async () => {
    try {
      const response = await axios.post(
        dataUser_URL,
        {
          dni: searchUserDni,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log("user searched", response.data);
      const userName = response.data.name;
      const lastName = response.data.surname;
      const image = response.data.img;
      setSearchUserName(userName)
      setSearchLastUserName(lastName)
      setSearchUserImage(image);
      setSearchUserFound(true);
      setSearchUserLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    (searchUserDni !== null) && searchDataUser();
  },[searchUserDni]);


  // transference

  const makeTransference = async (motive, amount) =>{
    setTransferenceLoader(true);
    try{
      const response = await axios.put(makeTransference_URL,{
        origin: cci,
        destiny: searchUserCci,
        motive: motive,
        amount: amount,
      },{
        headers: {
          token: token,
        },
      });
      console.log("make transference", response);
      setSuccesstransference(true);
    }catch(error){
      console.log(error);
    } finally{
      setTransferenceLoader(false);
    }
  }
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
    searchAccountUser,
    searchUserAccNUmber,
    searchUserName,
    searchUserLastName,
    searchUserImage,
    searchUserLoader,
    searchUserFound,
    searchUserNotFound,
    makeTransference,
    transferenceLoader,
    resetSearchUser,
    successTransference,
    removeModalFromOldTransference,
  };

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  );
};

export { AccountProvider };
export default AccountContext;
