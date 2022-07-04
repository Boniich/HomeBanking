import styled from 'styled-components';
import { neutralColor, primaryColor } from '../../../../../theme/colors/colors';
import {
	ParagraphMedium2,
	ParagraphSemibold2,
	ParagraphUnderline2,
} from '../../../../../theme/paragraph/paragraph';

const RenderActivity = styled.div`
	padding: 24px 24px 40px;

	@media screen and (min-width: 744px) {
		padding: 32px 32px 40px;
	}

	@media screen and (min-width: 1512px) {
		padding-bottom: ${props => props.paddingBotton};
	}
`;

const ActivityTitleSection = styled.span`
	${ParagraphMedium2} {
		color: ${neutralColor.neutral600};
	}
`;

const CardTransfContainer = styled.div`
	margin: 8px 0;
	display: flex;
	flex-direction: column;
`;

const AllActivityBox = styled.div`
	margin-top: 32px;

	${ParagraphUnderline2} {
		color: ${primaryColor.primary600};
		font-weight: 400;
	}
`;

const LoadMoreResultContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px 0;

	${ParagraphSemibold2} {
		color: ${primaryColor.primary600};
		cursor: pointer;
	}
`;

export {
	RenderActivity,
	CardTransfContainer,
	AllActivityBox,
	LoadMoreResultContainer,
	ActivityTitleSection,
};
