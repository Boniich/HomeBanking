import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AccountContext from "../../../../context/accountContext/AccountContext";
import { transformDateToHumanDate } from "../../../../services/commonFunctions/getDate/getDate";
import { handleCurrency } from "../../../../services/commonFunctions/handleCurrency/handleCurrency";
import { ParagraphMedium2, ParagraphMedium3, ParagraphSemibold2 } from "../../../../theme/paragraph/paragraph";

const TransferenceDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 23px;
`;

const DataTransferenceGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const DataTransferenceSubGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const DetailsTransferencePopup = ({transference}) =>{
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
	const [dni, setDni] = useState('');
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const destinyCurrencySymbol = handleCurrency(transference.objectiveIso);
	const { cci } = useContext(AccountContext);
	const originCciCode = transference.origin;
	const destinyCciCode = transference.destiny;
	const token = sessionStorage.getItem('token');

	const url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FIND_ACCOUNT_ENDPOINT}`;

    const bringAccountToDetailsTransf = async (cciCode) => {
		console.log(cci);
		try {
			const response = await axios.post(
				url,
				{
					cciCode,
				},
				{
					headers: {
						token,
					},
				}
			);

			console.log("origin account: ",response);
			setDni(response.data.owner);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (cci === transference.destiny) {
            // we show that user that send the money
            bringAccountToDetailsTransf(originCciCode);
		} else {
            bringAccountToDetailsTransf(destinyCciCode);
		}
	}, []);

	const dataUserUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_FIND_ENDPOINT}`;

    const showUserNameInTransf = async () => {
		try {
			const response = await axios.post(
				dataUserUrl,
				{
					dni,
				},
				{
					headers: {
						token,
					},
				}
			);
			console.log('data user', response.data);
			const userName = response.data.name;
			const lastName = response.data.surname;
			setName(userName);
			setLastName(lastName);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (dni !== '') {
			if (cci === transference.destiny) {
				console.log('destiny');
                showUserNameInTransf()
			} else {
                console.log('origin');
                showUserNameInTransf()
			}
		}
	}, [dni]);

	useEffect(() => {
		if (transference.destiny === cci) {
			console.log('es el de destino');
			setTransferenceData({
				disableOriginAccount: true,
				transferenceTypeString: 'Enviado por',
				moneyString: 'Dinero recibido',
			});
			setCurrency({
				currencySymbol: destinyCurrencySymbol.currencySymbol,
			});
		} else {
			console.log('no es el de destino');
			setCurrency({
				currencyText: originCurrencySymbol.currencyText,
				currencySymbol: originCurrencySymbol.currencySymbol,
			});
		}
	}, []);

	return (
		<TransferenceDetailContainer>
			<DataTransferenceGroup>
				<ParagraphMedium3>Fecha</ParagraphMedium3>
				<ParagraphMedium2>{transformDateToHumanDate(transference.date)}</ParagraphMedium2>
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
							: `${name} ${lastName}`}
					</ParagraphSemibold2>
					<ParagraphMedium3>{transference.origin}</ParagraphMedium3>
				</DataTransferenceSubGroup>
			</DataTransferenceGroup>

			{!transfereceData.disableOriginAccount && (
				<DataTransferenceGroup>
					<ParagraphMedium3>Cuenta de destino</ParagraphMedium3>
					<DataTransferenceSubGroup>
						<ParagraphSemibold2>
							{name} {lastName}
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
	);
}