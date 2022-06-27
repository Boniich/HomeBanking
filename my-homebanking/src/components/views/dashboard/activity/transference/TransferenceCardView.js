import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { handleCurrency } from '../../../../../services/commonFunctions/handleCurrency/handleCurrency';
import { Hr } from '../../../../../theme/hr/hr';
import {
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../../theme/paragraph/paragraph';
import {
	FigureTransf,
	Transf,
	TransferenceAmount,
	TransfInfo,
} from './styleTransferenceCardView';

const TransferenceCardView = React.forwardRef(
	({ amount, motive, destiny, date, baseIso, objectiveIso, ...prop }, ref) => {
		const [amountStatus, setAmountStatus] = useState({
			sameCci: false,
			Symbol: '',
		});

		const [currency, setCurrency] = useState({
			currencyText: '',
			currencySymbol: '',
		});

		const { cci } = useContext(AccountContext);
		const humanDate = new Date(date).toLocaleDateString();
		const originCurrencySymbol = handleCurrency(baseIso);
		const destinyCurrencySymbol = handleCurrency(objectiveIso);
		const accNumber = sessionStorage.getItem("accNumber");
		useEffect(() => {
			if (cci === destiny) {
				setAmountStatus({ sameCci: true, Symbol: '+' });
				setCurrency({
					currencyText: destinyCurrencySymbol.currencyText,
					currencySymbol: destinyCurrencySymbol.currencySymbol,
				});
			} else {
				setAmountStatus({ Symbol: '-' });
				setCurrency({
					currencyText: originCurrencySymbol.currencyText,
					currencySymbol: originCurrencySymbol.currencySymbol,
				});
			}
		}, [accNumber]);

		return (
			<Transf ref={ref} {...prop}>
				<FigureTransf>
					<TransfInfo>
						<ParagraphSemibold2>{motive}</ParagraphSemibold2>
						<ParagraphMedium3>{humanDate}</ParagraphMedium3>
					</TransfInfo>
					<TransferenceAmount amountColor={amountStatus.sameCci && true}>
						{amountStatus.Symbol}
						{currency.currencySymbol}
						{amount}
					</TransferenceAmount>
				</FigureTransf>
				<div>
					<Hr />
				</div>
			</Transf>
		);
	}
);

export default TransferenceCardView;
