import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AccountContext from '../../../../../context/accountContext/AccountContext';
import { handleCurrency } from '../../../../../services/commonFunctions/handleCurrency/handleCurrency';
import {
	ParagraphMedium2,
	ParagraphMedium3,
	ParagraphSemibold2,
	ParagraphUnderline2,
} from '../../../../../theme/paragraph/paragraph';
import { Popup } from '../../../../common/popup/Popup';
import TransferenceCardView from '../transference/TransferenceCardView';
import {
	AllActivityBox,
	CardTransfContainer,
	LoadMoreResultContainer,
	RenderActivity,
} from './styleExistsActivity';

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

export const giveDate = date => {
	const newDate = new Date(date).toLocaleDateString();

	return newDate;
};

export const giveTypeCurrency = currency => {
	const type = handleCurrency(currency);

	console.log(type.currencyText);

	return type.currencyText;
};

export const Data = ({ transference }) => {
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
	const bringOriginAccount = async () => {
		console.log(cci);
		try {
			const response = await axios.post(
				url,
				{
					cciCode: originCciCode,
				},
				{
					headers: {
						token,
					},
				}
			);

			console.log(response);
			setDni(response.data.owner);
		} catch (error) {
			console.log(error);
		}
	};

	const bringDestinyAccount = async () => {
		console.log(cci);
		try {
			const response = await axios.post(
				url,
				{
					cciCode: destinyCciCode,
				},
				{
					headers: {
						token,
					},
				}
			);

			console.log(response);
			setDni(response.data.owner);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (cci === transference.destiny) {
			bringOriginAccount();
		} else {
			bringDestinyAccount();
		}
	}, []);

	const dataUserUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_USER_FIND_ENDPOINT}`;
	const renderOriginUser = async () => {
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

	const renderDestinyUser = async () => {
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
		if (dni !== null) {
			if (cci === transference.destiny) {
				console.log('destiny');
				renderOriginUser();
			} else {
				renderDestinyUser();
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
				<ParagraphMedium2>{giveDate(transference.date)}</ParagraphMedium2>
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
};

export const ExistsActivity = ({ transferenceData }) => {
	const [showAllTransferences, setShowAllTransferences] = useState(false);
	const location = useLocation();
	const ref = React.createRef();

	useEffect(() => {
		location.pathname === '/transference' && setShowAllTransferences(true);
	}, []);

	const lessPaddingBotton = !showAllTransferences ? '' : '32px';

	return (
		<RenderActivity paddingBotton={lessPaddingBotton}>
			{!showAllTransferences && (
				<ParagraphMedium2>Actividad Reciente</ParagraphMedium2>
			)}
			<CardTransfContainer>
				{transferenceData.map((transference, index) => (
					<Popup
						key={transference._id}
						showHeader={true}
						closeIcon={true}
						headerText='Detalle de transferencia'
						action={
							<TransferenceCardView
								ref={ref}
								amount={transference.amount}
								motive={transference.motive}
								date={transference.date}
								destiny={transference.destiny}
								baseIso={transference.exchangeInfo.baseIso}
								objectiveIso={transference.exchangeInfo.objectiveIso}
							/>
						}
					>
						<Data transference={transference} />
					</Popup>
				))}
			</CardTransfContainer>
			<AllActivityBox>
				{!showAllTransferences ? (
					<Link to='/transference'>
						<ParagraphUnderline2>Ver toda la actividad</ParagraphUnderline2>
					</Link>
				) : (
					<LoadMoreResultContainer>
						<ParagraphSemibold2>Cargar mas resultados</ParagraphSemibold2>
					</LoadMoreResultContainer>
				)}
			</AllActivityBox>
		</RenderActivity>
	);
};
