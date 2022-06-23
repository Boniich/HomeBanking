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
	return (
		<CardSection>
			<TitleCardSection>
				<ParagraphSemibold2>Tarjetas Afiliadas</ParagraphSemibold2>
				<ParagraphUnderline2>Ver todo</ParagraphUnderline2>
			</TitleCardSection>
			<CardContentContainer>
				<Card>
					<CardIcon src={visaCard} />
					<ParagraphMedium2>Termina en 5546</ParagraphMedium2>
				</Card>
				<Card>
					<CardIcon src={maestroCard} />
					<ParagraphMedium2>Termina en 5546</ParagraphMedium2>
				</Card>
				<Card>
					<CardIcon src={visaCard} />
					<ParagraphMedium2>Termina en 5546</ParagraphMedium2>
				</Card>
			</CardContentContainer>
		</CardSection>
	);
};
