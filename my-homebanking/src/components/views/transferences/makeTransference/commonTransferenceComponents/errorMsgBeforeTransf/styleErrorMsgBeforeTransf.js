import styled from 'styled-components';
import { errorColor } from '../../../../../../theme/colors/colors';
import { ParagraphMedium3 } from '../../../../../../theme/paragraph/paragraph';

export const MsgErrorContainer = styled.span.attrs(props => ({
	thereIsMargin: props.thereIsMargin ? '15px' : '0',
}))`
	margin-top: ${props => props.thereIsMargin};
	${ParagraphMedium3} {
		color: ${errorColor.error600} !important;
	}
`;
