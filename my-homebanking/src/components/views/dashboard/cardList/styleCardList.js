import styled from 'styled-components';
import { neutralColor, primaryColor } from '../../../../theme/colors/colors';
import {
	ParagraphMedium2,
	ParagraphSemibold2,
	ParagraphUnderline2,
} from '../../../../theme/paragraph/paragraph';

const CardSection = styled.section`
	width: 413px;
	display: none;

	@media screen and (min-width: 1512px) {
		display: block;
	}
`;

const TitleCardSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;

	${ParagraphSemibold2} {
		color: ${neutralColor.neutral600};
	}

	${ParagraphUnderline2} {
		color: ${primaryColor.primary600};
	}
`;

const CardContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Card = styled.div`
	/* original height: 65px - 20 padding (top/bottom) = 25px*/
	height: 25px;
	background: ${neutralColor.neutral100};
	border: 1px solid ${neutralColor.neutral300};
	border-radius: 8px;
	padding: 20px;
	display: flex;
	align-items: center;
	gap: 12px;

	${ParagraphMedium2} {
		color: ${neutralColor.neutral700};
	}

	:hover {
		background: ${neutralColor.neutral200};
	}
`;

const CardIcon = styled.img`
	height: 37px;
`;

export { CardSection, TitleCardSection, CardContentContainer, Card, CardIcon };
