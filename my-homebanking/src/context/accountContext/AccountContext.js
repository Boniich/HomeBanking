import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { showNotification } from '../../components/common/notification/showNotification';
import { handleCurrency } from '../../services/commonFunctions/handleCurrency/handleCurrency';

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
	const [accountNumber, setAccountNumber] = useState();
	const [balance, setBalance] = useState('00.00');
	const [userEmail, setUserEmail] = useState('');
	const [dni, setDni] = useState(null);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [cci, setCci] = useState(null);
	const [userImage, setUserImage] = useState(null);
	const [allAccountsByUser, setAllAccountsByUser] = useState([]);
	const [tranferences, setTranferences] = useState(null);

	// for reload in transference

	const [isReadyAllAcountsByUser, setIsReadyAllAcountsByUser] = useState(false);

	// search a user for make a transference

	// find acount endpoint
	const [searchUserFound, setSearchUserFound] = useState(false);
	const [searchUserNotFound, setSearchUserNotFound] = useState(false);
	const [searchUserCci, setSearchUserCci] = useState(null);
	const [searchUserAccNUmber, setSearchUserAccNumber] = useState('');
	const [searchUserDni, setSearchUserDni] = useState(null);

	// find user endpoint
	const [searchUserImage, setSearchUserImage] = useState('');
	const [searchUserName, setSearchUserName] = useState('');
	const [searchUserLastName, setSearchLastUserName] = useState('');

	// transfer to own accounts

	const [anotherCurrencyAcc, setAnotherCurrencyAcc] = useState('');
	const [isTheSameAccount, setIsTheSameAccount] = useState(false);

	// loader for search user
	const [searchUserLoader, setSearchUserLoader] = useState(false);
	// loader meanwhile at transference is in procress
	const [transferenceLoader, setTransferenceLoader] = useState(false);

	// success or faild of transference

	const [successTransference, setSuccesstransference] = useState(false);
	// const [failedTransference, setFailedTransference] = useState(false);

	const [updateDataAfterTransf, setUpdateDataAfterTransf] = useState(false);

	const [currency, setCurrency] = useState({
		currencyText: '',
		currencySymbol: '',
	});

	const email = sessionStorage.getItem('data');
	const token = sessionStorage.getItem('token');
	const accNumber = sessionStorage.getItem('accNumber');

	// header for requests

	const headers = {
		headers: {
			token,
		},
	};

	// functions that handle set states

	const resetSearchUser = () => {
		setSearchUserFound(false);
		setSearchUserNotFound(false);
		setSearchUserCci(null);
		setSearchUserAccNumber('');
		setSearchUserDni(null);

		setSearchUserImage('');
		setSearchUserName('');
		setSearchLastUserName('');
	};

	const removeModalFromOldTransference = () => setSuccesstransference(false);

	const allAccountByUserURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_ACCOUNTS_ENDPOINT}`;
	const findAccountURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FIND_ACCOUNT_ENDPOINT}`;
	const dataUserURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_FIND_ENDPOINT}`;
	const transferencesByUserURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_TRANSACTION_ACCOUNT_ENDPOINT}`;
	const makeTransferenceURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_MAKE_A_TRANSFERENCE}`;
	const bringAllAccountByUser = async () => {
		setAllAccountsByUser([]);
		try {
			const response = await axios.post(
				allAccountByUserURL,
				{ email },
				headers
			);
			console.log('all accounts be user', response);

			// save account number of the first account of user
			if (!accNumber) {
				const accountNumber = response.data[0].accountNumber;
				sessionStorage.setItem('accNumber', accountNumber);
			}

			for (let e = 0; e < response.data.length; e++) {
				const currencyObj = handleCurrency(response.data[e].currency);
				const obj = {
					id: response.data[e]._id,
					accountNumber: response.data[e].accountNumber,
					cciCode: response.data[e].cciCode,
					balance: response.data[e].balance,
					currencyText: currencyObj.currencyText,
					currencySymbol: currencyObj.currencySymbol,
				};
				console.log(obj);
				setAllAccountsByUser(allAccountsByUser => [...allAccountsByUser, obj]);
				setIsReadyAllAcountsByUser(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		bringAllAccountByUser();
	}, [successTransference]);

	const bringCurrentAccount = async accNumber => {
		try {
			const response = await axios.post(
				findAccountURL,
				{
					accountNumber: accNumber,
				},
				headers
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
		accNumber !== null && bringCurrentAccount(accNumber);
	}, [accNumber, updateDataAfterTransf]);

	const bringDataUser = async () => {
		try {
			const response = await axios.post(
				dataUserURL,
				{
					dni,
				},
				headers
			);
			console.log('data user', response.data);
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
		dni !== null && bringDataUser();
	}, [dni]);

	const bringTransferenceByUser = async () => {
		try {
			const response = await axios.post(
				transferencesByUserURL,
				{
					cci,
				},
				headers
			);
			console.log('transations', response.data);
			setTranferences(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (cci !== null) {
			bringTransferenceByUser();
		}
	}, [cci, updateDataAfterTransf]);

	// search user for transference

	const searchAccountUser = async accNumber => {
		setIsTheSameAccount(false);
		setSearchUserLoader(true);
		try {
			const response = await axios.post(
				findAccountURL,
				{
					accountNumber: accNumber,
				},
				headers
			);

			console.log(response);
			setSearchUserCci(response.data.cciCode);
			setSearchUserAccNumber(response.data.accountNumber);
			setSearchUserDni(response.data.owner);
		} catch (error) {
			console.log(error);
			if (error?.response.status === 404) {
				setSearchUserNotFound(true);
				setSearchUserLoader(false);
			}
		}
	};

	const searchDataUser = async () => {
		try {
			const response = await axios.post(
				dataUserURL,
				{
					dni: searchUserDni,
				},
				headers
			);
			console.log('user searched', response.data);
			const userName = response.data.name;
			const lastName = response.data.surname;
			const image = response.data.img;
			setSearchUserName(userName);
			setSearchLastUserName(lastName);
			setSearchUserImage(image);
			setSearchUserFound(true);
			setSearchUserLoader(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		searchUserDni !== null && searchDataUser();
	}, [searchUserDni]);

	// bring own account to transfer

	const bringOwnAccountToTransfer = () => {
		setIsTheSameAccount(false);

		if (allAccountsByUser.length > 1) {
			// crash si se si tiene una sola cuenta
			//  el useffect se ejecuta dos veces, generando un crash
			// al no encontrar el currencyText
			// esto NO deberia pasar en produccion
			const account = allAccountsByUser.filter(
				el => el.accountNumber !== accNumber
			);
			console.log('account for destiny select: ', account);
			setAnotherCurrencyAcc(account[0].currencyText);
			setSearchUserCci(account[0].cciCode);
			setSearchUserAccNumber(account[0].accountNumber);
		} else {
			console.log('entra');
			const ownCurrency = currency.currencyText;
			setAnotherCurrencyAcc(ownCurrency);
			setSearchUserAccNumber(accNumber);
			setIsTheSameAccount(true);
		}
	};

	const changeOwnAccDestinyToTransf = (currencyText, accoNumber, cci) => {
		setAnotherCurrencyAcc(currencyText);
		setSearchUserCci(cci);
		setSearchUserAccNumber(accoNumber);
	};

	// transference

	const makeTransference = async (motive, amount) => {
		setTransferenceLoader(true);
		try {
			const response = await axios.put(
				makeTransferenceURL,
				{
					origin: cci,
					destiny: searchUserCci,
					motive,
					amount,
				},
				headers
			);
			console.log('make transference', response);
			setUpdateDataAfterTransf(!updateDataAfterTransf);
			setSuccesstransference(true);
		} catch (error) {
			console.log(error);
			if (error?.response.status === 500) {
				showNotification("Error al transferir","Ups! A ocurrido un error. Intentalo mas tarde", "#7C2D12", true)
			}
		} finally {
			setTransferenceLoader(false);
		}
	};
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
		bringOwnAccountToTransfer,
		anotherCurrencyAcc,
		isReadyAllAcountsByUser,
		isTheSameAccount,
		changeOwnAccDestinyToTransf,
	};

	return (
		<AccountContext.Provider value={data}>{children}</AccountContext.Provider>
	);
};

export { AccountProvider };
export default AccountContext;
