import React from 'react';
import { TransferenceForm } from '../commonTransferenceComponents/TransferenceForm/TransferenceForm';

export const MakeTransferenceToMyAccount = () => {
	const shortNavText = 'A cuenta propia';
	const largeNavText = 'Transferencia a cuenta propia';
	return (
		<TransferenceForm shortNavText={shortNavText} largeNavText={largeNavText}>
			{/* select especial que contiene las cuentas del usuario */}
		</TransferenceForm>
	);
};
