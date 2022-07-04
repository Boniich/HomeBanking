import styled from 'styled-components';
import { errorColor } from '../../../../../../theme/colors/colors';
import { ParagraphMedium3 } from '../../../../../../theme/paragraph/paragraph';

export const MsgErrorContainer = styled.span`
	margin-top: 15px;
	${ParagraphMedium3} {
		color: ${errorColor.error600} !important;
	}
`;
