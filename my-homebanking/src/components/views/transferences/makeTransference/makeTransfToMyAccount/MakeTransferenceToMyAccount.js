import React, { useContext, useEffect } from 'react';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { ParagraphMedium2 } from '../../../../../theme/paragraph/paragraph';
import { DestinyAccountSelect } from '../../../../common/dropdown/destinyAccountSelect/DestinyAccountSelect';
import { TransferenceForm } from '../commonTransferenceComponents/TransferenceForm/TransferenceForm';
import { NotHaveOtherActiveAccMsg } from './styleMakeTransferenceToMyAccount';

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
		isTheSameAccount,
	} = useContext(AccountContext);

	useEffect(() => {
		isReadyAllAcountsByUser && bringOwnAccountToTransfer();
	}, [isReadyAllAcountsByUser, accNumber]);

	return (
		<TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
			{isTheSameAccount ? (
				<NotHaveOtherActiveAccMsg>
					<ParagraphMedium2>
						Para enviar dinero necesitas tener dos o mas cuentas activas
					</ParagraphMedium2>
				</NotHaveOtherActiveAccMsg>
			) : (
				<DestinyAccountSelect
					accountNumber={searchUserAccNUmber}
					currency={anotherCurrencyAcc}
					allAccountsByUser={allAccountsByUser}
					changeDestiny={changeOwnAccDestinyToTransf}
				/>
			)}
		</TransferenceForm>
	);
};
