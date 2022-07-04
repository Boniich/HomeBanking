import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	ParagraphMedium2,
	ParagraphSemibold2,
	ParagraphUnderline2,
} from '../../../../../theme/paragraph/paragraph';
import { DetailsTransferencePopup } from '../../../../common/popup/detailsTransferencePopop/DetailsTransferencePopup';
import { Popup } from '../../../../common/popup/Popup';
import TransferenceCardView from '../transference/TransferenceCardView';
import {
	AllActivityBox,
	CardTransfContainer,
	LoadMoreResultContainer,
	RenderActivity,
	ActivityTitleSection,
} from './styleExistsActivity';

export const ExistsActivity = ({ transferenceData }) => {
	const [showAllTransferences, setShowAllTransferences] = useState(false);
	const [showMoreResults, setShowMoreResults] = useState(10);
	const location = useLocation();
	const ref = React.createRef();

	const renderMoreResults = () => {
		showMoreResults < transferenceData.length &&
			setShowMoreResults(showMoreResults + 3);
	};

	useEffect(() => {
		location.pathname === '/transference' && setShowAllTransferences(true);
	}, []);

	const lessPaddingBotton = !showAllTransferences ? '' : '32px';

	return (
		<RenderActivity paddingBotton={lessPaddingBotton}>
			{!showAllTransferences && (
				<ActivityTitleSection>
					<ParagraphMedium2>Actividad Reciente</ParagraphMedium2>
				</ActivityTitleSection>
			)}
			<CardTransfContainer>
				{transferenceData.map((transference, index) => (
					<Popup
						key={index}
						showHeader={true}
						closeIcon={true}
						height='auto'
						headerText='Detalle de transferencia'
						action={
							index <= showMoreResults && (
								<TransferenceCardView
									ref={ref}
									amount={transference.amount}
									motive={transference.motive}
									date={transference.date}
									destiny={transference.destiny}
									baseIso={transference.exchangeInfo.baseIso}
									objectiveIso={transference.exchangeInfo.objectiveIso}
								/>
							)
						}
					>
						<DetailsTransferencePopup transference={transference} />
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
						<ParagraphSemibold2 onClick={renderMoreResults}>
							Cargar mas resultados
						</ParagraphSemibold2>
					</LoadMoreResultContainer>
				)}
			</AllActivityBox>
		</RenderActivity>
	);
};
