import React, { useContext, useEffect } from 'react';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { DestinyAccountSelect } from '../../../../common/dropdown/destinyAccountSelect/DestinyAccountSelect';
import { TransferenceForm } from '../commonTransferenceComponents/TransferenceForm/TransferenceForm';

export const MakeTransferenceToMyAccount = () => {
	const shortNavText = 'A cuenta propia';
	const largeNavText = 'Transferencia a cuenta propia';
	const accNumber = sessionStorage.getItem('accNumber');

	const {
		bringOwnAccountToTransfer,
		allAccountsByUser,
		isReadyAllAcountsByUser,
		searchUserAccNUmber,
		anotherCurrencyAcc,
		changeOwnAccDestinyToTransf,
	} = useContext(AccountContext);

	useEffect(() => {
		isReadyAllAcountsByUser && bringOwnAccountToTransfer();
	}, [isReadyAllAcountsByUser, accNumber]);

	console.log(searchUserAccNUmber);

	return (
		<TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
			<DestinyAccountSelect
				accountNumber={searchUserAccNUmber}
				currency={anotherCurrencyAcc}
				allAccountsByUser={allAccountsByUser}
				changeDestiny={changeOwnAccDestinyToTransf}
			/>
		</TransferenceForm>
	);
};
