import styled from 'styled-components';
import { errorColor } from '../../../../../theme/colors/colors';
import { ParagraphMedium2 } from '../../../../../theme/paragraph/paragraph';

export const NotHaveOtherActiveAccMsg = styled.span`
	display: flex;
	padding: 16px;
	background: ${errorColor.error50};
	border: 1px solid ${errorColor.error200};
	border-radius: 8px;

	${ParagraphMedium2} {
		color: ${errorColor.error600};
		width: 280px;
	}

	@media screen and (min-width: 744px) {
		${ParagraphMedium2} {
			width: 372px;
		}
	}
`;
