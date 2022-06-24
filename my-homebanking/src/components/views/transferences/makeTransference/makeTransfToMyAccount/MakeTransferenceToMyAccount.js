import React, { useContext, useEffect } from 'react';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { DestinyAccountSelect } from '../../../../common/dropdown/destinyAccountSelect/DestinyAccountSelect';
import { TransferenceForm } from '../commonTransferenceComponents/TransferenceForm/TransferenceForm';

export const MakeTransferenceToMyAccount = () => {
	const shortNavText = 'A cuenta propia';
	const largeNavText = 'Transferencia a cuenta propia';

	const {bringOwnAccountToTransfer,isReadyAllAcountsByUser, searchUserAccNUmber, anotherCurrencyAcc} = useContext(AccountContext);

	useEffect(() =>{
		isReadyAllAcountsByUser && bringOwnAccountToTransfer(); 
		
	},[isReadyAllAcountsByUser])

	console.log(searchUserAccNUmber);

	return (
		<TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
			<DestinyAccountSelect accountNumber={searchUserAccNUmber} currency={anotherCurrencyAcc}/>
		</TransferenceForm>
	);
};
