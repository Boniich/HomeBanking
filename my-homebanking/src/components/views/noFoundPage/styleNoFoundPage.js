import styled from 'styled-components';
import { Button } from '../../../theme/buttons/buttons';
import { neutralColor } from '../../../theme/colors/colors';
import { ParagraphSemibold2 } from '../../../theme/paragraph/paragraph';

const NoFoundPageContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;

const NoFoundPageContent = styled.div`
	width: 252px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media screen and (min-width: 744px) {
		width: 404px;
		gap: 48px;
	}
`;

const Heading = styled.h1`
	font-size: 80px;
	font-weight: 800;
	line-height: 97px;
	color: ${neutralColor.neutral400};

	@media screen and (min-width: 744px) {
		font-size: 150px;
		line-height: 182px;
	}
`;

const NoFoundPageTexts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	text-align: center;
	${ParagraphSemibold2} {
		color: ${neutralColor.neutral800};
	}

	@media screen and (min-width: 744px) {
		gap: 16px;
		${ParagraphSemibold2} {
			font-size: 24px;
			line-height: 31px;
			letter-spacing: -0.01em;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ComeBackToSite = styled(Button)`
	width: 198px;
	padding: 0;
`;

const InsideButtonContent = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

export {
	NoFoundPageContainer,
	NoFoundPageContent,
	NoFoundPageTexts,
	Heading,
	ComeBackToSite,
	ButtonContainer,
	InsideButtonContent,
};
