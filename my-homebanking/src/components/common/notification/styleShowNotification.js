import styled from 'styled-components';
import {
	ParagraphMedium3,
	ParagraphSemibold3,
} from '../../../theme/paragraph/paragraph';
import { CloseIcon } from '../../../theme/styledIcon/styledIcon';

const NotificationContainer = styled.div.attrs(props => ({
	removeCenterItems: props.removeCenterItems ? 'flex-start' : 'center',
}))`
	width: 270px;
	display: flex;
	justify-content: space-between;
	align-items: ${props => props.removeCenterItems};
	${ParagraphSemibold3} {
		color: ${props => props.color} !important;
		cursor: default;
	}

	${ParagraphMedium3} {
		color: ${props => props.color};
		cursor: default;
	}

	@media screen and (min-width: 740px) {
		width: 420px;
	}
`;

const NotificationIconAndText = styled.span.attrs(props => ({
	removeCenterItems: props.removeCenterItems ? 'flex-start' : 'center',
}))`
	display: flex;
	align-items: ${props => props.removeCenterItems};
	gap: 13.67px;
`;

const NotificationTexts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const CloseIconNotification = styled(CloseIcon).attrs(props => ({
	needpadding: props.needPadding ? '4px' : '',
}))`
	width: 16px;
	height: 16px;
	color: ${props => props.color};
	cursor: pointer;

	@media screen and (min-width: 744px) {
		padding: ${props => props.needpadding};
	}
`;

const InfoIconNotification = styled(CloseIconNotification).attrs(props => ({
	needpadding: props.needpadding ? '4px' : '',
}))`
	width: 20px;
	height: 20px;
	color: ${props => props.color};
	cursor: default;

	@media screen and (min-width: 744px) {
		padding: ${props => props.needpadding};
	}
`;

export {
	NotificationContainer,
	NotificationIconAndText,
	InfoIconNotification,
	CloseIconNotification,
	NotificationTexts,
};
