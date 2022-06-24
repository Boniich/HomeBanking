import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { ButtonsContainer } from '../../../../../theme/buttons/buttonContainer/buttonContainer';
import {
	ComeBackToSiteButton,
	MakeNewTransaction,
} from '../../../../../theme/buttons/buttons';

export const TransferenceButtons = () => {
	const { removeModalFromOldTransference, resetSearchUser } =
		useContext(AccountContext);

	const resetAllValuesFromOldTransf = () => {
		removeModalFromOldTransference();
		resetSearchUser();
	};
	return (
		<ButtonsContainer gap='16px' flexDirection='column' tableWidth='none'>
			<Link to='/make_transference_to_another_user/enter_number_account'>
				<MakeNewTransaction
					onClick={resetAllValuesFromOldTransf}
					tablePadding='12px 16px'
					width='195px'
					heigth='41px'
					tableFontSize='14px'
					tableLineHeight='17px'
				>
					Nueva Transferencia
				</MakeNewTransaction>
			</Link>

			<Link to='/'>
				<ComeBackToSiteButton
					onClick={resetAllValuesFromOldTransf}
					tablePadding='12px 16px'
					width='195px'
					heigth='41px'
					tableFontSize='14px'
					tableLineHeight='17px'
				>
					Regresar al inicio
				</ComeBackToSiteButton>
			</Link>
		</ButtonsContainer>
	);
};
