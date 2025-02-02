import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { showNotification } from '../../components/common/notification/showNotification';
import { handleCurrency } from '../../services/commonFunctions/handleCurrency/handleCurrency';
import { successColor } from '../../theme/colors/colors';

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

	// bring transference
	const [tranferences, setTranferences] = useState(null);
	const [updateColorAmountAfterChangeAcc, setUpdateColorAmountAfterChangeAcc] =
		useState(false);

	// for reload in transference

	const [isReadyAllAcountsByUser, setIsReadyAllAcountsByUser] = useState(false);

	//

	const [processingChangeOfAcc, setProcessingChangeOfAcc] = useState(false);

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
	const [motive, setMotive] = useState('');
	const [isTheSameAccount, setIsTheSameAccount] = useState(false);

	// loader for search user
	const [searchUserLoader, setSearchUserLoader] = useState(false);
	// loader meanwhile at transference is in procress
	const [transferenceLoader, setTransferenceLoader] = useState(false);

	// success or faild of transference

	const [successTransference, setSuccesstransference] = useState(false);
	// const [failedTransference, setFailedTransference] = useState(false);

	const [updateDataAfterTransf, setUpdateDataAfterTransf] = useState(false);

	const [updateDataUserLoader, setUpdateDataUserLoader] = useState(false);
	const [successDataUserUpdate, setSuccessDataUserUpdate] = useState(false);

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
		setMotive('');
		setIsTheSameAccount(false);

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
	const updateDataUserURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_UPDATE_DATA_USER}`;

	const bringAllAccountByUser = async () => {
		setAllAccountsByUser([]);
		try {
			const response = await axios.post(
				allAccountByUserURL,
				{ email },
				headers
			);

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

				setAllAccountsByUser(allAccountsByUser => [...allAccountsByUser, obj]);
				setIsReadyAllAcountsByUser(true);
			}
		} catch (error) {}
	};

	useEffect(() => {
		bringAllAccountByUser();
	}, [successTransference]);

	const bringCurrentAccount = async accNumber => {
		setProcessingChangeOfAcc(true);
		try {
			const response = await axios.post(
				findAccountURL,
				{
					accountNumber: accNumber,
				},
				headers
			);
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
		} catch (error) {
		} finally {
			setProcessingChangeOfAcc(false);
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

			const userName = response.data.name;
			const lastName = response.data.surname;
			const image = response.data.img;
			const email = response.data.email;
			setName(userName);
			setLastName(lastName);
			setUserImage(image);
			setUserEmail(email);
		} catch (error) {}
	};

	useEffect(() => {
		dni !== null && bringDataUser();
	}, [dni, successDataUserUpdate]);

	const bringTransferenceByUser = async () => {
		setUpdateColorAmountAfterChangeAcc(false);
		try {
			const response = await axios.post(
				transferencesByUserURL,
				{
					cci,
				},
				headers
			);
			const startInTheLastTransf = response.data.reverse();
			setTranferences(startInTheLastTransf);
			setUpdateColorAmountAfterChangeAcc(true);
		} catch (error) {}
	};

	useEffect(() => {
		if (cci !== null) {
			bringTransferenceByUser();
		}
	}, [cci, updateDataAfterTransf]);

	// functions that bring the name of user for details transference

	// 1- call the account

	const [dniForDetailsTranf, setDniForDetailsTranf] = useState('');
	const [nameInDetailsTransf, setNameInDetailsTransf] = useState('');
	const [lastNameInDetailsTransf, setLastNameInDetailsTransf] = useState('');
	const [detailsTransfLoader, setDetailsTransfLoader] = useState(true);

	const resetNameInDetailsTransf = () => {
		setNameInDetailsTransf('');
		setLastNameInDetailsTransf('');
	};

	const bringAccountToDetailsTransf = async cciCode => {
		setDetailsTransfLoader(true);
		try {
			const response = await axios.post(
				findAccountURL,
				{
					cciCode,
				},
				headers
			);

			setDniForDetailsTranf(response.data.owner);
		} catch (error) {}
	};

	// 2- use the dni that was extract from the account reques to extract the name and last name

	const showUserNameInTransf = async () => {
		try {
			const response = await axios.post(
				dataUserURL,
				{
					dni: dniForDetailsTranf,
				},
				headers
			);

			const userName = response.data.name;
			const lastName = response.data.surname;
			setNameInDetailsTransf(userName);
			setLastNameInDetailsTransf(lastName);
		} catch (error) {
		} finally {
			setDniForDetailsTranf('');
			setDetailsTransfLoader(false);
		}
	};

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
			setSearchUserCci(response.data.cciCode);
			setSearchUserAccNumber(response.data.accountNumber);
			setSearchUserDni(response.data.owner);
		} catch (error) {
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
			const userName = response.data.name;
			const lastName = response.data.surname;
			const image = response.data.img;
			setMotive(`${userName} ${lastName}`);
			setSearchUserName(userName);
			setSearchLastUserName(lastName);
			setSearchUserImage(image);
			setSearchUserFound(true);
			setSearchUserLoader(false);
		} catch (error) {}
	};

	useEffect(() => {
		searchUserDni !== null && searchDataUser();
	}, [searchUserDni]);

	// bring own account to transfer in the selct

	const bringOwnAccountToTransfer = () => {
		setIsTheSameAccount(false);
		setMotive('A cuenta propia');

		if (allAccountsByUser.length > 1) {
			const account = allAccountsByUser.filter(
				el => el.accountNumber !== accNumber
			);
			setAnotherCurrencyAcc(account[0].currencyText);
			setSearchUserCci(account[0].cciCode);
			setSearchUserAccNumber(account[0].accountNumber);
			setSearchUserName(name);
			setSearchLastUserName(lastName);
		} else {
			setIsTheSameAccount(true);
		}
	};

	const changeOwnAccDestinyToTransf = (currencyText, accoNumber, cci) => {
		setAnotherCurrencyAcc(currencyText);
		setSearchUserCci(cci);
		setSearchUserAccNumber(accoNumber);
	};

	// transference

	const makeTransference = async amount => {
		setTransferenceLoader(true);
		try {
			await axios.put(
				makeTransferenceURL,
				{
					origin: cci,
					destiny: searchUserCci,
					motive,
					amount,
				},
				headers
			);
			setUpdateDataAfterTransf(!updateDataAfterTransf);
			setSuccesstransference(true);
		} catch (error) {
			if (error?.response.status === 500) {
				showNotification(
					'Error al transferir',
					'Ups! A ocurrido un error. Intentalo mas tarde',
					'#7C2D12',
					true
				);
			}
		} finally {
			setTransferenceLoader(false);
		}
	};

	// update data user

	const updateDataUser = async (name, surname, img) => {
		const successUpdateMsg = 'Los datos se han actualizado';
		const successtextColor = successColor.success900;
		setUpdateDataUserLoader(true);
		try {
			await axios.put(
				updateDataUserURL,
				{
					dni,
					name,
					surname,
					img,
				},
				headers
			);
			showNotification(successUpdateMsg, '', successtextColor);
			setSuccessDataUserUpdate(!successDataUserUpdate);
		} catch (error) {
		} finally {
			setUpdateDataUserLoader(false);
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
		updateDataUser,
		dniForDetailsTranf,
		bringAccountToDetailsTransf,
		updateDataUserLoader,
		nameInDetailsTransf,
		lastNameInDetailsTransf,
		showUserNameInTransf,
		resetNameInDetailsTransf,
		detailsTransfLoader,
		setIsTheSameAccount,
		updateColorAmountAfterChangeAcc,
		processingChangeOfAcc,
	};

	return (
		<AccountContext.Provider value={data}>{children}</AccountContext.Provider>
	);
};

export { AccountProvider };
export default AccountContext;
