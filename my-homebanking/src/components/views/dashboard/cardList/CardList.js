import React from 'react';
import {
	ParagraphMedium2,
	ParagraphSemibold2,
	ParagraphUnderline2,
} from '../../../../theme/paragraph/paragraph';
import {
	Card,
	CardContentContainer,
	CardIcon,
	CardSection,
	TitleCardSection,
} from './styleCardList';
import visaCard from '../../../../assets/visacard.svg';
import maestroCard from '../../../../assets/maestrocard.svg';

export const CardList = () => {
	const showAlert = () => window.alert('No disponible');

	return (
		<CardSection>
			<TitleCardSection>
				<ParagraphSemibold2>Tarjetas Afiliadas</ParagraphSemibold2>
				<ParagraphUnderline2 onClick={showAlert}>Ver todo</ParagraphUnderline2>
			</TitleCardSection>
			<CardContentContainer>
				<Card onClick={showAlert}>
					<CardIcon src={visaCard} />
					<ParagraphMedium2>Termina en 5546</ParagraphMedium2>
				</Card>
				<Card onClick={showAlert}>
					<CardIcon padding='0px 5px' src={maestroCard} />
					<ParagraphMedium2>Termina en 6001</ParagraphMedium2>
				</Card>
				<Card onClick={showAlert}>
					<CardIcon src={visaCard} />
					<ParagraphMedium2>Termina en 4545</ParagraphMedium2>
				</Card>
			</CardContentContainer>
		</CardSection>
	);
};
