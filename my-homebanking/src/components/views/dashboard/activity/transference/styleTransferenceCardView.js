import styled from 'styled-components';
import {
	errorColor,
	neutralColor,
	successColor,
} from '../../../../../theme/colors/colors';
import {
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../../theme/paragraph/paragraph';

const FigureTransf = styled.figure`
	margin: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
	cursor: pointer;
	border-bottom: 1px solid ${neutralColor.neutral200};
`;

const TransfInfo = styled.div`
	${ParagraphSemibold2} {
		margin-bottom: 4px;
		color: ${neutralColor.neutral800};
	}

	${ParagraphMedium3} {
		color: ${neutralColor.neutral500};
	}
`;

const Transf = styled.div``;

const TransferenceAmount = styled(ParagraphSemibold2).attrs(props => ({
	amountColor:
		props.amountColor === true
			? `${successColor.success600}`
			: `${errorColor.error600}`,
}))`
	color: ${props => props.amountColor};
`;

export { TransfInfo, FigureTransf, Transf, TransferenceAmount };
