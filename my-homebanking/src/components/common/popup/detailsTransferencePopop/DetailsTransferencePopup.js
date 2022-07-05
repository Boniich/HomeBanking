import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../../../../context/accountContext/AccountContext';
import { transformDateToHumanDate } from '../../../../services/commonFunctions/getDate/getDate';
import { handleCurrency } from '../../../../services/commonFunctions/handleCurrency/handleCurrency';
import {
	ParagraphMedium2,
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../theme/paragraph/paragraph';
import { CircleLoader } from '../../circleLoader/CircleLoader';
import {
	DataTransferenceGroup,
	DataTransferenceSubGroup,
	TransferenceDetailContainer,
} from './styleDetailsTransferencePopup';

export const DetailsTransferencePopup = ({ transference }) => {
	const [transfereceData, setTransferenceData] = useState({
		disableOriginAccount: false,
		transferenceTypeString: 'Cuenta de cargo',
		moneyString: 'Dinero Enviado',
	});
	const [currency, setCurrency] = useState({
		currencyText: '',
		currencySymbol: '',
	});
	const originCurrencySymbol = handleCurrency(
		transference.exchangeInfo.baseIso
	);

	const destinyCurrencySymbol = handleCurrency(transference.objectiveIso);
	const {
		cci,
		dniForDetailsTranf,
		bringAccountToDetailsTransf,
		nameInDetailsTransf,
		lastNameInDetailsTransf,
		showUserNameInTransf,
		resetNameInDetailsTransf,
		detailsTransfLoader,
	} = useContext(AccountContext);
	const originCciCode = transference.origin;
	const destinyCciCode = transference.destiny;

	useEffect(() => {
		if (cci === transference.destiny) {
			// we show that user that send the money
			bringAccountToDetailsTransf(originCciCode);
		} else {
			bringAccountToDetailsTransf(destinyCciCode);
		}
	}, []);

	useEffect(() => {
		if (dniForDetailsTranf !== '') {
			resetNameInDetailsTransf();
			if (cci === transference.destiny) {
				showUserNameInTransf();
			} else {
				showUserNameInTransf();
			}
		}
	}, [dniForDetailsTranf]);

	useEffect(() => {
		if (transference.destiny === cci) {
			setTransferenceData({
				disableOriginAccount: true,
				transferenceTypeString: 'Enviado por',
				moneyString: 'Dinero recibido',
			});
			setCurrency({
				currencySymbol: destinyCurrencySymbol.currencySymbol,
			});
		} else {
			setCurrency({
				currencyText: originCurrencySymbol.currencyText,
				currencySymbol: originCurrencySymbol.currencySymbol,
			});
		}
	}, []);

	return (
		<>
			{detailsTransfLoader ? (
				<CircleLoader />
			) : (
				<TransferenceDetailContainer>
					<DataTransferenceGroup>
						<ParagraphMedium3>Fecha</ParagraphMedium3>
						<ParagraphMedium2>
							{transformDateToHumanDate(transference.date)}
						</ParagraphMedium2>
					</DataTransferenceGroup>

					<DataTransferenceGroup>
						<ParagraphMedium3>Codigo de transferencia</ParagraphMedium3>
						<ParagraphMedium2>{transference._id}</ParagraphMedium2>
					</DataTransferenceGroup>

					{/* enviado por (en destino) */}
					<DataTransferenceGroup>
						<ParagraphMedium3>
							{transfereceData.transferenceTypeString}
						</ParagraphMedium3>
						<DataTransferenceSubGroup>
							<ParagraphSemibold2>
								{!transfereceData.disableOriginAccount
									? currency.currencyText
									: `${nameInDetailsTransf} ${lastNameInDetailsTransf}`}
							</ParagraphSemibold2>
							<ParagraphMedium3>{transference.origin}</ParagraphMedium3>
						</DataTransferenceSubGroup>
					</DataTransferenceGroup>

					{!transfereceData.disableOriginAccount && (
						<DataTransferenceGroup>
							<ParagraphMedium3>Cuenta de destino</ParagraphMedium3>
							<DataTransferenceSubGroup>
								<ParagraphSemibold2>
									{nameInDetailsTransf} {lastNameInDetailsTransf}
								</ParagraphSemibold2>
								<ParagraphMedium3>{transference.destiny}</ParagraphMedium3>
							</DataTransferenceSubGroup>
						</DataTransferenceGroup>
					)}

					<DataTransferenceGroup>
						<ParagraphMedium3>{transfereceData.moneyString}</ParagraphMedium3>
						<ParagraphSemibold2>
							{currency.currencySymbol}
							{transference.amount}
						</ParagraphSemibold2>
					</DataTransferenceGroup>
				</TransferenceDetailContainer>
			)}
		</>
	);
};
